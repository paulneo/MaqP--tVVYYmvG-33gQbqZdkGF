---
title: "Pascal's Law in Hydraulics: How Force Gets Multiplied"
published: 2026-07-27
draft: false
featured: false
description: "Pascal's Law explains why a small piston can move enormous loads. We cover the formula, an excavator example, and why it underpins all hydraulics."
category: mecanica-automotriz
formato: concepto
nivel: basico
lang: "en"
tags:
  - "ley-pascal"
  - "hidraulica"
  - "multiplicacion-fuerzas"
  - "principio-fisico"
  - "presion-hidraulica"
image: ""
author: redaccion-tecnica
reviewedBy: redaccion-tecnica
aiAssisted: true
faq:
  - q: "Who was Blaise Pascal?"
    a: "Blaise Pascal (1623-1662) was a French mathematician, physicist, and philosopher who made fundamental contributions to probability theory, calculus, and — what matters here — fluid statics. In 1653 he formulated his law on pressure transmission in fluids, the foundation of all modern hydraulics. He also invented one of the first mechanical calculators in history, and the SI unit of pressure, the Pascal (Pa), bears his name."
  - q: "Does Pascal's Law only apply to liquids?"
    a: "Strictly speaking, it applies to any confined incompressible fluid — typically liquids, since gases are compressible. A similar phenomenon occurs with gases, but other laws apply (Boyle's, Gay-Lussac's) because volume changes with pressure. In hydraulics we use oil (a liquid) precisely because we want pressure to transmit without loss and without energy being absorbed through compression."
  - q: "Why do we say hydraulics 'multiplies force'?"
    a: "Because the output force is proportional to the receiving piston's area. If you apply a force F1 over a small area A1, the resulting pressure (P = F1/A1) transmits to every piston in the system. If another piston has an area A2 ten times larger, the force on that piston is 10 × F1. In an industrial press, you apply 100 kg of force at the pedal and get 10 tons out at the working point."
  - q: "Can force be multiplied indefinitely?"
    a: "No. There are two physical limits. (1) Conservation of energy: multiplying force reduces the distance traveled by the same proportion. If you multiply force by 10, the receiving piston moves 10 times less than the input piston. (2) Material strength: cylinders, valves, and lines have a maximum pressure before failing. A typical industrial system runs up to 350 bar; a high-end one, up to 700 bar. Going beyond that requires special components and a large safety margin."
  - q: "What's the difference between pressure and force?"
    a: "They're related but distinct. FORCE is measured in Newtons (N) or kilogram-force (kgf) and is what pushes or pulls on something. PRESSURE is measured in Pascals (Pa), bar, or psi, and is force divided by area (P = F/A). A small, high-pressure cylinder can generate a lot of force; a large, low-pressure one can generate the same force. In hydraulics we work with both variables — the key formula is always F = P × A."
sources:
  - title: "Hydraulic Systems Manual — Concepts and Circuits"
    url: "https://www.maquinariaspesadas.org/blog/2586-manual-sistemas-hidraulicos-conceptos-circuito-basico-componentes"
  - title: "Bosch Rexroth — Hydraulics Trainer"
    url: "https://www.boschrexroth.com/"
  - title: "SAE International — Fluid Power Fundamentals"
    url: "https://www.sae.org/"
related:
  - que-es-un-sistema-hidraulico-fundamentos
  - bombas-hidraulicas-tipos-engranajes-paletas-pistones
  - cilindros-hidraulicos-simple-doble-efecto
---

All of modern hydraulics rests on **a single physical idea** stated more
than 370 years ago by a Frenchman who also built calculators and wrote
about theology. **Pascal's Law** is simple enough to fit in one sentence,
yet it explains why a piston the size of a soda can can lift 10 tons of
dirt.

In this article we look at exactly what the law says, how it translates
into the math formula we use on the job site, and why it's the conceptual
engine behind all heavy equipment.

## What Pascal's Law says

Formulated by Blaise Pascal in 1653, it literally states:

> *Pressure applied to a confined fluid is transmitted undiminished in
> every direction, and with equal intensity, to every point in the fluid
> and to the walls of the container that holds it.*

In plain terms: **if you push on an enclosed liquid, that pressure
propagates instantly and equally everywhere**. The shape of the container
doesn't matter, distance doesn't matter, orientation doesn't matter.
Pressure is the same at every point.

This behavior sets liquids apart from solids and gases:

- In a **solid**, applying force at one point doesn't automatically
  generate force elsewhere — it has to be transmitted through elastic or
  mechanical deformation.
- In a **gas**, pressure is transmitted, but the volume changes (gases
  are compressible) — part of the energy is "spent" on compression.
- In an **incompressible liquid** (like oil), pressure transmits
  instantly and without loss.

## The formula we use every day

Pascal's Law gives us hydraulics' single most important working formula:

```
P = F / A
```

Where:

- **P** = Pressure (in Pascals, or more practically in **bar** or **psi**).
- **F** = Force (in Newtons or kilogram-force).
- **A** = Area over which the force is applied (in m² or cm²).

Solving for force:

```
F = P × A
```

And that's the formula that answers hydraulics' key question:
**how much force can this cylinder generate at this pressure?**

## Practical example: an excavator cylinder

Let's take a real case. The arm cylinder on a Cat 320D excavator has:

- **Piston bore**: 120 mm.
- **Maximum system operating pressure**: 320 bar.

Let's calculate the force it can generate:

**Step 1** — Piston area:
```
A = π × r²
A = π × (60 mm)²
A = π × 3,600 mm²
A = 11,310 mm² = 113.1 cm² = 0.01131 m²
```

**Step 2** — Convert pressure from bar to Pa (SI units):
```
320 bar × 100,000 = 32,000,000 Pa (or 32 MPa)
```

**Step 3** — Apply the formula:
```
F = P × A
F = 32,000,000 Pa × 0.01131 m²
F = 361,920 N
F ≈ 36.9 tons of force
```

That bucket-sized cylinder can push the equivalent of **almost 37 tons of
force**. Multiply that by the system's lever arm and you understand why
a 22-ton excavator can lift 3-4 tons of dirt hanging from the bucket.

## Force multiplication

The most interesting trick in Pascal's Law shows up when you **connect
two differently sized cylinders** to the same circuit.

Picture this: a small cylinder (piston A1 = 10 cm²) connected through an
oil-filled line to a large cylinder (piston A2 = 100 cm²).

If you apply a force F1 = 100 kg on the small piston, the pressure in the
system is:

```
P = F1 / A1 = 100 kg / 10 cm² = 10 kg/cm²
```

By Pascal's Law, that pressure transmits to the large piston. The force
on that piston is:

```
F2 = P × A2 = 10 kg/cm² × 100 cm² = 1,000 kg
```

**With 100 kg of effort on one end, you get 1,000 kg of force on the
other**. You multiplied the force 10 times purely through the difference
in areas.

This is the principle behind:

- The **hydraulic jack** in your car: you push a lever, and the oil
  transmits that force to a large piston that lifts 1.5 tons.
- The **industrial hydraulic press**: 100 kg of force at the control
  produces 100 tons at the stamping die.
- Your **car's disc brakes**: your foot applies 10-20 kg of force on the
  pedal, and the calipers clamp the discs with 300-500 kg.

## Nothing's free: energy is conserved

A fundamental principle of physics states that **energy is neither
created nor destroyed**. If you multiplied the force by 10, something
had to "pay" for it in another variable.

That something is **distance traveled**.

In the example above, if the small piston moves 10 cm, the large piston
only moves 1 cm. That's because the volume of oil displaced has to be
the same on both sides:

```
Displaced volume = A × distance
10 cm² × 10 cm = 100 cm³ (small piston)
100 cm² × 1 cm  = 100 cm³ (large piston)
```

In terms of **energy** (force × distance):

- Small side: 100 kg × 10 cm = 1,000 kg·cm of energy applied.
- Large side: 1,000 kg × 1 cm = 1,000 kg·cm of energy delivered.

**Equal energy**. Hydraulics doesn't generate power — it only transforms
it. It multiplies force at the cost of speed, or multiplies speed at
the cost of force. Like any simple machine.

## Applications in heavy equipment

Every cylinder you see on an excavator, a bulldozer, a loader, or a
crane runs on this principle.

- The **excavator arm lift cylinder** can be 180 mm in diameter. At
  320 bar, it generates ~82 tons of force.
- The **bulldozer blade cylinder** can be 200 mm in diameter. At
  250 bar, it generates ~78 tons of force.
- A **crane's outrigger legs** are cylinders of 250 mm or more. At
  200 bar, each leg can push 100 tons — which is why outriggers can
  level an entire crane even on uneven ground.

Without hydraulic multiplication, it would be impossible to move these
loads with motors small enough to fit on the machines.

## How force is metered

If the system can generate 36 tons of push, how does the operator lift a
bucket of dirt gently without breaking everything?

The answer is **valves** — specifically proportional and flow-control
valves. These meter how much oil reaches the cylinder:

- Little oil = slow movement, with full force available.
- A lot of oil = fast movement, with full force available.

Force can always be at maximum as long as the system has enough pressure.
What changes is **speed** — regulated by flow rate.

We cover this control in detail in the
[article on hydraulic valves](/posts/valvulas-hidraulicas-tipos-funcionamiento/).

## Practical limitations

In theory we could multiply force indefinitely by building giant
cylinders. In practice there are limits:

### 1. Material strength

Every component (cylinders, pipes, valves, seals) has a **maximum
working pressure**. Exceeding it causes cracks, leaks, or catastrophic
failure.

Typical ranges:
- Standard industrial systems: up to 200-250 bar.
- Heavy construction equipment: up to 320-350 bar.
- High-end systems: up to 400-700 bar.
- Aerospace and special applications: up to 3,500 bar.

### 2. Physical size

Large cylinders take up space, weigh a lot, and cost a lot. A 500 mm
diameter cylinder is enormous — it's only justified in applications
where you genuinely need that much force.

### 3. Oil volume

A large cylinder needs to move a lot of oil. The pump has to supply that
flow. Systems with huge actuators need huge pumps, big tanks, thick
hoses — the entire system scales up.

### 4. Cost

Higher pressure = better materials = higher cost. A 700-bar cylinder can
cost 10 times more than an equivalent 200-bar one.

## In summary

**Pascal's Law** — pressure in a confined fluid transmits undiminished
in every direction — is the physical foundation of all modern
hydraulics. The working formula derived from that law (F = P × A) is
what we use to size any hydraulic system.

The power of hydraulics lies in **force multiplication**: a small piston
applying little force generates a pressure that produces enormous forces
in a larger piston. The tradeoff is that the distance traveled shrinks
proportionally — energy is always conserved.

On an excavator, a 120 mm-diameter cylinder at 320 bar generates almost
37 tons of force. Without Pascal's Law, that machine wouldn't exist —
and neither would any industrial press, hydraulic jack, or modern crane.

It's the simplest and most cost-effective physical law ever formulated
for industry.
