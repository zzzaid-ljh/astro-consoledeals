import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DOuRIHWv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dbj86UOP.mjs';
import { $ as $$AffiliateLink } from '../../chunks/AffiliateLink_Csky0RjZ.mjs';
/* empty css                                            */
export { renderers } from '../../renderers.mjs';

const $$HaloInfinite = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Halo Infinite \u2014 Xbox Buying Guide", "description": "Halo Infinite buying guide: campaign vs multiplayer, editions, and where to buy the digital Xbox version cheapest.", "data-astro-cid-yudm2636": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="post" data-astro-cid-yudm2636> <h1 data-astro-cid-yudm2636>Halo Infinite — Xbox Buying Guide</h1> <p class="meta" data-astro-cid-yudm2636>Xbox · Updated 2026-08-05</p> <p data-astro-cid-yudm2636> <strong data-astro-cid-yudm2636>Halo Infinite</strong> is 343 Industries' return to Master Chief, with a
      open-zone campaign and a free-to-play multiplayer that remains the series'
      competitive core.
</p> <h2 data-astro-cid-yudm2636>What you're buying</h2> <ul data-astro-cid-yudm2636> <li data-astro-cid-yudm2636><strong data-astro-cid-yudm2636>Campaign</strong> — a paid single-player story; this is what the digital purchase covers</li> <li data-astro-cid-yudm2636><strong data-astro-cid-yudm2636>Multiplayer</strong> — free to play, no purchase needed</li> <li data-astro-cid-yudm2636><strong data-astro-cid-yudm2636>Editions</strong> — most "editions" are cosmetic armor coatings; the campaign alone is enough</li> </ul> <h2 data-astro-cid-yudm2636>Where to buy cheapest</h2> <p data-astro-cid-yudm2636>
Halo Infinite has been on the market a while and sees deep key-store discounts on
      Green Man Gaming versus the Microsoft Store. If you only want the campaign, a GMG
      code is usually dramatically cheaper.
</p> <ul class="buy-list" data-astro-cid-yudm2636> <li data-astro-cid-yudm2636> ${renderComponent($$result2, "AffiliateLink", $$AffiliateLink, { "network": "gmg", "href": "https://www.greenmangaming.com/search/?q=halo+infinite+xbox", "cta": "Check Green Man Gaming", "data-astro-cid-yudm2636": true })} </li> <li data-astro-cid-yudm2636> ${renderComponent($$result2, "AffiliateLink", $$AffiliateLink, { "network": "amazon", "href": "https://www.amazon.com/s?k=Halo+Infinite+Xbox", "cta": "Check on Amazon", "data-astro-cid-yudm2636": true })} </li> </ul> <p class="note" data-astro-cid-yudm2636>
Prices change frequently — always verify on the store before purchasing.
</p> </article> ` })} `;
}, "C:/Users/LJH/Desktop/GameDealsSite/src/pages/games/halo-infinite.astro", void 0);

const $$file = "C:/Users/LJH/Desktop/GameDealsSite/src/pages/games/halo-infinite.astro";
const $$url = "/games/halo-infinite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HaloInfinite,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
