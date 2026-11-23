Objective: add two calculators tied to batch-7 posts (forklift actual capacity by load center, OTR tire TKPH), linked both ways with their posts.
Branch: main (direct deploys, repo convention). Delivery: one commit for the feature. Test runner: none for tools; checks are formula spot checks with node + `pnpm build` + link scan of dist.

## Specs

- S1: Parent proposed: "Del lote 7 salen dos naturales: capacidad real del montacargas según el centro de carga, y TKPH para neumáticos OTR. Cada post debería llevar a su calculadora y cada calculadora a sus posts." User: "si dale por favor."
- S2: Each calculator follows the existing pattern (see odd/tasks/machinery-calculators.md): registry entry in `src/lib/tools.ts`, page `src/pages/herramientas/{slug}.astro` using `ToolLayout` (slots calculator / explanation / faq), Svelte island in `src/components/tools/`.
- S3: Each page has the formula, a worked example whose numbers match the calculator, how to interpret the result, common mistakes, related posts that exist, and 6–8 FAQ items. Neutral LATAM Spanish, "usted" form.
- S4: Formulas and reference values must be technically correct; reference factors are labelled as references, and the manufacturer's capacity plate / tire TKPH rating always prevails.
- S5: The batch-7 post links to its calculator in the body; the calculator links back to the post (and other existing related posts). `src/lib/tool-suggestions.ts` maps the posts to the calculator.

## Tasks

- T1 S2,S5 inline (parent owns shared files) — registry entries in src/lib/tools.ts + tool-suggestions rules + isPostLive guard (ToolLayout and both pages) — done
- T2 S1–S5 delegated (writer A, parallel) — capacidad-montacargas-centro-de-carga + link from montacargas post — done
- T3 S1–S5 delegated (writer B, parallel) — tkph-neumaticos-otr + link from neumaticos OTR post — done

Route evidence: T2 and T3 are independent units with disjoint files (~400 lines each), launched together (Writer trigger a). tools.ts and tool-suggestions.ts are shared, so the parent owns them (T1).

## Log

- L1 (2026-11-23) User asked how to grow the project ("que cosas mas pros, podriamos hacer o para este proyecto y que creza"). GA4 last 28 days: organic 873 sessions (-19 % vs prior 28), calculators are 3 of the top 5 landing pages with high engagement. Parent recommended calculators first; user: "si dale por favor."
- L2 Writers A and B done: formula spot checks (forklift 10 cases incl. post example 3,636 lb and cap at rated capacity; TKPH worked example front 250 / rear 212.5, K2 reference check 0.855), Svelte compile clean, links valid. Parent registered both tools and SLUG_RULES.
- L3 Link scan of dist (unquoted hrefs) found the tool pages linking to their posts, which publish 25/11 and 26/11 (404 until then). Added `isPostLive(slug)` in src/utils/content-utils.ts (reuses isPostPublishable) and gated ToolLayout's related-post callout and the pages' post links on it; the daily scheduled rebuild shows them on the post date. Differential: 23 existing tools render "Lea la guía completa" exactly as before; new tools have 0 missing links. `pnpm build` exit 0 (KaTeX warnings pre-existing: 54 before and after).
- L4 Risk: item 3 (shared ToolLayout/content-utils). RDD review (lens reliability) granted by user, approved and acknowledged (lineage review-e840ad16422a49da). Advisory follow-ups: no automated formula tests for the calculators; isPostLive id match was flagged as inferential and is covered by the differential check above.
