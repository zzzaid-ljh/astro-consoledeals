import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DOuRIHWv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dbj86UOP.mjs';
import { d as dealsData, $ as $$DealCard } from '../chunks/deals_hhbygG7Z.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const deals = dealsData.deals;
  const lastUpdated = dealsData.lastUpdated;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Console &amp; Game Deals, Curated Weekly</h1> <p data-astro-cid-j7pv25f6>
Hand-picked deals on Switch, PlayStation, and Xbox games — pulled from
      Amazon, Green Man Gaming, Humble Bundle, and Fanatical. Updated ${lastUpdated}.
</p> </section> <section class="deals-grid" aria-label="Weekly deals" data-astro-cid-j7pv25f6> ${deals.map((d) => renderTemplate`${renderComponent($$result2, "DealCard", $$DealCard, { "deal": d, "data-astro-cid-j7pv25f6": true })}`)} </section> ` })} `;
}, "C:/Users/LJH/Desktop/GameDealsSite/src/pages/index.astro", void 0);

const $$file = "C:/Users/LJH/Desktop/GameDealsSite/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
