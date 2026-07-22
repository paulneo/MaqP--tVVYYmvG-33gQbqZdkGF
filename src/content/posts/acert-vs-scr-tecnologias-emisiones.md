---
title: "ACERT vs SCR: dos filosofías para bajar emisiones diesel"
published: 2026-07-23
draft: false
featured: false
description: "Cat apostó por ACERT (atacar el NOx en cilindro). Cummins, Volvo y Detroit apostaron por SCR (tratarlo después). Comparativa técnica."
category: mecanica-automotriz
formato: guia
nivel: avanzado
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
  - q: "¿Qué es SCR y qué diferencia tiene con ACERT?"
    a: "SCR (Selective Catalytic Reduction) es una tecnología que trata el NOx DESPUÉS de que ya se formó — inyecta una solución de urea (AdBlue/DEF) en el escape, que reacciona con el NOx en un catalizador y lo convierte en nitrógeno y agua inofensivos. ACERT (Advanced Combustion Emission Reduction Technology) es la apuesta de Cat: evitar que el NOx se forme desde el principio, controlando la combustión con CGI, alta presión de inyección y timing. En resumen: SCR trata el problema después, ACERT lo evita. Cada uno tiene ventajas técnicas y económicas. La industria terminó adoptando SCR como estándar de facto, y Cat mismo tuvo que abandonar el ACERT puro y adoptar SCR en sus motores más recientes (Tier 4 Final y posteriores)."
  - q: "¿Qué es el AdBlue o DEF?"
    a: "Es el líquido que se usa en sistemas SCR. AdBlue es el nombre comercial en Europa; DEF (Diesel Exhaust Fluid) es el nombre en USA. Es una solución acuosa de urea al 32.5% — 67.5% agua desionizada y 32.5% urea de alta pureza automotriz. Se almacena en un tanque separado del combustible (típicamente 20-100 litros según la máquina) y se inyecta al escape mediante una boquilla controlada por la ECU. El consumo típico es 3-5% del consumo de diesel — o sea, por cada 100 litros de diesel se consumen 3-5 litros de AdBlue. Es incoloro, no tóxico y biodegradable, pero congela a -11 °C, por lo que en climas fríos requiere calefacción del tanque y las líneas."
  - q: "¿Por qué Caterpillar apostó primero a ACERT y no a SCR?"
    a: "Por varias razones estratégicas y técnicas: (1) ACERT permitía cumplir las normas EPA Tier 3 sin requerir un fluido adicional que el operador tenga que rellenar, lo cual era un tema de logística para clientes de minería y construcción remota; (2) el AdBlue no estaba disponible universalmente en Latam y otros mercados donde Cat vende mucho; (3) los sistemas SCR requerían componentes de acero inoxidable resistente a la urea, tanques calentados, sensores específicos — todo caro; (4) Cat quería diferenciarse comercialmente con una solución 'exclusiva' (branding). La apuesta fue lógica en su momento (2007-2011), pero con Tier 4 Final (2014+) las normas de NOx se volvieron tan estrictas que ACERT solo ya no alcanzaba — Cat tuvo que incorporar SCR también en sus motores más grandes."
  - q: "¿Un motor SCR requiere DPF también?"
    a: "Casi siempre sí, en aplicaciones modernas post-2014. El SCR ataca principalmente el NOx pero no soluciona el problema de las partículas (PM). Un motor moderno tipo Tier 4 Final o Stage V requiere: (1) DPF para atrapar PM, (2) DOC (Diesel Oxidation Catalyst) para oxidar HC y CO, (3) SCR para reducir NOx. Los tres sistemas se instalan en secuencia en el escape. Es lo que se conoce como 'aftertreatment system' completo. Los motores más nuevos también incorporan un ASC (Ammonia Slip Catalyst) al final para atrapar cualquier amoníaco residual del SCR que no se convirtió."
  - q: "¿Qué pasa si me quedo sin AdBlue en un motor SCR?"
    a: "El motor entra en modo derateo progresivo. Típicamente: (1) al 10% del tanque de AdBlue se enciende luz de advertencia; (2) al 5%, el motor limita el torque al 75%; (3) al 0%, después de un tiempo o número de arranques, el motor limita la velocidad a 20 km/h o entra en 'limp mode' que solo permite mover la máquina al taller; (4) en algunos modelos, si no se resuelve, el motor no arranca. Esto es diseñado a propósito para forzar el cumplimiento de emisiones — no es una falla, es una restricción impuesta por normativa. Nunca operar un motor SCR sin AdBlue: se pierde eficiencia, emisiones se disparan, y la ECU eventualmente inmoviliza la máquina. Rellenar es fácil y barato — no dejar que se acabe."
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

Cuando la EPA anunció en los 90 que iba a endurecer los límites de
emisiones diesel, la industria de motores pesados se dividió en dos
campos:

- **Cat, con ACERT**: reducir NOx **dentro del cilindro**, evitando que
  se forme.
- **Cummins, Volvo, Detroit, Mack**: reducir NOx **después de la
  combustión**, con **SCR (Selective Catalytic Reduction)**.

Fueron dos filosofías fundamentalmente distintas. Cada una con
ventajas técnicas, económicas y logísticas. Este artículo compara las
dos y explica por qué la industria eventualmente convergió en una.

## Filosofía ACERT: prevenir el NOx

El sistema ACERT que ya vimos en detalle en esta serie ataca el NOx
en la fuente. La lógica:

> "Si el NOx se forma por temperaturas altas en la combustión,
> reducimos la temperatura de combustión."

Herramientas del ACERT para bajar temperatura pico:

1. **CGI (Cooled Gas Induction)** — recircula gases enfriados a la
   admisión, bajando la temperatura de combustión.
2. **Alta presión de inyección** — atomización fina, combustión más
   uniforme y controlable.
3. **Inyección múltiple** — mejor distribución del calor liberado.
4. **Timing preciso** — evitar picos innecesarios.
5. **Enfriamiento del aire de admisión (ATAAC)** — aire denso y frío.

Resultado: **NOx reducido en la fuente**, sin necesidad de tratar los
gases después.

**Ventajas del ACERT**:

- No requiere fluido adicional (AdBlue).
- No requiere tanque, líneas ni boquilla de inyección de urea.
- Menos peso adicional en la máquina.
- Sin logística de rellenado.
- Compatible con combustible diesel estándar.

**Desventajas del ACERT**:

- **Menor eficiencia térmica** — bajar la temperatura de combustión
  significa perder algo de rendimiento por litro.
- **CGI Cooler y válvula son componentes críticos y caros** que
  pueden fallar.
- **Aumento de PM** — la combustión menos caliente produce más
  hollín, lo que exige un DPF más robusto.
- **Limitado en cuánto puede reducir NOx** — hay un piso físico
  que ACERT solo no puede superar. A partir de las normas Tier 4
  Final (2014), ACERT solo ya no alcanzaba.

## Filosofía SCR: tratar el NOx después

SCR es una tecnología de aftertreatment (postratamiento) que
transforma químicamente el NOx en nitrógeno inofensivo.

### Cómo funciona el SCR

1. El motor puede operar con combustión **más caliente y eficiente**
   (sin restricciones de CGI o de timing conservativo). Esto produce
   más NOx pero también mejor eficiencia.
2. Los gases de escape pasan por el sistema aftertreatment:
   - **DOC (Diesel Oxidation Catalyst)** — oxida HC y CO.
   - **DPF (Diesel Particulate Filter)** — atrapa PM.
   - **Boquilla de inyección de urea (AdBlue/DEF)** — dosifica el
     fluido según la cantidad de NOx.
   - **SCR catalyst** — cámara con catalizador de titanio-vanadio o
     zeolita. La urea se descompone en amoníaco (NH₃), y el NH₃
     reacciona con el NOx según:

```
4 NH₃ + 4 NO + O₂ → 4 N₂ + 6 H₂O
```

O sea: NOx + amoníaco → nitrógeno inofensivo + agua.

3. **ASC (Ammonia Slip Catalyst)** al final — atrapa amoníaco
   residual que no reaccionó.

### Ventajas del SCR

- **Mayor eficiencia del motor** — puede operar en su punto óptimo
  térmico, ganando 3-5% de eficiencia respecto de un motor con EGR/CGI.
- **Reducción de NOx mucho mayor** — hasta 90% de eliminación, muy
  por encima de lo que ACERT puede lograr.
- **Motor más simple mecánicamente** — sin CGI valve, cooler o flow
  sensor.
- **Menor mantenimiento del motor mismo** — CGI es una fuente común
  de fallas.

### Desventajas del SCR

- **Requiere fluido adicional (AdBlue/DEF)** — nuevo tanque,
  logística de rellenado, riesgo de contaminación con combustible o
  agua.
- **AdBlue congela a -11 °C** — requiere calefacción en climas
  fríos.
- **Componentes de acero inoxidable resistentes a urea** — más
  caros.
- **Motor derateado si se acaba el AdBlue** — restricción de uso.
- **Costo mayor del sistema completo** — DOC + DPF + SCR + ASC es
  caro.
- **Logística de AdBlue** en zonas remotas — no siempre disponible.

## Por qué la industria convergió en SCR + DPF

Hasta 2010-2011, ambas filosofías eran viables. Cat vendía ACERT y el
resto vendía SCR. Los clientes decidían según su aplicación y logística.

Pero cuando la EPA anunció las normas **Tier 4 Final** (2014 en USA,
Stage IV en Europa 2014, Stage V en 2019), los límites de NOx se
volvieron tan estrictos que **ACERT solo ya no alcanzaba**:

- Tier 4 Final: **0.4 g/kWh de NOx**.
- ACERT puro con CGI podía llegar a ~1.5-2.0 g/kWh.
- SCR podía llegar fácilmente a 0.4 g/kWh o menos.

Cat tuvo que aceptar la realidad e **incorporar SCR también** en sus
motores grandes. Los motores Cat modernos de la gama C13, C15 y
superiores en aplicación highway y en algunas industriales usan
**ACERT + SCR combinados** — o sea, control de combustión Y
aftertreatment químico.

En aplicaciones off-highway más pequeñas, Cat mantuvo ACERT + DPF por
más tiempo, pero eventualmente también migró a SCR.

## Cuadro comparativo resumen

| Aspecto                    | ACERT                             | SCR                               |
| -------------------------- | --------------------------------- | --------------------------------- |
| **Cuándo actúa**           | Dentro del cilindro               | En el escape (después)            |
| **Método**                 | Bajar temperatura combustión      | Tratamiento químico con NH₃      |
| **Fluido adicional**       | Ninguno                          | AdBlue/DEF                        |
| **Eficiencia térmica**     | Menor (~3-5% menos)              | Mayor (motor en óptimo)           |
| **Reducción NOx máxima**   | ~50-60%                          | ~90%                              |
| **PM (hollín)**            | Más (requiere DPF más robusto)   | Menos (motor más limpio)          |
| **Componentes clave**      | CGI valve, cooler, flow sensor   | Tanque AdBlue, bomba, boquilla, catalizador |
| **Riesgo operativo**       | Falla del CGI en operación       | Quedarse sin AdBlue → derateo     |
| **Costo inicial**          | Menor                             | Mayor                             |
| **Costo de mantenimiento** | CGI cooler caro, DPF frecuente   | AdBlue continuo, catalizadores    |
| **Aplicabilidad Tier 4 Final** | No suficiente solo             | Suficiente                        |

## ¿Cuál elegir en 2026?

Si estás **comprando maquinaria nueva** hoy, la decisión ya está
tomada por el fabricante — casi todos los motores modernos usan una
combinación de **SCR + DPF + DOC**, con o sin EGR complementario.
Cat, Cummins, Volvo, Detroit, John Deere: todos están alineados en
esta arquitectura.

Si estás **comprando maquinaria usada**, es importante entender
qué tecnología tiene:

- **Motor puramente mecánico** (pre-2007): sin ACERT, sin SCR, sin
  DPF. Simple, robusto, pero contaminante. Restricciones legales
  crecientes en ciertos mercados.
- **Motor ACERT puro** (2007-2013): con CGI y DPF, sin SCR.
  Confiable pero exigente en mantenimiento del CGI.
- **Motor ACERT + SCR** (2014+): más complejo, más caro de mantener,
  pero cumple normas modernas.
- **Motor solo SCR + DPF** (competencia de Cat): confiable,
  requiere disciplina con el AdBlue.

Para trabajos en **zonas remotas sin infraestructura de AdBlue**,
un motor ACERT puro puede ser preferible. Para operación en zonas
con normas estrictas de emisiones, un motor con SCR es la opción.

## Cat Sensitive-C y evolución post-ACERT

Cat no abandonó completamente la filosofía ACERT. Sus motores
modernos combinan:

- **Combustión optimizada** (herencia de ACERT).
- **CGI simplificado** (menos crítico que en ACERT puro).
- **SCR** para el trabajo pesado de reducción de NOx.
- **DPF** para PM.

Es un enfoque **híbrido**: usar la mejor tecnología en cada frente.
Más caro, sí, pero cumple las normas modernas con margen.

## Perspectiva de largo plazo

La discusión ACERT vs SCR es en cierto sentido **una discusión del
pasado**. La industria diesel completa está bajo presión regulatoria
para descarbonizarse. Los próximos 10-20 años van a ver:

- **Motores diesel más limpios aún** (post-Tier 4 Final, con Euro 7
  y equivalentes).
- **Diesel hidrogenado / renewable diesel** (HVO) como alternativa
  al diesel fósil.
- **Motores híbridos diesel-eléctricos** en maquinaria pesada.
- **Motores 100% eléctricos** en aplicaciones ligeras y medias.
- **Motores a hidrógeno** en pruebas para pesados.

Cat, Cummins, Volvo — todos están invirtiendo en estas tecnologías.
El motor diesel ACERT o SCR "puro" va camino a ser historia
lentamente. Pero mientras tanto, entenderlos sigue siendo esencial
para operar y mantener las millones de máquinas ya instaladas.

## En resumen

**ACERT** apostó a evitar la formación de NOx dentro del cilindro
mediante CGI, alta presión de inyección y control electrónico. Fue
la apuesta de Cat entre 2007 y 2013.

**SCR** apostó a tratar el NOx después de la combustión con urea y
catalizadores. Fue la apuesta de casi toda la competencia.

**SCR ganó la partida** — no porque ACERT fuera "malo", sino porque
las normas de emisiones se volvieron tan estrictas que solo SCR podía
cumplirlas eficientemente. Cat mismo tuvo que adoptarlo en sus motores
grandes modernos.

Hoy, los motores diesel pesados modernos usan una combinación de
**control de combustión + DPF + SCR + DOC** — lo mejor de las dos
filosofías. Y el próximo desafío ya no es el NOx: es el CO₂ y la
descarbonización.

Esta serie sobre ACERT es, en cierto sentido, la historia de una
tecnología de transición — bien diseñada, útil en su momento, pero
superada por la realidad regulatoria. Entenderla es entender por qué
los motores diesel modernos son como son.
