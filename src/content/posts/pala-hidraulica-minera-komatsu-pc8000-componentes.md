---
title: "Pala hidráulica minera: componentes y sistemas del Komatsu PC8000-6"
published: 2026-11-16
draft: false
featured: false
description: "Cómo funciona una pala hidráulica minera eléctrica: accionamiento, bombas, tanque, enfriamiento, giro, traslación, tambor de cable y ECS-T del PC8000-6."
category: maquinaria-pesada
formato: guia
nivel: avanzado
tags:
  - "pala-hidraulica"
  - "mineria-cielo-abierto"
  - "komatsu-pc8000"
  - "sistema-hidraulico"
  - "enfriamiento-aceite"
  - "mantenimiento-minero"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/mineria/pala-hidraulica-minera-komatsu-pc8000-componentes
author: redaccion-maquinaria
reviewedBy: redaccion-maquinaria
aiAssisted: true
faq:
  - q: "¿Por qué una pala minera grande usa accionamiento eléctrico y no motor diésel?"
    a: "Es una decisión de ingeniería general, no un dato exclusivo de un fabricante: un motor eléctrico entrega su par desde bajas revoluciones, tiene muchas menos piezas sujetas a desgaste, no consume diésel en la máquina ni genera emisiones locales, y su costo de energía por hora suele ser menor en una mina con red eléctrica. A cambio, la pala depende de un cable de alimentación, de una subestación y de un tambor de cable que gestione ese cable. En el PC8000-6 eléctrico, dos motores accionan, cada uno, cuatro bombas principales a través de una caja de distribución (PTO)."
  - q: "¿Qué hace la válvula de contrapresión del retorno hidráulico?"
    a: "Según el manual del PC8000-6 cumple dos funciones: mantener presión en el circuito de retorno para que las válvulas anticavitación puedan rellenar el lado de baja presión de motores y cilindros, y forzar el aceite de retorno a pasar por los enfriadores en proporción a la temperatura. Con aceite frío, una electroválvula (Y101) abre la válvula al máximo y pasa menos aceite por los radiadores, de modo que el sistema calienta más rápido. Con aceite caliente, la válvula se cierra más y envía más caudal al enfriador. El valor de ajuste del manual es 10 ± 0,5 bar, medido con aceite a temperatura normal; verifícalo siempre en el manual de tu equipo."
  - q: "¿Qué pasa cuando un filtro de retorno llega a su válvula bypass?"
    a: "En este equipo el filtro de retorno tiene un interruptor de presión que avisa en el monitor (2 bar en retorno y 0,5 bar en el filtro de aceite de fuga) y una válvula de derivación que abre a 2,3 bar para proteger el elemento. Con el bypass abierto el aceite sigue circulando, pero solo pasa por un colador de seguridad de 200 micrones, es decir, prácticamente sin filtrar. Por eso el aviso en pantalla se trata como orden de cambio, no como alerta informativa."
  - q: "¿Cómo se frena la superestructura de la pala al girar?"
    a: "Hay tres mecanismos distintos. El frenado dinámico lo hacen las válvulas de freno de giro, que limitan la presión de la línea cuando el motor hidráulico actúa como bomba por la inercia de la superestructura. El freno hidráulico de giro se modula con el pedal y se aplica automáticamente si la escalera de acceso no está arriba o el asiento está vacío. Y el freno de estacionamiento es un freno multidisco de resortes dentro de cada reductor de giro: se aplica por resorte y se libera con presión de aceite. Es un diseño de falla segura."
  - q: "¿Para qué sirve el tambor de cable de una pala eléctrica?"
    a: "Enrolla y desenrolla automáticamente el cable de alimentación para que no se arrastre por el piso ni se maneje a mano. Mejora la movilidad de la pala, reduce el riesgo para el personal y alarga la vida del cable. Lo hace con un freno motor con rotor de anillos deslizantes y varios interruptores de seguridad (cable tenso, flojo, desviado o con pocas vueltas) que interrumpen el desplazamiento de las orugas antes de dañar el cable."
sources:
  - title: "Manual de servicio Pala Hidráulica PC8000-6 (Komatsu), serie 12041, edición 14.09.06 — secciones 1 a 4, 8.2, 8.3, 9, 10, 11 y 14"
    url: "https://www.maquinariaspesadas.org/blog/713-manual-servicio-pala-hidraulica-pc8000-6-komatsu"
related:
  - mineria-cielo-abierto
  - anatomia-camion-minero
  - filtros-depositos-sistema-hidraulico
  - circuitos-hidraulicos-abiertos-cerrados-diferencias
  - motores-hidraulicos-fundamentos-tipos
---

Una pala hidráulica minera de este tamaño no es "una excavadora más
grande". Es una planta de potencia sobre orugas: dos motores eléctricos,
ocho bombas de pistones, cuatro bloques de control, un depósito de miles
de litros y una electrónica que decide cuánto aceite se enfría, cuándo
se frena y cuándo se impide arrancar. Entender **por qué** cada sistema
está diseñado así es lo que separa a quien cambia piezas de quien
diagnostica.

Esta guía recorre los sistemas principales del **Komatsu PC8000-6 con
accionamiento eléctrico** como caso de estudio. Los valores numéricos
provienen del manual de servicio de la serie 12041, edición 14.09.06
(ver "Fuentes"). Son ejemplos de un equipo concreto: la configuración
de otra serie u opción puede diferir, así que **verifica siempre en el
manual de tu máquina**. Este artículo es una explicación independiente y
no está afiliado ni avalado por Komatsu.

Si vienes de la minería a cielo abierto en general, te conviene leer
antes [minería a cielo abierto](/posts/mineria-cielo-abierto/) y
[anatomía básica de los camiones mineros](/posts/anatomia-camion-minero/),
porque la pala es la mitad del ciclo de carga y acarreo.

## Mapa de la máquina: grupos principales

El manual divide la máquina en superestructura, bastidor y accesorio.
Casi todo lo interesante, desde el punto de vista del mantenimiento,
está en la superestructura:

| Grupo | Qué contiene | Por qué importa |
|---|---|---|
| Superestructura | Cabina del operador, soporte de cabina con tablero de media tensión, caja de alto voltaje, compartimiento de motores y bombas, depósito hidráulico, enfriadores, contrapeso | Concentra potencia, control y refrigeración |
| Bastidor (tren inferior) | Cuerpo central, portadores de oruga, cadenas, motores y reductores de marcha, sistema de tensado, distribuidor rotatorio, anillo colector | Soporta toda la masa y transmite el movimiento |
| Accesorio | Pluma, palanca (brazo), cuchara y sus cilindros; versión retroexcavadora (BHA) o excavador frontal (FSA) | Es la herramienta que carga el material |

Tres datos del manual dan escala: el contrapeso pesa unos 53.000 kg, el
depósito hidráulico contiene alrededor de 7.750 litros y el sistema de
bombas suma ocho unidades de 750 cm³/rev.

## Accionamiento eléctrico: de la red al aceite

### Por qué eléctrico en una mina

La pala recibe energía por un cable de alta tensión y la convierte en
potencia hidráulica. La lógica de fondo, que es ingeniería general y no
un dato del manual, es la siguiente:

- Un motor eléctrico entrega par desde cero y mantiene su régimen casi
  constante, lo que simplifica la transmisión.
- Tiene muchas menos piezas de desgaste que un motor diésel de
  potencia equivalente: sin inyección, sin turbos, sin sistema de
  escape.
- Elimina el consumo de combustible en la máquina y las emisiones
  locales, y suele bajar el costo de energía por hora si la mina cuenta
  con red.
- El precio es la dependencia del cable, de una subestación y de un
  sistema para mover ese cable, que es justamente el tambor que veremos
  más abajo.

### La cadena de potencia

Cada motor eléctrico se conecta a su caja de distribución de bombas
(PTO) mediante un **acople flexible de caucho**. Ese acople transmite el
par sin juego, amortigua vibraciones torsionales y tolera cierto
desalineamiento. El motor 1 es el delantero y el motor 2 queda junto al
contrapeso. Cada PTO es un tren de engranajes rectos de acero endurecido
lubricado por salpicadura e inyección, en una carcasa de hierro fundido.

<figure class="diagram">
<svg viewBox="0 0 820 350" role="img" aria-label="Diagrama de la cadena de potencia: cada motor eléctrico acciona una caja PTO que reparte potencia a cuatro bombas principales, bombas piloto y de lubricación, y bomba de ventiladores; las bombas principales alimentan los bloques de control" style="width:100%;height:auto;font-family:inherit">
<defs><marker id="pc8-a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#334155"/></marker></defs>
<rect x="0" y="0" width="820" height="350" rx="12" fill="#f1f5f9" stroke="#cbd5e1"/>
<rect x="20" y="45" width="120" height="114" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="80" y="98" text-anchor="middle" font-size="14" fill="#0f172a">Motor</text>
<text x="80" y="118" text-anchor="middle" font-size="14" fill="#0f172a">eléctrico 1</text>
<rect x="170" y="45" width="95" height="114" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="217" y="98" text-anchor="middle" font-size="14" fill="#0f172a">Acople</text>
<text x="217" y="118" text-anchor="middle" font-size="14" fill="#0f172a">flexible</text>
<rect x="295" y="45" width="100" height="114" rx="8" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
<text x="345" y="108" text-anchor="middle" font-size="15" font-weight="bold" fill="#0f172a">Caja PTO 1</text>
<rect x="420" y="45" width="230" height="34" rx="6" fill="#fde68a" stroke="#92400e" stroke-width="1.5"/>
<text x="535" y="67" text-anchor="middle" font-size="13" fill="#0f172a">Bombas principales 1 a 4</text>
<rect x="420" y="87" width="230" height="34" rx="6" fill="#ffffff" stroke="#475569" stroke-width="1.5"/>
<text x="535" y="109" text-anchor="middle" font-size="13" fill="#0f172a">Piloto y lubricación PTO</text>
<rect x="420" y="129" width="230" height="30" rx="6" fill="#ffffff" stroke="#475569" stroke-width="1.5"/>
<text x="535" y="149" text-anchor="middle" font-size="13" fill="#0f172a">Ventiladores del enfriador</text>
<rect x="20" y="195" width="120" height="114" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="80" y="248" text-anchor="middle" font-size="14" fill="#0f172a">Motor</text>
<text x="80" y="268" text-anchor="middle" font-size="14" fill="#0f172a">eléctrico 2</text>
<rect x="170" y="195" width="95" height="114" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="217" y="248" text-anchor="middle" font-size="14" fill="#0f172a">Acople</text>
<text x="217" y="268" text-anchor="middle" font-size="14" fill="#0f172a">flexible</text>
<rect x="295" y="195" width="100" height="114" rx="8" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
<text x="345" y="258" text-anchor="middle" font-size="15" font-weight="bold" fill="#0f172a">Caja PTO 2</text>
<rect x="420" y="195" width="230" height="34" rx="6" fill="#fde68a" stroke="#92400e" stroke-width="1.5"/>
<text x="535" y="217" text-anchor="middle" font-size="13" fill="#0f172a">Bombas principales 5 a 8</text>
<rect x="420" y="237" width="230" height="34" rx="6" fill="#ffffff" stroke="#475569" stroke-width="1.5"/>
<text x="535" y="259" text-anchor="middle" font-size="13" fill="#0f172a">Piloto y lubricación PTO</text>
<rect x="420" y="279" width="230" height="30" rx="6" fill="#ffffff" stroke="#475569" stroke-width="1.5"/>
<text x="535" y="299" text-anchor="middle" font-size="13" fill="#0f172a">Ventiladores del enfriador</text>
<rect x="690" y="45" width="110" height="264" rx="8" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
<text x="745" y="165" text-anchor="middle" font-size="14" fill="#0f172a">Bloques</text>
<text x="745" y="185" text-anchor="middle" font-size="14" fill="#0f172a">de control</text>
<text x="745" y="205" text-anchor="middle" font-size="14" fill="#0f172a">I a IV</text>
<path d="M140 102 H168" stroke="#334155" stroke-width="2" fill="none" marker-end="url(#pc8-a1)"/>
<path d="M265 102 H293" stroke="#334155" stroke-width="2" fill="none" marker-end="url(#pc8-a1)"/>
<path d="M395 102 H418" stroke="#334155" stroke-width="2" fill="none" marker-end="url(#pc8-a1)"/>
<path d="M140 252 H168" stroke="#334155" stroke-width="2" fill="none" marker-end="url(#pc8-a1)"/>
<path d="M265 252 H293" stroke="#334155" stroke-width="2" fill="none" marker-end="url(#pc8-a1)"/>
<path d="M395 252 H418" stroke="#334155" stroke-width="2" fill="none" marker-end="url(#pc8-a1)"/>
<path d="M650 62 H688" stroke="#334155" stroke-width="2" fill="none" marker-end="url(#pc8-a1)"/>
<path d="M650 212 H688" stroke="#334155" stroke-width="2" fill="none" marker-end="url(#pc8-a1)"/>
<text x="410" y="337" text-anchor="middle" font-size="13" fill="#0f172a">Cada función de trabajo toma caudal de ambos motores (por ejemplo, el giro usa las bombas 4 y 8).</text>
</svg>
<figcaption>Cadena de potencia eléctrica a hidráulica de una pala de dos motores. Esquema simplificado de elaboración propia, no a escala, basado en la descripción del manual del PC8000-6.</figcaption>
</figure>

### Bombas y caudales del manual

| Bomba | Función | Cilindrada | Caudal teórico | Régimen |
|---|---|---|---|---|
| 8 de pistones axiales (placa inclinada) | Movimientos de trabajo | 750 cm³/rev | 1.034 L/min cada una | 1.378 min⁻¹ |
| 2 de engranajes (9.1 y 9.3) | Presión piloto | 110,8 cm³/rev | 152 L/min | 1.378 min⁻¹ |
| 2 de engranajes (9.2 y 9.4) | Lubricación de los PTO | 110,8 cm³/rev | 152 L/min | 1.378 min⁻¹ |
| 2 de pistones axiales (10.1 y 10.3) | Accionamiento de ventiladores del enfriador | 108 a 160 cm³ | 188 a 278 L/min | 1.632 min⁻¹ |

El manual indica que esos regímenes corresponden a una velocidad de
entrada de 1.800 min⁻¹. Un cálculo propio: ocho bombas a su caudal
máximo suman unos 8.270 L/min teóricos, un orden de magnitud que ayuda a
entender por qué un pequeño porcentaje de pérdida ya es mucho calor.

Una observación de diseño útil para el diagnóstico: las funciones
**mezclan bombas de ambos motores**. Según el manual, el giro lo
alimentan las bombas 4 y 8; la oruga izquierda, las bombas 2 y 6; la
derecha, las 3 y 7. Así cada movimiento reparte su carga entre los dos
motores eléctricos, y un desbalance de corriente entre ellos se lee mejor
cruzando con qué función estaba trabajando la máquina.

### Lubricación y enfriamiento del PTO

Cada PTO tiene su propio circuito: una bomba de engranajes toma aceite de
engranajes del cárter, lo pasa por un filtro y lo envía a un enfriador
aire-aceite con motor y ventilador hidráulicos. Aguas abajo hay una
válvula de descarga que funciona como contrapresión (7,5 bar según el
manual) para forzar la mayor parte del caudal por el enfriador. Un
interruptor de presión alerta con 0,5 bar y un sensor de temperatura
alerta por aceite demasiado caliente. En el calentamiento, una
electroválvula (Y53) reduce el caudal por el enfriador para que el
aceite llegue antes a temperatura.

Un detalle que ahorra horas de búsqueda: las carcasas de los ejes de
bomba contienen **el mismo aceite que el PTO** para lubricar las
conexiones estriadas y evitar desgaste y corrosión. Si el nivel sube y
sale aceite por el tubo respirador, el manual indica que si es aceite de
engranajes la fuga viene del lado de la caja, y si es una mezcla con
aceite hidráulico viene del lado de la bomba. Es un indicador de sello
de eje integrado en el diseño.

## Depósito hidráulico: tamaño, coladores y filtros

Si necesitas repasar los fundamentos del depósito y la limpieza del
fluido, ve primero a
[filtros y depósitos del sistema hidráulico](/posts/filtros-depositos-sistema-hidraulico/).
Aquí vemos cómo se resuelve a escala minera.

| Elemento | Dato del manual (serie 12041) |
|---|---|
| Depósito principal | Aproximadamente 7.750 L, lámina soldada |
| Depósito de succión | 520 L; todas las bombas aspiran de él |
| Coladores de succión | Uno por bomba principal (ocho) más un colador principal |
| Filtros de retorno | Siete, elementos de 10 µm absolutos |
| Filtro de fuga (caja de drenaje) | Un conjunto, 3 µm absolutos |
| Seguridad de cada filtro | Colador de 200 µm y válvula de derivación a 2,3 bar |
| Avisos al operador | Interruptores a 2 bar (retorno) y 0,5 bar (fuga) |
| Respiradero | Tres filtros; interruptor de vacío a 80 mbar |
| Válvula de cortina | Aísla el tanque de succión; un interruptor impide arrancar con ella cerrada |
| Bomba de transferencia | Vacía cámaras y colectores al depósito principal para servicio |

Hay varias decisiones de diseño que merecen explicación:

- **Un tanque de succión separado.** Mantiene las ocho bombas con
  aspiración cargada y permite cerrar la válvula de cortina para
  reparar una bomba sin vaciar todo el sistema. Por eso el interruptor
  de la válvula bloquea el arranque: arrancar una bomba sin aceite en la
  succión la destruye en segundos.
- **El umbral del filtro de fuga es muy bajo (0,5 bar).** El manual lo
  explica: protege primero los sellos radiales de los motores
  hidráulicos, que soportan muy poca contrapresión en la línea de
  drenaje. Un filtro de fuga tapado pone presión en la carcasa del motor
  y desplaza el sello.
- **Colador en el colector de retorno.** Evita que partículas grandes
  de una falla tapen los enfriadores. Si encuentras temperatura de aceite
  alta sin otra causa, el manual recomienda revisar ese colador. Y si hay
  fragmentación en un cilindro o motor, inspeccionarlo en busca de
  partículas metálicas.
- **Respiradero con interruptor de vacío.** Cuando los cilindros del
  accesorio se extienden, baja el nivel del tanque y entra aire. Un
  respiradero obstruido crea vacío en el depósito y empeora la succión.

Un consejo de taller: el colector, los filtros de alta presión, las
válvulas de control y los enfriadores solo se intervienen después de
transferir el aceite al depósito principal con la bomba de transferencia.
Durante la operación normal las tres válvulas de cierre asociadas deben
estar en posición cerrada.

## Enfriamiento del aceite: el sistema que decide la disponibilidad

### Por qué es crítico a esta escala

Toda pérdida de presión y toda fuga interna se convierten en calor. Con
ocho bombas capaces de mover miles de litros por minuto, hasta una
fracción pequeña de pérdidas es mucha energía térmica. Y el problema se
retroalimenta: el aceite caliente se adelgaza, aumentan las fugas
internas, baja el rendimiento y se genera todavía más calor, mientras se
degradan los sellos y el propio aceite. Por eso el manual dedica una
sección completa a **verificar el desempeño de refrigeración** y fija un
límite de temperatura según el grado de viscosidad del aceite (ejemplo
del manual: 85 °C para un VG100).

### Cómo está resuelto

El enfriador va frente al depósito y se compone de un conjunto estándar
de ocho elementos y un conjunto adicional de dos. Los ventiladores no
cuelgan del motor eléctrico: **son hidráulicos**, accionados por bombas
dedicadas de las cajas PTO. Eso permite variar su velocidad
independientemente de las revoluciones del motor, y que la electrónica
los regule según la temperatura. Los conjuntos se pueden abrir (giran
hacia afuera) para limpiarlos.

<figure class="diagram">
<svg viewBox="0 0 820 330" role="img" aria-label="Diagrama del circuito de enfriamiento: el retorno pasa por la válvula de contrapresión, que reparte el aceite entre los radiadores y un paso directo; ambos llegan a la cámara de filtros de retorno. Una bomba de ventiladores mueve motores y ventiladores, supervisados por el sistema ECS-T" style="width:100%;height:auto;font-family:inherit">
<defs><marker id="pc8-a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#334155"/></marker></defs>
<rect x="0" y="0" width="820" height="330" rx="12" fill="#f1f5f9" stroke="#cbd5e1"/>
<rect x="20" y="95" width="145" height="70" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="92" y="125" text-anchor="middle" font-size="13" fill="#0f172a">Retorno de</text>
<text x="92" y="145" text-anchor="middle" font-size="13" fill="#0f172a">bloques de control</text>
<rect x="200" y="85" width="170" height="90" rx="8" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
<text x="285" y="115" text-anchor="middle" font-size="13" fill="#0f172a">Colector de retorno</text>
<text x="285" y="135" text-anchor="middle" font-size="13" fill="#0f172a">y válvula de</text>
<text x="285" y="155" text-anchor="middle" font-size="13" fill="#0f172a">contrapresión (10 bar)</text>
<rect x="430" y="30" width="200" height="60" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="530" y="55" text-anchor="middle" font-size="13" fill="#0f172a">Radiadores de aceite</text>
<text x="530" y="75" text-anchor="middle" font-size="12" fill="#0f172a">8 estándar + 2 adicionales</text>
<rect x="430" y="165" width="200" height="60" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="530" y="190" text-anchor="middle" font-size="13" fill="#0f172a">Paso directo al tanque</text>
<text x="530" y="210" text-anchor="middle" font-size="12" fill="#0f172a">(predomina con aceite frío)</text>
<rect x="670" y="85" width="130" height="90" rx="8" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
<text x="735" y="115" text-anchor="middle" font-size="13" fill="#0f172a">Cámara de filtros</text>
<text x="735" y="135" text-anchor="middle" font-size="13" fill="#0f172a">de retorno</text>
<text x="735" y="155" text-anchor="middle" font-size="13" fill="#0f172a">7 × 10 µm</text>
<rect x="200" y="255" width="170" height="60" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="285" y="280" text-anchor="middle" font-size="13" fill="#0f172a">Bomba de ventiladores</text>
<text x="285" y="300" text-anchor="middle" font-size="12" fill="#0f172a">(desde cada PTO)</text>
<rect x="430" y="255" width="200" height="60" rx="8" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="530" y="280" text-anchor="middle" font-size="13" fill="#0f172a">Motores y ventiladores</text>
<text x="530" y="300" text-anchor="middle" font-size="12" fill="#0f172a">1.250 · 1.000 · 0-50 min⁻¹</text>
<rect x="670" y="245" width="130" height="75" rx="8" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
<text x="735" y="268" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">ECS-T</text>
<text x="735" y="287" text-anchor="middle" font-size="12" fill="#0f172a">sonda PT100 (B15)</text>
<text x="735" y="305" text-anchor="middle" font-size="12" fill="#0f172a">ordena Y101, Y6a/b</text>
<path d="M165 130 H198" stroke="#334155" stroke-width="2" fill="none" marker-end="url(#pc8-a2)"/>
<path d="M370 110 H400 V60 H428" stroke="#334155" stroke-width="2" fill="none" marker-end="url(#pc8-a2)"/>
<path d="M370 150 H400 V195 H428" stroke="#334155" stroke-width="2" fill="none" marker-end="url(#pc8-a2)"/>
<path d="M630 60 H650 V115 H668" stroke="#334155" stroke-width="2" fill="none" marker-end="url(#pc8-a2)"/>
<path d="M630 195 H650 V145 H668" stroke="#334155" stroke-width="2" fill="none" marker-end="url(#pc8-a2)"/>
<path d="M370 285 H428" stroke="#334155" stroke-width="2" fill="none" marker-end="url(#pc8-a2)"/>
<path d="M668 285 H632" stroke="#334155" stroke-width="2" stroke-dasharray="6 4" fill="none" marker-end="url(#pc8-a2)"/>
</svg>
<figcaption>Circuito de enfriamiento: la válvula de contrapresión reparte el retorno según la temperatura, y los ventiladores hidráulicos se regulan por separado. Esquema simplificado de elaboración propia, no a escala.</figcaption>
</figure>

### La válvula de contrapresión: dos tareas en una

El retorno de todos los bloques llega a un colector y encima de él se
instala la válvula de contrapresión. El manual le asigna dos funciones:

1. **Mantener presión de retorno**, para que las válvulas anticavitación
   puedan inyectar aceite al lado de baja presión de motores y
   cilindros. Sin esa presión, un motor de giro o de marcha frenando
   una carga se queda sin aceite y cavita.
2. **Dirigir el aceite por los enfriadores según la temperatura.** Con
   aceite frío, la electroválvula Y101 abre al máximo la válvula (pasa
   poco aceite por los radiadores y el sistema calienta rápido; en ese
   periodo las bombas trabajan a media capacidad). Con aceite caliente
   y bombas a caudal máximo, Y101 se desenergiza y la válvula se cierra
   más por resorte, empujando más caudal al enfriador.

Antes de cada radiador hay **reductores (orificios)** que, junto con un
amortiguador de pulsaciones, protegen el enfriador de picos de presión.
La hoja de datos del manual pide verificar que existan, que estén en la
posición del esquema y que midan 26 mm de diámetro.

### Velocidad de ventiladores: lógica de dos solenoides

El ECS-T controla dos electroválvulas por motor (Y6a e Y6b) y obtiene
tres velocidades del ventilador estándar:

| Y6a | Y6b | Velocidad del ventilador estándar |
|---|---|---|
| Sin energía | Sin energía | Máxima, aprox. 1.250 min⁻¹ |
| Sin energía | Con energía | Media, aprox. 1.000 min⁻¹ |
| Con energía | Sin energía | Mínima, 0 a 50 min⁻¹ aprox. |

Los puntos de conmutación dependen de la temperatura y del **grado de
viscosidad del aceite** programado en el sistema, con histéresis para
evitar que el ventilador oscile. Por eso el manual insiste en que el
grado de aceite cargado en el ECS-T coincida con el real: si no, todos
los umbrales quedan mal. El ventilador adicional comparte el caudal de la
bomba del estándar y su máximo (aprox. 1.550 min⁻¹ en el procedimiento
del manual) solo puede ajustarse con el estándar a máxima velocidad.
Además, el circuito adicional envía un caudal constante por sus
radiadores, independiente del retorno principal.

### Cuando la temperatura sube: diagnóstico ordenado

El manual propone no tocar nada hasta confirmar las condiciones de base.
Convertido en lista de verificación:

1. Radiadores **limpios** y bien fijados a la carcasa, para que todo el
   aire pase por los elementos.
2. Aspas del ventilador sin defectos y velocidades como en el reporte de
   pruebas final.
3. Aceite del grado correcto, cargado también en el ECS-T.
4. Contrapresión de retorno, válvulas de alivio secundarias y regulación
   de bombas dentro de especificación.
5. Sonda de temperatura confiable: contrastar la lectura de pantalla con
   un termómetro externo y revisar la resistencia PT100 y el cableado
   si hay diferencias grandes.
6. Si todo lo anterior está bien, ejecutar la prueba al **45 % de la
   potencia instalada**: cargar hidráulicamente hasta que la temperatura
   se estabilice (T1), medir la ambiental (T2) y calcular ΔT = T1 − T2.
   La temperatura ambiente máxima admisible es la temperatura límite del
   aceite menos ΔT.

Ejemplo numérico del propio manual: T1 = 62 °C y T2 = 25 °C dan ΔT =
37 °C; con límite de 85 °C (VG100), la ambiente permitida es 85 − 37 =
48 °C. En Chile o Perú, un sitio de altura con verano frío o un desierto
con 40 °C de sombra dan resultados muy distintos con la misma pala, y
este cálculo permite saber de antemano en qué escenario se queda corta
la refrigeración.

## Circuito de giro

Tres motores de giro de pistones axiales y cilindrada fija (20.1 a
20.3) reciben el aceite de las bombas 4 y 8 a través del bloque de
control II. Cada motor mueve un reductor compacto de **dos etapas
planetarias** con freno multidisco integrado. Con cilindrada fija,
**la velocidad de giro es simplemente proporcional al caudal** que
entrega el bloque, sin variar la cilindrada: el control está
en el caudal de las bombas.

Si quieres repasar cómo trabajan estos motores, lee
[motores hidráulicos: fundamentos y tipos](/posts/motores-hidraulicos-fundamentos-tipos/).

### Qué ocurre al frenar

Cuando el operador suelta la palanca, la superestructura sigue girando
por inercia y **el motor hidráulico pasa a funcionar como bomba**,
arrastrado por el reductor. La presión de esa línea sube y es la válvula
de freno de giro (con su válvula de aumento de presión, PIV) la que la
limita. La contrapresión del colector de retorno asegura que, mientras
tanto, las válvulas anticavitación rellenen el otro lado del motor.

Dos ideas de diseño importantes:

- La PIV es una válvula de alivio **pilotada**: con presión piloto su
  umbral sube al valor alto de trabajo y sin ella queda en un valor
  bajo. El pedal de freno actúa sobre una proporcional (Y127) y modula
  la presión piloto de 0 a 24 bar, de modo que el frenado es gradual y
  proporcional al recorrido del pedal.
- El freno de estacionamiento de cada reductor es multidisco de
  resortes: **se aplica por resorte y se libera con presión**
  (19 a 20 bar de liberación y 60 bar máximo, según el manual). Si se
  pierde la presión, la máquina queda frenada.

### Seguridad integrada

El freno hidráulico de giro se aplica automáticamente si la escalera de
acceso no está completamente arriba o si el asiento del operador está
vacío. El manual describe la comprobación con manómetro en un punto de
control: 0 bar significa freno liberado y 45 bar significa freno
aplicado, con el mensaje correspondiente en pantalla.

### Puntos de ajuste del manual (referencia)

| Ajuste | Valor del manual |
|---|---|
| Presión alta de giro (PIV) | 330 ± 5 bar |
| Presión baja de giro (piloto desconectado) | 120 bar |
| Presión piloto del freno hidráulico | 24 + 1 bar al pisar a fondo |
| Presión piloto de liberación del freno de estacionamiento | 45 ± 3 bar |
| Apriete de válvulas MRV y PIV | 300 N·m |

Dos precauciones del manual que se repiten en el taller: como los tres
motores trabajan en paralelo, el manómetro muestra la PIV de **menor**
ajuste, así que se debe bajar y subir cada válvula por separado hasta que
el aceite regrese equilibrado; y una pulsación fuerte en las mangueras
de retorno indica que una PIV está desviada. Las válvulas mal apretadas
generan fugas, ruido de flujo y temperatura alta.

## Circuito de traslación

Cuatro motores de marcha (22.1 a 22.4), de pistones axiales y cilindrada
fija, mueven dos reductores laterales. Los bloques de control I y III
alimentan las orugas: según el manual, los motores izquierdos reciben
aceite de las bombas 2 y 6 y los derechos, de las 3 y 7. Como la
superestructura gira respecto al bastidor, el aceite cruza por el
**distribuidor rotatorio**, un colector con anillos de sellado que debe
llevar aceite de servicio, retorno, fuga, control y grasa en cualquier
posición. Su estanqueidad contra el polvo se refuerza con laberinto y
engrase desde el sistema centralizado (más sobre esto en
[lubricación centralizada en palas mineras](/posts/lubricacion-centralizada-pala-minera-pc5500/)).

Las **válvulas de freno de marcha** cumplen una función de contrapeso:
regulan el aceite que sale del motor según la presión de operación, para
que la pala no se embale en una pendiente. El freno de estacionamiento
de cada reductor es también multidisco de resortes, liberado con
21 a 23 bar (50 bar máximo) a partir de una presión piloto reducida a
35 bar. Se aplica solo cada vez que se corta la fuente de energía
primaria, por una electroválvula (Y16).

| Ajuste | Valor del manual |
|---|---|
| Alivio de línea de servicio (SRV) | 310 ± 5 bar |
| MRV durante el ajuste de las SRV | 320 bar, luego se vuelve a 310 ± 5 bar |
| Presión piloto X2 | 45 ± 3 bar |
| Interruptor de freno de estacionamiento | Menos de 24 bar: aplicado; más de 24 bar: liberado |

Una validación práctica descrita en el manual: con la solenoide Y16
desconectada y el freno aplicado, al accionar los pedales la máquina no
debe moverse. Si se mueve, hay que reparar el freno de estacionamiento.

## Tensado automático de orugas

La tensión de las cadenas se resuelve con cuatro cilindros hidráulicos
sobre las ruedas guía, alimentados por las bombas piloto. Es un sistema
con **dos niveles de presión**:

- **35 bar con los motores detenidos**: basta para mantener la rueda
  guía en posición.
- **310 bar con los motores en marcha**: una válvula de aumento de
  presión pilotada deja subir la presión al valor de trabajo cuando
  llega presión piloto.

Los impactos externos sobre las ruedas guía (piedras, roca suelta) se
absorben con **acumuladores en dos etapas**: dos de membrana de 1,3 L
con precarga de 31 bar y cuatro de gas de 5 L con precarga de 150 bar.
Funcionan como un amortiguador: el aceite desplazado va a los
acumuladores y vuelve al cilindro cuando cede la fuerza. Una válvula de
seguridad de 55 bar protege el circuito piloto si falla una retención.
La carrera máxima del émbolo es 360 mm.

La prueba de funcionamiento del manual es ilustrativa: tras los ajustes,
avanzar unos 10 m, detener los motores y comprobar que la presión baja a
35 bar. Que siga bajando lentamente después se explica por fuga interna
y es normal. Conviene verificar periódicamente la precarga de los acumuladores
(el manual remite a un boletín específico), porque de ella depende el
amortiguamiento de los impactos.

## Tambor de cable: la pieza que habilita el diseño eléctrico

El tambor es accionado por un freno motor con rotor de anillos
deslizantes y un resistor en serie (5R1) que fija el par. Su control se apoya en
**interruptores de posición y de leva**:

- Con el cable desenrollándose (pala avanzando), el contacto de
  dirección de giro elimina la derivación del resistor y deja un par
  bajo, suficiente para mantener el cable tenso.
- Al enrollar, el par es máximo cuando hay más de media longitud en el
  tambor y mínimo antes de ese punto.
- Un temporizador mantiene alimentado el motor 10 segundos después de
  detener la marcha, antes de aplicar el freno.

Los interruptores cortan el avance o el retroceso para proteger el
cable:

| Condición del cable | Interruptor | Respuesta |
|---|---|---|
| Demasiado tenso | 5S6 | Se detiene el avance de ambas orugas |
| Demasiado flojo | 5S6 | Se detiene el retroceso de ambas orugas |
| Desviación fuerte a la izquierda | 5S8 (proximidad) | Se detiene el retroceso de la oruga izquierda |
| Desviación fuerte a la derecha | 5S9 (proximidad) | Se detiene el retroceso de la oruga derecha |
| Máxima longitud permitida en el tambor | 5S4 | Se detiene el retroceso de ambas orugas |
| Últimas vueltas de seguridad desenrolladas | 5S7 | Se detiene el avance de ambas orugas |

Una unidad de control de temperatura del motor del tambor interrumpe
todos los movimientos de marcha si el motor llega a temperatura crítica.
En mantenimiento, el punto delicado son los ajustes de los interruptores
de leva y la distancia de los sensores de proximidad (7 mm según el
manual): un interruptor desajustado deja de proteger el cable
sin que nadie lo note.

## ECS-T: la capa electrónica

El sistema de control electrónico (en el manual en español, SCE) se
basa en un PLC con módulos de entradas y salidas binarias (BIM),
módulos analógicos (ANM), una pantalla de texto en cabina y, de forma
opcional, conexión a un sistema de gestión de flota, tarjeta de memoria,
impresora o computador portátil. Lo que debe saber un técnico de campo:

- **Lógica de señal**: una entrada en nivel "1" es 24 V (el manual
  acepta desde 13 V) y en nivel "0" es de 0 a 5 V. Los contactos se
  cablean con resistores para que el PLC detecte un cable cortado al
  encender, en lugar de leer un contacto "abierto" por polvo o
  humedad.
- **Salidas**: cada salida soporta 2 A y el grupo, 10 A. Si hay un
  cortocircuito externo, se apaga el grupo y se enciende un LED "MK" que
  permanece hasta apagar y encender el sistema.
- **Alimentación**: la CPU admite de 14 a 36 V; bajo 18 V se apagan las
  salidas de 2 A y bajo 9 V se reinicia.
- **Sensores**: la presión se mide con transductores de 0 a 500 bar de
  señal 0 a 10 V, con un desplazamiento de 1 V (Ua = P × 0,02 + 1 V; con
  200 bar da 5 V). La temperatura, con PT100 (100 Ω a 0 °C y 138,5 Ω a
  100 °C), de −50 a +150 °C.

Un ejemplo de lo que la electrónica hace por la máquina: cada filtro de
alta presión tiene un interruptor de presión diferencial y un detector de
partículas metálicas. Si alguno indica restricción o viruta, el PLC
**bloquea el arranque** del motor correspondiente y, si ya está en
marcha, lo apaga en el acto, mostrando un mensaje de ayuda. La
secuencia es un buen ejemplo de diseño preventivo: la máquina se niega a
seguir trabajando con una bomba que ya está soltando metal.

### Dos advertencias que evitan módulos quemados

- **Nunca apliques 24 V externos a las salidas del PLC** al probar
  solenoides: se daña el módulo. El manual indica soltar el cable del
  lado del terminal, alimentar la solenoide aparte y reconectar al final.
- La polaridad invertida en la alimentación también destruye el módulo.

## Resumen de sistemas clave

| Sistema | Función | Idea de diseño | Datos del manual (serie 12041) |
|---|---|---|---|
| Accionamiento | Dos motores eléctricos y PTO | Par desde bajas revoluciones, menos desgaste, sin diésel | 8 bombas de 750 cm³/rev, 1.034 L/min cada una |
| Depósito y filtros | Almacenar, decantar, filtrar | Succión cargada y aislable, protección de sellos | 7.750 L; 7 filtros de 10 µm; fuga 3 µm; bypass 2,3 bar |
| Enfriamiento | Mantener temperatura del aceite | Ventiladores hidráulicos regulados y contrapresión inteligente | Contrapresión 10 ± 0,5 bar; 1.250 / 1.000 / 0-50 min⁻¹ |
| Giro | Rotar la superestructura | Cilindrada fija, freno de falla segura | PIV 330 ± 5 bar; liberación freno 19 a 20 bar |
| Traslación | Mover la pala | Control de descenso en pendiente, freno por resorte | SRV 310 ± 5 bar; liberación freno 21 a 23 bar |
| Tensado de orugas | Mantener tensión y absorber impactos | Dos niveles de presión y dos etapas de acumuladores | 35 / 310 bar; precargas 31 y 150 bar |
| Tambor de cable | Gestionar el cable de potencia | Par variable e interruptores de protección | Sensores de proximidad a 7 mm |
| ECS-T | Supervisión y bloqueos | Detecta cable cortado y bloquea el arranque | Entradas 24 V; sondas PT100; sensores 0-500 bar |

## Qué llevarte

La gran enseñanza de este equipo es que cada sistema está diseñado para
**fallar de forma segura y avisar antes de romperse**: frenos que se
aplican por resorte, filtros con aviso antes del bypass, arranque
bloqueado ante virutas, cable protegido por interruptores. Entenderlo
cambia cómo diagnosticas: en lugar de buscar "la pieza mala", sigues la
cadena de causas, de la temperatura al ventilador, del ventilador a la
solenoide y de la solenoide al ECS-T.

Para seguir profundizando, lee sobre
[circuitos hidráulicos abiertos y cerrados](/posts/circuitos-hidraulicos-abiertos-cerrados-diferencias/),
[cómo se regulan las bombas con control electrohidráulico en la
PC8000](/posts/regulacion-bombas-control-electrohidraulico-pala-pc8000/)
y la [lubricación centralizada en palas
mineras](/posts/lubricacion-centralizada-pala-minera-pc5500/).

**Fuentes:** Manual de servicio Pala Hidráulica PC8000-6 (Komatsu),
serie 12041, edición 14.09.06, disponible en
[maquinariaspesadas.org](https://www.maquinariaspesadas.org/blog/713-manual-servicio-pala-hidraulica-pc8000-6-komatsu).
Los diagramas son ilustraciones propias. Komatsu y PC8000-6 son marcas
de sus respectivos titulares.
