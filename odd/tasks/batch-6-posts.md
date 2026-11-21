Objective: write batch 6 (9 posts, 3/day for 2026-11-21..23) from PDF manuals on the user's download sites, then cover prompts, upload and publish.
Branch: main (direct deploys, repo convention). Delivery: one commit after covers are uploaded. Checks: js-yaml validation, `pnpm build`, link scan, live 200 checks.

## Specs

- S1: User: "me refiero los lotes hasta el lunes" — the batch of posts through Monday (Sat 21, Sun 22, Mon 23 Nov), 3 per day, each based on a PDF from the download sites.
- S2: Same conventions as batches 3–5 (scratchpad lote6/brief.md): frontmatter, one SVG diagram, FAQ, sources, internal links, neutral LATAM Spanish.
- S3: After writing, give the user the cover-image prompts (standing request), then upload covers to Cloudinary with cld-upload.sh (covers7), trash the PNGs after 200 checks, commit and push.

## Tasks

- T1 S1,S2 delegated (writer W1, parallel) — Volvo truck gearboxes (mp668+mp979, 21/11), torque converter (mp6678, 22/11), powershift transmission (mp6680, 23/11) — done
- T2 S1,S2 delegated (writer W2, parallel) — undercarriage wear (mp3005, 21/11), motor grader techniques (mp2804, 22/11), master cylinder + bleeding (ma4416, 23/11) — done
- T3 S1,S2 delegated (writer W3, parallel) — charging system/alternator (ma4297, 21/11), clutch (ma4148, 22/11), shock absorbers/suspension (ma4200, 23/11) — done
- T4 S3 inline — build, checks, cover prompts, upload, commit, push — done (covers uploaded 9/9 1600x900, Cloudinary 200, PNGs trashed; commit below)

Route evidence: three independent units with disjoint files, ~3 long posts each, launched together (Writer trigger a).

## Log

- L1 (2026-11-20) User: "me refiero los lotes hasta el lunes"
- L2 Detroit DPF regeneration spare dropped: regeneracion-dpf plus 4 other DPF posts already cover it (cannibalization). Hydraulics fundamentals mp6773 dropped: overlaps principios-hidraulica (a top organic landing). Undercarriage and motor grader picked to support the new calculators.
- L3 PDFs fetched via the gdrv/boxx ids embedded in each download page (Box static link, Drive fallback). mp2804 is image-heavy (76 pages, 1,205 words).
- L4 Writers done: 9 posts, 1,917–2,762 body words, YAML valid, links valid, no voseo. W2 found mp3005 Box link served an unrelated mining manual; used the Drive file (Caterpillar undercarriage guide) instead.
- L5 Parent rendered all 9 SVGs (Quick Look): fixed overlapping/cut labels in tren-de-rodaje, cilindro-maestro, amortiguadores, motoniveladora, convertidor, alternador, Volvo. `pnpm build` exit 0 (future-dated posts are not rendered until their date; figures have no blank lines).
- L6 Covers: user generated 9 images, converted to 1600x900 webp (covers7), cld-upload.sh printed 9 OK lines, all 9 delivery URLs 200 and match each post's image field. PNGs moved to Trash.
