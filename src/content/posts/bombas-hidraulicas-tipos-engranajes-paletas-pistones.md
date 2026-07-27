---
title: "Bombas hidráulicas: tipos de engranajes, paletas y pistones explicados"
published: 2026-08-05
draft: false
featured: false
description: "Las 3 familias de bombas hidráulicas (engranajes, paletas, pistones) tienen ventajas específicas por presión, caudal y aplicación. Explicamos cuál usa cada máquina y por qué."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "bomba-hidraulica"
  - "bomba-engranajes"
  - "bomba-pistones"
  - "bomba-paletas"
  - "sistema-hidraulico"
image: ""
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Qué es el caudal de una bomba y en qué unidades se mide?"
    a: "El caudal (flow) es la cantidad de aceite que la bomba entrega por unidad de tiempo. Se mide típicamente en litros por minuto (L/min) o galones por minuto (GPM). El caudal se calcula como: Cilindrada (cm³/rev) × RPM / 1000. Por ejemplo, una bomba de 40 cm³/rev girando a 1.800 RPM entrega 72 L/min. El caudal determina la VELOCIDAD del actuador — más caudal = movimiento más rápido, con la misma fuerza."
  - q: "¿Cuál es la diferencia entre bomba de caudal fijo y variable?"
    a: "Una bomba de CAUDAL FIJO entrega siempre el mismo volumen por revolución — cambia solo si cambian las RPM del motor. Simples y baratas. Una bomba de CAUDAL VARIABLE (compensada) puede ajustar internamente cuánto entrega, adaptándose a la demanda del sistema. Esto ahorra combustible cuando no se está usando toda la potencia. Las bombas de caudal variable son casi siempre de pistones y son la norma en maquinaria moderna eficiente."
  - q: "¿Por qué las bombas de pistones son más caras que las de engranajes?"
    a: "Por complejidad mecánica y precisión. Una bomba de engranajes tiene ~10 piezas móviles simples. Una bomba de pistones puede tener 40+ piezas, incluyendo pistones móviles, zapatas de deslizamiento, plato compensador, sellos de alta presión, y sistema de control interno. Todas requieren tolerancias muy finas (micras) para funcionar sin fugas internas. Por eso una bomba de pistones cuesta 5-10x más que una de engranajes equivalente en cilindrada."
  - q: "¿Cuánto dura una bomba hidráulica?"
    a: "Con buen mantenimiento: bomba de engranajes 8.000-15.000 horas; bomba de paletas 10.000-18.000 horas; bomba de pistones 12.000-25.000 horas. Con mal mantenimiento (aceite contaminado, sobrecalentamiento, cavitación) todos estos números caen a la mitad o menos. El enemigo #1 es la contaminación del aceite — partículas microscópicas erosionan las superficies internas hasta que las fugas internas hacen que la bomba pierda eficiencia."
  - q: "¿Cómo sé si mi bomba hidráulica está fallando?"
    a: "Cinco síntomas clásicos. (1) Ruido nuevo: golpeteo o silbido raro. (2) Pérdida de fuerza o velocidad: el sistema tarda más en levantar o empujar. (3) Sobrecalentamiento del aceite: las fugas internas convierten energía en calor. (4) Vibración excesiva. (5) Consumo de combustible mayor sin explicación. Si aparecen varios de estos, hay que hacer un test de presión de la bomba. Cambiar una bomba a tiempo cuesta USD 1.500-8.000; ignorar los síntomas y reventarla cuesta el doble o triple por daños colaterales."
sources:
  - title: "Manual de Motores y Bombas Hidráulicas — Funcionamiento y Clasificación"
    url: "https://www.maquinariaspesadas.org/blog/2828-manual-motores-bombas-hidraulicas-funcionamiento-clasificacion"
  - title: "Bosch Rexroth — Hydraulic Pump Handbook"
    url: "https://www.boschrexroth.com/"
  - title: "Parker Hannifin — Pump Selection Guide"
    url: "https://www.parker.com/"
related:
  - que-es-un-sistema-hidraulico-fundamentos
  - fluidos-hidraulicos-propiedades-tipos-aceites
  - valvulas-hidraulicas-tipos-funcionamiento
---

La **bomba hidráulica** es el corazón de todo sistema — donde la energía
mecánica del motor se convierte en energía hidráulica útil. Si el
sistema es un cuerpo, la bomba es el corazón que bombea la sangre
(aceite) por todo el organismo.

Hay tres grandes familias de bombas hidráulicas que dominan la
maquinaria pesada: **engranajes**, **paletas** y **pistones**. Cada una
tiene fortalezas y debilidades específicas. Elegir mal puede costar
miles de dólares y años de eficiencia perdida. En este artículo abrimos
las tres, cuándo se usa cada una, y qué diagnóstico hacer cuando fallan.

## Qué hace una bomba hidráulica

Una bomba hidráulica cumple una función simple pero crítica: **convertir
energía mecánica en energía hidráulica**.

Recibe torque desde el motor (mecánica) y genera **flujo de aceite bajo
presión** (hidráulica). Lo hace atrapando volúmenes de aceite del
tanque y transportándolos al circuito de salida, donde se acumula la
presión.

Es importante entender: **la bomba no genera presión por sí sola** —
genera FLUJO. La presión aparece cuando ese flujo se enfrenta a una
resistencia (el actuador con carga). Si el aceite pudiera salir libre,
no habría presión. La presión es "resistencia al flujo".

Dos parámetros definen a cada bomba:

- **Cilindrada**: cuánto aceite atrapa por cada revolución (cm³/rev).
- **Presión máxima**: hasta qué presión puede trabajar antes de dañarse.

El **caudal** que entrega es cilindrada × RPM. La **potencia** que
maneja es caudal × presión.

## Familia 1: bombas de engranajes

Las más simples, más antiguas y más económicas. Dos engranajes que
giran engranados en una cámara sellada.

### Cómo funciona

- Dos engranajes internos giran engranados dentro de una carcasa.
- Al girar, los dientes de los engranajes atrapan aceite en los
  espacios entre dientes y la pared de la carcasa.
- El aceite se transporta desde la entrada (baja presión) hasta la
  salida (alta presión).
- Los dientes engranados en el centro sellan el retorno, forzando el
  aceite a salir.

### Características

- **Cilindrada**: 5-200 cm³/rev típico.
- **Presión máxima**: 150-250 bar (algunas premium hasta 300).
- **RPM**: 1.000-3.000 típico.
- **Rendimiento volumétrico**: 80-92%.
- **Caudal fijo** (no ajustable).

### Ventajas

- **Simplicidad extrema**: pocas piezas, robustez.
- **Costo bajo**: USD 200-1.500 según tamaño.
- **Tolerantes a contaminación** relativa.
- **Fácil de reparar** (repuestos comunes).
- **Compactas**.

### Desventajas

- **Presión limitada**: no llegan a las presiones máximas modernas.
- **Ruidosas**: el engranaje pulsante genera vibración y ruido.
- **Eficiencia media**: no son las más eficientes.
- **Caudal fijo**: no se adaptan a la demanda variable.
- **Vida útil menor** que otras opciones.

### Cuándo usarlas

- Sistemas hidráulicos secundarios (dirección, frenos).
- Maquinaria simple o económica.
- Aplicaciones industriales de baja presión.
- Bombas de alimentación (auxiliares).

## Familia 2: bombas de paletas

Un rotor con paletas radiales gira dentro de una carcasa ovalada o
excéntrica. Las paletas se deslizan hacia afuera por fuerza centrífuga
(o resortes) y sellan cámaras de aceite.

### Cómo funciona

- El rotor tiene ranuras radiales con paletas que se deslizan libres.
- Al girar, las paletas atrapan aceite en la zona de entrada.
- La forma ovalada de la carcasa hace que el volumen entre paletas
  disminuya en el otro lado — presionando el aceite hacia la salida.
- Las paletas se ajustan continuamente al perfil de la carcasa.

### Características

- **Cilindrada**: 20-300 cm³/rev típico.
- **Presión máxima**: 150-250 bar.
- **RPM**: 1.000-3.500.
- **Rendimiento volumétrico**: 85-95%.
- **Caudal fijo o variable** (según diseño).

### Ventajas

- **Menos ruido** que las de engranajes.
- **Buen rendimiento** volumétrico.
- **Caudal variable** disponible en modelos premium.
- **Vida útil buena** (paletas reemplazables).

### Desventajas

- **Sensibles a contaminación**: partículas atascan paletas.
- **Presión media** — no compite con pistones para alta presión.
- **Costo intermedio**: USD 800-3.500.
- **Menos disponibles** que engranajes o pistones en repuestos.

### Cuándo usarlas

- Sistemas industriales de media presión.
- Prensas hidráulicas medianas.
- Maquinaria antigua o algunas aplicaciones específicas.

En maquinaria pesada moderna se usan cada vez menos — han sido
desplazadas por bombas de pistones que son más eficientes a alta
presión.

## Familia 3: bombas de pistones

Las más sofisticadas, más eficientes y más caras. Pistones se mueven
axial o radialmente atrapando aceite y comprimiéndolo hasta muy alta
presión.

### Tres variantes principales

**Pistones axiales de plato inclinado (swashplate)**:
- Pistones se mueven paralelos al eje del rotor.
- Un plato inclinado hace que suban y bajen alternativamente.
- El ángulo del plato define la cilindrada — variable en modelos
  compensados.

**Pistones axiales de eje inclinado (bent-axis)**:
- El eje de los pistones está en ángulo respecto del eje motor.
- Los pistones se desplazan al girar.
- Muy eficiente, alta presión.

**Pistones radiales**:
- Pistones dispuestos radialmente en torno al eje.
- Trabajan bajo carga excéntrica.
- Usados en aplicaciones muy específicas de baja RPM y alta presión.

### Características (pistones axiales típicos)

- **Cilindrada**: 20-1.500 cm³/rev típico.
- **Presión máxima**: 350-500 bar (algunas hasta 700).
- **RPM**: 1.500-3.500.
- **Rendimiento volumétrico**: 92-97%.
- **Caudal variable** casi siempre (compensada).

### Ventajas

- **Alta presión**: son las únicas que llegan a 350+ bar cómodamente.
- **Alta eficiencia**: 92-97% volumétrico, ~90% global.
- **Caudal variable**: se adapta a la demanda, ahorra combustible.
- **Larga vida útil**: 15.000-25.000 horas con buen mantenimiento.
- **Silenciosas** relativamente.

### Desventajas

- **Costo alto**: USD 3.000-15.000 según tamaño.
- **Muy sensibles a contaminación**: filtración a 10 micras o menos
  obligatoria.
- **Reparación compleja**: requiere especialistas.
- **Sensibles a cavitación**: aire en aspiración las daña rápido.

### Cuándo usarlas

- **Maquinaria pesada moderna**: excavadoras, cargadores, bulldozers,
  grúas.
- **Sistemas de alta presión**: 200+ bar.
- **Sistemas de caudal variable**: donde importe eficiencia energética.
- **Cualquier aplicación premium**.

## Comparativa lado a lado

| Aspecto                | Engranajes         | Paletas           | Pistones           |
| ---------------------- | ------------------ | ----------------- | ------------------ |
| **Presión máxima**     | 150-250 bar        | 150-250 bar       | 350-700 bar        |
| **Rendimiento**        | 80-92%             | 85-95%            | 92-97%             |
| **Costo**              | USD 200-1.500      | USD 800-3.500     | USD 3.000-15.000   |
| **Vida útil**          | 8-15 mil h         | 10-18 mil h       | 15-25 mil h        |
| **Ruido**              | Alto               | Medio             | Bajo               |
| **Caudal variable**    | No                 | Algunas           | Casi todas         |
| **Tolerancia contam.** | Alta               | Media             | Baja               |
| **Aplicación típica**  | Dirección, frenos, sistemas simples | Prensas, maquinaria antigua | Maquinaria pesada moderna |

## Cómo elegir la bomba correcta

Tres variables definen la elección:

### 1. Presión requerida

- Menos de 200 bar: engranajes bastan.
- 200-350 bar: paletas o pistones.
- Más de 350 bar: pistones obligatorio.

### 2. Caudal requerido

- Bajo (menos de 30 L/min): cualquier tipo funciona.
- Medio (30-150 L/min): pistones o paletas grandes.
- Alto (más de 150 L/min): pistones o combinación de bombas.

### 3. Necesidad de caudal variable

- Trabajo constante: caudal fijo (más barato).
- Trabajo con demanda variable: caudal variable (ahorra combustible).

Una **excavadora Cat 320D** típica usa **dos bombas de pistones
axiales de caudal variable** en paralelo, cada una entregando ~250 L/min
a 320 bar. Cuestan alrededor de USD 6.000-8.000 cada una — cambiar el
juego completo por desgaste es una inversión de USD 12.000-16.000.

## Fallas comunes y diagnóstico

### Bomba de engranajes

**Fallas más comunes**:
- Desgaste de dientes por contaminación (partículas erosionan).
- Fugas por sellos vencidos.
- Rotura de eje por sobrecarga.

**Diagnóstico**: medir presión de salida bajo carga. Si cae más de 15%
comparado con especificación, hay fugas internas.

### Bomba de paletas

**Fallas más comunes**:
- Paletas atascadas en sus ranuras (por contaminación o aceite viejo).
- Desgaste del anillo de deslizamiento.
- Resortes de paletas cansados.

**Diagnóstico**: ruido irregular al operar. Test de flujo bajo carga.

### Bomba de pistones

**Fallas más comunes**:
- Zapatas de deslizamiento gastadas (por contaminación).
- Válvulas de control internas dañadas.
- Rodamientos principales gastados.
- Cavitación (aire en aspiración) — daño progresivo.

**Diagnóstico**: análisis de aceite (partículas metálicas específicas
indican qué componente se está desgastando), test de flujo y presión
bajo carga en distintos puntos del ciclo.

## Mantenimiento clave

Independiente del tipo de bomba, tres prácticas extienden su vida útil:

1. **Aceite limpio siempre**: la contaminación es el enemigo #1. Filtros
   de calidad, cambio en tiempo, sellos íntegros.
2. **Temperatura controlada**: aceite entre 40-80°C. Fuera de rango se
   degrada rápido y baja rendimiento.
3. **Sin cavitación en aspiración**: la manguera de aspiración debe
   estar íntegra, con vacío controlado. Cualquier fisura permite entrada
   de aire = daño acelerado.

## En resumen

Las bombas hidráulicas son el corazón de todo sistema y su elección
correcta define el rendimiento, eficiencia y vida útil de la máquina
entera. Las tres familias principales — **engranajes**, **paletas** y
**pistones** — cubren todo el espectro de aplicaciones.

**Engranajes** son simples, robustas y baratas — perfectas para
sistemas secundarios de baja presión. **Paletas** son un punto medio
con buen rendimiento pero cada vez menos usadas. **Pistones** son la
referencia moderna: alta presión, alta eficiencia, caudal variable —
son las que usa la maquinaria pesada actual.

Elegir bien depende de presión requerida, caudal necesario, y si vale
la pena pagar por caudal variable para ahorrar combustible. Mantener
bien depende de **aceite limpio**, **temperatura correcta** y **evitar
cavitación**. Con esos tres cuidados, cualquier bomba te va a durar
años.
