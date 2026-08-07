import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DOuRIHWv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dbj86UOP.mjs';
import { $ as $$AffiliateLink } from '../../chunks/AffiliateLink_Csky0RjZ.mjs';
/* empty css                                                */
export { renderers } from '../../renderers.mjs';

const $$StarWarsOutlaws = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Star Wars Outlaws \u2014 Cross-Platform Buying Guide", "description": "Star Wars Outlaws buying guide: Ubisoft's open-world Star Wars game, editions, and where to buy the digital version cheapest.", "data-astro-cid-xlrm6wnf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="post" data-astro-cid-xlrm6wnf> <h1 data-astro-cid-xlrm6wnf>Star Wars Outlaws — Cross-Platform Buying Guide</h1> <p class="meta" data-astro-cid-xlrm6wnf>Xbox / PS5 / PC · Updated 2026-08-05</p> <p data-astro-cid-xlrm6wnf> <strong data-astro-cid-xlrm6wnf>Star Wars Outlaws</strong> is Ubisoft's open-world Star Wars game — the
      first of its kind — putting you in the boots of scoundrel Kay Vess across a string
      of famous and original planets.
</p> <h2 data-astro-cid-xlrm6wnf>Standard vs Ultimate</h2> <ul data-astro-cid-xlrm6wnf> <li data-astro-cid-xlrm6wnf><strong data-astro-cid-xlrm6wnf>Standard</strong> — the full game</li> <li data-astro-cid-xlrm6wnf><strong data-astro-cid-xlrm6wnf>Ultimate / Season Pass</strong> — adds story drops (including a Kijimi adventure) and cosmetics; buy if you want the extra content</li> <li data-astro-cid-xlrm6wnf><strong data-astro-cid-xlrm6wnf>Story upgrades</strong> — a few free updates added new mode content; no paid wall blocks the main story</li> </ul> <h2 data-astro-cid-xlrm6wnf>Where to buy cheapest</h2> <p data-astro-cid-xlrm6wnf>
A 2024 release, Outlaws sees deepening key-store discounts on Green Man Gaming that
      undercut the Ubisoft Store and console stores. A GMG key is usually the cheapest
      permanent copy.
</p> <ul class="buy-list" data-astro-cid-xlrm6wnf> <li data-astro-cid-xlrm6wnf> ${renderComponent($$result2, "AffiliateLink", $$AffiliateLink, { "network": "gmg", "href": "https://www.greenmangaming.com/search/?q=star+wars+outlaws", "cta": "Check Green Man Gaming", "data-astro-cid-xlrm6wnf": true })} </li> <li data-astro-cid-xlrm6wnf> ${renderComponent($$result2, "AffiliateLink", $$AffiliateLink, { "network": "amazon", "href": "https://www.amazon.com/s?k=Star+Wars+Outlaws", "cta": "Check on Amazon", "data-astro-cid-xlrm6wnf": true })} </li> </ul> <p class="note" data-astro-cid-xlrm6wnf>
Prices change frequently — always verify on the store before purchasing.
</p> </article> ` })} `;
}, "C:/Users/LJH/Desktop/GameDealsSite/src/pages/games/star-wars-outlaws.astro", void 0);

const $$file = "C:/Users/LJH/Desktop/GameDealsSite/src/pages/games/star-wars-outlaws.astro";
const $$url = "/games/star-wars-outlaws";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StarWarsOutlaws,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
