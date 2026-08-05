// 生成游戏封面占位图（SVG）—— 按平台配色 + 游戏名。
// 运行：node scripts/gen-covers.mjs
// 以后 deals.json 增加新游戏，重跑本脚本即可。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dealsPath = path.join(root, 'src', 'data', 'deals.json');
const outDir = path.join(root, 'public', 'covers');
fs.mkdirSync(outDir, { recursive: true });

const raw = JSON.parse(fs.readFileSync(dealsPath, 'utf8'));
const deals = raw.deals || [];

function platformColor(platform) {
  const p = (platform || '').toLowerCase();
  if (p.includes('switch')) return ['#e60012', '#9e000c']; // Nintendo red
  if (p.includes('ps5') || p.includes('playstation')) return ['#2b7fe0', '#103a6e']; // PlayStation blue
  if (p.includes('xbox')) return ['#16a34a', '#0a4d22']; // Xbox green
  return ['#7c3aed', '#3b0d6b']; // cross-platform purple
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function wrapTitle(title, maxChars) {
  const words = title.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    const candidate = (cur + ' ' + w).trim();
    if (candidate.length > maxChars && cur) {
      lines.push(cur.trim());
      cur = w;
    } else {
      cur = candidate;
    }
  }
  if (cur) lines.push(cur.trim());
  return lines;
}

let count = 0;
for (const d of deals) {
  const [c1, c2] = platformColor(d.platform);
  const lines = wrapTitle(d.title, 18);
  const fontSize = lines.length > 3 ? 24 : 30;
  const lineHeight = fontSize * 1.18;
  const blockHeight = lines.length * lineHeight;
  const startY = 400 / 2 - blockHeight / 2 + fontSize * 0.35;
  const tspan = lines
    .map((ln, i) => `<tspan x="150" y="${(startY + i * lineHeight).toFixed(1)}">${escapeXml(ln)}</tspan>`)
    .join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400" viewBox="0 0 300 400" role="img" aria-label="${escapeXml(d.title)}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="300" height="400" fill="url(#g)"/>
  <rect width="300" height="400" fill="#000000" opacity="0.10"/>
  <circle cx="245" cy="55" r="42" fill="#ffffff" opacity="0.10"/>
  <text x="150" y="58" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="#ffffff" opacity="0.9" letter-spacing="2">${(d.platform || '').toUpperCase()}</text>
  <text text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="${fontSize}" fill="#ffffff">${tspan}</text>
  <text x="150" y="372" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="12" fill="#ffffff" opacity="0.72" letter-spacing="1">CONSOLEDEALS</text>
</svg>`;
  fs.writeFileSync(path.join(outDir, `${d.id}.svg`), svg, 'utf8');
  count++;
}
console.log(`Generated ${count} covers into public/covers/`);
