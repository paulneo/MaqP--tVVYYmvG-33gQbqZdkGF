---
title: "Circuitos hidráulicos abiertos vs cerrados: diferencias y usos"
published: 2026-07-30
draft: false
featured: false
description: "Los sistemas hidráulicos se dividen en circuitos abiertos y cerrados. Cada tipo tiene ventajas específicas y aplicaciones donde brilla. Te explicamos las diferencias clave."
category: mecanica-automotriz
formato: comparativa
nivel: intermedio
tags:
  - "circuito-abierto"
  - "circuito-cerrado"
  - "sistema-hidraulico"
  - "hidrostatica"
  - "arquitectura-hidraulica"
image: ""
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Cuál es más común en maquinaria pesada, abierto o cerrado?"
    a: "El circuito ABIERTO es el más común en maquinaria pesada de excavación y carga porque su lógica calza perfecto con el trabajo: mover múltiples actuadores independientes con demandas variables. Excavadoras, cargadores frontales y grúas usan circuito abierto para el sistema principal de trabajo. El circuito CERRADO domina en transmisiones hidrostáticas de traslación — cambio bidireccional de velocidad y sentido sin embragues ni caja de cambios, típico en cargadores frontales, motoniveladoras y algunas cosechadoras."
  - q: "¿Qué diferencia hace el circuito para el usuario final?"
    a: "En operación día a día, casi nada — el operador no distingue entre uno y otro. Las diferencias se ven en: (1) Eficiencia energética: cerrado es más eficiente pero solo cuando trabaja mucho tiempo en un mismo sentido. (2) Complejidad: cerrado tiene más componentes (bomba compensadora, válvulas de recarga, filtros extra). (3) Costo: cerrado es más caro pero permite regeneración de energía. (4) Mantenimiento: cerrado exige aceite más limpio porque las partículas circulan más rápido."
  - q: "¿Por qué los cargadores frontales tienen sistema hidrostático (cerrado) para transmisión?"
    a: "Porque necesitan CAMBIO INSTANTÁNEO de sentido de marcha — cargar, retroceder, volver a cargar — cientos de veces al día. Con transmisión mecánica clásica habría que embragar/desembragar y cambiar velocidades constantemente, dañando embragues rápidamente. Un sistema hidrostático cerrado permite cambiar de adelante a atrás girando la palanca de la bomba compensadora, sin pausa mecánica. Es ideal para el ciclo repetitivo de un cargador."
  - q: "¿Cuánto aceite usa cada tipo de sistema?"
    a: "Un CIRCUITO ABIERTO típico en maquinaria de 25 toneladas tiene 200-400 litros de aceite hidráulico (mucho porque el aceite pasa por el tanque después de cada ciclo). Un CIRCUITO CERRADO equivalente puede tener 30-80 litros porque el aceite recircula sin depositarse — se aprovecha 3-5 veces mejor el mismo volumen. Esta ventaja del cerrado es especialmente valiosa en aplicaciones móviles donde el peso y espacio son críticos."
  - q: "¿Se pueden combinar ambos tipos en una misma máquina?"
    a: "Sí, y es MUY común. La mayoría de excavadoras modernas tiene: circuito ABIERTO para brazo, cucharón y giro de torreta (múltiples actuadores independientes), y circuitos CERRADOS para traslación de cada oruga (movimiento bidireccional constante). Los cargadores frontales combinan circuito ABIERTO para brazo/cucharón con hidrostático CERRADO para traslación. El diseño moderno aprovecha lo mejor de cada arquitectura según el subsistema."
sources:
  - title: "Manual de Sistemas Hidráulicos — Conceptos y Circuitos"
    url: "https://www.maquinariaspesadas.org/blog/2586-manual-sistemas-hidraulicos-conceptos-circuito-basico-componentes"
  - title: "Bosch Rexroth — Open vs Closed Circuit Hydraulics"
    url: "https://www.boschrexroth.com/"
  - title: "Caterpillar — Hydraulic Systems Design Manual"
    url: "https://www.cat.com/"
related:
  - que-es-un-sistema-hidraulico-fundamentos
  - bombas-hidraulicas-tipos-engranajes-paletas-pistones
  - sistema-hidraulico-excavadora-recorrido-aceite
---

Toda la maquinaria pesada mundial se divide en dos grandes arquitecturas
hidráulicas: **circuitos abiertos** y **circuitos cerrados**. Elegir mal
es la diferencia entre una máquina eficiente y una que consume 30% más
combustible del necesario.

La distinción es simple de entender pero tiene implicaciones profundas
en diseño, mantenimiento y aplicaciones. En este artículo la abrimos
completa: qué es cada uno, cuándo conviene cada uno, y por qué las
excavadoras modernas usan ambos combinados.

## Qué es un circuito abierto

Un **circuito abierto** es aquel donde el aceite:

1. Sale de un **tanque** (depósito).
2. La **bomba** lo empuja al sistema con presión.
3. El aceite hace su trabajo en el **actuador** (cilindro o motor).
4. **Vuelve al tanque** — y de ahí puede volver a la bomba.

El nombre "abierto" viene de que el aceite **circula abriendo su
recorrido cada vez desde el tanque**. Cada ciclo es una vuelta completa
tanque → bomba → actuador → tanque.

```
[TANQUE]
   ↓
[BOMBA]
   ↓ (aceite a presión)
[VÁLVULA DIRECCIONAL]
   ↓
[CILINDRO / MOTOR]
   ↓ (aceite de retorno)
[TANQUE]  ← vuelve al inicio
```

### Características

- **Presión variable** según el trabajo — sube y baja constantemente.
- **Un solo sentido de circulación**: siempre desde tanque al actuador.
- **Alto volumen de aceite** — porque el tanque necesita capacidad para
  absorber picos de retorno.
- **Múltiples actuadores** pueden conectarse en paralelo, cada uno con
  su válvula.
- **Retorno con baja presión** — el aceite vuelve al tanque casi sin
  resistencia.

### Ventajas

1. **Simplicidad**: menos componentes, más fácil de diseñar y reparar.
2. **Múltiples actuadores independientes**: podés tener 5 cilindros
   trabajando a distinta velocidad y fuerza sin problema.
3. **Buena disipación de calor**: el aceite se enfría cada vez que
   vuelve al tanque.
4. **Aceite se limpia** cada ciclo pasando por filtros del tanque.
5. **Costo menor** que un circuito cerrado equivalente.

### Desventajas

1. **Menor eficiencia** cuando el actuador trabaja mucho tiempo en el
   mismo sentido (mucha caída de presión en válvulas).
2. **Tanque grande** = peso extra en máquinas móviles.
3. **Más aceite** = mayor costo de recambio y mantenimiento.
4. **No aprovecha energía de retorno** — el aceite pierde su energía en
   la válvula direccional al volver al tanque.

## Qué es un circuito cerrado

Un **circuito cerrado** es aquel donde el aceite:

1. Sale de la **bomba** al actuador.
2. Trabaja en el actuador.
3. **Vuelve directamente a la bomba** — no pasa por el tanque.

El aceite **circula en un circuito cerrado** entre bomba y actuador,
sin depositarse en un tanque intermedio. El tanque existe pero solo
para compensación (pequeño depósito de reserva y refrigeración
parcial).

```
[BOMBA] ↔ [ACTUADOR]
     ↕
[Depósito compensador pequeño]
```

Las flechas dobles indican que el aceite puede circular en **ambos
sentidos** — por eso permite naturalmente cambio de sentido del
actuador.

### Características

- **Bomba de caudal y sentido variables** (compensada).
- **Bajo volumen de aceite** — sin gran tanque.
- **Aceite recircula constantemente** entre bomba y actuador.
- **Aceite auxiliar** de reposición para compensar pequeñas fugas.
- **Válvulas de seguridad y recarga** en ambos lados del circuito.

### Ventajas

1. **Alta eficiencia** en trabajo continuo (sin caída de presión en
   válvulas direccionales).
2. **Cambio instantáneo de sentido** girando el mando de la bomba
   compensadora — sin embragues ni pausas.
3. **Compacto**: mucho menos aceite y espacio total.
4. **Regeneración de energía** posible (freno regenerativo hidráulico).
5. **Menor peso**: crítico en aplicaciones móviles.

### Desventajas

1. **Complejidad mayor**: más componentes que pueden fallar.
2. **Solo un actuador** por circuito cerrado (dos actuadores exigen dos
   sistemas paralelos).
3. **Refrigeración menor**: el aceite no pasa por un tanque grande, se
   calienta más → requiere enfriador dedicado.
4. **Sensible a contaminación**: partículas pequeñas circulan más
   rápido y desgastan más.
5. **Costo alto**: bomba compensadora, válvulas específicas.

## Comparativa lado a lado

| Aspecto                          | Circuito Abierto           | Circuito Cerrado                |
| -------------------------------- | -------------------------- | ------------------------------- |
| **Recorrido del aceite**         | Tanque → bomba → actuador → tanque | Bomba ↔ actuador (recircula)  |
| **Volumen de aceite**            | Alto (200-400 L típico)    | Bajo (30-80 L típico)           |
| **Nº de actuadores**             | Múltiples independientes   | Uno por circuito                |
| **Cambio de sentido**            | Vía válvula direccional    | Vía bomba (más rápido)          |
| **Eficiencia (trabajo continuo)** | Media                     | Alta                            |
| **Eficiencia (transientes)**     | Alta                       | Media                           |
| **Complejidad**                  | Baja                       | Alta                            |
| **Costo**                        | Menor                      | Mayor                           |
| **Refrigeración**                | Natural en tanque          | Requiere enfriador dedicado     |
| **Regeneración de energía**      | Difícil                    | Posible                         |
| **Aplicación típica**            | Cilindros de trabajo       | Motores de traslación / rotación |

## Cuándo elegir cada uno

### Elegí **circuito abierto** cuando:

- Tenés **varios actuadores independientes** (brazo, cucharón, giro,
  etc.).
- La demanda varía **mucho segundo a segundo**.
- El actuador solo se mueve **en un sentido predominante** (empujar,
  levantar).
- Priorizás **costo y simplicidad**.
- Necesitás **buena refrigeración natural**.

**Ejemplos**: sistema de trabajo de excavadora (brazo, cucharón, giro),
cilindros de levante de cargador frontal, prensas industriales,
elevadores hidráulicos.

### Elegí **circuito cerrado** cuando:

- El actuador trabaja **continuamente** en distintos sentidos.
- Necesitás **cambio rápido de dirección**.
- Priorizás **eficiencia energética** y **peso reducido**.
- El actuador es un **motor hidráulico** (movimiento rotativo).
- Podés justificar el **costo mayor** por ganancia en operación.

**Ejemplos**: transmisiones hidrostáticas (traslación de cargadores,
excavadoras, cosechadoras), giros de torreta de excavadoras premium,
sistemas de propulsión marina, algunos brazos robóticos.

## Cómo se combinan en una excavadora moderna

Una **Cat 320D** o Komatsu PC200 típica tiene:

| Subsistema                    | Circuito         |
| ----------------------------- | ---------------- |
| Cilindro de brazo (boom)      | Abierto          |
| Cilindro de balancín (stick)  | Abierto          |
| Cilindro de cucharón (bucket) | Abierto          |
| Giro de torreta (swing)       | Abierto o cerrado según modelo |
| Traslación oruga izquierda    | Cerrado (hidrostático) |
| Traslación oruga derecha      | Cerrado (hidrostático) |

Cada uno usa la arquitectura que le conviene. Los cilindros de trabajo
son abiertos porque necesitan responsividad y operación simultánea con
otros. Las orugas son cerrados porque cambian de sentido y velocidad
constantemente en operación real.

## Costo y mantenimiento comparado

**Costo inicial (típico maquinaria mediana)**:

- Sistema abierto completo: USD 15.000-30.000.
- Sistema cerrado equivalente: USD 25.000-50.000.

**Mantenimiento anual**:

- Abierto: cambio de aceite y filtros cada 1.000-2.000 h. Costo anual
  típico USD 800-1.500.
- Cerrado: cambio de aceite y filtros más frecuente (500-1.000 h) porque
  el aceite trabaja más intensamente. Costo anual típico USD
  1.200-2.500.

**Vida útil**:

- Bomba abierta: 15.000-25.000 horas.
- Bomba cerrada (compensada): 12.000-20.000 horas. Más piezas móviles
  = más desgaste.

## Errores comunes al diagnosticar

Muchos operadores y técnicos junior confunden síntomas de fallas
propias de cada arquitectura:

**En circuito abierto**:
- Pérdida de fuerza → usualmente válvula de alivio abriendo, aceite
  contaminado o desgaste en bomba.
- Sobrecalentamiento → tanque chico, aceite viejo, o enfriador
  obstruido.

**En circuito cerrado**:
- Movimiento errático → aire en el circuito (crítico en cerrado porque
  el aire no puede escapar naturalmente).
- Pérdida de eficiencia → válvulas de alivio internas gastadas,
  presión de recarga baja.
- Ruido en cambio de sentido → cavitación por presión de recarga
  insuficiente.

## En resumen

Los circuitos hidráulicos **abiertos** son la elección estándar cuando
querés controlar múltiples actuadores independientes con distintas
demandas — es la arquitectura predominante en excavadoras, prensas y
elevadores. Simples, baratos, robustos.

Los circuitos **cerrados** brillan cuando necesitás alta eficiencia
en trabajo continuo bidireccional — es la arquitectura de las
transmisiones hidrostáticas de cargadores, motoniveladoras y algunas
transmisiones especiales. Complejos, caros, pero muy eficientes en su
aplicación específica.

Las máquinas modernas no eligen "uno u otro" — **combinan ambos** en
subsistemas según lo que le conviene a cada función. El sistema de
trabajo va abierto, la traslación va cerrada. Es la forma de aprovechar
las ventajas de cada arquitectura.

Entender esta división es la base para diagnosticar problemas
hidráulicos correctamente y elegir maquinaria adecuada para tu
aplicación.
