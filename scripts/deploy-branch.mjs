// GitHub Actions 없이 배포하는 대체 방법: 사이트를 빌드해서 로컬 `gh-pages` 브랜치에 커밋합니다.
// 사용법: npm run deploy          (빌드 → gh-pages 브랜치에 커밋. push 는 직접 합니다)
//         npm run deploy -- --dry (빌드만 하고 어떤 파일이 올라갈지 확인)
// 이후:   git push origin gh-pages
// GitHub Pages 설정: Settings → Pages → Source = "Deploy from a branch" → gh-pages / (root)
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const dry = process.argv.includes('--dry');
const sh = (cmd, cwd) => execSync(cmd, { stdio: 'inherit', cwd });
const out = (cmd, cwd) => execSync(cmd, { encoding: 'utf8', cwd }).trim();

const root = out('git rev-parse --show-toplevel');
process.chdir(root);

if (out('git status --porcelain --untracked-files=no')) {
  console.warn('⚠️  커밋하지 않은 변경 사항이 있습니다. 배포 결과에는 지금 작업 폴더의 내용이 반영됩니다.');
}

sh('npm run build');
const dist = path.join(root, 'dist');
if (!fs.existsSync(path.join(dist, 'index.html'))) throw new Error('dist/index.html 이 없습니다. 빌드를 확인하세요.');
// 글 안의 작업용 `<!-- TODO ... -->` 주석은 배포본(HTML 소스)에서 제거합니다. 소스의 .md 에는 그대로 남습니다.
const stripTodo = (dir) => {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) stripTodo(p);
    else if (ent.name.endsWith('.html')) {
      const s = fs.readFileSync(p, 'utf8');
      const n = s.replace(/<!--\s*TODO[\s\S]*?-->/g, '');
      if (n !== s) fs.writeFileSync(p, n);
    }
  }
};
stripTodo(dist);
if (!fs.existsSync(path.join(dist, '.nojekyll'))) fs.writeFileSync(path.join(dist, '.nojekyll'), '');
console.log(`\n배포할 파일: ${fs.readdirSync(dist).join(', ')}`);
if (dry) { console.log('(--dry: 여기서 종료합니다. gh-pages 브랜치는 만들지 않았습니다.)'); process.exit(0); }

const sha = out('git rev-parse --short HEAD');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'gh-pages-'));
const exists = out('git branch --list gh-pages') !== '';
try {
  if (exists) {
    sh(`git worktree add "${tmp}" gh-pages`);
  } else {
    sh(`git worktree add --detach "${tmp}"`);
    sh('git checkout --orphan gh-pages', tmp);
  }
  // 이전 파일을 모두 지우고 새 빌드 결과로 교체 (임시 작업 폴더 안에서만 동작)
  sh('git rm -rf --quiet --ignore-unmatch .', tmp);
  for (const name of fs.readdirSync(tmp)) if (name !== '.git') fs.rmSync(path.join(tmp, name), { recursive: true, force: true });
  fs.cpSync(dist, tmp, { recursive: true });
  sh('git add -A', tmp);
  if (out('git status --porcelain', tmp) === '') {
    console.log('\n변경 사항이 없어서 새 커밋을 만들지 않았습니다.');
  } else {
    execSync(`git commit -q -m "🚀 사이트 배포 (${sha})"`, { cwd: tmp, stdio: 'inherit' });
    console.log('\n✅ gh-pages 브랜치에 커밋했습니다. 아래 명령으로 push 하세요:\n\n    git push origin gh-pages\n');
  }
} finally {
  execSync(`git worktree remove --force "${tmp}"`, { stdio: 'ignore' });
}
