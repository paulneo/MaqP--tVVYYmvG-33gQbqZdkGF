Objective: fix the 350 posts Google reports as not indexed (prune, merge or expand) to raise site-wide quality.
Branch: main (direct deploys, repo convention). Delivery: one commit per phase. Test runner: none (content); checks are `pnpm build` + dangling-link scan of dist.

## Specs

- S1: "si puedes corregrlos todos esos de la limpieza?" — every post in the GSC not-indexed list (scratchpad gsc/notidx.txt, 350 URLs) gets one action: expand, merge with 301, or delete with 301.
- S2: Stale 2024 news posts with no organic traffic (GA4, 12 months) are deleted and 301-redirected to their category page; no internal link may point to a removed post.
- S3: Overlapping technical posts are merged into one consolidated guide; the sources 301 to it.
- S4: Evergreen technical posts and short (<750 words) 2026 posts are expanded with real technical depth, neutral LATAM Spanish, human tone.
- S5: 2026 posts over ~900 words stay as they are (recent, still being crawled).

## Tasks

- T1 S1,S2 inline — delete 230 news posts + 4 redirect-only posts, public/_redirects, fix redirect chains and 10 internal links — done
- T2 S1,S3 delegated (parallel writers) — 9 merged guides from 20 sources, then delete sources + add redirects — pending
- T3 S1,S4 delegated (parallel writers) — expand 26 evergreen 2024 posts — pending
- T4 S1,S4 delegated (parallel writers) — expand 7 short 2026 posts — pending

## Log

- L1 (2026-11-19) User: "si puedes corregrlos todos esos de la limpieza?"
- L2 Classification (scratchpad gsc/plan.json): 230 delete, 20 merge sources into 9 targets, 4 redirect to existing posts, 33 expand, 64 2026 posts kept. 2024 not-indexed posts totalled 184 organic views/year, mostly in the expand/merge set.
- L3 T1: build OK, 395 post pages, 0 dist links to removed slugs. Old netlify.toml redirects that pointed at removed posts now go to /categorias/maquinaria-pesada/.
