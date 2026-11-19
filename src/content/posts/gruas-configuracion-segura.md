---
title: "Condiciones del suelo y estabilizadores de grúa: cálculo de apoyo"
published: 2024-07-05
updatedAt: 2026-11-19
draft: false
featured: false
description: "Cómo evaluar el suelo y dimensionar las placas de apoyo de los estabilizadores de una grúa: presión admisible, reacción, ejemplo calculado y lista de verificación."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "gruas"
  - "estabilizadores"
  - "capacidad-de-soporte-del-suelo"
  - "izaje-seguro"
  - "placas-de-apoyo"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/contratistas
author: redaccion-maquinaria
reviewedBy: redaccion-maquinaria
aiAssisted: true
faq:
  - q: "¿Quién es responsable de que el suelo soporte la grúa?"
    a: "Depende de la normativa y del contrato. En la norma de Estados Unidos (OSHA 29 CFR 1926.1402) la responsabilidad de que el terreno sea firme, drenado y nivelado recae en la entidad que controla el sitio; el operador y el supervisor de izaje deben verificar visualmente que lo que ven coincida con lo que se les informó. En tu país aplica la norma local y el plan de izaje, que debe dejar por escrito quién responde."
  - q: "¿Qué diferencia hay entre la capacidad de soporte última y la admisible?"
    a: "La capacidad última es la presión máxima que el suelo resiste antes de fallar; la determina un ingeniero geotécnico. La presión admisible es el valor que se usa en el cálculo: la capacidad última dividida por un factor de seguridad. La grúa nunca debe transmitir al suelo una presión mayor que la admisible."
  - q: "¿Puedo apoyar el estabilizador directamente sobre el suelo si el suelo parece firme?"
    a: "El aspecto no es una medida. El pie del estabilizador tiene un área pequeña, por lo que la presión resultante es alta. Salvo que el cálculo y el fabricante digan lo contrario, se usan placas o durmientes que distribuyan la carga, y se verifica con la presión admisible del terreno."
  - q: "¿Basta con una placa más grande para resolver cualquier suelo?"
    a: "No. Una placa grande distribuye la carga si es lo bastante rígida; si se flexiona, la presión se concentra bajo el centro. Además, un suelo blando o con una capa débil debajo puede fallar a más profundidad aunque la superficie aguante. En suelos dudosos se necesita estudio y, a veces, mejoramiento del terreno."
  - q: "¿Qué hago si el suelo cambia durante el trabajo?"
    a: "Detén el izaje. Lluvia, filtraciones de una tubería enterrada, vibración o una excavación cercana pueden ablandar el terreno. Baja la carga a un lugar seguro, vuelve a evaluar el apoyo, nivela de nuevo y recién entonces continúa. Un asentamiento, aunque sea pequeño, es una señal de alerta."
related:
  - tipos-de-suelo-en-ingenieria-civil
  - gruas-liebherr
  - analisis-seguridad-trabajo
  - mantenimiento-basico-de-maquinaria-pesada
---

Una grúa puede estar en perfecto estado, con operador certificado y
tabla de cargas correcta, y aun así volcarse porque el suelo cedió bajo
un estabilizador. La capacidad que indica la tabla de cargas **supone**
que el equipo está nivelado y firmemente apoyado. Si el terreno no
cumple, esa tabla no vale.

Esta guía explica cómo evaluar el suelo, cómo calcular el área de apoyo
que necesita cada estabilizador y qué verificar antes y durante el
izaje. Los valores son ilustrativos: manda siempre el manual de la grúa,
el plan de izaje y el criterio del ingeniero a cargo.

## Qué fuerza llega al suelo

Cada estabilizador (o cada oruga) transmite una **reacción** al suelo.
No es el peso de la grúa dividido entre cuatro: al girar la pluma y
levantar carga, la reacción de un estabilizador puede ser una gran parte
del peso total (grúa más carga), y otros apoyos casi se descargan. Los
fabricantes entregan las reacciones máximas por estabilizador en el
manual o en el software de planificación de cada modelo. Usa ese dato,
no una estimación.

Dos conceptos clave:

- **Presión de apoyo del suelo** = fuerza / área de contacto.
- **Presión admisible del suelo**: la que el responsable del terreno
  (en la práctica, el ingeniero geotécnico) autoriza como máximo.

## Cómo conocer la presión admisible

Las fuentes, de más a menos confiable:

1. **Informe geotécnico** de un ingeniero, con clasificación del suelo,
   capacidad última y presión admisible recomendada.
2. **Información documentada previa** del mismo sitio o de proyectos
   cercanos, con criterio profesional.
3. **Pruebas y observaciones en campo**, siempre como verificación y no
   como sustituto.

Sin ninguno de estos datos, no se debe asumir un valor "razonable". Una
referencia general sobre los tipos de terreno está en
[tipos de suelo en ingeniería civil](/posts/tipos-de-suelo-en-ingenieria-civil/),
pero la presión admisible de un sitio concreto la define el estudio.

## Inspección visual del lugar

El operador y el supervisor del izaje complementan el estudio con una
inspección visual del sitio antes de armar la grúa. Debe verificar que
lo observado coincida con lo informado:

- Agua estancada, zonas blandas o húmedas, huellas profundas de
  vehículos.
- Relleno reciente o suelo removido (se asienta más).
- Excavaciones, zanjas, taludes y bordes cercanos.
- Estructuras enterradas: tapas de alcantarilla, cámaras, tuberías,
  sótanos, túneles, líneas de servicios.
- Pendiente y nivel del terreno.
- Líneas eléctricas aéreas y obstáculos.

Cualquier diferencia entre lo que se ve y lo que se informó se discute y
se resuelve **antes** de empezar. No se arma "a ver qué pasa".

## Dimensionar el área de apoyo

Para cada estabilizador se necesita:

- **Reacción máxima R** del estabilizador (del manual o software).
- **Presión admisible q** del suelo (del estudio).

Área mínima de la placa: **A = R / q**.

### Ejemplo 1

- Reacción del estabilizador: 100.000 lbf, aproximadamente 445 kN.
- Presión admisible: 3.500 lbf/ft², aproximadamente 168 kPa.
- Área mínima: 100.000 / 3.500 ≈ 28,6 ft², es decir, 445 / 168 ≈
  **2,65 m²**.

Si la placa es cuadrada, el lado mínimo es √2,65 ≈ **1,63 m**. La placa
debe además ser lo bastante rígida para repartir la carga sobre toda esa
área sin flexionarse; el material (madera dura, acero, polímeros o
placas de hormigón) y su espesor los define el fabricante de la placa
según la carga.

### Ejemplo 2: comparar una placa disponible

Reacción de 300 kN y presión admisible de 100 kPa (valores supuestos).

- Área mínima: 300 / 100 = **3,0 m²**.
- Placa disponible de 1,2 m × 1,2 m = 1,44 m². Presión real:
  300 / 1,44 ≈ **208 kPa**, más del doble del admisible. **No sirve.**
- Con una placa de 1,8 m × 1,8 m = 3,24 m²: 300 / 3,24 ≈ 93 kPa. Cumple,
  siempre que la placa sea rígida y no se flexione.

Si no se consigue una placa tan grande, se pueden apilar durmientes en
capas cruzadas para repartir la carga, siempre con el visto bueno del
ingeniero, o se mejora el terreno (reemplazo y compactación del suelo,
base granular, losa).

### Detalles que no se deben olvidar

- La reacción máxima debe considerar la **carga y la posición de la
  pluma** más desfavorables del plan de izaje, no solo la posición de
  armado.
- La capacidad del suelo puede reducirse por agua, lluvia o
  vibración. Se vuelve a evaluar si cambian las condiciones.
- Cerca de un borde de excavación o talud, la presión admisible
  disminuye; la distancia mínima segura la define el ingeniero.
- La placa debe quedar centrada bajo el pie del estabilizador y sobre
  una superficie nivelada y limpia, sin piedras que concentren la carga.
- Revisa que el pie del estabilizador esté completamente sobre la placa.

## Grúas sobre orugas y camiones grúa

Las grúas sobre orugas también transmiten presión al suelo: el peso se
reparte en el área de las orugas, pero esa presión no es uniforme.
Aumenta bajo el extremo que está del lado de la carga y puede ser
mucho mayor que el promedio cuando la pluma gira. Por eso el
fabricante entrega la presión máxima de apoyo por modelo y
configuración, y la superficie de trabajo (plataforma de trabajo) se
dimensiona con ese valor. Los camiones grúa y las grúas móviles con
estabilizadores siguen el cálculo de las placas descrito arriba.

## Cuando el suelo no alcanza: mejoramiento

Si la presión admisible es menor que la necesaria, hay opciones que
debe evaluar el ingeniero:

- **Placas o plataformas más grandes**, o durmientes cruzados en
  capas, para repartir la carga.
- **Reemplazo del suelo blando** por material granular compactado en
  capas controladas.
- **Plataforma de trabajo** de hormigón o de material estabilizado.
- **Drenaje** para impedir que el agua ablande la superficie.
- **Cambio de ubicación** de la grúa o uso de una grúa con otra
  configuración de estabilizadores o de mayor capacidad.

Cualquier opción se valida con cálculo y, cuando la carga y el riesgo lo
justifican, con ensayo de placa u otra prueba en el sitio.

## Errores frecuentes

- Usar el peso de la grúa dividido entre cuatro en lugar de la reacción
  máxima del fabricante.
- Apoyar parcialmente un estabilizador sobre la placa y parcialmente
  sobre el suelo.
- Apilar madera sin rigidez suficiente o en mal estado (podrida,
  agrietada, mojada).
- Suponer que el asfalto o el hormigón existente soporta la carga:
  puede haber huecos, tuberías o sótanos debajo.
- No volver a evaluar tras lluvias o cambios del terreno.
- Dejar la decisión al operador sin dato de diseño del terreno.

## Lista de verificación previa al izaje

- Plan de izaje con la reacción máxima por estabilizador.
- Informe o dato de presión admisible, firmado por el responsable.
- Cálculo del área mínima y placas disponibles con su certificación.
- Inspección visual del lugar y de los alrededores.
- Servicios enterrados ubicados y señalizados.
- Terreno nivelado y compactado en la zona de estabilizadores.
- Grúa nivelada dentro de la tolerancia del manual (indicador de nivel).
- Estabilizadores extendidos según la configuración de la tabla de
  cargas usada.
- Zona de maniobra delimitada y señalizada.

## Durante el trabajo

- Observa el asentamiento de cada apoyo en las primeras elevaciones
  (marcas de referencia, nivel de la grúa).
- Detén el izaje si la grúa se desnivela, se oyen crujidos de la placa o
  el suelo se agrieta o cede.
- Revisa el apoyo después de lluvia, de una pausa larga o cuando haya
  vibración cercana (pilotaje, compactación).
- Nunca extiendas más los estabilizadores ni cambies el apoyo con carga
  suspendida.

Las condiciones del suelo se suman a otros riesgos del izaje que se
tratan en el análisis de riesgos de cada tarea; ver
[análisis de seguridad en el trabajo](/posts/analisis-seguridad-trabajo/).
Para conocer a fondo las líneas de grúas móviles y sus tablas de carga,
consulta [grúas Liebherr](/posts/gruas-liebherr/).
