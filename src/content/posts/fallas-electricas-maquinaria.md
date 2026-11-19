---
title: "Fallas eléctricas en motores industriales: aislamiento, devanados y pruebas"
published: 2024-03-27
updatedAt: 2026-11-19
draft: false
featured: false
description: "Causas de falla en motores eléctricos industriales (aislamiento, devanados, rodamientos, tensión) y cómo diagnosticar con multímetro, megóhmetro y corriente."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "motores-electricos"
  - "aislamiento"
  - "megohmetro"
  - "devanados"
  - "mantenimiento-electrico"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/fallas-electricas-maquinarias
author: redaccion-maquinaria
reviewedBy: redaccion-maquinaria
aiAssisted: true
faq:
  - q: "¿Cuál es el valor mínimo de resistencia de aislamiento de un motor?"
    a: "Una regla clásica es 1 MΩ más 1 MΩ por cada kV de tensión nominal, medida a 40 °C, y las prácticas más recientes recomiendan valores más altos para devanados nuevos. Pero el dato más útil no es el valor suelto, sino la tendencia: una lectura que cae año tras año o que baja mucho con humedad indica deterioro. El criterio final lo da la norma aplicable (por ejemplo IEEE 43) y el fabricante del motor."
  - q: "¿Por qué hay que medir con megóhmetro y no con multímetro el aislamiento?"
    a: "Porque el multímetro aplica una tensión muy baja y no es capaz de detectar un aislamiento deteriorado, que puede mostrar continuidad aceptable a pocos voltios y fallar a la tensión de trabajo. El megóhmetro aplica una tensión de prueba (por ejemplo 500 o 1.000 V en un motor de baja tensión) y mide fugas de corriente en el orden de megaohmios o gigaohmios."
  - q: "¿Qué causa que un motor se queme por sobrecalentamiento?"
    a: "Las causas más frecuentes son sobrecarga mecánica, tensión baja o desbalanceada entre fases, pérdida de una fase, rotor bloqueado o arranques repetidos, ventilación tapada y ambiente caliente o sucio. Como regla práctica, cada 10 °C por encima de la temperatura nominal de la clase de aislamiento puede reducir la vida del aislamiento aproximadamente a la mitad."
  - q: "¿Qué es el desbalance de tensión y por qué es tan dañino?"
    a: "Es la diferencia entre las tensiones de las tres fases. Un desbalance pequeño de tensión genera un desbalance de corriente varias veces mayor, que calienta el estator y produce par pulsante. Se calcula como la desviación máxima respecto al promedio dividida por el promedio. Se corrige en la alimentación o en las cargas monofásicas, no en el motor."
  - q: "¿Cuándo se rebobina un motor y cuándo se reemplaza?"
    a: "Conviene rebobinar cuando el núcleo magnético está sano y el motor es grande o especial; en motores pequeños el costo suele favorecer el reemplazo. Un rebobinado mal hecho (con calor excesivo al desmontar el bobinado viejo) puede bajar el rendimiento. Antes de decidir se prueba el núcleo, se revisan los rodamientos y se compara el costo con un motor de alta eficiencia."
related:
  - electricidad-fundamentos-componentes
  - analisis-de-vibraciones
  - fallas-rondamientos
  - analisis-de-fallas-componentes-maquinaria-pesada
---

Un motor eléctrico industrial es robusto, pero sus fallas son costosas
porque suelen detener una línea de producción o un equipo completo. La mayoría
de las fallas eléctricas no aparecen de golpe: son el resultado de calor,
humedad, vibración o una alimentación deficiente que van degradando el
aislamiento durante meses. Este artículo ordena los modos de falla, qué los
produce y qué pruebas se hacen para encontrarlos antes del paro.

> **Seguridad.** Todas las mediciones de aislamiento y resistencia se hacen
> con el motor **desenergizado, bloqueado y etiquetado**, y descargando el
> devanado tras la prueba. Las mediciones con tensión las hace personal
> calificado con el equipo de protección correspondiente.

## Cómo está construido un motor y qué puede fallar

Un motor de inducción trifásico tiene un **estator** con tres devanados de
cobre alojados en un núcleo de laminaciones y aislados con barniz y papel o
película; un **rotor** (jaula de ardilla en la mayoría de los casos); dos
**rodamientos** en las tapas y una caja de conexiones. Los puntos débiles son:

- **El aislamiento del devanado** (esmalte del alambre, aislamiento entre
  fases y a masa).
- **Los rodamientos**, que sufren desgaste, lubricación inadecuada y
  corrientes del eje con variadores de frecuencia.
- **El rotor**: barras fracturadas o flojas.
- **La alimentación**: tensión desbalanceada, baja, picos o armónicos.

## Modos de falla y causas

| Falla | Qué ocurre | Causa típica |
| --- | --- | --- |
| Sobrecalentamiento | Aislamiento se degrada, ennegrece, se quema | Sobrecarga, ventilación tapada, ambiente caliente, arranques frecuentes |
| Cortocircuito entre espiras | Una parte del devanado pone en corto; corriente alta y calor local | Envejecimiento del aislamiento, humedad, picos de tensión |
| Cortocircuito a masa (a tierra) | El bobinado toca el núcleo; dispara protecciones | Humedad, contaminación, aislamiento perforado |
| Circuito abierto | Una fase sin continuidad; el motor zumba o no arranca | Conexión suelta, bobina cortada, terminal quemado |
| Pérdida de una fase (monofaseo) | El motor trabaja con dos fases; corriente alta en las restantes | Fusible o contacto abierto, cable cortado |
| Desbalance de tensión | Corriente muy desigual; calentamiento | Cargas monofásicas mal repartidas, mala conexión |
| Rotor con barras rotas | Vibración, par pulsante, calentamiento en arranque | Arranques pesados, fatiga térmica |
| Falla de rodamientos | Ruido, calor, vibración; puede rozar rotor con estator | Lubricación, contaminación, desalineación, corrientes del eje |

El calor es el enemigo principal. Una regla práctica habitual es que cada
**10 °C** por encima del límite de la clase de aislamiento reduce la vida
útil del aislamiento aproximadamente a la mitad. Por eso un motor "que solo
está algo caliente" ya está acortando su vida.

## Síntomas y primer diagnóstico

| Síntoma | Posible origen | Primera comprobación |
| --- | --- | --- |
| No arranca, zumba | Pérdida de fase, rotor bloqueado, tensión muy baja | Tensión en bornes, fusibles, contactor |
| Dispara el térmico | Sobrecarga, desbalance, ventilación | Corriente por fase contra la placa |
| Dispara el diferencial o falla a tierra | Aislamiento a masa dañado | Megóhmetro |
| Corriente alta y desigual | Desbalance de tensión o espiras en corto | Tensiones y corrientes por fase |
| Vibración y ruido | Rodamientos, desalineación, rotor | Análisis de vibración, acoplamiento |
| Olor a quemado | Aislamiento dañado | Inspección visual y pruebas |

## Pruebas eléctricas: qué mide cada una

### 1. Medición de tensión y corriente en funcionamiento

Con pinza amperimétrica y multímetro se mide tensión entre fases y corriente
de cada fase con el motor en marcha. Se compara con la placa (tensión y
corriente nominal). Se calcula el desbalance de tensión:

desbalance (%) = desviación máxima respecto al promedio ÷ promedio × 100

Por ejemplo, 400, 410 y 390 V dan un promedio de 400 V y un desbalance de
10/400 = 2,5 %. Como regla general el desbalance de tensión debe mantenerse
muy por debajo de ese valor, porque la corriente se desbalancea varias veces
más que la tensión y el motor se calienta.

### 2. Resistencia de devanados con multímetro

Con el motor desconectado, se mide la resistencia entre pares de bornes (U-V,
V-W, W-U). En un devanado sano las tres lecturas son casi iguales, con
diferencias de unos pocos por ciento. Una lectura mucho más alta indica
conexión floja o bobina parcialmente cortada; infinito, circuito abierto; muy
baja, posible corto entre espiras. Como los valores son del orden de ohmios o
fracciones, en motores grandes se usa un micro-ohmímetro.

### 3. Resistencia de aislamiento con megóhmetro

Se aplica una tensión continua entre cada devanado y la carcasa (con los
otros devanados a tierra). Para motores de baja tensión se usan habitualmente
500 o 1.000 V; la tensión de prueba la define la norma y el fabricante. La
lectura se registra tras 1 minuto y se corrige por temperatura.

### 4. Índice de polarización

Es la relación entre la lectura a 10 minutos y a 1 minuto. Un aislamiento
seco y sano da un cociente claramente mayor que 1; un aislamiento húmedo o
contaminado da un valor cercano a 1 porque la corriente de fuga domina. Se
interpreta según la norma aplicable (por ejemplo IEEE 43).

### Ejemplo de interpretación

Un motor de 440 V, probado con megóhmetro a 500 V:

- Lectura a 1 min: 8 MΩ; a 10 min: 9 MΩ. El cociente es 1,1, poco mayor que
  1.
- Año anterior: 120 MΩ a 1 min, con cociente 3.

Aunque 8 MΩ supera el mínimo clásico (1 MΩ + 1 MΩ/kV), la caída de 120 a
8 MΩ y el cociente casi plano indican humedad o contaminación en el
devanado. Acción: secar (horno o calentamiento controlado según el taller),
limpiar y repetir la prueba; si no recupera, rebobinar o reemplazar. Esperar a
que baje de 1 MΩ habría llevado a una falla a tierra durante la operación.

## Rodamientos: la otra mitad de las fallas

Una buena parte de los motores que fallan lo hace por rodamientos, no por el
devanado. Las causas: exceso o falta de grasa, mezcla de grasas
incompatibles, contaminación, desalineación del acoplamiento, correa
sobretensada y, en motores con variador de frecuencia, corrientes que circulan
por el rodamiento y dejan un estriado característico (marcas de "lavadero" en
la pista). El análisis de vibración detecta el deterioro semanas antes del
fallo; ver [análisis de vibraciones](/posts/analisis-de-vibraciones/). Si la
causa es un elemento flojo, también [fallas por aflojamiento mecánico](/posts/fallas-rondamientos/).

## Prevención y mantenimiento

- **Alimentación.** Medir tensión y corriente en cada fase periódicamente y
  corregir desbalances; instalar protecciones contra pérdida de fase y
  sobrecarga ajustadas a la placa.
- **Temperatura y ventilación.** Mantener limpias las aletas y la
  ventilación; evitar polvo acumulado que aísla térmicamente.
- **Humedad.** Calefactores de anticondensación en motores parados en
  ambientes húmedos; drenajes de la carcasa abiertos.
- **Lubricación.** Engrasar con la cantidad y el tipo indicados.
- **Pruebas periódicas.** Megóhmetro, resistencia y vibración a intervalos
  fijos y registrando tendencia. Un historial vale más que una lectura aislada.
- **Análisis posterior a la falla.** Guardar el motor quemado y examinar el
  patrón de daño: ayuda a separar causa de efecto (ver
  [análisis de fallas en componentes](/posts/analisis-de-fallas-componentes-maquinaria-pesada/)).
  Para repasar fundamentos de tensión, corriente y resistencia, ver
  [manual básico de electricidad](/posts/electricidad-fundamentos-componentes/).

## Clases de aislamiento y temperatura

El aislamiento de un motor se clasifica por la temperatura máxima que soporta
en servicio. Las clases habituales son B, F y H, que corresponden a límites
crecientes de temperatura; la placa del motor indica la clase y el aumento de
temperatura permitido. Un motor con aislamiento clase F que trabaja con
aumento de temperatura de clase B tiene una reserva térmica, y por eso vive
más. La regla práctica es que la temperatura de trabajo se mantiene lo más
baja posible, y cualquier medida que la baje (limpieza, ventilación, carga
correcta) alarga la vida del devanado.

## Variadores de frecuencia y su efecto

Los variadores producen pulsos de tensión de frente rápido que someten a un
estrés mayor las primeras espiras del devanado, sobre todo con cables largos
entre variador y motor. Pueden además generar tensión en el eje que descarga a
través de los rodamientos. Se reducen con motores aptos para variador,
filtros de salida o reactancias cuando el cable es largo, y escobillas o
anillos de puesta a tierra del eje cuando el fabricante lo recomienda. Un
motor estándar con variador que falla "sin razón" a los pocos meses merece una
revisión de estos puntos.

## Diagnóstico paso a paso de un motor que no arranca

1. **Seguridad:** abrir el seccionador, bloquear y etiquetar; comprobar
   ausencia de tensión.
2. **Giro libre:** con el motor desacoplado, girar el eje a mano: si está
   duro, los rodamientos o la carga son la causa.
3. **Alimentación:** comprobar fusibles, contactor y protección; medir tensión
   en bornes con carga solicitada.
4. **Devanados:** resistencia entre fases (comparar entre sí) y a masa.
5. **Megóhmetro:** aislamiento de cada fase a carcasa, con tendencia.
6. **Rotor:** si hay barras sospechosas, el análisis de corriente o de
   vibración lo muestra; en el taller se hace con equipo específico.
7. **Prueba sin carga:** con el motor sano y desacoplado, medir la corriente en
   vacío y comparar con la de placa (la corriente en vacío es una fracción de
   la nominal).

Una secuencia ordenada evita reemplazar un motor que solo tenía un fusible
abierto o un contactor con los contactos deteriorados.

## Registro de pruebas

Conviene anotar en una hoja por motor: fecha, temperatura ambiente,
resistencia entre fases, aislamiento a 1 y 10 minutos, tensión y corriente en
operación, y temperatura de carcasa y rodamientos. Con dos o tres años de
registros se detecta la tendencia mucho antes que con una sola lectura, y se
decide con base en datos cuándo rebobinar, cambiar o seguir operando.
