---
title: "Sensores y componentes del DPF: temperatura, presión y estructura interna"
published: 2026-08-04
draft: false
featured: false
description: "El DPF no es solo un filtro: incluye sensores de temperatura y presión diferencial, distribuidor de flujo, condensate ring y aislamiento. Guía técnica de cada componente."
category: mecanica-automotriz
formato: guia
nivel: avanzado
tags:
  - "dpf"
  - "sensores"
  - "presion-diferencial"
  - "temperatura-escape"
  - "diagnostico-motor"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/acert/sensores-componentes-dpf
author: jean-paul
reviewedBy: jean-paul
aiAssisted: true
faq:
  - q: "¿Qué sensores tiene un DPF?"
    a: "Un DPF típico Cat lleva 4 sensores principales: dos de temperatura (uno a la entrada, otro a la salida, llamados Particulate Trap Inlet y Outlet Temperature Sensor), y dos taps de presión que forman el sensor diferencial (uno antes y otro después del sustrato). La ECU usa la diferencia de temperatura para saber si hay regeneración activa, y la diferencia de presión para saber cuánto hollín se acumuló. En DPF dual hay 8 sensores en total (4 por trap)."
  - q: "¿Qué es el sensor de presión diferencial del DPF?"
    a: "Es un transductor que mide la diferencia de presión entre la entrada y la salida del DPF. Cuando el DPF está limpio, esta diferencia es baja (5-15 kPa). A medida que se acumula hollín, las paredes del sustrato se obstruyen y la presión de entrada sube — la diferencia crece. Cuando llega a un umbral (típicamente 25-40 kPa según modelo), la ECU dispara una regeneración. Es el sensor más crítico del sistema."
  - q: "¿Qué es el condensate ring en el DPF?"
    a: "Es un anillo estructural interno cerca de la entrada del DPF que ayuda a que se acumule y evapore el agua condensada de los gases del escape. Los gases del escape contienen mucho vapor de agua (producto de la combustión), que si condensa dentro del DPF frío puede causar corrosión y afectar el flujo. El condensate ring dirige esa agua hacia zonas donde se evapora rápido cuando el sistema toma temperatura."
  - q: "¿Para qué sirve el inlet diffuser tube?"
    a: "El diffuser tube (tubo distribuidor) está en la sección de entrada del DPF. Su función es distribuir uniformemente los gases del escape sobre TODA la cara del sustrato, en vez de que entren concentrados en el centro. Sin diffuser, los gases entrarían con velocidad y presión desiguales, lo que causaría que el hollín se acumulara desparejo — algunas zonas del sustrato se taparían rápido mientras otras quedarían casi vacías. El diffuser garantiza uso uniforme de toda la superficie filtrante."
  - q: "¿Por qué el DPF tiene aislamiento térmico interno?"
    a: "El DPF opera a temperaturas muy altas — hasta 600-800 °C durante la regeneración activa. Sin aislamiento térmico, la carcasa exterior estaría muy caliente al tacto (peligro de quemaduras), transmitiría calor a componentes cercanos del vehículo, y perdería temperatura interna necesaria para catalizar reacciones. El aislamiento (típicamente fibras cerámicas) mantiene el calor donde se necesita —dentro del filtro— y protege el exterior. Se ubica entre el shell exterior y el shell interior del DPF."
sources:
  - title: "Caterpillar Global Manpower Development — ACERT 2007 Systems Overview"
    url: "https://heavyequipments.org/"
  - title: "Cat Service Information System — DPF Sensor Diagnostics"
    url: "https://www.cat.com/"
  - title: "SAE International — Diesel Engine Emission Control Sensor Technology"
    url: "https://www.sae.org/"
related:
  - que-es-un-dpf-diesel-particulate-filter
  - como-funciona-dpf-sustrato-catalizador
  - regeneracion-dpf-pasiva-activa-forzada
  - codigos-error-diagnostico-dpf
---

Un DPF **no es solo un filtro cerámico**. Es un sistema completo que incluye
sensores de temperatura, sensores de presión diferencial, un distribuidor de
flujo, un anillo de condensación, aislamiento térmico y una carcasa
estructural. Cada uno de estos elementos tiene una función específica, y
cualquiera de ellos puede fallar y generar un código de error que apaga o
derratea el motor.

Este artículo abre el DPF por dentro, componente por componente, con foco en
lo que un técnico necesita saber para diagnosticar problemas.

## Estructura general: 3 secciones

Un DPF típico se divide en **tres secciones** ensambladas con flanges:

1. **Inlet section** (sección de entrada) — donde entran los gases del escape.
2. **Center section** (sección central) — contiene el sustrato cerámico y los sensores.
3. **Outlet section** (sección de salida) — donde salen los gases filtrados.

Las tres secciones se unen con **V-band clamps** (abrazaderas tipo V) que
permiten desarmar el DPF para servicio sin romper juntas. El torque
recomendado por Cat es de **100 inch-pounds (~11 Nm)** para estas
abrazaderas — un valor bajo pero crítico: si se excede, se rompe la
abrazadera; si se afloja, hay fuga de escape.

## La inlet section por dentro

La sección de entrada del DPF es una pieza compleja con **varios componentes
funcionales**:

### Inlet diffuser tube (tubo distribuidor)

Es el elemento más importante de la inlet section. Es un tubo cilíndrico
perforado (parece un colador metálico) que recibe los gases del turbo y los
distribuye **radialmente** hacia toda la cara del sustrato.

Sin diffuser tube, los gases entrarían al DPF concentrados en el centro. Eso
crearía dos problemas:

- **Zona central del sustrato se satura de hollín rápido** mientras las
  zonas exteriores quedan casi vacías.
- **Presión diferencial mide alto** mucho antes de que el DPF esté
  realmente lleno → regeneraciones falsas.

Con diffuser, los gases entran distribuidos en toda la circunferencia y el
uso del sustrato es **uniforme**. Es la razón por la que se usa toda la
capacidad de filtrado disponible.

### Distributor tube (tubo interno)

Es una versión más pequeña o secundaria del diffuser en algunos diseños,
usada para "afinar" la distribución del gas antes de que entre a los
canales del sustrato. En algunos DPF simples, el diffuser y el distributor
son la misma pieza.

### Condensate ring (anillo de condensación)

Es un anillo estructural interno cerca de la entrada del sustrato. Su
función es controlar el **agua condensada** de los gases del escape.

Los gases diesel de combustión contienen **mucho vapor de agua** (producto
químico natural: hidrógeno del combustible + oxígeno del aire = H₂O).
Cuando el DPF está frío (arranque, ralentí prolongado), ese vapor puede
condensar en las paredes internas. El condensate ring:

- **Redirige el agua** hacia zonas donde no daña el sustrato.
- **Facilita la evaporación** cuando el sistema toma temperatura.
- **Previene corrosión interna** de los componentes metálicos.

Es una pieza aparentemente simple pero crítica en climas húmedos y en
motores que operan mucho tiempo en ralentí.

### Insulation (aislamiento térmico)

Entre el shell exterior (carcasa metálica visible desde afuera) y el shell
interior (carcasa que rodea al sustrato) hay una capa de **aislamiento
térmico** — típicamente fibras cerámicas de alta temperatura, similar a
las que se usan en aislamiento industrial de hornos.

Tres funciones:

1. **Mantener temperatura interna alta** para que las reacciones catalíticas
   sean eficientes (necesitan >200 °C).
2. **Proteger componentes externos** del calor extremo (durante regeneración
   el DPF puede llegar a 700-800 °C internos).
3. **Reducir riesgo de quemaduras** para técnicos que trabajen cerca del
   escape.

El aislamiento se degrada con el tiempo — típicamente hay que reemplazar el
DPF completo cuando el aislamiento pierde eficacia (temperatura externa
sube, aparecen problemas de regeneración por pérdida de calor).

### Formed marmon flange y lifting eye

En la parte externa de la inlet section se ven dos elementos estructurales:

- **Formed marmon flange**: la brida donde se conecta el tubo del escape que
  viene del turbo. Es una brida especial tipo Marmon (con collar en V) que
  facilita el ensamble/desensamble.
- **Lifting eye**: un ojo metálico para colgar el DPF con grúa durante el
  desarmado. El DPF pesa 25-55 kg (single) o más de 100 kg (dual), no se
  puede manipular a mano.

## La center section por dentro

Es donde vive **el sustrato cerámico** (el filtro propiamente dicho) y
también **los sensores principales**.

### Los 4 sensores de la center section

Un DPF single tiene 4 sensores conectados a la center section:

1. **Particulate Trap #1 Intake Temperature Sensor** — mide la temperatura
   del gas ANTES del sustrato. Rango típico: 100-700 °C.
2. **Particulate Trap #1 Outlet Temperature Sensor** — mide la temperatura
   del gas DESPUÉS del sustrato. Rango típico: 100-800 °C durante
   regeneración.
3. **Particulate Trap #1 Differential Pressure Sensor Tap (Intake)** — no es
   el sensor en sí, es la **toma** por donde se lleva la presión al sensor
   diferencial. Está antes del sustrato.
4. **Particulate Trap #1 Differential Pressure Sensor Tap (Outlet)** — la
   otra toma, después del sustrato. Ambos taps se conectan por mangueras a
   un sensor diferencial montado externamente.

**Un DPF dual tiene 8 sensores** — todo duplicado (Trap #1 + Trap #2).

### Cómo trabaja el sensor diferencial

El sensor diferencial de presión (Differential Pressure Sensor) es
probablemente **el sensor más importante del DPF**. Mide la diferencia de
presión entre entrada y salida del sustrato:

- **DPF limpio**: diferencia baja (5-15 kPa a plena carga).
- **DPF con hollín acumulado**: diferencia crece hasta 20-30 kPa.
- **DPF necesitando regeneración**: 30-40 kPa → ECU dispara regeneración.
- **DPF muy saturado o dañado**: >50 kPa → código de error, posible
  derateo del motor.

La ECU usa este dato junto con la temperatura y las horas de operación para
decidir cuándo regenerar.

### Los sensores de temperatura y su lógica

Los dos sensores de temperatura (intake y outlet) permiten a la ECU **saber
si la regeneración está ocurriendo**:

- En operación normal: outlet temperature ≈ intake temperature ± 20 °C.
- En regeneración activa: outlet sube mucho más que intake (delta de
  100-200 °C).
- Si outlet sube demasiado (>800 °C sostenido): **shutdown protectivo** —
  regeneración descontrolada, riesgo de dañar el sustrato.

Estos sensores fallan con relativa frecuencia. Síntomas: código de error
de "temperature sensor out of range", regeneraciones abortadas
prematuramente, motor en modo derateo.

## La outlet section

Es la parte más simple del DPF. Recibe los gases filtrados del sustrato y
los envía al tubo de escape. Puede incluir:

- **Silenciador integrado** en algunos diseños.
- **Conexión al SCR** en motores Tier 4 Final (los gases limpios del DPF
  entran al SCR para reducción de NOx con urea).

También lleva un **flange marmon** para conexión al escape siguiente. En
algunos DPFs hay un **sensor de temperatura de salida** adicional que la
ECU usa para monitorear el estado del sistema completo.

## Cómo diagnosticar problemas con estos sensores

Cuando aparece un código de error relacionado al DPF, el flujo típico es:

1. **Leer códigos con Cat ET** (o scanner equivalente para otras marcas).
2. **Identificar sensor específico** que falló (código dice cuál).
3. **Verificar cableado y conector** — muy común que el problema sea
   corrosión o cable roto, no el sensor en sí.
4. **Medir resistencia del sensor** contra especificación del manual (Cat
   Service Information System).
5. **Chequear presión y temperatura live** con la máquina en marcha para
   confirmar rangos.
6. **Reemplazar sensor** si está fuera de rango.

Costo típico de sensores:

- **Temperatura sensor**: USD 200-400 unitario (Cat OEM).
- **Presión diferencial sensor**: USD 400-700.
- **Kit de manguera + tap**: USD 100-200.

Reemplazar un sensor toma 1-3 horas de mano de obra según acceso.

## En resumen

El DPF es mucho más que un sustrato cerámico. Es un sistema con **inlet
section** (diffuser tube, condensate ring, aislamiento), **center section**
(el sustrato + 4 sensores) y **outlet section**. Cada componente tiene su
función específica y puede fallar independientemente.

Para diagnosticar problemas del sistema ACERT relacionados a emisiones, el
técnico necesita entender qué mide cada sensor, qué rangos son normales y
cuáles indican falla. Los sensores de temperatura y el diferencial de
presión son los que más problemas dan — y también los más fáciles de
diagnosticar una vez que sabés dónde están y cómo trabajan.

En próximos artículos vamos a ver la **regeneración del DPF** — cómo se
quema el hollín acumulado — y los **códigos de error más comunes** con sus
soluciones específicas.
