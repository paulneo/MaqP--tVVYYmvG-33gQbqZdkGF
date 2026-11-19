---
title: "Válvula de ralentí ISCV: solenoide rotatorio, paso a paso y fallas"
published: 2024-09-03
updatedAt: 2026-11-19
draft: false
featured: false
description: "Cómo funciona la válvula de control de ralentí ISCV: solenoide rotatorio, motor paso a paso, tipos ACV y VSV, controles de la ECU, síntomas de falla, pruebas y limpieza."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "iscv"
  - "control-de-ralenti"
  - "solenoide-rotatorio"
  - "motor-paso-a-paso"
  - "inyeccion-electronica"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/funcionamiento-control-ralenti-solenoide-rotatorio-y-motor-paso-a-paso-motores
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Por qué el motor se apaga al detener el vehículo o al soltar el acelerador?"
    a: "Es un síntoma clásico de ralentí mal controlado. La causa más común es la válvula de ralentí o el conducto de derivación de la mariposa sucios de carbonilla, que limitan el aire que la ECU intenta dar. Antes de cambiar la válvula, conviene revisar fugas de vacío, el sensor de posición de la mariposa, la temperatura de refrigerante y el estado de la bobina o del motor paso a paso. Limpiar el cuerpo de mariposa y la válvula suele corregir el problema."
  - q: "¿Se puede limpiar una ISCV con limpiador de carburador?"
    a: "Se puede limpiar la carbonilla del conducto y de la parte metálica con un limpiador específico para cuerpos de mariposa. Pero no se debe sumergir toda la válvula en solvente ni empujar el eje a mano con fuerza. El solenoide rotatorio lleva un circuito integrado y un imán que pueden dañarse, y el paso a paso tiene engranajes plásticos y una rosca fina. Se limpia con un trapo o un cepillo suave, se deja evaporar y se vuelve a montar con la junta."
  - q: "¿Hace falta un procedimiento de reaprendizaje después de limpiar la válvula?"
    a: "En muchos modelos, sí. Si se desconecta la batería o se limpia el cuerpo de mariposa, la ECU pierde la posición de referencia y el ralentí puede quedar alto o inestable hasta que reaprende. El procedimiento exacto depende del fabricante: algunos piden dejar el motor en ralentí unos minutos con el refrigerante a temperatura normal y sin cargas; otros requieren el escáner. Se consulta el manual del vehículo."
  - q: "¿Cuál es la diferencia entre la válvula de solenoide rotatorio y el motor paso a paso?"
    a: "El solenoide rotatorio mueve una paleta o válvula con un campo magnético y la posición depende del ciclo de trabajo que manda la ECU; si se pierde la señal, vuelve a una posición abierta por el imán. El paso a paso gira en pasos discretos y la ECU conoce su posición contando pasos, lo que permite ajustes más finos, pero queda en la última posición si falla. El paso a paso es más preciso; el rotatorio es más simple."
  - q: "¿Los autos con acelerador electrónico tienen válvula de ralentí?"
    a: "En la mayoría no. Con mariposa electrónica (drive-by-wire), la ECU mueve la propia mariposa para regular el ralentí y no existe una válvula de derivación separada. Por eso la limpieza del cuerpo de mariposa y el reaprendizaje cobran más importancia en esos vehículos."
---

En un motor de gasolina con mariposa mecánica, el ralentí depende de una cantidad de aire muy pequeña que pasa **por fuera** de la mariposa cerrada. Quien regula ese aire es la **válvula de control del régimen de ralentí (ISCV, también llamada IAC)**, que la ECU mueve para mantener un régimen estable con el motor frío, en caliente, con aire acondicionado, con la dirección asistida o con la transmisión puesta. Esta guía explica los tipos de ISCV, cómo trabaja cada una, qué síntomas da cuando falla y cómo se prueba y se limpia.

> **Nota.** Los valores de resistencia, ciclo de trabajo y régimen son específicos de cada motor. Los que aparecen aquí son orientativos; el manual de servicio del vehículo es la referencia.

## Qué hace la ISCV y dónde está

La válvula se instala en el cuerpo de la mariposa o junto a él y controla un circuito de **derivación** (bypass). Con más apertura pasa más aire, el sistema de inyección añade combustible en proporción y el régimen sube; con menos apertura baja. La ECU decide con datos como la temperatura del refrigerante (THW), el régimen (NE), la señal de arranque (STA), la posición de la mariposa y las cargas eléctricas o mecánicas conectadas.

## Tipos de ISCV

| Tipo | Cómo se mueve | Control de la ECU | Característica |
| --- | --- | --- | --- |
| Solenoide rotatorio | Bobina y imán permanente que giran la válvula | Señal de ciclo de trabajo; el IC decide dirección y magnitud de corriente | Compacto, posición abierta por defecto si se corta la señal |
| Motor paso a paso | Rotor magnético que avanza en pasos | Pulsos a las bobinas; la ECU cuenta pasos | Muy preciso; mantiene posición |
| ACV (solenoide con control de ciclo de trabajo) | Bobina que abre la válvula proporcionalmente | Ciclo de trabajo mayor, apertura mayor | Control continuo y sencillo |
| VSV (control ON-OFF) | Válvula solenoide de dos posiciones | Señal ON/OFF | Control básico: cada conexión sube el régimen unas 100 rpm |

## ISCV de solenoide rotatorio

### Estructura

Se compone de una **bobina**, un **circuito integrado (IC)**, un **imán permanente** y la **válvula**. La ECU manda al IC una señal de ciclo de trabajo; el IC controla la dirección y la magnitud de la corriente de la bobina, y con ello gira la válvula.

- Con ciclo de trabajo alto, el IC la mueve en el sentido de apertura y pasa más aire.
- Con ciclo de trabajo bajo, la mueve hacia el cierre.

### Seguridad ante fallas

Si el circuito se abre y se pierde la corriente, la fuerza del imán permanente lleva la válvula a una posición abierta determinada y el motor se mantiene en un ralentí alto, del orden de **1 000 a 1 200 rpm**. El motor sigue funcionando, aunque con un régimen elevado, hasta que se repara la falla. Un ralentí fijo y alto con el motor caliente es una pista clara.

<img src="https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/legacy-mecanica/funcionamiento-y-tipos-de-ISCV-con-solenoi-de-rotatorio-y-impacto-control-ralenti" alt="Esquema de una ISCV de solenoide rotatorio con bobina, imán permanente y válvula" width="520"/>

### Versión antigua de dos bobinas

Los modelos anteriores usaban **dos bobinas**: la ECU alimentaba una u otra según quisiera abrir o cerrar. Al aplicar corriente a la **bobina A (RSO)** durante más tiempo, la válvula se abría; al alimentar la **bobina B**, se cerraba. Además tenían una **cinta bimetálica** sensible a la temperatura del refrigerante, que abría la válvula de forma mecánica durante el calentamiento para que el motor funcionara bien en frío. También incluían protecciones para que, ante una falla eléctrica, la válvula no quedara totalmente abierta ni cerrada y el motor no se apagara.

<img src="https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/legacy-mecanica/funcionamiento-y-tipos-de-ISCV-con-solenoi-de-rotatorio-y-impacto-control-ralenti2" alt="ISCV de solenoide rotatorio antigua con dos bobinas y cinta bimetálica" width="520"/>

## Cómo controla la ECU el ralentí (solenoide rotatorio)

<img src="https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/legacy-mecanica/funcionamiento-control-ralenti-solenoide-rotatorio-y-motor-paso-a-paso-motores2" alt="Control de la ISCV durante el arranque del motor" width="420"/>

1. **Arranque.** Al recibir la señal STA, la ECU abre la ISCV para facilitar el encendido. La apertura se ajusta con el régimen (NE) y la temperatura del refrigerante (THW).
2. **Calentamiento (ralentí rápido).** Con el motor frío el aceite es viscoso y el combustible se atomiza peor, de modo que la ECU abre la válvula y sube el régimen. A medida que sube la temperatura, la cierra gradualmente.
3. **Retroalimentación.** La ECU compara el ralentí deseado con el real. Si el real es menor, abre la válvula; si es mayor, la cierra. Es un lazo cerrado que corrige continuamente.
4. **Estimación de cambio de carga.** Cuando se prevé una carga brusca, por ejemplo al pasar de D a N o al encender el aire acondicionado o el desempañador, la ECU se adelanta y ajusta la válvula antes de que el régimen fluctúe.
5. **Otros controles.** Al soltar el acelerador, la ECU abre la válvula para que el motor no caiga bruscamente. En vehículos con dirección asistida electrohidráulica (EHPS), compensa la carga eléctrica con más apertura.

<img src="https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/legacy-mecanica/funcionamiento-control-ralenti-solenoide-rotatorio-y-motor-paso-a-paso-motores3" alt="Control de ralentí rápido durante el calentamiento" width="420"/>

## ISCV de motor paso a paso

El motor paso a paso lleva un **rotor magnético** que avanza en pasos fijos cuando la ECU energiza sus bobinas en secuencia. Como la ECU cuenta los pasos, sabe la posición de la válvula y puede darle ajustes muy finos y graduales.

- **Antes de arrancar:** la válvula se coloca totalmente abierta para facilitar el encendido. La ECU mantiene el **relé principal** alimentado unos segundos después de apagar el motor, para llevar la válvula a esa posición a la espera del siguiente arranque; luego deja de alimentarlo.
- **Después del arranque:** la válvula parte de la apertura total y se cierra poco a poco según el refrigerante y el régimen, como en el caso del rotatorio.
- **Retroalimentación:** cuando el refrigerante llega a unos 80 °C, la ECU empieza a regular el ralentí en lazo cerrado.

<img src="https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/legacy-mecanica/funcionamiento-control-ralenti-solenoide-rotatorio-y-motor-paso-a-paso-motores4" alt="Control de una ISCV de motor paso a paso después del arranque" width="420"/>

Una característica práctica: si se desconecta la batería o falla la alimentación, el paso a paso pierde la referencia y la ECU debe reaprender la posición.

## ISCV tipo ACV y tipo VSV

El tipo **ACV** funciona con una bobina solenoide cuya apertura es proporcional al ciclo de trabajo: más ciclo, más apertura y más aire. El tipo **VSV con control ON-OFF** es más simple: cada vez que circula corriente por la bobina, la válvula se abre y el ralentí sube en incrementos de unas **100 rpm**. Se usa donde no se necesita una regulación fina.

<img src="https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/legacy-mecanica/funcionamiento-y-tipos-de-ISCV-con-solenoi-de-rotatorio-y-impacto-control-ralenti5" alt="ISCV tipo ACV con control de ciclo de trabajo" width="420"/>

## Comparación: rotatorio frente a paso a paso

- **Precisión:** el paso a paso permite ajustes más finos, gracias a su movimiento en pasos.
- **Simplicidad:** el rotatorio tiene un diseño más sencillo y suficiente donde no se exige un control muy fino.
- **Comportamiento ante falla:** el rotatorio queda en una posición abierta por el imán; el paso a paso queda donde estaba.
- **Dinámica:** el paso a paso es más efectivo donde se necesita un ajuste constante del régimen.

## Síntomas de una ISCV o de su conducto sucio o defectuoso

- Ralentí inestable, con oscilaciones (el motor "caza").
- Ralentí alto fijo con el motor caliente.
- El motor se apaga al detenerse, al soltar el acelerador o al activar el aire acondicionado.
- Arranque en frío difícil o régimen bajo durante el calentamiento.
- Código de falla de circuito de control de ralentí, o de régimen fuera de rango.

## Cómo diagnosticar paso a paso

1. **Descartar lo evidente.** Fugas de vacío, mangueras de admisión rotas, sensor de posición de mariposa, sensor de temperatura de refrigerante y filtro de aire tapado. Una fuga de aire falso puede imitar una ISCV mala.
2. **Leer códigos y datos en vivo.** Con el escáner, el régimen deseado frente al real, la posición o el ciclo de trabajo de la válvula y la temperatura. Una válvula siempre al límite indica que el problema está en otra parte (aire falso, mariposa sucia).
3. **Comprobar el accionamiento.** Con el escáner se puede mandar la válvula a abrir y cerrar y observar la respuesta del régimen. En el paso a paso, al dar contacto se debe oír o sentir un pequeño movimiento al llevarse a su posición.
4. **Medir la bobina.** Con el multímetro se mide la resistencia de la bobina o de las bobinas con la válvula desconectada y se compara con el valor del manual. En un solenoide rotatorio con IC no siempre se mide como una bobina simple, así que se sigue el procedimiento del fabricante.
5. **Revisar alimentación y señal.** Tensión de alimentación, masa y la señal de ciclo de trabajo desde la ECU, mejor con osciloscopio. Más detalles en [pruebas de sensores de inyección electrónica con multímetro](/posts/pruebas-sensores-inyeccion-electronica-gasolina-multimetro/).
6. **Inspección visual.** Retirar la válvula y comprobar que el eje o la paleta se muevan libres, sin carbonilla pegada ni juego excesivo.

Para entender las señales que usa la ECU (temperatura, régimen, posición de mariposa), véase [sensores y señales del sistema de control electrónico del motor](/posts/sensores-senales-sistema-de-control-electronico-motor/).

## Limpieza

1. Desconectar la batería o seguir el procedimiento indicado y retirar la válvula con cuidado de no perder la junta.
2. Limpiar el cuerpo de mariposa y el conducto de derivación con un limpiador específico para admisión y un trapo sin pelusa.
3. Limpiar la parte metálica de la válvula con cepillo suave. **No sumergir la válvula completa**, que lleva electrónica, imán y engranajes.
4. Dejar secar, montar con la junta en buen estado y apretar de forma pareja.
5. Reconectar, hacer el reaprendizaje de ralentí que indique el fabricante y verificar el régimen con el motor caliente.

Si después de la limpieza el ralentí no se estabiliza, se cambia la válvula. Es preferible una pieza de calidad equivalente, y siempre con la junta nueva.
