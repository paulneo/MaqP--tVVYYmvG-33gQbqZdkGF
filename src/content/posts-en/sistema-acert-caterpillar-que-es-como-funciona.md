---
title: "What Is Caterpillar's ACERT System and How Does It Work"
published: 2026-06-12
draft: false
featured: false
description: "ACERT combines 5 technologies (series turbochargers, CGI, DPF, high-pressure injection, and valve actuation) to meet EPA 2007 without sacrificing power."
category: mecanica-automotriz
formato: concepto
nivel: intermedio
lang: "en"
tags:
  - "caterpillar"
  - "sistema-acert"
  - "motor-diesel"
  - "emisiones-diesel"
  - "epa-2007"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/acert/sistema-acert-caterpillar-que-es-como-funciona
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "What does ACERT stand for in Caterpillar engines?"
    a: "ACERT stands for Advanced Combustion Emissions Reduction Technology. It isn't a single part but an integrated set of 5 technologies working together to cut pollutants (PM, NOx, HC, CO) without hurting engine performance. Caterpillar launched it in response to the EPA 2004 standards and expanded it to meet EPA 2007."
  - q: "What components make up the ACERT system?"
    a: "Five main components work together: (1) series turbochargers that boost intake air efficiency, (2) CGI (Cooled Gas Induction), which reintroduces cooled exhaust gas to reduce NOx, (3) DPF (Diesel Particulate Filter), which traps soot, (4) a high-pressure fuel injection system that atomizes fuel more finely, and (5) variable intake valve actuation. All of it is coordinated by the engine's ECU."
  - q: "Is ACERT better than SCR (Selective Catalytic Reduction)?"
    a: "It's not a question of better or worse — they're different approaches. ACERT reduces emissions BEFORE they leave the engine (in-cylinder), with no need for urea/DEF. SCR treats them AFTER, in the exhaust, using a catalyst that requires liquid urea. ACERT has fewer fluids to top off in the field but requires an expensive DPF; SCR needs a constant urea supply but allows simpler combustion. Most modern manufacturers now combine both: EGR/CGI + SCR + DPF."
  - q: "Which Cat engines use ACERT?"
    a: "ACERT rolled out starting in 2004 in on-highway engines (trucks) and later extended to off-highway equipment. The main models with ACERT are the C-series — C7, C9, C11, C13, C15, C18, and C32 — used in excavators, wheel loaders, mining trucks, generators, and marine equipment. Some older 3406- or 3408-type engines were remanufactured at select plants to add ACERT-compatible components."
  - q: "How does ACERT affect fuel consumption?"
    a: "Net fuel consumption on ACERT engines stays similar to, or slightly higher than, pre-2007 engines. DPF regeneration, when it occurs, burns some extra fuel (typically an additional 1-3%). In exchange, the engine meets EPA standards that would otherwise have blocked its sale. Bottom line: you don't gain on fuel economy, but the equipment stays legal, sellable, and environmentally compliant."
sources:
  - title: "Caterpillar Global Manpower Development — ACERT 2007 Systems Overview"
    url: "https://heavyequipments.org/"
  - title: "US EPA — Heavy-Duty Highway Engine Standards"
    url: "https://www.epa.gov/emission-standards-reference-guide/epa-emission-standards-heavy-duty-highway-engines"
  - title: "Caterpillar — Emissions Technology (Corporate)"
    url: "https://www.cat.com/"
related:
  - las-emisiones-reguladas-del-motor-diesel
  - motores-caterpillar-c7-c9-c13-c15-comparativa
  - que-es-un-dpf-diesel-particulate-filter
---

In 2007, the US EPA imposed the strictest emissions limits the diesel engine
industry had ever faced. Every manufacturer had to redesign how their engines
burned fuel and what gases they let out into the air. Caterpillar answered with
its own architecture: **ACERT**.

ACERT isn't a bolt-on part. It's a **coordinated set of five technologies**
working together to cut pollutants without punishing power output. It's the
reason a 2010 Cat C15 can produce almost the same output as a 1998 model while
meeting standards five times stricter.

## What does ACERT mean?

ACERT stands for **Advanced Combustion Emissions Reduction Technology**. The
key word is **"combustion"** — Caterpillar's philosophy was to attack the
problem **inside the cylinder**, not just treat the gases after they leave.

Other manufacturers, especially European ones like Volvo or MAN, bet on
**SCR** (Selective Catalytic Reduction): they let the engine burn fuel the
usual way and treat the exhaust gases with urea downstream. Cat chose the
opposite path: modify combustion itself to produce fewer pollutants from the
start, then use a filter (DPF) to catch what's left.

## Why ACERT was created

Between 2004 and 2010, EPA standards (and their European equivalents, Euro V
and VI) cut allowable diesel emissions limits by **more than 90%**. Four
pollutants were the focus:

- **Particulate matter** (PM): the black soot you see coming out of the exhaust
- **Nitrogen oxides** (NOx): invisible gases that cause acid rain and smog
- **Hydrocarbons** (HC): unburned fuel
- **Carbon monoxide** (CO): a toxic gas from incomplete combustion

With traditional 1990s-era engines, it was impossible to meet those limits
without sacrificing power or fuel economy. A completely new architecture was
needed.

## The 5 components of the ACERT system

### 1. Series turbochargers

Instead of one large turbo, ACERT uses **two turbos connected in sequence**:
a high-pressure unit (small, fast-spooling, kicks in at low RPM) and a
low-pressure unit (large, delivers volume at high RPM). This gives fast
response at idle and strong power at full load, with much less turbo lag.

The result: **more air per cycle**, which lets the engine burn more fuel
completely, cutting soot (PM) and carbon monoxide (CO).

### 2. CGI — Cooled Gas Induction

CGI is Cat's version of EGR (Exhaust Gas Recirculation). It takes a portion
of the exhaust gas, **cools it in a dedicated heat exchanger**, and
reintroduces it into the intake.

Why? Cooled exhaust gas **lowers peak combustion temperature**. Since NOx
forms mainly when the nitrogen in the air reaches temperatures above
1,500°C (2,732°F), cooling combustion lets the engine produce **up to 40%
less NOx** than an engine without CGI.

### 3. DPF — Diesel Particulate Filter

This is the most visible ACERT component. A large metal canister mounted in
the exhaust that **traps soot** (unburned carbon particles) in an internal
ceramic matrix made of cordierite or silicon carbide.

Every so many hours, the system runs a **regeneration**: it burns off the
accumulated soot at high temperature, leaving only minimal ash. Without a
DPF, there would be no way to meet the EPA 2007 PM limit (10 times stricter
than EPA 2004).

We've published a [full DPF guide](/posts/que-es-un-dpf-diesel-particulate-filter/)
covering its structure, sensors, and maintenance.

### 4. High-pressure injection system

ACERT injectors operate at **1,800 bar (26,000 psi) or more** (versus
800-1,200 bar on pre-2007 engines). This atomizes the diesel into much
finer droplets, which mix better with air and **burn more completely**.

The ECU also controls **multi-pulse timing** per cycle: a small "pilot"
injection before the piston rises, the main injection, and one or two
"post-injections" that assist DPF regeneration. All of it happens in
milliseconds.

### 5. Variable intake valve actuation

A mechanism inside the engine's cylinder head allows **changing when the
intake valves open and close**. This adjusts the amount of air and the
"overlap" with the exhaust valves depending on RPM.

At idle it reduces airflow (less soot); under high demand it maximizes it
(more power). It's an industrial version of what sports cars call "VVT" or
"VVT-i."

## How ACERT compares to SCR

The comparison between these two approaches sparked a **huge technical
debate in the industry between 2007 and 2015**:

| Aspect | ACERT (Cat) | SCR (Volvo, MAN) |
|---|---|---|
| Approach | Reduces in-cylinder | Treats in exhaust |
| Requires urea/DEF | ❌ No | ✅ Yes |
| Needs a DPF | ✅ Yes (large) | Optional |
| Maintenance cost | Medium | Low, but + urea |
| Electronic complexity | High | Medium |
| Space required | Compact | Takes up more volume |

Today, most modern manufacturers **combine both approaches**: EGR/CGI +
DPF + SCR. It's no longer "one or the other." Post-2011 Cat engines
(Tier 4 Final) also incorporate SCR with urea, complementing the original
ACERT design.

## Operational impact of ACERT

For anyone operating a machine with ACERT, some practical things change
compared to pre-2007 engines:

- **Fuel consumption**: essentially the same, with a slight increase from
  DPF regeneration (~1-3%).
- **Diagnostic complexity**: much higher. There are dozens of sensors
  (temperature, DPF differential pressure, CGI flow, air quality) and it's
  not practical to diagnose without a service computer (Cat ET).
- **Maintenance**: new items such as DPF ash cleaning (every
  4,500-6,000 hours) and CGI system checks that didn't exist before.
- **Cleaner diesel required**: ACERT engines need **ULSD (Ultra Low
  Sulfur Diesel, <15 ppm sulfur)**. Diesel with higher sulfur content
  destroys the DPF's platinum catalyst.

## In summary

ACERT was Caterpillar's answer to a complex regulatory problem: meeting
emissions limits ten times stricter without losing the power and
reliability that define the brand. The solution was integrating five
technologies — series turbochargers, CGI, DPF, high-pressure injection,
and variable valve actuation — into a system coordinated by the engine's
ECU.

For today's operator or technician, understanding ACERT isn't optional:
it's the foundation of how Cat engines have worked since 2007. Any
diagnostic work, predictive maintenance, or troubleshooting comes back to
knowing these five pieces and how they interact. In upcoming articles,
we'll open up each component individually.
