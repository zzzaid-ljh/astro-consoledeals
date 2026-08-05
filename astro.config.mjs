import { defineConfig } from "astro/config";

// 部署前把 site 改成你的真实域名（影响 sitemap / 绝对链接）。
// 当前已设置为：https://consoledeals.cc.cd
export default defineConfig({
  site: "https://consoledeals.cc.cd",
  // 默认输出到 ./dist，可直接拖到 Cloudflare Pages / Netlify / GitHub Pages。
});
