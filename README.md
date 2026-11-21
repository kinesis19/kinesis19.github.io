# Kinesis Portfolio

`portfolio.kashic.dev` 에 배포되는 포트폴리오 & 블로그입니다.
**Astro 5 · Tailwind CSS v4 · Pretendard · GitHub Pages (GitHub Actions)**

한국어(`/`)와 영어(`/en/`)를 지원하며, 상단의 `EN` / `KO` 버튼으로 전환합니다.

---

## 1. 텍스트만 고치고 싶을 때 (코드는 건드리지 않아도 됩니다)

| 고치고 싶은 것 | 파일 |
|---|---|
| 히어로 문구, 자기소개, 영역 설명, 버튼/라벨, 프로젝트 섹션 안내 문구, 연락처 문구, 푸터, **SEO 제목·설명** | `src/i18n/ko.ts` (한국어), `src/i18n/en.ts` (영어) |
| GitHub / LinkedIn / 이메일 / 이력서 PDF / 프로필 사진 / 위치 / Open to work / 대표 기술 칩 | `src/data/profile.ts` |
| 프로젝트 내용 | `src/content/projects/ko/*.md`, `src/content/projects/en/*.md` |
| 저널(블로그) 글 | `src/content/journal/ko/*.md`, `src/content/journal/en/*.md` |
| ACTIVITY 섹션(수상, 타임라인, 기록 통계) | 데이터 `src/data/activity.ts`, 문구 `src/i18n/ko.ts`·`en.ts` 의 `activity` |

- `src/i18n/*.ts` 안의 `{n}`, `{a}`, `{b}` 는 숫자가 들어가는 자리이니 그대로 두세요.
- 소개 문장(`profile.lead`)에는 `<b>굵게</b>` 를 쓸 수 있습니다.
- `src/data/profile.ts` 의 값이 빈 문자열(`''`)이면 해당 배지/버튼/행은 **자동으로 숨겨집니다.**
  - 값을 채우면 바로 나타나고, 비우면 사라집니다. (예: 이력서 PDF 가 준비되기 전까지는 `resume` 을 비워 두세요.)
  - 사진: `public/images/profile.webp` 로 파일을 넣고 `photo: '/images/profile.webp'` 로 지정하세요.
  - 이력서: `public/resume.pdf` 로 넣고 `resume: '/resume.pdf'` 로 지정하세요.

> **확인이 필요한 문구:** 히어로 문구("코드를 현실의 움직임으로"), 직함(Robotics & Embedded Engineer),
> 영역별 설명, 영역별 기술 칩, `since: 2018` 은 초안으로 넣어 둔 값입니다. 실제에 맞게 바꿔 주세요.

## 2. 프로젝트 추가하기

1. `src/content/projects/ko/새-프로젝트.md` 파일을 만듭니다. (파일 이름이 주소가 됩니다: `/projects/새-프로젝트/`)
2. 맨 위에 아래 형식의 정보를 적고, 그 아래에 본문을 마크다운으로 씁니다.

```md
---
title: "프로젝트 제목"
summary: "카드와 상세 상단에 보이는 한두 줄 요약"
date: 2026-03-01            # 정렬과 연도 표시에 사용
category: Robotics          # Robotics | Circuits | Communication | Software 중 하나
tags: ["ROS 2", "Nav2"]     # 기술 칩(아이콘 자동). 검색/필터에도 사용
role: "Software · Integration"   # 선택
team: "개인"                      # 선택
featured: true              # true 이면 홈 상단 '대표 프로젝트'(최대 3개)에 노출
image: "/images/thumb-xxx.webp"  # 썸네일. public/images/ 에 파일을 넣으세요 (선택)
links:                      # 선택: 상세 하단 버튼
  - label: "GitHub"
    url: "https://github.com/..."
---
## 본문 제목
내용을 마크다운으로 작성합니다. 이미지는 ![설명](/images/파일.webp) 로 넣습니다.
```

3. 영어 버전은 같은 파일 이름으로 `src/content/projects/en/` 에 만듭니다.
   **영어 파일이 없으면 영어 사이트에서도 한국어 원문이 표시**되고 "아직 번역되지 않았습니다" 안내가 붙습니다. (한국어 파일만 만들어도 사이트는 정상 동작합니다.)
4. 유튜브 영상은 기존 프로젝트 파일의 `<iframe …>` 블록을 복사해서 `src` 만 바꾸면 됩니다.

### 프로젝트가 많아지면
- 홈의 카테고리 탭은 항상 **대표(featured) → 최신순** 상위 5개를 bento로 보여 주고, 6개 이상이면 **"전체 N개 보기"** 가 나타나 검색 · 기술 태그 필터 · 정렬 · 더 보기(8개씩)를 제공합니다.
- 코드 수정 없이 파일만 추가하면 자동으로 반영됩니다.
- 카테고리에 프로젝트가 0개면 "곧 추가됩니다" 안내가 표시됩니다.

## 3. 저널(블로그) 글 쓰기

`src/content/journal/ko/글-주소.md` 를 만들고 아래 형식으로 시작합니다. (영어는 `en/` 에 같은 파일 이름)

```md
---
title: "글 제목"
summary: "목록에 보이는 한 줄 요약"
date: 2026-11-20
category: Robotics
tags: ["ROS 2"]
draft: false     # true 이면 사이트에 나타나지 않음 (임시 저장용)
---
본문…
```

`hello-world.md` 는 예시 글입니다. 수정하거나 삭제해서 사용하세요.

## 4. 새 기술 아이콘 추가

`tags` / `domains` 에 쓴 이름에 아이콘이 없으면 작은 점이 표시됩니다.
`src/lib/icons.ts` 의 `ICONS` 에 한 줄 추가하면 됩니다. (이름은 소문자로 비교하므로 `Nav2` 와 `nav2` 는 같습니다.)

## 4-1. 이미지 넣기와 용량 줄이기

- 이미지는 `public/images/` 에 넣고 글에서는 `/images/파일이름.webp` 로 가리킵니다.
- 영상은 `public/videos/` 에 넣고(용량은 한 파일 10MB 이하로 줄이세요), 글에서는 `<video controls muted playsinline preload="metadata" src="/videos/파일.mp4"></video>` 로 넣습니다.
- 새 이미지를 넣은 뒤 `npm run optimize-images` 를 실행하면 크기를 줄이고 압축합니다.
  (썸네일 `thumb-*` 는 가로 960px, 나머지는 1600px 이하. 이미 작은 파일은 건드리지 않습니다.)
- 링크 미리보기(카톡·슬랙·SNS)용 이미지는 `public/og.png` 입니다. 바꾸려면 `scripts/make-og.mjs` 의 `PHOTO` 경로를 고치고 `npm run make-og` 를 실행하세요.
  프로젝트 상세 페이지는 해당 프로젝트의 `image` 가 미리보기로 쓰입니다.
- 사이트맵(`/sitemap-index.xml`)과 `robots.txt` 는 빌드할 때 자동으로 만들어집니다.
  Google Search Console / 네이버 서치어드바이저에 사이트맵 주소를 등록하면 검색에 더 빨리 반영됩니다.

## 5. 로컬 실행

```bash
npm install
npm run dev        # http://localhost:4321  (저장하면 즉시 반영)
npm run build      # dist/ 로 정적 빌드
npm run preview    # 빌드 결과 확인
```

## 6. 배포

- `main` 브랜치에 push 하면 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드해서 GitHub Pages 로 자동 배포합니다.
- **최초 1회 설정**
  1. GitHub 저장소 → Settings → Pages → **Source: GitHub Actions** 로 선택
  2. 같은 화면의 Custom domain 에 `portfolio.kashic.dev` 입력, **Enforce HTTPS** 체크
  3. DNS(kashic.dev)에 `portfolio` **CNAME → `kinesis19.github.io`** 레코드 추가
- `public/CNAME` 파일이 커스텀 도메인을 유지합니다. 지우지 마세요.

### GitHub Actions 를 쓸 수 없을 때 (대체 배포)

계정 문제 등으로 Actions 가 실행되지 않으면, 내 컴퓨터에서 빌드해서 `gh-pages` 브랜치로 올릴 수 있습니다.

1. `npm run deploy` : 사이트를 빌드하고 결과물을 로컬 `gh-pages` 브랜치에 커밋합니다. (push 는 하지 않습니다)
   - `npm run deploy -- --dry` 는 빌드만 하고 어떤 파일이 올라갈지 보여 줍니다.
2. `git push origin gh-pages`
3. 처음 한 번만: Settings → Pages → **Source = Deploy from a branch**, Branch = `gh-pages` / `(root)`
   (Custom domain 은 그대로 `portfolio.kashic.dev`. `CNAME` 파일이 결과물에 포함되어 있습니다.)
4. 이후 수정할 때마다 `main` 에 커밋 → `npm run deploy` → `git push origin gh-pages`

Actions 가 다시 정상이 되면 Source 를 **GitHub Actions** 로 되돌리고 `gh-pages` 브랜치는 지워도 됩니다.

## 7. 폴더 구조

```
src/
  i18n/ko.ts, en.ts        화면 문구 (한국어/영어)
  data/profile.ts          링크·사진·이력서·기술 칩 등 프로필 정보
  data/activity.ts         ACTIVITY 섹션(수상, 타임라인, 기록 통계) 데이터
  content/projects/{ko,en} 프로젝트 마크다운
  content/journal/{ko,en}  저널 마크다운
  components/, layouts/    화면 구성 (Astro)
  scripts/home.ts          홈 인터랙션 (bento, 전체 보기, 상세 패널)
  styles/global.css        디자인(색상·레이아웃)
  pages/                   주소 구조 (/, /en/, /projects/…, /journal/…)
public/                    이미지, 영상(videos/), favicon, CNAME
```

색상은 `src/styles/global.css` 맨 위의 `:root` 변수(`--r` 이 포인트 레드)에서 바꿀 수 있습니다.
