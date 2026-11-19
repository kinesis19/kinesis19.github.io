// 링크 미리보기용 대표 이미지(public/og.png, 1200x630)를 만듭니다.  사용법: npm run make-og
// 오른쪽 사진은 기존 프로젝트 이미지를 사용합니다. 다른 이미지를 쓰려면 PHOTO 경로만 바꾸세요.
import sharp from 'sharp';
import fs from 'node:fs';

sharp.cache(false);
const W = 1200, H = 630;
const PHOTO = 'public/images/airship-world-overview.webp';

// 오른쪽 사진을 사선으로 잘라 붙입니다.
const photoW = 560;
const photo = await sharp(fs.readFileSync(PHOTO)).resize(photoW, H, { fit: 'cover', position: 'centre' }).modulate({ saturation: 0.85, brightness: 0.95 }).png().toBuffer();
const mask = Buffer.from(`<svg width="${photoW}" height="${H}"><polygon points="170,0 ${photoW},0 ${photoW},${H} 0,${H}" fill="#fff"/></svg>`);
const photoMasked = await sharp(photo).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();

const bg = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#0a0a0b"/>
</svg>`);

const slashX = W - photoW; // 사진 왼쪽 시작점
const overlay = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <polygon points="${slashX + 170 - 26},0 ${slashX + 170},0 ${slashX},${H} ${slashX - 26},${H}" fill="#e0001b"/>
  <text x="70" y="250" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="24" letter-spacing="4" fill="#e0001b">ROBOTICS &amp; EMBEDDED ENGINEER</text>
  <text x="66" y="380" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="112" letter-spacing="-3" fill="#ffffff">KINESIS</text>
  <text x="70" y="445" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="30" fill="#a1a1aa">portfolio.kashic.dev</text>
  <polygon points="72,492 192,492 184,500 64,500" fill="#e0001b"/>
</svg>`);

await sharp(bg)
  .composite([
    { input: photoMasked, left: slashX, top: 0 },
    { input: overlay, left: 0, top: 0 },
  ])
  .png({ compressionLevel: 9, palette: true })
  .toFile('public/og.png');
console.log('public/og.png created');
