// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// 글 안의 작업용 `<!-- TODO ... -->` 주석은 빌드 결과(HTML 소스)에서 제거합니다.
// 소스의 .md 파일에는 그대로 남고, 어떤 방식으로 배포해도(Actions, gh-pages) 적용됩니다.
const stripTodoComments = {
  name: 'strip-todo-comments',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const walk = (d) => {
        for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
          const p = path.join(d, ent.name);
          if (ent.isDirectory()) walk(p);
          else if (ent.name.endsWith('.html')) {
            const s = fs.readFileSync(p, 'utf8');
            const n = s.replace(/<!--\s*TODO[\s\S]*?-->/g, '');
            if (n !== s) fs.writeFileSync(p, n);
          }
        }
      };
      walk(fileURLToPath(dir));
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.kashic.dev',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // 언어별 페이지를 서로 연결(hreflang)해서 검색엔진에 알려 줍니다.
      i18n: { defaultLocale: 'ko', locales: { ko: 'ko-KR', en: 'en-US' } },
    }),
    stripTodoComments,
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
