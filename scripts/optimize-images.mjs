// public/images 의 이미지를 웹용으로 줄이고 압축합니다.  사용법: npm run optimize-images
//  - thumb-*.webp : 가로 최대 960px
//  - 그 외 .webp/.png/.jpg : 가로 최대 1600px
//  - 이미 작은 파일(120KB 미만, 가로가 기준 이하)은 건드리지 않습니다. (화질 열화 방지)
//  - 결과가 원본보다 작을 때만 덮어씁니다.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

sharp.cache(false);

const DIR = 'public/images';
const SKIP = new Set(['profile.jpg']); // 프로필 사진은 그대로 둡니다
let before = 0;
let after = 0;

for (const f of fs.readdirSync(DIR)) {
  if (SKIP.has(f) || !/\.(webp|png|jpe?g)$/i.test(f)) continue;
  const file = path.join(DIR, f);
  const size = fs.statSync(file).size;
  const input = fs.readFileSync(file); // 파일을 직접 열어 두면 Windows 에서 덮어쓰기가 막히므로 메모리로 읽습니다
  const meta = await sharp(input).metadata();
  const max = f.startsWith('thumb-') ? 960 : 1600;
  if ((meta.width ?? 0) <= max && size < 120 * 1024) { before += size; after += size; continue; }

  let img = sharp(input).rotate();
  if ((meta.width ?? 0) > max) img = img.resize({ width: max });
  const ext = path.extname(f).toLowerCase();
  const buf =
    ext === '.webp' ? await img.webp({ quality: 78, effort: 5 }).toBuffer()
    : ext === '.png' ? await img.png({ compressionLevel: 9, palette: true }).toBuffer()
    : await img.jpeg({ quality: 80, mozjpeg: true }).toBuffer();

  before += size;
  if (buf.length < size) {
    fs.writeFileSync(file, buf);
    after += buf.length;
    console.log(`${f}: ${(size / 1024) | 0}KB -> ${(buf.length / 1024) | 0}KB`);
  } else {
    after += size;
  }
}
console.log(`total: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`);
