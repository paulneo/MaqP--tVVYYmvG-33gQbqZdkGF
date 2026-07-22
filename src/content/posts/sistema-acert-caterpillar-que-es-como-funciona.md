---
title: "Qué es el sistema ACERT de Caterpillar y cómo funciona"
published: 2026-06-12
draft: false
featured: false
description: "El sistema ACERT combina 5 tecnologías (turbos en serie, CGI, DPF, alta presión y actuación de válvula) para cumplir EPA 2007 sin sacrificar potencia."
category: mecanica-automotriz
formato: concepto
nivel: intermedio
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
  - q: "¿Qué significa ACERT en Caterpillar?"
    a: "ACERT es la sigla en inglés de Advanced Combustion Emissions Reduction Technology, o Tecnología Avanzada de Combustión y Reducción de Emisiones. No es una pieza única sino un conjunto integrado de 5 tecnologías que trabajan coordinadas para reducir contaminantes (PM, NOx, HC, CO) sin caer en rendimiento del motor. Caterpillar lo lanzó como respuesta a las normas EPA 2004 y lo expandió para cumplir EPA 2007."
  - q: "¿Qué componentes tiene el sistema ACERT?"
    a: "Cinco componentes principales trabajan en conjunto: (1) turbochargers en serie que aumentan la eficiencia del aire de admisión, (2) CGI o Cooled Gas Induction que reintroduce gases de escape enfriados para reducir NOx, (3) DPF o Diesel Particulate Filter que atrapa el hollín, (4) sistema de inyección de alta presión que atomiza el combustible más fino, y (5) actuación variable de válvula de admisión. Todos coordinados por la ECU del motor."
  - q: "¿ACERT es mejor que SCR (Selective Catalytic Reduction)?"
    a: "No es una comparación de mejor o peor, son enfoques distintos. ACERT reduce las emisiones ANTES de que salgan del motor (in-cylinder), sin necesidad de urea/AdBlue. SCR las trata DESPUÉS, en el escape, con un catalizador que necesita urea líquida. ACERT tiene menos partes que rellenar en obra pero requiere DPF costoso; SCR requiere abastecimiento constante de urea pero permite combustión más simple. La mayoría de fabricantes modernos combinan ambas: EGR/CGI + SCR + DPF."
  - q: "¿En qué motores Cat se usa ACERT?"
    a: "El sistema ACERT se implementó a partir del 2004 en motores on-highway (camiones) y luego se extendió a los off-highway (maquinaria pesada). Los principales modelos con ACERT son la línea C — C7, C9, C11, C13, C15, C18 y C32 — usados en excavadoras, cargadores frontales, camiones mineros, generadores y equipos marinos. Los motores más viejos tipo 3406 o 3408 se re-manufacturaron en algunas plantas para agregar componentes ACERT compatibles."
  - q: "¿Cómo afecta ACERT al consumo de combustible?"
    a: "En términos netos, ACERT mantiene el consumo de combustible en niveles similares o levemente superiores a motores pre-2007. La regeneración del DPF, cuando ocurre, consume algo de combustible extra (típicamente 1-3% adicional). A cambio, se cumplen las normas EPA que de otra forma habrían prohibido la venta del motor. En resumen: no ganás en consumo, pero el equipo es legal, comercial y ambientalmente sostenible."
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

En 2007 la EPA de Estados Unidos impuso los límites de emisiones más estrictos que
la industria de motores diesel había visto hasta ese momento. Todos los fabricantes
tuvieron que rediseñar cómo sus motores queman combustible y qué gases dejan salir
al aire. Caterpillar respondió con una arquitectura propia: **ACERT**.

ACERT no es una pieza que se atornilla al motor. Es un **conjunto coordinado de
cinco tecnologías** que trabajan juntas para reducir contaminantes sin castigar la
potencia. Es la razón por la que un Cat C15 de 2010 puede tener casi la misma
fuerza que uno de 1998 pero cumplir normas cinco veces más estrictas.

## ¿Qué significa ACERT?

ACERT es la sigla en inglés de **Advanced Combustion Emissions Reduction
Technology**. Traducido: *tecnología avanzada de combustión y reducción de
emisiones*. La palabra clave es **"combustión"** — la filosofía de Caterpillar fue
atacar el problema **dentro del cilindro**, no solo tratando los gases después de
que salen.

Otros fabricantes, sobre todo europeos como Volvo o MAN, apostaron a **SCR**
(Selective Catalytic Reduction): dejan al motor quemar combustible como siempre y
tratan los gases con urea en el escape. Cat eligió el camino contrario: modificar
la combustión para que produzca menos contaminantes desde el inicio, y usar un
filtro (DPF) para lo poco que queda.

## Por qué se creó ACERT

Entre 2004 y 2010, las normas EPA (y sus equivalentes europeos Euro V y VI)
redujeron los límites permitidos de emisiones diesel en **más del 90%**. Cuatro
contaminantes eran el foco:

- **Partículas** (PM): el hollín negro que se ve salir del escape
- **Óxidos de nitrógeno** (NOx): gases invisibles que causan lluvia ácida y smog
- **Hidrocarburos** (HC): combustible no quemado
- **Monóxido de carbono** (CO): gas tóxico de combustión incompleta

Con motores tradicionales de los años 90, era imposible cumplir esos límites sin
sacrificar potencia o consumo. Se necesitaba una arquitectura completamente nueva.

## Los 5 componentes del sistema ACERT

### 1. Turbochargers en serie

En vez de un solo turbo grande, ACERT usa **dos turbos conectados en secuencia**:
uno de alta presión (chico, rápido, arranca a bajas RPM) y otro de baja presión
(grande, aporta volumen en altas RPM). Esto da respuesta rápida en ralentí y
mucha potencia a plena carga, con menos "turbo lag".

El resultado: **más aire por ciclo**, lo que permite quemar más combustible de
forma completa, reduciendo hollín (PM) y monóxido de carbono (CO).

### 2. CGI — Cooled Gas Induction

CGI es la versión Cat del EGR (Exhaust Gas Recirculation). Toma una parte de los
gases de escape, los **enfría en un intercambiador** dedicado y los reintroduce a
la admisión.

¿Para qué? Los gases de escape enfriados **bajan la temperatura pico de
combustión**. Como el NOx se forma principalmente cuando el nitrógeno del aire
alcanza más de 1.500 °C, al enfriar la combustión el motor produce **hasta un 40%
menos NOx** que un motor sin CGI.

### 3. DPF — Diesel Particulate Filter

Es el componente más visible del ACERT. Un canister metálico grande, montado en el
escape, que **atrapa el hollín** (partículas de carbono no quemado) en una matriz
cerámica interna hecha de cordierite o carburo de silicio.

Cada tantas horas el sistema hace una **regeneración**: quema el hollín acumulado
a alta temperatura, dejando solo cenizas mínimas. Sin DPF, no habría forma de
cumplir el límite de PM de EPA 2007 (10 veces más estricto que EPA 2004).

Publicamos una [guía completa del DPF](/posts/que-es-un-dpf-diesel-particulate-filter/)
con estructura, sensores y mantenimiento.

### 4. Sistema de inyección de alta presión

Los inyectores ACERT trabajan a **1.800 bar o más** de presión (contra 800-1.200
de motores pre-2007). Esto atomiza el diesel en gotas mucho más finas, que se
mezclan mejor con el aire y **se queman de forma más completa**.

La ECU también controla el **timing en múltiples pulsos** por ciclo: una pequeña
inyección "piloto" antes del pistón subir, la inyección principal, y una o dos
"post-inyecciones" que ayudan a la regeneración del DPF. Todo en milisegundos.

### 5. Actuación variable de válvula de admisión

Un mecanismo dentro del cabezal del motor permite **modificar cuándo se abren y
cierran las válvulas de admisión**. Esto ajusta la cantidad de aire y el
"solapamiento" con las válvulas de escape según las RPM.

En marcha lenta reduce el aire (menos hollín); en alta demanda lo maximiza (más
potencia). Es una versión industrial de lo que en autos deportivos se conoce como
"VVT" o "VVT-i".

## Cómo se compara ACERT con SCR

La comparación entre estos dos enfoques generó un **debate técnico enorme en la
industria entre 2007 y 2015**:

| Aspecto | ACERT (Cat) | SCR (Volvo, MAN) |
|---|---|---|
| Enfoque | Reduce en cilindro | Trata en escape |
| Requiere urea/AdBlue | ❌ No | ✅ Sí |
| Necesita DPF | ✅ Sí (grande) | Opcional |
| Costo de mantenimiento | Medio | Bajo pero + urea |
| Complejidad electrónica | Alta | Media |
| Espacio requerido | Compacto | Ocupa más volumen |

Hoy la mayoría de fabricantes modernos **combinan ambos enfoques**: EGR/CGI +
DPF + SCR. Ya no es "uno u otro". Los motores Cat post-2011 (Tier 4 Final)
también incorporan SCR con urea, complementando el ACERT original.

## Impacto operativo del ACERT

Para quienes operan una máquina con ACERT, hay cosas prácticas que cambian
respecto a motores pre-2007:

- **Consumo de combustible**: prácticamente igual, con leves aumentos en
  regeneración del DPF (~1-3%).
- **Complejidad de diagnóstico**: mucho más alta. Hay decenas de sensores
  (temperatura, presión diferencial del DPF, flujo de CGI, calidad de aire) y
  no es viable diagnosticar sin computadora de servicio (Cat ET).
- **Mantenimiento**: nuevos ítems como limpieza de cenizas del DPF (cada
  4.500-6.000 horas) y control del sistema CGI que no existían antes.
- **Diesel más limpio requerido**: los motores ACERT necesitan
  **ULSD (Ultra Low Sulfur Diesel, <15 ppm de azufre)**. Diesel con más azufre
  destruye el catalizador de platino del DPF.

## En resumen

ACERT fue la respuesta de Caterpillar a un problema regulatorio complejo: cumplir
límites de emisiones diez veces más estrictos sin perder la potencia y
confiabilidad que caracterizan a la marca. La solución fue integrar cinco
tecnologías —turbos en serie, CGI, DPF, inyección alta presión y actuación
variable de válvula— en un sistema coordinado por la ECU del motor.

Para el operador o técnico moderno, entender ACERT no es opcional: es la base de
cómo funcionan los motores Cat desde 2007. Cualquier diagnóstico, mantenimiento
predictivo o troubleshooting pasa por conocer estas cinco piezas y cómo
interactúan entre sí. En los próximos artículos vamos a abrir cada componente por
separado.
