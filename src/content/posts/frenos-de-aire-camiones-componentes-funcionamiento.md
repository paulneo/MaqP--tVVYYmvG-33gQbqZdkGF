---
title: "Frenos de aire en camiones: componentes y funcionamiento"
published: 2026-11-25
draft: false
featured: false
description: "Principios del freno de aire de camión: energía y FMVSS 121, leva en S, cámaras, ajustadores de tensión, frenos de resorte y válvulas de aplicación y relevo."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "frenos-de-aire"
  - "camiones"
  - "camara-de-freno"
  - "ajustador-de-tension"
  - "freno-de-estacionamiento"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/frenos/frenos-de-aire-camiones-componentes-funcionamiento
author: servicio-campo
reviewedBy: servicio-campo
aiAssisted: true
faq:
  - q: "¿Por qué los camiones usan frenos de aire en lugar de hidráulicos?"
    a: "Porque el aire comprimido se produce a bordo sin límite con el compresor del motor, una pequeña fuga no deja el sistema sin fluido de trabajo y el mismo aire permite controlar los frenos de remolques. Además, los frenos de resorte del circuito de estacionamiento se aplican solos cuando la presión cae, lo que agrega un respaldo mecánico. En vehículos pesados, la fuerza necesaria en las ruedas sería muy difícil de lograr con el pie y un circuito hidráulico simple."
  - q: "¿Qué exige la norma FMVSS 121 sobre el tiempo de aplicación del freno?"
    a: "Según el curso de GM Colmotores, el tiempo desde que el conductor pisa el pedal hasta que cada actuador del freno de servicio alcanza 60 psi no debe superar 0,45 segundos. El tiempo de liberación, medido mientras la presión del actuador baja de 95 a 5 psi, no debe pasar de 0,55 segundos. Es una norma federal de Estados Unidos que cada camión debe cumplir para poder fabricarse."
  - q: "¿Para qué sirve el ajustador de tensión?"
    a: "Es la palanca que une la varilla de empuje del actuador con la flecha de levas. Convierte el empuje lineal en giro de la leva y permite compensar el desgaste de las balatas. Los manuales se ajustan girando un tornillo sinfín; los automáticos lo hacen solos en cada aplicación. Un ajustador desajustado alarga la carrera de la varilla y reduce la fuerza de frenado."
  - q: "¿Qué pasa si un camión con frenos de aire pierde presión?"
    a: "Los frenos de resorte se aplican. En el sistema que describe el curso, si la presión dentro de la válvula del freno de estacionamiento cae por debajo de 45 psi (310 kPa), el resorte de la válvula la hace saltar y se aplica el freno de estacionamiento. Por eso no se debe circular con poca presión ni intentar mover el vehículo sin recuperarla, salvo con el procedimiento de remolque del fabricante."
  - q: "¿Qué significa enjaular el freno de resorte?"
    a: "Es comprimir y retener mecánicamente el resorte de la cámara de estacionamiento con su perno de liberación, para soltar el freno sin aire o para trabajar en la cámara con seguridad. El curso describe los pasos: retirar el perno de su alojamiento, insertarlo y girarlo un cuarto de vuelta, colocar tuerca y arandela y apretar hasta que sobresalga una longitud mínima. Nunca desarme una cámara de resorte: el resorte guarda mucha energía."
sources:
  - title: "Curso: principios de frenos de aire, componentes, operación y aplicación (GM Colmotores) — Mecánico Automotriz"
    url: "https://www.mecanicoautomotriz.org/1454-curso-principios-frenos-aire-componentes-operacion-aplicacion"
related:
  - suspension-neumatica-camiones-componentes-funcionamiento-averias
  - frenos-de-tambor-zapatas-ajuste-freno-estacionamiento
  - como-funciona-el-sistema-de-frenos-en-tu-vehiculo
---

Un camión cargado necesita una cantidad enorme de energía para detenerse, y
ningún pie humano podría producir esa fuerza a través de un circuito
hidráulico simple. Por eso los vehículos pesados frenan con **aire
comprimido**: el conductor solo dosifica la presión con el pedal, y es el aire
almacenado en los depósitos el que empuja las zapatas contra los tambores.

Esta guía recorre los principios y los componentes de un sistema de frenos de
aire de camión: por qué la velocidad pesa tanto en la frenada, qué exige la
norma FMVSS 121, cómo funcionan la leva en S, las cámaras, los ajustadores de
tensión y los frenos de resorte, y qué hace cada válvula del circuito. Está
basada en un curso del Departamento de Servicio de **GM Colmotores** para
camiones Chevrolet, de modo que sus figuras, carreras y presiones corresponden
a ese sistema y se presentan como ejemplo. Para valores de su camión, prevalece
el manual de servicio.

## Energía, velocidad y carga: por qué el freno manda

El curso abre con una comparación muy gráfica. Un camión con un motor de
**100 caballos** tarda un minuto en pasar de detenido a 60 millas por hora
(unos 97 km/h). Para detenerlo desde esa velocidad en **6 segundos**, los frenos
deben desarrollar una potencia equivalente a **1000 caballos**. Es decir, el
sistema de frenos maneja en pocos segundos la energía que el motor tardó un
minuto en entregar, y la convierte en calor en tambores y balatas.

La segunda lámina explica cómo crece esa exigencia. La energía de movimiento
es proporcional a la masa y al **cuadrado** de la velocidad:

| Cambio | Potencia de frenado necesaria, según el curso |
| --- | --- |
| Peso al doble | 2 veces |
| Velocidad al doble | 2 × 2 = 4 veces |
| Velocidad al triple | 3 × 3 = 9 veces |
| Peso y velocidad al doble | 2 × 4 = 8 veces |

La lámina rotula el caso de 9 veces como "velocidad al doble nuevamente",
pero 3 × 3 = 9 corresponde a triplicar la velocidad inicial. La conclusión no
cambia: **un poco más de velocidad cuesta mucho más freno**.

## La norma FMVSS 121

La **FMVSS 121** (Federal Motor Vehicle Safety Standard) es la norma federal de
Estados Unidos para sistemas de frenos de aire. Según el curso, cada ensamble
de frenos está diseñado para dar una fuerza máxima de detención especificada
en función de la carga del vehículo, dentro de los límites de **GAWR** (la
capacidad bruta nominal) de cada eje. La norma incluye una secuencia de pruebas
de frenado y pruebas en dinamómetro que cada camión debe pasar para poder
fabricarse.

Dos de sus exigencias, citadas en el curso, son las que más importan en el
taller porque dependen del estado de válvulas y tuberías:

- **Tiempo de aplicación:** no más de **0,45 s** desde que el conductor pisa el
  pedal hasta que cada actuador del freno de servicio alcanza **60 psi**.
- **Tiempo de liberación:** no más de **0,55 s** mientras la presión del
  actuador cae de **95 psi a 5 psi**.

Una válvula lenta o una tubería estrangulada pueden sacar al sistema de esos
tiempos. Para convertir psi a kPa o bar, use el [conversor de presión y
torque](/herramientas/conversor-presion-torque/).

## Factores que determinan la capacidad de frenado

El curso enumera de qué depende la fuerza de detención que un ensamble de
frenos entrega a la rueda:

| Factor | Efecto, según el curso |
| --- | --- |
| Presión de aire en el actuador | Más presión: menor tiempo de aplicación y más fuerza |
| Área del diafragma del actuador (pulgadas cuadradas) | Más área: más tiempo de aplicación y más fuerza |
| Distancia entre centros del ajustador de tensión | Más distancia: más tiempo de aplicación y más fuerza |
| Coeficiente de fricción entre balatas y tambor | Más fricción: más fuerza |
| Diámetro de la superficie de frenado del tambor | Más diámetro: más fuerza |
| Tamaño, forma y superficie de la flecha de levas | Mejor círculo base de la leva: más fuerza |
| Diámetro de rodadura del neumático y patrón de huella | Influye en la fuerza en el piso |

Sobre el último punto, la lámina dice que un diámetro mayor de llanta
"incrementa la fuerza de frenado". Conviene leerlo con cuidado: con el mismo
par en el tambor, un neumático de mayor diámetro entrega **menos** fuerza de
frenado en el piso, porque el brazo de palanca es más largo. Lo correcto es que
un neumático más grande **exige** más par de frenado para lograr la misma
detención. Por eso cambiar la medida de los neumáticos sin revisar el sistema
de frenos no es una decisión neutra.

## Del compresor a la rueda: cómo se arma el circuito

El curso no desarrolla la producción de aire. En términos generales, un **compresor**
movido por el motor carga los depósitos; un **gobernador** lo pone a cargar o
a descansar según la presión del sistema; el aire pasa por un depósito de
alimentación (y, en muchos camiones, por un **secador de aire**) y se reparte
en depósitos separados para el **circuito delantero** y el **trasero**, cada
uno con su purga para el agua condensada. Las presiones de corte y arranque
del gobernador son las del manual de cada camión.

A partir de los depósitos de servicio, el curso describe el resto del
circuito, que el siguiente esquema resume.

<figure class="diagram">
<svg viewBox="0 0 760 440" role="img" aria-label="Diagrama de bloques del sistema de frenos de aire de un camión: compresor y depósito de alimentación cargan los depósitos de servicio delantero y trasero; ambos alimentan la válvula de aplicación, que envía presión modulada a la válvula de liberación rápida de los actuadores delanteros y a la válvula relevadora de servicio de los actuadores traseros, alimentada directamente por el depósito trasero. Abajo, el circuito de estacionamiento: válvula de retención doble, válvula de tablero, válvula de control, válvula relevadora de estacionamiento y cámaras de resorte" style="width:100%;height:auto;font-family:inherit">
<defs>
<marker id="ah-aire" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#334155"/></marker>
</defs>
<rect x="0" y="0" width="760" height="440" rx="14" fill="#f8fafc"/>
<text x="380" y="32" text-anchor="middle" font-size="17" font-weight="700" fill="#0f172a">Sistema de frenos de aire de un camión 4x2</text>
<g stroke-width="2">
<rect x="20" y="58" width="150" height="46" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-dasharray="5 4"/>
<rect x="20" y="168" width="150" height="46" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-dasharray="5 4"/>
<rect x="220" y="58" width="150" height="46" rx="8" fill="#fef3c7" stroke="#b45309"/>
<rect x="220" y="168" width="150" height="46" rx="8" fill="#fef3c7" stroke="#b45309"/>
<rect x="420" y="104" width="140" height="64" rx="8" fill="#e0f2fe" stroke="#0369a1"/>
<rect x="600" y="58" width="140" height="46" rx="8" fill="#dcfce7" stroke="#15803d"/>
<rect x="600" y="168" width="140" height="46" rx="8" fill="#dcfce7" stroke="#15803d"/>
</g>
<g font-size="12" fill="#0f172a" text-anchor="middle">
<text x="95" y="78">Compresor y</text>
<text x="95" y="94">gobernador *</text>
<text x="95" y="188">Depósito de</text>
<text x="95" y="204">alimentación *</text>
<text x="295" y="78">Depósito de</text>
<text x="295" y="94">servicio delantero</text>
<text x="295" y="188">Depósito de</text>
<text x="295" y="204">servicio trasero</text>
<text x="490" y="128">Válvula de</text>
<text x="490" y="144">aplicación</text>
<text x="490" y="160">(pedal)</text>
<text x="670" y="78">Liberación rápida</text>
<text x="670" y="94">› actuadores del.</text>
<text x="670" y="188">Relevadora servicio</text>
<text x="670" y="204">› actuadores tras.</text>
</g>
<g stroke="#334155" stroke-width="2" fill="none" marker-end="url(#ah-aire)">
<path d="M95 104 L95 166"/>
<path d="M170 180 L218 92"/>
<path d="M170 196 L218 196"/>
<path d="M370 81 L418 118"/>
<path d="M370 191 L418 154"/>
<path d="M295 214 L295 236 L670 236 L670 216"/>
</g>
<g stroke="#0369a1" stroke-width="2" fill="none" stroke-dasharray="6 4" marker-end="url(#ah-aire)">
<path d="M560 120 L598 84"/>
<path d="M560 152 L598 188"/>
</g>
<g font-size="11.5" fill="#0f172a">
<path d="M24 262 L64 262" stroke="#334155" stroke-width="2"/>
<text x="72" y="266">Aire de alimentación (presión plena)</text>
<path d="M330 262 L370 262" stroke="#0369a1" stroke-width="2" stroke-dasharray="6 4"/>
<text x="378" y="266">Señal de control (presión modulada por el pedal)</text>
</g>
<text x="20" y="300" font-size="13" font-weight="700" fill="#0f172a">Circuito de estacionamiento (frenos de resorte)</text>
<g stroke-width="2">
<rect x="20" y="314" width="128" height="52" rx="8" fill="#ede9fe" stroke="#6d28d9"/>
<rect x="168" y="314" width="128" height="52" rx="8" fill="#ede9fe" stroke="#6d28d9"/>
<rect x="316" y="314" width="128" height="52" rx="8" fill="#ede9fe" stroke="#6d28d9"/>
<rect x="464" y="314" width="128" height="52" rx="8" fill="#ede9fe" stroke="#6d28d9"/>
<rect x="612" y="314" width="128" height="52" rx="8" fill="#dcfce7" stroke="#15803d"/>
</g>
<g font-size="11" fill="#0f172a" text-anchor="middle">
<text x="84" y="336">Retención doble</text>
<text x="84" y="352">(ambos depósitos)</text>
<text x="232" y="336">Válvula de</text>
<text x="232" y="352">tablero (rombo)</text>
<text x="380" y="336">Válvula de control</text>
<text x="380" y="352">de estacionamiento</text>
<text x="528" y="336">Relevadora de</text>
<text x="528" y="352">estacionamiento</text>
<text x="676" y="336">Cámaras de</text>
<text x="676" y="352">resorte traseras</text>
</g>
<g stroke="#334155" stroke-width="2" fill="none" marker-end="url(#ah-aire)">
<path d="M148 340 L166 340"/>
<path d="M296 340 L314 340"/>
<path d="M444 340 L462 340"/>
<path d="M592 340 L610 340"/>
</g>
<text x="380" y="398" text-anchor="middle" font-size="11" fill="#475569">* El curso no desarrolla compresor, gobernador ni depósito de alimentación; se muestran para completar el circuito.</text>
<text x="380" y="416" text-anchor="middle" font-size="11" fill="#475569">Esquema simplificado del sistema descrito por GM Colmotores; conexiones reales según el manual de cada camión.</text>
</svg>
<figcaption>Circuito de servicio (arriba) y de estacionamiento (abajo) de un camión con frenos de aire, según los componentes que describe el curso. Ilustración propia.</figcaption>
</figure>

El circuito está **dividido** en delantero y trasero, para que una fuga en uno
no deje sin frenos al otro. Y la válvula del pedal solo envía una **señal** de
presión modulada: las válvulas relevadoras y de liberación rápida, cerca de las
ruedas, llenan y vacían los actuadores con rapidez. Así se cumplen los tiempos
de la FMVSS 121.

## El freno de base: leva en S, zapatas y tambor

En cada rueda, el curso muestra el mismo ensamble: el **actuador** (cámara de
freno) empuja una varilla; la varilla mueve el **ajustador de tensión**; el
ajustador hace girar la **flecha de levas**, que se apoya en un soporte fijo al
eje; la leva, con forma de S en su extremo, separa las **zapatas** y las aprieta
contra el **tambor**. Todo va montado sobre el plato trasero.

Detalles que el curso destaca:

- **Sentido de giro.** En un 4x2, la flecha de levas gira en el sentido de las
  manecillas del reloj en un lado del camión y en sentido contrario en el otro.
  Cada zapata tiene una balata primaria y una secundaria según ese sentido.
- **Tambores y mazas.** El tambor puede montarse por fuera o por dentro de la
  maza, que gira sobre baleros (rodamientos) interior y exterior.
- **Herraje de las zapatas.** Rodillos (dos), anclas (dos), un resorte de
  retroceso y un resorte de retención. La flecha de levas lleva arandelas
  espaciadoras, bujes, sellos, una grasera y un seguro.

El principio de zapatas y tambor es el mismo que en un auto. Si quiere
repasarlo, lea la guía de [frenos de tambor y ajuste del freno de
estacionamiento](/posts/frenos-de-tambor-zapatas-ajuste-freno-estacionamiento/).

## Actuadores: la cámara de freno de servicio

El actuador de servicio convierte presión de aire en empuje. El curso lo
despieza así: **cuerpo**, **resorte de retroceso**, **varilla de empuje**,
**diafragma** y **cubierta**, unidos por un sujetador de dos piezas. Cuando
entra aire a la cubierta, el diafragma empuja la varilla contra el resorte; al
salir el aire, el resorte la devuelve.

En el eje delantero se ven dos montajes: con horquilla ajustadora y ajustador
manual, y con horquilla de barreno descentrado y ajustador automático. En el
trasero, el actuador de freno de servicio aparece solo en los 6x4, mientras que
los ejes traseros llevan el **actuador combinado de servicio y estacionamiento**.

Las láminas del actuador de servicio incluyen estas medidas del ejemplo:

| Medida en el curso | Valor |
| --- | --- |
| Distancia de horquilla, actuador de servicio | 2,83 pulg (72 mm) |
| Carrera de la varilla de empuje, tipos 20 y 24 | 1,75 pulg (44,5 mm) |
| Carrera de la varilla de empuje, tipo 30 | 2,00 pulg (50,8 mm) |
| Distancia de horquilla, actuador de servicio-estacionamiento | 2,7 pulg (68,5 mm) |
| Carrera de la varilla, actuador combinado tipo 2430 | 1,75 pulg (44,5 mm) |
| Carrera de la varilla, actuador combinado tipo 3030 | 2,00 pulg (50,8 mm) |

El número del tipo indica el tamaño del diafragma; en los combinados, la
primera cifra es la cámara de servicio y la segunda la de resorte. Úselos solo
como ejemplo y compruebe siempre la carrera admisible de su cámara en el
manual.

## Ajustadores de tensión manual y automático

El ajustador de tensión es la palanca entre la varilla y la flecha de levas.
Por dentro lleva un **tornillo sinfín** que engrana con un **engrane** estriado
a la flecha de levas; girando el sinfín se cambia la posición de la leva
respecto de la palanca y se compensa el desgaste de las balatas.

- **Manual.** Tiene carcaza, sinfín, engrane, grasera y un **collar de
  seguridad** que bloquea el sinfín. El curso muestra que con el freno
  liberado el ángulo entre la varilla y el ajustador es mayor de 90 grados, y
  con el freno aplicado se acerca a **90 grados**, que es la posición en la que
  la palanca transmite más par a la leva.
- **Automático.** Suma una varilla actuadora, un pistón actuador, una barra de
  ajuste con su resorte y el mismo conjunto de sinfín y engrane. En cada
  aplicación mide el viaje de la varilla y, si es excesivo, gira el sinfín por
  sí solo.

## El freno de servicio-estacionamiento (cámara de resorte)

En los ejes traseros, el actuador combinado tiene dos cámaras en serie. La
delantera es una cámara de servicio normal. La trasera contiene un **resorte
muy potente** que, si nadie lo retiene, empuja la varilla y aplica el freno.
Lo que lo retiene es el aire del sistema de estacionamiento: en el ejemplo del
curso, con **85 psi como mínimo**, el diafragma de estacionamiento mantiene el
resorte comprimido y el freno suelto.

Al estacionar, el aire de la cámara de resorte escapa y el resorte aplica el
freno de forma mecánica, sin depender del aire. Si el sistema pierde presión,
ocurre lo mismo de forma automática: por eso también es freno de emergencia.

El curso describe también cómo **enjaular** el resorte de un freno de
estacionamiento encapsulado, con el candado de anclaje de las cámaras tipo
2430 o 3030:

1. Retirar el perno de liberación de su alojamiento de almacenaje.
2. Insertarlo y girarlo **1/4 de vuelta** en el sentido de las manecillas del
   reloj para que se trabe en el plato de presión del freno de
   estacionamiento.
3. Instalar la tuerca de liberación y la arandela sobre el perno.
4. Apretar la tuerca hasta que queden extendidas, como mínimo, **2,72 pulgadas
   (69,1 mm)** del perno.

La cámara de resorte nunca se desarma: si está dañada, se reemplaza completa.

## Las válvulas del sistema

El curso dedica la mayor parte de sus láminas a las válvulas. Todas trabajan
con el mismo principio: un pistón o diafragma compara presiones y abre o cierra
una válvula de admisión (inlet) y una de escape (exhaust) hasta llegar a un
estado de equilibrio. Las identifica por sus puertos: **S** (suministro), **D**
(entrega), **EX** (escape) y otros específicos.

| Válvula | Qué hace | Conexiones según el curso |
| --- | --- | --- |
| De aplicación (pedal) | Modula la presión que entra a los frenos de servicio delanteros y traseros | S trasero del depósito trasero, S delantero del depósito delantero, D delantero a la limitadora o de liberación rápida, D trasero a la relevadora de servicio |
| De liberación rápida | Llena y vacía rápido los actuadores delanteros con un diafragma | S desde la válvula de aplicación o limitadora; puertos D a los actuadores delanteros; escape |
| Relevadora de freno de servicio | Controla el freno de servicio trasero con aire tomado cerca de las ruedas | S del depósito trasero, D a la T de actuadores traseros y a la relevadora de estacionamiento, SERV desde la válvula de aplicación |
| De retención doble | Deja pasar al sistema de estacionamiento el aire del depósito con más presión | Dos puertos S (depósitos delantero y trasero), puertos D al sistema de estacionamiento |
| De freno de estacionamiento (tablero) | Manija amarilla en forma de rombo para aplicar o liberar el estacionamiento | S del sistema de estacionamiento, D hacia los controles, EX |
| De control de freno de estacionamiento | Libera con plena presión o aplica el estacionamiento como freno de servicio si falta el depósito trasero | Puertos RES, CON, S, D y EX |
| Relevadora de freno de estacionamiento | Llena y vacía las cámaras de resorte traseras | S desde la retención doble, D a la T de cámaras de resorte, SERV desde la válvula de control, BAL desde la relevadora de servicio |

Algunos detalles de funcionamiento que vale la pena retener:

- **Válvula de aplicación.** Sin pedal, los puertos S están bloqueados y los D
  conectados al escape. Al pisar, la varilla mueve el pistón modulador
  trasero y el aire pasa de S a D hasta que la presión equilibra la fuerza del
  pie.
- **Válvula de liberación rápida.** Al soltar el pedal, el diafragma conecta
  los actuadores delanteros al escape y el aire sale sin volver a la cabina.
- **Válvula de retención doble.** Con presiones iguales en ambos puertos S, la
  válvula queda centrada; si una cae por una fuga, se desplaza y bloquea el
  puerto de menor presión. Así el estacionamiento no pierde aire aunque se
  descargue un depósito.
- **Válvula de tablero.** Al jalar la manija, el aire del puerto S queda
  bloqueado y el puerto D se conecta al escape: se aplica el estacionamiento.
  Al empujarla, el aire pasa de S a D y libera los frenos. Si la presión dentro
  de la válvula cae por debajo de **45 psi (310 kPa)**, su resorte la hace
  saltar y el estacionamiento se aplica solo.
- **Válvula de control de estacionamiento.** Con el depósito trasero cargado,
  trabaja con la relevadora de estacionamiento para liberar los frenos de
  resorte con toda la presión (**95 psi** en el ejemplo). Con el depósito
  trasero descargado, la presión modulada del circuito delantero entra por el
  puerto CON y la válvula descarga aire de las cámaras de resorte en
  proporción al pedal: el freno de estacionamiento actúa como **freno de
  servicio de respaldo** en el eje trasero.

## Revisión y mantenimiento

El curso no incluye un plan de mantenimiento; estas rutinas son prácticas
generales de taller, con los valores del manual de cada camión.

- **Purgar los depósitos** con la frecuencia indicada para eliminar agua y
  aceite; el agua llega a las válvulas, las corroe y en frío se congela.
- **Verificar la carrera de las varillas** de empuje con el freno aplicado a la
  presión indicada y compararla con la admisible para el tipo de cámara.
- **Revisar ajustadores y levas:** engrase y holguras en bujes de la flecha.
- **Buscar fugas** con el sistema cargado y el motor apagado, y con el pedal
  pisado; una caída de presión rápida indica fuga en válvulas, diafragmas o
  tuberías.
- **Comprobar que el freno de estacionamiento se aplica solo** al bajar la
  presión, sin esperar a una emergencia para descubrir que no lo hace.
- **Medir tambores y balatas** y reemplazar las zapatas por eje completo.

## Errores comunes

- **Corregir a mano un ajustador automático una y otra vez.** Si el automático
  no mantiene la carrera, está fallando él o la leva; ajustarlo a mano oculta el
  problema.
- **Desarmar una cámara de resorte.** El resorte guarda energía suficiente
  para causar lesiones graves; la cámara se enjaula y se reemplaza completa.
- **Mover el camión sin presión** soltando los frenos de resorte sin el
  procedimiento correcto.
- **Cambiar la medida de neumáticos o cámaras sin revisar el sistema.**
  Ambas modifican la fuerza de frenado y los tiempos de aplicación.
- **Ignorar los tiempos de aplicación.** Un freno que actúa tarde alarga la
  distancia de detención, aunque al final apriete con toda su fuerza.

## Para seguir leyendo

El aire de los frenos suele compartir compresor con otros sistemas del camión;
la guía de [suspensión neumática en
camiones](/posts/suspension-neumatica-camiones-componentes-funcionamiento-averias/)
muestra cómo se reparte ese aire. Para comparar con un sistema hidráulico, lea
[cómo funciona el sistema de frenos de su
vehículo](/posts/como-funciona-el-sistema-de-frenos-en-tu-vehiculo/) y la
guía de [reemplazo y purga del cilindro
maestro](/posts/cilindro-maestro-frenos-reemplazo-purga/). Los principios de
zapatas y tambor están en la guía de [frenos de
tambor](/posts/frenos-de-tambor-zapatas-ajuste-freno-estacionamiento/).

**Fuentes:** curso de principios de frenos de aire del Departamento de
Servicio de GM Colmotores, publicado en [Mecánico
Automotriz](https://www.mecanicoautomotriz.org/1454-curso-principios-frenos-aire-componentes-operacion-aplicacion).
Valores referenciales; prevalece el manual de servicio del equipo.
