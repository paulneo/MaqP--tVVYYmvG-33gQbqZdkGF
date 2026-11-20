Objective: add 6 new calculators (machinery focus) because calculators are the strongest organic landing pages (3 of the top 4 in GA4, last 28 days).
Branch: main (direct deploys, repo convention). Delivery: one commit for the feature. Test runner: none for tools; checks are formula spot checks with node + `pnpm build` + link scan of dist.

## Specs

- S1: User accepted the proposal: "5 o 6 calculadoras nuevas de maquinaria ... fuerza de cilindro hidráulico, producción de bulldozer, ciclo y número de volquetes por excavadora, producción de motoniveladora, conversor de presión y torque." User reply: "si dale".
- S2: Each calculator follows the existing pattern: registry entry in `src/lib/tools.ts`, page `src/pages/herramientas/{slug}.astro` using `ToolLayout` (slots calculator / explanation / faq), Svelte island in `src/components/tools/`.
- S3: Each page has the formula, a worked example whose numbers match the calculator, how to interpret the result, common mistakes, related posts that exist, and 6–8 FAQ items. Neutral LATAM Spanish, "usted" form as in existing tools.
- S4: Formulas and reference values must be technically correct; reference ranges are labelled as references, not manufacturer data.
- S5 (assumption): sixth calculator is soil swell/shrink (banco–suelto–compactado), since it feeds the excavator, truck and bulldozer calculators.

## Tasks

- T1 S2 inline — 6 registry entries in src/lib/tools.ts + cross-links in relatedTools; ToolLayout now renders relatedTools (field existed but was never shown) and its voseo strings are neutral — done
- T2 S1–S4 delegated (writer A, parallel) — fuerza-cilindro-hidraulico + conversor-presion-torque — done
- T3 S1–S4 delegated (writer B, parallel) — produccion-bulldozer + produccion-motoniveladora — done
- T4 S1–S5 delegated (writer C, parallel) — numero-de-volquetes-por-excavadora + esponjamiento-de-suelos — done

Route evidence: T2–T4 are independent units with disjoint files (~400 lines each), launched together (Writer trigger a). tools.ts is shared, so the parent owns it (T1).

## Log

- L1 (2026-11-20) User: "si dale" (to: "¿Empiezo ya con las calculadoras nuevas?")
- L2 GA4 28d: ~58 sessions/day, ~35 human; organic 886 (−16% vs prior 28d); top organic landings include /herramientas/consumo-combustible-maquinaria (55), /herramientas/rendimiento-de-excavadora (49), /herramientas/volumen-tanque-cisterna (24).
- L3 T1 done. Found `relatedTools` was declared in the registry but rendered nowhere, so tools never linked each other; ToolLayout now shows them. rendimiento-de-excavadora and consumo-combustible-maquinaria now point at the new tools. Voseo remains in privacidad/terminos/contacto/about (out of scope, reported to user).
- L4 T2–T4: 3 parallel sonnet writers, 12 files, 8 FAQ each, all prose numbers checked with node. Parent fixed converter factors to exact (lb·ft = 1.3558179483 N·m, lb·in = lb·ft/12) so 100 lb·ft shows 1.200 lb·in instead of 1.200,0004.
- L5 Checks: `pnpm build` exit 0 (only pre-existing KaTeX warnings); 6 pages in dist with 'Calculadoras relacionadas' and 8 <details>; SSR default outputs match the worked examples (157,1 kN; 256,9 m³/h; 8.713 m²/h; 175,3 m³/h; 1.250 m³); 0 missing internal links from /herramientas pages; 6 URLs in sitemap. gentle-ai assess: medium, review_due false (under_budget).
