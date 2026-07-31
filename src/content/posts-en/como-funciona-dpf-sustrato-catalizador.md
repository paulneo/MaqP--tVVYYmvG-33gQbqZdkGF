---
title: "How a DPF Works Inside: Substrate, Catalyst, and Washcoat"
published: 2026-06-24
draft: false
featured: false
description: "Ceramic substrate, platinum/palladium catalyst, and washcoat: how the DPF's internal layers work together to trap and oxidize soot."
category: mecanica-automotriz
formato: concepto
nivel: avanzado
lang: "en"
tags:
  - "dpf"
  - "cordierite"
  - "carburo-silicio"
  - "catalizador-platino"
  - "sustrato-ceramico"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/acert/como-funciona-dpf-sustrato-catalizador
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "What is the substrate of a DPF?"
    a: "The substrate is the DPF's internal ceramic matrix — a honeycomb-like structure with thousands of parallel channels where exhaust gases flow and soot gets trapped. It's manufactured from one of two main materials: cordierite (cheaper, lower thermal tolerance) or silicon carbide (more expensive, much better resistance to heat and regeneration cycling). It's the 'heart' of the DPF."
  - q: "What is the washcoat in a DPF?"
    a: "The washcoat is a very thin layer of porous ceramic material (typically alumina or aluminum silicate) applied over the substrate's channel walls. Its job is to dramatically increase the surface area available for the catalyst to be deposited on. Without a washcoat, the catalyst would only contact the flat surface of the channel; with a washcoat, it's distributed across a porous microstructure with an effective surface area thousands of times larger. That's what lets a small amount of platinum catalyze the needed reactions."
  - q: "Why does the DPF use platinum as a catalyst?"
    a: "Platinum has unique chemical properties for catalyzing oxidation at relatively low temperatures (200-350 °C / 392-662 °F). In the DPF it does three things: (1) oxidizes unburned hydrocarbons and CO during normal operation, (2) generates NO₂ from the NO in the exhaust stream (NO₂ helps drive passive regeneration), and (3) lowers the temperature needed to burn off accumulated soot. Alternatives like palladium or rhodium are sometimes combined with platinum depending on the design, but platinum remains dominant thanks to its cost-to-performance balance."
  - q: "Which is better: cordierite or silicon carbide (SiC)?"
    a: "It depends on the application. Cordierite is cheaper, lighter, and has a low coefficient of thermal expansion — good for on-highway engines with moderate thermal cycling. Silicon carbide (SiC) tolerates much higher temperatures (up to 1,400 °C / 2,552 °F sustained versus 900-1,000 °C / 1,652-1,832 °F for cordierite) and holds up better to thermal shock, making it ideal for heavy equipment, mining, and applications with frequent active regenerations. The downside of SiC is cost — it can triple the price of the DPF. In Cat's off-highway lineup, cordierite is used in most standard applications, while SiC is reserved for the most demanding ones."
  - q: "How much platinum is in a typical DPF?"
    a: "Very little by weight but a lot in cost: a typical truck DPF contains between 2 and 5 grams of platinum (sometimes also palladium and rhodium). At 2025 platinum prices (~USD 30-35 per gram), that's USD 60-175 just in precious metals. A complete truck DPF costs USD 3,000-6,000 new — the rest of the cost is in the ceramic substrate, the metal housing, sensors, the washcoat, and manufacturing. In large excavators with dual DPFs, platinum content can reach 10-15 grams."
sources:
  - title: "Caterpillar Global Manpower Development — ACERT 2007 Systems Overview"
    url: "https://heavyequipments.org/"
  - title: "Corning — Cordierite DPF Substrates Technical Documentation"
    url: "https://www.corning.com/"
  - title: "NGK Insulators — Silicon Carbide DPF Technology"
    url: "https://www.ngk.co.jp/"
  - title: "DieselNet — DPF Materials and Substrate Technology"
    url: "https://dieselnet.com/tech/dpf.php"
related:
  - que-es-un-dpf-diesel-particulate-filter
  - regeneracion-dpf-pasiva-activa-forzada
  - sensores-componentes-dpf
---

A DPF **isn't a magic box** that just traps soot. It's a precision
engineering component built from advanced materials: a **ceramic
matrix with thousands of channels**, coated with a **porous
microstructured layer** called washcoat, on top of which a **precious
metal catalyst** is deposited — typically platinum, sometimes combined
with palladium or rhodium.

Each layer has a specific job. Understanding how they work together is
the foundation for knowing why a DPF can fail, why some last longer
than others, and why poor-quality diesel or the wrong oil can destroy
one in a matter of hours.

## DPF anatomy: 3 stacked layers

Cut a DPF in half and look at it under a microscope, and you'll see
three things:

1. **The substrate**: the ceramic matrix with thousands of
   honeycomb-style channels.
2. **The washcoat**: a porous layer coating the substrate walls.
3. **The catalyst**: microscopic particles of precious metal deposited
   on the washcoat.

Let's go through each layer.

## Layer 1: the ceramic substrate

The substrate is the DPF's **physical structure**. It determines how
much soot the filter can hold, how much gas flow it can handle, and how
much temperature it can withstand.

### Wall-flow structure

The substrate's geometry is called **wall-flow**. The channels are
**alternately plugged**:

- One channel is plugged on the inlet side.
- The neighboring channel is plugged on the outlet side.
- The next one is plugged on the inlet side again. And so on.

This alternating pattern forces the exhaust gases to **pass through the
porous walls** between channels to get from the inlet side to the
outlet side. And it's on those walls that soot gets trapped.

A typical substrate has **200-300 channels per square inch (CPSI)** and
wall thickness of **300-400 microns**.

### The two dominant materials

The substrate is manufactured primarily from two ceramic materials:

#### Cordierite

A magnesium-aluminum silicate mineral (Mg₂Al₄Si₅O₁₈), produced by
sintering clays and talc at high temperature.

**Advantages**:
- **Lower cost** (relatively speaking — it's still advanced ceramic).
- **Low coefficient of thermal expansion** — doesn't crack under small
  temperature swings.
- **Low density** — lighter substrates, lighter complete DPF units.

**Disadvantages**:
- **Relatively low melting point** (~1,450 °C / 2,642 °F).
- **Limited sustained thermal tolerance** — can't handle more than
  900-1,000 °C (1,652-1,832 °F) for extended periods.
- **Less resistant to severe thermal shock** — an uncontrolled
  regeneration event that hits 1,100 °C (2,012 °F) can crack it.

**Typical application**: on-highway trucks, medium-duty heavy
equipment, buses, stationary generators.

#### Silicon carbide (SiC)

A compound of silicon and carbon (SiC), produced by industrial
sintering at temperatures above 2,000 °C (3,632 °F).

**Advantages**:
- **Very high melting point** (2,700 °C / 4,892 °F).
- **Sustained thermal tolerance up to 1,400 °C (2,552 °F)** — withstands
  aggressive regenerations and severe thermal cycling.
- **Excellent thermal conductivity** — heat distributes evenly,
  avoiding hot spots that could crack the material.
- **High mechanical strength** — handles vibration and shock well.

**Disadvantages**:
- **High cost** — can triple the price of a cordierite substrate.
- **Higher density and weight** — heavier DPF units.
- **Greater thermal rigidity** — requires segmentation (several
  blocks assembled together) to accommodate expansion, adding
  manufacturing complexity.

**Typical application**: mining (where duty cycles are extreme),
heavy-duty equipment, marine and rail applications.

Across the Cat ACERT lineup, most standard applications use
**cordierite**; the most demanding ones (793 mining trucks, 6015+
excavators) use **silicon carbide**.

## Layer 2: the washcoat

A **very thin, highly porous layer** called washcoat is applied over
the substrate walls. It's a slurry of ceramic oxides (typically alumina
Al₂O₃, sometimes mixed with silicates and stabilizers) applied as a
liquid suspension and then calcined.

### Main function: effective surface area

The washcoat **doesn't filter soot** and **doesn't catalyze
reactions** on its own. Its function is purely structural: **increase
the surface area available for the catalyst to be deposited on**.

Without a washcoat, the catalyst would only contact the flat surface of
the substrate walls — very little area. With a washcoat, a **porous
microstructure** is created with an effective surface area **hundreds
to thousands of times larger**. This lets very little precious metal
catalyze the needed reactions.

### Technical requirements

A good washcoat needs to:

- Adhere firmly to the substrate even under extreme thermal cycling.
- Maintain its porosity after thousands of hours at high temperature.
- Remain chemically stable against exhaust gases (sulfates, soot,
  water, acids).
- Not excessively restrict gas flow.

When the washcoat degrades (thermal aging, sulfur contamination, or
metal contamination from engine oil), it loses effective surface area
and the catalyst becomes "encapsulated" — the DPF **stops working
well** even though the substrate itself is intact. This is a common
cause of premature replacement.

## Layer 3: the platinum catalyst

**Microscopic particles of precious metal** are deposited on the
washcoat — typically:

- **Platinum (Pt)**: the main player. Catalyzes the oxidation of HC and
  CO, and the formation of NO₂ that drives passive regeneration.
- **Palladium (Pd)**: sometimes combined with platinum to improve
  low-temperature activity and reduce cost.
- **Rhodium (Rh)**: less common in DPFs (more commonly used in
  three-way catalysts on gasoline engines), but it does appear in some
  designs.

### Quantity and cost

A typical DPF contains **between 2 and 5 grams of platinum**
distributed across the entire internal surface. That may sound like
little, but:

- Platinum price in 2025: **USD 30-35 per gram**.
- Precious metal content per DPF: **USD 60-175**.

That's a significant fraction of the component's total cost. It's why
used DPFs have resale value as scrap for precious metal recovery.

### What reactions it catalyzes

The platinum catalyst in the DPF performs three functions
simultaneously:

1. **HC oxidation**: unburned hydrocarbons + O₂ → CO₂ + H₂O
2. **CO oxidation**: 2CO + O₂ → 2CO₂
3. **NO₂ formation**: 2NO + O₂ → 2NO₂

The third is critical: **NO₂ is a much more aggressive oxidizer than
O₂**, and it helps **burn off accumulated soot** at much lower
temperatures (200-350 °C / 392-662 °F) than oxidation with pure oxygen
alone (which requires 550+ °C / 1,022+ °F).

This is the mechanism behind the DPF's **passive regeneration** — the
filter cleans itself while the engine runs under normal operating
conditions, with no intervention needed.

## What destroys these 3 layers

Each layer has its own enemy:

### Enemies of the substrate
- **Uncontrolled regenerations** that exceed 1,100 °C / 2,012 °F
  (cordierite) or 1,400 °C / 2,552 °F (SiC) → internal cracking.
- **Thermal shock** from excessive soot buildup followed by a forced
  regeneration.
- **Extreme vibration** without proper elastic mounting.

### Enemies of the washcoat
- **Thermal aging** at sustained high temperature → loss of porosity.
- **Sulfate contamination** from fuel with high sulfur content.
- **Engine oil metals** (Ca, Zn, P) that deposit and "poison" the
  surface.

### Enemies of the catalyst
- **Sulfur in the fuel** → sulfur bonds with the platinum and blocks
  catalytic activity. That's why **ULSD (Ultra Low Sulfur Diesel,
  <15 ppm)** is used.
- **Heavy metals from engine oil** — same mechanism. That's why
  low-SAPS **CJ-4 or CK-4 oil** (Sulfated Ash, Phosphorus, Sulfur) is
  required.
- **Poisoning from poorly formulated alternative fuels** (uncertified
  B100 biodiesel, poorly combusted LPG in dual-fuel applications).

## Bottom line

The DPF combines three layers of technology: a ceramic substrate that
structures the filter and withstands heat, a washcoat that multiplies
the effective surface area, and a precious metal catalyst that speeds
up the chemical reactions inside the filter.

Each layer is sensitive to specific factors — extreme temperature,
sulfur, oil-derived metals — and **keeping all three in good shape
depends on the fuel and oil you use**. Running ULSD diesel and CJ-4/CK-4
oil isn't a marketing recommendation — it's a technical requirement for
all three layers to work as designed.

In upcoming articles, we'll cover how regeneration works — the process
that burns off accumulated soot — and how maintenance and ash cleaning
are done once the DPF can no longer self-clean.
