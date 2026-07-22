---
title: "Diagrama del sistema ACERT 2007: componentes y flujo de gases"
published: 2026-06-22
draft: false
featured: false
description: "Diagrama detallado de un motor ACERT 2007: turbos en serie, ATAAC, CGI, DPF, inyección alta presión. Flujo de aire y gases explicado paso a paso."
category: mecanica-automotriz
formato: guia
nivel: avanzado
tags:
  - "sistema-acert"
  - "caterpillar"
  - "diagrama-motor"
  - "flujo-gases"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/acert/diagrama-sistema-acert-2007
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Por qué el sistema ACERT usa turbochargers en serie en vez de uno solo?"
    a: "Un turbo grande da mucha potencia a altas RPM pero tarda en responder (turbo lag). Un turbo chico responde rápido pero se satura a altas RPM. Al combinarlos en serie —chico de alta presión + grande de baja presión— se obtiene lo mejor de ambos: respuesta rápida en ralentí y aceleración, y sostenimiento de presión de admisión en plena carga. Es lo mismo que hacen los motores de F1 y algunos autos deportivos, aplicado a maquinaria pesada."
  - q: "¿El CGI Cooler qué función cumple exactamente?"
    a: "El CGI Cooler (Cooled Gas Induction Cooler) es un intercambiador de calor que enfría los gases de escape antes de reinyectarlos a la admisión. Los gases salen del escape a 400-600 °C; el cooler los baja a 100-150 °C usando el refrigerante del motor. Sin este enfriamiento, los gases calientes no reducirían la temperatura pico de combustión — que es la clave para reducir NOx. El cooler es un componente crítico y su fallo (fisura interna, obstrucción) es una causa común de picos de NOx y fallos de emisiones."
  - q: "¿Cuál es la diferencia entre ATAAC y CGI cooler?"
    a: "ATAAC (Air To Air After Cooler) enfría el AIRE FRESCO que viene de los turbochargers antes de entrar al motor, usando el aire ambiente a través de un radiador dedicado. CGI cooler enfría los GASES DE ESCAPE que se reintroducen a la admisión, usando el refrigerante del motor. Son dos intercambiadores diferentes con propósitos distintos: ATAAC aumenta la densidad del aire fresco (más O2 por ciclo, más potencia); CGI cooler reduce temperatura de combustión (menos NOx)."
  - q: "¿Qué es el CCV Filter en el diagrama ACERT?"
    a: "CCV es Closed Crankcase Ventilation. Es un filtro que atrapa aceite y gases del cárter del motor antes de reinyectarlos a la admisión. Los motores modernos no ventilan el cárter a la atmósfera (como se hacía antes) porque ese venteo contenía aceite quemado y contribuía a la contaminación. El CCV Filter separa el aceite (lo devuelve al cárter) del aire limpio (lo manda a la admisión). Requiere reemplazo cada 500-1.000 horas según el modelo."
  - q: "¿En qué orden circula el aire por el sistema ACERT?"
    a: "Aire fresco → filtro de aire → turbo de baja presión → turbo de alta presión → ATAAC (enfriador de aire) → admisión del motor. Dentro del cilindro se mezcla con combustible atomizado por los inyectores de alta presión. Después de la combustión → escape → turbo alta presión (mueve turbina) → turbo baja presión (mueve turbina) → CGI valve (parte se recircula a admisión vía CGI cooler) → DPF (filtro particulate) → salida al ambiente. Es un ciclo cerrado donde parte del escape vuelve para reducir NOx."
sources:
  - title: "Caterpillar Global Manpower Development — ACERT 2007 Systems Overview"
    url: "https://heavyequipments.org/"
  - title: "Caterpillar — Service Information System (SIS) for ACERT engines"
    url: "https://www.cat.com/"
  - title: "SAE International — Cooled EGR and Series Turbocharging"
    url: "https://www.sae.org/"
related:
  - sistema-acert-caterpillar-que-es-como-funciona
  - turbochargers-en-serie-motores-caterpillar
  - sistema-cgi-cooled-gas-induction
  - que-es-un-dpf-diesel-particulate-filter
---

Entender el sistema ACERT visualmente —cómo se conectan sus componentes, por
dónde circula el aire, por dónde sale el escape, dónde se hace la recirculación
CGI— es lo que separa a un técnico que **sabe cambiar filtros** de uno que
**puede diagnosticar problemas** cuando la máquina tira códigos de error.

Este artículo desarma el diagrama del sistema ACERT 2007 componente por
componente, y sigue el flujo del aire y del escape en un ciclo típico.

## Los 10 componentes del diagrama ACERT

Empezando desde la entrada de aire fresco y siguiendo el recorrido natural del
gas:

1. **Filtro de aire** (no siempre dibujado en el diagrama pero es el punto de
   entrada).
2. **Turbo de baja presión** (grande, actúa segundo en la secuencia).
3. **Turbo de alta presión** (chico, actúa primero).
4. **ATAAC** (Air To Air After Cooler) — enfriador aire-aire de la admisión.
5. **Throttle** — mariposa del acelerador electrónica.
6. **Válvulas de admisión** — con actuación variable (Intake Valve Actuation).
7. **Cilindros con inyectores** — sistema de alta presión.
8. **CCV Filter** — Closed Crankcase Ventilation.
9. **CGI Valve + CGI Cooler + Flow Sensor** — sistema de recirculación de
   gases de escape enfriados.
10. **DPF** — filtro de partículas diesel.

En el diagrama oficial de Caterpillar todos estos componentes están conectados
por flechas de dos colores: **azul** para el aire fresco y **rojo** para los
gases de escape.

## El camino del aire fresco (flechas azules)

### Paso 1: filtro de aire → turbo baja presión

El aire entra al filtro y llega al **turbo de baja presión** (LP turbo). Este
turbo es el más grande de los dos; su compresor eleva la presión del aire
ligeramente (de atmosférica a ~1.5 bar absoluta).

### Paso 2: turbo baja → turbo alta presión

El aire pre-comprimido pasa al **turbo de alta presión** (HP turbo), más chico
y con turbina más rápida. Comprime el aire una segunda vez, llevando la presión
final a **~3-4 bar absoluta** en plena carga.

Esta configuración en **serie** (o "series turbocharging") es la firma técnica
del ACERT. Permite mucho aire con muy poco lag: el turbo chico responde
inmediato, y cuando la demanda sube, el turbo grande toma el relevo.

### Paso 3: turbo HP → ATAAC (enfriador)

El aire comprimido dos veces sale muy caliente (150-200 °C). Pasa por el
**ATAAC** (Air To Air After Cooler), un radiador de aire enfriado por aire
ambiente que baja la temperatura a **40-70 °C**.

¿Para qué enfriar? El aire frío es más denso — cabe más masa de O₂ en el mismo
volumen del cilindro. Más O₂ = más combustible que se puede quemar completo =
más potencia + menos hollín (PM).

### Paso 4: ATAAC → throttle → admisión

El aire frío pasa por el **throttle electrónico** (una mariposa que controla el
flujo cuando la ECU lo requiere, típicamente en regeneración forzada del DPF).
Después entra al múltiple de admisión y a los cilindros.

## El camino del escape (flechas rojas)

### Paso 5: cilindros → turbo alta presión

Los gases quemados salen a alta temperatura (400-600 °C) y alta presión. Van
directo al **turbo de alta presión**, cuya turbina se mueve por la energía de
estos gases. El movimiento de la turbina es lo que hace girar el compresor del
aire fresco (paso 2).

### Paso 6: turbo HP → turbo baja presión

Los gases, ahora con algo menos de energía, pasan al **turbo de baja presión**
y hacen girar su turbina también. Al llegar aquí, la presión del escape ya
bajó considerablemente.

### Paso 7: split — parte al CGI, parte al DPF

Aquí viene la parte inteligente del sistema. Los gases se **dividen en dos
caminos**:

- Una parte (regulada por la **CGI valve**) va al **CGI cooler** para ser
  enfriada y devuelta a la admisión.
- El resto sigue al **DPF** para filtrado final antes de salir al ambiente.

La **CGI valve es controlada por la ECU** en función de la demanda de NOx
target. En baja carga la ECU abre más la CGI valve (más recirculación, menos
NOx). En alta carga cierra más (menos recirculación, más potencia disponible).

### Paso 8: CGI cooler → admisión (loop)

Los gases que van al **CGI cooler** son enfriados de 400 °C a 100-150 °C
usando el circuito de refrigeración del motor. El **flow sensor** mide cuántos
gases están circulando para que la ECU ajuste la válvula.

Ya enfriados, los gases se **reinyectan a la admisión** mezclándose con el
aire fresco. Ahí es donde ocurre la magia: los gases de escape enfriados
tienen menos O₂ (ya se usó) y son inertes, así que la mezcla resultante
**quema a menor temperatura pico** → menos NOx.

### Paso 9: DPF → salida al ambiente

Los gases que no fueron a recirculación pasan por el **DPF**, donde el hollín
queda atrapado en las paredes de la matriz cerámica. Los gases limpios (CO₂,
H₂O, N₂, algo de NOx residual) salen por el escape final.

Cada tantas horas, el DPF acumula suficiente hollín y el sistema hace una
**regeneración**: la ECU sube la temperatura del escape (retardando inyección,
inyectando combustible extra en la post-inyección) para quemar el hollín
acumulado y convertirlo en cenizas.

## El componente que suele pasar desapercibido: el CCV Filter

En el diagrama aparece un pequeño rectángulo etiquetado **CCV Filter**
conectado a la parte baja del bloque del motor. Este es el **filtro de
ventilación del cárter cerrado**.

Los motores modernos no ventilan el cárter a la atmósfera (como sí lo hacían
los motores previos a EPA 2004). En cambio, los vapores del cárter —que
contienen aceite quemado, agua, gases de combustión que se filtraron por los
anillos— pasan por el CCV Filter, donde:

- El **aceite y las partículas** se separan y vuelven al cárter.
- El **aire limpio** se manda a la admisión.

Es un filtro que se reemplaza cada 500-1.000 horas según el modelo. Un CCV
tapado puede causar **presión excesiva en el cárter** y fugas por los sellos.

## La actuación variable de válvula de admisión

En el diagrama, las **válvulas de admisión** aparecen con la etiqueta "Intake
Valve Actuation". Es un mecanismo que puede modificar **cuánto tiempo permanecen
abiertas las válvulas** y qué tanto se solapan con las válvulas de escape.

Efectos:

- **Ralentí**: solapamiento reducido → combustión más estable, menos HC.
- **Aceleración**: solapamiento amplio → mejor barrido de gases, más aire fresco.
- **Regeneración del DPF**: temporización específica para elevar la
  temperatura del escape.

Es una tecnología análoga al **VVT-i de Toyota** o al **VarioCam de Porsche**,
aplicada a motores diesel industriales.

## En resumen

El diagrama del sistema ACERT no es decoración — es la **hoja de ruta que sigue
un técnico** cuando aparece un código de error (por ejemplo,
"Diagnostic Flash Code 428" que puede indicar problema en el CGI cooler) o
cuando hay que hacer troubleshooting de emisiones.

Entender el flujo de aire y escape componente por componente permite:

- Identificar dónde está el problema cuando falla algo.
- Saber qué medir con la escáner Cat ET (presiones, temperaturas, flujos por
  cada punto del diagrama).
- Planificar mantenimiento predictivo (limpieza del ATAAC, chequeo del CGI
  cooler, reemplazo del CCV filter).
- Explicar al operador o al cliente por qué el motor moderno es como es.

En próximos artículos abriremos cada uno de estos componentes individualmente,
con más detalle de mantenimiento y diagnóstico.
