---
title: "Control de tracción TRC de Toyota: funcionamiento, componentes y fallas"
published: 2024-06-03
updatedAt: 2026-11-19
draft: false
featured: false
description: "Cómo funciona el control de tracción TRC de Toyota (ejemplo Celica): detección de patinaje, control del motor y de frenos, componentes, testigos, fallas y diagnóstico."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "trc"
  - "control-de-traccion"
  - "toyota-celica"
  - "abs"
  - "sensores-de-velocidad-de-rueda"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/sistema-control-tracción-TRC-toyota-celica
author: servicio-campo
reviewedBy: servicio-campo
aiAssisted: true
faq:
  - q: "¿En qué se diferencia el TRC del ABS?"
    a: "El ABS actúa al frenar: evita que las ruedas se bloqueen reduciendo la presión de frenado. El TRC actúa al acelerar: evita que las ruedas motrices patinen reduciendo la potencia del motor y frenando la rueda que gira de más. Ambos comparten sensores de velocidad de rueda y el actuador hidráulico, y por eso una falla del ABS suele deshabilitar también el TRC."
  - q: "¿Cuándo conviene desactivar el TRC?"
    a: "En situaciones donde se necesita que las ruedas patinen un poco, como salir de un banco de nieve profunda, arena o barro, o con cadenas de nieve, el TRC corta potencia y puede impedir avanzar. Se desactiva con el interruptor de TRC OFF, y vuelve a activarse al apagar el motor o con el mismo botón. En asfalto normal conviene dejarlo activo."
  - q: "¿Qué indican los testigos del TRC?"
    a: "Normalmente hay un testigo que parpadea mientras el sistema interviene (patinaje detectado), un testigo TRC OFF que se enciende al desactivarlo, y testigos del ABS y de falla que indican avería. Si los de ABS y TRC permanecen encendidos tras el arranque, el autodiagnóstico ha detectado una falla y el control se ha inhabilitado. Consulta el manual del modelo para el significado exacto."
  - q: "¿Neumáticos de distinto tamaño afectan al TRC?"
    a: "Sí. El sistema compara la velocidad de las ruedas. Si una rueda tiene un diámetro distinto, gira a una velocidad diferente aunque no patine, y la ECU puede interpretarlo como patinaje y actuar, o registrar una falla. Usa neumáticos iguales en marca, tamaño y desgaste, y repone la rueda de repuesto compacta solo de forma temporal."
  - q: "¿Puedo conducir con el TRC averiado?"
    a: "El vehículo suele poder circular porque el sistema tiene una función a prueba de fallos, pero sin la asistencia: el ABS puede quedar deshabilitado también, y la tracción en piso resbaladizo será menor. Conviene reparar la falla pronto, empezando por leer los códigos de diagnóstico."
related:
  - diagnostico-mantenimiento-sistema-control-trc
  - sistema-frenos-abs-toyota
  - actuador-sistema-frenos-abs-toyota
  - componentes-escenciales-del-eps-abs-tcs-vehiculos-modernos
---

El control de tracción de Toyota, llamado TRC (Traction Control), evita
que las ruedas motrices patinen al acelerar. Cuando una rueda pierde
adherencia, el motor entrega potencia que no se convierte en
movimiento, y el vehículo puede desviarse o quedarse sin fuerza. El TRC
detecta ese patinaje y actúa antes de que el conductor lo note. En el
Celica, como en otros modelos de la marca, está construido sobre el
sistema ABS, del que reutiliza sensores y actuador.

Esta guía explica el principio, los componentes, los modos de
funcionamiento y cómo diagnosticar las fallas, con el Celica como ejemplo
de arquitectura. Los valores y procedimientos exactos dependen del año y
el modelo: el manual de servicio manda.

## Qué hace el TRC

Cuando el vehículo acelera, la potencia que llega a las ruedas motrices
debe ser menor o igual a la que el piso puede transmitir. Si la
excede, la rueda patina. El TRC reduce el exceso de dos maneras
combinadas:

1. **Reduce el par del motor**, para disminuir la fuerza que llega a la
   rueda.
2. **Frena la rueda que patina**, para transferir par hacia la rueda con
   mejor agarre a través del diferencial.

Esta combinación mantiene la estabilidad direccional y mejora la
tracción en piso mojado, nieve o grava.

## Cómo detecta el patinaje

La unidad de control compara la velocidad de las ruedas. Las **ruedas no
motrices** giran libremente, de modo que su velocidad es una referencia
de la velocidad real del vehículo. Si una rueda motriz gira mucho más
rápido que esa referencia, está patinando. La unidad calcula la
diferencia y decide la intervención.

La señal viene de los **sensores de velocidad de rueda** (los mismos del
ABS): un captador junto a un rotor dentado que genera una señal cuya
frecuencia es proporcional a la velocidad.

## Componentes

| Componente | Función | Falla típica |
|---|---|---|
| Sensores de velocidad de rueda | Miden la velocidad de cada rueda | Suciedad metálica en el imán, cable roto, entrehierro |
| Rotor dentado (corona) | Genera la señal del sensor | Dientes dañados o corrosión |
| ECU de ABS/TRC | Calcula el patinaje y decide | Fallas de alimentación, memoria de códigos |
| Actuador hidráulico (ABS/TRC) | Modula la presión de frenado en cada rueda | Válvulas pegadas, motor de bomba |
| Actuador de la mariposa o mando de potencia | Reduce la potencia del motor | Depende del sistema de acelerador |
| Interruptor TRC OFF y testigos | Desactivan el sistema y avisan al conductor | Contactos, bombillas |
| Interruptor de luz de freno | Informa a la ECU de que se frena | Señal ausente o intermitente |

Según la generación, la reducción de potencia se consigue con una
mariposa secundaria, con el control de la mariposa principal o con
medidas en el encendido y la inyección. El detalle del actuador y la
ECU de frenos está en
[actuador del sistema de frenos ABS Toyota](/posts/actuador-sistema-frenos-abs-toyota/)
y
[sistema de frenos ABS Toyota](/posts/sistema-frenos-abs-toyota/).

## Modos de funcionamiento

- **Vigilancia**: el sistema mide continuamente y no interviene mientras
  el patinaje esté dentro de límites.
- **Intervención**: al detectar patinaje reduce la potencia del motor y
  aplica el freno a la rueda que patina. El testigo del TRC parpadea
  para informar. Una vibración en el pedal o un ruido del actuador son
  normales.
- **Desactivado por el conductor**: con el interruptor TRC OFF, la ECU
  deja de intervenir.
- **Autodiagnóstico**: cada vez que se arranca, el sistema comprueba su
  funcionamiento, los testigos se encienden y se apagan, y si hay una
  falla, queda un código y se activa una **función de seguridad** que
  inhabilita el TRC (y, según la falla, el ABS).

## Diagnóstico

Parte siempre de lo más simple: el TRC depende del ABS y de los sensores
de velocidad, de modo que la mayoría de sus fallas vienen de ahí.

| Síntoma | Causa probable | Comprobación |
|---|---|---|
| Testigos ABS y TRC encendidos | Sensor de velocidad, cableado, ECU, tensión baja | Leer códigos |
| TRC interviene en recta sin patinar | Neumáticos de distinto tamaño, sensor con señal ruidosa | Medir circunferencias; señal del sensor |
| TRC no interviene | Sistema desactivado, falla registrada | Interruptor TRC OFF, códigos |
| Testigo TRC OFF encendido sin pulsar | Interruptor atascado, falla | Interruptor y cableado |
| Ruidos o vibración al acelerar en piso mojado | Intervención normal | Descartar con prueba |
| Falla al arrancar y luego desaparece | Tensión de batería baja, conector flojo | Batería y masas |

Procedimiento:

1. **Lee los códigos** con el método de autodiagnóstico del modelo
   (puenteando terminales del conector o con un escáner compatible) y
   anota los códigos y su estado.
2. **Comprueba la batería y las masas**: una tensión baja genera fallas
   falsas en un sistema que depende de señales de baja tensión.
3. **Inspecciona los sensores de velocidad**: limpia la suciedad
   metálica del extremo del sensor, comprueba el entrehierro y el estado
   del rotor dentado. Mide la resistencia o la señal según el manual.
4. **Revisa el cableado** hasta la ECU, especialmente en el paso por la
   rueda, donde se flexiona.
5. **Comprueba los neumáticos**: tamaño igual y presiones correctas.
6. **Prueba el interruptor de freno** y la señal a la ECU.
7. Si todo es correcto, comprueba el actuador y la ECU. El resto del
   procedimiento está en
   [diagnóstico y mantenimiento del sistema de control TRC](/posts/diagnostico-mantenimiento-sistema-control-trc/).

### Ejemplo práctico

Un Celica enciende los testigos de ABS y TRC tras lavar el motor. El
código apunta a la señal de la rueda delantera izquierda. Al inspeccionar,
el conector del sensor tiene humedad y el extremo del captador, polvo de
freno y limaduras. Se limpia, se seca, se protege el conector y se
borran los códigos. Los testigos se apagan. Si se hubiera sustituido el
actuador, la falla habría vuelto.

## TRC, ABS y control de estabilidad

Los tres sistemas comparten sensores y actuador, pero resuelven
problemas distintos:

| Sistema | Cuándo actúa | Qué controla | Variables que mide |
|---|---|---|---|
| ABS | Al frenar | Evita el bloqueo de ruedas | Velocidad de cada rueda |
| TRC | Al acelerar | Evita el patinaje de las ruedas motrices | Velocidad de ruedas motrices frente a no motrices |
| Control de estabilidad (en modelos que lo incluyen) | En curva o maniobra brusca | Evita el subviraje y el sobreviraje | Ángulo de volante, giro del vehículo y aceleración lateral |

Una consecuencia práctica: el TRC solo corrige el patinaje longitudinal
de las ruedas motrices. No evita que un vehículo entre demasiado rápido
en una curva ni sustituye al control de estabilidad. Tampoco aumenta el
agarre del neumático; solo evita desperdiciar el que hay.

## Uso práctico: cuándo ayuda y cuándo estorba

**Ayuda** en arranques sobre asfalto mojado, hojas, pintura de señalización,
grava suelta y nieve compacta, donde una acelerada brusca haría
patinar una rueda motriz. La intervención se nota como un corte suave de
potencia y, a veces, un leve pulso en el pedal.

**Estorba** en dos casos: cuando se necesita un patinaje controlado para
avanzar (nieve profunda, arena, barro, salida de un hoyo), porque el
sistema corta potencia justo cuando se necesita, y con cadenas de nieve,
cuyo comportamiento confunde la comparación de velocidades. En esos
casos se usa el interruptor TRC OFF y se vuelve a activar al recuperar
el piso firme.

Una regla útil: si el vehículo no avanza con el TRC activado y las
ruedas casi no giran, prueba a desactivarlo; si avanza, no es una
falla.

## Fallas que imitan una avería del TRC

Antes de culpar al sistema, descarta estos casos habituales:

- **Batería débil o terminales sulfatados**: bajan la tensión durante el
  arranque y provocan testigos encendidos que desaparecen al cargar.
- **Rueda de repuesto compacta**: su diámetro menor altera la señal de
  velocidad y puede activar los testigos.
- **Neumáticos con distinta presión o desgaste muy desigual**.
- **Reparaciones recientes de frenos**: un sensor mal asentado, un
  conector sin conectar o aire en el circuito.
- **Cambio de suspensión o altura**, que modifica el entrehierro o tensa
  el cable del sensor.

## Mantenimiento

- Mantén limpios los sensores y los rotores de las ruedas al cambiar
  frenos o rodamientos.
- Revisa el cableado y los conectores tras trabajos en la suspensión.
- Usa siempre neumáticos del mismo tamaño y desgaste similar.
- Cambia el líquido de frenos en el intervalo del fabricante: el actuador
  es sensible a la humedad.
- No ignores un testigo de ABS o TRC encendido; el sistema deja de
  proteger.

Para ver cómo se integran el TRC, el ABS y los demás sistemas de
control, consulta
[componentes esenciales del EPS, ABS y TCS](/posts/componentes-escenciales-del-eps-abs-tcs-vehiculos-modernos/).
