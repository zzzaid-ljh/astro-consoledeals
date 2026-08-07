import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_DOuRIHWv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const AMAZON_TAG = "youramazontag-20";
const GMG_TAP_A = "YOUR_GMG_TAP_A";
const GMG_TAP_S = "YOUR_GMG_TAP_S";
const HUMBLE_PARTNER = "YOUR_HUMBLE_PARTNER_ID";
const FANATICAL_AFF = "YOUR_FANATICAL_AFF_ID";
const affiliates = {
  // ── Amazon Associates ────────────────────────────────────────────────
  // 标准做法：在商品 URL 后追加 ?tag=YOURTAG-20。
  // 但若链接本身是 amzn.to 官方短链（已内嵌你的追踪 ID）或已带 tag 参数，
  // 则原样透传，避免双重 tag / 短链失效。
  amazon: {
    label: "Amazon",
    enabled: true,
    build: (targetUrl) => {
      try {
        const u = new URL(targetUrl);
        if (u.hostname.endsWith("amzn.to")) return targetUrl;
        if (u.searchParams.has("tag")) return targetUrl;
        u.searchParams.set("tag", AMAZON_TAG);
        return u.toString();
      } catch {
        return targetUrl;
      }
    }
  },
  // ── Green Man Gaming（经 Tapfiliate）────────────────────────────────
  // 真实格式：https://www.greenmangaming.com/?tap_a=<A>&tap_s=<S>&tap_redirect=<编码后的目标URL>
  gmg: {
    label: "Green Man Gaming",
    enabled: false,
    build: (targetUrl) => `https://www.greenmangaming.com/?tap_a=${GMG_TAP_A}&tap_s=${GMG_TAP_S}&tap_redirect=${encodeURIComponent(targetUrl)}`
  },
  // ── Humble Bundle（经 Impact）───────────────────────────────────────
  // 真实格式：https://www.humblebundle.com/store/<slug>?partner=<ID>
  humble: {
    label: "Humble Bundle",
    enabled: false,
    build: (targetUrl) => `${targetUrl}${targetUrl.includes("?") ? "&" : "?"}partner=${HUMBLE_PARTNER}`
  },
  // ── Fanatical（经 Partnerize / 自有）────────────────────────────────
  // 常见格式：https://www.fanatical.com/<path>?affiliate=<ID>
  fanatical: {
    label: "Fanatical",
    enabled: false,
    build: (targetUrl) => `${targetUrl}${targetUrl.includes("?") ? "&" : "?"}affiliate=${FANATICAL_AFF}`
  }
};

const $$Astro = createAstro("https://consoledeals.cc.cd");
const $$AffiliateLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AffiliateLink;
  const { network, href, text, cta, class: className } = Astro2.props;
  const cfg = affiliates[network];
  if (!cfg) {
    throw new Error(`AffiliateLink: \u672A\u77E5\u8054\u76DF\u7F51\u7EDC "${network}"\uFF0C\u8BF7\u5728 src/config.ts \u4E2D\u5B9A\u4E49\u3002`);
  }
  if (!cfg.enabled) {
    console.warn(
      `[AffiliateLink] \u7F51\u7EDC "${network}" \u5C1A\u672A\u5F00\u901A (enabled=false)\u3002\u94FE\u63A5\u7167\u5E38\u8F93\u51FA\uFF0C\u4F46\u8BF7\u5C3D\u5FEB\u66FF\u6362\u4E3A\u4F60\u81EA\u5DF1\u7684\u8054\u76DF ID\u3002`
    );
  }
  const finalUrl = cfg.build(href);
  const linkText = text ?? cta ?? `\u5728 ${cfg.label} \u67E5\u770B`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(finalUrl, "href")} target="_blank" rel="nofollow noopener sponsored"${addAttribute(["aff-link", className], "class:list")} data-astro-cid-sivpnzya>${linkText}</a> `;
}, "C:/Users/LJH/Desktop/GameDealsSite/src/components/AffiliateLink.astro", void 0);

export { $$AffiliateLink as $ };
