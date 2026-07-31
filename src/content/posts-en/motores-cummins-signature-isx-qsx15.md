---
title: "Cummins Signature, ISX, and QSX15 Engines: The Complete Guide"
published: 2026-07-06
draft: false
featured: false
description: "The Cummins Signature, ISX, and QSX15 are the most widely used 15-liter engine family in heavy trucks and equipment. We cover features, differences, and applications."
category: mecanica-automotriz
formato: guia
nivel: intermedio
lang: "en"
tags:
  - "cummins"
  - "motor-signature"
  - "motor-isx"
  - "qsx15"
  - "motores-diesel"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/cummins-volvo-aceite/motores-cummins-signature-isx-qsx15
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "What's the difference between the Cummins Signature, ISX, and QSX15 engines?"
    a: "All three share the same 15-liter block, with a 137 mm bore, 169 mm stroke, and 1-5-3-6-2-4 firing order. The differences come down to application and configuration. The SIGNATURE is the flagship version for heavy on-highway trucking (Class 8 in the US, and equivalents elsewhere). The ISX is the most common on-highway version — same mechanical family, different marketing and emissions tiers. The QSX15 is the industrial and power-generation version, with options for a larger oil pan (up to 95 L) and different calibration for continuous-duty load. Service procedures are practically identical across all three."
  - q: "How much power does a Cummins Signature/ISX generate?"
    a: "The typical range is 400 to 600 HP depending on calibration. Common ranges: 400-450 HP for standard trucking applications, 500-550 HP for heavy-duty work and tandem-trailer pulling, 600 HP for premium configurations and specific applications. The industrial QSX15 usually runs fixed calibrations matched to the equipment it's mounted on (generator, pump, large compressor). The exact power rating for your specific engine is always on the engine data plate, mounted on top of the rocker cover."
  - q: "How much does a Cummins Signature ISX engine weigh?"
    a: "Official weights from the service manual. ON-HIGHWAY version: 1,202 kg dry / 1,266 kg wet with oil and coolant. INDUSTRIAL version: 1,524 kg dry / 1,628 kg wet. POWER GENERATION version: 1,370 kg dry / 1,474 kg wet. The difference between versions comes from the oil pan (larger on industrial), the flywheel, and certain accessories. A complete powertrain (with transmission and auxiliaries) can exceed 2 tons."
  - q: "How much oil does a Cummins ISX hold?"
    a: "It depends on the application. ON-HIGHWAY and INDUSTRIAL: pan capacity of 37.9 to 41.6 liters (10-11 gallons), total capacity with filters 45.4 liters (12 gallons). POWER GENERATION with the optional OP1493 pan: 83.3 to 94.6 liters (22-25 gallons), total capacity 98.4 liters (26 gallons). All versions use a combined full-flow/bypass filter with a capacity of 3.78 liters (1 gallon). That's A LOT of oil compared to smaller engines — a full change with premium oil runs around USD 200-500."
  - q: "What machines use these engines?"
    a: "Cummins Signature/ISX/QSX15 engines are used in applications that demand high sustained power. In TRUCKS: Kenworth, Peterbilt, Freightliner, International, Mack, Volvo (in some configurations), and long-haul buses. In HEAVY EQUIPMENT: rotary drill rigs, large mining compressors, frac pumps, medium mining trucks. In GENERATION: 400-600 kW stationary generators. In MARINE: propulsion and auxiliaries. The QSX15 in particular is a world leader in stationary diesel generation for critical backup power (hospitals, data centers)."
sources:
  - title: "Signature, ISX, and QSX15 Engines Troubleshooting and Repair Manual (Cummins Bulletin 3150971-00)"
    url: "https://www.maquinariaspesadas.org/blog/2853-manual-motores-signature-isx-qsx15-cummins-diagnostico-reparacion"
  - title: "Cummins — Signature ISX Product Line"
    url: "https://www.cummins.com/"
  - title: "SAE International — Heavy-Duty Diesel Engine Standards"
    url: "https://www.sae.org/"
related:
  - identificacion-motor-cummins-numeros-serie
  - diagnostico-fallas-cummins-isx
  - bloque-cilindros-cummins-isx
---

The **Cummins Signature, ISX, and QSX15** engines are the backbone of
heavy trucking and industrial equipment across the Americas. They
share the same **15-liter** mechanical architecture — the most popular
in the segment — but differ in calibration, accessories, and final
application. This article covers what they are, how they differ, and
where you'll find them in the field.

Everything that follows comes from the **official Cummins Engine
Company Troubleshooting and Repair Manual** (Bulletin 3150971-00),
which Cummins published as the reference for service technicians. It's
the authoritative source — not a third-party interpretation or
summary.

## Cummins' 15-liter family

All three engines are born from the same base design:

- **Displacement**: 15 liters (912 cubic inches).
- **Bore x Stroke**: 137 mm × 169 mm.
- **Configuration**: 6 cylinders in-line.
- **Firing order**: 1-5-3-6-2-4.
- **Crankshaft rotation** (viewed from the front): clockwise.

This base design is combined with different:

- **Fuel systems** (pump-injector, common rail HPCR).
- **Aftertreatment systems** (depending on emissions standards).
- **Electronic calibrations** (ECM map).
- **Auxiliary components** (pan, flywheel, accessories).

And from there, the three main variants are born.

## Signature: the flagship for heavy trucks

The **Signature** is the most recognized engine in the family.
Designed for **Class 8 heavy-duty trucks** — the famous "18-wheelers"
that cover thousands of miles hauling 40+ ton loads.

### Key Signature features

- **Power**: 400-600 HP depending on calibration.
- **Peak torque**: typically 1,850-2,050 Nm.
- **Dry weight**: 1,202 kg (on-highway).
- **Oil capacity**: 41.6 liters (high pan) / 37.9 liters (low pan).
- **Coolant**: 24 liters.
- **Fuel system**: High Pressure Common Rail (HPCR) on the latest
  generations.

### Typical applications

- Long-haul tractor trucks (Kenworth, Peterbilt, Freightliner).
- Premium interstate buses.
- High-tonnage agricultural tractors.
- Drayage trucks in port operations.

Across the Americas, the Signature dominates the **double-trailer**
segment (tractor units + tandem trailers) thanks to its ability to
sustain high power over thousands of continuous hours.

## ISX: the on-highway standard

The **ISX** is Cummins' best-selling on-highway line over the last two
decades. It shares almost 100% of its mechanical parts with the
Signature, but differs in:

- **Calibrations to meet EPA standards** across different model years
  (EPA 2002, 2007, 2010, 2013).
- **Different aftertreatment systems** depending on the standard (EGR
  + DPF since 2007, plus SCR since 2010).
- A **slightly wider power range** in specific fleet calibrations.

### Key ISX features

- **Power**: 385-600 HP depending on year and calibration.
- **Emissions systems**: vary by model year (critical for
  maintenance).
- **Transmission compatibility**: Eaton Fuller manuals, automated
  manuals, and Allison automatics.

### The important detail

The ISX is a **range of engines produced over 20+ years** — Cummins
has continually evolved the same model internally with different
configurations. A 2005 ISX and a 2015 ISX are **very different under
the skin** (one has EGR + DPF, the other adds SCR with DEF). When
buying a used ISX, always check:

1. **Exact model year**.
2. **Emissions standard** it meets.
3. **Aftertreatment system history** (older ones are simpler and
   cheaper to maintain).

## QSX15: the industrial and generation version

The **QSX15** is the **industrial** application of the same 15-liter
engine. It's distinguished by:

- **Optimized for continuous load**: while a truck's speed and load
  vary constantly, a generator or industrial compressor runs at the
  same regime for hours or days.
- **Optional larger pan**: up to 94.6 liters (25 gallons) — vs 41.6 L
  on the on-highway version. More oil = longer intervals between
  changes in continuous operation.
- **Internal reinforcements** for sustained high-load vibration.
- **Different interfaces** to couple with generators, pumps, and
  compressors.

### Typical QSX15 applications

- **Stationary generators** 400-600 kW (data centers, hospitals,
  mining).
- **Large industrial compressors**.
- **Hydraulic fracturing pumps** in oil wells.
- **Large-diameter rotary drill rigs**.
- **Marine propulsion** in mid-sized vessels.

### One key fact

The QSX15 in a generation configuration can accumulate **tens of
thousands of continuous hours** of operation with scheduled
maintenance. It's common to find units still in service with
60,000-80,000 hours — something rarely seen in on-highway
applications given the type of use.

## Compared technical specifications

All data comes from the official Cummins manual:

| Parameter                        | Signature   | ISX         | QSX15       |
| --------------------------------- | ----------- | ----------- | ----------- |
| **Displacement**                  | 15 L        | 15 L        | 15 L        |
| **Bore × Stroke**                  | 137×169 mm  | 137×169 mm  | 137×169 mm  |
| **Cylinders**                      | 6 in-line   | 6 in-line   | 6 in-line   |
| **Firing order**                   | 1-5-3-6-2-4 | 1-5-3-6-2-4 | 1-5-3-6-2-4 |
| **Typical power**                  | 400-600 HP  | 385-600 HP  | 400-600 HP  |
| **Dry weight**                     | 1,202 kg    | 1,202 kg    | 1,370 kg    |
| **Wet weight**                     | 1,266 kg    | 1,266 kg    | 1,474 kg    |
| **Pan capacity (standard)**        | 37.9-41.6 L | 37.9-41.6 L | 83.3-94.6 L |
| **Coolant capacity**               | 24 L        | 24 L        | 24 L        |
| **Thermostat (range)**             | 82-93°C     | 82-93°C     | 82-93°C     |

## Key technical details

### Valve adjustment

All three engines use the same adjustment spec (values from the
manual):

- **Intake valve**: 0.36 mm (0.014 in) clearance.
- **Exhaust valve**: 0.69 mm (0.027 in) clearance.
- **Injector torque**: 8 N·m (70 lb-in).
- **Engine brake adjustment** (where applicable): 7.00 mm (0.276 in).

These are exact values a technician uses every time the engine is
opened for major service. Deviating from these ranges causes
combustion problems and accelerated wear.

### Oil pressures

From the manual, normal operating ranges:

- **Idle oil pressure** (minimum at 93°C oil temperature): **69 kPa
  (10 psi)**.
- **Pressure at governed speed, no load** (on-highway and industrial):
  **241-276 kPa (35-40 psi)**.
- **Pressure with a cold engine** (startup): up to **900 kPa
  (130 psi)** — normal due to increased viscosity.
- **Pressure with a hot engine in operation**: **241-276 kPa (35-40
  psi)** — the healthy range.

If your gauge shows values outside these, something's going on: overly
diluted oil, a clogged filter, a worn pump, or worn bearings.

### Cooling system

- **Capacity**: 24 liters for the engine alone (the complete system
  with the radiator and hoses can total 40-60 L depending on the
  installation).
- **Thermostat**: opens gradually between 82°C and 93°C.
- **Overtemperature alarm**: 110°C (230°F) — the point where the
  system alerts before emergency shutdown.
- **Maximum system pressure**: 227 kPa (33 psi) with the thermostat
  closed at maximum no-load speed.

## How to identify your specific engine

On the **top of the rocker cover** you'll find the **engine data
plate**. It has what you need to order parts or talk to an authorized
shop:

1. **Engine Serial Number (ESN)**.
2. **Critical Parts List**.
3. Exact **model**.
4. **Rated power and RPM** in the factory calibration.

There's also an **ECM (Electronic Control Module) plate** on the front
of the ECM containing:

- **P/N** (Part Number).
- **S/N** (Serial Number).
- **D/C** (Date Code).

These two numbers are the reference Cummins uses globally. Without
them, it's hard to get exact parts or technical support.

## Maintenance and service life

Cummins Signature/ISX/QSX15 engines have a reputation as **long-lived
engines** when properly maintained. Real-world references:

- **Typical on-highway service life**: 1,000,000 to 1,500,000 km before
  a major overhaul.
- **Industrial service life**: 15,000-25,000 hours of continuous
  operation.
- **Stationary generation service life**: 40,000-80,000 hours.

Reaching these numbers requires:

- Quality **CJ-4 or CK-4** oil, changed on schedule (15,000-40,000 km
  on-highway, typically 500 hours industrial).
- **Genuine Cummins Fleetguard** filters.
- **ULSD** (low-sulfur) fuel.
- **ELC (Extended Life)** coolant to minimize internal corrosion.
- Periodic diagnostics with **Cummins INSITE** (the official
  diagnostic software).

## In summary

The **Cummins Signature, ISX, and QSX15** engines share the same
15-liter base architecture, adapted to three worlds: **heavy trucking
(Signature)**, **mass-market on-highway (ISX)**, and **industrial /
generation (QSX15)**.

They share almost 100% of their internal components — a technician who
knows how to service an ISX knows how to service a Signature. The
differences lie in electronic calibration, auxiliary accessories, and
pan/reinforcement options.

With correct maintenance, these are engines that can accumulate **tens
of thousands of hours** or **millions of kilometers** of operation.
They're the reason Cummins has been a world leader in heavy diesel
engines for decades.

In upcoming articles in this series we'll open up each system:
identification, diagnostics, fuel, injectors, oil, cooling, intake,
exhaust, and electronic control. All based on the official Cummins
service manual.
