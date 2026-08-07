import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DOuRIHWv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dbj86UOP.mjs';
import { $ as $$AffiliateLink } from '../../chunks/AffiliateLink_Csky0RjZ.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Starfield = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Starfield \u2014 Xbox Buying Guide", "description": "Starfield buying guide: Bethesda's space RPG, editions, and where to buy the digital Xbox version cheapest.", "data-astro-cid-3mp6cxfp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="post" data-astro-cid-3mp6cxfp> <h1 data-astro-cid-3mp6cxfp>Starfield — Xbox Buying Guide</h1> <p class="meta" data-astro-cid-3mp6cxfp>Xbox · Updated 2026-08-05</p> <p data-astro-cid-3mp6cxfp> <strong data-astro-cid-3mp6cxfp>Starfield</strong> is Bethesda's first new universe in 25 years — a
      sprawling sci-fi RPG about exploration, faction politics, and shipbuilding across
      a settled star system.
</p> <h2 data-astro-cid-3mp6cxfp>Standard vs Constellation Edition</h2> <ul data-astro-cid-3mp6cxfp> <li data-astro-cid-3mp6cxfp><strong data-astro-cid-3mp6cxfp>Standard</strong> — the full game</li> <li data-astro-cid-3mp6cxfp><strong data-astro-cid-3mp6cxfp>Constellation / Premium</strong> — add a storybook, skin pack, and (for some) early access; cosmetic only</li> <li data-astro-cid-3mp6cxfp><strong data-astro-cid-3mp6cxfp>Game Pass</strong> — was day-one on Game Pass, so subscribers may not need to buy</li> </ul> <h2 data-astro-cid-3mp6cxfp>Where to buy cheapest</h2> <p data-astro-cid-3mp6cxfp>
Well past its 2023 launch, Starfield's key-store price on Green Man Gaming now sits
      well below launch MSRP and undercuts the Microsoft Store. A GMG code is the cheapest
      permanent copy if you're not on Game Pass.
</p> <ul class="buy-list" data-astro-cid-3mp6cxfp> <li data-astro-cid-3mp6cxfp> ${renderComponent($$result2, "AffiliateLink", $$AffiliateLink, { "network": "gmg", "href": "https://www.greenmangaming.com/search/?q=starfield+xbox", "cta": "Check Green Man Gaming", "data-astro-cid-3mp6cxfp": true })} </li> <li data-astro-cid-3mp6cxfp> ${renderComponent($$result2, "AffiliateLink", $$AffiliateLink, { "network": "amazon", "href": "https://www.amazon.com/s?k=Starfield+Xbox", "cta": "Check on Amazon", "data-astro-cid-3mp6cxfp": true })} </li> </ul> <p class="note" data-astro-cid-3mp6cxfp>
Prices change frequently — always verify on the store before purchasing.
</p> </article> ` })} `;
}, "C:/Users/LJH/Desktop/GameDealsSite/src/pages/games/starfield.astro", void 0);

const $$file = "C:/Users/LJH/Desktop/GameDealsSite/src/pages/games/starfield.astro";
const $$url = "/games/starfield";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Starfield,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
