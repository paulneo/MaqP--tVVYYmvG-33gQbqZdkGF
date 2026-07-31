---
title: "ACERT vs SCR: Two Philosophies for Cutting Diesel Emissions"
published: 2026-07-23
draft: false
featured: false
description: "Cat bet on ACERT (attack NOx inside the cylinder). Cummins, Volvo, and Detroit bet on SCR (treat it afterward). A technical comparison."
category: mecanica-automotriz
formato: guia
nivel: avanzado
lang: "en"
tags:
  - "acert-vs-scr"
  - "scr"
  - "adblue"
  - "sistema-acert"
  - "emisiones-diesel"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/acert/acert-vs-scr-tecnologias-emisiones
author: normativa-global
reviewedBy: normativa-global
aiAssisted: true
faq:
  - q: "What is SCR and how does it differ from ACERT?"
    a: "SCR (Selective Catalytic Reduction) is a technology that treats NOx AFTER it has already formed — it injects a urea solution (AdBlue/DEF) into the exhaust stream, which reacts with NOx in a catalyst and converts it into harmless nitrogen and water. ACERT (Advanced Combustion Emission Reduction Technology) is Cat's approach: prevent NOx from forming in the first place by controlling combustion with CGI, high injection pressure, and precise timing. In short: SCR treats the problem afterward, ACERT avoids it altogether. Each has technical and economic advantages. The industry ultimately settled on SCR as the de facto standard, and Cat itself had to move away from pure ACERT and adopt SCR in its newer engines (Tier 4 Final and later)."
  - q: "What is AdBlue or DEF?"
    a: "It's the fluid used in SCR systems. AdBlue is the commercial name in Europe; DEF (Diesel Exhaust Fluid) is the name used in the US. It's an aqueous urea solution at 32.5% concentration — 67.5% deionized water and 32.5% high-purity automotive-grade urea. It's stored in a tank separate from the fuel (typically 20-100 liters depending on the machine) and injected into the exhaust through a nozzle controlled by the ECU. Typical consumption runs 3-5% of diesel consumption — meaning for every 100 liters of diesel burned, 3-5 liters of AdBlue are used. It's colorless, non-toxic, and biodegradable, but it freezes at -11 °C (12 °F), so cold climates require tank and line heating."
  - q: "Why did Caterpillar bet on ACERT first instead of SCR?"
    a: "For several strategic and technical reasons: (1) ACERT allowed compliance with EPA Tier 3 standards without requiring an additional fluid the operator had to refill — a logistics headache for mining and remote-construction customers; (2) AdBlue wasn't universally available in the markets where Cat sells heavily; (3) SCR systems required urea-resistant stainless-steel components, heated tanks, and dedicated sensors — all expensive; (4) Cat wanted to differentiate itself commercially with a proprietary solution (branding). The bet made sense at the time (2007-2011), but once Tier 4 Final (2014+) tightened NOx limits so severely, ACERT alone could no longer keep up — Cat had to add SCR to its larger engines as well."
  - q: "Does an SCR engine also need a DPF?"
    a: "Almost always, in modern post-2014 applications. SCR mainly targets NOx but doesn't solve the particulate (PM) problem. A modern Tier 4 Final or Stage V engine requires: (1) a DPF to trap PM, (2) a DOC (Diesel Oxidation Catalyst) to oxidize HC and CO, and (3) SCR to reduce NOx. All three systems are installed in sequence in the exhaust path. This is what's known as a complete 'aftertreatment system.' Newer engines also add an ASC (Ammonia Slip Catalyst) at the end to capture any residual ammonia that wasn't converted by the SCR."
  - q: "What happens if I run out of AdBlue on an SCR engine?"
    a: "The engine enters progressive derate mode. Typically: (1) at 10% AdBlue tank level, a warning light comes on; (2) at 5%, the engine limits torque to 75%; (3) at 0%, after a set time or number of starts, the engine limits road speed to about 12 mph (20 km/h) or enters 'limp mode,' which only allows the machine to be driven to the shop; (4) in some models, if the issue isn't resolved, the engine won't start. This is designed intentionally to force emissions compliance — it isn't a malfunction, it's a regulatory restriction. Never run an SCR engine without AdBlue: efficiency drops, emissions spike, and the ECU will eventually immobilize the machine. Refilling is cheap and easy — don't let it run dry."
sources:
  - title: "Caterpillar Global Manpower Development — ACERT 2007 Systems Overview"
    url: "https://heavyequipments.org/"
  - title: "SAE International — SCR vs EGR/DPF for Heavy-Duty Diesel"
    url: "https://www.sae.org/"
  - title: "US EPA — Heavy-Duty Highway Diesel Emissions Standards"
    url: "https://www.epa.gov/"
related:
  - sistema-acert-caterpillar-que-es-como-funciona
  - las-emisiones-reguladas-del-motor-diesel
  - historia-normas-epa-diesel
  - sistema-cgi-cooled-gas-induction
---

When the EPA announced in the 1990s that it was going to tighten diesel
emissions limits, the heavy-duty engine industry split into two camps:

- **Cat, with ACERT**: reduce NOx **inside the cylinder**, preventing it
  from forming in the first place.
- **Cummins, Volvo, Detroit, Mack**: reduce NOx **after combustion**,
  using **SCR (Selective Catalytic Reduction)**.

These were two fundamentally different philosophies, each with its own
technical, economic, and logistical advantages. This article compares
both and explains why the industry eventually converged on one.

## The ACERT philosophy: prevent NOx from forming

The ACERT system we've already covered in detail in this series attacks
NOx at the source. The logic:

> "If NOx forms because of high combustion temperatures, lower the
> combustion temperature."

ACERT's tools for cutting peak temperature:

1. **CGI (Cooled Gas Induction)** — recirculates cooled exhaust gas back
   into the intake, lowering combustion temperature.
2. **High injection pressure** — finer atomization, more uniform and
   controllable combustion.
3. **Multiple injection events** — better distribution of released heat.
4. **Precise timing** — avoids unnecessary temperature spikes.
5. **Air-to-air aftercooling (ATAAC)** — denser, cooler intake air.

Result: **NOx is reduced at the source**, with no need to treat the
exhaust gases afterward.

**Advantages of ACERT**:

- No additional fluid required (no AdBlue).
- No tank, lines, or urea injection nozzle needed.
- Less added weight on the machine.
- No refill logistics.
- Compatible with standard diesel fuel.

**Disadvantages of ACERT**:

- **Lower thermal efficiency** — lowering combustion temperature means
  giving up some performance per liter of fuel.
- **The CGI cooler and valve are critical, expensive components** that
  can fail.
- **Higher PM output** — cooler combustion produces more soot, which
  demands a more robust DPF.
- **Limited ceiling on NOx reduction** — there's a physical floor ACERT
  alone can't get past. Once Tier 4 Final (2014) took effect, ACERT
  alone was no longer enough.

## The SCR philosophy: treat NOx afterward

SCR is an aftertreatment technology that chemically converts NOx into
harmless nitrogen.

### How SCR works

1. The engine can run **hotter, more efficient combustion** (without
   the constraints of CGI or conservative timing). This produces more
   NOx but also better efficiency.
2. The exhaust gases pass through the aftertreatment system:
   - **DOC (Diesel Oxidation Catalyst)** — oxidizes HC and CO.
   - **DPF (Diesel Particulate Filter)** — traps PM.
   - **Urea injection nozzle (AdBlue/DEF)** — doses the fluid based on
     the amount of NOx present.
   - **SCR catalyst** — a chamber with a titanium-vanadium or zeolite
     catalyst. The urea decomposes into ammonia (NH₃), and the NH₃
     reacts with NOx according to:

```
4 NH₃ + 4 NO + O₂ → 4 N₂ + 6 H₂O
```

In other words: NOx + ammonia → harmless nitrogen + water.

3. **ASC (Ammonia Slip Catalyst)** at the end — captures any leftover
   ammonia that didn't react.

### Advantages of SCR

- **Higher engine efficiency** — the engine can run at its thermal
  sweet spot, gaining 3-5% efficiency compared to an EGR/CGI engine.
- **Much greater NOx reduction** — up to 90% removal, well beyond what
  ACERT alone can achieve.
- **Mechanically simpler engine** — no CGI valve, cooler, or flow
  sensor.
- **Lower maintenance on the engine itself** — CGI is a common source
  of failures.

### Disadvantages of SCR

- **Requires an additional fluid (AdBlue/DEF)** — a new tank, refill
  logistics, and the risk of contamination from fuel or water.
- **AdBlue freezes at -11 °C (12 °F)** — requires heating in cold
  climates.
- **Urea-resistant stainless-steel components** — more expensive.
- **Engine derates if AdBlue runs out** — a usage restriction.
- **Higher total system cost** — DOC + DPF + SCR + ASC adds up.
- **AdBlue logistics** in remote areas — not always available.

## Why the industry converged on SCR + DPF

Until about 2010-2011, both philosophies were viable. Cat sold ACERT
and everyone else sold SCR. Customers chose based on their application
and logistics.

But once the EPA announced **Tier 4 Final** standards (2014 in the US,
Stage IV in Europe in 2014, Stage V in 2019), NOx limits became so
strict that **ACERT alone could no longer keep up**:

- Tier 4 Final: **0.4 g/kWh of NOx**.
- Pure ACERT with CGI topped out around ~1.5-2.0 g/kWh.
- SCR could easily hit 0.4 g/kWh or lower.

Cat had to accept reality and **add SCR** to its larger engines as
well. Modern Cat engines in the C13, C15, and larger range — in
on-highway applications and some industrial ones — use **ACERT + SCR
combined**: combustion control AND chemical aftertreatment working
together.

In smaller off-highway applications, Cat stuck with ACERT + DPF longer,
but eventually migrated to SCR there too.

## Comparison summary

| Aspect                      | ACERT                              | SCR                                          |
| --------------------------- | ----------------------------------- | --------------------------------------------- |
| **Where it acts**           | Inside the cylinder                | In the exhaust (after combustion)             |
| **Method**                  | Lower combustion temperature        | Chemical treatment with NH₃                  |
| **Additional fluid**        | None                                | AdBlue/DEF                                    |
| **Thermal efficiency**      | Lower (~3-5% less)                  | Higher (engine runs at optimum)               |
| **Maximum NOx reduction**   | ~50-60%                             | ~90%                                          |
| **PM (soot)**                | More (needs a more robust DPF)      | Less (cleaner combustion)                     |
| **Key components**          | CGI valve, cooler, flow sensor      | AdBlue tank, pump, nozzle, catalyst           |
| **Operational risk**        | CGI failure in service              | Running out of AdBlue → derate                |
| **Initial cost**            | Lower                               | Higher                                        |
| **Maintenance cost**        | Expensive CGI cooler, frequent DPF  | Ongoing AdBlue, catalysts                     |
| **Tier 4 Final compliance** | Not sufficient alone                | Sufficient                                    |

## Which one to choose today

If you're **buying new equipment**, the decision has already been made
by the manufacturer — nearly all modern engines use some combination of
**SCR + DPF + DOC**, with or without supplemental EGR. Cat, Cummins,
Volvo, Detroit, John Deere: all are aligned on this architecture now.

If you're **buying used equipment**, it's important to understand which
technology it carries:

- **Purely mechanical engine** (pre-2007): no ACERT, no SCR, no DPF.
  Simple, rugged, but polluting. Growing legal restrictions in some
  markets.
- **Pure ACERT engine** (2007-2013): CGI and DPF, no SCR. Reliable but
  demanding on CGI maintenance.
- **ACERT + SCR engine** (2014+): more complex, more expensive to
  maintain, but meets modern standards.
- **SCR + DPF only engine** (Cat's competitors): reliable, requires
  discipline with AdBlue.

For work in **remote areas without AdBlue infrastructure**, a pure
ACERT engine may be preferable. For operation in areas with strict
emissions regulations, an SCR-equipped engine is the way to go.

## Cat's hybrid approach and the post-ACERT evolution

Cat didn't fully abandon the ACERT philosophy. Its modern engines
combine:

- **Optimized combustion** (an ACERT legacy).
- **Simplified CGI** (less critical than in pure ACERT designs).
- **SCR** for the heavy lifting of NOx reduction.
- **DPF** for PM.

It's a **hybrid approach**: use the best technology on each front. More
expensive, yes, but it meets modern standards with room to spare.

## The long-term outlook

The ACERT vs SCR debate is, in a sense, **a discussion from the past**.
The entire diesel industry is under regulatory pressure to
decarbonize. The next 10-20 years will bring:

- **Even cleaner diesel engines** (post-Tier 4 Final, with Euro 7 and
  equivalent standards).
- **Renewable diesel / HVO** as an alternative to fossil diesel.
- **Diesel-electric hybrid engines** in heavy equipment.
- **Fully electric engines** in light- and medium-duty applications.
- **Hydrogen engines** in testing for heavy-duty use.

Cat, Cummins, Volvo — all are investing in these technologies. The
"pure" ACERT or SCR diesel engine is slowly heading toward becoming
history. But in the meantime, understanding them remains essential for
operating and maintaining the millions of machines already in the
field.

## Bottom line

**ACERT** bet on preventing NOx formation inside the cylinder through
CGI, high injection pressure, and electronic control. It was Cat's play
between 2007 and 2013.

**SCR** bet on treating NOx after combustion with urea and catalysts.
It was the play of nearly all the competition.

**SCR won the race** — not because ACERT was "bad," but because
emissions standards became so strict that only SCR could meet them
efficiently. Cat itself had to adopt it in its larger modern engines.

Today's modern heavy-duty diesel engines use a combination of
**combustion control + DPF + SCR + DOC** — the best of both
philosophies. And the next challenge is no longer NOx: it's CO₂ and
decarbonization.

This series on ACERT is, in a sense, the story of a transitional
technology — well engineered, useful in its time, but overtaken by
regulatory reality. Understanding it is key to understanding why
modern diesel engines are built the way they are.
