---
title: "Regulación de bombas y control electrohidráulico en la pala PC8000-6"
published: 2026-11-17
draft: false
featured: false
description: "Cómo se regulan las bombas principales y se controlan los movimientos de la pala PC8000-6: presiones piloto, amplificadores, válvulas proporcionales, EPM, MC7 y ajuste de X1."
category: maquinaria-pesada
formato: guia
nivel: avanzado
tags:
  - "pala-hidraulica"
  - "pc8000-6"
  - "regulacion-de-bombas"
  - "control-electrohidraulico"
  - "valvulas-proporcionales"
  - "mineria"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/mineria/regulacion-bombas-control-electrohidraulico-pala-pc8000
author: servicio-campo
reviewedBy: servicio-campo
aiAssisted: true
faq:
  - q: "¿Qué es la presión X1 y por qué importa tanto?"
    a: "Es la presión de regulación que llega al controlador de potencia de cada bomba principal. Cuanto más alta, más tarde empieza la bomba a reducir su caudal; cuanto más baja, antes lo hace. En operación normal la fija el microcontrolador MC7 a través de una válvula proporcional, según la carga eléctrica de cada motor. Si X1 es demasiado alta se sobrecarga el motor eléctrico; si es demasiado baja, la pala trabaja floja aunque haya potencia disponible. El manual da como valor de partida 34 bar con tolerancia de ±0,5 bar para el ajuste con el método A."
  - q: "¿Qué diferencia hay entre la regulación electrónica y la hidráulica constante?"
    a: "En la electrónica, el MC7 modifica X1 en tiempo real según la corriente y la tensión de los motores, de modo que la pala aprovecha toda la potencia disponible sin pasarse. En la hidráulica constante, X1 se fija con una válvula reductora y no reacciona a la carga: es más simple y robusta, pero menos eficiente. El manual la presenta como modo de prueba y de emergencia si falla la electrónica; el modo estándar es el electrónico."
  - q: "¿Por qué un movimiento se vuelve brusco al izar y girar a la vez?"
    a: "Es el síntoma que el manual asocia con un factor PID demasiado agresivo: el lazo de regulación reacciona con tanta fuerza que las bombas oscilan cuando dos movimientos compiten por la potencia. La corrección consiste en reducir el factor por pasos pequeños hasta que el movimiento sea suave, sin dejar que se vuelva perezoso. Conviene descartar antes fallas mecánicas, aire en el sistema y una presión piloto fuera de rango."
  - q: "¿Quién puede ajustar el MC7 con la herramienta BB-3 o con el programa en laptop?"
    a: "El manual indica que los métodos B (herramienta BB-3) y C (laptop con programa dedicado) los realiza únicamente personal autorizado, porque un parámetro mal escrito en la memoria del MC7 puede alterar el comportamiento de todo el sistema de regulación. Además, el programa de servicio pide una clave. Esta guía explica el propósito de cada ajuste; las claves y los pasos exactos están en el manual del equipo y en el servicio técnico del fabricante."
  - q: "¿Por qué hay que ajustar los amplificadores al cambiar una válvula proporcional?"
    a: "Porque cada solenoide proporcional tiene su propia relación entre corriente y presión de salida. El amplificador debe entregar una corriente mínima (para vencer el umbral inicial del solenoide) y una máxima (para llegar a carrera plena) que correspondan a esa válvula concreta. Al reemplazar el solenoide o el amplificador, esos dos valores cambian y hay que recalibrarlos; de lo contrario, la palanca tendrá zona muerta, respuesta desigual o carrera incompleta."
sources:
  - title: "Manual de servicio pala hidráulica PC8000-6 (Komatsu), secciones 2, 5 y 7 — copia alojada en Maquinarias Pesadas"
    url: "https://www.maquinariaspesadas.org/blog/713-manual-servicio-pala-hidraulica-pc8000-6-komatsu"
related:
  - bombas-hidraulicas-tipos-engranajes-paletas-pistones
  - simbolos-hidraulicos-iso-1219-como-leer
  - fallas-comunes-sistema-hidraulico-diagnostico
---

Una pala hidráulica minera de más de 700 toneladas no se mueve con una palanca conectada a una válvula. Entre la mano del operador y el cilindro hay una cadena de señales eléctricas, presiones piloto y reguladores de bomba que decide **cuánto aceite entra, hacia dónde y con qué suavidad**, y que además protege a dos motores eléctricos de sobrecargarse. Si esa cadena se entiende, buena parte de las fallas "misteriosas" (movimientos lentos, bruscos, desiguales o sin fuerza) dejan de serlo.

Esta guía recorre ese sistema en la pala **PC8000-6**, tomando como referencia su manual de servicio: primero el control proporcional electrohidráulico (palancas, amplificadores, válvulas), después la regulación de las bombas principales (principio de potencia constante, EPM, ESR y MC7) y, al final, el **porqué y el cuándo** de los tres métodos de ajuste de la presión X1. No es un procedimiento paso a paso: esos pasos, con sus valores exactos y sus advertencias, están en el manual del equipo y deben seguirse allí.

## Panorama: dos sistemas que cooperan

Conviene separar dos funciones que el manual trata en secciones distintas pero que trabajan juntas:

1. **Control de movimientos (sección 5)**: traduce la desviación de una palanca o pedal en una presión piloto variable que desplaza la corredera de cada bloque de control principal. Responde a la pregunta "¿qué movimiento quiere el operador y con qué intensidad?".
2. **Regulación de bombas (sección 7)**: ajusta el caudal de las bombas principales para que la potencia que consumen no supere la que entregan los motores eléctricos. Responde a la pregunta "¿cuánto puede dar la máquina ahora mismo sin sobrecargarse?".

Según el manual, la máquina tiene **dos motores eléctricos**, cada uno con una caja distribuidora (PTO) que mueve **cuatro bombas principales de pistones axiales** de plato inclinado, de 750 cm³ por revolución y con un caudal teórico del orden de 1.030 L/min cada una a 1.378 rpm. Ocho bombas principales en total, y todas dependen de la misma cadena de control.

## Las presiones que gobiernan todo: X1, X2, X3 y X4

El manual nombra cuatro presiones piloto con función distinta. Memorizarlas ahorra mucho tiempo al leer un esquema:

| Presión | Valor de referencia (manual PC8000-6) | Para qué sirve |
|---|---|---|
| **X1** | 0 a 34 bar (variable) | Regulación de bomba: fija en qué punto el controlador de potencia empieza a reducir el caudal |
| **X2** | 45 bar | Presión piloto: mueve las correderas, alimenta la regulación y libera los frenos de marcha y giro |
| **X3** | 0 / 15 / 45 bar | Control remoto de caudal: 0 bar = caudal mínimo, 15 bar = medio caudal, 45 bar = caudal máximo |
| **X4** | 60 bar | Presión de soporte: ayuda a regular con presión de trabajo baja y lubrica los rodamientos de las bombas |

Dos detalles que el manual subraya y que se olvidan fácil. Primero, X2 y X4 **se influyen mutuamente**: al ajustar las válvulas de alivio de 45 y de 60 bar hay que alternar entre ambas, no ajustar una y dar por cerrada la tarea. Segundo, un acumulador de bolsa de 10 L (precarga de 10 bar) conserva presión piloto para que, con los motores detenidos, la máquina pueda hacer un número limitado de movimientos de bajada. En la verificación de ese acumulador, el manual espera que la presión se mantenga estable al menos cinco minutos; si cae, hay una fuga que buscar.

## De la palanca a la corredera: la cadena de señal

La idea central del control proporcional es que el operador no mueve aceite: **pide una señal**, y esa señal se convierte en presión.

<figure class="diagram">
<svg viewBox="0 0 800 300" role="img" aria-labelledby="pc8-d1-title" style="width:100%;height:auto;font-family:inherit">
<title id="pc8-d1-title">Cadena de señal del control proporcional electrohidráulico: joystick, módulo de rampa, amplificador, válvula solenoide proporcional y bobina del bloque de control</title>
<rect x="0" y="0" width="800" height="300" rx="12" fill="#f1f5f9"/>
<rect x="10" y="40" width="136" height="76" rx="8" fill="#ffffff" stroke="#334155" stroke-width="2"/>
<text x="78" y="70" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Joystick</text>
<text x="78" y="92" text-anchor="middle" font-size="13" fill="#1e293b">señal -10 a +10 V</text>
<rect x="171" y="40" width="136" height="76" rx="8" fill="#ffffff" stroke="#334155" stroke-width="2"/>
<text x="239" y="70" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Módulo de rampa</text>
<text x="239" y="92" text-anchor="middle" font-size="13" fill="#1e293b">suaviza el cambio</text>
<rect x="332" y="40" width="136" height="76" rx="8" fill="#ffffff" stroke="#334155" stroke-width="2"/>
<text x="400" y="70" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Amplificador</text>
<text x="400" y="92" text-anchor="middle" font-size="13" fill="#1e293b">0 a 1000 mA</text>
<rect x="493" y="40" width="136" height="76" rx="8" fill="#ffffff" stroke="#334155" stroke-width="2"/>
<text x="561" y="70" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Válvula prop.</text>
<text x="561" y="92" text-anchor="middle" font-size="13" fill="#1e293b">presión piloto variable</text>
<rect x="654" y="40" width="136" height="76" rx="8" fill="#ffffff" stroke="#334155" stroke-width="2"/>
<text x="722" y="70" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Bloque de control</text>
<text x="722" y="92" text-anchor="middle" font-size="13" fill="#1e293b">mueve la corredera</text>
<path d="M146 78 H171" stroke="#b45309" stroke-width="3" fill="none"/>
<path d="M165 72 l8 6 l-8 6 z" fill="#b45309"/>
<path d="M307 78 H332" stroke="#b45309" stroke-width="3" fill="none"/>
<path d="M326 72 l8 6 l-8 6 z" fill="#b45309"/>
<path d="M468 78 H493" stroke="#b45309" stroke-width="3" fill="none"/>
<path d="M487 72 l8 6 l-8 6 z" fill="#b45309"/>
<path d="M629 78 H654" stroke="#b45309" stroke-width="3" fill="none"/>
<path d="M648 72 l8 6 l-8 6 z" fill="#b45309"/>
<rect x="332" y="170" width="136" height="50" rx="8" fill="#ffffff" stroke="#334155" stroke-width="2" stroke-dasharray="6 4"/>
<text x="400" y="192" text-anchor="middle" font-size="13" fill="#1e293b">Solenoide direccional</text>
<text x="400" y="210" text-anchor="middle" font-size="13" fill="#1e293b">lado a o lado b</text>
<path d="M400 116 V170" stroke="#334155" stroke-width="2" stroke-dasharray="5 4" fill="none"/>
<path d="M468 195 H722 V116" stroke="#334155" stroke-width="2" stroke-dasharray="5 4" fill="none"/>
<text x="400" y="262" text-anchor="middle" font-size="13" fill="#1e293b">El signo de la señal elige el lado (a o b); la magnitud fija la presión piloto.</text>
<text x="400" y="282" text-anchor="middle" font-size="13" fill="#1e293b">Esquema conceptual, ilustración propia, no a escala.</text>
<text x="400" y="22" text-anchor="middle" font-size="14" fill="#1e293b">Presión piloto X2 (45 bar) como alimentación de la válvula proporcional</text>
</svg>
<figcaption>Cadena de señal del control proporcional: la desviación de la palanca se convierte en tensión, luego en corriente y finalmente en presión piloto. Ilustración propia basada en el principio descrito en el manual.</figcaption>
</figure>

### 1. La palanca sin contacto

Según el manual, el joystick es un transmisor inductivo lineal: dos bobinas por eje detectan el desplazamiento de un núcleo y la electrónica integrada lo convierte en una tensión proporcional entre **-10 y +10 V**. El signo indica el sentido (adelante/atrás, izquierda/derecha) y la magnitud, cuánto se desvió la palanca. Dos detalles de diseño valen la pena:

- **Redundancia**: al haber dos bobinas por eje, la electrónica puede detectar una discrepancia. La palanca incluye detección interna de fallas y una entrada de prueba para verificarla antes de arrancar.
- **Señal de neutro**: apenas la palanca sale de su posición neutral, envía 24 V que activan el relé de alimentación del amplificador. Sin esa confirmación, el amplificador no actúa.

Los pedales (marcha, freno de giro, apertura y cierre de la cuchara) usan el mismo principio con interruptores de posición neutral y de dirección.

### 2. El módulo de rampa

Entre la palanca y el amplificador, algunos movimientos (pluma, balancín, marcha y giro) pasan por un **módulo temporizador de rampa**. Su función es evitar que un golpe de palanca se traduzca en un golpe de presión: la señal sube y baja de manera gradual. Por eso el manual indica que la cuchara y el freno de giro no lo llevan: ahí se busca respuesta directa.

Esto es clave para el diagnóstico: una máquina "suave" y una "brusca" pueden tener el mismo hardware y diferir solo en un potenciómetro de tiempo de rampa. El manual habla de un rango de ajuste del orden de 80 ms a 1 s en los amplificadores tipo B, aplicable a la subida y a la bajada.

### 3. El amplificador proporcional

El amplificador toma la tensión de entrada (0 a 10 V en valor absoluto) y entrega una corriente de **0 a 1.000 mA** a la válvula proporcional. Tiene tres características que explican muchos ajustes:

- **Escalón inicial (aprox. 10 % de la señal)**: el solenoide necesita una corriente mínima para empezar a vencer su resorte. El amplificador "salta" a ese valor apenas la señal supera un 10 % aproximado, y desde ahí crece de forma lineal. Es la corriente *inferior*.
- **Escalón final (aprox. 90 % de la señal)**: otro ajuste fija la corriente *superior*, la que corresponde a carrera plena.
- **Lazo cerrado**: el módulo mide la corriente real del solenoide y la compara con la deseada, compensando derivas por temperatura del solenoide o variaciones de tensión de alimentación.

Los dos ajustes, inferior y superior, **se afectan entre sí**: por eso el manual pide repetirlos hasta que ambos valores se estabilicen. Y se calibran cuando se reemplaza un solenoide o un amplificador, no como mantenimiento rutinario.

### 4. La válvula proporcional y el bloque de control

La válvula solenoide proporcional toma la presión piloto X2 (45 bar) y entrega una presión proporcional a la corriente. Esa presión desplaza la corredera del bloque principal entre neutro y carrera plena. En paralelo, un solenoide direccional (lado a o lado b) dirige el aceite piloto al extremo correcto de la corredera. En resumen: **corriente = cuánto, solenoide direccional = hacia dónde**.

## Regulación de bombas: por qué hay que limitar la potencia

Las bombas de caudal variable podrían, en teoría, entregar su caudal máximo a presión máxima. Pero un motor eléctrico no puede dar esa potencia: sobrepasar su valor nominal provoca sobrecorriente y desconexiones. La solución clásica es el **control de potencia constante**, que el manual describe con la relación *p × Vg = constante*: cuando sube la presión de trabajo, el desplazamiento (y con él el caudal) baja, de modo que el producto, es decir la potencia consumida, se mantiene.

<figure class="diagram">
<svg viewBox="0 0 800 340" role="img" aria-labelledby="pc8-d2-title" style="width:100%;height:auto;font-family:inherit">
<title id="pc8-d2-title">Curva conceptual de una bomba con control de potencia constante: caudal máximo hasta el inicio de la desaceleración, tramo hiperbólico y corte de presión</title>
<rect x="0" y="0" width="800" height="340" rx="12" fill="#f1f5f9"/>
<path d="M80 280 V40 M80 280 H740" stroke="#334155" stroke-width="2" fill="none"/>
<path d="M680 280 V136 C640 120 600 112 594 112 C560 100 540 92 530 88 C510 78 495 70 480 64 C465 54 450 46 440 40" stroke="#b45309" stroke-width="4" fill="none"/>
<path d="M440 40 H96" stroke="#334155" stroke-width="2" stroke-dasharray="6 4" fill="none"/>
<path d="M680 136 H80" stroke="#64748b" stroke-width="1" stroke-dasharray="3 4" fill="none"/>
<circle cx="680" cy="136" r="5" fill="#b45309"/>
<circle cx="440" cy="40" r="5" fill="#b45309"/>
<text x="14" y="160" font-size="13" fill="#1e293b" transform="rotate(-90 14 160)" text-anchor="middle">Presión de trabajo</text>
<text x="410" y="318" text-anchor="middle" font-size="13" fill="#1e293b">Caudal de la bomba (desplazamiento)</text>
<text x="72" y="140" text-anchor="end" font-size="12" fill="#1e293b">180 bar</text>
<text x="72" y="44" text-anchor="end" font-size="12" fill="#1e293b">300 bar</text>
<text x="110" y="300" text-anchor="middle" font-size="12" fill="#1e293b">Q mín.</text>
<text x="680" y="300" text-anchor="middle" font-size="12" fill="#1e293b">Q máx.</text>
<text x="300" y="30" text-anchor="middle" font-size="13" fill="#1e293b">Corte de presión: la bomba vuelve a Q mín.</text>
<text x="665" y="170" text-anchor="end" font-size="13" fill="#1e293b">Inicio de desaceleración</text>
<text x="665" y="188" text-anchor="end" font-size="12" fill="#1e293b">(modo hidráulico constante)</text>
<text x="400" y="230" text-anchor="middle" font-size="13" fill="#1e293b">Tramo de potencia constante</text>
<text x="400" y="248" text-anchor="middle" font-size="12" fill="#1e293b">p × Vg = constante</text>
</svg>
<figcaption>Curva conceptual de una bomba con control de potencia: caudal máximo hasta el inicio de la desaceleración, tramo hiperbólico y corte de presión. Los valores de presión son los de referencia del manual de la PC8000-6; la forma de la curva es esquemática y no está a escala. Ilustración propia.</figcaption>
</figure>

### Qué hace la bomba en cada situación

La bomba principal es de pistones axiales con plato inclinado, para circuito abierto, y su regulador combina varias funciones. El manual describe los estados siguientes, que conviene tener claros para interpretar síntomas:

| Estado | Cuándo ocurre (según el manual) | Qué hace la bomba |
|---|---|---|
| **Q mínimo** | Motor detenido; o motor en marcha con los mandos sin usar 20 s o más; o interruptor de servicio activado | Se mantiene en caudal mínimo gracias a un pistón de posicionamiento con área grande unas tres veces la pequeña |
| **Q máximo** | Aceite a temperatura normal de operación, mandos en uso y presión de trabajo antes del inicio de desaceleración | Se desplaza al caudal máximo |
| **Medio caudal** | Mismo escenario, pero con aceite por debajo de la temperatura normal (calentamiento) | Limita el caudal a la mitad, para proteger el sistema con aceite frío |
| **Desaceleración** | La carga hidráulica supera la potencia nominal del motor; o, en modo hidráulico constante, presión de bomba superior a unos 180 bar | Reduce el desplazamiento hasta equilibrar fuerzas |
| **Corte de presión** | Presión de bomba superior a unos 300 bar | Pasa a Q mínimo sin importar el regulador de potencia |

El valor de 20 s sin uso de mandos tiene una consecuencia práctica: **una pala en espera trabaja con las bombas en caudal mínimo** para ahorrar energía y calor. Si el síntoma aparece justo después de reanudar un movimiento, la primera pregunta es si las válvulas de control de caudal (Y17, Y17a) están recibiendo la señal correcta.

## La regulación electrónica: EPM, ESR y MC7

La regulación electrónica es el modo estándar. Su lógica es sencilla de explicar: **medir cuánta carga llevan los motores y bajar X1 si se pasan de la potencia nominal**.

### Los componentes

- **EPM (módulo de alimentación)**: convierte los 24 V de batería en ±15 V y +5 V para alimentar los módulos de medición. Si falla, los demás módulos quedan sin referencia.
- **ESR (rectificadores de señal)**: son tres, uno para la tensión de red y uno para la corriente de cada motor. Convierten una señal alterna proporcional en una continua proporcional que entiende el MC7. El manual advierte que sus potenciómetros internos **no deben tocarse** porque solo se pueden ajustar con generador de alta frecuencia y osciloscopio; si se desajustan, se cambia el módulo.
- **MC7 (microcontrolador)**: procesa las señales de entrada de 0 a 5 V y controla en lazo cerrado hasta cuatro solenoides proporcionales con corriente modulada por ancho de pulso (PWM), lo que minimiza la histéresis. Todas sus funciones de calibración y diagnóstico se acceden por una interfaz serie.

### El flujo de decisión

El MC7 compara continuamente la **potencia que se está demandando** (calculada a partir de tensión y corrientes) con la **potencia nominal** almacenada. Mientras la demanda sea menor, no interviene. Cuando la supera, reduce la presión X1 mediante las válvulas proporcionales Y61-1 (motor 1) e Y61-2 (motor 2). Con X1 más baja, el regulador de cada bomba empieza antes a desacelerar, el par baja y el motor vuelve a la potencia nominal. Es un control en bucle cerrado: **se mide, se corrige, se vuelve a medir**.

Una consecuencia útil: las bombas auxiliares (piloto, lubricación, accionamiento de enfriadores) no están afectadas por este control, de modo que una falla en el lazo de potencia no apaga los servicios básicos de la máquina.

### Un chequeo eléctrico que explica el diseño

El manual incluye una verificación que muestra la lógica del conjunto. La salida continua de un módulo ESR debe ser aproximadamente **un cuarto** de su entrada alterna (con 1 % de tolerancia); variaciones mayores indican módulo defectuoso. Y la salida esperada se puede calcular a partir de las relaciones de los transformadores y de las lecturas de los instrumentos de cabina: diferencias de más del 20 % apuntan a un transformador defectuoso. Es decir, antes de sospechar del MC7, hay que verificar que las medidas que le llegan sean creíbles.

## Los tres métodos para ajustar X1: por qué y cuándo

El manual describe tres métodos para ajustar la presión X1 y los parámetros del MC7. Los tres persiguen lo mismo, pero difieren en herramientas y en riesgo.

| Método | Herramienta | Para qué suele usarse | Quién lo hace |
|---|---|---|---|
| **A** | Fuente de 24 V aplicada a terminales del tablero | Ajuste de X1, de la potencia exigida y del factor PID sin equipo especial | Personal de servicio capacitado |
| **B** | Herramienta de servicio electrónica BB-3 por el puerto serie de cabina | Lo mismo, con menús, valores numéricos y almacenamiento en memoria | Solo personal autorizado |
| **C** | Laptop con programa de servicio por el mismo puerto | Lo mismo, con parámetros visibles en pantalla, claves y escritura permanente | Solo personal autorizado |

Aquí está el punto de fondo: los tres métodos escriben los **mismos parámetros** en el MC7. Lo que cambia es la comodidad y el riesgo de error. Por eso el manual restringe B y C: un valor equivocado en memoria afecta el comportamiento de toda la regulación y queda guardado aunque se apague la máquina. Esta guía no reproduce claves ni secuencias de terminales; si necesitas ejecutarlos, usa el manual del equipo y el soporte del fabricante.

### Qué ajusta cada parámetro y cuándo corresponde tocarlo

**1. Presión X1 (corriente máxima de la válvula proporcional)**

- **Para qué sirve**: define el techo de X1, es decir, el punto más alto desde el que el MC7 empezará a restarle presión cuando haya sobrecarga.
- **Cuándo ajustarla**: tras reemplazar la válvula proporcional Y61, el MC7 o cuando una verificación con manómetro muestre un valor fuera de tolerancia. El manual da 34 ± 0,5 bar como valor objetivo del método A, y recuerda que los valores finales del equipo están en su reporte de prueba.
- **Condiciones previas**: aceite a temperatura normal de operación, presión piloto correcta y sistema sin aire. Ajustar con aceite frío o con aire en el circuito da lecturas que no se sostienen.
- **Síntoma de desajuste**: X1 demasiado alta, motores con corrientes por encima de lo nominal; X1 demasiado baja, caudal reducido y movimientos lentos con motores poco cargados.

**2. Potencia exigida (demanda de potencia)**

- **Para qué sirve**: enseña al MC7 cuál es el punto de carga "pico" de cada motor. Es la referencia con la que compara la demanda real.
- **Cómo se obtiene (idea general)**: el manual lleva la máquina a una condición controlada de carga máxima, con las bombas en caudal máximo y los ventiladores del enfriador a plena velocidad, y guarda la lectura. El ejemplo del manual habla de unos 128 A por motor con una presión del orden de 172 bar en cada una de las cuatro bombas, **valor de ejemplo del manual de la PC8000-6, no una cifra universal**.
- **Por qué es delicado**: para llegar a esa carga se desactivan temporalmente protecciones y se sube la presión de las válvulas de alivio principales. Un error aquí puede sobrecargar un motor eléctrico. Por eso se hace motor por motor, con el procedimiento completo a mano y al final se vuelven a dejar los alivios en su valor de operación.
- **Cuándo ajustarla**: tras cambiar motores eléctricos, bombas o el propio MC7; o si los motores disparan por sobrecorriente sin causa mecánica a la vista.

**3. Factor PID**

- **Para qué sirve**: multiplica todos los parámetros del lazo proporcional, integral y derivativo para afinar la "agresividad" de la regulación. El rango del manual va de 80 % a 120 %, y en el método A la salida analógica del terminal correspondiente refleja el valor (0 V = 80 %, 2,5 V = 100 %, 5 V = 120 %).
- **Cuándo ajustarlo**: cuando hay movimientos desiguales al izar y girar a la vez. La lógica del manual es reducir el factor por pasos cortos hasta que el movimiento sea suave; y, si no hay problema, el afinado fino consiste en subirlo hasta el límite de inestabilidad y retroceder un poco.
- **Advertencia de criterio**: ajustar el PID para "tapar" otra falla (aire, filtro de piloto saturado, válvula proporcional pegada) solo enmascara el problema. Primero se verifican presiones y señales; el PID es el último paso.

### El modo hidráulico constante

El manual deja un recurso útil: cada motor tiene una válvula de tres vías que permite cambiar de regulación electrónica a **regulación hidráulica constante**, donde X1 se fija con una válvula reductora (valores de referencia del manual: del orden de 11 a 13 bar). Se usa para pruebas y como operación de emergencia si falla la electrónica. Es un buen discriminador de fallas: **si la máquina se comporta bien en modo hidráulico y mal en electrónico, el problema está en el lazo electrónico; si falla igual en los dos, el problema es hidráulico o mecánico**.

## Síntoma, causa probable y qué revisar

La tabla siguiente organiza el diagnóstico. Las columnas de causa y revisión mezclan lo que el manual establece con **criterio de taller**, marcado con (T): son orientaciones prácticas razonables, no instrucciones del manual, y siempre deben contrastarse con él.

| Síntoma | Causa probable | Qué revisar primero |
|---|---|---|
| Movimientos lentos en todos los ejes | X1 baja, presión piloto baja, bombas en medio caudal por aceite frío | Presión X2 (45 bar) y X4 (60 bar), temperatura del aceite, estado de Y17 / Y17a |
| Un solo movimiento lento o sin respuesta | Amplificador o solenoide proporcional de ese eje; palanca con falla | Corriente del amplificador frente al valor del esquema; señal de la palanca (T) |
| Movimiento brusco o a golpes | Tiempo de rampa corto, amplificador mal calibrado, factor PID agresivo | Ajustes de rampa y de corriente inferior; factor PID solo después de descartar lo anterior |
| Movimientos desiguales al izar y girar a la vez | Factor PID alto, aire en el sistema, presión piloto fuera de rango | Presión piloto, purga de aire, y luego PID por pasos cortos |
| Zona muerta: la palanca se mueve y no pasa nada al inicio | Corriente inferior del amplificador demasiado baja | Recalibrar corriente inferior tras cambio de solenoide o amplificador |
| Carrera incompleta aunque la palanca llegue al tope | Corriente superior demasiado baja, o presión piloto insuficiente | Corriente superior del amplificador y presión X2 |
| Motores eléctricos con corriente alta o disparos | X1 alta, potencia exigida mal almacenada, MC7 sin señal de carga | X1 con manómetro, alimentación EPM, salidas ESR contra su relación 1:4 |
| Pala sin fuerza con motores poco cargados | X1 baja, bombas limitadas a Q mínimo o medio caudal, fuga interna | Estado de Y17 / Y17a, modo hidráulico de prueba, temperatura (T) |
| Presión piloto que cae al parar los motores | Fuga en el circuito piloto o acumulador sin precarga | Prueba de retención del acumulador (el manual espera estabilidad por unos 5 min) |
| La bomba no baja a Q mínimo en reposo | Válvula de corte o mecanismo de regulación pegado | Condición de reposo de 20 s, interruptor de servicio, alivio principal |
| Alarmas del MC7 o lectura eléctrica incoherente | Falla de EPM, ESR o cableado | Tensiones de salida del EPM; módulos conectados uno a uno para aislar cortocircuitos |

Un orden de trabajo que casi nunca falla: **primero presiones piloto, luego señal eléctrica, luego regulación, y al final parámetros**. Cambiar parámetros antes de verificar lo básico es la forma más rápida de empeorar un problema pequeño.

## Seguridad: lo que no se negocia

- **Tensión residual y partes móviles**: las pruebas del manual requieren motores en marcha, mandos activos y, en algunos casos, simular señales con puentes. Cada paso se hace con la zona despejada y comunicación clara entre quien opera y quien mide.
- **Presión almacenada**: el acumulador piloto retiene presión con la máquina apagada y puede permitir movimientos de bajada. Se despresuriza según el procedimiento del manual antes de abrir líneas.
- **Calibraciones que deshabilitan protecciones**: algunos ajustes suben temporalmente los alivios o desactivan funciones. Registrar el valor original antes de modificarlo y restaurarlo al terminar es obligatorio, no opcional.
- **Parámetros almacenados**: lo que se escribe en la memoria del MC7 persiste aunque se corte la energía. Antes de modificar, anotar los valores iniciales y el reporte de prueba del equipo.
- **Respetar la autorización**: los métodos B y C quedan reservados, según el manual, a personal autorizado. No es burocracia: es una barrera de calidad.

## Resumen

El control de la PC8000-6 es una cadena: la palanca genera una tensión, el amplificador la convierte en corriente, la válvula proporcional la convierte en presión piloto y la corredera la convierte en movimiento. La regulación de bombas es otra cadena que mide la carga eléctrica de los motores y reduce X1 para que la potencia no se pase de la nominal. Entender las presiones X1 a X4, saber qué ajuste corresponde a qué síntoma y respetar el orden de diagnóstico (presiones, señales, regulación, parámetros) evita la mayoría de los ajustes innecesarios. Y los procedimientos exactos, con sus valores y advertencias, se leen siempre en el manual del equipo.

Para reforzar los fundamentos: [tipos de bombas hidráulicas](/posts/bombas-hidraulicas-tipos-engranajes-paletas-pistones/), [cómo leer símbolos hidráulicos ISO 1219](/posts/simbolos-hidraulicos-iso-1219-como-leer/) y [fallas comunes del sistema hidráulico](/posts/fallas-comunes-sistema-hidraulico-diagnostico/). Para ver el contraste con circuitos de menor escala, revisa [circuitos abiertos y cerrados](/posts/circuitos-hidraulicos-abiertos-cerrados-diferencias/) y [por qué una excavadora pierde fuerza](/posts/por-que-una-excavadora-pierde-fuerza/). Sobre la máquina en sí y su lubricación: [componentes de la pala PC8000](/posts/pala-hidraulica-minera-komatsu-pc8000-componentes/) y [lubricación centralizada en palas mineras](/posts/lubricacion-centralizada-pala-minera-pc5500/).

Este artículo es una explicación independiente con fines formativos; no está avalado ni respaldado por el fabricante, y los valores citados son los del manual de la PC8000-6 o están marcados como referenciales (verificar en el manual del equipo).

**Fuentes**: Manual de servicio de la pala hidráulica PC8000-6, secciones 2, 5 y 7, disponible en [Maquinarias Pesadas](https://www.maquinariaspesadas.org/blog/713-manual-servicio-pala-hidraulica-pc8000-6-komatsu).
