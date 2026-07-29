---
title: "Sistema de escape y aftertreatment del Cummins ISX/Signature"
published: 2026-07-16
draft: false
featured: false
description: "El sistema de escape del ISX moderno incluye DPF, SCR y DEF. Explicamos cada componente, cómo trabajan juntos y cómo detectar fallas del aftertreatment."
category: mecanica-automotriz
formato: guia
nivel: avanzado
tags:
  - "cummins"
  - "escape"
  - "dpf"
  - "scr"
  - "def-adblue"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/cummins-volvo-aceite/sistema-escape-cummins-aftertreatment
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Qué componentes tiene un Cummins ISX 2010+ en su sistema de escape?"
    a: "El sistema completo de aftertreatment de un ISX 2010+ tiene 4 componentes principales en secuencia: (1) DOC (Diesel Oxidation Catalyst) — oxida HC y CO. (2) DPF (Diesel Particulate Filter) — atrapa hollín. (3) Inyector de DEF (urea 32.5%) — dosifica según carga. (4) SCR (Selective Catalytic Reduction) — reduce NOx a nitrógeno inofensivo. Los ISX 2007-2010 tienen solo DOC + DPF (sin SCR). Los ISX pre-2007 son mucho más simples: solo silenciador convencional."
  - q: "¿Qué es el DEF/AdBlue en un ISX moderno?"
    a: "DEF (Diesel Exhaust Fluid) es una solución acuosa de urea al 32.5% que se inyecta en el escape para hacer funcionar el SCR. Se almacena en un tanque separado del combustible (típicamente 50-100 litros en camiones). Consumo típico: 3-5% del consumo de diesel — o sea, cada 100 litros de diesel consumidos, se gastan 3-5 litros de DEF. Marcas: AdBlue (Europa), DEF (USA), Bluetec (algunos fabricantes). Todas cumplen la misma norma ISO 22241 y son intercambiables."
  - q: "¿Qué pasa si se acaba el DEF en un Cummins ISX?"
    a: "El motor entra en MODO DERATEO progresivo según nivel del tanque de DEF. Típico: (1) Al 10% del tanque: luz de advertencia. (2) Al 5%: torque limitado al 75%. (3) Al 0%: velocidad máxima limitada a 20 km/h (limp mode). (4) Al continuar sin llenar, el motor puede no arrancar en el próximo ciclo. Esto es DISEÑADO A PROPÓSITO para forzar el cumplimiento de emisiones — no es una falla mecánica. Nunca operar un ISX moderno sin DEF: perdés potencia, contaminás más, y eventualmente el vehículo se detiene."
  - q: "¿Cada cuánto hay que limpiar el DPF de un Cummins?"
    a: "El DPF tiene DOS niveles de mantenimiento. (1) REGENERACIÓN AUTOMÁTICA: el motor la hace solo cada 400-800 km — sube la temperatura del escape para quemar el hollín acumulado. Es transparente para el operador. (2) LIMPIEZA A FONDO (deep cleaning): cada 300.000-500.000 km (o 8.000-12.000 horas). Se desmonta el DPF y se limpia con equipos especializados que remueven las cenizas incombustibles. Costo típico USD 300-800. Si no se hace en tiempo, el DPF se satura de cenizas y hay que REEMPLAZARLO (USD 3.000-6.000)."
  - q: "¿Puedo hacer un 'delete' del sistema de aftertreatment?"
    a: "TÉCNICAMENTE sí (existen kits que sacan DPF/SCR y reprograman el ECM para ignorar la ausencia). Pero considerá: (1) ES ILEGAL en la mayoría de países con normas de emisiones — multas de miles de dólares por unidad si te agarran. (2) Anula la garantía del motor. (3) Reduce valor de reventa 30-40% (comprador legal no lo quiere). (4) Emisiones ambientales muy superiores. (5) Puede acelerar desgaste del motor (temperaturas más altas). Solo se justifica en aplicaciones muy específicas fuera de rutas públicas y bajo asesoría legal. La recomendación técnica es mantener el sistema en buen estado."
sources:
  - title: "Manual de Diagnóstico y Reparación Cummins ISX — Sección 11 (Sistema de Escape)"
    url: "https://www.maquinariaspesadas.org/blog/2853-manual-motores-signature-isx-qsx15-cummins-diagnostico-reparacion"
related:
  - turbocompresor-admision-cummins-isx
  - diagnostico-fallas-cummins-isx
  - sistema-combustible-cummins-common-rail
---

El **sistema de escape** del Cummins ISX/Signature no es solo un tubo
para sacar gases al ambiente. En los motores modernos (2007+) es un
**sistema de tratamiento químico** complejo que reduce hasta 90% los
contaminantes antes de expulsarlos.

Este artículo cubre el sistema completo según la **Sección 11 del
manual oficial**: colector, turbo, DOC, DPF, SCR con DEF, y los
componentes auxiliares que hacen todo funcionar.

## Evolución del sistema de escape

El escape del ISX cambió dramáticamente con las normas EPA:

**ISX pre-2007** (EPA 2002):
- Colector → turbo → silenciador → salida.
- Sistema simple, sin post-tratamiento significativo.

**ISX 2007-2010** (EPA 2007):
- Se agrega DOC (Diesel Oxidation Catalyst).
- Se agrega DPF (Diesel Particulate Filter).
- EGR (recirculación) suma para reducir NOx.

**ISX 2010+** (EPA 2010):
- DOC + DPF + inyector de DEF + SCR.
- El sistema más complejo y sofisticado.
- NOx reducido en 90% respecto a pre-2007.

## Componentes del sistema

Vamos por el flujo del gas de escape desde el motor hacia el exterior.

### 1. Colector de escape

Recibe los gases de los 6 cilindros y los canaliza hacia el turbo.

**Especificaciones**:
- Material: hierro fundido resistente a alta temperatura.
- Diseño múltiple ("6-en-1" o dos "3-en-1" según variante).
- Temperatura de operación: 500-700°C.

**Falla típica**: fisuras por fatiga térmica en motores muy viejos o
después de operación con sobrecalentamiento crónico.

### 2. Turbocompresor (turbina)

El lado turbina del turbo se acciona con los gases de escape (ya
cubierto en el artículo del sistema de admisión).

Los gases salen del turbo hacia el sistema de aftertreatment. Aquí es
donde empieza el tratamiento químico.

### 3. Diesel Oxidation Catalyst (DOC)

**Función**: oxidar HC (hidrocarburos no quemados) y CO (monóxido de
carbono) para convertirlos en CO₂ y H₂O (inofensivos).

**Estructura**:
- Panel cerámico honeycomb (celdas microscópicas).
- Recubrimiento de metales preciosos (platino + paladio).
- Los gases pasan por las celdas y reaccionan con los catalizadores.

**Reacciones**:
```
2CO + O₂ → 2CO₂
CnH2n+2 + (3n+1)/2 O₂ → nCO₂ + (n+1)H₂O
```

**Temperatura de trabajo eficiente**: 250-450°C. Por debajo de 200°C
apenas trabaja; por encima de 550°C se degrada progresivamente.

**Vida útil**: 500.000-800.000 km si no se envenena con combustible de
mal calidad (azufre alto ataca al platino).

### 4. Diesel Particulate Filter (DPF)

**Función**: atrapar las partículas sólidas (hollín + cenizas) del
escape.

**Estructura**:
- Panel cerámico con celdas alternadas cerradas y abiertas.
- Los gases se ven forzados a pasar por las paredes cerámicas
  microporosas.
- Las partículas quedan retenidas en las paredes.

**Eficiencia**: >99% de partículas retenidas — el DPF prácticamente
elimina el humo negro visible.

**Problema**: se llena con el tiempo. Solución = **regeneración**.

### Regeneración del DPF

Tres tipos:

**Regeneración pasiva**: en operación normal a alta carga, la
temperatura del escape sube arriba de 400°C — el hollín se quema
espontáneamente. Ideal pero no siempre alcanzable.

**Regeneración activa**: el ECM detecta que el DPF está saturado y
comanda una post-inyección de combustible. El combustible se quema en
el DOC (aguas arriba del DPF), elevando la temperatura del escape a
600°C — quema el hollín. Ocurre cada 400-800 km típico. Transparente
para el operador.

**Regeneración forzada/estacionaria**: cuando el DPF está muy saturado,
se activa una regeneración manual con el vehículo detenido usando
Cummins INSITE. Toma 30-45 minutos.

**Limpieza a fondo**: cada 300.000-500.000 km hay que desmontar el
DPF y limpiarlo con equipos especializados para remover cenizas
incombustibles (que la regeneración no quema).

### 5. Inyector de DEF (Diesel Exhaust Fluid)

En motores 2010+. Inyecta urea al 32.5% (DEF, AdBlue) en el escape
antes del SCR.

**Función**: proveer el agente reductor (amoníaco NH₃) que reacciona
en el SCR con los NOx.

**Componentes**:
- Tanque de DEF (típicamente 50-100 L).
- Bomba de DEF.
- Boquilla dosificadora comandada por ECM.
- Sensor de NOx aguas arriba.

**Consumo**: 3-5% del consumo de diesel. Si el motor consume 40 L/h de
diesel, gasta 1,2-2 L/h de DEF.

### 6. Selective Catalytic Reduction (SCR)

**Función**: reducir NOx a nitrógeno inofensivo (N₂) y agua (H₂O).

**Reacciones químicas**:
```
4NH₃ + 4NO + O₂ → 4N₂ + 6H₂O
4NH₃ + 2NO₂ + O₂ → 3N₂ + 6H₂O
```

**Estructura**:
- Similar al DOC (panel cerámico honeycomb).
- Recubrimiento de titanio-vanadio o zeolita.
- El DEF (transformado en amoníaco por el calor) reacciona con los
  NOx en el catalizador.

**Eficiencia**: 90% de NOx reducido a nivel de emisiones EPA modernas.

### 7. Ammonia Slip Catalyst (ASC)

**Función**: atrapar cualquier amoníaco (NH₃) residual que no se
consumió en el SCR.

Es un catalizador pequeño después del SCR. Sin ASC, en algunas
condiciones podría escapar amoníaco (huele feo, es tóxico) por el
tubo de escape.

## Fallas típicas del sistema

### 1. DPF saturado (regeneración fallida)

**Causas**: mucho uso a baja carga (regeneración pasiva no ocurre),
combustible de mala calidad, sensores defectuosos que impiden
regeneración activa.

**Síntomas**: pérdida de potencia progresiva, códigos de falla, motor
puede entrar en derateo.

**Solución**: regeneración estacionaria forzada con INSITE. Si no
resuelve, limpieza a fondo o reemplazo.

### 2. DPF con cenizas (necesita limpieza)

**Cada 300.000-500.000 km**. Es normal.

**Solución**: desmontar y limpiar en equipo especializado. USD
300-800.

### 3. Inyector de DEF cristalizado

El DEF se cristaliza si el sistema no drena correctamente al apagar.

**Síntomas**: alarma de DEF, códigos, dosificación irregular.

**Solución**: limpieza con agua desmineralizada (a veces basta).
Reemplazo del inyector si está muy dañado (USD 300-600).

### 4. Sensor de NOx defectuoso

El sensor de NOx tiene vida útil relativamente corta (300.000-500.000
km).

**Síntomas**: códigos de emisiones, dosificación incorrecta de DEF.

**Solución**: cambio del sensor. USD 500-1.200.

### 5. Fallas del SCR

- Catalizador envenenado por azufre en combustible.
- Fisura en el cuerpo por vibraciones.
- Sensores auxiliares defectuosos.

**Diagnóstico**: análisis con INSITE + inspección visual.

## Errores comunes

### Rellenar el tanque de DEF con lo que no debe

- **NUNCA** poner diesel en el tanque de DEF (destruye la bomba y el
  SCR completo — daño de USD 10.000+).
- **NUNCA** poner DEF en el tanque de diesel (contamina el sistema de
  combustible — reparación USD 3.000-5.000).
- **NUNCA** rellenar DEF con agua común (destruye el sistema — usar
  solo AdBlue o DEF certificado).

Los tanques tienen colores y bocas de llenado distintas para evitar
confusiones, pero errores humanos ocurren cada día.

### Ignorar códigos de aftertreatment

Los códigos del sistema de post-tratamiento **no son opcionales**. El
motor está diseñado para derateearse progresivamente si no se
resuelven.

### Delete no autorizado

Como se mencionó en las FAQ: tentador pero ILEGAL y con consecuencias
serias.

## Mantenimiento

**Programa típico**:

- **Cada 30.000-50.000 km**: chequeo de códigos, verificación de
  consumo de DEF razonable.
- **Cada 100.000 km**: reemplazo de filtro de DEF (pequeño, en el
  sistema).
- **Cada 300.000-500.000 km**: limpieza a fondo del DPF.
- **Cada 500.000-800.000 km**: reemplazo posible de sensores de NOx.
- **Cada 800.000-1.200.000 km**: potencial reemplazo del DOC/SCR si
  están gastados.

## En resumen

El **sistema de escape** del Cummins ISX moderno es un tratamiento
químico complejo que reduce hasta 90% de los contaminantes.
Componentes en secuencia: **DOC** (oxida HC/CO), **DPF** (atrapa
partículas), **inyector de DEF**, **SCR** (reduce NOx), y **ASC**
(atrapa amoníaco residual).

Requiere **DEF (AdBlue)** — solución de urea que se consume al 3-5%
del combustible. Sin DEF el motor derata progresivamente hasta
detenerse.

Las fallas típicas incluyen: **DPF saturado** (regeneración forzada
o limpieza), **inyector DEF cristalizado** (limpieza), **sensores de
NOx** con vida útil limitada.

El sistema es **caro y complejo** pero es obligatorio en motores
2010+. Los "deletes" son ilegales y contraproducentes. Con
mantenimiento correcto, el sistema dura las mismas 500.000-1.000.000
km que el motor mecánico.
