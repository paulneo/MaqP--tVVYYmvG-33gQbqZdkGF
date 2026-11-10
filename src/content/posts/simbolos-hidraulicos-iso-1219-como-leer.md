---
title: "Símbolos hidráulicos ISO 1219: cómo leer un esquema hidráulico"
published: 2026-11-09
draft: false
featured: false
description: "Guía para interpretar la simbología hidráulica ISO 1219-1: líneas, bombas, cilindros, válvulas direccionales, de presión y caudal, con un ejemplo resuelto paso a paso."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "simbolos-hidraulicos"
  - "iso-1219"
  - "esquemas-hidraulicos"
  - "valvula-direccional"
  - "sistema-hidraulico"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/sistemas-hidraulicos/simbolos-hidraulicos-iso-1219-como-leer
author: redaccion-tecnica
reviewedBy: redaccion-tecnica
aiAssisted: true
faq:
  - q: "¿Qué significa un triángulo relleno en un símbolo hidráulico?"
    a: "Indica que el fluido de trabajo es un líquido (aceite). En la norma ISO 1219-1 el triángulo sólido representa energía hidráulica y el triángulo hueco, energía neumática. La punta del triángulo señala el sentido del flujo: hacia afuera del círculo en una bomba y hacia adentro en un motor. Es la primera pista para distinguir un esquema hidráulico de uno neumático."
  - q: "¿En qué posición está dibujada una válvula direccional en el esquema?"
    a: "En su posición de reposo o inicial, es decir, la que adopta cuando no hay señal de mando. Las conexiones externas (P, T, A, B) se dibujan sobre esa caja. Las demás cajas muestran lo que ocurre cuando el carrete se desplaza y se leen imaginando que se deslizan hasta quedar alineadas con las conexiones."
  - q: "¿Cómo distingo una válvula limitadora de una reductora de presión?"
    a: "Por la posición de la flecha dentro de la caja y por el origen del piloto. En la limitadora la flecha está desplazada (normalmente cerrada), el piloto se toma de la entrada y la salida va a tanque. En la reductora la flecha está alineada con las conexiones (normalmente abierta), el piloto se toma de la salida y se agrega una línea de drenaje externo."
  - q: "¿Los esquemas de Caterpillar, Komatsu o JCB usan la misma simbología?"
    a: "La base es la misma (ISO 1219-1), pero cada fabricante añade códigos propios: colores de líneas, numeración de componentes, símbolos detallados con el cartucho dibujado y, en equipos antiguos, símbolos previos a la norma. Conviene revisar siempre la leyenda del manual de servicio antes de interpretar un plano."
  - q: "¿Un esquema hidráulico muestra la ubicación real de los componentes?"
    a: "No. El esquema funcional representa la función y las conexiones, no la forma, el tamaño ni la posición física. Para ubicar un componente en la máquina se necesita el plano de instalación o el diagrama de mangueras del manual de servicio. Por eso un esquema sirve para entender y diagnosticar, y el plano físico para localizar y reparar."
sources:
  - title: "Manual de símbolos hidráulicos — MaquinariasPesadas.org"
    url: "https://www.maquinariaspesadas.org/blog/1142-manual-simbolos-hidraulicos"
  - title: "ISO 1219-1: Fluid power systems and components — Graphical symbols and circuit diagrams — Part 1: Graphical symbols for conventional use and data-processing applications"
    url: "https://www.iso.org/"
  - title: "ISO 1219-2: Fluid power systems and components — Graphical symbols and circuit diagrams — Part 2: Circuit diagrams"
    url: "https://www.iso.org/"
related:
  - valvulas-hidraulicas-tipos-funcionamiento
  - circuitos-hidraulicos-abiertos-cerrados-diferencias
  - fallas-comunes-sistema-hidraulico-diagnostico
---

Un esquema hidráulico es el idioma común entre quien diseña una máquina y quien la repara. Con un solo vistazo cuenta **qué componentes existen, cómo se conectan y qué hace cada uno**, sin dibujar un solo tornillo. Pero ese idioma solo sirve si se conocen sus signos: la norma **ISO 1219-1** define los símbolos gráficos y la **ISO 1219-2** las reglas para armar los diagramas de circuito.

Esta guía es la referencia de símbolos del blog. Si buscas el análisis de un plano real, revisa el [análisis de planos hidráulicos de la motoniveladora 16M](/posts/analisis-planos-hidraulicos-16mcat/); aquí aprendes primero el alfabeto y después lo aplicas en un circuito completo.

## Qué representa realmente un símbolo

Un símbolo ISO 1219 describe la **función** de un componente, no su construcción. Dos bombas de engranajes de marcas distintas se dibujan igual, aunque por dentro y por fuera no se parezcan en nada. Tres ideas ordenan toda la lectura:

1. **Estado de reposo.** Todo se dibuja como está sin energía: sin presión, sin señal eléctrica y sin fuerza sobre palancas. Es la fotografía de la máquina apagada.
2. **Sin escala ni ubicación.** El tamaño del símbolo no dice nada sobre el tamaño de la pieza, ni el dibujo sobre dónde está montada.
3. **Flujo de abajo hacia arriba y de izquierda a derecha**, como convención de trazado (no es obligatorio, pero la mayoría de los esquemas la sigue).

Además hay cuatro marcas gráficas que se repiten en todos los símbolos:

| Marca | Significado |
| --- | --- |
| Triángulo sólido | Energía hidráulica (el triángulo hueco es neumático) |
| Flecha diagonal que atraviesa el símbolo | Componente variable o regulable |
| Zigzag | Resorte |
| Círculo | Componente rotativo o de medición |

## Líneas y componentes auxiliares

La **figura 1** reúne los símbolos que aparecen en cualquier circuito. Lo primero es distinguir los tipos de línea, porque definen qué función cumple cada conducto.

<figure class="diagram">
<svg viewBox="0 0 800 400" role="img" aria-labelledby="sh1-title" style="width:100%;height:auto;font-family:inherit" fill="currentColor" stroke="none" font-size="14" text-anchor="middle">
<title id="sh1-title">Símbolos ISO 1219 de líneas y componentes auxiliares: línea de trabajo, piloto, drenaje, manguera, cruce, unión, depósito, filtro, enfriador, manómetro, acumulador y motor eléctrico</title>
<defs>
<marker id="sh1-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10z" fill="currentColor"/></marker>
</defs>
<g transform="translate(100,50)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M-50,0 H50"/></g><text y="62">Línea de trabajo</text></g>
<g transform="translate(300,50)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M-50,0 H50" stroke-dasharray="12 6"/></g><text y="62">Línea piloto</text></g>
<g transform="translate(500,50)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M-50,0 H50" stroke-dasharray="3 5"/></g><text y="62">Línea de drenaje</text></g>
<g transform="translate(700,50)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M-50,0 H-20 A20,20 0 0 1 20,0 H50"/></g><text y="62">Manguera flexible</text></g>
<g transform="translate(100,180)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M-45,0 H45 M0,-32 V32"/></g><text y="62">Cruce sin conexión</text></g>
<g transform="translate(300,180)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M-45,0 H45 M0,-32 V32"/><circle cx="0" cy="0" r="4.5" fill="currentColor"/></g><text y="62">Unión de líneas</text></g>
<g transform="translate(500,180)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M-35,-22 V18 H35 V-22"/><path d="M0,-40 V8"/></g><text y="62">Depósito (tanque)</text></g>
<g transform="translate(700,180)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M-50,0 H-28 M28,0 H50 M0,-28 L28,0 L0,28 L-28,0 Z"/><path d="M0,-28 V28" stroke-dasharray="5 4"/></g><text y="62">Filtro</text></g>
<g transform="translate(100,310)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0,-28 L28,0 L0,28 L-28,0 Z"/><path d="M-10,-52 V-32" marker-end="url(#sh1-ar)"/><path d="M10,32 V52" marker-end="url(#sh1-ar)"/></g><text y="75">Enfriador</text></g>
<g transform="translate(300,310)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle r="24"/><path d="M-9,11 L10,-12" marker-end="url(#sh1-ar)"/><path d="M0,24 V48"/></g><text y="75">Manómetro</text></g>
<g transform="translate(500,310)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle r="26"/><path d="M-25,-7 H25"/><path d="M-7,-16 L7,-16 L0,-9 Z"/><path d="M0,26 V48"/></g><text y="75">Acumulador</text></g>
<g transform="translate(700,310)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle r="24"/><path d="M24,0 H50"/></g><text x="0" y="5">M</text><text y="75">Motor eléctrico</text></g>
</svg>
<figcaption>Figura 1. Líneas y componentes auxiliares según ISO 1219-1 (redibujados con fines didácticos).</figcaption>
</figure>

- **Línea continua:** conducto de trabajo (presión, retorno o succión). Es el que transporta la potencia.
- **Línea de trazos largos:** línea piloto, que transmite una señal de presión pequeña para accionar una válvula.
- **Línea de trazos cortos:** drenaje, el aceite que se fuga internamente y debe volver al tanque sin presión.
- **Cruce con punto:** las líneas están conectadas. **Cruce sin punto:** se cruzan sin comunicarse. Confundirlos es uno de los errores más comunes al seguir un circuito.

Entre los auxiliares, el **filtro** lleva una línea de trazos que cruza el rombo, el **enfriador** muestra flechas de entrada y salida del medio refrigerante y el **acumulador** distingue el lado gas del lado aceite. Cómo funcionan y dónde se ubican se explica en [filtros y depósitos del sistema hidráulico](/posts/filtros-depositos-sistema-hidraulico/); los conductos flexibles se tratan en [mangueras y conexiones hidráulicas](/posts/mangueras-conexiones-hidraulicas-tipos-seleccion/).

## Bombas, motores y cilindros

Los componentes que generan o consumen la potencia se dibujan con dos familias de formas: círculos para los rotativos y rectángulos para los lineales.

<figure class="diagram">
<svg viewBox="0 0 800 310" role="img" aria-labelledby="sh2-title" style="width:100%;height:auto;font-family:inherit" fill="currentColor" stroke="none" font-size="14" text-anchor="middle">
<title id="sh2-title">Símbolos ISO 1219 de bombas, motores y cilindros hidráulicos: bomba fija, variable y bidireccional, motor fijo, variable y bidireccional, cilindro de simple y de doble efecto</title>
<defs>
<marker id="sh2-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10z" fill="currentColor"/></marker>
</defs>
<g transform="translate(100,80)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle r="24"/><path d="M0,-24 V-48 M24,0 H50"/><polygon points="0,-22 -9,-6 9,-6" fill="currentColor"/></g><text y="75">Bomba fija</text></g>
<g transform="translate(300,80)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle r="24"/><path d="M0,-24 V-48 M24,0 H50"/><polygon points="0,-22 -9,-6 9,-6" fill="currentColor"/><path d="M-28,26 L28,-26" marker-end="url(#sh2-ar)"/></g><text y="75">Bomba variable</text></g>
<g transform="translate(500,80)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle r="24"/><path d="M0,-24 V-48 M0,24 V48 M24,0 H50"/><polygon points="0,-22 -9,-8 9,-8" fill="currentColor"/><polygon points="0,22 -9,8 9,8" fill="currentColor"/><path d="M-28,26 L28,-26" marker-end="url(#sh2-ar)"/></g><text y="75">Bomba variable bidireccional</text></g>
<g transform="translate(700,80)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle r="24"/><path d="M0,-24 V-48 M24,0 H50"/><polygon points="-9,-22 9,-22 0,-6" fill="currentColor"/></g><text y="75">Motor fijo</text></g>
<g transform="translate(100,230)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle r="24"/><path d="M0,-24 V-48 M24,0 H50"/><polygon points="-9,-22 9,-22 0,-6" fill="currentColor"/><path d="M-28,26 L28,-26" marker-end="url(#sh2-ar)"/></g><text y="64">Motor variable</text></g>
<g transform="translate(300,230)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle r="24"/><path d="M0,-24 V-48 M0,24 V48 M24,0 H50"/><polygon points="-9,-22 9,-22 0,-8" fill="currentColor"/><polygon points="-9,22 9,22 0,8" fill="currentColor"/></g><text y="64">Motor bidireccional</text></g>
<g transform="translate(500,225)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="-40" y="-14" width="80" height="28"/><path d="M0,-14 V14"/><path d="M40,0 H66"/><path d="M0,0 H3 L7,-7 L13,7 L19,-7 L25,7 L29,0 H40" stroke-width="1.5"/><path d="M-30,14 V38"/></g><text y="69">Cilindro simple efecto</text></g>
<g transform="translate(700,225)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="-40" y="-14" width="80" height="28"/><path d="M-5,-14 V14"/><path d="M-5,0 H66"/><path d="M-30,14 V38 M30,14 V38"/></g><text y="69">Cilindro doble efecto</text></g>
</svg>
<figcaption>Figura 2. Bombas, motores y cilindros. La punta del triángulo indica el sentido del flujo; la flecha diagonal, que el desplazamiento es variable.</figcaption>
</figure>

**Cómo leerlos:**

- **Bomba o motor:** mira la punta del triángulo. Si apunta hacia afuera del círculo, el componente entrega caudal (bomba); si apunta hacia adentro, lo recibe y gira (motor).
- **Un triángulo o dos:** uno indica un solo sentido de flujo; dos triángulos opuestos, que el componente trabaja en ambos sentidos (típico en transmisiones hidrostáticas de circuito cerrado).
- **Flecha diagonal:** cilindrada variable. Sin flecha, cilindrada fija.
- **Cilindro:** el rectángulo es el cuerpo, la línea interior el pistón y el trazo que sale es el vástago. En el de simple efecto solo hay una conexión de aceite y el retorno lo hace un resorte o la carga; en el de doble efecto hay dos puertos y el aceite empuja en ambos sentidos.

Para entender cada uno por dentro, consulta [bombas hidráulicas: engranajes, paletas y pistones](/posts/bombas-hidraulicas-tipos-engranajes-paletas-pistones/), [motores hidráulicos: fundamentos y tipos](/posts/motores-hidraulicos-fundamentos-tipos/) y [cilindros hidráulicos de simple y doble efecto](/posts/cilindros-hidraulicos-simple-doble-efecto/).

## Válvulas direccionales: el símbolo que más confunde

Una válvula direccional se dibuja como una **fila de cuadrados**, uno por cada posición del carrete. Se lee con un método de cuatro pasos:

1. **Cuenta las cajas:** cada una es una posición (2 o 3 en la mayoría de los casos).
2. **Cuenta las conexiones en la caja de reposo:** son las vías. Una válvula 4/3 tiene 4 vías y 3 posiciones.
3. **Lee el interior de cada caja:** las flechas muestran por dónde circula el aceite y la barra en forma de "T" indica una vía bloqueada.
4. **Mira los lados:** a la izquierda y a la derecha se dibujan los accionamientos y los resortes de retorno.

<figure class="diagram">
<svg viewBox="0 0 800 400" role="img" aria-labelledby="sh3-title" style="width:100%;height:auto;font-family:inherit" fill="currentColor" stroke="none" font-size="14" text-anchor="middle">
<title id="sh3-title">Válvula direccional 4/3 de centro cerrado con dos solenoides y resortes de centrado, con sus puertos P, T, A y B y los símbolos de accionamiento más comunes</title>
<defs>
<marker id="sh3-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10z" fill="currentColor"/></marker>
<marker id="sh3-ac" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10z" fill="#f59e0b"/></marker>
</defs>
<g transform="translate(-32,0)">
<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect x="330" y="90" width="70" height="70"/><rect x="400" y="90" width="70" height="70"/><rect x="470" y="90" width="70" height="70"/>
<path d="M415,60 V90 M455,60 V90 M415,160 V190 M455,160 V190"/>
<path d="M415,90 V108 M409,108 H421 M455,90 V108 M449,108 H461 M415,160 V142 M409,142 H421 M455,160 V142 M449,142 H461"/>
<path d="M345,160 V90" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#sh3-ac)"/>
<path d="M385,90 V160" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#sh3-ac)"/>
<path d="M485,160 L525,90" marker-end="url(#sh3-ar)"/>
<path d="M485,90 L525,160" marker-end="url(#sh3-ar)"/>
<path d="M330,125 H327 L323,115 L315,135 L307,115 L299,135 L295,125"/>
<path d="M540,125 H543 L547,115 L553,135 L559,115 L565,135 L570,125"/>
<rect x="265" y="110" width="30" height="30"/><path d="M265,140 L295,110"/>
<rect x="570" y="110" width="30" height="30"/><path d="M570,140 L600,110"/>
</g>
<text x="415" y="52">A</text><text x="455" y="52">B</text>
<text x="415" y="208">P</text><text x="455" y="208">T</text>
<text x="365" y="180">a</text><text x="435" y="180">0</text><text x="505" y="180">b</text>
<text x="280" y="102">Solenoide a</text><text x="585" y="102">Solenoide b</text>
<text x="305" y="174">Resorte</text><text x="570" y="174">Resorte</text>
<text x="435" y="236">Válvula 4/3, centro cerrado</text>
</g>
<text x="400" y="272" font-size="15">Accionamientos (se dibujan a los lados de las cajas)</text>
<g transform="translate(100,320)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="0" y="-18" width="34" height="36"/><path d="M0,-9 H-22 V9 H0 M-22,0 L-34,-11"/></g><text x="0" y="48">Palanca</text></g>
<g transform="translate(250,320)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="0" y="-18" width="34" height="36"/><path d="M0,0 H-18 M-18,-9 V9"/></g><text x="0" y="48">Pulsador</text></g>
<g transform="translate(410,320)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="0" y="-18" width="34" height="36"/><rect x="-26" y="-13" width="26" height="26"/><path d="M-26,13 L0,-13"/></g><text x="0" y="48">Solenoide</text></g>
<g transform="translate(570,320)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="0" y="-18" width="34" height="36"/><path d="M-30,0 H-14"/><polygon points="-14,-9 -14,9 0,0" fill="currentColor"/></g><text x="0" y="48">Piloto hidráulico</text></g>
<g transform="translate(720,320)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="0" y="-18" width="34" height="36"/><path d="M0,0 H-3 L-7,-8 L-13,8 L-19,-8 L-25,8 L-29,0"/></g><text x="0" y="48">Resorte</text></g>
</svg>
<figcaption>Figura 3. Anatomía de una válvula direccional 4/3. En ámbar, la caja "a" activada: P conecta con A y B con T.</figcaption>
</figure>

### Cómo funciona la figura 3

Las conexiones externas (**P** presión, **T** tanque, **A** y **B** hacia el actuador) están dibujadas sobre la caja central, que es la de reposo. Los resortes la mantienen ahí. Si se energiza el solenoide **a**, el carrete empuja y la caja "a" se desliza hasta ocupar el lugar de la central. Lo que ahora queda alineado con P, A, B y T es lo que dibuja esa caja: flechas paralelas, es decir, **P→A y B→T**. Con el solenoide **b** ocurre lo contrario: las flechas cruzadas invierten el sentido (**P→B y A→T**).

### Centro cerrado, abierto, tándem y flotante

La caja central es la que más información da, porque define qué hace la máquina cuando el operador suelta el mando:

| Tipo de centro | Qué muestra la caja central | Comportamiento en reposo |
| --- | --- | --- |
| Cerrado | Las cuatro vías bloqueadas | El actuador queda fijo; la bomba debe descargar por la válvula de alivio o ser de caudal variable |
| Abierto | P, A, B y T comunicadas | El actuador queda libre y la bomba descarga a tanque |
| Tándem | P conectada con T; A y B bloqueadas | El actuador queda fijo y la bomba descarga sin presión |
| Flotante | A y B conectadas con T; P bloqueada | El actuador se mueve libremente con la carga |

La confusión habitual es llamar "centro abierto" a la válvula que en realidad es tándem. En ambas la bomba descarga a tanque, pero solo en el centro abierto verdadero el actuador queda libre. Para saberlo, mira si A y B están bloqueadas con la "T" o conectadas.

Para ver estas válvulas dentro de un bloque real, repasa [válvulas hidráulicas: tipos y funcionamiento](/posts/valvulas-hidraulicas-tipos-funcionamiento/).

## Válvulas de presión, de caudal y antirretorno

Estas válvulas tienen una sola caja, y la posición de la flecha y del piloto dentro de ella dice todo.

<figure class="diagram">
<svg viewBox="0 0 800 310" role="img" aria-labelledby="sh4-title" style="width:100%;height:auto;font-family:inherit" fill="currentColor" stroke="none" font-size="14" text-anchor="middle">
<title id="sh4-title">Símbolos ISO 1219 de válvula limitadora, reductora y de secuencia, orificio fijo, regulador de caudal, regulador con antirretorno, antirretorno y antirretorno pilotado</title>
<defs>
<marker id="sh4-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10z" fill="currentColor"/></marker>
</defs>
<g transform="translate(100,85)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="-20" y="-22" width="40" height="44"/><path d="M0,22 V50 M0,-22 V-50"/><path d="M-8,16 V-16" marker-end="url(#sh4-ar)"/><path d="M20,0 H23 L27,-6 L33,6 L39,-6 L45,6 L49,0" stroke-width="1.5"/><path d="M0,36 H-34 V0 H-20" stroke-dasharray="6 4"/></g><text x="12" y="62" font-size="12">P</text><text x="12" y="-40" font-size="12">T</text><text y="85">Limitadora (alivio)</text></g>
<g transform="translate(300,85)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="-20" y="-22" width="40" height="44"/><path d="M0,22 V50 M0,-22 V-50"/><path d="M0,16 V-16" marker-end="url(#sh4-ar)"/><path d="M-20,0 H-23 L-27,-6 L-33,6 L-39,-6 L-45,6 L-49,0" stroke-width="1.5"/><path d="M0,-36 H34 V0 H20" stroke-dasharray="6 4"/></g><text x="12" y="62" font-size="12">P</text><text x="12" y="-40" font-size="12">A</text><text y="85">Reductora de presión</text></g>
<g transform="translate(500,85)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="-20" y="-22" width="40" height="44"/><path d="M0,22 V50 M0,-22 V-50"/><path d="M-8,16 V-16" marker-end="url(#sh4-ar)"/><path d="M20,0 H23 L27,-6 L33,6 L39,-6 L45,6 L49,0" stroke-width="1.5"/><path d="M0,36 H-34 V0 H-20" stroke-dasharray="6 4"/><path d="M34,6 V50" stroke-dasharray="3 4"/></g><text x="12" y="62" font-size="12">P</text><text x="12" y="-40" font-size="12">B</text><text y="85">De secuencia</text></g>
<g transform="translate(700,85)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M-50,0 H50"/><path d="M-10,-16 Q-2,0 -10,16 M10,-16 Q2,0 10,16"/></g><text y="85">Orificio fijo</text></g>
<g transform="translate(100,230)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M-50,0 H50"/><path d="M-10,-16 Q-2,0 -10,16 M10,-16 Q2,0 10,16"/><path d="M-22,22 L22,-22" marker-end="url(#sh4-ar)"/></g><text y="62">Regulador de caudal</text></g>
<g transform="translate(300,230)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M-50,0 H-36 M36,0 H50 M-36,-20 V22 M36,-20 V22"/><path d="M-36,-20 H36"/><path d="M-6,-28 Q-1,-20 -6,-12 M6,-28 Q1,-20 6,-12"/><path d="M-14,-6 L14,-34" marker-end="url(#sh4-ar)"/><path d="M-36,22 H-8 M-2,14 L-8,22 L-2,30 M8,22 H36"/><circle cx="2" cy="22" r="6"/></g><text y="62">Regulador con antirretorno</text></g>
<g transform="translate(500,230)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M-50,0 H-12 M28,0 H50"/><path d="M0,-12 L-12,0 L0,12"/><circle cx="-4" cy="0" r="8"/><path d="M4,0 H7 L10,-6 L16,6 L22,-6 L25,0 H28" stroke-width="1.5"/><path d="M28,-11 V11"/></g><text y="62">Antirretorno con resorte</text></g>
<g transform="translate(700,230)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M-50,0 H-12 M28,0 H50"/><path d="M0,-12 L-12,0 L0,12"/><circle cx="-4" cy="0" r="8"/><path d="M4,0 H7 L10,-6 L16,6 L22,-6 L25,0 H28" stroke-width="1.5"/><path d="M28,-11 V11"/><path d="M-4,38 V10" stroke-dasharray="6 4"/></g><text y="62">Antirretorno pilotado</text></g>
</svg>
<figcaption>Figura 4. Válvulas de presión, caudal y antirretorno. Las líneas de trazos son pilotos o drenajes; la flecha dentro de la caja muestra si la vía está abierta o cerrada en reposo.</figcaption>
</figure>

### Limitadora frente a reductora: la confusión de siempre

Las dos son una caja con una flecha y un resorte, y por eso se confunden. Se distinguen en tres detalles:

| Detalle | Limitadora (alivio) | Reductora |
| --- | --- | --- |
| Flecha | Desplazada: normalmente **cerrada** | Alineada con las vías: normalmente **abierta** |
| De dónde viene el piloto | De la **entrada** (presión aguas arriba) | De la **salida** (presión aguas abajo) |
| Destino de la salida | Directo a **tanque** | A un **circuito secundario** a presión reducida |
| Drenaje | Interno | Externo, con línea de trazos cortos al tanque |

La **válvula de secuencia** se parece a la limitadora (flecha desplazada, piloto desde la entrada), pero su salida no va a tanque sino a otro actuador: abre cuando se alcanza la presión de ajuste para que el circuito siguiente comience a trabajar. Por eso lleva un drenaje externo.

### Flujo y antirretorno

El **orificio** (dos arcos que se estrechan) limita el caudal; si lleva una flecha diagonal, es regulable. Una restricción simple frena el flujo en ambos sentidos, por lo que se combina a menudo con un **antirretorno en paralelo** para tener velocidad regulada en un sentido y paso libre en el otro. El antirretorno se reconoce por la bola apoyada sobre el asiento en V; si lleva una línea piloto, se abre también en sentido contrario cuando recibe esa presión (el clásico de los cilindros que deben sostener una carga).

## Ejemplo resuelto: leer un circuito completo

Con todo lo anterior se puede leer un circuito de principio a fin. La **figura 5** muestra el caso más simple de un actuador: un cilindro de doble efecto controlado por una válvula 4/3.

<figure class="diagram">
<svg viewBox="0 0 800 460" role="img" aria-labelledby="sh5-title" style="width:100%;height:auto;font-family:inherit" fill="currentColor" stroke="none" font-size="14" text-anchor="middle">
<title id="sh5-title">Circuito hidráulico simple con motor, bomba fija, válvula limitadora, válvula 4/3 con solenoides y cilindro de doble efecto; en ámbar el camino del aceite cuando el solenoide a está activado</title>
<defs>
<marker id="sh5-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10z" fill="currentColor"/></marker>
<marker id="sh5-ac" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10z" fill="#f59e0b"/></marker>
</defs>
<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="50" cy="340" r="16"/><path d="M66,340 H106"/>
<circle cx="130" cy="340" r="24"/><polygon points="130,318 121,334 139,334" fill="currentColor"/>
<path d="M130,316 V300 H415 V260"/><path d="M130,364 V425"/><path d="M90,400 V435 H170 V400"/>
<path d="M250,300 V322"/><rect x="232" y="322" width="36" height="40"/><path d="M242,328 V356" marker-end="url(#sh5-ar)"/>
<path d="M268,342 H271 L275,336 L281,348 L287,336 L293,348 L297,342"/><path d="M297,334 V350"/>
<path d="M250,311 H220 V342 H232" stroke-dasharray="6 4"/>
<path d="M250,362 V392 H455"/><path d="M455,260 V405"/><path d="M437,392 V414 H473 V392"/>
<rect x="330" y="190" width="70" height="70"/><rect x="400" y="190" width="70" height="70"/><rect x="470" y="190" width="70" height="70"/>
<path d="M415,190 V130 H385 V96"/><path d="M455,190 V115 H500 V96"/>
<path d="M415,260 V300"/>
<path d="M415,190 V207 M409,207 H421 M455,190 V207 M449,207 H461 M415,260 V243 M409,243 H421 M455,260 V243 M449,243 H461"/>
<path d="M345,260 V190 M385,190 V260" stroke-width="1.5"/>
<path d="M485,260 L525,190" marker-end="url(#sh5-ar)"/><path d="M485,190 L525,260" marker-end="url(#sh5-ar)"/>
<path d="M330,225 H327 L323,215 L315,235 L307,215 L299,235 L295,225"/><path d="M540,225 H543 L547,215 L553,235 L559,215 L565,235 L570,225"/>
<rect x="265" y="210" width="30" height="30"/><path d="M265,240 L295,210"/>
<rect x="570" y="210" width="30" height="30"/><path d="M570,240 L600,210"/>
<rect x="360" y="60" width="160" height="36"/><path d="M440,64 V92"/><path d="M440,78 H570"/>
</g>
<circle cx="250" cy="300" r="3.5"/><circle cx="455" cy="392" r="3.5"/>
<g fill="none" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M130,316 V300 H415 V260"/>
<path d="M345,260 V190" marker-end="url(#sh5-ac)"/>
<path d="M385,190 V260" marker-end="url(#sh5-ac)"/>
<path d="M415,190 V130 H385 V96"/>
<path d="M500,96 V115 H455 V190"/>
<path d="M455,260 V392"/>
<path d="M575,78 H600" marker-end="url(#sh5-ac)"/>
</g>
<g fill="none" stroke="#f59e0b" stroke-width="2"><circle cx="165" cy="285" r="10"/><circle cx="196" cy="330" r="10"/><circle cx="365" cy="170" r="10"/><circle cx="300" cy="78" r="10"/><circle cx="500" cy="165" r="10"/></g>
<g font-size="13" text-anchor="middle"><text x="165" y="290">1</text><text x="196" y="335">2</text><text x="365" y="175">3</text><text x="300" y="83">4</text><text x="500" y="170">5</text></g>
<text x="50" y="345">M</text><text x="50" y="372">Motor</text>
<text x="162" y="388" text-anchor="start">Bomba</text>
<text x="300" y="322" text-anchor="start">Válvula limitadora</text>
<text x="440" y="48">Cilindro</text>
<text x="585" y="62">Vástago sale</text>
<text x="285" y="204">Sol. a (activo)</text>
<text x="600" y="290">Válvula 4/3</text>
<text x="130" y="455">Tanque</text>
<text x="455" y="440">Tanque</text>
<text x="415" y="285" text-anchor="end" font-size="12">P</text><text x="470" y="285" font-size="12">T</text>
</svg>
<figcaption>Figura 5. Circuito de ejemplo con el solenoide "a" activado: el camino del aceite aparece en ámbar y los números siguen los pasos del texto.</figcaption>
</figure>

### Lectura paso a paso

1. **Fuente de potencia.** Un motor mueve una **bomba fija** (círculo con un triángulo hacia afuera). Aspira del **tanque** por la línea de abajo y entrega aceite por la línea de arriba. Al ser de caudal fijo, siempre empuja el mismo volumen por vuelta.
2. **Protección.** Desde la línea de presión sale una derivación a la **válvula limitadora**. Su flecha está desplazada, es decir, **cerrada** en reposo, y su piloto de trazos viene de la propia línea de presión. Mientras la presión esté bajo el ajuste del resorte, no deja pasar nada. Si se alcanza ese valor, abre y envía el exceso al tanque.
3. **Control de dirección.** La línea de presión llega a la vía **P** de la 4/3. En reposo (caja central, con las cuatro vías bloqueadas) el cilindro permanece inmóvil. Al activar el **solenoide a**, se aplican las flechas paralelas: **P→A** y **B→T**.
4. **Trabajo.** El aceite entra por A al lado del pistón del cilindro (el de mayor área) y empuja. El **vástago sale**.
5. **Retorno.** El aceite del lado del vástago es expulsado hacia B, atraviesa la válvula hacia **T** y regresa al tanque. Al activar el solenoide b, el recorrido se invierte y el vástago entra.

Lo que no muestra el esquema: la presión de ajuste, el caudal de la bomba y la velocidad del cilindro. Esos datos vienen en la lista de componentes o en la placa de cada elemento.

El recorrido de aceite en una máquina completa (más de un actuador, con prioridades y circuitos piloto) se explica en [el sistema hidráulico de una excavadora](/posts/sistema-hidraulico-excavadora-recorrido-aceite/). Si el circuito deja de comportarse como el esquema, la guía de [fallas comunes y diagnóstico](/posts/fallas-comunes-sistema-hidraulico-diagnostico/) indica por dónde empezar.

## Consejos para leer esquemas de fabricantes

- **Empieza por la leyenda.** Caterpillar, Komatsu, JCB y otros usan símbolos ISO, pero agregan códigos de color, números de referencia o variantes propias. La tabla de símbolos del manual de servicio manda sobre cualquier regla general.
- **Símbolo simplificado o detallado.** Una válvula de alivio puede aparecer como una caja con flecha o como el dibujo interno con el cartucho completo. Es el mismo componente a distinto nivel de detalle.
- **Símbolos antiguos.** Los manuales de equipos viejos pueden incluir símbolos previos a la norma (formas DIN, CETOP o propias del fabricante). Si un símbolo no coincide con ISO, no lo adivines.
- **Sigue un circuito a la vez.** Marca con colores la línea de presión, el retorno y los pilotos. Es la forma más rápida de no perder el hilo en un circuito de excavadora.
- **Identifica el reposo primero.** Cuando algo no tiene sentido, vuelve a dibujar el estado sin energía y avanza desde ahí.
- **Verifica en la máquina.** Un esquema puede quedar desactualizado respecto de una modificación o de otra serie de la misma máquina. Confirma con la numeración de las mangueras o la placa de la válvula.

## En resumen

Los símbolos ISO 1219-1 son pocos y se repiten con lógica: **triángulo sólido para lo hidráulico, flecha diagonal para lo variable, líneas continuas, de trazos largos y cortos para trabajo, piloto y drenaje**, y cajas con flechas para las posiciones de una válvula. Con un método de lectura (reposo, cajas, vías, accionamientos) y la atención puesta en los detalles que más confunden (centro cerrado frente a tándem, limitadora frente a reductora, cruce con o sin punto), cualquier esquema se vuelve legible.

Practica con el circuito de la figura 5 y después con el esquema de tu propia máquina: la primera lectura costará, pero a la tercera ya estarás siguiendo el aceite con el dedo.
