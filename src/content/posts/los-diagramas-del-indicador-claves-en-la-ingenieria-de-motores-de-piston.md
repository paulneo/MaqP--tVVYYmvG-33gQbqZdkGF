---
title: "Diagrama del indicador p-V: IMEP, potencia indicada y diagnóstico"
published: 2024-04-05
updatedAt: 2026-11-19
draft: false
featured: false
description: "Qué es el diagrama del indicador p-V de un motor de pistón, cómo se mide, cómo se obtiene la IMEP y la potencia indicada (con ejemplo) y qué revela de la combustión."
category: maquinaria-pesada
formato: guia
nivel: avanzado
tags:
  - "diagrama-del-indicador"
  - "imep"
  - "potencia-indicada"
  - "motores-de-piston"
  - "presion-en-cilindro"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/diagramas-del-indicador
author: redaccion-maquinaria
reviewedBy: redaccion-maquinaria
aiAssisted: true
faq:
  - q: "¿Qué es un diagrama del indicador?"
    a: "Es la gráfica de la presión dentro del cilindro frente al volumen (diagrama p-V) o frente al ángulo del cigüeñal (p-θ) durante un ciclo. El área encerrada por la curva p-V es el trabajo que el gas entrega al pistón en ese ciclo, de modo que de la gráfica se calcula la potencia que el motor produce en el cilindro antes de pérdidas mecánicas."
  - q: "¿Cuál es la diferencia entre potencia indicada y potencia al freno?"
    a: "La potencia indicada es la que los gases entregan al pistón, calculada a partir del diagrama. La potencia al freno es la que sale en el volante o el eje, medida con un dinamómetro. La diferencia es la potencia perdida por fricción y por accionar accesorios (bomba de aceite, agua, etc.). El cociente entre ambas es el rendimiento mecánico."
  - q: "¿Qué es la IMEP?"
    a: "La presión media efectiva indicada es la presión constante teórica que, aplicada al pistón durante la carrera de potencia, realizaría el mismo trabajo que el ciclo real. Se obtiene dividiendo el trabajo indicado del ciclo entre el volumen desplazado. Sirve para comparar motores de distinto tamaño y para ver cuánto trabajo extrae cada cilindro."
  - q: "¿Cómo se mide la presión en el cilindro?"
    a: "Con un transductor de presión (piezoeléctrico en la mayoría de los casos), montado en la culata o en un adaptador, junto con un sensor de posición del cigüeñal que fije el ángulo. En motores grandes se usan indicadores mecánicos o electrónicos portátiles. La calibración del transductor y la correcta determinación del punto muerto superior son críticas para la precisión."
  - q: "¿Por qué hay ciclos diferentes en un mismo cilindro?"
    a: "La combustión real varía de un ciclo a otro por diferencias de mezcla, turbulencia y encendido. Por eso se promedian muchos ciclos (decenas o cientos) y se calcula también la variación de la IMEP entre ciclos, que es un indicador de estabilidad de la combustión."
related:
  - dinamica-de-motores-de-pistones-un-analisis-integral
  - camara-combustion-diesel-inyeccion-directa-indirecta
  - caterpillar-valvulas
---

El diagrama del indicador es la forma más directa de ver qué pasa dentro de
un cilindro. Registra la presión del gas mientras el pistón recorre su
carrera, y de esa curva salen el trabajo del ciclo, la potencia que genera
el cilindro y pistas sobre la combustión, la compresión, el sellado de
válvulas y anillos y la sincronización. Es una herramienta de diseño y de
diagnóstico, especialmente en motores diésel grandes y en investigación.

## Qué muestra el diagrama p-V

En el eje vertical va la presión del cilindro; en el horizontal, el volumen
(o la posición del pistón). Un ciclo de cuatro tiempos recorre estas etapas:

1. **Admisión.** El pistón baja y el cilindro se llena a presión próxima a la
   atmosférica (o a la presión de sobrealimentación).
2. **Compresión.** El pistón sube, la presión aumenta.
3. **Combustión y expansión.** Se alcanza la presión máxima poco después del
   punto muerto superior (PMS) y el gas empuja el pistón.
4. **Escape.** Los gases salen a presión próxima a la de escape.

La curva forma un lazo. El **lazo de alta presión** (compresión más
expansión) tiene un área que representa el trabajo positivo; el **lazo de
bombeo** (admisión y escape), mucho más pequeño, representa el trabajo de
renovar la carga. El trabajo neto del ciclo es la diferencia.

## Cómo se obtiene el diagrama

- **Transductor de presión en el cilindro** (habitualmente piezoeléctrico, con
  amplificador de carga y refrigeración), instalado en la culata o en el
  alojamiento de la bujía o del inyector.
- **Sensor de ángulo del cigüeñal** (codificador), que da el ángulo con alta
  resolución.
- **Conversión de ángulo a volumen** con la geometría del mecanismo (diámetro,
  carrera, longitud de la biela y volumen de la cámara).
- **Referencia de PMS.** Un error de pocos grados en el PMS falsea el área del
  diagrama y la IMEP; se determina por calibración o por la curva de
  arrastre sin combustión.

## Trabajo, IMEP y potencia indicada

El trabajo indicado por ciclo es el área del lazo:

W_i = ∮ p dV

La **presión media efectiva indicada** (IMEP) es ese trabajo dividido por el
volumen desplazado:

IMEP = W_i ÷ V_d

Y la **potencia indicada** de un motor de cuatro tiempos con z cilindros:

P_i = IMEP × V_d × z × n ÷ 2 (con n en revoluciones por segundo)

El factor 2 aparece porque en un motor de cuatro tiempos hay un ciclo de
trabajo cada dos vueltas del cigüeñal. En uno de dos tiempos no se divide.

Se distingue la IMEP **bruta** (solo compresión y expansión) de la **neta**
(incluye el trabajo de bombeo). Hay que saber cuál se usa al comparar datos.

## Ejemplo resuelto

Motor diésel de cuatro tiempos, 4 cilindros, diámetro 100 mm, carrera 110 mm,
2.400 rpm. A partir del diagrama se obtiene una IMEP neta de 10 bar.

1. Volumen desplazado por cilindro:
   V_d = π/4 × 0,100² × 0,110 = 8,64 × 10⁻⁴ m³ (0,864 L).
2. Trabajo indicado por ciclo en un cilindro:
   W_i = IMEP × V_d = 10 × 10⁵ Pa × 8,64 × 10⁻⁴ m³ ≈ **864 J**.
3. Ciclos por segundo por cilindro: 2.400 ÷ 60 ÷ 2 = **20**.
4. Potencia indicada por cilindro: 864 × 20 ≈ **17,3 kW**.
5. Potencia indicada del motor: 17,3 × 4 ≈ **69 kW**.

Si el dinamómetro mide 59 kW al freno, el rendimiento mecánico es
59 ÷ 69 ≈ **0,85**, es decir, 10 kW se consumen en fricción y accesorios.

Cuando la IMEP se determina del diagrama con un planímetro o por integración,
se usa la altura media: IMEP = área ÷ longitud del diagrama × escala del
resorte (o factor del transductor).

## Lectura diagnóstica

| Observación | Posible causa |
| --- | --- |
| Presión de compresión baja, pico bajo | Fuga por válvulas o anillos, junta de culata |
| Pico de presión retrasado y bajo | Inyección o encendido retardados |
| Pico demasiado alto y temprano | Avance excesivo; riesgo de golpeteo y esfuerzo mecánico |
| Oscilaciones tras el pico | Detonación o golpeteo |
| Lazo de bombeo grande | Restricción de admisión o escape, filtro tapado |
| Gran variación ciclo a ciclo | Combustión inestable, inyector o bujía defectuosos |
| Un cilindro con IMEP menor que las demás | Cilindro débil por inyector, válvula o compresión |

El diagrama se compara contra el de referencia del mismo motor, ya que cada
motor tiene su forma característica. Para el contexto de las fuerzas y los
movimientos del conjunto pistón, biela y cigüeñal, ver
[dinámica de motores de pistones](/posts/dinamica-de-motores-de-pistones-un-analisis-integral/); para las
cámaras y el tipo de inyección, ver
[cámara de combustión diésel](/posts/camara-combustion-diesel-inyeccion-directa-indirecta/).

## Usos y limitaciones

- **Desarrollo y calibración:** optimizar el avance de inyección o encendido
  y la relación de compresión.
- **Balance entre cilindros:** detectar un cilindro que aporta menos trabajo.
- **Diagnóstico en motores grandes:** marinos y estacionarios llevan
  indicadores periódicos como parte del mantenimiento.
- **Limitación:** requiere instrumentación cara, calibración cuidadosa y
  buena referencia de PMS; para un motor automotriz común, una prueba de
  compresión y de fuga de cilindro cubre la mayor parte del diagnóstico.

## Diagrama p-θ y diagrama logarítmico

El mismo registro se puede presentar de otras formas, cada una útil para algo
distinto.

- **Diagrama p-θ (presión frente a ángulo de cigüeñal).** Es la forma en que se
  captura la señal. Permite ver **cuándo** ocurre cada cosa: el ángulo del
  pico de presión, el inicio de la combustión, el momento de apertura de las
  válvulas. Como orientación en motores de encendido provocado, un pico de
  presión situado unos 10 a 15 grados después del PMS suele corresponder a una
  fase de combustión bien ajustada; el valor exacto depende del motor.
- **Diagrama p-V.** Convierte el ángulo en volumen y es el que da áreas, y por
  tanto trabajo, IMEP y potencia.
- **Diagrama log p - log V.** Con escalas logarítmicas, la compresión y la
  expansión sin combustión se vuelven casi rectas. La pendiente de la recta de
  compresión es el exponente politrópico n. Para una compresión sana n queda
  en un valor cercano al del gas con poca pérdida de calor; si la pendiente es
  claramente menor, el gas se está perdiendo por válvulas o anillos, o hay
  una transferencia de calor excesiva. Es una forma muy directa de revisar el
  sellado sin desmontar.

## Del ciclo ideal al ciclo real

Los ciclos teóricos (Otto para encendido provocado, Diésel y mixto para
compresión) son la referencia, pero el diagrama real se aparta de ellos por
razones que el propio diagrama muestra:

- La combustión no es instantánea: el pico es redondeado y no una línea
  vertical.
- Hay pérdidas de calor hacia las paredes, más notorias en la expansión.
- Las válvulas abren antes del punto muerto inferior y cierran después del
  superior, por lo que el lazo de bombeo se deforma.
- El fluido no es un gas ideal ni de composición constante.

La relación entre el trabajo real y el del ciclo ideal es una medida de lo bien
aprovechado que está el combustible. Una diferencia grande de forma respecto
del diagrama de referencia es la primera pista de algo mal ajustado.

## Estabilidad y velocidad de combustión

Además de las áreas, de la curva de presión se derivan dos parámetros muy
usados en calibración:

- **Variación ciclo a ciclo (COV de la IMEP):** desviación típica de la IMEP
  dividida por su media, con muchos ciclos consecutivos. Valores bajos indican
  combustión estable; cuando sube, el motor se vuelve áspero y aparecen fallas
  de encendido. En motores de gasolina se suele vigilar que se mantenga por
  debajo de unos pocos por ciento.
- **Velocidad de aumento de presión (dp/dθ):** una subida muy brusca después
  del PMS indica combustión violenta, con más ruido y esfuerzo sobre
  cojinetes y biela. En un diésel, un retraso de encendido largo produce un
  salto de presión pronunciado (el golpeteo característico).

Estos datos se usan para decidir el avance de inyección o de encendido,
comprobar un inyector sospechoso o evaluar un cambio de combustible.

## Errores frecuentes al interpretar un diagrama

- Confundir IMEP bruta y neta, o comparar con la IMEP de otro fabricante sin
  confirmar la definición.
- Un PMS mal referido: desplaza la curva y falsea el área.
- Un transductor con deriva térmica o mal calibrado: el pico y la compresión
  dejan de ser comparables con otras mediciones.
- Promediar pocos ciclos: la curva promedio engaña si hay mucha dispersión.
- Concluir sobre un cilindro con una sola medición, sin comparar con los
  demás cilindros en las mismas condiciones de carga y régimen.
