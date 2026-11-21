---
title: "Convertidor de par, divisor de par y acoplamiento hidráulico"
published: 2026-11-22
draft: false
featured: false
description: "Diferencias entre acoplamiento hidráulico, convertidor y divisor de par: rodete, turbina, estator, multiplicación, calado, embrague de traba y prueba de calado."
category: maquinaria-pesada
formato: concepto
nivel: intermedio
tags:
  - "convertidor-de-par"
  - "divisor-de-par"
  - "acoplamiento-hidraulico"
  - "prueba-de-calado"
  - "tren-de-fuerza"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/transmisiones/convertidor-de-par-funcionamiento-divisor-acoplamiento-hidraulico
author: redaccion-maquinaria
reviewedBy: redaccion-maquinaria
aiAssisted: true
faq:
  - q: "¿Qué diferencia hay entre un acoplamiento hidráulico y un convertidor de par?"
    a: "El acoplamiento hidráulico tiene solo rodete y turbina, y entrega el mismo par que recibe: transmite fuerza pero no la multiplica. El convertidor añade un estator fijo que cambia el sentido del aceite que sale de la turbina y lo devuelve al rodete empujando en el sentido de giro. Ese aporte es lo que multiplica el par cuando la carga es alta."
  - q: "¿Qué es el calado del convertidor y cuándo ocurre?"
    a: "Es la condición en la que la turbina y el eje de salida están detenidos mientras el rodete sigue girando con el motor. Ocurre, por ejemplo, cuando la máquina empuja contra una carga que no puede mover. En ese punto el convertidor entrega su multiplicación máxima de par, pero casi toda la potencia se convierte en calor en el aceite, por lo que no conviene mantenerlo."
  - q: "¿Qué indica la velocidad de calado en una prueba?"
    a: "Según el curso, una velocidad de calado menor que la especificada suele señalar un problema de rendimiento del motor, y una mayor, un problema del tren de impulsión. La prueba se hace con el motor a máxima aceleración y el eje de salida detenido. El valor de referencia y el procedimiento exacto son los del manual de su máquina, no un número universal."
  - q: "¿Para qué sirve el embrague de traba?"
    a: "Une la caja giratoria del convertidor con la turbina y el eje de salida para que giren a la velocidad del motor, con lo que se elimina el deslizamiento y mejora la eficiencia a velocidades altas. Se acopla de forma automática cuando las condiciones de operación piden mando directo. Cuando se libera, el convertidor vuelve a multiplicar el par como uno convencional."
  - q: "¿Cuál es la diferencia entre convertidor y divisor de par?"
    a: "El divisor de par es un convertidor al que se añade un conjunto de engranajes planetarios en su parte delantera. Reparte el par del motor entre el camino hidráulico y el mecánico, en una proporción variable que el curso sitúa hasta en 70/30 según la carga. Con carga ligera se comporta casi como un mando directo; con carga pesada actúa como convertidor."
sources:
  - title: "Curso: convertidores de par, divisores de par y acoplamiento hidráulico de potencia — Maquinarias Pesadas"
    url: "https://www.maquinariaspesadas.org/blog/6678-curso-convertidores-par-divisores-par-acoplamiento-hidraulico-potencia"
related:
  - transmision-retroexcavadora-power-shuttle-convertidor
  - embrague-unidireccional-en-transmisiones-automaticas
  - como-funcionan-los-embragues-en-transejes-automaticos
---

Entre el volante del motor y la transmisión de una máquina pesada no hay, en
la mayoría de los diseños, un embrague de fricción que el operador pise. Hay
un dispositivo que une los dos con aceite: no hay contacto mecánico, solo
energía de un fluido en movimiento. Ese es el principio de los tres mandos
hidráulicos que explica esta guía, ordenados de menor a mayor complejidad:
**acoplamiento hidráulico, convertidor de par y divisor de par**.

El contenido está basado en un curso de formación de tren de fuerza de un
fabricante de maquinaria, por lo que los ejemplos de máquinas y las
proporciones son los de ese curso. Para valores de presión, velocidades de
calado y procedimientos, prevalece el manual de servicio de su equipo.

## Acoplamiento hidráulico: transmitir sin multiplicar

La imagen clásica son dos ventiladores eléctricos enfrentados: si uno gira, el
aire que empuja hace girar al otro. En un acoplamiento hidráulico el aire se
reemplaza por aceite, que al tener más masa transmite más energía. La
potencia mecánica del motor se convierte en potencia hidráulica y esta vuelve
a convertirse en mecánica para mover el eje de salida.

Hay dos piezas, ambas con álabes rectos que van del borde interno al externo
y con perfil redondeado:

- El **rodete** (o bomba), unido al volante, convierte la potencia mecánica en
  energía del aceite.
- La **turbina**, unida al eje de salida, la convierte de nuevo en potencia
  mecánica.

Ambas giran muy cerca una de otra dentro de una caja llena de aceite y nunca
se tocan. El rodete lanza el aceite del centro hacia el borde por fuerza
centrífuga, el aceite golpea los álabes de la turbina, cede su energía y
vuelve hacia el centro para repetir el ciclo.

### Flujo giratorio y flujo de vórtice

El curso distingue dos movimientos del aceite que en la práctica se combinan:

- **Flujo giratorio:** el aceite gira junto con el rodete y la turbina. Ocurre
  cuando ambos van casi a la misma velocidad, con la máquina en vacío o con
  muy poca carga. El deslizamiento es mínimo y el par de salida tiende a cero.
- **Flujo de vórtice:** el aceite sube por el rodete, atraviesa la turbina y
  regresa por dentro, en forma de espiral. Aparece cuando la turbina está
  retenida por la carga: el deslizamiento entre rodete y turbina es máximo y
  el par de salida es el mayor que puede dar el conjunto.

La regla del acoplamiento es que **el par de entrada es igual al de salida**.
Hay además un inconveniente: el aceite que sale de la turbina fluye en sentido
contrario al del rodete y tiende a frenarlo, lo que impone una carga
innecesaria al motor. Para multiplicar el par y corregir ese efecto hace falta
un tercer elemento.

## Convertidor de par: el estator marca la diferencia

Un convertidor de par es un acoplamiento hidráulico al que se le añade un
**estator**. Sigue uniendo el motor con la transmisión, pero ahora también
puede multiplicar el par. Sus partes son una caja giratoria unida al volante,
el rodete, la turbina, el estator y el eje de salida.

- La **caja y el rodete** giran con el motor. El rodete va estriado al volante.
- La **turbina** recibe el aceite y mueve el eje de salida, al que está
  estriada.
- El **estator** no gira. Está fijo a la caja del convertidor y es un elemento
  de reacción cuyos álabes redirigen el aceite que sale de la turbina para que
  entre otra vez al rodete empujando en el mismo sentido de su giro. Esa fuerza
  extra sobre el rodete es la que se traduce en multiplicación de par.

<figure class="diagram">
<svg viewBox="0 0 760 420" role="img" aria-label="Corte esquemático de un convertidor de par: el rodete a la izquierda unido al volante, la turbina a la derecha unida al eje de salida y el estator fijo abajo en el centro; el aceite circula en lazo subiendo por el rodete, cruzando a la turbina por arriba, bajando por la turbina y volviendo al rodete a través del estator" style="width:100%;height:auto;font-family:inherit">
<rect x="0" y="0" width="760" height="420" rx="14" fill="#f8fafc"/>
<text x="380" y="30" text-anchor="middle" font-size="17" font-weight="700" fill="#0f172a">Convertidor de par: circuito del aceite</text>
<ellipse cx="380" cy="190" rx="150" ry="110" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
<ellipse cx="380" cy="190" rx="68" ry="40" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
<path d="M230 190 A150 110 0 0 1 380 80" fill="none" stroke="#0369a1" stroke-width="12"/>
<path d="M230 190 A150 110 0 0 0 380 300" fill="none" stroke="#0369a1" stroke-width="12"/>
<path d="M530 190 A150 110 0 0 0 380 80" fill="none" stroke="#15803d" stroke-width="12"/>
<path d="M530 190 A150 110 0 0 1 400 298" fill="none" stroke="#15803d" stroke-width="12"/>
<rect x="352" y="232" width="56" height="70" rx="4" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<g stroke="#334155" stroke-width="2" fill="none">
<path d="M218 190 H96"/>
<path d="M380 302 V372"/>
<path d="M500 232 V372 H700"/>
</g>
<rect x="40" y="150" width="56" height="80" rx="4" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
<text x="68" y="195" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">Volante</text>
<g stroke="#334155" stroke-width="2.5" fill="none">
<path d="M290 190 V150" stroke-dasharray="0"/>
<path d="M360 120 H400"/>
<path d="M470 190 V230"/>
<path d="M400 270 H360"/>
</g>
<g fill="#334155">
<polygon points="290,134 284,150 296,150"/>
<polygon points="410,120 396,114 396,126"/>
<polygon points="470,244 464,230 476,230"/>
<polygon points="350,270 364,264 364,276"/>
</g>
<g font-size="14" fill="#0f172a">
<text x="196" y="260" text-anchor="end" font-weight="700">Rodete</text>
<text x="196" y="278" text-anchor="end" font-size="12">gira con el motor</text>
<text x="564" y="156" font-weight="700">Turbina</text>
<text x="564" y="174" font-size="12">mueve el eje de salida</text>
<text x="396" y="332" font-weight="700">Estator</text>
<text x="396" y="350" font-size="12">fijo a la caja</text>
<text x="748" y="358" text-anchor="end" font-size="12">Eje de salida</text>
<text x="396" y="400" text-anchor="middle" font-size="11" fill="#475569">Flechas: sentido del aceite. Esquema simplificado, no a escala.</text>
</g>
</svg>
<figcaption>Semicorte esquemático de un convertidor de par. El aceite sube por el rodete, cruza a la turbina, baja y vuelve al rodete a través del estator. Ilustración propia, basada en la descripción del curso.</figcaption>
</figure>

### El circuito del aceite y las válvulas de alivio

El aceite lo suministra la bomba de la transmisión. Entra por un orificio junto
al eje de salida, pasa por la maza, lubrica su cojinete, llega al rodete y
recorre el lazo rodete, turbina, estator y de nuevo rodete. Sale por un
orificio del soporte del convertidor, por debajo del eje de salida.

Dos válvulas controlan la presión:

- La **válvula de alivio de entrada** limita la presión máxima en el
  convertidor. Su función principal es evitar daños a los componentes cuando
  el motor arranca con el aceite frío y espeso.
- La **válvula de alivio de salida** mantiene una presión mínima. Es
  necesaria porque el aceite debe estar presurizado para reducir la
  **cavitación**, es decir, la formación de burbujas de vapor alrededor de los
  álabes, que baja la eficiencia.

El aceite cumple otras tres funciones que el curso resume bien: amortigua las
cargas de impacto, transporta el calor hacia afuera y lubrica los
componentes. La salida del convertidor va a un enfriador, y por eso el
circuito de enfriamiento de la transmisión forma parte del diagnóstico.

### Cómo se adapta a la carga

El convertidor se ajusta solo, sin que nadie lo mande:

| Condición | Velocidad rodete / turbina | Par de salida | Velocidad de salida |
| --- | --- | --- | --- |
| Sin carga o carga muy ligera | Casi iguales | Bajo, como un acoplamiento | Alta |
| Carga alta | El rodete gira bastante más rápido | Multiplicado | Baja |
| Calado | Rodete girando, turbina detenida | Máximo | Cero |

En calado, la turbina permanece fija y el rodete sigue girando; es la
multiplicación máxima de par, pero toda la potencia del motor se disipa como
calor en el aceite. Por eso el calado es una condición de prueba o de
esfuerzo breve, no de trabajo continuo.

Las ventajas que destaca el curso son tres: multiplica el par cuando la carga
lo exige, evita que el motor se cale con cargas altas (la máquina se
detiene, el motor no) y permite el uso de una servotransmisión, porque el
motor puede seguir girando mientras se cambia de marcha. Además deja que el
sistema hidráulico de la máquina siga funcionando con el equipo detenido.

## Estator con embrague unidireccional

En el convertidor básico el estator está fijo. En una variante muy común, el
estator va montado sobre un **embrague unidireccional**, de modo que puede
quedar sujeto o girar libre según la carga:

- Con **carga pesada**, el aceite golpea la cara delantera de los álabes del
  estator y trata de girarlo; los rodillos del embrague se "amontonan"
  entre la leva y la maza y lo bloquean. El estator redirige el aceite al
  rodete y multiplica el par.
- Cuando suben las velocidades de rodete y turbina, el aceite empieza a pegar
  en la parte de atrás de los álabes del estator. Los rodillos ya no se
  amontonan, el estator gira en rueda libre y el convertidor se comporta más
  como un acoplamiento hidráulico.

El beneficio es menos calor y menos arrastre en carga ligera, manteniendo la
multiplicación con carga pesada. El curso cita mototraíllas, retroexcavadoras,
camiones de obra y volquetes articulados entre los equipos que lo usan. El
funcionamiento del embrague unidireccional en detalle se explica en
[este artículo](/posts/embrague-unidireccional-en-transmisiones-automaticas/).

## Divisor de par: convertidor más planetario

El divisor de par es un convertidor convencional con un **conjunto de
engranajes planetarios integrado en la parte delantera**. Permite dividir el
par del motor entre el camino hidráulico y el mecánico; el curso indica que la
división puede llegar a 70/30, según la carga. Tanto la salida del convertidor
como la del conjunto planetario van al eje de salida.

Las conexiones del planetario, tal como las describe el curso, son:

- el **engranaje central**, estriado al volante, gira a las rpm del motor;
- la **corona**, estriada a la turbina;
- el **portaplanetarios**, estriado al eje de salida.

El comportamiento depende de la carga:

- **Carga ligera.** El portaplanetarios ofrece poca resistencia y todo el
  conjunto gira a la misma velocidad. Casi 30 % del par pasa por la vía
  mecánica como mando directo y no hay multiplicación.
- **Carga pesada.** El portaplanetarios se resiste a girar. Como el engranaje
  central sigue a la velocidad del motor, los planetarios giran sobre sus
  ejes y frenan la corona; al bajar la velocidad de la turbina, el convertidor
  multiplica el par, y el conjunto planetario también multiplica el suyo.
- **Calado.** Si la resistencia es muy alta, el portaplanetarios y el eje de
  salida se detienen y la corona gira lentamente hacia atrás. Es la
  multiplicación máxima de ambos.

Las ventajas son una aplicación de potencia más continua, mayor par de salida,
absorción de choques que alarga la vida del tren de fuerza y posibilidad de
mando directo, que mejora eficiencia y consumo. El curso lo asocia a los
tractores de cadenas, que trabajan en terreno difícil sin crestas de potencia y
cuyos convertidores permanecen calados más tiempo que los de cualquier otra
máquina de ese fabricante.

## Variantes con embrague

Algunas máquinas necesitan mando hidráulico en unas condiciones y directo en
otras. El curso describe tres soluciones:

**Embrague de traba (lockup).** Un pistón con planchas y discos, dentro de la
caja del convertidor, une la caja giratoria con la turbina. Al acoplarse, el
eje de salida gira a la velocidad del motor, la turbina y el rodete van igual
y no hay multiplicación. Una válvula de control sobre la cubierta, o un
solenoide mandado por el módulo de control electrónico, gobierna el aceite que
llega al pistón por un conducto del eje de salida. Se acopla automáticamente
cuando las condiciones piden mando directo y, al soltarse, el convertidor
vuelve a multiplicar. Es habitual en cargadores de ruedas y mototraíllas
grandes: multiplicación con carga alta, mando directo a velocidad alta y mejor
consumo de combustible.

**Embrague impulsor.** Es un convertidor convencional en el que la caja
impulsa el rodete a través de un embrague multidisco accionado
hidráulicamente y controlado por un solenoide proporcional. Con corriente cero
en el solenoide, la presión es máxima y se obtiene el par pleno; al aumentar
la corriente, la presión baja, el embrague patina, el rodete gira más lento y
el par disminuye. Sirve para limitar el patinaje de las ruedas del cargador,
reducir el desgaste de los neumáticos y dejar más potencia al sistema
hidráulico.

**Convertidor de capacidad variable.** Tiene un rodete interior y uno exterior;
el exterior se une a la caja mediante un embrague impulsor. Con presión plena,
ambos giran juntos y el par es el máximo; al bajar la presión, el embrague
patina y la capacidad del convertidor disminuye. Persigue lo mismo: menos
giro de ruedas y potencia desviada al sistema hidráulico.

## Pruebas y diagnóstico

El curso menciona tres pruebas del convertidor: **calado**, **válvula de alivio
de entrada** y **válvula de alivio de salida**.

### Prueba de calado

Se hace cuando se sospecha de un problema del convertidor. Con el eje de
salida detenido (calado) y el motor a máxima aceleración, se mide la velocidad
a la que se estabiliza el motor y se compara con la especificada. La lectura da
una indicación del conjunto motor y tren de impulsión:

- **Velocidad de calado baja:** suele indicar un problema de rendimiento del
  motor, porque el motor no logra llegar a su régimen con la carga del
  convertidor.
- **Velocidad de calado alta:** suele indicar un problema del tren de
  impulsión, por ejemplo deslizamiento interno que descarga el convertidor.

El curso no da valores ni tiempos. Siga el procedimiento del manual de su
máquina (freno aplicado, temperatura de aceite, duración máxima), porque una
prueba mal hecha recalienta el aceite y puede dañar el equipo.

### Pruebas de las válvulas de alivio

Se miden con manómetro en el puerto de presión correspondiente. En la de
salida, el curso interpreta así:

- **Presión baja:** fuga en el convertidor, caudal insuficiente de la bomba o
  válvula de alivio con funcionamiento incorrecto.
- **Presión alta:** válvula de alivio con funcionamiento incorrecto o
  bloqueo del sistema.

### Sobrecalentamiento

El curso no tiene un apartado de sobrecalentamiento, pero sus datos permiten
ordenar la búsqueda. Estas son deducciones, no una tabla del fabricante.

| Síntoma | Causa probable | Qué comprobar |
| --- | --- | --- |
| Aceite caliente de forma persistente | Calado frecuente o prolongado, trabajo siempre a baja velocidad | Hábitos de operación, uso del embrague de traba o de la marcha adecuada |
| Temperatura alta con carga ligera | Estator sin rueda libre (embrague unidireccional agarrotado) | Estator, comportamiento a velocidad de crucero |
| Presión de salida baja y calentamiento | Fuga, bomba débil o alivio defectuoso | Presión de la válvula de alivio de salida, caudal de la bomba |
| Presión de salida alta | Alivio defectuoso o restricción en el enfriador | Válvula de alivio, enfriador y líneas |
| Máquina sin fuerza y motor revoluciona de más | Deslizamiento en el tren de impulsión | Prueba de calado, presiones de embragues |
| Máquina sin fuerza y motor flojo | Problema del motor | Prueba de calado con velocidad baja, diagnóstico del motor |

## Errores comunes

- **Esperar multiplicación de un acoplamiento hidráulico.** Sin estator, el
  par de salida es igual al de entrada.
- **Mantener la máquina en calado "para probar".** Genera calor rápido y puede
  dañar el aceite y los sellos.
- **Probar el calado sin consultar el manual.** Los valores, la duración y las
  condiciones son específicos de cada máquina.
- **Confundir divisor con convertidor.** El divisor lleva un planetario
  delantero y reparte el par; el convertidor solo es hidráulico.
- **Ignorar las válvulas de alivio.** Una presión de salida baja favorece la
  cavitación, que reduce la eficiencia sin ruido evidente.
- **Dar por hecho que la "transmisión patina".** El síntoma puede venir del
  convertidor, de los embragues o del motor; la prueba de calado ayuda a
  distinguirlo.

## Para seguir leyendo

Para ver un convertidor trabajando en una máquina real, con su inversor y los
puntos de presión, lea la [transmisión de la retroexcavadora con power
shuttle](/posts/transmision-retroexcavadora-power-shuttle-convertidor/). El
[embrague unidireccional](/posts/embrague-unidireccional-en-transmisiones-automaticas/)
detalla el mecanismo del estator libre, y los [embragues de un transeje
automático](/posts/como-funcionan-los-embragues-en-transejes-automaticos/)
muestran el paquete de discos y planchas que también usan el embrague de traba
y las servotransmisiones. Lo que viene detrás del convertidor se explica en
[servotransmisión planetaria y embragues
hidráulicos](/posts/servotransmision-planetaria-embragues-hidraulicos-maquinaria/).

**Fuentes:** curso de formación de tren de fuerza sobre convertidores y
divisores de par, publicado en [Maquinarias
Pesadas](https://www.maquinariaspesadas.org/blog/6678-curso-convertidores-par-divisores-par-acoplamiento-hidraulico-potencia).
Valores referenciales; prevalece el manual de servicio del equipo.
