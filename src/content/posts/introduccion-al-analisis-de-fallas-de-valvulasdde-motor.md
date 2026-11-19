---
title: "Análisis de fallas de válvulas de motor: modos de falla y diagnóstico"
published: 2024-04-14
updatedAt: 2026-11-19
draft: false
featured: false
description: "Cómo leer una válvula de motor fallada: quemado, canalización, fractura, desgaste de vástago y recesión de asiento, con causas, síntomas y pruebas previas al desmontaje."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "valvulas-de-motor"
  - "analisis-de-fallas"
  - "motor-diesel"
  - "compresion"
  - "diagnostico-de-motor"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/introducción-al-analisis-de-fallas-de-valvulasdde-motor
author: redaccion-maquinaria
reviewedBy: redaccion-maquinaria
aiAssisted: true
faq:
  - q: "¿Por qué se queman más las válvulas de escape que las de admisión?"
    a: "Porque la válvula de escape recibe los gases de combustión a muy alta temperatura y se enfría solo cuando está apoyada en su asiento, mientras que la de admisión se refrigera con la mezcla fresca que pasa por ella. Por eso las de escape se fabrican con aleaciones más resistentes al calor y su temperatura de trabajo es la que decide su vida."
  - q: "¿Qué indica una válvula con la cabeza fracturada?"
    a: "Suele ser un problema mecánico más que térmico: sobrevelocidad del motor, holgura excesiva o mal reglada, resorte débil que produce rebote, impacto con el pistón por distribución desfasada, o fatiga por corrosión y fisuras previas. Hay que revisar también el pistón y la culata porque los fragmentos suelen dañarlos."
  - q: "¿Cómo se comprueba una válvula con fuga sin desarmar el motor?"
    a: "Con una prueba de compresión y, mejor, con una prueba de fuga de cilindro (leakdown) que introduce aire a presión con el cilindro en compresión y mide el porcentaje que se escapa; el sonido del aire permite ubicar el camino: por el escape indica válvula de escape, por la admisión indica válvula de admisión, por el cárter indica anillos. Los límites aceptables los da el fabricante."
  - q: "¿Qué es la recesión de asiento de válvula?"
    a: "Es el hundimiento progresivo de la válvula (y del asiento) dentro de la culata por desgaste del asiento. Reduce la holgura de las válvulas hasta que desaparece y la válvula deja de cerrar bien, con pérdida de compresión y quemado posterior. Se controla midiendo la holgura periódicamente y el hundimiento de la válvula respecto a la cara de la culata."
  - q: "¿Reparar solo la válvula dañada es suficiente?"
    a: "Solo si se encontró y corrigió la causa. Una válvula quemada por mezcla pobre, inyector goteando o enfriamiento deficiente se repetirá si se cambia sin tratar la causa. Conviene revisar guías, asientos, resortes, holguras, sincronización del árbol de levas y el estado del turbocompresor y del sistema de combustible."
related:
  - caterpillar-valvulas
  - caterpillar-levantavalvulas
  - ciguenal-cojinetes-valvulas-motor-diesel
  - analisis-de-fallas-componentes-maquinaria-pesada
---

Las válvulas abren y cierran los conductos de admisión y escape unas decenas
de veces por segundo, soportando golpes, temperaturas altas y gases
corrosivos. Cuando una falla, el síntoma (pérdida de potencia, humo,
dificultad de arranque, un cilindro muerto) casi nunca dice por qué se
dañó. La tarea del análisis de fallas es leer la válvula, el asiento, la
guía y la culata para encontrar la causa y evitar que se repita.

## Función y partes de una válvula

Una válvula de motor tiene **cabeza** (con la cara de asiento), **vástago**,
y una **punta** donde actúa el balancín o el puente. Trabaja con la **guía**
en la culata, el **asiento** (insertado en la culata), el **resorte** con su
**platillo y chavetas**, y en muchos motores diésel un **rotador** que gira la
válvula unos grados en cada apertura para repartir desgaste y limpiar el
asiento.

La válvula de escape pierde calor casi exclusivamente por contacto con el
asiento mientras está cerrada. Por eso su temperatura depende directamente
de que cierre bien y de que el asiento tenga buen contacto con la culata
refrigerada.

## Método para analizar una falla

El orden importa, porque desarmar sin observar destruye evidencia.

1. **Antecedentes.** Horas o kilómetros, carga, combustible, último
   mantenimiento, ruidos previos, humo, pérdida de potencia, consumo de
   aceite.
2. **Pruebas antes de desarmar.** Compresión, fuga de cilindro, holgura de
   válvulas, estado del aceite y del refrigerante.
3. **Desmontaje ordenado.** Marcar cada válvula con su cilindro y posición;
   fotografiar tal como sale; no limpiar todavía.
4. **Inspección visual de todo el conjunto.** Válvula, asiento, guía,
   resorte, balancín, pistón y culata, no solo la pieza rota.
5. **Medición.** Vástago, guía, longitud libre y carga del resorte,
   recesión, planitud de la culata.
6. **Identificar el patrón de falla** (tabla siguiente).
7. **Determinar la causa raíz**, no solo el mecanismo (por qué se quemó, no
   solo que se quemó).
8. **Corregir y verificar.** Reparar la causa, rearmar con los valores del
   manual y comprobar con una prueba final.

## Modos de falla frecuentes

| Modo de falla | Cómo se ve | Causas habituales | Qué revisar |
| --- | --- | --- | --- |
| Quemado de la cara o borde | Cara picada, borde quemado en un sector | Cierre incompleto, holgura nula, depósitos en el asiento, mezcla pobre, sobrecarga térmica | Holgura, asiento, rotador, inyección |
| Canalización (guttering) | Surco profundo en el asiento, a veces ennegrecido | Fuga de gases a alta temperatura por un cierre defectuoso | Asiento, deformación de culata, depósitos |
| Cabeza fracturada | Cabeza separada del vástago | Sobrevelocidad, rebote por resorte débil, golpe contra pistón, fatiga | Resorte, distribución, pistón |
| Vástago roto | Fractura cerca de la ranura de chaveta o en el cuello | Fatiga, desalineación, golpes, corrosión | Guía, platillo, chavetas |
| Desgaste de vástago o guía | Vástago rayado o con holgura | Lubricación escasa, aceite contaminado, desalineación del balancín | Aceite, guía, sellos de vástago |
| Recesión del asiento | Válvula hundida, holgura desaparecida | Desgaste del asiento, combustible o carga inadecuados | Holgura periódica, hundimiento |
| Cabeza deformada ("tulipán") | Cabeza abombada o cóncava | Sobrecalentamiento, presión excesiva | Enfriamiento, temperatura de escape |
| Picaduras y corrosión | Cara con puntos y óxido | Humedad, azufre, depósitos ácidos | Combustible, condensación |

## Qué indica cada síntoma

| Síntoma | Orientación |
| --- | --- |
| Pérdida de compresión en un cilindro | Válvula mal cerrada, asiento quemado, holgura nula |
| Humo blanco o azul con ruido metálico | Válvula rota o guía muy desgastada |
| Golpeteo en la tapa de válvulas | Holgura excesiva, balancín gastado, resorte roto |
| Mal arranque en frío | Fuga en válvulas o asientos |
| Alta temperatura de escape en un cilindro | Cierre deficiente de la válvula de escape |

Dos pruebas de campo concentran la mayor parte del diagnóstico: la
**compresión** y la **fuga de cilindro**. La primera mide la presión que
alcanza el cilindro; la segunda introduce aire a presión conocida con el
cilindro en compresión y mide qué porcentaje escapa. Escuchar por dónde sale
el aire (escape, admisión, cárter o radiador) señala la válvula o los anillos
como responsables. Los límites aceptables son los del manual del motor.

## Causas raíz más comunes

- **Holgura mal ajustada.** Sin holgura, la válvula no asienta cuando se
  dilata por calor y se quema. Con holgura excesiva, golpea y se fatiga.
  El ajuste se hace con el motor a la temperatura indicada y en el orden del
  manual. Ver [grupo de levantaválvulas y árbol de levas del Caterpillar
  3116 y 3126](/posts/caterpillar-levantavalvulas/).
- **Mezcla o inyección defectuosa.** Un inyector que gotea o una calibración
  que eleva la temperatura de escape sobrecalientan la válvula.
- **Refrigeración deficiente.** Obstrucción del radiador, camisas con
  depósitos, termostato.
- **Combustible o aceite inadecuado.** Depósitos duros en el asiento impiden
  el cierre y erosionan la cara.
- **Resortes débiles o rotos.** Causan rebote y permiten que la válvula se
  abra o cierre fuera de sincronía.
- **Rotador que no gira.** La válvula se calienta siempre por el mismo sector.
- **Contaminación abrasiva.** Un filtro de aire en mal estado deja entrar
  polvo y desgasta guías y asientos.

## Ejemplo de caso

Un motor diésel de equipo pesado pierde potencia y humea. La prueba de fuga
muestra 40 % en un cilindro, con aire saliendo por el escape. Al abrir la
culata, la válvula de escape de ese cilindro presenta un surco de canalización
en un sector del asiento y el rotador está agarrotado. Se reemplazan la
válvula, el asiento y el rotador, se rectifica la culata y se ajustan las
holguras. Causa raíz: el rotador detenido dejó el mismo sector expuesto al
calor. Si solo se hubiera cambiado la válvula, la falla se habría repetido.

## Prevención

- Ajustar la holgura de válvulas con los intervalos del fabricante y
  registrar las lecturas: una holgura que disminuye con el tiempo indica
  recesión.
- Mantener en buen estado el enfriamiento, el filtro de aire y el sistema de
  combustible.
- Evitar sobrevelocidades y ralentí prolongado en frío.
- Usar aceite y combustible de la especificación del motor.
- Revisar periódicamente resortes, rotadores y guías en cada reparación mayor.
- Cuando se encuentra una falla, aplicar el mismo orden de observación
  descrito en
  [análisis de fallas en componentes de maquinaria pesada](/posts/analisis-de-fallas-componentes-maquinaria-pesada/).
  Para el conjunto de válvulas y balancines del 3116/3126, ver
  [tapa del mecanismo de válvulas](/posts/caterpillar-valvulas/).

## Qué medir en el taller

| Pieza | Qué se mide | Para qué |
| --- | --- | --- |
| Vástago de válvula | Diámetro en varios puntos | Desgaste y conicidad |
| Guía de válvula | Diámetro interior y juego válvula-guía | Holgura que permite cabeceo y mal cierre |
| Cara y asiento de válvula | Ancho de contacto y concentricidad | Calidad del sello; ancho excesivo concentra poca presión |
| Resorte | Longitud libre, carga a longitud de trabajo, escuadra | Rebote y flameo de la válvula |
| Culata | Planitud y hundimiento del asiento | Deformaciones térmicas y recesión |
| Punta de válvula y balancín | Marcas de desgaste y juego | Holgura y alineación |

Todos los valores límite son los del manual del motor; no se aceptan
valores genéricos. Una pieza dentro de tolerancia sigue en servicio, pero
una dimensión cerca del límite se anota, porque a la siguiente revisión puede
estar fuera.

## Lectura del color y los depósitos

El aspecto de la cabeza dice mucho sobre la temperatura y la combustión:

- **Depósitos secos y negros** en admisión: mezcla rica o paso de aceite por
  la guía.
- **Depósitos blancos o grisáceos y cara limpia** en escape: temperatura alta y
  combustión pobre o con aditivos específicos.
- **Zonas azuladas o decoloradas** en un sector de la cabeza: calentamiento
  local por mal asiento o rotador detenido.
- **Aceite quemado en el vástago**: el sello de vástago o la guía ya no
  retienen el aceite.

Interpretar estos indicios siempre en conjunto con las mediciones y el
historial del motor, nunca de forma aislada.

## Después de la reparación

- Rectificar o reemplazar asientos y guías según la medición, y verificar el
  hundimiento de la válvula respecto a la culata.
- Reemplazar sellos de vástago y, si hay duda, los resortes en juego
  completo.
- Ajustar la holgura con el motor a la condición indicada y repetirla tras
  unas horas de funcionamiento.
- Comprobar compresión o fuga de cilindro para confirmar el cierre.
- Revisar sistema de combustible, turbo y enfriamiento antes de devolver el
  equipo a trabajo pesado.
