import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DOuRIHWv.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dbj86UOP.mjs';
import { d as dealsData, $ as $$DealCard } from '../chunks/deals_hhbygG7Z.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$NewReleases = createComponent(($$result, $$props, $$slots) => {
  const deals = dealsData.deals.filter((d) => (d.tags || []).includes("new-release"));
  const lastUpdated = dealsData.lastUpdated;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "New Releases \u2014 ConsoleDeals", "description": "Recently launched and upcoming console game digital editions across Nintendo Switch, PlayStation 5, and Xbox.", "data-astro-cid-lnxqz2dk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" data-astro-cid-lnxqz2dk> <h1 data-astro-cid-lnxqz2dk>New Releases</h1> <p data-astro-cid-lnxqz2dk>
Recently launched and upcoming digital editions on Switch, PlayStation, and
      Xbox. Updated ${lastUpdated}. New games sit at list price at first — tap
      through to verify the current deal before you buy.
</p> </section> <section class="deals-grid" aria-label="New releases" data-astro-cid-lnxqz2dk> ${deals.map((d) => renderTemplate`${renderComponent($$result2, "DealCard", $$DealCard, { "deal": d, "data-astro-cid-lnxqz2dk": true })}`)} </section> ` })} `;
}, "C:/Users/LJH/Desktop/GameDealsSite/src/pages/new-releases.astro", void 0);

const $$file = "C:/Users/LJH/Desktop/GameDealsSite/src/pages/new-releases.astro";
const $$url = "/new-releases";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$NewReleases,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
