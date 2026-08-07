/**
 * ============================================================================
 *  联盟 ID 集中配置  ——  全站所有联盟追踪参数只改这一个文件。
 * ============================================================================
 *
 *  ✅ 你只需要改文件「顶部那 4 组常量」（申请通过后填）。
 *  ✅ 填完把对应网络的 enabled 改成 true。
 *  ✅ 下方 build 函数和接口一般不用动。
 *
 *  重要合规提醒（Amazon Associates）：
 *  - 不要手改价格、不要用短链（bit.ly 等）、邮件里只能链你的文章页不能直链联盟。
 *  - 每个含联盟链接的页面底部必须有 FTC 声明（本模板 Footer 已内置）。
 */

export type Network = "amazon" | "gmg" | "humble" | "fanatical";

// ===========================================================================
//  ⬇⬇⬇  你只需要改这里（申请通过后，把占位符换成你自己的值） ⬇⬇⬇
// ===========================================================================

// 1) Amazon Associates —— 你的追踪 Tag，形如 "youramazontag-20"
//    去哪拿：affiliate-program.amazon.com 注册通过后，后台「Account ID / Tracking ID」
const AMAZON_TAG = "youramazontag-20";

// 2) Green Man Gaming —— 后台给你的两个参数（基于 Tapfiliate）
//    去哪拿：GMG 联盟后台（Tapfiliate）生成的 tap_a 与 tap_s
const GMG_TAP_A = "YOUR_GMG_TAP_A";
const GMG_TAP_S = "YOUR_GMG_TAP_S";

// 3) Humble Bundle（经 Impact 平台）—— partner ID
//    去哪拿：Impact.com 后台 -> Humble Bundle 程序 -> 你的 Tracking / Partner ID
const HUMBLE_PARTNER = "YOUR_HUMBLE_PARTNER_ID";

// 4) Fanatical —— affiliate ID
//    去哪拿：Fanatical 联盟后台生成的 affiliate 参数值
const FANATICAL_AFF = "YOUR_FANATICAL_AFF_ID";

// ===========================================================================
//  ⬆⬆⬆  上面改完即可，下面不用动 ⬆⬆⬆
// ===========================================================================

export interface AffiliateConfig {
  /** 显示名（按钮 / 文案用） */
  label: string;
  /** 是否已开通。未开通时链接照常渲染，但建议开通后再公开上线。 */
  enabled: boolean;
  /**
   * 把「目标商品 / 落地页 URL」拼成带追踪参数的联盟链接。
   * 每个网络的拼接格式不同，下面是按各家官方格式实现的。
   */
  build: (targetUrl: string) => string;
}

export const affiliates: Record<Network, AffiliateConfig> = {
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
        if (u.hostname.endsWith("amzn.to")) return targetUrl; // 官方短链，已带追踪
        if (u.searchParams.has("tag")) return targetUrl; // 已含 tag，透传
        u.searchParams.set("tag", AMAZON_TAG);
        return u.toString();
      } catch {
        return targetUrl;
      }
    },
  },

  // ── Green Man Gaming（经 Tapfiliate）────────────────────────────────
  // 过审阶段：链接已是用户在 Excel 填的真实商品页，原样透传（不拼占位符，避免坏链）。
  // 等 GMG 联盟通过后，把后台给的真实推广链接（完整 URL）直接填进 Excel 链接列即可，
  // 透传会原样保留；若想自动拼 tap_a/tap_s，再把下面改回拼接逻辑。
  gmg: {
    label: "Green Man Gaming",
    enabled: true,
    build: (targetUrl) => targetUrl,
  },

  // ── Humble Bundle（经 Impact）───────────────────────────────────────
  // 同上，过审阶段原样透传真实链接。
  humble: {
    label: "Humble Bundle",
    enabled: true,
    build: (targetUrl) => targetUrl,
  },

  // ── Fanatical（经 Partnerize / 自有）────────────────────────────────
  // 同上，过审阶段原样透传真实链接。
  fanatical: {
    label: "Fanatical",
    enabled: true,
    build: (targetUrl) => targetUrl,
  },
};

/** 取某个网络的展示名（按钮文案用） */
export function networkLabel(network: Network): string {
  return affiliates[network].label;
}
