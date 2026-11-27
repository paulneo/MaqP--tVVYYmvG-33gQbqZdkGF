Objective: write batch 8 (3 posts for Fri 2026-11-27) from PDF manuals on the user's download sites, then cover prompts, upload and publish.
Branch: main (direct deploys, repo convention). Delivery: one commit after covers are uploaded. Checks: js-yaml validation, `pnpm build`, link scan, live 200 checks.

## Specs

- S1: User (2026-11-26): "podemos hacer publicaciones para el viernes porfa, etamos haciendo 2 post por dia" then "o 3 creo" — posts for Fri 27 Nov 2026; 3 posts (the cadence observed in the last 6 days), each based on a PDF from the download sites.
- S2: Same conventions as batches 3–7 (scratchpad lote8/brief.md): frontmatter, one SVG diagram, FAQ, sources, internal links, neutral LATAM Spanish.
- S3: After writing, give the user the cover-image prompts (standing request), then upload covers (1600x900 webp q70) to Cloudinary, trash the PNGs after 200 checks, commit and push before the 11:00 UTC daily rebuild.
- S4: Wikimedia Commons photo per post is optional, judged case by case (standing user rule, 2026-11-23).

## Tasks

- T1 S1,S2 delegated (writer W1, parallel) — mining drills (mp6474, 27/11) — done
- T2 S1,S2 delegated (writer W2, parallel) — rolling-bearing failures (mp6767, 27/11) — done
- T3 S1,S2 delegated (writer W3, parallel) — car battery (ma1013, 27/11) — done
- T4 S3 inline — SVG render check, build, cover prompts, upload, commit, push — done

Route evidence: three independent posts with disjoint files, ~2,500 words each, launched together (Writer trigger a).

## Log

- L1 (2026-11-26) User: "podemos hacer publicaciones para el viernes porfa, etamos haciendo 2 post por dia" / "o 3 creo".
- L2 Topics picked as gaps with no existing post (no slugs for perforadora/perforacion, rodamiento, bateria). PDFs downloaded via Box static link: mp6474 (23 p, slides), mp6767 (6 p, Tecsup), ma1013 (20 p, slides). mp977 (bearing types) has no Box/Drive id; skipped.
- L3 W2 done: fallas-de-rodamientos-causas-diagnostico-lubricacion, 2,530 words; YAML and links valid. PDF gaps handled in post ("vida infinita" clarified as L10 life, 34 % category split, electrical erosion added). Parent rendered the SVG (cause tree): no overlaps or cut labels.
- L4 W1 done: perforadoras-mineras-metodos-perforacion-cielo-abierto-subterranea (slug changed: PDF has almost no component content), ~2,690 words; YAML and links valid. PDF errata corrected in post (retropercutivo→rotopercutivo, "cinco" listed as four, conducción→producción). Parent rendered the SVG: fine.
- L5 W3 done: bateria-automotriz-partes-funcionamiento-electrolito, ~2,685 words; YAML and links valid. PDF errata corrected (pentóxido→dióxido de plomo, garbled half-reactions, Fouré→Faure; solar-context figures qualified). Testing/ratings/safety added as general practice and disclosed. Parent rendered the SVG: fine. `pnpm build` exit 0 with the 3 posts.
- L6 (2026-11-27) User sent the 3 covers. Converted to 1600x900 webp (cwebp -q 70, 96–200 KB), signed upload to mundo-ingenieria/<folder>/<slug>, all 3 image URLs 200 (image/webp). PNGs moved to Trash. No Commons photos added: the SVG diagrams already show the mechanism and the user did not ask for photos this batch. Committed and pushed to main.
