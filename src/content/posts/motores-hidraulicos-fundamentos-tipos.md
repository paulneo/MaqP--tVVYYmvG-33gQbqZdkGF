---
title: "Motores hidráulicos: fundamentos, tipos y aplicaciones"
published: 2026-08-14
draft: false
featured: false
description: "Los motores hidráulicos convierten presión de aceite en rotación con altísimo torque. Explicamos los tipos (engranajes, paletas, pistones) y usos en excavadoras."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "motores-hidraulicos"
  - "torque-hidraulico"
  - "sistema-hidraulico"
  - "traslacion-oruga"
  - "giro-torreta"
image: ""
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿En qué se diferencia un motor hidráulico de una bomba hidráulica?"
    a: "Funcionan de manera OPUESTA. La bomba recibe energía mecánica (torque × RPM) y genera energía hidráulica (caudal × presión). El motor hace lo contrario: recibe energía hidráulica y genera energía mecánica rotativa. Físicamente algunos motores son idénticos a bombas del mismo tipo — solo cambia el sentido del flujo. De hecho, muchas 'bombas' se pueden operar como motores en aplicaciones especiales, aunque no siempre con la misma eficiencia."
  - q: "¿Por qué se usa motor hidráulico en vez de motor eléctrico?"
    a: "Tres razones principales. (1) Torque enorme por tamaño: un motor hidráulico chico puede generar cientos de Nm de torque; un motor eléctrico equivalente sería 5-10x más grande. (2) Control preciso: podés dosificar torque y velocidad con precisión mediante válvulas. (3) Sobrevive a ambientes hostiles: agua, polvo, vibraciones — el aceite sella y refrigera al mismo tiempo. Se usa donde hay que rotar cargas pesadas de forma controlada: orugas de excavadora, giro de torreta, tambores de cabrestante, dispositivos de perforación."
  - q: "¿Cuánto torque genera un motor hidráulico?"
    a: "Depende de tamaño y presión. Referencias: motor pequeño (motor de pulverizador): 5-50 Nm. Motor mediano (rodillo compactador, mezcladora): 500-3.000 Nm. Motor grande (traslación de excavadora, giro de torreta): 5.000-30.000 Nm. Motor muy grande (motor de rueda de camión minero): 100.000-500.000 Nm. Con una relación adecuada de caja reductora, se pueden generar millones de Nm en aplicaciones especiales — de ahí que las excavadoras gigantes de minería puedan mover cargas de cientos de toneladas."
  - q: "¿Los motores hidráulicos son reversibles?"
    a: "Sí, cambiando el sentido del flujo del aceite. Si el aceite entra por el puerto A y sale por el B, el motor gira en un sentido. Si invertís y entra por B y sale por A, el motor gira en el opuesto. Esta reversibilidad es una de sus grandes ventajas: no necesitás caja de cambios ni embrague para invertir el sentido de marcha. Por eso las orugas de una excavadora pueden ir adelante y atrás simplemente comandando las válvulas direccionales — no hay engranajes que cambiar."
  - q: "¿Se pueden conectar dos motores hidráulicos en serie?"
    a: "Sí, y se hace en aplicaciones específicas. En SERIE: el mismo caudal pasa por ambos motores. Ventaja: sincronización perfecta de velocidad (los dos giran igual). Contra: la presión se reparte, por lo que el torque disponible por motor baja a la mitad. En PARALELO: cada motor recibe su propio caudal. Ventaja: cada motor tiene toda la presión disponible (torque completo). Contra: si un motor encuentra menos resistencia, gira más rápido — no siempre están sincronizados. Excavadoras usan paralelo con válvulas de sincronización para las orugas."
sources:
  - title: "Manual de Motores y Bombas Hidráulicas"
    url: "https://www.maquinariaspesadas.org/blog/2828-manual-motores-bombas-hidraulicas-funcionamiento-clasificacion"
  - title: "Bosch Rexroth — Hydraulic Motor Design"
    url: "https://www.boschrexroth.com/"
  - title: "Parker Hannifin — Hydraulic Motor Selection"
    url: "https://www.parker.com/"
related:
  - bombas-hidraulicas-tipos-engranajes-paletas-pistones
  - cilindros-hidraulicos-simple-doble-efecto
  - sistema-hidraulico-excavadora-recorrido-aceite
---

Si los **cilindros hidráulicos** son los músculos que empujan y tiran,
los **motores hidráulicos** son los músculos que **rotan**. Cada oruga
de una excavadora, cada tambor de cabrestante de una grúa, cada torreta
que gira 360° — todos son motores hidráulicos disfrazados.

Este artículo abre qué son, cómo funcionan las tres familias
principales (engranajes, paletas, pistones), y cómo elegir el correcto
para cada aplicación de maquinaria pesada.

## Qué es un motor hidráulico

Un **motor hidráulico** es un actuador rotativo que convierte
**energía hidráulica** (caudal × presión) en **energía mecánica
rotativa** (torque × velocidad angular).

Es el proceso **inverso** al de una bomba:

- **Bomba**: torque de entrada → aceite a presión → caudal saliente.
- **Motor**: aceite a presión entrando → torque saliente → RPM
  resultantes.

Físicamente, muchos motores son estructural­mente idénticos a bombas
del mismo tipo. Solo cambia el sentido del flujo del aceite y la
función.

### Fórmulas clave

**Torque generado**:

```
T = (P × Cilindrada) / (2π × η)
```

Donde:
- T = torque (Nm)
- P = presión (Pa)
- Cilindrada = volumen por revolución (m³/rev)
- η = eficiencia mecánica (~0,90-0,95)

**Velocidad de giro**:

```
RPM = (Caudal × η_vol) / Cilindrada
```

Donde:
- Caudal = flujo de aceite (m³/min)
- η_vol = eficiencia volumétrica (~0,85-0,95)

**Potencia mecánica de salida**:

```
Potencia = (T × RPM) / 9.549   [kW]
```

## Familia 1: motores de engranajes

Los más simples y económicos. Estructura análoga a la bomba de
engranajes.

### Cómo funcionan

- Dos engranajes en carcasa sellada.
- Aceite entra por un puerto, empuja los dientes.
- La presión sobre los dientes genera torque.
- Aceite sale por el puerto opuesto.

### Características

- **Cilindrada**: 5-200 cm³/rev.
- **Presión máxima**: 150-250 bar.
- **RPM**: 500-4.000 típico.
- **Torque típico**: 5-500 Nm.
- **Eficiencia mecánica**: 80-90%.

### Ventajas

- Simples, robustos, económicos.
- Buena tolerancia a contaminación relativa.
- Reversibles instantáneamente.
- Repuestos y servicio ampliamente disponibles.

### Desventajas

- **Torque limitado**.
- **Ruidosos** (típico de todo lo que es engranajes).
- **Eficiencia media** — se pierde por fugas internas.
- **Vida útil relativamente corta** (5.000-10.000 h).

### Aplicaciones

- Ventiladores hidráulicos de refrigeración.
- Bombas de succión industriales.
- Máquinas herramienta simples.
- Aplicaciones auxiliares en maquinaria pesada.

## Familia 2: motores de paletas

Similar a las bombas de paletas pero funcionando al revés.

### Características

- **Cilindrada**: 10-200 cm³/rev.
- **Presión máxima**: 150-250 bar.
- **RPM**: 200-3.000.
- **Torque típico**: 20-1.000 Nm.
- **Eficiencia**: 85-90%.

### Ventajas

- Menos ruido que engranajes.
- Buena eficiencia media.
- Reversibles y de arranque suave.

### Desventajas

- Sensibles a contaminación (paletas se atascan).
- Presión y torque medios.
- Cada vez más reemplazados por pistones en aplicaciones modernas.

### Aplicaciones

- Sistemas industriales medianos.
- Aplicaciones de rotación continua a velocidad media.

## Familia 3: motores de pistones

Los más sofisticados. **Los que se usan mayoritariamente en maquinaria
pesada** cuando se requiere alto torque.

### Variantes principales

**Motores de pistones axiales (swashplate)**:
- Pistones paralelos al eje.
- Plato inclinado convierte presión en torque.
- Cilindrada fija o variable.

**Motores de pistones radiales**:
- Pistones radiales al eje central.
- Muy alto torque a baja velocidad.
- Ideales para traslación de máquinas grandes.

**Motores lentos de alto torque (LSHT — Low Speed High Torque)**:
- Diseño especializado para poca RPM (0-200) pero torque enorme
  (miles de Nm).
- Usan pistones radiales o engranajes internos.
- Comunes en accionamientos directos de ruedas y orugas.

### Características (pistones axiales típicos)

- **Cilindrada**: 20-1.500 cm³/rev.
- **Presión máxima**: 250-450 bar.
- **RPM**: 500-4.500.
- **Torque típico**: 50-15.000 Nm.
- **Eficiencia**: 90-95%.

### Características (LSHT radiales)

- **Cilindrada**: 200-8.000 cm³/rev.
- **Presión máxima**: 300-450 bar.
- **RPM**: 5-200 (muy bajas).
- **Torque típico**: 500-50.000 Nm.
- **Eficiencia**: 92-97%.

### Ventajas

- **Alto torque** y alta potencia.
- **Excelente eficiencia**.
- **Reversibles con arranque suave**.
- **Larga vida útil** (15.000-25.000 h con buen mantenimiento).
- **Caudal/cilindrada variable** en modelos compensados — permite
  cambiar torque y velocidad sobre la marcha.

### Desventajas

- **Costo alto** (USD 3.000-25.000).
- **Requieren aceite limpio** (filtración 10 μm o mejor).
- **Reparación compleja** — requiere especialistas.

## Comparativa lado a lado

| Aspecto              | Engranajes         | Paletas          | Pistones axiales | LSHT Radiales     |
| -------------------- | ------------------ | ---------------- | ---------------- | ----------------- |
| **Torque típico**    | 5-500 Nm           | 20-1.000 Nm      | 50-15.000 Nm     | 500-50.000 Nm     |
| **RPM típico**       | 500-4.000          | 200-3.000        | 500-4.500        | 5-200             |
| **Eficiencia**       | 80-90%             | 85-90%           | 90-95%           | 92-97%            |
| **Costo**            | USD 200-1.500      | USD 800-3.500    | USD 3.000-15.000 | USD 5.000-25.000  |
| **Vida útil**        | 5-10 mil h         | 8-15 mil h       | 15-25 mil h      | 15-30 mil h       |
| **Aplicación típica** | Ventiladores, auxiliares | Sistemas industriales | Giros, accionamientos generales | Traslación oruga, ruedas |

## Aplicaciones en maquinaria pesada

### Traslación de orugas (excavadora)

Cada oruga tiene un **motor hidráulico LSHT** conectado por reducción
planetaria a la rueda motriz. Un motor de pistones radiales de
5.000-15.000 Nm generando 50-200 RPM, más una reducción de 30:1, da
150.000-450.000 Nm en la rueda — suficiente para mover una máquina de
25 toneladas en cualquier terreno.

### Giro de torreta

La rotación de 360° de la torreta usa un **motor de pistones axiales**
con caudal variable. La reducción es planetaria (relación ~30-60:1).
Cambio de sentido instantáneo — clave para la operatividad de la
excavadora.

### Cabrestantes (grúas, remolcadores)

**Motores LSHT** de gran diámetro conectados directamente al tambor.
Torque enorme a velocidad baja — el patrón exacto para levantar cargas
pesadas con cable.

### Trituradoras y molinos

**Motores de pistones axiales** de alta potencia, con caudal variable
para adaptar la velocidad al tamaño del material a triturar.

### Perforadoras rotativas

Motores hidráulicos para la rotación del tubo de perforación —
combinan alto torque (romper el material) con velocidad variable
(según la profundidad y tipo de suelo).

## Cómo dimensionar un motor hidráulico

Tres pasos:

### 1. Determinar el torque requerido

Depende de la aplicación:
- Traslación de vehículo: masa × pendiente × coeficiente de fricción
  × radio de rueda.
- Rotación de carga: momento de inercia × aceleración angular +
  torque estático.
- Cabrestante: peso a levantar × radio del tambor.

### 2. Determinar la velocidad de giro requerida

En RPM. Suele estar dada por la aplicación (velocidad de traslación,
ciclo de trabajo, etc.).

### 3. Elegir motor + reducción

En vez de buscar un motor que dé exactamente los valores requeridos,
se elige un **motor estándar** (de catálogo) y se agrega una
**reducción mecánica** (planetaria, cadena, engranajes) para adaptar
torque y velocidad al output final requerido.

Ejemplo: si necesitás 100.000 Nm a 30 RPM, es común usar un motor de
5.000 Nm a 600 RPM con una reducción de 20:1.

## Fallas comunes y diagnóstico

### Pérdida de torque

**Causa**: fugas internas por sellos vencidos o desgaste de pistones.
**Diagnóstico**: comparar torque real vs esperado bajo carga conocida.
Si la caída es más de 15%, hay fugas internas — reparación o cambio.

### Ruido nuevo

**Causa**: cavitación (falta de aceite en aspiración), rodamiento
gastado, o desgaste interno grave.
**Diagnóstico**: identificar tipo de ruido (silbido = cavitación;
golpeteo = componente gastado).

### Sobrecalentamiento del aceite en el motor

**Causa**: fugas internas convierten energía útil en calor. Si el
motor calienta más que el resto del sistema, hay problema interno.

### Movimiento errático

**Causa**: aire en el circuito, válvula direccional descontrolada, o
motor con daño interno.

### Arranque lento o difícil

**Causa**: baja presión de sistema, o motor con desgaste severo.

## Mantenimiento

Los motores hidráulicos comparten con las bombas los mismos requisitos:

1. **Aceite limpio siempre**: cambios en tiempo, filtros de calidad.
2. **Temperatura controlada**: bajo 80°C ideal.
3. **Evitar cavitación**: revisar mangueras de retorno y depósito.
4. **No forzar contra carga**: cuando el motor se atasca, la válvula
   de alivio abre — repetir esto muchas veces daña el motor.
5. **Alineación**: motores conectados a reductores deben estar
   perfectamente alineados. Desalineación causa desgaste acelerado.

Vida útil típica con buen mantenimiento:

- Engranajes: 5.000-10.000 h.
- Paletas: 8.000-15.000 h.
- Pistones axiales: 15.000-25.000 h.
- LSHT radiales: 20.000-30.000 h.

## Motor hidráulico vs otras opciones

Vale la pena entender cuándo usar hidráulico y cuándo alternativas.

### Motor hidráulico vs motor eléctrico

**Hidráulico gana en**: torque por tamaño (5-10x más denso), robustez
en ambientes hostiles, cambio de sentido instantáneo sin electrónica.

**Eléctrico gana en**: eficiencia (95% vs 80% del sistema hidráulico
completo), limpieza (no fugas de aceite), silencio, mantenimiento más
predecible.

### Motor hidráulico vs transmisión mecánica

**Hidráulico gana en**: flexibilidad (transmisión a cualquier
distancia con solo mangueras), control variable de velocidad y torque,
tolerancia a golpes.

**Mecánica gana en**: eficiencia (98%+ en engranajes bien mantenidos),
robustez de larguísimo plazo, menor costo inicial.

Por eso las excavadoras modernas usan **combinación**: motor diesel a
motor hidráulico (para flexibilidad) → reducción mecánica planetaria
(para eficiencia en el output).

## En resumen

Los motores hidráulicos son los **actuadores rotativos** más potentes
por unidad de tamaño y los que dan la increíble movilidad y capacidad
de maniobra a la maquinaria pesada moderna.

Las tres familias principales — **engranajes, paletas, pistones** —
cubren rangos crecientes de torque, eficiencia, costo y sofisticación.
Los **motores LSHT** son la especialidad para altísimo torque a baja
velocidad, y los que mueven orugas y ruedas de maquinaria pesada.

Comparten con las bombas el mismo cuidado clave: **aceite limpio,
temperatura controlada, no forzar contra tope**. Con esos tres
principios, cualquier motor hidráulico te va a durar las 15.000+ horas
esperadas.
