---
title: "Cummins ISX/Signature Troubleshooting: Common Symptoms"
published: 2026-07-09
draft: false
featured: false
description: "Cummins ISX engines have characteristic failure symptoms. We cover the 15 most common per the official manual: low power, smoke, noise, temperatures."
category: mecanica-automotriz
formato: guia
nivel: intermedio
lang: "en"
tags:
  - "cummins"
  - "diagnostico-fallas"
  - "isx"
  - "signature"
  - "motores-diesel"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/cummins-volvo-aceite/diagnostico-fallas-cummins-isx
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "What's the most common problem in Cummins ISX engines?"
    a: "LOW POWER OUTPUT is the most frequently reported symptom. In the official Cummins manual it's section TS-59 (one of the longest). Typical causes are: (1) saturated fuel filter, (2) restricted air filter, (3) worn injectors, (4) turbocharger problems, (5) stuck EGR, (6) saturated DPF on post-2007 engines. Diagnosis is an ordered process — the manual recommends going from simplest to most complex before disassembling any components."
  - q: "What does excessive black smoke on an ISX mean?"
    a: "Rich combustion — there's more fuel than the engine can burn cleanly. The official manual (section TS-114) points to typical causes: (1) CLOGGED AIR FILTER — the first and most common. Without enough air, fuel doesn't burn completely. (2) Worn turbocharger, not generating enough boost. (3) Worn injectors atomizing poorly. (4) Faulty MAF or intake pressure sensors. (5) EGR valve stuck open. ALWAYS start by checking the air filter — it takes 15 minutes and resolves the problem in 60% of cases."
  - q: "How do I interpret abnormal engine noises?"
    a: "The manual classifies noises by origin. PISTON NOISE: metallic knocking synced with RPM, usually indicates excessive piston-to-liner clearance or a combustion problem (incorrect timing). CONNECTING ROD BEARING NOISE: deeper knock, synced with RPM, appears under load. Very serious — can escalate to a broken rod. MAIN BEARING NOISE: an even deeper knock, mainly at idle. Another serious problem. VALVE NOISE: a fast clicking that rises and falls with RPM, generally from valve lash out of tolerance. This last one is the only one that can be fixed without opening the engine."
  - q: "What do I do if the engine starts but doesn't keep running?"
    a: "This is a specific symptom (section TS-79 of the manual). Most frequent causes, in order: (1) Air in the fuel system after maintenance (incomplete purge). (2) Fuel contaminated with water — the filter shuts off when it detects the level. (3) Worn transfer pump, not maintaining minimum pressure. (4) A leak in the low-pressure fuel line. (5) Intermittent crankshaft position sensor (CKP). Diagnosis requires a fuel system pressure test and reading the ECM with Cummins INSITE — the software shows whether the ECM is seeing CKP pulses."
  - q: "When is a full engine overhaul justified?"
    a: "It depends on accumulated hours, oil analysis, compression, and consumption. Manual references: a major overhaul is typical between 500,000 and 1,000,000 km on-highway (or 15,000-25,000 hours industrial). Warning signs: (1) Compression below 80% of nominal on any cylinder. (2) Oil consumption higher than 1 L every 3,000 km. (3) Oil analysis shows high metals (copper, iron, aluminum). (4) Leaks from main seals. (5) Bearing noise. An overhaul costs USD 20,000-40,000; a major repair can cost USD 10,000-20,000. The rule of thumb: if the engine has more than half of its estimated remaining service life left, the overhaul is worth it; if less, replacing with a remanufactured unit is usually better."
sources:
  - title: "Signature, ISX, and QSX15 Engines Troubleshooting and Repair Manual — TS Section"
    url: "https://www.maquinariaspesadas.org/blog/2853-manual-motores-signature-isx-qsx15-cummins-diagnostico-reparacion"
  - title: "Cummins INSITE Diagnostic Software"
    url: "https://www.cummins.com/"
related:
  - motores-cummins-signature-isx-qsx15
  - identificacion-motor-cummins-numeros-serie
  - sistema-aceite-cummins-isx
---

**Cummins Signature/ISX/QSX15** engines follow a clear pattern of
failures and symptoms. The official service manual (TS Section —
Troubleshooting Symptoms) documents more than 120 distinct symptoms
with step-by-step diagnostic procedures.

In this article we cover the **15 most common symptoms** you'll run
into in a shop or while operating these engines. All of them come from
the official manual and are the starting point for successful
diagnosis — correctly identifying the symptom is half the job.

## How to diagnose systematically

Before going through the specific symptoms, it's important to
understand the **method** Cummins recommends:

**Step 1**: Locate the **symptom** in the TS Section. The manual is
organized by symptom, not by component.

**Step 2**: Follow the **list of possible causes**, ordered from most
to least probable.

**Step 3**: Verify each cause with a specific test procedure before
replacing any component.

**Step 4**: Confirm the repair by **replicating the condition** that
caused the symptom.

**Golden rule**: NEVER swap components "to try it out." Every
replacement must be the result of a test that justifies it. Cummins
ISX engines are expensive — misdiagnosing and replacing a turbocharger
costs USD 3,000-5,000.

## The 15 most common symptoms

### 1. Low engine power output (TS-59)

**The most frequent**. The engine doesn't reach expected rated power.

**Typical causes** (in order of probability):

- Saturated fuel filter.
- Restricted air filter (check the maximum allowable restriction on
  the data plate).
- Worn injectors.
- Turbocharger problems (low boost pressure).
- EGR valve stuck open.
- Faulty pressure sensors.
- Poor-quality fuel.

**Initial test**: read ECM codes with Cummins INSITE. Check fuel rail
pressure and actual vs. expected boost.

### 2. Excessive black smoke (TS-114)

**Rich combustion** — more fuel than the engine can burn.

**Typical causes**:

- **Clogged air filter** (THE most common — 60% of cases).
- Deteriorated turbocharger (low boost).
- Injectors with poor atomization.
- EGR stuck open (recirculates too much low-oxygen gas).
- Faulty MAF (mass air flow) sensor.

**Initial test**: check the air filter restriction indicator. Compare
actual restriction against spec (250 mm H2O for a clean filter in
on-highway applications).

### 3. Excessive white smoke (TS-118)

**Unburned fuel** or coolant entering the cylinder.

**Typical causes**:

- Engine too cold (normal at startup, resolves once at temperature).
- Injectors with defective spray pattern (late timing).
- Low compression in a cylinder.
- Blown head gasket (coolant entering the cylinder).
- Oil cooler with an internal leak.

**Critical test**: if white smoke persists with the engine hot, it's
SERIOUS. Immediately check compression and coolant presence in the
oil.

### 4. Low lube oil pressure (TS-105)

Engine with pressure lower than spec (35-40 psi with the engine hot at
governed no-load speed).

**Typical causes**:

- **Low oil level** (check FIRST — obvious, but happens often).
- Oil too thin (contamination with fuel or solvent).
- Clogged oil filter.
- Worn oil pump.
- Excessive main or rod bearing clearance (rare but serious).

**Initial test**: check the level with the engine off on level ground.
If the level is OK, measure pressure with an external gauge (sometimes
the sensor itself is faulty).

### 5. Excessive lube oil consumption (TS-101)

Engine consumes more than 1 liter every 3,000 km (on-highway) or a
proportional amount by hours (industrial).

**Typical causes**:

- Worn valve seals (oil enters the cylinder).
- Worn piston rings (oil climbs the liner).
- Turbocharger leaking oil into the intake.
- Air compressor with an internal leak into the system.
- External leaks (obvious but often underestimated).

**Initial test**: full visual inspection for external leaks. Then
exhaust smoke analysis (blue-gray smoke means oil is entering
combustion).

### 6. Excessive fuel consumption (TS-87)

Engine burns 10-20% more fuel than expected.

**Typical causes**:

- Restricted air filter.
- Worn injectors (dosing incorrectly).
- Incorrect injection timing.
- Turbocharger problems.
- Fuel pressure out of spec.
- Aggressive driving style (often underestimated).

**Initial test**: analyze the consumption pattern — if it's sudden,
there's a mechanical failure. If it's gradual (over the last 10,000
km), it may be progressive wear.

### 7. Connecting rod bearing noise (TS-123)

**Deep knock synced with RPM**, especially under load.

**Cause**: rod bearing with excessive clearance from wear.

**This is SERIOUS**: if operation continues, it can escalate to a
broken rod — which destroys the engine block (you've lost the whole
engine).

**Action**: shut down immediately. Diagnosis requires opening the
crankcase. Typical replacement cost: USD 3,000-8,000 depending on
damage.

### 8. Rough idle (TS-65)

Unstable idle, with RPM oscillations.

**Typical causes**:

- Faulty injector (one or more cylinders not delivering the correct
  dose).
- Erratic crankshaft position sensor.
- Faulty idle control (IAC) valve.
- Air in the fuel system.
- Low compression in a cylinder.

**Initial test**: run a **cylinder cutout test** with Cummins
INSITE — it cuts one injector at a time and watches whether RPM
changes. If cutting a specific cylinder doesn't drop RPM, that
cylinder isn't contributing.

### 9. Sudden overheating (TS-21)

Coolant temperature rises rapidly above normal.

**Typical causes**:

- Low coolant level.
- Thermostat stuck closed.
- Broken or severely worn water pump.
- Clogged radiator (internal or external).
- Faulty or damaged fan clutch.
- Blown head gasket (combustion gas entering the cooling system).

**Action**: stop the engine if temperature passes 110°C (the alarm
temperature). Continuing to run at overtemperature destroys the
cylinder head.

### 10. Engine won't start (TS-44 - no smoke, TS-41 - with smoke)

Two different scenarios depending on whether smoke is present.

**No smoke (TS-44)**: fuel isn't reaching the cylinder.

- Clogged fuel filter.
- Faulty transfer pump.
- Air in the system.
- Fuel shutoff solenoid closed.

**With smoke (TS-41)**: fuel reaches the cylinder but doesn't ignite.

- Low compression.
- Timing too advanced or retarded.
- Faulty glow plugs (extreme cold).
- Injectors not atomizing.

### 11. Turbocharger leaking oil (TS-122)

Oil visible in the intake, exhaust, or air filter.

**Causes**:

- Worn turbocharger seals.
- Clogged turbo oil return tube (oil accumulates and leaks past the
  seals).
- Excessive oil pressure.
- Crankcase with positive pressure from a clogged ventilation system.

**Initial test**: check the turbo return tube first — it's the
simplest and most frequent cause.

### 12. Fuel in the lube oil (TS-93)

Oil level rises instead of dropping; diesel smell in the oil.

**Very serious**: fuel dilutes the oil and eliminates lubrication.

**Causes**:

- Faulty injector seals.
- Fuel pump leaking internally into the crankcase.
- Poor combustion — unburned fuel passes by the rings.

**Action**: do NOT keep operating. Diluted oil doesn't protect the
bearings, and the engine can be destroyed within hours.

### 13. Coolant in the oil (TS-112)

Oil with a "milky" appearance (café-au-lait color).

**Very serious**: coolant entering the oil circuit.

**Causes**:

- Blown head gasket.
- Crack in the block or head.
- Oil cooler with an internal leak.
- Crack in the oil pan.

**Action**: shut down immediately. Diagnosis requires a cooling system
pressure test. Major repair.

### 14. Low intake manifold / boost pressure (TS-121)

The turbocharger isn't generating expected pressure.

**Typical causes**:

- Clogged air filter.
- Leaks in the intake system (hoses, clamps).
- Worn turbocharger internals.
- Faulty wastegate (stuck open).
- Faulty boost sensor (false reading).

**Initial test**: pressurize the intake system with air to find leaks.
This test can be done without disassembling anything.

### 15. INSITE communication error (TS-12)

The diagnostic software can't read the ECM.

**Causes**:

- Faulty adapter cable or dirty connector.
- ECM with no power (blown fuse).
- Expired INSITE software license.
- Damaged ECM (serious).

**Initial test**: check voltage at the ECM connector, and try a
different cable/laptop.

## Excessive oil consumption: the most deceptive signal

This symptom deserves special attention. From the official manual:
"normal" oil consumption in an ISX depends on:

- **Operating hours**.
- **Type of work** (light vs. heavy load).
- **Maintenance quality**.

Manual references:

- **New engine (0-100,000 km)**: zero or minimal consumption.
- **Broken-in engine (100,000-500,000 km)**: 0-0.5 L every 5,000 km.
- **Mid-life engine (500,000-800,000 km)**: 0.5-1 L every 5,000 km.
- **Engine near overhaul (900,000+ km)**: 1-2 L every 5,000 km.

Consumption above 2 L every 5,000 km signals that **there's a specific
problem** (it's not just "the engine getting old"). It requires
diagnosis.

## Tools needed for diagnosis

**Software**:

- **Cummins INSITE** — the official diagnostic software. Without it,
  you can't read codes or live parameters. Annual license cost: USD
  1,500-3,000.

**Cable**:

- **Cummins INLINE 7** — the adapter between the laptop and the
  engine. USD 600-1,200.

**Instruments**:

- **Pressure gauges** for fuel, oil, and boost.
- A quality **multimeter** for electrical diagnosis.
- A **gas analyzer** (for checking emissions).
- **Cummins-specific tools** — some parts require special pullers.

## In summary

Diagnosing failures on a Cummins ISX/Signature requires **method**:
identify the correct symptom in the TS Section of the manual, follow
the order of most likely causes, and verify with a specific test
before replacing anything. The 15 symptoms covered here represent more
than 80% of real cases seen in the shop.

The foundational tool is **Cummins INSITE** — without it, you can't
get to the bottom of almost anything on a modern ECM-equipped engine.
It's an essential investment for serious shops.

But the tool doesn't replace judgment. A technician with INSITE but no
method can burn through more parts than an experienced one with just a
multimeter. The discipline of diagnosing before replacing is the
difference between a profitable shop and one that loses money on every
repair.
