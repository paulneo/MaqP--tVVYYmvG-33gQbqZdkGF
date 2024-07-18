---
title: "Componentes del Sistema de Frenos ABS del Toyota Celica"
description: "Descubre los componentes clave del sistema de frenos ABS del Toyota Celica, incluyendo la función de los sensores de velocidad y el sensor de desaceleración en modelos 4WD"
pubDate: "Jun 01 2024"
heroImage: "/mecanica_automotriz/componentes-frenos-ABS-toyota.webp"
tags: ["Toyota", "Frenos"]
category: mecanica_automotriz
---

## Disposición de los Componentes (2WD y 4WD)

### Sensores de Velocidad de las Ruedas

**Construcción:**

Los sensores de velocidad de las ruedas, tanto delanteras como traseras, están compuestos por un imán permanente, una bobina y un yugo. En el Celica, el sensor de velocidad de la rueda delantera está montado en el muñón de la dirección, mientras que el sensor de la rueda trasera está fijado al porta eje trasero. Los rotores dentados, que funcionan como rotores sensores, están adheridos a los ejes de impulsión delanteros y al cubo de la rueda trasera, girando en conjunto con ellos.

La siguiente ilustración muestra la ubicación de los sensores de velocidad y los rotores en un Celica 2WD.

**Referencia:**

En los modelos Celica 4WD (ST182, ST180 y AT180), los rotores sensores de velocidad traseros están montados sobre el eje de impulsión de manera similar a los delanteros.

**Sensor de Velocidad de Rueda Trasera**

### Operación

Los rotores tienen dientes en su circunferencia externa. Al girar, generan un voltaje AC proporcional a la velocidad de rotación del rotor. Este voltaje AC es utilizado por la ECU para determinar la velocidad de la rueda.

### Sensor de Desaceleración (solo modelos 4WD)

El sensor de desaceleración se ha implementado en los Celica 4WD de tracción permanente, así como en modelos Camry y camiones 4Runner. En un vehículo de tracción en dos ruedas, la ECU del ABS detecta las condiciones de deslizamiento de los neumáticos a través de las señales de los sensores de velocidad y ajusta el actuador en consecuencia. Sin embargo, debido a las características de frenado únicas de los vehículos 4WD, se utiliza un sensor de desaceleración para detectar el coeficiente de fricción de la carretera mediante la evaluación de la desaceleración del vehículo durante el frenado, mejorando así la eficiencia de frenado. Este sensor está ubicado en el compartimiento de equipaje en los modelos Celica y Camry, y en el compartimiento del motor en los camiones 4Runner.

**1. Construcción:**

El sensor de desaceleración está compuesto por dos pares de LEDs (diodos emisores de luz) y fototransistores, un plato ranurado y un circuito de conversión de señales. Interpreta la tasa de desaceleración del vehículo y envía una señal a la ECU del ABS. La ECU evalúa las condiciones de la superficie de la carretera con estas señales y toma las medidas de control adecuadas.

**2. Operación:**

Cuando la tasa de desaceleración del vehículo cambia, el plato ranurado se mueve en la dirección longitudinal del vehículo de acuerdo con esta tasa. Las ranuras en el plato bloquean la luz de los LEDs hacia los fototransistores, cambiando su estado entre ON y OFF. Se utilizan dos pares de LEDs y fototransistores. La combinación de estas interrupciones ON-OFF divide la tasa de desaceleración en cuatro niveles, que se envían como señales a la ECU del ABS.
