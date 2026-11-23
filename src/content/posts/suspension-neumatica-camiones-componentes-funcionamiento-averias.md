---
title: "Suspensión neumática en camiones: componentes, funcionamiento y averías"
published: 2026-11-24
draft: false
featured: false
description: "Cómo trabaja la suspensión neumática: fuelles, válvulas niveladoras, depósitos y compresor en camiones, el control electrónico en livianos y averías típicas."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "suspension-neumatica"
  - "fuelles-neumaticos"
  - "valvula-niveladora"
  - "aire-comprimido"
  - "vehiculos-pesados"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/suspension/suspension-neumatica-camiones-componentes-funcionamiento-averias
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Qué ventajas tiene la suspensión neumática frente a las ballestas?"
    a: "La principal es que su rigidez se adapta a la carga: al cargar el camión, la válvula niveladora mete más aire en los fuelles y la suspensión se endurece, de modo que la altura del chasis se mantiene igual vacío o lleno. Eso mejora el confort, protege la carga y la estructura y facilita acoplar remolques o trabajar en andenes. A cambio, depende de un circuito de aire sin fugas y de válvulas bien reguladas."
  - q: "¿Qué hace la válvula niveladora?"
    a: "Mide, por medio de una palanca y una varilla unidas al eje, la distancia entre el chasis y el eje. Si el chasis baja por más carga, abre el paso de aire desde el depósito hacia el fuelle; si sube al descargar, libera aire a la atmósfera. Cuando la altura vuelve a la cota de reglaje, se cierra. Se ajusta cambiando la longitud de la varilla y fijándola con contratuercas."
  - q: "¿Por qué un camión con suspensión neumática queda inclinado hacia un lado?"
    a: "Las causas habituales son una fuga en el fuelle o en sus conexiones de ese lado, una válvula niveladora desajustada, trabada o con la varilla suelta o rota, o una presión de alimentación insuficiente. Primero se comprueba la presión del circuito y luego se buscan fugas con agua jabonosa. Si no hay fugas, se revisa la niveladora y su varillaje."
  - q: "¿El compresor de la suspensión es el mismo de los frenos?"
    a: "En el vehículo pesado del curso, sí: un mismo compresor alimenta el circuito general de frenos y el de la suspensión neumática, con depósitos y válvulas que separan ambos circuitos. En los vehículos livianos con suspensión neumática, en cambio, el sistema descrito usa un compresor eléctrico propio con deshidratador integrado."
  - q: "¿Es seguro trabajar debajo de un camión sostenido por la suspensión neumática?"
    a: "No. Un fuelle puede perder presión por una fuga, por una maniobra del mando de altura o al desconectar una línea, y el chasis bajaría de golpe. Antes de meterse debajo, apoye el chasis sobre caballetes adecuados, calce las ruedas y, si va a intervenir el circuito, descargue la presión siguiendo el procedimiento del fabricante."
sources:
  - title: "Curso: suspensión neumática en vehículos pesados y livianos, principio de funcionamiento — Maquinarias Pesadas"
    url: "https://www.maquinariaspesadas.org/blog/6777-curso-suspension-neumatica-vehiculos-pesados-livianos-principio-funcionamiento"
related:
  - amortiguadores-suspension-tipos-funcionamiento-fallas
  - caja-cambios-volvo-camiones-sincronizada-vt2214b
  - alineacion-de-ruedas-en-el-rendimiento-del-vehiculo
---

Un camión de carga pasa buena parte de su vida en dos estados muy distintos:
vacío y lleno. Con ballestas, la suspensión que va bien con carga resulta dura
y rebotona en vacío, y la altura del chasis cambia con cada kilo que se sube o
se baja. La **suspensión neumática** ataca ese problema de raíz: reemplaza el
resorte de acero por un fuelle lleno de aire cuya presión, y por lo tanto su
rigidez, se ajusta a la carga.

Esta guía explica el principio de funcionamiento, los elementos que forman el
sistema en un vehículo pesado, las válvulas que regulan altura y presión y
cómo se ajustan, la variante electrónica de los vehículos livianos y las
averías más frecuentes. Está basada en una presentación académica sobre
sistemas de traslación de una universidad ecuatoriana, que a su vez se apoya
en documentación de fabricantes de componentes neumáticos; sus presiones son
ejemplos y no valores universales. Para cotas y presiones de su vehículo,
prevalece el manual del fabricante.

## Qué es una suspensión neumática

El curso la define como un sistema que intercala, entre el **bastidor** y el
**eje** de las ruedas (o los brazos de suspensión), un **resorte neumático**.
El resorte mecánico tradicional, sea muelle helicoidal, ballesta o barra de
torsión, se sustituye por un fuelle o cojín de aire elástico cuya rigidez
varía.

El principio es la propiedad que tiene el aire comprimido de oponerse a ser
comprimido. Al pasar por un obstáculo, el fuelle se aplasta, su volumen
disminuye y la presión interior aumenta; ese aumento de presión es lo que lo
obliga a recuperar su posición inicial. La fuerza que sostiene el fuelle sigue
una relación simple que el curso presenta así:

**F = P × S**

donde **P** es la presión del aire dentro del fuelle y **S** la superficie
efectiva sobre la que actúa. Para hacerse una idea del orden de magnitud, con
un ejemplo propio: un fuelle con una superficie efectiva de 0,05 m² a 600 kPa
(6 bar) sostiene 0,05 × 600 000 = 30 000 N, unos 3000 kgf. Si se duplica la
carga, basta con aumentar la presión para sostenerla a la misma altura.

Esa es la clave del sistema. El curso incluye una gráfica de capacidad de
carga frente al recorrido del fuelle para presiones de 6, 7, 8 y 9 bar: a mayor
presión, mayor capacidad de carga en todo el recorrido. Como un sistema de
control regula esa presión según la carga, el vehículo puede mantener **la
misma altura de plataforma vacío o cargado**, algo imposible con una ballesta.

## El resorte neumático o fuelle

El fuelle está formado por una estructura de **goma sintética reforzada con
fibra de nailon** que forma un cojín hueco. Las ilustraciones del curso
muestran dos variantes:

- **Fuelle enrollable** (de lóbulo rodante): la goma se enrolla sobre un
  émbolo o pistón a medida que la suspensión se comprime. Va sujeto con un
  anillo de apriete y se apoya en el brazo de suspensión.
- **Fuelle redondo**, de una o varias convoluciones: la goma forma uno o
  más anillos que se aplastan y se expanden, como un acordeón.

En ambos casos el fuelle **no amortigua**: almacena energía como cualquier
resorte. La amortiguación la siguen haciendo amortiguadores hidráulicos
montados junto a los fuelles, salvo en los diseños que integran amortiguador y
fuelle en una sola pieza, que veremos en los vehículos livianos. Si quiere
repasar esa diferencia entre resorte y amortiguador, lea la guía de
[amortiguadores y suspensión](/posts/amortiguadores-suspension-tipos-funcionamiento-fallas/).

## Suspensión neumática en vehículos pesados

En los vehículos pesados, señala el curso, la suspensión neumática necesita
una fuente de aire comprimido y se usa sobre todo en el **eje trasero**. El
sistema tiene dos partes: la mecánica, que guía los ejes, y el circuito de
aire, que alimenta y regula los fuelles.

### Parte mecánica

Los fuelles solo soportan carga vertical; las fuerzas de tracción, frenado y
las laterales las toman tirantes y barras. El curso muestra tres
configuraciones:

| Configuración | Elementos que menciona el curso |
| --- | --- |
| Un eje propulsor | Fuelles neumáticos, largueros del bastidor, eje, soportes de fijación del fuelle, tirantes de reacción, soporte de anclaje, barra estabilizadora, tirante transversal, amortiguador |
| Dos ejes propulsores | Eje delantero y trasero propulsores, soporte en forma de balancín, barras estabilizadoras, barras de reacción, tirantes en V, travesaño y elevador neumático de las ruedas traseras |
| Tres ejes propulsores | Ejes propulsores, soporte central, amortiguadores, barras de reacción, barras estabilizadoras y tirantes |

El **elevador neumático** de la configuración de dos ejes permite levantar un
eje cuando el camión va vacío, para reducir el desgaste de neumáticos y el
rozamiento.

### Circuito de aire comprimido

El curso destaca que el **compresor del vehículo alimenta a la vez el circuito
general de frenos y el de la suspensión neumática**. El aire pasa por un
filtro, el compresor lo comprime, llega a un depósito húmedo donde se separa
el agua condensada y de ahí a los depósitos. Como ejemplos de presión, el
curso indica **770 kPa en el depósito de frenos** y **1200 kPa en el depósito
auxiliar de la suspensión**.

<figure class="diagram">
<svg viewBox="0 0 760 420" role="img" aria-label="Diagrama de bloques del circuito de suspensión neumática de un vehículo pesado: filtro, compresor, depósito húmedo y depósito de frenos de 770 kPa, que también alimenta el circuito de frenos; desde él, la válvula de alivio que abre a 700 kPa lleva aire al depósito auxiliar de suspensión de 1200 kPa, que alimenta dos válvulas niveladoras y los fuelles traseros derecho e izquierdo. Abajo, la relación F igual a P por S" style="width:100%;height:auto;font-family:inherit">
<defs>
<marker id="ah-susp" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#334155"/></marker>
</defs>
<rect x="0" y="0" width="760" height="420" rx="14" fill="#f8fafc"/>
<text x="380" y="34" text-anchor="middle" font-size="17" font-weight="700" fill="#0f172a">Circuito de suspensión neumática de un vehículo pesado</text>
<g stroke-width="2">
<rect x="20" y="60" width="100" height="48" rx="8" fill="#e2e8f0" stroke="#334155"/>
<rect x="150" y="60" width="110" height="48" rx="8" fill="#e0f2fe" stroke="#0369a1"/>
<rect x="290" y="60" width="110" height="48" rx="8" fill="#e2e8f0" stroke="#334155"/>
<rect x="430" y="60" width="140" height="48" rx="8" fill="#fef3c7" stroke="#b45309"/>
<rect x="610" y="60" width="130" height="48" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-dasharray="5 4"/>
<rect x="20" y="175" width="140" height="60" rx="8" fill="#ede9fe" stroke="#6d28d9"/>
<rect x="200" y="175" width="160" height="60" rx="8" fill="#fef3c7" stroke="#b45309"/>
<rect x="410" y="148" width="150" height="44" rx="8" fill="#ede9fe" stroke="#6d28d9"/>
<rect x="410" y="248" width="150" height="44" rx="8" fill="#ede9fe" stroke="#6d28d9"/>
<rect x="600" y="148" width="140" height="44" rx="22" fill="#dcfce7" stroke="#15803d"/>
<rect x="600" y="248" width="140" height="44" rx="22" fill="#dcfce7" stroke="#15803d"/>
</g>
<g font-size="12.5" fill="#0f172a" text-anchor="middle">
<text x="70" y="89">Filtro</text>
<text x="205" y="89">Compresor</text>
<text x="345" y="80">Depósito</text>
<text x="345" y="97">húmedo</text>
<text x="500" y="80">Depósito de frenos</text>
<text x="500" y="97" font-weight="700">770 kPa</text>
<text x="675" y="80">Circuito</text>
<text x="675" y="97">de frenos</text>
<text x="90" y="200">Válvula de alivio</text>
<text x="90" y="218" font-weight="700">abre a 700 kPa</text>
<text x="280" y="194">Depósito auxiliar</text>
<text x="280" y="211">de suspensión</text>
<text x="280" y="228" font-weight="700">1200 kPa</text>
<text x="485" y="166">Válvula niveladora</text>
<text x="485" y="183">lado derecho</text>
<text x="485" y="266">Válvula niveladora</text>
<text x="485" y="283">lado izquierdo</text>
<text x="670" y="166">Fuelle trasero</text>
<text x="670" y="183">derecho</text>
<text x="670" y="266">Fuelle trasero</text>
<text x="670" y="283">izquierdo</text>
</g>
<g stroke="#334155" stroke-width="2" fill="none" marker-end="url(#ah-susp)">
<path d="M120 84 L148 84"/>
<path d="M260 84 L288 84"/>
<path d="M400 84 L428 84"/>
<path d="M570 84 L608 84"/>
<path d="M500 108 L500 140 L90 140 L90 173"/>
<path d="M160 205 L198 205"/>
<path d="M380 170 L408 170"/>
<path d="M380 270 L408 270"/>
<path d="M560 170 L598 170"/>
<path d="M560 270 L598 270"/>
</g>
<path d="M360 205 L380 205 M380 170 L380 270" stroke="#334155" stroke-width="2" fill="none"/>
<rect x="20" y="315" width="720" height="72" rx="8" fill="#f1f5f9" stroke="#334155" stroke-width="1.5"/>
<g font-size="12.5" fill="#0f172a">
<text x="36" y="338"><tspan font-weight="700">F = P × S</tspan>  (fuerza del fuelle = presión interior × superficie efectiva)</text>
<text x="36" y="358">Más carga: el chasis baja, la niveladora admite aire, sube P y se recupera la altura.</text>
<text x="36" y="377">Menos carga: el chasis sube y la niveladora descarga aire a la atmósfera.</text>
</g>
<text x="380" y="408" text-anchor="middle" font-size="11" fill="#475569">Esquema simplificado; presiones de ejemplo del curso, cada fabricante define las suyas.</text>
</svg>
<figcaption>Recorrido del aire desde el compresor hasta los fuelles en el ejemplo del curso, con la válvula de alivio entre el circuito de frenos y el de suspensión. Ilustración propia.</figcaption>
</figure>

Entre el depósito de frenos y el auxiliar de la suspensión hay una **válvula
de alivio**. En una instalación así, una válvula de ese tipo suele cumplir una
función de prioridad: el aire solo pasa hacia la suspensión cuando el circuito
de frenos ya tiene presión suficiente. Desde el depósito auxiliar, el aire
llega a las **válvulas niveladoras**, una por lado, y de ellas a los fuelles
traseros derecho e izquierdo.

El esquema completo del curso incluye además depósitos para la suspensión con
grifos de vaciado, una válvula de protección de cuatro vías del circuito de
frenos, válvulas de seguridad, válvula antirretorno, manómetro, filtro de
aire, silenciador, una válvula de acceso manual con mando eléctrico, válvulas
de solenoide y la **válvula del corrector de frenada**, que ajusta la fuerza de
frenado según la presión de los fuelles, es decir, según la carga.

## Válvulas que controlan altura y presión

| Elemento | Cómo está formado | Función | Dato del curso |
| --- | --- | --- | --- |
| Mando de control de nivel de altura | Caja de mando con selectores y botones | Mantener el mismo nivel de plataforma con cualquier carga; elegir modo manual o automático, subir, bajar y seleccionar ejes | Puede ser manual o automático |
| Válvula limitadora de altura | Válvula de paso de aire accionada por cable | Evitar que la plataforma se eleve en exceso | Se regula con 9,5 bar en el circuito |
| Válvula niveladora (de nivel) | Válvula de paso con palanca y varilla al eje | Regular el aire que entra y sale del fuelle según la carga | Se ajusta con la longitud de la varilla |
| Válvula de alivio | Válvula de paso con muelle tarado | Abrir el paso de aire a una presión fijada | Apertura a 700 kPa |
| Válvula limitadora de presión | Émbolo y muelle con tornillo de ajuste | Mantener constante la presión de trabajo | Entre 400 y 600 kPa |

El **mando de control de altura** que muestra el curso tiene un selector de
posición automática o manual, botones para elevar y para descender, un
interruptor para elegir los ejes y otro para fijar la altura. Es lo que
permite, por ejemplo, ajustar la altura del chasis a la de un andén de carga.

### Reglaje de la válvula limitadora de altura

La limitadora va unida al eje por un cable con tensor. El curso da tres pasos
para regularla:

1. Colocar el vehículo sobre una **superficie horizontal**.
2. Verificar que la presión del circuito neumático sea la correcta, **9,5 bar**
   en el ejemplo.
3. Accionar el mando manual de altura hasta alcanzar el **punto más alto**, y
   ajustar el cable con su tensor para que la válvula corte en esa posición.

### Reglaje de la válvula niveladora

La niveladora va fijada al bastidor y su palanca se une al eje por una
varilla. Cuando el chasis baja por la carga, la palanca gira y abre el paso de
aire hacia el fuelle; cuando sube al descargar, gira al revés y deja escapar
aire. Al recuperar la altura de reglaje, la válvula se cierra.

El ajuste consiste en **modificar la longitud de la varilla e inmovilizarla con
las contratuercas** hasta que el chasis quede a la cota de reglaje de altura
que indica el fabricante. Una varilla mal ajustada hace que el vehículo
circule siempre más alto o más bajo de lo previsto, lo que afecta la
geometría del cardán, el recorrido de la suspensión y la alineación; puede
ver por qué eso importa en la guía de [alineación de
ruedas](/posts/alineacion-de-ruedas-en-el-rendimiento-del-vehiculo/).

## Suspensión neumática en vehículos livianos

En los vehículos livianos de gama alta, el curso describe un sistema con
control electrónico. Incorpora un **regulador electroneumático** con válvulas
solenoides en su interior, gobernadas por una unidad electrónica de control
(el calculador).

El principio de funcionamiento es este: el calculador detecta, a través de los
**captadores de nivel**, una disminución de la altura de la carrocería y envía
una señal a la electroválvula para que deje pasar aire comprimido hacia el
fuelle. Cuando la altura sube por encima de la deseada, ordena descargar.

Los elementos del sistema son:

- **Captadores de nivel.** Una bieleta une la carrocería con el brazo de la
  suspensión; al cambiar la altura, gira el cuerpo del captador y este emite
  una señal eléctrica al calculador.
- **Unidad electrónica de control.** Recibe las señales de los captadores, del
  mando a distancia, de la velocidad del vehículo y de un captador de baja
  presión, y gobierna el regulador; además maneja un testigo en el tablero y
  una toma de diagnóstico.
- **Mando a distancia.** Unido por cable a la unidad, permite al conductor
  regular la suspensión.
- **Regulador electroneumático.** Está formado por tres válvulas y tres
  electroválvulas. Una de ellas cumple dos funciones: la alimentación de aire
  del regulador y la expulsión de aire a la atmósfera. Las otras gobiernan la
  admisión y descarga de cada fuelle.
- **Válvulas solenoides de los fuelles.** Distribuyen el aire hacia cada fuelle
  a través de las válvulas niveladoras; constan de cuerpo, inducido, bobina y
  conector.

### El amortiguador PDC

Algunos sistemas integran el amortiguador dentro del fuelle neumático. En el
amortiguador **PDC** (control neumático de la amortiguación), la fuerza de
amortiguación la gobierna una válvula PDC conectada por una tubería a la
presión del fuelle. La válvula modifica un estrangulador variable y cambia la
resistencia al paso del aceite en extensión y en compresión:

| Etapa | Presión del fuelle (carga) | Comportamiento según el curso |
| --- | --- | --- |
| Extensión (tracción) | Baja | Poca resistencia de la válvula PDC; amortiguación reducida |
| Extensión (tracción) | Alta | El aceite debe pasar por la válvula del émbolo; amortiguación mayor |
| Compresión | Baja | El aceite pasa por la válvula base y el émbolo hacia la cámara de reserva con poca resistencia |
| Compresión | Alta | La mayor parte del flujo pasa por la válvula base; amortiguación mayor |

En la práctica, el amortiguador se vuelve más firme cuando el vehículo va
cargado y más suave cuando va vacío, sin ninguna electrónica adicional.

### Compresor, deshidratador y válvula de descarga

El compresor del sistema liviano es de **émbolo alternativo con deshidratador
integrado**, y según el curso no necesita engrase porque usa cojinetes con
lubricación permanente. El **deshidratador** contiene un secante de gránulos
de silicio sintético y evita la corrosión y la congelación dentro del
circuito. Es regenerativo: en cada ciclo de descarga, el aire que sale de los
fuelles atraviesa el secante en sentido contrario y se lleva la humedad
acumulada. Por eso el curso lo considera libre de mantenimiento.

La **válvula de descarga** es una válvula 3/2 que permanece cerrada sin
corriente y se abre para descargar presión del sistema.

## Averías típicas y diagnóstico

El curso cierra con una conclusión que resume casi todo el diagnóstico: **la
suspensión neumática necesita estar totalmente sellada**, porque cualquier fuga
de aire le resta eficacia. La tabla siguiente reúne las averías más frecuentes
de estos sistemas; las causas son las habituales del oficio, no datos propios
del curso.

| Síntoma | Causa probable | Qué comprobar |
| --- | --- | --- |
| El vehículo amanece bajo de un lado | Fuga en un fuelle, en sus racores o en la niveladora | Agua jabonosa en fuelle, conexiones y válvula; grietas o roces en la goma |
| Altura incorrecta con el sistema presurizado | Varilla de la niveladora desajustada, doblada o suelta | Cota de reglaje y fijación de la varilla y sus contratuercas |
| El chasis no sube con carga | Presión de alimentación baja, válvula de alivio que no abre, niveladora trabada | Presión del circuito con manómetro; funcionamiento de la válvula de alivio y la niveladora |
| La plataforma sube en exceso | Limitadora de altura desajustada o cable roto | Reglaje de la limitadora según el procedimiento |
| El compresor trabaja casi sin parar | Fugas en el circuito o deshidratador saturado | Prueba de caída de presión con el motor apagado; estado del secante |
| Agua en los depósitos o válvulas que se congelan | Deshidratador o purgas que no funcionan | Grifos de vaciado, depósito húmedo, deshidratador |
| Rebote excesivo o cabeceo | Amortiguadores gastados (el fuelle no amortigua) | Fugas de aceite y prueba del amortiguador |
| Testigo encendido en un liviano | Falla de captador de nivel, electroválvula o baja presión | Códigos con la herramienta de diagnóstico; conexión del captador |

Una prueba simple y muy útil es la de **caída de presión**: con el circuito
cargado y el motor apagado, se observa el manómetro durante un tiempo; si la
presión baja más de lo que admite el fabricante, hay una fuga que buscar.
Para pasar presiones de bar a kPa o a psi cuando el manual usa otra unidad,
use el [conversor de presión y torque](/herramientas/conversor-presion-torque/).

### Seguridad al trabajar en el sistema

- **Nunca trabaje debajo de un chasis sostenido solo por los fuelles.** Apóyelo
  en caballetes y calce las ruedas.
- **Descargue la presión** antes de desconectar una línea o desmontar un
  fuelle o una válvula; el aire a presión puede proyectar piezas.
- **No infle un fuelle desmontado** ni fuera de su alojamiento.
- Recuerde que el circuito comparte compresor con los **frenos**: una fuga
  grande en la suspensión puede retrasar la carga del sistema de frenado.

## Errores comunes

- **Buscar la fuga sin presión en el circuito.** Con el sistema descargado,
  las fugas pequeñas no se detectan; presurice primero.
- **Ajustar la niveladora con el vehículo en pendiente.** El reglaje se hace
  sobre una superficie horizontal, como pide el curso para la limitadora.
- **Cambiar un fuelle sin revisar por qué falló.** Un roce con un tirante, una
  abrazadera o un neumático romperá el nuevo en poco tiempo.
- **Olvidar purgar los depósitos.** El agua acumulada llega a las válvulas,
  las oxida y en clima frío las congela.
- **Confundir fuelle con amortiguador.** El fuelle sostiene; el amortiguador
  controla el rebote. Un vehículo que rebota necesita revisar amortiguadores,
  no subir la presión.

## Para seguir leyendo

La suspensión es solo una parte del tren de rodaje de un camión. La guía de
[amortiguadores y suspensión](/posts/amortiguadores-suspension-tipos-funcionamiento-fallas/)
explica cómo se controla el rebote, y la de la [caja de cambios Volvo de
camión](/posts/caja-cambios-volvo-camiones-sincronizada-vt2214b/) recorre otra
pieza clave de un vehículo pesado. Si trabaja con presiones en distintas
unidades, el [conversor de presión y
torque](/herramientas/conversor-presion-torque/) le ahorrará cálculos.

**Fuentes:** presentación sobre suspensión neumática en vehículos pesados y
livianos de la asignatura Sistemas de traslación, publicada en [Maquinarias
Pesadas](https://www.maquinariaspesadas.org/blog/6777-curso-suspension-neumatica-vehiculos-pesados-livianos-principio-funcionamiento).
Valores referenciales; prevalece el manual de servicio del equipo.
