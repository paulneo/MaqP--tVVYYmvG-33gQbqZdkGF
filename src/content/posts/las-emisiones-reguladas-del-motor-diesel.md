---
title: "Las 5 emisiones reguladas del motor diesel: PM, NOx, HC, CO y opacidad"
published: 2026-06-14
draft: false
featured: false
description: "Cuáles son las 5 emisiones que regulan las normas EPA y Euro en motores diesel, cómo se forman, sus efectos y qué tecnologías las controlan."
category: mecanica-automotriz
formato: concepto
nivel: intermedio
tags:
  - "emisiones-diesel"
  - "particulas-pm"
  - "nox"
  - "hidrocarburos"
  - "monoxido-carbono"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/acert/las-emisiones-reguladas-del-motor-diesel
author: normativa-global
reviewedBy: normativa-global
aiAssisted: true
faq:
  - q: "¿Qué es el particulado PM en emisiones diesel?"
    a: "El particulado (Particulate Matter o PM) es una mezcla de partículas microscópicas sólidas y líquidas que salen por el escape. Está compuesto principalmente por hollín (carbono elemental sin quemar), fracciones orgánicas solubles del combustible y el aceite lubricante (SOF), y sulfatos formados por el azufre presente en el combustible. Es lo que da el color negro visible al humo del escape."
  - q: "¿Por qué el NOx es tan peligroso?"
    a: "Los óxidos de nitrógeno (NOx) son NO y NO₂, gases que se forman cuando el nitrógeno del aire alcanza más de 1.500 °C dentro del cilindro. En la atmósfera contribuyen al smog fotoquímico, la lluvia ácida y la formación de ozono troposférico. A nivel humano, exponerse a NOx elevado irrita las vías respiratorias, agrava el asma y aumenta el riesgo de enfermedades pulmonares crónicas."
  - q: "¿Cuál es la diferencia entre THC y NMHC?"
    a: "THC es Total Hydrocarbon (hidrocarburos totales) — mide todo el combustible no quemado que sale por el escape, incluyendo metano. NMHC es Non-Methane Hydrocarbons — excluye al metano porque este último tiene menor reactividad fotoquímica que otros hidrocarburos. Las normas modernas suelen medir NMHC porque es el indicador más preciso del impacto ambiental."
  - q: "¿Por qué el CO en diesel es menos crítico que en motores nafta?"
    a: "El motor diesel opera con exceso de aire (relación aire/combustible pobre) durante la mayor parte del ciclo. Ese exceso de oxígeno hace que el carbono se oxide casi completamente a CO₂, reduciendo drásticamente la producción de CO. Los motores nafta funcionan cerca de la relación estequiométrica y a veces en mezcla rica, donde el CO es un residuo mucho más común. Aún así, un diesel mal regulado o con problemas de inyección puede emitir CO significativo."
  - q: "¿Qué es la opacidad y cómo se mide?"
    a: "La opacidad es el grado en que los humos del escape bloquean la luz. Se mide con un opacímetro: un instrumento con un haz de luz atravesando una cámara donde entra el humo del escape. Cuanto más particulado y hollín tenga el humo, menos luz pasa y mayor es la opacidad. Se expresa en porcentaje o en unidades K (m⁻¹). En Perú, el DS 047-2001-MTC establece límites por año y tipo de vehículo — un diesel Euro III no puede pasar de 2.5 m⁻¹ en aceleración libre."
sources:
  - title: "US EPA — Emission Standards for Heavy-Duty Highway Engines"
    url: "https://www.epa.gov/emission-standards-reference-guide/epa-emission-standards-heavy-duty-highway-engines"
  - title: "European Environment Agency — Air Pollutant Emission Inventory Guidebook (Diesel)"
    url: "https://www.eea.europa.eu/publications/emep-eea-guidebook-2023"
  - title: "Caterpillar Global Manpower Development — ACERT 2007 Systems Overview"
    url: "https://heavyequipments.org/"
  - title: "MINAM Perú — Reglamento de Estándares Nacionales de Calidad Ambiental del Aire"
    url: "https://www.minam.gob.pe/"
related:
  - sistema-acert-caterpillar-que-es-como-funciona
  - historia-normas-epa-emisiones-diesel
  - que-es-un-dpf-diesel-particulate-filter
---

Cuando hablamos de "emisiones diesel" no estamos hablando de un solo contaminante:
son cinco tipos distintos, cada uno con su propia química, su propio proceso de
formación dentro del cilindro y su propio impacto ambiental. Las normas EPA en
Estados Unidos, Euro en la Unión Europea, y las reglamentaciones nacionales de
Latinoamérica (Perú, México, Chile, Argentina, Colombia) miden y limitan estos
cinco compuestos por separado.

Entender qué es cada uno no es solo curiosidad técnica — es la base para diagnosticar
motores modernos, elegir tecnologías de post-tratamiento y cumplir con las
certificaciones de emisiones que se exigen cada vez más en obra y en flotas.

## 1. Material particulado (PM)

Es lo que se ve. El humo negro que sale del escape de un motor diesel viejo es,
en su mayor parte, PM. Técnicamente el particulado es una mezcla de tres cosas:

- **Hollín** (carbono elemental): partículas de carbono generadas cuando el
  combustible no se quema completamente en el cilindro.
- **Fracción orgánica soluble** (SOF, Soluble Organic Fraction): compuestos
  del combustible y del aceite lubricante que no se queman y se adhieren al
  hollín.
- **Sulfatos**: cuando el combustible contiene azufre, este se combina con
  oxígeno durante la combustión y forma sulfatos que también contribuyen al
  particulado.

El PM se mide en gramos por kilovatio-hora (g/kWh) o gramos por caballo de
fuerza-hora (g/hp-h). En 2007 la EPA bajó el límite para motores heavy-duty a
**0.01 g/hp-h**, un valor **10 veces menor** que el de 2004 (0.10 g/hp-h). Ese
salto fue el que forzó la adopción masiva del DPF en la industria.

**Impacto sanitario**: el PM más fino (PM2.5, partículas menores a 2.5 micras)
penetra profundo en los pulmones y se asocia con enfermedades cardiovasculares,
cáncer de pulmón y muerte prematura. La OMS lo clasifica como carcinógeno del
grupo 1.

## 2. Óxidos de nitrógeno (NOx)

Bajo el nombre NOx se agrupan dos gases: **monóxido de nitrógeno (NO)** y
**dióxido de nitrógeno (NO₂)**. En un motor diesel se producen principalmente
por un fenómeno térmico: cuando la temperatura pico dentro del cilindro supera
los **1.500 °C**, el nitrógeno molecular (N₂) del aire —que normalmente es
inerte— reacciona con el oxígeno y forma NO. Luego, ya en el escape o en la
atmósfera, el NO se oxida y se transforma en NO₂.

Cuanto más caliente y eficiente sea la combustión, **más NOx se produce**. Esto
crea una contradicción de ingeniería: los motores más limpios en particulado
(combustión completa, alta temperatura) tienden a ser peores en NOx. Y viceversa.

La forma más común de reducir NOx dentro del cilindro es **enfriar la
combustión** — algo que hacen los sistemas EGR (Exhaust Gas Recirculation) o el
CGI de Caterpillar. Fuera del cilindro, la solución dominante es **SCR
(Selective Catalytic Reduction)** con urea/AdBlue.

**Impacto ambiental**: NOx es el principal precursor del smog fotoquímico. Con
la luz solar, reacciona con hidrocarburos volátiles y forma ozono troposférico,
que causa problemas respiratorios. También es responsable de una fracción
importante de la lluvia ácida.

## 3. Hidrocarburos (HC)

Son moléculas de combustible que **no se quemaron** en el cilindro y salen por
el escape. Aparecen cuando la combustión es incompleta: mezcla pobre, timing
mal ajustado, temperatura baja, mala atomización del combustible.

Se regulan de dos formas según la norma:

- **THC (Total Hydrocarbons)**: mide todos los hidrocarburos, incluyendo el
  metano (CH₄), que es el más simple de todos.
- **NMHC (Non-Methane Hydrocarbons)**: excluye al metano porque este es menos
  reactivo fotoquímicamente. La mayoría de normas modernas usan NMHC como
  indicador principal.

En motores diesel bien mantenidos, los HC suelen estar bajos porque el diesel se
quema más completo que la nafta. Pero pueden dispararse en tres situaciones
típicas: **arranque en frío** (motor sin temperatura), **ralentí prolongado**
(cámaras con poca temperatura por baja demanda), e **inyectores en mal estado**
(atomización pobre).

## 4. Monóxido de carbono (CO)

Se forma cuando el carbono del combustible no encuentra suficiente oxígeno para
convertirse en CO₂ (que sería la combustión completa). Es un gas incoloro,
inodoro y **altamente tóxico**: se une a la hemoglobina de la sangre con más
afinidad que el oxígeno, causando asfixia interna.

En motores diesel el CO **es proporcionalmente menor** que en nafta, porque el
diesel siempre trabaja con exceso de aire (relación aire/combustible pobre). Ese
exceso de oxígeno oxida el CO a CO₂ dentro del cilindro y en el escape.

Aún así, se mide y se regula. Un diesel con problemas serios (inyector goteando,
turbo dañado, filtro de aire tapado que restringe oxígeno) puede emitir CO
significativo. Los DOC (Diesel Oxidation Catalysts) que forman parte del sistema
de post-tratamiento moderno **oxidan hasta el 90% del CO restante** antes de que
salga al ambiente.

## 5. Humo y opacidad

Estrictamente, el humo no es un contaminante separado — es la manifestación
visual del particulado y de los hidrocarburos no quemados. Pero se regula como
métrica independiente porque es fácil de medir en campo.

Se mide con un **opacímetro**: un dispositivo que hace pasar el humo por una
cámara con un haz de luz. La opacidad se expresa en porcentaje o en unidades K
(m⁻¹, coeficiente de absorción de luz de Bouguer-Lambert).

Los límites de opacidad varían por país y tipo de vehículo. En Perú, el
Decreto Supremo N° 047-2001-MTC establece:

- **Diesel de más de 3 años** (matriculado antes del 2003): máximo 3.0 m⁻¹
- **Diesel Euro III o superior**: máximo 2.5 m⁻¹
- **Diesel Euro IV o superior**: máximo 1.5 m⁻¹

En obra y en revisiones técnicas vehiculares (RTV), la opacidad es lo que más
falla en motores viejos. Un DPF que trabaja bien reduce la opacidad a **casi
cero**.

## Cómo se relacionan los cinco entre sí

Estas cinco emisiones no son independientes — hay relaciones inversas entre
algunas de ellas que hacen que los motoristas hablen de un **"triángulo
imposible"**:

- Si atacás el **NOx** enfriando la combustión → sube el **PM y el HC**.
- Si atacás el **PM** aumentando temperatura y presión → sube el **NOx**.
- Si atacás el **CO** con más aire → puede bajar la eficiencia y afectar el consumo.

Es por esta interacción que las tecnologías modernas de emisiones **no son una
sola cosa sino un sistema completo**: EGR/CGI para NOx, DPF para PM, DOC para
CO y HC, inyección precisa para todos ellos, y (en post-2011) SCR con urea para
un segundo golpe al NOx.

## En resumen

Las cinco emisiones diesel reguladas —PM, NOx, HC, CO y opacidad— son la razón
de casi todos los cambios tecnológicos que ha visto el motor diesel en los
últimos 20 años. Cualquier técnico que quiera diagnosticar motores modernos
(Cat ACERT, Cummins ISX, Detroit DD15, Volvo D13) necesita entender qué mide
cada norma, qué contaminante origina cada síntoma, y por qué el sistema entero
está diseñado como está.

En próximos artículos vamos a abrir cada tecnología de reducción específica
—CGI, DPF, SCR, DOC— y cómo se ensamblan en el sistema ACERT de Caterpillar.
