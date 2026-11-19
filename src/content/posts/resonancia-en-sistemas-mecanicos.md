---
title: "Resonancia en sistemas mecánicos: detección y cómo evitarla"
published: 2024-04-03
updatedAt: 2026-11-19
draft: false
featured: false
description: "Qué es la resonancia en maquinaria, cómo se reconoce en una máquina real, cómo se mide con análisis de vibraciones y cómo se corrige cambiando rigidez, masa o amortiguamiento."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "resonancia"
  - "analisis-de-vibraciones"
  - "frecuencia-natural"
  - "amortiguamiento"
  - "mantenimiento-predictivo"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/resonancia-en-sistemas-mecanicos
author: servicio-campo
reviewedBy: servicio-campo
aiAssisted: true
faq:
  - q: "¿Cómo distingo un desbalance de una resonancia?"
    a: "El desbalance produce vibración a 1X (la frecuencia de giro) y aumenta de forma suave con la velocidad. La resonancia aparece como un pico muy marcado en una velocidad concreta y desaparece poco por encima o por debajo. Para confirmarlo se hace una prueba de arranque o parada con registro de amplitud y fase: al atravesar una resonancia, la amplitud sube y la fase cambia cerca de 180 grados. Otro indicio es que la vibración cambia mucho al apretar o aflojar un soporte, o al golpear la estructura, sin tocar el rotor."
  - q: "¿Puedo resolver una resonancia solo agregando masa?"
    a: "A veces, pero no siempre. Agregar masa baja la frecuencia natural; si la excitación está por encima de ella, el cambio la aleja, pero si está por debajo, la acerca. Antes de modificar hay que saber de qué lado de la frecuencia natural se opera y cuánto margen queda. Un refuerzo que sube la rigidez eleva la frecuencia natural y suele ser más seguro cuando la máquina trabaja a velocidad fija inferior a esa frecuencia."
  - q: "¿Qué margen de separación debe haber entre la frecuencia natural y la de operación?"
    a: "Depende de la norma o del criterio de la planta, y en equipos críticos de turbomaquinaria hay requisitos explícitos. Como regla práctica general se busca que la frecuencia natural quede al menos entre 10 y 20 % alejada de las frecuencias de excitación (1X, 2X, paso de álabes, engrane), y se verifica con la prueba real, porque el modelo teórico no siempre coincide con la máquina montada."
  - q: "¿Un aislador de vibración siempre ayuda?"
    a: "No. Un aislador solo reduce la transmisión cuando la frecuencia de excitación es mayor que aproximadamente 1,4 veces la frecuencia natural del conjunto máquina sobre el aislador. Por debajo de ese valor amplifica, y cerca de la frecuencia natural puede empeorar el problema. Por eso se selecciona según la velocidad de giro más baja que debe aislarse, y se revisa el arranque y la parada, donde la máquina atraviesa la zona crítica."
  - q: "¿Cómo se prueba la frecuencia natural de una estructura sin poner en marcha la máquina?"
    a: "Con una prueba de impacto o de golpe: se golpea la estructura con un martillo instrumentado o, de forma sencilla, con un martillo de goma, mientras un acelerómetro registra la respuesta. La transformada de Fourier de la señal muestra picos en las frecuencias naturales. Debe hacerse con la máquina detenida y también, si es posible, en operación, porque la rigidez de soportes, la masa de fluidos y la temperatura modifican los valores."
---

La resonancia es la causa de muchas vibraciones que parecen inexplicables: un ruido que aparece solo a cierta velocidad, una cabina que zumba entre 1 800 y 1 900 rpm, un tubo de escape que se agrieta siempre en el mismo punto. No hay una pieza defectuosa que cambiar; hay una frecuencia de excitación que coincide con la frecuencia natural de la estructura. Esta guía explica cómo se produce, cómo se mide y cómo se corrige.

## Frecuencia natural y resonancia

Todo sistema con masa y rigidez tiene una o varias **frecuencias naturales**: las frecuencias a las que vibra libremente cuando se le da un golpe y se le deja oscilar. Para un sistema simple de masa y resorte:

**f = (1 / 2π) · √(k / m)**

Donde k es la rigidez y m la masa. De la fórmula salen dos consecuencias prácticas: más rigidez sube la frecuencia natural y más masa la baja. Una máquina real tiene muchos modos, cada uno con su frecuencia natural, su forma de deformación y sus nodos, que son los puntos que casi no se mueven.

La **resonancia** ocurre cuando una fuerza periódica (desbalance, explosiones del motor, engrane, paso de álabes) excita al sistema a una frecuencia cercana a una de sus frecuencias naturales. Entonces la amplitud crece mucho más de lo que justificaría la fuerza. Qué tanto crece depende del **amortiguamiento**: en un sistema con poco amortiguamiento (acero soldado, ejes), el factor de amplificación puede ser de decenas de veces; con amortiguamiento alto (caucho, estructuras con juntas), el pico es bajo y ancho.

## Cómo se manifiesta en una máquina

La resonancia casi nunca avisa con una falla repentina. Se reconoce por estos síntomas:

- La vibración **sube en una banda estrecha de velocidad** y baja por encima y por debajo, aunque no haya cambiado la carga.
- Un soporte, guarda, tubería o panel **zumba** o **vibra más que la propia máquina**.
- Aparecen **fisuras repetitivas** en el mismo lugar (soldaduras de soportes, bridas de escape, ménsulas), por fatiga.
- Tornillos que **se aflojan** en una zona concreta aunque se apriete con el par correcto.
- La vibración **cambia al tocar o apretar** una pieza, o con el cambio de temperatura.

Ejemplos frecuentes en maquinaria y vehículos: el cigüeñal, cuya vibración torsional se controla con un amortiguador; ejes largos que alcanzan su velocidad crítica; una polea de tensión con resorte; un guardabarros, una cabina o un escape en un régimen de motor determinado; una bomba montada sobre un bastidor poco rígido; y las correas de transmisión con tensión baja. Para el caso de vehículos de calle, véase [cómo prevenir la vibración y el ruido en vehículos](/posts/como-prevenir-la-vibracion-y-el-ruido-en-vehiculos/).

### Un ejemplo con números

Un motor eléctrico de 4 polos que gira a 1 780 rpm excita a 1 780 / 60 ≈ 29,7 Hz (1X) y a 59,3 Hz (2X). Si el bastidor sobre el que va montado tiene una frecuencia natural de 30 Hz, está resonando con 1X: cualquier desbalance menor se amplifica. Si se refuerza el bastidor y la rigidez efectiva sube un 21 %, la frecuencia natural sube cerca de un 10 % (porque depende de la raíz de k), de 30 a unos 33 Hz. Eso deja un margen de separación de aproximadamente 11 % respecto de 29,7 Hz. Es aceptable en muchos casos, pero conviene medirlo después de la modificación.

## Cómo se identifica: de lo simple a lo avanzado

### 1. Revisión de síntomas y de velocidad

Se anota a qué régimen aparece el problema. Un barrido lento de velocidad (si el equipo lo permite) muestra el pico. Si el régimen coincide con una frecuencia de excitación conocida (1X, 2X, número de dientes por rpm, frecuencia de paso), la hipótesis queda planteada.

### 2. Espectro con acelerómetro

Se mide con un acelerómetro en el punto afectado y se analiza el espectro de vibración (FFT). Se busca un pico que coincida con una frecuencia de excitación. Si el pico se mantiene aunque cambie la velocidad, no es excitación de giro, sino una frecuencia natural.

### 3. Prueba de arranque y parada (run-up / coast-down)

Se registra amplitud y fase mientras la máquina acelera o desacelera. En el gráfico de Bode, una resonancia se ve como un máximo de amplitud acompañado de un cambio de fase de cerca de 180 grados. Es la prueba más clara para separar resonancia de desbalance.

### 4. Prueba de impacto

Con la máquina detenida se golpea la estructura y se mide la respuesta; los picos del espectro son las frecuencias naturales. Se hace en varios puntos y direcciones, porque cada modo se ve mejor en unas ubicaciones que en otras. Es la técnica base del análisis modal.

### 5. Análisis modal y análisis modal operacional (OMA)

El análisis modal completo determina frecuencias, amortiguamiento y formas de modo. El **OMA** obtiene las propiedades dinámicas con la máquina funcionando y sin fuerzas externas conocidas, lo que es una ventaja en equipos que no pueden detenerse o que cambian de comportamiento en servicio. Además de estos métodos, la simulación por elementos finitos permite prever resonancias antes de construir.

Para ver cómo se interpreta un espectro y qué otras fallas imitan una resonancia, véanse [análisis de vibraciones](/posts/analisis-de-vibraciones/) y [desbalanceo y mantenimiento predictivo](/posts/desbalanceo-mantenimiento-predictivo/).

## Cómo corregirla

El orden recomendado: confirmar la causa, atacar la excitación si se puede y, si no, mover la frecuencia natural o disipar energía.

### Reducir la excitación

Antes de modificar la estructura, se elimina lo que excita: balancear el rotor, corregir la alineación, reponer el elemento flojo, ajustar la tensión de la correa. Si la excitación baja, el pico baja aunque la resonancia siga ahí.

### Alejar la frecuencia natural (desintonizar)

- **Cambiar la rigidez:** refuerzos, escuadras, cartelas, más espesor, apoyos adicionales, acortar el voladizo. Es la medida más usada y la más duradera.
- **Cambiar la masa:** agregar o quitar masa. Se aplica donde no se puede reforzar. Cuidado: la frecuencia natural baja cuando se agrega masa; si se acerca al régimen de operación desde abajo, empeora.
- **Cambiar la velocidad de operación:** si el proceso lo permite, se evita la banda crítica. En equipos de velocidad variable se programa un **salto de frecuencia** en el variador, para atravesar rápido la zona sin permanecer en ella.

### Aumentar el amortiguamiento

Materiales viscoelásticos, capas amortiguantes, juntas con fricción controlada, amortiguadores de caucho y, en cigüeñales, el **amortiguador de vibraciones torsionales**. El amortiguamiento no cambia dónde está la resonancia, pero baja la altura del pico, que es lo que daña la pieza.

### Aislar la vibración

Un aislador (resorte, caucho, almohadilla) evita que la vibración pase a otra parte, pero solo funciona si la frecuencia de excitación es mayor que aproximadamente 1,4 veces la frecuencia natural del conjunto sobre el aislador. Debe elegirse según la velocidad más baja a aislar y comprobar el arranque, porque la máquina atraviesa la zona de resonancia al acelerar.

### Absorbedor dinámico

Una masa pequeña sobre un resorte, sintonizada a la frecuencia problemática, absorbe energía del sistema principal. Se usa en estructuras con una resonancia muy marcada y velocidad fija.

## Después de la corrección: verificar

La modificación no termina hasta medir de nuevo. Se repite la prueba de arranque y parada, o el espectro a la velocidad de trabajo, y se compara con la medición inicial. Se confirma que:

1. El pico de amplitud bajó o se desplazó fuera de la banda de operación.
2. No apareció otra resonancia en otro modo, porque reforzar un punto puede mover el problema.
3. El margen de separación entre frecuencia natural y excitación cumple el criterio de la planta o de la norma.
4. La temperatura, la carga y la rigidez de soportes en servicio no cambian el resultado.

## Resonancia en el diseño y en el mantenimiento predictivo

La resonancia no es solo un problema que se corrige: es un criterio de diseño. En aerogeneradores, por ejemplo, el análisis modal se usa para que las frecuencias de operación del rotor no coincidan con las de la torre y las palas, y el OMA permite monitorear la estructura en servicio. En un programa de mantenimiento predictivo, conviene guardar el espectro y la respuesta al impacto de las máquinas críticas cuando están sanas: ese registro de referencia permite detectar luego cambios de rigidez por soportes agrietados, pernos flojos o grietas, que se manifiestan como un desplazamiento de las frecuencias naturales. Los sensores permanentes y el análisis en tiempo real facilitan seguir esa tendencia, y el software de simulación permite comprobar una corrección antes de fabricarla.

Para un caso concreto de monitoreo de apoyos y rodamientos, véase [análisis de vibraciones en chumaceras](/posts/analisis-vibraciones-chumaceras/).

## Lista de comprobación rápida

- Anotar el régimen exacto al que aparece el problema.
- Comparar con las frecuencias de excitación (1X, 2X, engrane, paso de álabes).
- Medir amplitud y fase en un arranque o parada.
- Hacer una prueba de impacto con la máquina detenida.
- Corregir primero la excitación (balanceo, alineación, holguras).
- Si persiste, alejar la frecuencia natural o aumentar el amortiguamiento.
- Medir otra vez y documentar el antes y el después.
