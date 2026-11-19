---
title: "Cojines de aire SRS: tipos, componentes, precauciones y diagnóstico"
published: 2024-07-29
updatedAt: 2026-11-19
draft: false
featured: false
description: "Tipos de cojines de aire (frontal, lateral, cortina), sensores y módulo SRS, testigo encendido, reglas de seguridad para ocupantes y precauciones de servicio."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "cojines-de-aire-srs"
  - "airbag"
  - "seguridad-pasiva"
  - "testigo-srs"
  - "precauciones-de-servicio"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/tipos_y_precaucioes_de_los_cojines_de_aire_SRS
author: servicio-campo
reviewedBy: servicio-campo
aiAssisted: true
faq:
  - q: "¿Por qué no se debe usar un multímetro o una lámpara de prueba en el circuito del cojín de aire?"
    a: "Porque el inflador se activa con una corriente muy pequeña. Una lámpara de prueba o el modo de medir resistencia de un multímetro pueden inyectar corriente suficiente para disparar el módulo, con riesgo de lesiones graves. Las comprobaciones del circuito SRS se hacen con el escáner y con las herramientas que indique el manual de servicio, siempre con la batería desconectada y esperando el tiempo que especifique el fabricante."
  - q: "¿Qué significa que el testigo SRS quede encendido?"
    a: "Normalmente el testigo se enciende unos segundos al dar contacto y se apaga. Si permanece encendido o parpadea, la unidad de control detectó una falla y, en muchos sistemas, deshabilita el despliegue de todos o algunos cojines. El vehículo se puede conducir, pero esos cojines pueden no abrirse en un choque. Hay que leer los códigos con un escáner compatible con SRS y reparar la causa."
  - q: "¿Hay que cambiar los cojines de aire después de un choque en el que no se abrieron?"
    a: "Depende de la severidad. Tras cualquier colisión, el manual de servicio indica qué revisar: sensores de impacto, pretensores de cinturones, cableado y la unidad de control, que puede haber guardado el evento. Si hubo despliegue de cualquier elemento, el módulo, la unidad de control y los componentes asociados se reemplazan; un cojín desplegado nunca se reutiliza."
  - q: "¿Es seguro llevar un niño en el asiento delantero?"
    a: "Un sistema de retención infantil orientado hacia atrás no debe colocarse en un asiento protegido por un cojín de aire frontal activo, porque el despliegue puede causar lesiones graves o la muerte. Lo recomendable es que los niños viajen en el asiento trasero con el sistema de retención adecuado a su edad y tamaño. En cada vehículo, el manual del propietario indica las excepciones y cómo desactivar el cojín del pasajero cuando existe esa función."
  - q: "¿Cuándo no se despliegan los cojines de aire?"
    a: "El sistema está diseñado para activarse solo por encima de cierto umbral de desaceleración y en la dirección de la colisión. No se abren los frontales en impactos traseros ni, por lo general, en vuelcos; tampoco en choques leves a baja velocidad o al golpear un bordillo. Los laterales y de cortina se activan por impactos de ese lado. Que el cojín no se abra no implica falla: los cinturones siguen siendo la protección principal."
related:
  - como-funcionan-los-cojines-de-aire-srs
  - principio-del-obd-como-funciona-el-diagnostico-a-bordo-vehiculos
  - sensores-en-vehiculos-modernos-tipos-funciones
---

El SRS (Sistema Suplementario de Sujeción) completa la protección del
cinturón de seguridad; no la reemplaza. Un cojín de aire solo cumple su
función si el ocupante lleva el cinturón abrochado y está bien sentado:
sin él, la posición del cuerpo en el momento del despliegue cambia y el
cojín puede lesionar en lugar de proteger. Esta guía explica los tipos de
cojines y sensores, cómo funciona la cadena de activación, qué reglas
deben seguir los ocupantes y qué precauciones exige el servicio al
sistema.

## Tipos de cojines de aire

| Tipo | Ubicación habitual | Protege en | Observación |
|---|---|---|---|
| Frontal del conductor | Centro del volante | Impacto frontal | Fase única o dual |
| Frontal del pasajero | Tablero, lado derecho | Impacto frontal | Fase única o dual |
| Lateral (de tórax) | Respaldo del asiento o puerta | Impacto lateral | Protege costillas y pelvis |
| De cortina | Borde del techo, sobre las ventanas | Impacto lateral y vuelco, según diseño | Delantera o delantera + trasera |
| De rodillas | Bajo el tablero | Impacto frontal | Reduce el avance de las piernas |

La diferencia entre **fase única y fase dual** está en la potencia del
despliegue. En un sistema de fase dual, la unidad de control decide
cuánta carga del inflador usar según la severidad del impacto, el uso del
cinturón y la posición del asiento: en un choque moderado se activa una
etapa, y en uno severo se activan las dos. Así el cojín infla con menos
fuerza cuando no es necesario.

## Cómo funciona la cadena de activación

1. **Detección.** Los sensores de impacto miden la desaceleración. Hay
   sensores en la parte delantera (frontales), en los costados o puertas
   (laterales) y uno central en la unidad de control.
2. **Decisión.** La unidad de control SRS compara la señal con umbrales
   preestablecidos, distingue entre un choque real y un golpe
   (un bache o un bordillo) y decide qué módulos activar.
3. **Encendido.** Envía un pulso de corriente al detonador del inflador.
   El detonador enciende un propelente sólido que genera gas casi
   instantáneamente.
4. **Despliegue.** El gas infla la bolsa en decenas de milisegundos, y
   luego esta se desinfla por orificios de escape mientras el ocupante
   la comprime, absorbiendo energía.

Todo el proceso ocurre antes de que el ocupante haya avanzado hacia el
tablero, por eso el despliegue es tan violento.

### Sensores adicionales

- **Sensor de puerta lateral**: en carrocerías sin pilar central
  suficiente (tres puertas o portón), mejora la detección de impactos
  laterales.
- **Sensor de posición del asiento**: informa a los sistemas de fase dual
  de qué tan cerca está el ocupante del módulo.
- **Sensor o clasificador de ocupante**: detecta si el asiento del
  pasajero está ocupado y estima el peso, para habilitar o inhibir el
  cojín delantero. Es sensible a humedad, cubreasientos y objetos
  pesados en el asiento.
- **Pretensores de cinturón**: se activan con el SRS y tensan el cinturón
  en el choque. Forman parte del mismo circuito y se reemplazan igual.

## Otros componentes que dan fallas

- **Cinta espiral (clock spring)**: conecta el volante giratorio con la
  unidad de control. Si se rompe, el testigo SRS se enciende y el cojín
  del conductor queda inactivo; a veces deja también sin funcionar el
  claxon o los mandos del volante.
- **Conectores amarillos bajo los asientos**: son el punto débil por
  excelencia. Se aflojan al mover el asiento o al desmontarlo.
- **Cableado en la columna y el piso**: roces y humedad (por ejemplo, tras
  una inundación) producen códigos de resistencia fuera de rango.

## Precauciones para los ocupantes

**Niños.**
- No coloques un sistema de retención infantil orientado hacia atrás en
  el asiento con cojín frontal activo: la fuerza del despliegue puede
  causar lesiones graves o la muerte.
- No lleves a un niño en brazos o sobre el regazo; usa siempre un
  sistema de retención adecuado a su talla.
- Si es inevitable instalar un sistema orientado hacia adelante en el
  asiento delantero, desplaza el asiento lo más atrás posible y sigue las
  indicaciones del manual.
- Evita que los niños se arrodillen, se levanten o se inclinen hacia la
  puerta o el tablero.

**Postura y objetos.**
- Siéntate erguido, con la espalda apoyada en el respaldo y a una
  distancia razonable del volante.
- No coloques objetos ni animales sobre o frente al tablero ni al volante.
- No viajes con objetos sueltos en el regazo o los brazos.
- No instales portabebidas, ganchos, accesorios ni cubiertas en la puerta
  ni en las zonas de despliegue del lateral y de cortina.
- No apoyes la cabeza ni el cuerpo contra la puerta o la ventana al viajar.
- Si pones fundas al asiento, usa solo las compatibles con cojines
  laterales y con el clasificador de ocupante.

## Precauciones de servicio

Estas reglas protegen al técnico y se repiten en todos los manuales:

1. **Desconecta la batería** y espera el tiempo que indique el fabricante
   antes de tocar el sistema, para que se descargue la reserva de energía
   de la unidad de control.
2. **No midas el circuito** con lámpara de prueba ni con ohmímetro; usa
   solo el escáner y las herramientas del manual.
3. **Maneja los módulos con la cara de despliegue hacia arriba** y lejos
   del cuerpo. Nunca los dejes sobre una superficie caliente ni cerca de
   corriente eléctrica o fuentes de calor.
4. **No los golpees ni los desarmes.** Un módulo caído se descarta.
5. **Después de un despliegue**, reemplaza el módulo, la unidad de
   control (si guardó el evento), los pretensores utilizados y la cinta
   espiral si el manual lo indica. No se reutiliza ningún componente
   pirotécnico.
6. **Reemplaza solo con piezas del modelo exacto**, nunca con piezas de
   desmontaje de origen desconocido.
7. **Deshazte de los módulos** sin desplegar según el procedimiento del
   fabricante.

## Diagnóstico del testigo SRS

El testigo debe encenderse unos segundos al dar contacto y apagarse. Si
no se enciende o si se queda encendido, el sistema tiene un problema.

| Síntoma | Causas habituales | Qué revisar |
|---|---|---|
| Testigo permanente | Conector flojo bajo el asiento, cinta espiral rota, sensor de ocupante, falla de módulo | Códigos con escáner SRS y estado de los conectores |
| Testigo parpadea | Falla grave o memoria de código | Leer y borrar solo tras reparar |
| El testigo no enciende al dar contacto | Bombilla o LED averiado, falla de la unidad de control | Prueba de autochequeo y alimentación |
| Testigo de pasajero "OFF" erróneo | Clasificador de ocupante, humedad bajo el asiento | Estado del asiento y conectores |
| Testigo se enciende tras una reparación | Conector sin reconectar o código memorizado | Reconectar y borrar códigos |

Cuando hay un código, la secuencia correcta es leerlo, localizar la
causa (conector, cableado, componente), repararla y borrar el código. Si
el testigo vuelve, la falla persiste. El diagnóstico a bordo se explica
en [cómo funciona el diagnóstico OBD](/posts/principio-del-obd-como-funciona-el-diagnostico-a-bordo-vehiculos/).

## Mantenimiento y vida útil

El SRS no requiere mantenimiento periódico en el uso normal, pero sí
atención en estos casos:

- **Cambio de volante o de columna**: exige desconectar el SRS y
  reconectarlo respetando la posición central de la cinta espiral; si se
  monta descentrada, se rompe al girar.
- **Inundación o humedad en el piso**: los conectores y la unidad de
  control suelen ir bajo los asientos o la consola. Revísalos antes de
  volver a conectar la batería.
- **Vida útil del módulo**: algunos fabricantes antiguos fijaban un plazo
  de reemplazo; en vehículos recientes lo habitual es que no exista, pero
  la ficha del manual del propietario es la referencia.
- **Carrocería y asientos reparados**: tras reparar un choque, comprueba
  que los sensores de impacto estén en su posición original y con el par
  de apriete indicado, porque su orientación define cuándo se activan.

## Cuándo no se despliega un cojín

El diseño evita despliegues innecesarios: un cojín frontal no está hecho
para choques traseros ni para la mayoría de los vuelcos, y tampoco se
abre en impactos leves a baja velocidad. Los laterales y de cortina se
activan por impactos de ese lado. Que no se abra tras un golpe no implica
una falla, pero **cualquier choque exige que un taller revise el sistema**,
porque los sensores y el cableado pueden haber quedado afectados. Para ver
cómo se relaciona con el resto de los sensores del vehículo, lee
[sensores en vehículos modernos](/posts/sensores-en-vehiculos-modernos-tipos-funciones/),
y para una explicación del proceso de activación,
[cómo funcionan los cojines de aire SRS](/posts/como-funcionan-los-cojines-de-aire-srs/).
