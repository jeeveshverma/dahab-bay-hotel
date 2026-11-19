// Renders public/og-image.jpg (1200×630): the hammock at sunrise, darkened, with the name — what
// WhatsApp, X and Facebook show when the link is shared. Also the touch icons.   node scripts/og.mjs
import sharp from 'sharp';
const W = 1200, H = 630;
const photo = await sharp('src/assets/photos/beach-hammock.jpg').resize(W, H, { fit: 'cover', position: 'centre' }).modulate({ brightness: 0.78 }).toBuffer();
const mark = (c, sun) => `<g fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="50" r="46" stroke-width="1.8"/><path d="M10 56l18-26 12 14 10-12 14 16 8-8 18 16"/><path d="M18 68c8 0 8 5 16 5s8-5 16-5 8 5 16 5 8-5 16-5M28 82c7 0 7 4 14 4s7-4 14-4 7 4 14 4" stroke-width="2.2"/></g><circle cx="72" cy="30" r="7" fill="${sun}"/>`;
const overlay = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c2a38" stop-opacity=".1"/><stop offset="1" stop-color="#0c2a38" stop-opacity=".92"/></linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <g transform="translate(70 330) scale(1.3)">${mark('#6fd0cd', '#e2683c')}</g>
  <text x="226" y="420" font-family="Georgia, serif" font-weight="600" font-size="78" letter-spacing="5" fill="#f3eee4">DAHAB BAY HOTEL</text>
  <text x="230" y="466" font-family="Helvetica, Arial, sans-serif" font-size="22" letter-spacing="8" fill="#6fd0cd">BLUE HOLE ROAD · DAHAB · SOUTH SINAI</text>
  <text x="70" y="560" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#f3eee4">Between the mountains and the sea · private beach · reserve on WhatsApp</text>
</svg>`;
await sharp(photo).composite([{ input: Buffer.from(overlay) }]).jpeg({ quality: 86, mozjpeg: true }).toFile('public/og-image.jpg');
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#0c2a38"/><g transform="translate(10 10)">${mark('#6fd0cd', '#e2683c')}</g></svg>`;
await sharp(Buffer.from(icon)).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(Buffer.from(icon)).resize(512, 512).png().toFile('public/icon-512.png');
console.log('written');
