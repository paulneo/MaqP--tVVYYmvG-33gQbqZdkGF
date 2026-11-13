---
title: "Pruebas de sensores y componentes EFI de gasolina con multímetro"
published: 2026-11-18
draft: false
featured: false
description: "Procedimientos y valores de prueba para bomba, inyectores, IAC, CTS, TPS, MAF, MAP, CKP y sensor de oxígeno en inyección electrónica de gasolina con multímetro."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "inyeccion-electronica"
  - "multimetro"
  - "sensor-tps"
  - "sensor-de-oxigeno"
  - "diagnostico-automotriz"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/inyeccion-electronica/pruebas-sensores-inyeccion-electronica-gasolina-multimetro
author: redaccion-tecnica
reviewedBy: redaccion-tecnica
aiAssisted: true
faq:
  - q: "¿Qué presión de combustible debe tener un sistema de inyección multipunto?"
    a: "El curso de referencia indica 35 a 60 PSI con llave en contacto y motor apagado (KOEO) y 35 a 45 PSI con el motor en marcha (KOER); en sistemas monopunto (TBI) menciona unos 14 a 18 PSI. Son valores genéricos: cada fabricante define su presión de sistema, su presión residual y su presión de ruptura, y el manual de servicio del vehículo es la referencia que manda."
  - q: "¿Por qué un sensor de temperatura del refrigerante da voltaje alto en frío y bajo en caliente?"
    a: "Porque es un termistor NTC conectado como divisor de voltaje con una resistencia fija dentro de la computadora. En frío la resistencia del sensor es alta y retiene gran parte de los 5 V de referencia, de modo que la ECU lee un voltaje alto. Al calentarse, la resistencia cae, el sensor retiene menos voltaje y la lectura baja. En los ejemplos del curso, el Hyundai Elantra 2001 pasa de 3,38 V en frío a 1,9 V en caliente."
  - q: "¿Cómo se prueba un sensor MAP con multímetro?"
    a: "Se alimenta con 5 V de referencia, se conecta una bomba de vacío manual a su toma y se mide el voltaje de la línea de señal mientras se aplica vacío por pasos. El voltaje debe cambiar de forma continua y proporcional: sube cuando el vacío disminuye y baja cuando aumenta. La tabla del curso va de 2,8 a 3,0 V sin vacío hasta 0,3 a 0,5 V con 25 pulgadas de Hg. Debe probarse en todo el rango, porque un sensor puede fallar solo en cargas altas."
  - q: "¿El multímetro sirve para probar un sensor de oxígeno?"
    a: "Sirve para lo básico: resistencia del calefactor, alimentación y tensión de la señal, que en un sensor de circonio en caliente oscila entre 0,1 y 0,9 V. Pero el voltaje cambia varias veces por segundo, así que un multímetro común solo da una idea promedio. Para juzgar la velocidad de respuesta y la forma de la onda conviene un osciloscopio o el graficador de datos de un escáner."
  - q: "¿Puedo perforar el aislante del cable para medir la señal de un sensor?"
    a: "No es recomendable. Perforar el aislante deja un punto de entrada de humedad que, con el tiempo, genera sulfatación, resistencia parásita y fallas intermitentes difíciles de rastrear. Lo correcto es medir en el conector con puntas finas o terminales de prueba adecuados, o usar un cable puente en 'Y' (breakout). Si se perfora por emergencia, el punto debe sellarse después."
sources:
  - title: "Curso diagnóstico y reparación de fallas en inyección electrónica a gasolina (Carlos Ovidio Flores) — Mecánico Automotriz"
    url: "https://www.mecanicoautomotriz.org/429-curso-diagnostico-reparacion-fallas-inyeccion-electronica-gasolina"
related:
  - sensores-en-vehiculos-modernos-tipos-funciones
  - voltaje-terminal-sensor-sistema-control-electronico-motor
  - funcionamiento-y-de-la-iscv-tipo-motor-paso-a-paso-en-el-control-de-ralenti
  - fundamentos-tipos-de-sistemas-efi
---

Cuando un motor con inyección electrónica de gasolina marcha irregular, gasta de más o no arranca, el escáner suele dar la primera pista, pero no
la última. Muchas fallas no guardan código (un sensor de masa de aire
sucio, un regulador de presión que gotea, una pista de TPS desgastada)
y se confirman solo midiendo. Un multímetro, un manómetro de presión de
combustible y una bomba de vacío manual resuelven buena parte de esos
casos.

Esta guía no repite qué hace cada sensor; para eso está el artículo
general de [sensores en vehículos modernos](/posts/sensores-en-vehiculos-modernos-tipos-funciones/).
Aquí el foco es **cómo probar cada componente, qué valor esperar y qué
síntoma da cuando falla**. Los valores provienen del curso de
diagnóstico de inyección electrónica de Carlos Ovidio Flores (ver
Fuentes) y están atribuidos al vehículo o contexto en que el curso los
da.

> **Regla de oro:** los valores del curso son referencias de enseñanza.
> Cada motor tiene sus propias especificaciones. **El manual de servicio
> del vehículo siempre prevalece** sobre cualquier cifra de este
> artículo.

## Seguridad antes de medir

- **Combustible a presión:** el riel puede conservar presión con el
  motor apagado. Antes de desconectar mangueras o instalar el manómetro,
  alivie la presión según el procedimiento del fabricante, tenga un
  extintor cerca, trabaje sin chispas ni llamas y recoja cualquier
  derrame de inmediato.
- **No perfore el aislante de los cables** para "pinchar" una señal: se
  introduce humedad y nacen fallas intermitentes. Mida en el conector.
- **Con la llave en OFF** al conectar o desconectar sensores y
  conectores de la ECU; un pico de tensión puede dañar componentes
  electrónicos.
- **Multímetro de alta impedancia (digital):** un multímetro analógico
  de baja impedancia o una lámpara de prueba pueden sobrecargar circuitos
  de señal de la computadora.
- Mida **resistencias siempre sin tensión** en el circuito y con el
  componente desconectado.

## Los tres estados de prueba

El curso usa dos siglas que conviene fijar, porque casi todas las
pruebas se definen con ellas:

| Sigla | Significado | Qué permite medir |
|-------|-------------|-------------------|
| KOEO | Key On, Engine Off (contacto, motor apagado) | Voltajes de referencia y alimentación; con el conector del sensor desconectado, las tensiones que "pone" la ECU |
| KOER | Key On, Engine Running (motor en marcha) | Señales dinámicas: frecuencia, voltaje variable, ciclo de trabajo |
| Resistencia | Llave en OFF, componente aislado | Continuidad y valor de bobinas, calefactores y termistores |

Una secuencia ordenada evita medir al azar: **primero la alimentación
(KOEO, conector desconectado), luego la señal (KOER, conectado), por
último la resistencia del componente**. Con ella se separa un problema
del componente de uno del cableado o de la ECU. Para entender qué tensión
debe ver cada terminal, vale revisar [el voltaje de los terminales de
sensores](/posts/voltaje-terminal-sensor-sistema-control-electronico-motor/).

## Bomba y presión de combustible

**Qué mide el sistema:** la cantidad de combustible inyectado depende de
dos factores, la presión en el riel y el tiempo que el inyector
permanece abierto. Si la presión está mal, la ECU corrige el tiempo
equivocadamente.

**Cableado básico:** la ECU controla el relé de la bomba. Con el contacto
en KOEO lo cierra unos 3 segundos para presurizar el sistema y luego lo
abre; solo lo mantiene cerrado si recibe señal de RPM.

**Pruebas:**

1. **Devanado de la bomba:** con la bomba desconectada y el multímetro en
   ohmios, el curso da 10 a 15 Ω como orden de magnitud.
2. **Presión con manómetro** (escala de 0 a 100 PSI) conectado al riel:
   - KOEO: 35 a 60 PSI.
   - KOER: 35 a 45 PSI (presión de trabajo).
   - Referencia por tipo de sistema: unos 14 a 18 PSI en monopunto (TBI)
     y 40 a 45 PSI en multipunto (MPFI).
3. **Presión residual:** apague el motor y observe cuánto se conserva.
   El curso aclara que lo importante no es el valor sino que se mantenga
   constante; como referencia menciona unos 12 PSI.
4. **Vacío en el regulador:** a unas 800 RPM en ralentí, el curso indica
   18 a 20 pulgadas de Hg. El regulador usa ese vacío del múltiple para
   modular la presión: al bajar el vacío, la presión del riel sube.

**Por qué importa la residual:** si cae, hay dos sospechosos, un
regulador defectuoso o inyectores que gotean. El síntoma clásico es un
motor que arranca con dificultad por la mañana, porque el riel se
vacía durante la noche.

**Otras presiones que conviene distinguir** (todas con valor definido
por el manual): presión de sistema, presión total (capacidad máxima de
la bomba bajo demanda) y presión de ruptura, a la que el regulador
descarga el exceso por vapores calientes con el motor apagado.

## Inyectores: resistencia, señal y limpieza

**Qué hace:** es una electroválvula que la ECU abre cerrando su circuito
a masa (en algunos vehículos conmuta el positivo). El tiempo abierto es
el **ancho de pulso**, en milisegundos; el curso da un rango de 1,5 a
18 ms y una frecuencia de 3 a 125 Hz según régimen y carga.

**Pruebas básicas** (las tres que propone el curso):

| Prueba | Cómo | Valor del curso |
|--------|------|-----------------|
| Resistencia del devanado | Conector desconectado, ohmios entre sus dos terminales | 10 a 20 Ω |
| Alimentación | KOEO, conector desconectado, voltaje en ambos terminales | Unos 12 V en ambas líneas |
| Activación | KOER, conectado, frecuencia en la línea de control a la ECU | 12 a 18 Hz en ralentí; sube al acelerar |

Dos aclaraciones del curso: algunos sistemas incluyen una resistencia
para reducir la tensión del inyector, y en los Honda mencionados la
tensión medida es cercana a 10 V. Además, cada modelo tiene su
resistencia específica, por lo que la cifra de 10 a 20 Ω es solo un
marco.

**Limpieza:** el curso recomienda desmontar los inyectores y sumergirlos
en una solución limpiadora **a intervalos no mayores de 20.000 km**.

**Síntomas de falla:** ralentí inestable, pérdida de potencia, consumo
alto, o arranque difícil si gotea (cae la presión residual).

Los inyectores se activan de tres modos: simultáneo (todos a la vez, dos
veces por ciclo), grupal (dos grupos, una vez por ciclo) y secuencial
(uno a uno en el orden de encendido, la forma de mayor eficiencia). La
frecuencia que medirás en la línea de control depende de ello.

## Control de marcha mínima: IAC y solenoides

El curso separa dos filosofías: **control bajo carga** (solo corrige el
ralentí cuando entran cargas como A/A, dirección o luces; usa un
solenoide de un paso con tornillo de ajuste y el aumento de RPM es fijo)
y **control constante** (corrige siempre, también en frío, con motor
paso a paso o solenoide de pulsos, sin tornillo de ajuste y con aumento
variable). Para ampliar el funcionamiento de las válvulas, consulta la
[ISCV tipo paso a paso](/posts/funcionamiento-y-de-la-iscv-tipo-motor-paso-a-paso-en-el-control-de-ralenti/).

**Antes de condenar la válvula,** el curso indica definir: qué sistema
posee, cuándo ocurre la anomalía, a qué temperatura, el ajuste del TPS y
si es MPFI o TBI. La señal del TPS es indispensable: sin ella la ECU no
modifica el ralentí.

**Pruebas:**

1. **KOEO, conector del actuador desconectado:** debe haber unos 12 V en
   las líneas de alimentación.
2. **KOER, conectado:** unos 12 V en la línea de alimentación y
   **frecuencia** en la línea hacia la ECU, que sube o baja según la
   carga (A/A, luces).
3. **Resistencia de las bobinas:** del punto central a los extremos, el
   curso indica 8 a 20 Ω según el fabricante.
4. **Disposición del cableado:** hay actuadores de una, dos, tres o más
   líneas. El curso ilustra casos como el Nissan Sentra 1995 1.6 L
   (conmutación electrónica con tres líneas) y el Toyota Corolla LE 1.8 L
   2001 (motor paso a paso con bobinado angular). Identifique cuál línea
   es alimentación y cuál es control antes de medir.

**Síntomas:** ralentí alto, bajo, oscilante o calado al aplicar cargas,
sobre todo con motor frío.

## Sensor de temperatura del refrigerante (CTS)

**Qué mide:** es un termistor NTC de dos cables: su resistencia baja
cuando se calienta. La ECU le entrega 5 V de referencia a través de una
resistencia fija y lee el voltaje intermedio, que depende de la
temperatura. Por eso el voltaje de señal es **alto en frío y bajo en
caliente**: a menos resistencia del sensor, menos voltaje retiene.

La ECU usa el dato para el combustible, el encendido, el ralentí, el
ventilador, el enriquecimiento de arranque en frío y la EGR, entre
otros. Es de los sensores más influyentes, y por eso un CTS defectuoso
afecta casi todo.

**Prueba de resistencia contra temperatura:** se retira el sensor, se
sumerge en un recipiente con agua y refrigerante, y se mide su
resistencia a distintas temperaturas, contrastando con la tabla del
fabricante. El curso da esta tabla genérica:

| Temperatura (°C) | Resistencia (Ω) |
|------------------|-----------------|
| 0 | 5.000 a 6.500 |
| 20 | 2.000 a 3.000 |
| 40 | 1.000 a 1.500 |
| 60 | 275 a 375 |
| 100 | 175 a 225 |

El curso repite el mismo rango (275 a 375 Ω) para 60 y 80 °C, lo cual
parece un error de transcripción, por lo que se omite el valor de 80 °C.
Tómelo como ejemplo de forma de la curva y no como especificación.

<figure class="diagram">
<svg viewBox="0 0 640 310" role="img" aria-label="Curva de resistencia de un termistor NTC contra temperatura, en escala logarítmica, con puntos de 0 a 100 grados Celsius" style="width:100%;height:auto;font-family:inherit">
<rect x="0" y="0" width="640" height="310" rx="12" fill="#f8fafc"/>
<text x="80" y="24" font-size="13" fill="#1e293b">Resistencia del sensor (ohmios, escala logarítmica)</text>
<line x1="80" y1="40" x2="80" y2="250" stroke="#64748b" stroke-width="1.5"/>
<line x1="80" y1="250" x2="600" y2="250" stroke="#64748b" stroke-width="1.5"/>
<line x1="80" y1="145" x2="600" y2="145" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<line x1="80" y1="40" x2="600" y2="40" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<text x="72" y="254" text-anchor="end" font-size="12" fill="#1e293b">100</text>
<text x="72" y="149" text-anchor="end" font-size="12" fill="#1e293b">1.000</text>
<text x="72" y="62" text-anchor="end" font-size="12" fill="#1e293b">10.000</text>
<text x="80" y="270" text-anchor="middle" font-size="12" fill="#1e293b">0</text>
<text x="184" y="270" text-anchor="middle" font-size="12" fill="#1e293b">20</text>
<text x="288" y="270" text-anchor="middle" font-size="12" fill="#1e293b">40</text>
<text x="392" y="270" text-anchor="middle" font-size="12" fill="#1e293b">60</text>
<text x="496" y="270" text-anchor="middle" font-size="12" fill="#1e293b">80</text>
<text x="600" y="270" text-anchor="middle" font-size="12" fill="#1e293b">100</text>
<text x="340" y="296" text-anchor="middle" font-size="13" fill="#1e293b">Temperatura del refrigerante (°C)</text>
<polyline points="80,65 184,103 288,135 392,196 600,218" fill="none" stroke="#0f766e" stroke-width="3"/>
<circle cx="80" cy="65" r="5" fill="#0f766e"/>
<circle cx="184" cy="103" r="5" fill="#0f766e"/>
<circle cx="288" cy="135" r="5" fill="#0f766e"/>
<circle cx="392" cy="196" r="5" fill="#0f766e"/>
<circle cx="600" cy="218" r="5" fill="#0f766e"/>
<text x="94" y="60" font-size="12" fill="#1e293b">5.000 a 6.500 Ω</text>
<text x="198" y="98" font-size="12" fill="#1e293b">2.000 a 3.000 Ω</text>
<text x="302" y="128" font-size="12" fill="#1e293b">1.000 a 1.500 Ω</text>
<text x="406" y="190" font-size="12" fill="#1e293b">275 a 375 Ω</text>
<text x="588" y="206" text-anchor="end" font-size="12" fill="#1e293b">175 a 225 Ω</text>
</svg>
<figcaption>Resistencia de un NTC genérico según la tabla del curso (punto medio de cada rango). Ilustración propia; la curva real depende del sensor.</figcaption>
</figure>

**Prueba de voltaje (conector colocado):**

- Con el conector **desconectado** y KOEO debe haber unos 5 V de
  referencia en el terminal de alimentación y buena masa en el otro.
- Conectado, el voltaje de señal queda siempre por debajo de 5 V.
  Referencias genéricas del curso: unos 3,4 V en frío y 1,0 V en
  caliente; en otra gráfica, 3,47 V en frío y 1,42 V en caliente.

**Ejemplos concretos del curso:**

| Vehículo | Resistencia en frío | Resistencia en caliente | Voltaje de señal |
|----------|--------------------|-------------------------|------------------|
| Hyundai Elantra 2001 | 2,2 kΩ | Cerca de 500 Ω (con tolerancia) | 3,38 V frío; 1,9 V caliente |
| Toyota Corolla VVTi 2001 | 1.200 Ω | 481 Ω | 0,84 V caliente (el curso lo escribe con unidad de ohmios, pero por el contexto se trata de voltios) |

Observe que ambos ejemplos son coherentes con el NTC (más resistencia en
frío) pero con valores distintos: el sensor y el divisor de cada
vehículo no son intercambiables.

**Detalle de seguridad funcional:** el curso advierte que un vehículo
inyectado no debe tener el ventilador del radiador conectado directo,
porque la ECU lo gobierna según el CTS; alterar ese circuito aumenta el
consumo. Algunos sistemas usan además un termoswitch de tres cables que
alimenta el relé del ventilador.

**Síntomas de falla:** arranque difícil en frío (la ECU "cree" que el
motor está caliente), humo negro y consumo alto (lee frío siempre),
ventilador que no actúa en el momento esperado, ralentí errático.

## Sensor de posición de la mariposa (TPS)

**Qué mide:** el ángulo de la mariposa, su dirección de cambio y la
rapidez. La ECU lo usa para detectar aceleración, desaceleración, plena
carga (WOT), ralentí y, en algunos modelos, para EGR, purga del canister,
convertidor de par y corte del A/A en WOT.

**Tres tipos (según el curso):** potenciómetro de tres cables, interruptor
de posiciones (idle y WOT) y mixto de cuatro cables. Aquí interesa el
potenciómetro:

- Terminal X: 5 V de referencia desde la ECU.
- Terminal Z: masa del sensor.
- Terminal Y: señal. Con el cursor cerca de la masa la ECU lee casi
  0 V; cerca de la referencia, casi 5 V.

**Procedimiento (barrido de voltaje):**

1. Con el contacto abierto (KOEO) y el sensor conectado, mida el voltaje
   entre señal y masa con la mariposa **cerrada**.
2. Abra lentamente a mano hasta **WOT** mientras observa el multímetro.
3. El voltaje debe subir de forma continua y sin saltos ni caídas.
4. Confirme los tres puntos que suelen dar los fabricantes: cerrada,
   parcialmente abierta y totalmente abierta.

El curso ilustra valores de unos 0,5 V en ralentí y unos 4,9 V en WOT.
Si el voltaje no cumple, hay que ajustar o reemplazar el sensor, pero
antes se debe verificar que el ralentí esté en especificación. La
calibración del TPS se hace con el motor en marcha a temperatura normal
(el curso menciona 85 °C).

**Prueba de resistencia:** entre referencia y masa se mide la
resistencia total de la pista; entre señal y cada extremo se obtienen
valores que cambian al mover la mariposa. Las irregularidades o
discontinuidades delatan desgaste o sulfatación de la pista y producen
lecturas erráticas con el vehículo en marcha.

**En TPS tipo interruptor:** la ECU solo necesita saber si el contacto
cierra a masa (idle o WOT); no importa tanto el voltaje como la caída a
0 V. En el curso aparece un Nissan Altima 1997 con sensor mixto cuyo
interruptor sirve a la transmisión automática.

**Síntomas de falla:** tirones al acelerar, ralentí inestable,
aceleración con retardo, cambios bruscos en transmisión automática.

## Sensores de caudal y carga de aire

La ECU necesita saber cuánto aire entra para calcular el combustible.
Hay medición directa (VAF, MAF, Karman Vortex) y medición indirecta por
presión (MAP).

### VAF (paleta de aire)

Un potenciómetro movido por una compuerta. El voltaje sube con el caudal
hasta acercarse a la referencia en WOT. El curso da una señal entre
0,9 a 1,2 V y 4,9 V con 5 V de control (en algunos sensores, 12 V). Se
usa en vehículos de 1994 hacia atrás y puede tener siete cables:
potenciómetro de tres, temperatura de aire de dos y un contacto de dos
cables para el relé de la bomba.

Puntos de revisión del curso:

- Buscar **entradas de aire falso** entre el sensor y el motor: el aire
  no medido causa mezcla pobre.
- Una **contraexplosión** puede cerrar de golpe la compuerta y
  descalibrar el sensor.
- Revisar corrosión o depósitos que frenen la paleta.
- En algunas marcas (Toyota, Mazda, Subaru, Volkswagen) un contacto
  interno activa el relé de la bomba: si no cierra, el motor no arranca.
- La falla típica es el **desgaste de la pista**, que se detecta mejor
  con osciloscopio o, a falta de uno, con multímetro analógico.

### MAF de hilo caliente (analógico)

Mantiene un elemento caliente a temperatura constante; el aire lo
enfría y el circuito necesita más corriente, que se traduce en más
voltaje de señal. El curso indica que en ralentí caliente no entrega más
de 1 a 2 V y sube hasta unos 5 V en WOT. En el Toyota Corolla 2001
menciona 1,2 V en ralentí y 0,69 V con el contacto abierto. Algunos
(Nissan) incluyen autolimpieza: calientan el hilo unos segundos, siempre
con el motor apagado.

**Prueba:** conectar el multímetro a la señal, observar el voltaje en
ralentí y mover la mariposa: debe responder de inmediato. La suciedad
retrasa la respuesta y provoca fallas en aceleración.

Notas del curso útiles para el diagnóstico:

- El MAF suele causar problemas **sin guardar códigos**.
- Las especificaciones del fabricante se dan sin carga, y un sensor que
  lee bien con poco caudal puede fallar con mucho: pruébelo también a
  alto flujo.
- Síntomas: pérdida de potencia, inestabilidad y consumo alto.

### MAF digital y Karman Vortex

Entregan una **señal de frecuencia** que sube con el caudal. El MAF
digital oscila su línea de retorno; el Karman Vortex corta el flujo en
columnas (vórtices) y mide su efecto sobre una señal ultrasónica
mediante un emisor y un receptor (en el curso se esquematiza con LED y
fototransistor). Lo usan, entre otros, Hyundai, Mitsubishi y algunos
Chrysler, y suele incluir sensor de temperatura de aire y a veces de
presión barométrica. Su prueba es idéntica a la del MAF digital:
alimentación, masa y señal. La señal cambia tan rápido que el
medidor de frecuencia común no la capta bien, y el curso recomienda
osciloscopio.

### MAP (presión absoluta del múltiple)

Un elemento piezorresistivo (cerámica o silicio) mide el vacío del
múltiple respecto de una cámara sellada. Informa la carga del motor: con
mucho vacío (carga baja) la ECU empobrece y adelanta el encendido; con
poco vacío (carga alta) enriquece y atrasa para evitar la detonación.
Casi todos son analógicos; el curso menciona sensores de salida digital
(Ford).

**Prueba con bomba de vacío y voltímetro** en la línea de señal. Tabla de
referencia del curso:

| Vacío (pulgadas de Hg) | Voltaje esperado (V) |
|-----------------------|----------------------|
| 0 (WOT) | 2,8 a 3,0 |
| 5 | 2,3 a 2,5 |
| 10 | 1,8 a 2,0 |
| 15 | 1,3 a 1,5 |
| 20 | 0,5 a 0,8 (el curso lo escribe como 0,8 a 0,5) |
| 25 | 0,3 a 0,5 |

El curso la presenta como referencia y recuerda consultar el manual.
También da otras lecturas: unos 1,8 V en ralentí y unos 4,5 V sin vacío
(WOT), y alrededor de 4,7 V con el conector desconectado en KOEO.
Pruebe **todos los niveles**: un MAP puede fallar solo en cargas altas.

**Síntomas:** arranque difícil, humo negro, mezcla rica, consumo alto y
detonación por avance excesivo.

## Sensores de RPM y posición: CKP y Hall

La ECU necesita la señal de RPM para controlar combustible, encendido y
ralentí. Sin ella, muchos modelos no activan el relé de la bomba y el
motor no arranca. Existen tres principios: bobina captadora (inductivo),
efecto Hall y óptico. Para el contexto más amplio, [este artículo sobre
señales de sensores](/posts/sensores-senales-sistema-de-control-electronico-motor/)
complementa lo siguiente.

### Inductivo (bobina captadora)

Es un generador de voltaje alterno: con el motor apagado da 0 V; en
marcha, voltaje y frecuencia crecen con las RPM. El curso da frecuencias
de 150 a 1.500 Hz y valores de voltaje de varios décimos a unos pocos
voltios según el vehículo.

**Chequeo completo (según el curso):**

1. **Resistencia** de la bobina (un ejemplo del curso: unos 700 Ω en un
   CKP y unos 750 Ω en un CMP). A mayor resistencia, mayor voltaje de
   salida.
2. **Aislamiento a masa** (derivación): no debe haber continuidad entre
   los terminales y la carcasa.
3. **Voltaje CA** con el motor girando (arranque o marcha).
4. **Frecuencia**.

Dato de comparación: el CKP genera más voltaje que el CMP. En el ejemplo
del curso, un CKP con unos 0,9 V CA a altas RPM se considera de poco
voltaje y posiblemente defectuoso. Si no hay lectura de voltaje ni de
frecuencia mientras el motor gira, el sensor puede estar malo.

**Qué revisar si la señal es mala:** reluctor dañado o agrietado,
resistencia fuera de especificación, circuito abierto o en corto, y
holgura incorrecta entre reluctor y captador. Una grieta en el engranaje
ferromagnético puede impedir el arranque.

### Efecto Hall

No genera tensión; **conmuta** una referencia a masa cuando un campo
magnético lo atraviesa, produciendo una onda cuadrada. Tiene tres
terminales: alimentación, masa y señal. Para probarlo, se verifica la
alimentación (el curso menciona 12 V, con 5 V de referencia desde la ECU
en algunos circuitos) y masa, y luego la señal en voltios o en Hz con el
motor girando. El curso resume dos estados: con el arnés desconectado se
miden valores fijos (por ejemplo 12 V y 5 V), y con él conectado y
funcionando la señal conmuta entre frecuencia baja y alta.

Cualquier circuito abierto o en corto en alimentación, masa o señal
elimina la señal de RPM. Los sensores ópticos funcionan igual, con LED y
fotodiodo, y fallan por las mismas causas.

**Síntomas de falla (cualquier sensor de RPM):** el motor gira pero no
arranca, se apaga en marcha, o falla de forma intermitente al calentarse.

## Sensor de oxígeno

**Qué mide:** el oxígeno que sobra en el escape. Compara el aire exterior
con los gases y genera tensión. Solo informa el resultado, no crea la
mezcla rica o pobre; por eso un voltaje anómalo es una pista y no un
veredicto. La ECU ignora esta señal en lazo abierto (motor frío) y la
usa en lazo cerrado.

### Circonio (zirconia)

- **Temperatura:** por debajo de unos 300 °C se comporta como circuito
  abierto; necesita pasar de ese umbral para generar su tensión.
- **Tensiones (curso):** más de 0,8 V con mezcla rica (lambda menor de
  0,95) y menos de 0,2 V con mezcla pobre (lambda mayor de 1,05), con
  un cambio brusco cerca de lambda 1. En operación habitual oscila entre
  unos 0,1 y 0,9 V; el curso menciona un máximo posible de 1,2 V.
- **Cables:** 1 (solo señal), 2 (señal y retorno), 3 o 4 (con
  calefactor). La resistencia del calefactor que da el curso: 4 a 20 Ω en
  un diagrama de Nissan 1993 a 1995 y 4 a 12 Ω en otro.
- **Sensor frío conectado:** si queda fijo en 0 V o en 0,45 V (valor que
  impone la ECU), el sensor no está trabajando.

<figure class="diagram">
<svg viewBox="0 0 700 300" role="img" aria-label="Señal del sensor de oxígeno de circonio: onda que oscila entre 0,1 y 0,9 voltios alrededor del umbral de 0,45 voltios" style="width:100%;height:auto;font-family:inherit">
<rect x="0" y="0" width="700" height="300" rx="12" fill="#f8fafc"/>
<text x="70" y="24" font-size="13" fill="#1e293b">Voltaje del sensor (V)</text>
<line x1="70" y1="40" x2="70" y2="240" stroke="#64748b" stroke-width="1.5"/>
<line x1="70" y1="240" x2="545" y2="240" stroke="#64748b" stroke-width="1.5"/>
<line x1="70" y1="165" x2="545" y2="165" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 4"/>
<polyline points="70,223 100,223 112,95 145,95 157,223 195,223 207,95 240,95 252,223 290,223 302,95 335,95 347,223 385,223 397,95 430,95 442,223 480,223 492,95 525,95 537,223" fill="none" stroke="#b45309" stroke-width="3" stroke-linejoin="round"/>
<text x="62" y="99" text-anchor="end" font-size="12" fill="#1e293b">0,9</text>
<text x="62" y="169" text-anchor="end" font-size="12" fill="#1e293b">0,45</text>
<text x="62" y="227" text-anchor="end" font-size="12" fill="#1e293b">0,1</text>
<text x="555" y="100" font-size="13" fill="#1e293b">Rica: poco O2</text>
<text x="555" y="169" font-size="13" fill="#1e293b">Umbral 0,45 V</text>
<text x="555" y="228" font-size="13" fill="#1e293b">Pobre: mucho O2</text>
<text x="305" y="270" text-anchor="middle" font-size="13" fill="#1e293b">Tiempo (lazo cerrado, motor caliente)</text>
</svg>
<figcaption>Oscilación típica de un sensor de circonio en lazo cerrado: la ECU alterna entre mezcla ligeramente rica y ligeramente pobre. Ilustración propia.</figcaption>
</figure>

**Procedimiento:**

1. **Calefactor:** con el sensor desconectado, mida la resistencia entre
   sus dos cables de alimentación y compare con el manual; compruebe
   además que haya 12 V de alimentación en el arnés con el contacto
   puesto.
2. **Señal:** con el motor caliente y en lazo cerrado, observe el
   multímetro. Debe subir y bajar entre 0,1 y 0,9 V. Un voltaje fijo
   alto, fijo bajo o centrado en 0,45 V indica sensor inactivo, perezoso
   o un problema de mezcla.
3. **Contraste de aire:** el curso lista causas de voltaje alto
   persistente (válvula del canister, MAP, CTS, presión excesiva de
   combustible, inyector con fuga, filtro de aire tapado) y de voltaje
   bajo persistente (PCV, cable a masa, inyectores defectuosos, agua en
   el combustible, baja presión, fugas de escape o aire secundario
   defectuoso).
4. **Sensor posterior al catalizador (S2):** debería mostrar una señal
   casi estable entre 0,45 y 0,55 V si el convertidor trabaja bien,
   mientras el anterior (S1) oscila entre 0,1 y 0,9 V. La nomenclatura es
   Banco 1 / Banco 2 (en motores V, el banco 1 es el del cilindro 1) y
   Sensor 1 (antes) / Sensor 2 (después).

### Titania y banda ancha

El curso menciona el sensor de titanio dentro de los tres tipos, pero no
lo desarrolla. Como referencia general (verificar en el manual del
vehículo), es un sensor resistivo que cambia de resistencia en vez de
generar voltaje, por lo que se alimenta con referencia de la ECU.

El **sensor de banda ancha o universal** (LAF) responde de forma casi
lineal en un rango amplio de mezclas: el curso da lambda entre 0,75 y
1,3 para el LAF y menciona su uso en mezclas pobres con lambda mayor de
1,15. Tiene cinco cables (dos de calefactor, y tres para la célula de
tensión, la célula de bombeo y la cámara de difusión). La ECU intenta
mantener la célula de tensión en 0,45 V variando la tensión de la
célula de inyección de oxígeno.

| Parámetro (banda ancha, según el curso) | Valor |
|------------------------------------------|-------|
| Tensión de la célula de tensión | 0,45 V |
| Referencia a la cámara de difusión | 2,7 V |
| Tensión a la célula de inyección de oxígeno | 1,7 V (rica) a 3,3 V (pobre) |

Estos sensores **no se miden con un simple multímetro** como los de
circonio: la información útil está en los datos que lee un escáner.

**Síntomas de falla de sensores de oxígeno:** consumo alto, ralentí
irregular, emisiones elevadas, luz de motor encendida, y códigos de
calefactor, señal o masa.

## Tabla maestra de pruebas

| Componente | Medición | Referencia del curso | Falla típica |
|------------|----------|----------------------|--------------|
| Bomba | Ω del devanado | 10 a 15 Ω | No presuriza |
| Presión de combustible | PSI KOEO / KOER | 35-60 / 35-45 PSI (MPFI) | Arranque difícil, falta de potencia |
| Vacío al regulador | pulg. Hg a 800 RPM | 18 a 20 | Presión inestable |
| Inyector | Ω; Hz de control | 10-20 Ω; 12-18 Hz en ralentí | Ralentí irregular, goteo |
| IAC / solenoide | Ω bobinas; frecuencia | 8-20 Ω; varía con carga | Ralentí inestable |
| CTS | Ω vs. °C; V señal | Tabla 0-100 °C; 5 V ref. | Arranque en frío, humo negro |
| TPS | V a lo largo del barrido | ~0,5 V cerrado; ~4,9 V WOT | Tirones, ralentí inestable |
| VAF | V de señal | 0,9-1,2 a 4,9 V | No arranca, pista gastada |
| MAF analógico | V de señal | 1-2 V ralentí; hasta ~5 V WOT | Pérdida de potencia sin código |
| MAF digital / Karman | Hz de señal | Aumenta con caudal | Falla en aceleración |
| MAP | V vs. vacío | 2,8-3,0 V (0 Hg) a 0,3-0,5 V (25 Hg) | Humo negro, mezcla rica |
| CKP inductivo | Ω; V CA; Hz | 150-1.500 Hz; CKP > CMP | No arranca, se apaga |
| Hall / óptico | V y Hz de señal | Onda cuadrada; 12 V y masa | No arranca, intermitencia |
| O2 circonio | V de señal; Ω calefactor | 0,1-0,9 V; 4-20 Ω | Consumo alto, emisiones |
| O2 banda ancha | Datos de escáner | 0,45 V; 2,7 V; 1,7-3,3 V | Mezcla mal controlada |

Recuerde que todo lo de esta tabla es una referencia de curso: los
valores que aplican al vehículo en el taller son los de su manual.

## Método de diagnóstico para no medir al azar

1. **Verifique lo mecánico y lo simple:** presión de combustible, fugas
   de vacío y de admisión, filtro de aire y estado de masas.
2. **Revise el conector y la alimentación** (5 V de referencia, masa
   limpia) antes de culpar al sensor.
3. **Compare la señal con la condición real del motor:** frío o caliente,
   ralentí o carga.
4. **Mida la respuesta dinámica** moviendo mariposa, vacío o caudal: un
   sensor que lee bien en estático puede fallar en movimiento.
5. **Cambie una sola cosa a la vez** y compruebe el síntoma.

Para consolidar la base del sistema, lee [los fundamentos y tipos de
sistemas EFI](/posts/fundamentos-tipos-de-sistemas-efi/) y [las válvulas
ISCV del control de ralentí](/posts/funcionamiento-y-tipos-de-valvulas-iscv-en-el-sistema-de-control-ralenti/).
Si te interesa la evolución hacia la inyección directa, continúa con
[inyección directa de gasolina: modos estratificado y homogéneo](/posts/inyeccion-directa-gasolina-modos-estratificado-homogeneo/)
y el [sistema de alta presión de inyección directa](/posts/sistema-alta-presion-inyeccion-directa-gasolina/).

## Fuentes

Basado en el curso "Diagnóstico y reparación de fallas en inyección
electrónica a gasolina" (Carlos Ovidio Flores), publicado en
[Mecánico Automotriz](https://www.mecanicoautomotriz.org/429-curso-diagnostico-reparacion-fallas-inyeccion-electronica-gasolina).
Contenido reescrito y ampliado; los valores son referenciales y deben
verificarse en el manual de servicio del vehículo.
