---
title: "DDEC VI en el Detroit Serie 60: lámparas, protección y códigos de destello"
published: 2026-11-19
draft: false
featured: false
description: "Cómo funciona el DDEC VI del Detroit Diesel Serie 60 (guía 2007): lámparas AWL y RSL, protección del motor, anulación de paro, lectura de códigos activos e inactivos."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "ddec-vi"
  - "detroit-diesel"
  - "serie-60"
  - "codigos-de-destello"
  - "proteccion-del-motor"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/camiones/ddec-vi-detroit-serie-60-codigos-y-proteccion-motor
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Qué diferencia hay entre la lámpara ámbar (AWL) y la roja (RSL)?"
    a: "La ámbar, rotulada como Verificar Motor, indica una falla en los controles del motor: según la guía 2007 el vehículo puede llegar al final del turno y se solicita servicio. La roja, Apagar el Motor, indica una falla mayor que puede dañar el motor y activa una reducción de potencia o un apagado. Con la roja se lleva el vehículo al lugar seguro más cercano y se detiene el motor."
  - q: "¿Para qué sirve el interruptor de anulación de paro (SEO)?"
    a: "Permite al operador interrumpir temporalmente la secuencia automática de apagado cuando detenerse sería más peligroso que seguir, por ejemplo en un cruce ferroviario o en una vía de alto tráfico. Solo da el tiempo necesario para llegar a un sitio seguro. La guía advierte que usarlo para seguir trabajando un periodo prolongado puede causar daño al motor."
  - q: "¿Cómo se diferencia un código activo de uno inactivo?"
    a: "Un código activo corresponde a una falla presente en este momento y se muestra en la lámpara roja (RSL). Un código inactivo es una falla que ocurrió antes y ya no está presente, pero quedó guardada en la memoria; se muestra en la lámpara ámbar (AWL). Los inactivos son valiosos para diagnosticar fallas intermitentes."
  - q: "¿Se puede leer un código de destello en cualquier camión con DDEC VI?"
    a: "No. La guía indica que la función exige un interruptor de anulación de paro o de petición de diagnóstico configurado y las lámparas AWL y RSL conectadas por cableado, porque el CPC no puede destellar lámparas que no están cableadas. Si el vehículo no tiene esa configuración, se necesita la herramienta de diagnóstico."
  - q: "¿Por qué se activa el freno del motor solo con el pedal liberado?"
    a: "Porque el freno del motor y la aceleración son funciones opuestas: la guía indica que solo funciona con el pedal del acelerador completamente suelto, y que desembragar lo desactiva. Es una condición de lógica de control, no una falla. También advierte no usarlo sobre pavimento resbaloso salvo con ABS y experiencia, ni sin remolque o con remolque vacío."
sources:
  - title: "Guía del Operador 2007 del Motor de la Serie 60, Detroit Diesel (DDC-SVC-MAN-0007), secciones DDEC VI y lámparas del tablero"
    url: "https://www.mecanicoautomotriz.org/662-manual-mecanica-automotriz-detroit-diesel-serie-60"
related:
  - mantenimiento-detroit-serie-60-intervalos-refrigerante
  - que-es-dpf
  - ecm-cummins-equipo-electrico
  - sistema-enfriamiento-cummins
  - sistemas-lubricacion
  - errores-comunes-al-operar-maquinaria-pesada
---

Un motor diésel electrónico no falla en silencio: antes de dañarse suele
avisar, y muchas veces actúa por cuenta propia. En el Detroit Diesel
Serie 60 de 2007, ese papel lo cumple el sistema **DDEC VI**. Entender
qué significa cada lámpara y por qué el motor se limita o se apaga
evita dos errores caros: ignorar una advertencia real y apagar sin
necesidad una unidad que podía llegar a destino.

Este artículo se basa en la guía del operador 2007 del Serie 60 y
reorganiza su contenido en forma de decisiones: qué hace el sistema,
qué significa cada luz, qué hacer en cada caso y cómo leer los códigos
de destello sin herramientas.

> **Alcance.** Los valores y procedimientos citados corresponden a la
> guía del operador 2007. La configuración real depende de la
> aplicación, del cableado y del software instalado: la documentación
> de su motor y la herramienta de diagnóstico prevalecen sobre cualquier
> resumen. Este contenido es independiente y no está respaldado por
> Detroit Diesel.

## Qué es el DDEC VI y cómo se organiza

Según la guía, los motores Serie 60 con DDEC se reconocen por la letra
"G" en la sexta posición del número de modelo (el ejemplo que da es
6067HG6E), y el Serie 60 de 2007 usa DDEC VI. El sistema dosifica la
cantidad y el momento de la inyección mediante válvulas solenoide, lo
que permite operar con emisiones muy bajas y elimina el varillaje del
acelerador: el pedal es un sensor.

Además del motor y sus sensores, el sistema tiene dos módulos de
control, unidos por un enlace de datos propio:

- **MCM (Módulo de Control del Motor)**: típicamente en el costado
  izquierdo del motor. Procesa los datos del CPC y los compara con los
  sensores del motor (temperaturas de refrigerante y combustible,
  presión de carga y de aceite) y con mapas almacenados para calcular
  cuánto combustible inyectar y cuándo.
- **CPC (Controlador Común del Tren Motriz)**: bajo el tablero, del
  lado derecho. Recibe lo que pide el operador (pedal, interruptor de
  freno del motor), la información de otras unidades de control como el
  ABS y las lecturas de presión de aceite y temperatura de refrigerante
  que le envía el MCM. Guarda los datos específicos de la aplicación,
  como la velocidad de ralentí, la velocidad máxima y el límite de
  velocidad, y difunde la información por los enlaces J1587 y J1939,
  desde donde la lee un lector de diagnóstico.

<figure class="diagram">
<svg viewBox="0 0 800 380" role="img" aria-label="Diagrama de bloques del DDEC VI: operador, otras unidades y sensores alimentan al CPC y al MCM, que actúan sobre lámparas, lectores de datos, inyectores y freno del motor" style="width:100%;height:auto;font-family:inherit">
<title>Diagrama de bloques del sistema DDEC VI</title>
<defs>
<marker id="ddec-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
<path d="M0 0 L10 5 L0 10 z" fill="#334155"/>
</marker>
</defs>
<rect x="2" y="2" width="796" height="376" rx="14" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
<g fill="#e2e8f0" stroke="#475569" stroke-width="2">
<rect x="24" y="40" width="190" height="80" rx="8"/>
<rect x="24" y="150" width="190" height="70" rx="8"/>
<rect x="24" y="250" width="190" height="90" rx="8"/>
<rect x="590" y="30" width="186" height="76" rx="8"/>
<rect x="590" y="126" width="186" height="66" rx="8"/>
<rect x="590" y="226" width="186" height="66" rx="8"/>
<rect x="590" y="304" width="186" height="50" rx="8"/>
</g>
<g fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2.5">
<rect x="300" y="50" width="170" height="110" rx="8"/>
<rect x="300" y="240" width="170" height="110" rx="8"/>
</g>
<g font-size="14" fill="#0f172a" text-anchor="middle">
<text x="119" y="68" font-weight="bold">Operador</text>
<text x="119" y="90">pedal, freno del motor,</text>
<text x="119" y="108">interruptor SEO</text>
<text x="119" y="180">Otras unidades de</text>
<text x="119" y="200">control (por ejemplo ABS)</text>
<text x="119" y="278" font-weight="bold">Sensores del motor</text>
<text x="119" y="300">temperatura, presión,</text>
<text x="119" y="320">nivel de refrigerante</text>
<text x="385" y="88" font-weight="bold" font-size="16">CPC</text>
<text x="385" y="112">Controlador Común</text>
<text x="385" y="132">del Tren Motriz</text>
<text x="385" y="278" font-weight="bold" font-size="16">MCM</text>
<text x="385" y="302">Módulo de Control</text>
<text x="385" y="322">del Motor</text>
<text x="683" y="58" font-weight="bold">Lámparas AWL y RSL</text>
<text x="683" y="80">aviso visual y</text>
<text x="683" y="98">códigos de destello</text>
<text x="683" y="154" font-weight="bold">Lectores de datos</text>
<text x="683" y="176">enlaces J1587 y J1939</text>
<text x="683" y="254" font-weight="bold">Inyectores</text>
<text x="683" y="276">válvulas solenoide</text>
<text x="683" y="334" font-weight="bold">Freno del motor</text>
</g>
<g fill="none" stroke="#334155" stroke-width="2.5" marker-end="url(#ddec-arr)">
<path d="M214 80 H300"/>
<path d="M214 185 L300 140"/>
<path d="M214 295 H300"/>
<path d="M470 80 L590 68"/>
<path d="M470 140 L590 159"/>
<path d="M470 270 L590 259"/>
<path d="M470 325 L590 329"/>
</g>
<path d="M385 160 V240" fill="none" stroke="#334155" stroke-width="2.5" marker-start="url(#ddec-arr)" marker-end="url(#ddec-arr)"/>
<text x="400" y="205" font-size="13" fill="#0f172a">enlace de datos</text>
</svg>
<figcaption>Esquema simplificado del DDEC VI según la descripción de la guía 2007: el CPC recoge las órdenes del operador y de otras unidades, el MCM calcula la inyección y gobierna el freno del motor, y ambos intercambian datos. Ilustración propia, no a escala.</figcaption>
</figure>

**Por qué importa:** el CPC es quien "habla" con el tablero, el ABS y
el lector de diagnóstico, así que las lámparas y los códigos de
destello dependen de su cableado. Un MCM de reemplazo exige reproducir
todos los datos de su etiqueta, que incluye el número de serie de 10
dígitos del motor.

El sistema también se autoverifica y monitorea de forma continua,
según la aplicación, la temperatura y presión de aceite, la temperatura
del refrigerante, la presión de combustible, el nivel de refrigerante y
sensores remotos. Funciona con 12 V; si la alimentación falla, sigue
operando con voltaje reducido y a un régimen limitado hasta que el
MCM deja de funcionar, y en ese caso se enciende la lámpara ámbar.

## Las lámparas del tablero: qué dicen y qué se espera del conductor

La guía describe seis indicadores. Los dos primeros son los que más
decisiones exigen.

| Lámpara | Qué indica (guía 2007) | Qué se espera |
|---|---|---|
| Ámbar de advertencia (AWL), Verificar Motor | Falla en los controles del motor | El vehículo puede seguir hasta el final del turno; programar servicio |
| Roja de paro (RSL), Apagar el Motor | Falla mayor que puede dañar el motor; se iniciará reducción de potencia o apagado | Llevar el vehículo al lugar seguro más cercano, detener el motor y llamar a servicio |
| DPF de regeneración (amarilla) | Fija: se requiere regeneración estacionada. Intermitente: la capacidad se reduce y puede haber apagado mientras el hollín sigue aumentando | Fija: programar la regeneración. Intermitente: realizarla de inmediato |
| Temperatura alta del escape (HEST, amarilla) | Informativa: la temperatura del escape supera un límite y el vehículo circula a baja velocidad | Puede seguir manejando |
| Indicadora de mal funcionamiento (MIL, amarilla) | Falla de un dispositivo de control de emisiones; puede coincidir con la ámbar | Seguir hasta el final del turno y llamar a servicio |

Según la tabla de activación de la guía, todas las lámparas se
encienden unos instantes al dar contacto (verificación del bulbo, no
una falla). La roja intermitente indica apagado de protección o
destello de códigos activos; la ámbar intermitente, destello de códigos
inactivos. La HEST y la MIL nunca destellan, y la HEST se enciende
cuando la velocidad es menor de 5 mph y la temperatura de salida del
DPF supera 977 °F (525 °C).

Sobre la regeneración del filtro de partículas solo conviene retener
aquí que la lámpara DPF no es una falla del motor sino una petición de
mantenimiento del sistema de postratamiento. El tema completo está en
[qué es el DPF](/posts/que-es-dpf/).

## El sistema de protección del motor y por qué existe

El motor diésel puede destruirse en minutos si pierde aceite o
refrigerante. Antes de la electrónica, el operador dependía de mirar
manómetros a tiempo; DDEC monitorea los sensores y componentes
electrónicos y reconoce las fallas por sí mismo. Si detecta una falla
crítica, enciende las lámparas AWL y RSL y guarda el código en la
memoria del MCM.

Los parámetros estándar que vigila son cuatro, cada uno con una razón
mecánica detrás:

| Parámetro | Por qué se protege |
|---|---|
| Bajo nivel de refrigerante | Sin líquido no hay extracción de calor y aumenta el riesgo de sobrecalentamiento de culatas y camisas |
| Alta temperatura de refrigerante | Dilatación excesiva y pérdida de la capacidad de enfriamiento |
| Baja presión de aceite | Se pierde la película que separa cojinetes y muñones: es el daño más rápido |
| Alta temperatura de aceite | El aceite pierde viscosidad y se degrada |

Como reacción, el motor puede configurarse de tres maneras:

1. **Solo advertencia**: se encienden las lámparas y no se limita nada.
2. **Reducción de potencia**: las rpm bajan a un valor predeterminado,
   pero el motor no se apaga.
3. **Desactivación escalonada de 30 segundos**: el motor inicia una
   secuencia de apagado que termina en detención total. La guía también
   menciona una variante de reducción de velocidad inmediata, sin
   apagado, para fallas mayores.

Las condiciones que encienden la lámpara roja son: alta temperatura de
refrigerante, pérdida de refrigerante, alta temperatura de aceite, baja
presión de aceite y desactivación auxiliar.

Dos reglas de la guía: si la falla es intermitente, las lámparas
entran y salen según cambie la condición, pero el código queda
guardado; y **no se debe rearrancar un motor apagado por protección**
hasta localizar y corregir el problema. Resuelta la falla, el sistema
devuelve el motor a la operación normal. Con EGR, además, DDEC puede
reducir brevemente el combustible para bajar temperaturas de aire y
refrigerante: guarda un código informativo y no requiere acción.

### Anulación de paro (SEO): un recurso, no un modo de trabajo

Cuando se activa la secuencia de apagado, el interruptor de anulación
de paro permite al operador seguir unos segundos más. Existe para
vehículos que estén en un lugar crítico, por ejemplo cruzando una vía
o detenidos donde parar sería peligroso.

Cómo funciona, según la guía:

- Se debe pulsar el interruptor cada 15 a 20 segundos para evitar el
  apagado; mantenerlo presionado **no** detiene la secuencia.
- Desde el inicio de la secuencia hasta el apagado pasan unos 30
  segundos, por lo que conviene pulsarlo justo antes del corte y seguir
  haciéndolo hasta detenerse en un sitio seguro.
- Es el mismo interruptor que se usa como petición de diagnóstico.

El texto es enfático en que usar la anulación para continuar un periodo
prolongado puede dañar el motor. El criterio es simple: SEO sirve para
**salir de una situación peligrosa**, no para terminar la ruta. Y como
el apagado en un punto inseguro es un riesgo, la guía pide que todo
operador sepa cómo eliminar la condición de apagado en un vehículo con
DDEC.

## Decisión rápida: qué hacer según la lámpara

| Situación | Interpretación | Decisión |
|---|---|---|
| Ámbar fija, motor responde normal | Falla detectada en los controles; el vehículo puede seguir | Terminar el turno con atención a manómetros y reportar. Pedir lectura de códigos |
| Roja fija y potencia reducida | Falla mayor; protección actuando | Buscar lugar seguro, detenerse, apagar y diagnosticar (nivel de refrigerante, presión y temperatura de aceite) |
| Roja intermitente con secuencia de apagado | Apagado de protección en curso | Si es seguro, detenerse. Si no lo es, SEO cada 15 a 20 s hasta un sitio seguro |
| Motor apagado por protección | Se detectó una condición que puede dañarlo | No rearrancar hasta corregir la causa |
| Lámpara DPF fija | Regeneración estacionada requerida | Programar la regeneración |
| Lámpara DPF intermitente | Regeneración inmediata; si se ignora hay reducción y apagado | Realizarla de inmediato |
| MIL con o sin ámbar | Falla en control de emisiones | Seguir hasta el final del turno y reportar |

## Códigos de destello: leer fallas sin computadora

Todos los códigos de mal funcionamiento de DDEC son de **cuatro
dígitos** y permanecen en la memoria hasta que un técnico los borra. La
guía describe cómo obtenerlos desde el tablero.

### Requisitos

- Un interruptor de anulación de paro / petición de diagnóstico
  configurado.
- Las lámparas AWL y RSL conectadas por cableado: el CPC no puede
  destellar lámparas que no estén cableadas.
- Se debe cumplir **una** de estas condiciones para habilitar la
  función:
  - velocidad del motor menor de 100 rpm con el interruptor en ON;
  - regulador de ralentí activo con el interruptor en ON;
  - velocidad del vehículo menor de 3 mph, freno de estacionamiento
    puesto y interruptor en ON.

La función se desactiva al devolver el interruptor a OFF o al dejar de
cumplirse esas condiciones.

### Procedimiento

1. Cumplir una de las condiciones anteriores (por seguridad, con el
   vehículo detenido y el freno de estacionamiento aplicado).
2. Mantener presionado el interruptor SEO / petición de diagnóstico.
3. Observar la lámpara **roja (RSL)**: destella primero los códigos
   **activos**.
4. Después destella la lámpara **ámbar (AWL)** con los códigos
   **inactivos**.
5. Mientras se mantenga el interruptor, el ciclo se repite.

### Cómo interpretar el ritmo

- Solo una lámpara destella a la vez; cada código se muestra **dos
  veces**.
- Pausa entre dígitos: 1,5 s. Pausa entre códigos: 3,5 s, la misma que
  al pasar de la roja a la ámbar.
- Los códigos se ordenan del más reciente al más antiguo, según las
  horas de motor. Incluyen fallas del CPC y del MCM.
- Si no hay fallas activas ni inactivas, se destella el número **3** una
  vez, seguido de una pausa de 3 s.

### Activo frente a inactivo

| Tipo | Lámpara | Significa | Qué hacer |
|---|---|---|---|
| Activo | Roja (RSL) | La falla existe ahora | Corregir la causa antes de continuar |
| Inactivo | Ámbar (AWL) | Ocurrió antes y no está presente | Anotar el código; buscar el patrón (intermitente, conector, nivel bajo) |

Esta guía no incluye la lista de códigos de cuatro dígitos ni su
significado; para traducir un código se necesita la documentación de
diagnóstico de su motor. Un código sin su contexto (horas de motor,
condiciones y síntomas) tiene poco valor, así que conviene anotar
también cuándo apareció.

## Control de travesía y freno del motor

Ambas funciones son del DDEC, pero tienen restricciones que protegen al
conductor y al motor.

**Control de travesía.** Está disponible en cualquier motor DDEC y
mantiene una velocidad de motor o de vehículo variando el combustible.
Detalles de la guía:

- Tras cada arranque, DDEC exige ver una acción del freno de servicio
  (y del embrague, si existe) antes de permitir activarla.
- Se desactiva con freno o embrague y puede invalidarse con el pedal.
- No frena una pendiente que exceda el esfuerzo de freno del motor ni
  mantiene velocidad si la subida exige más potencia de la disponible.
- No debe usarse con velocidad variable (curvas, tráfico pesado) ni
  sobre caminos resbaladizos.
- Al descender con la travesía en OFF, no se debe pasar de 2.500 rpm,
  por riesgo de sobrevelocidad.

**Freno del motor.** Se activa con un interruptor On/Off y otro de
intensidad (baja, media o alta). Solo actúa con el pedal totalmente
liberado y no funciona con el embrague desacoplado. Puede trabajar con
la travesía activada, y entonces el MCM modula el frenado respecto a la
velocidad fijada, hasta el máximo elegido.

La guía lo desaconseja en pavimento mojado o resbaladizo (salvo con ABS
y experiencia), sin remolque o con remolque vacío. Si las ruedas
motrices empiezan a bloquearse o el tractor oscila, se debe desactivar
de inmediato. La razón: la fuerza de frenado se aplica solo al eje
motriz, y con poca carga o poca adherencia puede superar el agarre de
las ruedas.

## Registro de datos y herramienta de diagnóstico

DDEC VI guarda en el CPC datos de uso y rendimiento (consumo, tiempo en
ralentí, tiempo a velocidad alta) e incidentes críticos, como registros
detallados de diagnóstico y eventos de frenado fuerte. Se descargan con
el software DDEC Reports, que forma parte de **DDDL 7.0** (Detroit
Diesel Diagnostic Link), la herramienta de diagnóstico del DDEC VI. La
guía indica como requisito mínimo un equipo con Pentium II y 256 MB de
RAM.

Para un taller o una flota esto tiene valor práctico: el registro
permite comparar hábitos de conducción, justificar un hallazgo con
datos y revisar qué ocurría cuando se produjo una falla.

Para completar la lectura, el
[mantenimiento y refrigerante del Detroit Serie 60](/posts/mantenimiento-detroit-serie-60-intervalos-refrigerante/)
explica los cuidados que evitan muchas de las alarmas de este artículo.
Si trabaja con otras marcas, compare la lógica con el
[ECM del Cummins Signature/ISX](/posts/ecm-cummins-equipo-electrico/),
y para entender las dos causas más frecuentes de apagado, revise el
[sistema de enfriamiento Cummins](/posts/sistema-enfriamiento-cummins/)
y los [sistemas de lubricación](/posts/sistemas-lubricacion/). Para
hábitos de operación que reducen estas alarmas, consulte los
[errores comunes al operar maquinaria pesada](/posts/errores-comunes-al-operar-maquinaria-pesada/).

**Fuentes:** Guía del Operador 2007 del Motor de la Serie 60, Detroit
Diesel (DDC-SVC-MAN-0007), disponible en
[mecanicoautomotriz.org](https://www.mecanicoautomotriz.org/662-manual-mecanica-automotriz-detroit-diesel-serie-60).
