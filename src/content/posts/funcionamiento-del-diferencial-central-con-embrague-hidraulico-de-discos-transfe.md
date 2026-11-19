---
title: "Diferencial central con embrague hidráulico de discos: transferencia A540H"
published: 2024-08-29
updatedAt: 2026-11-19
draft: false
featured: false
description: "Cómo funciona un diferencial central con embrague multidisco hidráulico en la transferencia A540H: reparto de par, control por ECU, síntomas de falla y mantenimiento."
category: mecanica-automotriz
formato: guia
nivel: avanzado
tags:
  - "diferencial-central"
  - "embrague-multidisco"
  - "caja-de-transferencia"
  - "traccion-4wd"
  - "limitador-de-deslizamiento"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/funcionamiento-del-diferencial-central-con-embrague-hidraulico-de-discos-transferencia-A540H
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Para qué se limita el diferencial central con un embrague?"
    a: "Un diferencial central abierto reparte el par entre ejes de forma fija, pero si un eje pierde adherencia, el par se va hacia él y el otro eje queda sin fuerza. El embrague multidisco une parcialmente las dos salidas del diferencial: cuando hay diferencia de giro, transmite par del eje que gira rápido al que gira lento. Así se conserva la compensación en curvas y se recupera tracción cuando un eje patina."
  - q: "¿Qué papel tiene la ECU en este sistema?"
    a: "Controla la presión hidráulica que aprieta el embrague. En los modelos recientes del sistema, la presión se modula según la posición de la palanca selectora, la apertura del acelerador, la velocidad del vehículo y la diferencia de giro entre ejes, sin que el conductor accione un mando. En marcha normal la fuerza limitadora es mínima; con la palanca en L o R sube, para salir de un atasco."
  - q: "¿Por qué el sistema se resiente si los neumáticos son de distinto tamaño?"
    a: "Porque el diferencial central y el embrague ven una diferencia de giro permanente entre ejes aunque el vehículo vaya recto. El embrague trabaja patinando de continuo, se calienta y se desgasta, y la ECU puede interpretar la diferencia como pérdida de tracción y aplicar presión de forma innecesaria. Mantén los cuatro neumáticos con el mismo tamaño y desgaste similar."
  - q: "¿Cuáles son los síntomas de un embrague del diferencial central gastado?"
    a: "Pérdida de tracción en el eje opuesto cuando uno patina (el diferencial se comporta como abierto), sacudidas o ruidos en maniobras a baja velocidad, testigo de la transmisión o del 4WD, y aceite oscuro con partículas de fricción. Si el embrague queda aplicado de más, el vehículo se resiste a girar con maniobras cerradas, como en un 4WD sin compensación."
  - q: "¿Qué aceite lleva la transferencia?"
    a: "Depende del modelo: algunas transferencias de este tipo comparten fluido con la transmisión automática y otras usan un aceite propio. El manual de servicio especifica la clase, la cantidad y el intervalo de cambio. No mezcles tipos ni uses un aceite genérico, porque la fricción del embrague depende de los aditivos del fluido."
related:
  - tipos-de-tranferencia-y-mecanismo-de-control-en-sistemas-4wd
  - transferencia-e150f2-con-acoplamiento-viscoso-traccion-y-estabilidad
  - como-funcionan-los-embragues-en-transejes-automaticos
  - que-es-traccion-4wd-y-como-funciona
---

En un 4WD permanente, el diferencial central permite que el eje delantero
y el trasero giren a distinta velocidad. Su debilidad es conocida: si un
eje pierde adherencia, el diferencial envía el par hacia él y el otro eje
se queda sin fuerza. Para evitarlo, el diferencial se **limita**: se
añade un mecanismo que lo bloquea total o parcialmente. La transferencia
A540H utiliza un embrague multidisco accionado hidráulicamente, y su
ventaja respecto a un bloqueo manual es que el grado de limitación se
ajusta de forma continua, sin intervención del conductor.

Esta guía explica cómo está construido, cómo reparte el par, cómo lo
controla la ECU y qué fallas produce. Los valores y procedimientos
concretos, como presiones y aceites, dependen del vehículo y del manual de
servicio.

## Principio: un diferencial limitado por embrague

Un diferencial reparte el par recibido entre dos salidas y permite que
giren a distinta velocidad. Si una de ellas gira más rápido, la otra gira
más lento, y el par que llega a cada una es el mismo. Es lo ideal en
curvas, pero no cuando una salida está sobre barro y la otra sobre firme.

Un embrague multidisco conectado entre las dos salidas hace que, cuando
se aprieta, **las dos tiendan a girar juntas**. Con el embrague
liberado, el diferencial es abierto. Con el embrague apretado
totalmente, es un bloqueo. Con presión intermedia, el embrague transfiere
par del eje que gira rápido al que gira lento, en una proporción que
depende de la presión.

## Estructura en la transferencia A540H

En esta transferencia el diferencial central **no está integrado** con
el diferencial delantero, como en diseños anteriores, sino separado. El
alojamiento de la corona del diferencial delantero (la "montura de la
corona") contiene tanto el diferencial delantero como el embrague. De este
modo:

- El diferencial central, de engranajes cónicos, recibe el par de la
  transmisión y lo divide entre el eje trasero y el diferencial
  delantero.
- El **embrague de discos múltiples** está junto al diferencial delantero.
  Incluye discos internos y externos (dos juegos que se intercalan) y
  pistones que los comprimen cuando reciben presión hidráulica.
- La presión llega al pistón desde un circuito controlado por la ECU de
  la transmisión.

![Transferencia con diferencial central](https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/legacy-mecanica/funcionamiento-del-diferencial-central-con-embrague-hidraulico-de-discos-transferencia-A540H2)

## Cómo reparte el par

**En línea recta.** El diferencial central divide el par del motor: una
parte va al diferencial trasero y otra al delantero, que a su vez lo
reparte entre las dos ruedas delanteras. La velocidad de ambos ejes es
casi idéntica, y el embrague tiene poco trabajo.

**En una curva.** El eje delantero recorre un arco mayor que el
trasero, y el diferencial central compensa esa diferencia. Aparece una
diferencia de giro entre la montura de la corona y la caja del
diferencial delantero. Si el embrague está poco aplicado, la
compensación es casi libre, y la maniobra a baja velocidad (como
estacionar) es suave.

**Con una rueda sin adherencia.** Si una rueda delantera patina sobre
barro, el diferencial central tiende a enviar el par hacia el eje que
pierde adherencia. Al aplicar presión al embrague, se limita la
diferencia de giro entre las dos salidas y el par que no se está
aprovechando se redirige hacia el eje con adherencia, y el vehículo
sale del atasco.

## Control: cuánto se aprieta el embrague

En los modelos recientes, el control es automático. La presión hidráulica
que acciona el embrague la regula la ECU de la transmisión (y el motor),
a partir de:

| Variable | Efecto sobre la fuerza limitadora |
|---|---|
| Posición de la palanca (D, L, R) | En D, la fuerza es mínima para maniobrar con suavidad. En L y R, aumenta para dar potencia y librar el vehículo |
| Apertura del acelerador | A más carga, mayor fuerza para evitar el patinaje |
| Velocidad del vehículo | Se limita la fuerza a velocidad alta para conservar la estabilidad |
| Diferencia de giro entre ejes | Si aumenta, indica pérdida de tracción y se eleva la presión |

La consecuencia práctica es que la **fuerza se adapta**: en carretera es
casi nula, y en barro o en una maniobra de salida es alta. Esa
modulación continua es lo que distingue este diseño de un bloqueo del
diferencial manual, que está "todo o nada".

## Comparación con otros sistemas

| Sistema | Cómo limita | Ventaja | Inconveniente |
|---|---|---|---|
| Diferencial abierto | No limita | Simple | Pierde tracción si un eje patina |
| Acoplamiento viscoso | Fluido que se espesa con la diferencia de giro | Sin electrónica | Respuesta lenta y no regulable |
| Embrague hidráulico de discos | Presión controlada por ECU | Control preciso y variable | Depende de la hidráulica y el fluido |
| Bloqueo manual | Mecanismo que une las salidas | Máxima tracción | Solo para terreno suelto |

Hay más información sobre los tipos de transferencia en
[tipos de transferencia y mecanismo de control en sistemas 4WD](/posts/tipos-de-tranferencia-y-mecanismo-de-control-en-sistemas-4wd/)
y sobre el acoplamiento viscoso en
[transferencia con acoplamiento viscoso](/posts/transferencia-e150f2-con-acoplamiento-viscoso-traccion-y-estabilidad/).

## Ejemplo práctico: atasco con una rueda en barro

Un vehículo con esta transferencia queda con una rueda delantera sobre
barro suelto y las demás sobre firme. Con la palanca en D y el
acelerador a fondo, la ECU eleva la presión del embrague al detectar la
diferencia de giro entre ejes, pero con presión moderada. Si el vehículo
no sale, el conductor pasa a L: la fuerza limitadora aumenta, el eje con
adherencia recibe más par y el vehículo avanza. Si en la misma situación
el eje delantero gira libre y el vehículo no responde en ningún modo, el
embrague no está transmitiendo: la causa está en la presión (solenoide,
circuito) o en los discos gastados, y no en el motor.

Los fundamentos del 4WD y de los diferenciales están en
[qué es la tracción 4WD](/posts/que-es-traccion-4wd-y-como-funciona/), y
el funcionamiento de los embragues multidisco accionados por presión
hidráulica, en
[embragues en transejes automáticos](/posts/como-funcionan-los-embragues-en-transejes-automaticos/).

## Fallas y diagnóstico

| Síntoma | Causa probable | Comprobación |
|---|---|---|
| Un eje patina y el otro no recibe par | Embrague gastado o sin presión, solenoide averiado | Códigos de la transmisión, presión según el manual |
| Maniobras cerradas con resistencia, "frenado" en curvas | Embrague aplicado de más, solenoide pegado | Datos en vivo del solenoide; descartar neumáticos de distinto diámetro |
| Ruido o sacudidas a baja velocidad | Fluido degradado, discos con material de fricción deteriorado | Estado del aceite |
| Aceite oscuro con partículas | Desgaste del embrague | Muestra de aceite y revisión del imán |
| Testigo de 4WD o de la transmisión | Sensor de velocidad, solenoide, conector | Lectura de códigos |
| Fuga de aceite | Retenes de la transferencia | Revisar retenes y respiradero |

Secuencia útil:

1. **Neumáticos primero.** Mide la circunferencia de los cuatro; una
   diferencia fuera de tolerancia produce síntomas idénticos a los de un
   embrague defectuoso.
2. **Lee los códigos** de la transmisión y del 4WD.
3. **Comprueba nivel y estado del aceite**, según las indicaciones del
   manual, con la temperatura de servicio correcta.
4. **Revisa los datos de los sensores de velocidad** de entrada y salida
   y las señales del selector.
5. **Inspecciona electricidad**: conectores del solenoide, masa y
   fusibles.
6. Si lo anterior es correcto, el desmontaje de la transferencia para
   revisar discos y pistones es lo siguiente. Mide el espesor de los discos
   y la planitud de los platos contra el manual.

## Mantenimiento

- Cambia el aceite en el intervalo y con la especificación del
  fabricante; la fricción del embrague depende de los aditivos del
  fluido. Con el uso severo (barro, remolque, agua) acorta el plazo.
- No mezcles fluidos ni uses uno "universal" sin comprobar que cumple la
  especificación exacta.
- Mantén los cuatro neumáticos iguales y rótalos según el manual.
- Revisa el respiradero de la transferencia tras cruzar agua.
- Evita remolcar con un eje levantado: las ruedas de un solo eje girando
  sin el otro someten el diferencial central a un régimen para el que no
  está diseñado. Consulta el procedimiento de remolque en el manual.

En resumen, el embrague hidráulico convierte un diferencial central
simple en uno que se adapta a la superficie. Su fiabilidad depende de
tres cosas que sí controla el propietario: el aceite correcto, los
neumáticos iguales y el mantenimiento a tiempo.
