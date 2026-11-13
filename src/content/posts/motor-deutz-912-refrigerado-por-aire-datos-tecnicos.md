---
title: "Motor Deutz FL 912 refrigerado por aire: placa, ciclo y datos técnicos"
published: 2026-11-13
draft: false
featured: false
description: "Cómo leer la placa y la designación de los motores Deutz FL 912 y FL 413 refrigerados por aire, numeración de cilindros, ciclo de 4 tiempos, ventajas del aire y tabla de datos."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "deutz"
  - "motor-refrigerado-por-aire"
  - "motor-diesel"
  - "fl-912"
  - "fl-413"
  - "datos-tecnicos"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/motores-diesel/motor-deutz-912-refrigerado-por-aire-datos-tecnicos
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Qué significa la designación F6L 912 W en un motor Deutz?"
    a: "Según el curso de capacitación técnica de Deutz, la F indica motor pequeño y rápido, el 6 es la cantidad de cilindros, la L señala refrigeración por aire, el 9 es la serie, el 12 es la carrera del pistón en centímetros (120 mm) y la W indica combustión en dos etapas. En la familia 413 aparecen además la F de serie mejorada, la B final para motor compensado para altura y la B inicial para turboalimentación. Confirma siempre la designación exacta con la placa y el manual del motor."
  - q: "¿Hacia dónde gira un motor Deutz y cómo se numeran los cilindros?"
    a: "Mirando el motor desde el volante, que es el extremo por donde entrega la potencia, el giro es hacia la izquierda (antihorario). El cilindro número 1 es el más cercano al volante y, en el lado izquierdo, se numera hacia el lado ventilador. En un motor en V se completa primero una hilera y luego se continúa con la otra. Este criterio sigue la lógica de ISO: el observador se ubica en el extremo de salida de potencia."
  - q: "¿Cuándo se regula el juego de válvulas de un FL 912?"
    a: "El curso indica regular solo con el motor frío, con al menos 7 horas de parada, porque el juego cambia mientras el bloque se enfría. En un motor nuevo o reparado, la primera regulación se hace a las 50 horas de funcionamiento y luego se controla cada 500 horas. Para la serie 912 el curso da 0,15 mm tanto en admisión como en escape, valor que debes verificar en el manual del motor específico."
  - q: "¿Qué ventajas y desventajas tiene la refrigeración por aire frente a la líquida?"
    a: "Elimina radiador, mangueras, bomba de agua y anticongelante, por lo que no hay fugas de refrigerante ni riesgo de congelamiento, y el motor se calienta rápido. A cambio, depende de que las aletas estén limpias, de que el ventilador y su transmisión funcionen y de que el aire que entra no esté recalentado. Es menos tolerante al polvo acumulado y a las instalaciones que recirculan aire caliente, y el control de temperatura es menos fino que con un termostato y refrigerante."
  - q: "¿Qué presión de aceite debe tener un Deutz F6L 912 en caliente?"
    a: "Según la tabla de datos generales del curso, medida con el aceite a 90 °C, el valor normal es de unos 2 bar a 650 rpm y de 4,5 a 6 bar a 2.300-2.500 rpm, con un mínimo de 0,5 bar en ralentí. Son valores de un curso de capacitación para la familia 912: la presión admisible de tu motor la define el manual de operación oficial de Deutz para su modelo y número de serie."
sources:
  - title: "Curso de capacitación técnica: motor Deutz (Deutz Service Training, FL 912 W y FL 413 FW/B) — Maquinarias Pesadas"
    url: "https://www.maquinariaspesadas.org/blog/167-curso-capacitacion-tecnica-motor-deutz"
related:
  - guia-mantenimiento-afinamiento-motores-diesel
  - clasificaciones-api-sae-iso
  - funciones-y-estructura-de-las-valvulas-de-motor
---

Un motor diésel que se enfría con aire parece, a primera vista, un
motor "al que le falta algo": no tiene radiador, ni mangueras, ni bomba
de agua. Esa ausencia es justamente su razón de ser. Los motores Deutz
de las familias **FL 912** y **FL 413** (con sus variantes B y F) se han
usado durante décadas en generadores, compresores, cargadores,
volquetes y equipos de minería subterránea, y siguen vivos en muchos
talleres de Latinoamérica.

Esta guía organiza lo que enseña el curso de capacitación técnica de
Deutz sobre estos motores: cómo leer la designación y la placa, cómo se
numeran los cilindros, qué ocurre en el ciclo de cuatro tiempos, por qué
importa tanto el flujo de aire de refrigeración y qué datos de
referencia conviene tener a mano.

> **Advertencia importante.** Todos los valores de este artículo
> provienen de un curso de capacitación (documento de formación, no
> manual de servicio). Para un trabajo real, el **manual de operación y
> servicio oficial de Deutz para el motor exacto**, según modelo y
> número de serie, siempre prevalece. Los datos sirven para entender y
> comparar, no para sustituir la especificación del fabricante.

## Por qué existe el motor Deutz refrigerado por aire

El curso resume una cronología breve: el primer motor de cuatro
tiempos es muy anterior, el sistema de enfriamiento por aire se
ensayó desde finales de los años treinta y la producción masiva del
primer diésel Deutz refrigerado por aire (el F4L 514) arrancó en 1944.
La idea de fondo no cambió: en lugar de transferir el calor del
cilindro a un líquido, se lo entrega **directamente al aire** mediante
superficies aleteadas fundidas en cada cilindro y cada culata, y un
ventilador impulsa el aire sobre esas aletas.

Esa arquitectura explica dos rasgos que verás en campo: los cilindros
son **individuales** (cada uno con su culata y sus aletas, no un bloque
monolítico con camisas de agua) y el ventilador forma parte del propio
motor, accionado desde el cigüeñal.

## Cómo leer la designación del motor

El curso desglosa el nombre del motor letra por letra. Es útil porque
el código dice, sin abrir nada, qué tipo de motor tienes delante.

### Ejemplo 1: F6L 912 W

| Posición | Significado según el curso |
|---|---|
| **F** | Motor pequeño y rápido |
| **6** | Cantidad de cilindros |
| **L** | Refrigeración por aire |
| **9** | Serie |
| **12** | Carrera del pistón en cm (120 mm) |
| **W** | Combustión en dos etapas |

La carrera de 12 cm coincide con la tabla de datos generales del curso,
donde la serie 912 figura con diámetro de cilindro y carrera de
100/120 mm. Esa coincidencia es una buena comprobación cruzada: el
número de la designación y el dato de la tabla se confirman entre sí.

### Ejemplo 2: F10L 413 FWB y BF12L 413 FW

En la serie 413 se añaden letras. El curso muestra que:

- **413**: serie 4, carrera de 13 cm (130 mm, igual que el dato de
  125/130 mm de la tabla).
- **F** (antes de la W): serie mejorada.
- **W**: combustión en dos etapas.
- **B final** (FWB): motor compensado para altura.
- **B inicial** (BF12L): motor con turboalimentación.

Un detalle práctico: "combustión en dos etapas" describe un motor de
cámara de combustión dividida. Si quieres entender qué implica eso en la
inyección y en el consumo, revisa
[cámara de combustión diésel: inyección directa e indirecta](/posts/camara-combustion-diesel-inyeccion-directa-indirecta/).

## La placa de identificación: qué dice y por qué importa

La placa del motor concentra datos que el taller y el distribuidor
necesitan para pedir el repuesto correcto. Según el curso, incluye:

1. **Modelo** del motor (la designación que acabamos de decodificar).
2. **Número de serie**, que además suele estar estampado en el
   cárter del cigüeñal. Es la clave para repuestos y para las
   instrucciones de ensamble.
3. **Potencia neta al volante**, medida con el ventilador conectado.
4. **Velocidad nominal** en rpm.
5. **Sincronización de la inyección** antes del punto muerto superior,
   con su tolerancia.
6. **Absorción adicional de potencia**: la potencia extra que consume
   el ventilador cuando se instala un enfriador de aceite hidráulico o
   un posenfriador.
7. Un espacio libre para datos como año de fabricación o código del
   cliente.

El punto 6 es el que más se ignora. En un motor refrigerado por aire el
ventilador consume potencia real, y si sobre la máquina se añade un
enfriador de aceite hidráulico, el ventilador debe mover más aire y
robar más caballos. Dos motores "iguales" pueden entregar potencia útil
distinta según lo que lleven instalado.

El curso también muestra una **placa MSHA**, para motores certificados
para trabajo en minería subterránea. Esa placa cumple los requisitos de
la autoridad de seguridad minera de Estados Unidos y prevalece sobre
otras placas y datos publicados. Si compras o recibes un motor usado de
mina, no la retires ni la reemplaces.

### Velocidad nominal y velocidad en vacío

La velocidad nominal es aquella a la que el motor entrega su máxima
potencia neta al volante, y la velocidad en vacío es mayor porque el
regulador solo se abre al subir la carga. El curso da ejemplos:

| Aplicación | rpm nominal | Incremento | rpm en vacío |
|---|---|---|---|
| Generador | 1.500 | 4 % | 1.560 |
| Industrial | 2.300 | 7 % | 2.461 |
| Automotriz | 2.500 | 12 % | 2.800 |
| Pala o volquete | 2.300 | 7 a 10 % | 2.461 a 2.530 |

Observa que el incremento va de 3 a 14 % según el curso, y que las
palas y volquetes usan 2.300 rpm nominales. Un generador, en cambio,
necesita 1.500 rpm para mantener la frecuencia, de ahí el regulador
más estricto.

## Giro del motor y numeración de cilindros

En maniobras de ajuste, sincronización o desmontaje, equivocarse de
lado cuesta tiempo. Por eso la norma ISO fija una convención, que el
curso explica así: **el observador se coloca mirando el extremo por el
que el motor entrega la potencia**, normalmente el volante.

Desde ahí:

- **Sentido de giro**: hacia la izquierda, es decir, antihorario. Es el
  que se indica en la tabla de datos como "izq.".
- **Cilindro n.º 1**: el más cercano al observador, o sea, al volante.
  Los siguientes se numeran en orden hacia el extremo libre.
- **Lado ventilador**: el extremo libre, el más alejado del observador.
- **En línea**: Deutz llama al lado izquierdo "descarga de aire" y al
  derecho "lado de servicio".
- **En V**: la numeración empieza a la izquierda del volante, recorre
  una hilera completa (por ejemplo, del 1 al 6 en un V12) y continúa en
  la hilera derecha (7 al 12).

<figure class="diagram">
<svg viewBox="0 0 800 270" role="img" aria-label="Vista superior esquemática de un motor en línea de seis cilindros: volante a la izquierda, cilindros numerados del 1 al 6 hacia el lado ventilador a la derecha, y giro antihorario visto desde el volante" style="width:100%;height:auto;font-family:inherit">
<rect x="0" y="0" width="800" height="270" rx="12" fill="#f1f5f9"/>
<text x="400" y="38" text-anchor="middle" font-size="14" fill="#1f2937">Motor en línea de 6 cilindros, vista superior. El cilindro 1 es el más cercano al volante.</text>
<rect x="44" y="92" width="26" height="86" rx="6" fill="#cbd5e1" stroke="#1f2937" stroke-width="3"/>
<rect x="70" y="106" width="580" height="58" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="3"/>
<g fill="#fde68a" stroke="#1f2937" stroke-width="2">
<rect x="92" y="112" width="64" height="46" rx="4"/>
<rect x="184" y="112" width="64" height="46" rx="4"/>
<rect x="276" y="112" width="64" height="46" rx="4"/>
<rect x="368" y="112" width="64" height="46" rx="4"/>
<rect x="460" y="112" width="64" height="46" rx="4"/>
<rect x="552" y="112" width="64" height="46" rx="4"/>
</g>
<g font-size="22" font-weight="700" fill="#1f2937" text-anchor="middle">
<text x="124" y="143">1</text>
<text x="216" y="143">2</text>
<text x="308" y="143">3</text>
<text x="400" y="143">4</text>
<text x="492" y="143">5</text>
<text x="584" y="143">6</text>
</g>
<rect x="650" y="116" width="40" height="38" rx="19" fill="#cbd5e1" stroke="#1f2937" stroke-width="3"/>
<text x="57" y="206" text-anchor="middle" font-size="14" fill="#1f2937">Volante</text>
<text x="670" y="206" text-anchor="middle" font-size="14" fill="#1f2937">Lado ventilador</text>
<path d="M57 86 C57 70 70 62 84 62" fill="none" stroke="#b91c1c" stroke-width="3"/>
<path d="M80 54 L96 62 L80 70 Z" fill="#b91c1c"/>
<text x="110" y="68" font-size="13" fill="#1f2937">Giro hacia la izquierda visto desde el volante</text>
<text x="400" y="248" text-anchor="middle" font-size="13" fill="#1f2937">Orden de encendido del F6L 912 según el curso: 1-5-3-6-2-4</text>
</svg>
<figcaption>Numeración de cilindros de un motor en línea: se cuenta desde el volante hacia el lado ventilador. Ilustración propia, esquemática.</figcaption>
</figure>

Esta numeración también se aplica al orden de encendido, que según la
tabla de datos generales de la serie 912 es:

| Motor | Orden de encendido (curso) |
|---|---|
| F3L 912 | 1-2-3 |
| F4L 912 | 1-3-4-2 |
| F5L 912 | 1-2-4-5-3 |
| F6L 912 | 1-5-3-6-2-4 |

## El ciclo de cuatro tiempos aplicado a estos motores

Para que el diésel encienda necesita tres cosas: aire, combustible en el
momento justo y una temperatura de ignición, que aquí la da la
compresión (no hay bujías). El curso explica que el aire comprimido
alcanza aproximadamente **350 °C**, suficiente para inflamar el
combustible pulverizado.

El ciclo completo se cumple en **dos vueltas del cigüeñal**:

1. **Admisión**: baja el pistón con la válvula de admisión abierta. La
   inercia del aire permite que siga entrando incluso cuando el pistón
   ya empezó a subir.
2. **Compresión**: se cierra la admisión, el pistón sube y el aire
   atrapado se calienta.
3. **Trabajo**: poco antes del punto muerto superior (PMS) se inyecta
   el combustible. La mezcla se enciende y empuja el pistón hacia abajo.
4. **Escape**: al acercarse al punto muerto inferior se abre la válvula
   de escape y el pistón barre los gases.

Un matiz que el curso destaca: la ignición ocurre **antes** del PMS, es
decir, mientras el pistón todavía sube. La combustión "frena" el pistón
un instante y el volante, con su inercia, mantiene el movimiento. Por
eso el avance de inyección es un dato tan crítico (lo verás en la tabla
de datos).

### Sincronización de válvulas: por qué se abren "antes" y se cierran "después"

El eje de levas gira a **la mitad de la velocidad** del cigüeñal, y las
válvulas abren y cierran una vez cada dos revoluciones. Los tiempos no
coinciden con los puntos muertos, y hay una razón física:

- La **admisión abre antes del PMS**, aprovechando la inercia de los
  gases que salen por el escape, y **cierra después del PMI**, porque la
  inercia del aire que entra sigue llenando el cilindro.
- El **escape abre antes del PMI**, cuando queda presión residual que
  inicia la salida de los gases, y **cierra después del PMS**.

El momento en que ambas válvulas están ligeramente abiertas se llama
**cruce de válvulas**. Es la posición de referencia que usa Deutz para
regular el juego: se lleva el cilindro 1 al cruce y se ajustan las
válvulas que indica el diagrama; luego se gira el cigüeñal 360° y se
ajustan las restantes. Para profundizar en la mecánica de las válvulas,
consulta [funciones y estructura de las válvulas de motor](/posts/funciones-y-estructura-de-las-valvulas-de-motor/).

### Regulación de válvulas: tres reglas del curso

| Regla | Dato del curso |
|---|---|
| Condición del motor | Frío, con un mínimo de 7 horas detenido |
| Primera regulación (motor nuevo o reparado) | A las 50 horas de funcionamiento |
| Intervalo de control | Cada 500 horas |
| Criterio de ajuste | El calibre debe deslizar con un leve arrastre entre balancín y cola de válvula |

El requisito de las 7 horas no es capricho. El curso incluye una gráfica
que muestra cómo varía la holgura de las válvulas durante el
enfriamiento tras detener el motor: el valor medido a las 0 horas no es
el mismo que a las 7. Regular con el motor tibio produce un juego mal
calibrado, que luego aparece como válvulas demasiado apretadas (riesgo
de quemarlas) o demasiado holgadas (ruido y mala admisión).

## Refrigeración por aire: ventajas y límites

Aquí está la parte más importante para quien decide qué hacer con un
motor de estos. La comparación con la refrigeración líquida es general
(no es un dato del curso) y conviene entenderla en ambos sentidos.

| Aspecto | Refrigeración por aire | Refrigeración líquida |
|---|---|---|
| Componentes | Ventilador, aletas, conductos | Radiador, bomba, mangueras, termostato, anticongelante |
| Fugas de refrigerante | No existen | Posibles en mangueras, empaquetaduras y radiador |
| Congelamiento | Sin riesgo | Requiere anticongelante en clima frío |
| Calentamiento inicial | Rápido | Depende del termostato |
| Peso y simplicidad | Menor, menos puntos de falla | Mayor |
| Sensibilidad al polvo | Alta: aletas tapadas = sobrecalentamiento | Media: se ensucia el radiador |
| Control de temperatura | Menos fino | Más fino con termostato |
| Ruido | Más alto, por el ventilador | Menor |
| Dependencia crítica | Correa o transmisión del ventilador | Bomba de agua y correa |

En resumen: el aire elimina toda una familia de averías (fugas,
corrosión interna, empaquetaduras de camisas), pero concentra el riesgo
en **cuatro puntos**: aletas limpias, ventilador íntegro, transmisión
del ventilador en buen estado y entrada de aire fresco sin
restricciones.

<figure class="diagram">
<svg viewBox="0 0 800 300" role="img" aria-label="Esquema del flujo de aire de refrigeración: el ventilador toma aire ambiente, lo envía a presión sobre las aletas de los cilindros y el aire caliente sale por el lado contrario" style="width:100%;height:auto;font-family:inherit">
<rect x="0" y="0" width="800" height="300" rx="12" fill="#f1f5f9"/>
<text x="90" y="32" text-anchor="middle" font-size="14" fill="#1f2937">Aire ambiente</text>
<path d="M90 42 V84" fill="none" stroke="#0369a1" stroke-width="4"/>
<path d="M80 78 L90 94 L100 78 Z" fill="#0369a1"/>
<circle cx="90" cy="150" r="52" fill="#ffffff" stroke="#1f2937" stroke-width="3"/>
<path d="M90 150 L90 106 M90 150 L134 150 M90 150 L90 194 M90 150 L46 150" fill="none" stroke="#1f2937" stroke-width="5" stroke-linecap="round"/>
<text x="90" y="232" text-anchor="middle" font-size="14" fill="#1f2937">Ventilador</text>
<path d="M148 150 H322" fill="none" stroke="#0369a1" stroke-width="6"/>
<path d="M318 138 L336 150 L318 162 Z" fill="#0369a1"/>
<text x="240" y="128" text-anchor="middle" font-size="14" fill="#1f2937">Aire frío a presión</text>
<rect x="340" y="66" width="290" height="168" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="3"/>
<g fill="#fde68a" stroke="#1f2937" stroke-width="2">
<rect x="356" y="82" width="74" height="136" rx="4"/>
<rect x="446" y="82" width="74" height="136" rx="4"/>
<rect x="536" y="82" width="74" height="136" rx="4"/>
</g>
<g stroke="#1f2937" stroke-width="2">
<path d="M356 100 H430 M356 116 H430 M356 132 H430 M356 148 H430 M356 164 H430 M356 180 H430 M356 196 H430"/>
<path d="M446 100 H520 M446 116 H520 M446 132 H520 M446 148 H520 M446 164 H520 M446 180 H520 M446 196 H520"/>
<path d="M536 100 H610 M536 116 H610 M536 132 H610 M536 148 H610 M536 164 H610 M536 180 H610 M536 196 H610"/>
</g>
<text x="393" y="256" text-anchor="middle" font-size="13" fill="#1f2937">Cilindro 1</text>
<text x="483" y="256" text-anchor="middle" font-size="13" fill="#1f2937">Cilindro 2</text>
<text x="573" y="256" text-anchor="middle" font-size="13" fill="#1f2937">Cilindro 3</text>
<path d="M636 120 H690" fill="none" stroke="#b91c1c" stroke-width="5"/>
<path d="M686 110 L702 120 L686 130 Z" fill="#b91c1c"/>
<path d="M636 180 H690" fill="none" stroke="#b91c1c" stroke-width="5"/>
<path d="M686 170 L702 180 L686 190 Z" fill="#b91c1c"/>
<text x="712" y="146" font-size="13" fill="#1f2937">Aire</text>
<text x="712" y="164" font-size="13" fill="#1f2937">caliente</text>
<text x="400" y="286" text-anchor="middle" font-size="13" fill="#1f2937">Si el aire caliente vuelve a la entrada del ventilador, el motor se recalienta.</text>
</svg>
<figcaption>Flujo simplificado del aire de refrigeración: el ventilador impulsa aire frío sobre las aletas de cada cilindro y el aire caliente debe salir sin regresar a la entrada. Ilustración propia, no a escala y con tres cilindros por claridad.</figcaption>
</figure>

### Qué exige el curso del flujo de aire

El curso dedica varias páginas a algo que en la práctica se olvida: no
basta con que el ventilador gire, **el aire debe entrar y salir bien**.

- **Sin restricciones a la entrada**: cualquier obstáculo (rejilla muy
  cerrada, un conducto mal armado, un panel pegado) reduce el caudal.
- **Bordes salientes en el conducto**: los ventiladores de refrigeración
  aspiran el aire sobre todo por su zona periférica, por lo que los
  cantos vivos en los conductos de entrada aumentan la resistencia, hacen
  perder aire y elevan notablemente el ruido. La envolvente del
  ventilador trae un radio de entrada diseñado para esto.
- **Recirculación**: si el aire caliente que sale del motor vuelve a la
  entrada del ventilador, o si se aspira aire caliente para la
  combustión, el motor se calienta de más. El curso muestra ejemplos de
  instalaciones incorrectas (aberturas frontales por donde sale aire
  caliente hacia el ventilador) frente a instalaciones correctas, con el
  lado frontal cerrado para que solo se aspire aire fresco.
- **Temperatura de entrada**: no debe superar en más de unos 10 °C la
  temperatura ambiente.
- **Presión del aire de refrigeración**: se puede medir con una columna
  de agua conectada a una perforación de 2 mm en el centro de la tapa
  superior. El valor normal indicado es de **110 mm de columna de agua**.

Esas dos mediciones (temperatura de entrada y presión) convierten una
sensación vaga ("parece que calienta") en un dato comparable. Si la
presión es baja, mira primero correa del ventilador, aletas obstruidas
y estado del conducto, antes de sospechar de componentes internos.

### Presión del cárter como indicador de desgaste

Otra medición simple del curso: la **presión del cárter** se mide con una
columna de agua conectada a la boca de llenado de aceite, con el motor
caliente, a máximas rpm y plena carga. El valor normal es de **60 mm de
columna de agua**. Una lectura mayor indica más gases de fuga (blow-by)
y, por tanto, desgaste de cilindros, pistones y anillos. Es una prueba
barata que orienta antes de desarmar.

### Checklist de campo para un motor refrigerado por aire

1. Revisar que las aletas de cilindros y culatas estén limpias, sin
   barro compactado ni hojas, con el motor frío.
2. Confirmar que la correa o transmisión del ventilador esté íntegra y
   correctamente tensada.
3. Verificar que no haya objetos o paneles que restrinjan la entrada de
   aire al ventilador.
4. Comprobar que los deflectores y las tapas que guían el aire estén
   completos y bien colocados. Un deflector faltante deja una zona de
   cilindro sin flujo.
5. Revisar que el aire caliente no se recircule hacia la entrada (sellos
   frontales, tapas de capot).
6. Medir la presión del aire de refrigeración y la temperatura de
   entrada cuando haya dudas.
7. Vigilar el nivel y la presión de aceite: en estos motores el aceite
   también retira calor, así que un aceite degradado o bajo agrava
   cualquier problema térmico. Para elegirlo, revisa
   [clasificaciones API, SAE e ISO de aceites](/posts/clasificaciones-api-sae-iso/).

## Datos generales: tabla de referencia del curso

Los siguientes valores están transcritos de la hoja de "Datos generales
de motores" del curso (familias FL 912 W y FL 413 FW/B). Son **datos de
un curso de capacitación**; verifica cada valor en el manual oficial de
Deutz para tu motor.

### Características generales

| Dato | FL 912 W | FL 413 FW/B |
|---|---|---|
| Cilindrada | F3L 2.827 cc; F4L 3.770 cc; F5L 4.712 cc; F6L 5.655 cc | F6L 9.272 cc; F8L 12.763 cc; F10L 15.953 cc; F12L 19.144 cc |
| Ciclo | 4 tiempos | 4 tiempos |
| Diámetro / carrera | 100 / 120 mm | 125 / 130 mm |
| Peso sin volante ni cubrevolante | F3L 270 kg; F4L 300 kg; F5L 380 kg; F6L 410 kg | F6L 660 kg; F8L 830 kg; F10L 990 kg; F12L 1.120 kg |
| Sentido de giro visto desde el volante | Izquierda | Izquierda |
| Régimen mínimo en vacío | 650 a 700 rpm | 600 rpm |
| Relación de compresión | 19:1 | 19,5:1 |
| Presión de compresión | 25 a 30 bar | 25 a 35 bar |
| Pérdida de compresión | Aprox. 10 % cada 1.000 msnm | Aprox. 10 % cada 1.000 msnm |
| Juego de válvulas en frío (admisión / escape) | 0,15 / 0,15 mm | 0,20 / 0,30 mm |

Una cuenta rápida que muestra la coherencia de la tabla: la cilindrada de
un cilindro de la serie 912 es π/4 × (10 cm)² × 12 cm ≈ 942 cm³, y
multiplicada por 3, 4, 5 y 6 cilindros da 2.827, 3.770, 4.712 y 5.655 cc,
exactamente los valores del curso.

La pérdida de compresión con la altitud tiene consecuencias directas
para quien opera en los Andes: a 3.000 msnm el motor arranca con
sensiblemente menos presión al final de la compresión que a nivel del
mar, lo que complica el arranque en frío. Por eso estos motores prevén un
**aumento del avance de inyección con la altura**, como verás a
continuación.

### Inyección

| Dato | FL 912 W | FL 413 FW/B |
|---|---|---|
| Presión de apertura, tobera nueva | 120 + 8 bar | 135 + 8 bar |
| Presión de apertura, tobera usada | 115 + 8 bar | 125 + 8 bar |
| Comienzo de inyección, hasta 2.300 rpm sin graduador de avance | F3/4L: 22°; F5/6L: 24° antes del PMS | 14° |
| Comienzo de inyección, 2.300 a 2.800 rpm con graduador de avance | F3/4L: 18°; F5/6L: 20° | 14° |
| Aumento de avance por cada 1.000 msnm | 0,5° | 1° |
| Presión de combustible a la entrada de la bomba de inyección | 0,3 a 0,5 bar | 1 a 2 bar |

Cómo interpretar la fila del avance: un avance mayor adelanta el
comienzo de la inyección respecto del PMS. Con aire más enrarecido (más
altitud) la combustión es más lenta, así que se compensa con más grados
de avance. El ajuste de la bomba de inyección y la inspección de los
inyectores se detallan en
[sistema de combustible Deutz: bomba e inyectores](/posts/sistema-combustible-deutz-912-bomba-inyectores/).

### Lubricación y holguras

| Dato | FL 912 W | FL 413 FW/B |
|---|---|---|
| Presión de aceite a 90 °C, mínima en ralentí | 0,5 bar a 650 rpm | 1,0 bar a 600 rpm |
| Presión de aceite normal en ralentí | 2 bar a 650 rpm | aprox. 1,2 a 2 bar a 600 rpm (lectura parcial; verificar) |
| Presión de aceite normal a régimen alto | 4,5 a 6 bar a 2.300-2.500 rpm | 4,5 a 5 bar a 2.200-2.500 rpm |
| Juego axial del cigüeñal, normal | 0,15 a 0,31 mm | 0,17 a 0,31 mm |
| Juego axial del cigüeñal, límite | 0,4 mm | 0,6 mm |

### Pares de apriete (Nm)

| Punto | FL 912 W | FL 413 FW/B |
|---|---|---|
| Tapa de válvulas | 10 a 15 | 12 a 15 |
| Soporte de balancines | 28 a 30 | 30 + 30° + 30° + 30° (apriete angular) |
| Inyector | 100 a 110 | 100 a 110 |
| Tuerca central del acople de la bomba de inyección | 60 a 70 | 60 a 70 |
| Pernos del acople de la bomba al piñón de accionamiento | 30 | 50 |
| Perno central del ventilador | 30 + 90° | sin dato en el curso |

Tres observaciones sobre los apretes. Primero, varios puntos combinan un
par inicial con un **ángulo final**: el par inicial asienta la unión y el
giro adicional controla la carga de forma más repetible que una sola
lectura de llave. Segundo, si el manual indica "tornillo nuevo" para una unión con
ángulo final, se cambia y no se reutiliza.
Tercero, un perno de ventilador mal apretado no es un detalle menor: el
ventilador es la bomba de refrigerante de todo el motor.

Para un panorama más amplio de mantenimiento y puesta a punto de
motores diésel, no solo Deutz, revisa la
[guía de mantenimiento y afinamiento de motores diésel](/posts/guia-mantenimiento-afinamiento-motores-diesel/).
Los criterios de aceite, compresión y culata específicos de estos
motores los desarrolla
[mantenimiento del motor Deutz: aceite, compresión y culata](/posts/mantenimiento-motor-deutz-aceite-compresion-culata/).

## Dónde se encuentran estos motores en Latinoamérica

Los datos del curso apuntan a las aplicaciones típicas: generadores,
industria general, equipos automotrices y **palas y volquetes** (de
hecho, el curso incluye una fila específica para "pala o volquete"). A
eso se suma la minería subterránea, donde existe la placa MSHA. En
campo, la experiencia habitual en la región (referencial, depende del
país y del parque local) incluye:

- **Grupos electrógenos** de potencia media y baja, por su simplicidad y
  porque no necesitan agua.
- **Compresores portátiles y equipos de obra**, trabajando en zonas
  sin suministro de agua o con riesgo de heladas.
- **Cargadores y equipos compactos** de construcción y de canteras.
- **Maquinaria agrícola** y tractores de origen europeo.
- **Equipo minero subterráneo** certificado.

El motivo es siempre el mismo: operación en zonas de altura, con
heladas o sin agua confiable, donde un sistema de refrigeración líquida
añade riesgos y mantenimiento. A cambio, en minas y canteras polvorientas
la limpieza de aletas y del filtro de aire pasa a ser la rutina
principal, y la compensación por altitud (avance de inyección y potencia
disponible) debe tenerse en cuenta.

## Resumen

El Deutz FL 912 y su hermano mayor FL 413 se entienden mejor si piensas
en **aire como único refrigerante**: todo el diseño gira en torno a mover
suficiente aire frío, limpio y sin recirculación sobre cada cilindro. La
designación te dice cilindros, serie y carrera, la placa te da potencia,
rpm y avance, y las convenciones ISO (giro izquierdo, cilindro 1 junto
al volante) evitan errores de lectura en el taller. Con los datos de
referencia del curso (presión de inyección, avance, presión de aceite,
juego de válvulas, pares) puedes hacer un diagnóstico inicial con
criterio, siempre contrastando contra el manual de operación oficial de
Deutz.

Si quieres seguir con el tema del combustible y la inyección, el
siguiente paso es el
[sistema de combustible Deutz: bomba e inyectores](/posts/sistema-combustible-deutz-912-bomba-inyectores/). Para el ciclo y la cámara de combustión,
lee [cámara de combustión diésel: inyección directa e indirecta](/posts/camara-combustion-diesel-inyeccion-directa-indirecta/) y, para conocer el
sistema de admisión y escape, la
[guía de combustible, admisión y escape en motores diésel](/posts/guia-combustible-admision-escape-motores-diesel/).

**Fuentes:** Curso de capacitación técnica: motor Deutz (Deutz Service
Training, FL 912 W y FL 413 FW/B), publicado en
[Maquinarias Pesadas](https://www.maquinariaspesadas.org/blog/167-curso-capacitacion-tecnica-motor-deutz).
Los valores numéricos proceden de ese curso y deben contrastarse con el
manual oficial de operación del motor.
