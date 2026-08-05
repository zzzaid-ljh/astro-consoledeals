# GameDealsHub —— 低成本 Astro 静态游戏折扣联盟站

零成本试水用的多联盟游戏折扣站骨架。技术栈 **Astro 静态站**，托管可白嫖
（Cloudflare Pages / Netlify / GitHub Pages），站点不住你机器上，本地只跑开发。

> 与公众号 / 训练营无关，纯试水拿佣金。

## 目录结构
```
GameDealsSite/
├─ package.json            # 依赖与脚本
├─ astro.config.mjs        # 部署前改 site 为你的域名
├─ tsconfig.json
├─ src/
│  ├─ config.ts            # ★ 联盟 ID 集中配置（只改这一个文件）
│  ├─ data/deals.json      # ★ 每周手动策展的 deal 列表
│  ├─ components/
│  │  ├─ AffiliateLink.astro  # ★ 统一拼接联盟追踪链接
│  │  ├─ DealCard.astro       # 优惠卡片
│  │  ├─ Header.astro / Footer.astro
│  ├─ layouts/BaseLayout.astro
│  ├─ pages/               # 页面：index / about / privacy / games
│  └─ styles/global.css
└─ public/favicon.svg
```

## 本地运行
```bash
cd GameDealsSite
npm install          # 首次安装依赖（node_modules 已迁移到 D 盘 junction）
npm run dev          # 本地预览，默认 http://localhost:4321
npm run build        # 生成静态站到 ./dist
```

> node_modules 通过目录 junction 指向 D 盘，C 盘只留轻量源码，不占系统盘空间。

## 三处关键文件（你运营时要动的）
1. **`src/config.ts`** —— 把 `amazon/gmg/humble/fanatical` 的 `id` 换成你申请到的
   联盟 ID，并把对应 `enabled` 改为 `true`。链接拼接格式拿到官方后替换 `build()`。
2. **`src/data/deals.json`** —— 每周往 `deals` 数组加 10–20 个真降价条目。
   字段：`title / platform / network / storeUrl / ourPrice / regularPrice /
   savings / note / lastChecked`。**价格会变动，页面已注明 verify on store，
   不要手标死价格**（Amazon 政策要求）。
3. **`src/components/AffiliateLink.astro`** —— 全站所有联盟链接都走它，
   自动加 `rel="nofollow noopener sponsored"`，合规且统一。

## 联盟申请顺序（无门槛先申）
1. **Humble Bundle**（Impact，最容易过）→ 2. **Green Man Gaming** →
3. **Fanatical**（三家都无流量门槛，1–2 天过）→ 4. **Amazon Associates**
   （等有稳定流量再申，避开 180 天 3 单封号线）→ 5. **Google AdSense**
   （有 10 篇原创就能挂，前半年别指望广告收入）。

## 部署（免费）
推到 GitHub 私有/公开仓 → Cloudflare Pages / Netlify 连仓库 →
build 命令 `npm run build`、输出目录 `dist`。零服务器费。

## 合规三件套（上线前备好）
- 页脚 FTC 声明（本模板 `Footer.astro` 已内置）
- `privacy.astro` 隐私政策页（AdSense 审核要看）
- 不缩短联盟链接 / 邮件只链文章不链联盟 / 不手标价格

## 收入现实预期
前 6 个月大概率 $0–200/月，6–12 月可能 $200–1000/月，规模化后才稳。
纯副业试水，别为它影响本职。
