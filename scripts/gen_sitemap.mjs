#!/usr/bin/env node
// 构建后生成 dist/sitemap.xml：扫描 dist/ 下所有 index.html，映射为站点 URL。
// 通过 npm run build（astro build && node scripts/gen_sitemap.mjs）自动执行。
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

let SITE = "https://consoledeals.cc.cd";
try {
  const cfg = await import("../astro.config.mjs");
  if (cfg.default && cfg.default.site) SITE = cfg.default.site;
} catch (e) {
  console.warn("[sitemap] 未能读取 astro.config.mjs，使用默认 SITE：", e.message);
}
SITE = SITE.replace(/\/$/, "");

const DIST = fileURLToPath(new URL("../dist", import.meta.url));

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, acc);
    else if (name === "index.html") acc.push(p);
  }
  return acc;
}

function urlFor(file) {
  let rel = relative(DIST, file).split(sep).join("/");
  rel = rel.replace(/index\.html$/, "");
  return rel === "" ? SITE + "/" : SITE + "/" + rel;
}

function priorityFor(u) {
  if (u === SITE + "/") return "1.0";
  if (u.endsWith("/games/")) return "0.8";
  if (u.endsWith("/weekly-deals/") || u.endsWith("/new-releases/")) return "0.7";
  if (u.includes("/games/")) return "0.6";
  return "0.5";
}

const files = walk(DIST);
const urls = files
  .map(urlFor)
  .map((u) => ({ u, priority: priorityFor(u) }))
  .sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(
      ({ u, priority }) =>
        `  <url><loc>${u}</loc><priority>${priority}</priority></url>`
    )
    .join("\n") +
  `\n</urlset>\n`;

writeFileSync(join(DIST, "sitemap.xml"), xml);
console.log(`[sitemap] 已生成 dist/sitemap.xml — ${urls.length} 个 URL`);
