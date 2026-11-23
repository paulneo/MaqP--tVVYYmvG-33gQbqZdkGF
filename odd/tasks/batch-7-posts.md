Objective: write batch 7 (9 posts, 3/day for 2026-11-24..26) from PDF manuals on the user's download sites, then cover prompts, upload and publish.
Branch: main (direct deploys, repo convention). Delivery: one commit after covers are uploaded. Checks: js-yaml validation, `pnpm build`, link scan, live 200 checks.

## Specs

- S1: User: "ya mira podemos ahcer posts para hasta el miercoles, porque hoy se vencen los que publicamos" — posts for Tue 24 and Wed 25 Nov 2026, 3 per day (same cadence as batch 6), each based on a PDF from the download sites.
- S1b: User (2026-11-23, later): "osea se publican cada dia y quedamos escribir cada 3 dias para 3 dias" — the batch covers 3 days: 24, 25 and 26 Nov, 3 posts per day.
- S2: Same conventions as batches 3–6 (scratchpad lote7/brief.md): frontmatter, one SVG diagram, FAQ, sources, internal links, neutral LATAM Spanish.
- S3: After writing, give the user the cover-image prompts (standing request), then upload covers to Cloudinary, trash the PNGs after 200 checks, commit and push.
- S4: User (2026-11-23): "si puedes sacarlo de ahi, pero del libro tambien podemos sacarlas, pero no tomas el screenshot de una marca o algo solo una foto o algo asi" — add freely licensed Wikimedia Commons photos (with attribution) to the 9 batch-7 posts, in addition to each post's diagram, without brand-dominant shots.

## Tasks

- T1 S1,S2 delegated (writer W1, parallel) — SAE J1939 network (mp6822, 24/11), track-type tractors/bulldozers (mp2986, 25/11), OTR tires (mp6805, 25/11) — done
- T2 S1,S2 delegated (writer W2, parallel) — differential (ma1639, 24/11), truck air suspension (mp6777, 24/11), air brakes (ma1454, 25/11) — done
- T4 S1b,S2 delegated (writers W3-W5, parallel, one post each) — car A/C circuit (ma1791, 26/11), greases (mp2634, 26/11), forklift safety (mp2964, 26/11) — done
- T3 S3 inline — SVG render check, build, cover prompts, upload, commit, push — done

- T5 S4 research delegated (one explorer: Commons search is rate-limited and needs many sequential lookups), upload + insertion inline — done

Route evidence: two independent units with disjoint files, 3 long posts each, launched together (Writer trigger a).

## Log

- L1 (2026-11-23) User: "ya mira podemos ahcer posts para hasta el miercoles, porque hoy se vencen los que publicamos, y dime si debo darte nuevamente las urls de onde sacamos los pdf, o que cosas."
- L2 Topics picked from 4,452 source posts as gaps with no existing post (checked slugs for J1939/CAN, differential, air suspension, bulldozer, OTR, air brakes). All 6 PDFs downloaded via Box static link and checked: content matches titles. mp6822 is image-only (no text layer).
- L3 W1 done: J1939 2,692 words, bulldozer 2,324, OTR 2,673; YAML valid, links valid. PDF errata flagged in posts (J1939 priority/UTP/PG count; D8R blade-factor labels; OTR dual-mount 12 % vs 24 %). Parent rendered the 3 SVGs: no overlaps or cut labels; D8R factor chain recomputed (309.5 Lm³/h).
- L4 W2 done: diferencial 2,666 words, suspension neumatica 2,505, frenos de aire 2,678; YAML and links valid. Air-brake PDF lacks compressor/governor/reservoir/dryer content (covered generically and disclosed). Parent rendered the 3 SVGs: fine. `pnpm build` exit 0 with all 6 posts.
- L5 (2026-11-23) User: "osea se publican cada dia y quedamos escribir cada 3 dias para 3 dias, y si tienes la url de donde descargamos los pdfs." Added 3 posts for 26/11 (A/C ma1791, greases mp2634, forklift mp2964); PDFs downloaded and checked, no overlapping existing posts.
- L6 W3-W5 done: A/C 2,697 words, greases 2,673, forklift 2,621; YAML and links valid. PDF errata corrected in posts (NLGI definition, forklift moment sign, 173 in plate). Parent rendered all 3 SVGs: fine. `pnpm build` exit 0 with all 9 posts.
- L7 (2026-11-23) User: "recuerda que tenemos que hacer como par aun humano y que google posicione todos los posts que hacemos vale, si puedes sacar fotos de los pdfs seria increible". Parent recommended against embedding PDF images (policy from hydraulic cluster: manufacturer copyright, DMCA/AdSense risk; Valeo PDF says "prohibida su reproducción") and asked whether to add Wikimedia Commons photos instead. Pending answer.
- L8 (2026-11-23) User sent the 9 covers: "recuerda que tenemos que bajar la calidad vale. y webp para subirlo". Converted to 1600x900 webp (cwebp -q 70, 88–164 KB from 2.3–3 MB PNG), signed upload to mundo-ingenieria/<folder>/<slug> (script rebuilt in scratchpad lote7/covers/cld-upload.sh, reads repo .env), all 9 delivery URLs 200 and match the image fields (browsers get webp). PNGs moved to Trash. Photo question (Wikimedia Commons) left unanswered; no photos added.
- L9 (2026-11-23) User: "si puedes sacarlo de ahi, pero del libro tambien podemos sacarlas, pero no tomas el screenshot de una marca o algo solo una foto o algo asi". Commons API returned 429 on rapid queries; delegated paced photo research. PDF photos kept out: removing a logo does not remove the photographer's/manufacturer's copyright (Valeo PDF: "prohibida su reproducción").
- L10 Photo research done: 8 Commons photos (CC BY-SA 3.0/4.0, CC BY 2.0, public domain) checked visually; none exists for J1939 (only car OBD-II), so that post keeps only its diagram. Converted to webp ≤1200 px q70 (24–200 KB), uploaded as mundo-ingenieria/<folder>/<slug>-foto, all 200. Inserted as <figure class="photo"> with alt, caption and author/license/source credit. `pnpm build` exit 0.
