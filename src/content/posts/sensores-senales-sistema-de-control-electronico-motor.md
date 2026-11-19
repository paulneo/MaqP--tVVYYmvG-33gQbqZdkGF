---
title: "Sensores del control electrónico del motor: tipos, señales y diagnóstico"
published: 2024-07-19
updatedAt: 2026-11-19
draft: false
featured: false
description: "Guía de los sensores que alimentan la ECU: caudalímetro, MAP, temperatura, TPS, lambda, cigüeñal y detonación. Cómo funcionan, sus señales y cómo diagnosticarlos."
category: mecanica-automotriz
formato: guia
nivel: intermedio
tags:
  - "sensores-del-motor"
  - "caudalimetro-maf"
  - "ecu"
  - "inyeccion-electronica"
  - "diagnostico-electrico"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/sensores_senales_sistema_de_control_electronico_motor
author: taller-diesel
reviewedBy: taller-diesel
aiAssisted: true
faq:
  - q: "¿Puedo limpiar el caudalímetro de hilo caliente con cualquier limpiador?"
    a: "No. Usa únicamente un limpiador específico para sensores MAF, que no deja residuos, y aplícalo sobre el hilo y el termistor sin tocarlos con cepillos, hisopos ni aire a presión directo. El hilo es muy fino y se rompe con facilidad. Deja secar por completo antes de montar. Si el sensor sigue dando lecturas fuera de rango tras la limpieza, se reemplaza."
  - q: "¿Qué hace la ECU cuando falla un sensor?"
    a: "Detecta que la señal está fuera del rango esperado (por ejemplo, 0 V o 5 V fijos), registra un código de falla y sustituye el dato por un valor de emergencia, a menudo calculado a partir de otros sensores. El motor sigue funcionando pero en modo de emergencia: con menor potencia, mezcla fija o ralentí inestable. Por eso un sensor averiado casi nunca detiene el motor, pero sí degrada el consumo y las emisiones."
  - q: "¿Un código de falla de un sensor significa que hay que cambiar el sensor?"
    a: "No necesariamente. El código indica que la señal no es coherente, y la causa puede ser el sensor, el cableado, el conector, la alimentación de 5 V, la masa o incluso un problema mecánico (una fuga de aire que hace que el MAF y el MAP discrepen). Antes de cambiar la pieza, mide alimentación, masa y señal en el conector, y revisa el estado de cables y terminales."
  - q: "¿Cuál es la diferencia entre un sensor MAF y un sensor MAP?"
    a: "El MAF (caudalímetro) mide cuánto aire entra al motor, en masa o volumen, y se monta entre el filtro y el cuerpo de aceleración. El MAP mide la presión absoluta en el múltiple de admisión y la ECU deduce el aire a partir de esa presión, las rpm y la temperatura. Algunos motores usan uno, otros usan los dos, y en motores turbo el MAP también sirve para controlar la presión de sobrealimentación."
  - q: "¿Cómo sé si la señal de un sensor es la correcta?"
    a: "Compara tres cosas: la lectura en el escáner con el motor en ralentí y a distintas cargas, el valor esperado que indica el manual de servicio, y la medición directa con multímetro u osciloscopio en el conector. Una señal correcta cambia de forma suave y proporcional a la variable que mide; una señal que salta, se queda fija o no responde indica sensor o cableado dañado."
related:
  - sensores-en-vehiculos-modernos-tipos-funciones
  - pruebas-sensores-inyeccion-electronica-gasolina-multimetro
  - voltaje-terminal-sensor-sistema-control-electronico-motor
  - circuitos-alimentacion-tierra-control-electronico-motor
---

La unidad de control del motor (ECU) no ve el motor: lo interpreta a
través de sensores. Cada uno convierte una magnitud física (aire,
temperatura, presión, posición, composición del escape) en una señal
eléctrica, y con ese conjunto de señales la ECU calcula cuánto
combustible inyectar y cuándo hacer saltar la chispa. Cuando un sensor
entrega un dato incorrecto, la ECU decide con información equivocada, y
el síntoma aparece como ralentí inestable, consumo alto, falta de
potencia o humo, sin que haya una falla mecánica detrás.

Esta guía recorre los sensores principales, qué tipo de señal entrega
cada uno, cómo se comprueba y qué síntomas produce cuando falla. Los
valores de voltaje y resistencia son **referenciales**: los del manual de
servicio de tu motor prevalecen.

## Cómo llega la información a la ECU

Casi todos los sensores analógicos comparten el mismo esquema de
conexión:

- **Referencia de 5 V**: la ECU entrega una tensión estabilizada de
  alimentación al sensor.
- **Masa de sensores**: una línea de retorno a la ECU, separada de la
  masa de potencia para evitar ruido.
- **Señal**: la tensión (o frecuencia) que varía con la magnitud medida.

Esta arquitectura explica un hecho útil para el diagnóstico: si **varios
sensores fallan a la vez** (MAP, TPS y sensor de presión de combustible,
por ejemplo), el problema suele estar en la referencia de 5 V o en la
masa compartida, no en los sensores. Un cortocircuito en una sola
línea de 5 V puede anular varias lecturas simultáneamente. Hay más
detalle del circuito en
[alimentación y masa del control electrónico del motor](/posts/circuitos-alimentacion-tierra-control-electronico-motor/).

Los sensores entregan cuatro tipos de señal:

| Tipo de señal | Ejemplo | Cómo se mide |
|---|---|---|
| Analógica (tensión variable) | TPS, MAP, caudalímetro de hilo caliente | Multímetro en V CC |
| Resistiva (termistor) | Temperatura de refrigerante y de aire | Ohmios, o tensión en divisor |
| Digital o de frecuencia | Caudalímetro Karman, sensores Hall, velocidad | Osciloscopio o frecuencímetro |
| Alterna generada | Sensor inductivo de cigüeñal | Osciloscopio, o V CA durante el arranque |

## Medición del aire de admisión

La señal de aire es la más importante para calcular el combustible: de
ella sale la duración base de la inyección. Los motores de inyección
electrónica "tipo L" usan un caudalímetro; los "tipo D" calculan el aire
a partir de la presión del múltiple (sensor MAP).

### Caudalímetro de hilo caliente (masa de aire)

Mide directamente la **masa** de aire, que es lo que importa para la
combustión: el aire frío y el aire caliente ocupan volúmenes distintos,
pero lo que se quema es la masa de oxígeno.

![Caudalímetro de aire](https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/legacy-mecanica/sensores_senales_sistema_de_control_electronico_motor)

Funcionamiento:

1. Un hilo muy fino (o una película) se calienta con corriente eléctrica
   por encima de la temperatura del aire.
2. Al pasar el aire, enfría el hilo en proporción a la masa que circula.
3. Un circuito en puente compara la temperatura del hilo con la de un
   termistor de aire de admisión y aumenta la corriente para mantener
   constante la diferencia de temperatura.
4. Esa corriente, convertida en tensión, es la señal que recibe la ECU:
   a más aire, más corriente y más tensión.

Ventajas: no tiene piezas móviles, ofrece poca restricción al flujo y
compensa la densidad del aire (altitud y temperatura). Su punto débil es
la **suciedad**: polvo, aceite de un filtro mal engrasado o vapores del
cárter se depositan en el hilo, lo aíslan y hacen que el sensor lea menos
aire del real. El resultado típico es mezcla pobre, tirones en
aceleración y pérdida de potencia.

### Caudalímetro de paleta (volumen de aire)

Una placa abatible se desplaza por la fuerza del aire contra un muelle
de retorno, y un potenciómetro convierte el ángulo de la placa en
tensión. Mide **volumen**, por lo que lleva incorporado un termistor para
corregir por temperatura. Es un diseño más antiguo y sensible al
desgaste: la pista del potenciómetro se desgasta y produce saltos de
señal en ciertas aperturas, que se notan como tirones a un régimen
concreto.

### Caudalímetro de vórtice óptico Karman (volumen de aire)

Un generador de vórtices en el conducto crea remolinos aguas abajo, y su
**frecuencia es proporcional a la velocidad del aire**. Los remolinos
mueven un espejo delgado, un diodo emisor lo ilumina y un fototransistor
detecta las vibraciones, generando una señal de pulsos que la ECU cuenta.
Como la salida es digital, se diagnostica con osciloscopio: debe verse un
tren de pulsos cuya frecuencia aumenta con las rpm.

### Sensor MAP (presión absoluta del múltiple)

Un diafragma de silicio deforma una resistencia que varía con la
presión. A motor parado con la llave en contacto, mide la presión
atmosférica local (cerca de 100 kPa a nivel del mar); en ralentí, con el
múltiple en depresión, la lectura baja mucho. Es un buen **sensor de
referencia**: si a motor parado el valor no coincide con la presión
atmosférica del lugar, el sensor está descalibrado.

## Sensores de temperatura

El sensor de **temperatura del refrigerante (ECT)** y el de **aire de
admisión (IAT)** son termistores NTC: su resistencia baja al subir la
temperatura. La ECU los lee con un divisor de tensión y, a partir de
ellos, enriquece la mezcla en frío, activa los ventiladores y corrige el
avance.

Una falla típica del ECT es la **lectura de motor frío permanente**:
la ECU enriquece de más, el consumo sube, hay humo negro y el motor
puede arrancar mal en caliente. La contraria (lectura de motor caliente
fija) dificulta el arranque en frío. Para comprobarlo, compara la
lectura del escáner con un termómetro infrarrojo en el termostato y
verifica que la resistencia a distintas temperaturas coincide con la
tabla del manual.

## Posición de mariposa y pedal (TPS, APP)

El TPS es un potenciómetro solidario con el eje de la mariposa. Entrega
una tensión baja con la mariposa cerrada y alta a plena apertura. En un
TPS sano, la tensión cambia de forma **continua** al abrir despacio la
mariposa; las pistas desgastadas producen saltos o caídas a cero en
ciertas posiciones, que se notan como tirones o "bache" al acelerar
suave. Los sistemas de acelerador electrónico usan sensores
**duales** en el pedal (APP) y la mariposa, con dos señales que la ECU
compara entre sí: si discrepan, limita la potencia.

## Cigüeñal y árbol de levas (CKP, CMP)

Informan a la ECU de la posición y la velocidad del motor, y son la base
del sincronismo de inyección y encendido. Hay dos tecnologías:

- **Inductivo**: una bobina con imán genera una tensión alterna al pasar
  los dientes de una rueda fónica. Tiene dos hilos (a veces con malla). Se
  prueba midiendo la resistencia de la bobina (el valor lo da el manual) y
  viendo la señal en osciloscopio durante el arranque.
- **Efecto Hall**: tres hilos (alimentación, masa, señal). Entrega una
  onda cuadrada de nivel alto y bajo, y se comprueba con osciloscopio.

Una falla del CKP produce **motor que da vueltas pero no arranca** o que
se apaga de golpe en caliente. La separación entre el sensor y la rueda
(entrehierro) importa: un sensor mal asentado o con virutas metálicas
pegadas al imán distorsiona la señal.

## Sonda lambda (oxígeno)

Mide el contenido de oxígeno en el escape para que la ECU corrija la
mezcla en lazo cerrado. La sonda de circonio clásica oscila entre unos
0,1 V (mezcla pobre) y 0,9 V (mezcla rica), conmutando varias veces por
segundo cuando el control funciona. Una sonda envejecida conmuta lenta
o queda "perezosa", y el escáner lo refleja como correcciones de
combustible (fuel trims) que se alejan de cero. Las sondas de banda
ancha entregan una señal proporcional a la relación aire-combustible y
requieren medición con escáner, no con multímetro.

## Sensor de detonación (knock)

Un cristal piezoeléctrico atornillado al bloque convierte las vibraciones
del golpeteo en una tensión alterna. La ECU filtra la frecuencia
característica de la detonación y **retrasa el avance** del cilindro
afectado. Si el sensor falla, el motor pierde potencia porque la ECU
retrasa el encendido por precaución, o puede detonar si no detecta el
golpeteo real. Su par de apriete es importante: un sensor mal apretado
transmite mal la vibración.

## Diagnóstico paso a paso

1. **Lee los códigos** con un escáner y anota los datos de congelación de
   cuadro (rpm, carga, temperatura cuando saltó la falla).
2. **Compara datos en vivo**: con el motor caliente en ralentí, mira el
   caudal de aire o el MAP, la temperatura, los fuel trims y la lambda.
   Los fuel trims a largo plazo por encima de unos ±10 % indican que la
   ECU compensa algo (aire falso, caudalímetro sucio, inyectores).
3. **Mide en el conector**, con la llave en contacto: referencia de 5 V,
   masa y señal. Una masa con caída de tensión (más de unas pocas
   décimas de voltio respecto al negativo de la batería) distorsiona las
   lecturas de todos los sensores. En
   [pruebas de sensores con multímetro](/posts/pruebas-sensores-inyeccion-electronica-gasolina-multimetro/)
   y
   [voltaje en los terminales del sensor](/posts/voltaje-terminal-sensor-sistema-control-electronico-motor/)
   se explica cómo medir cada uno.
4. **Descarta la causa mecánica** antes de condenar el sensor: una fuga
   de vacío, un escape con fuga antes de la lambda o un filtro de aire
   tapado producen lecturas anómalas con sensores sanos.
5. **Simula la señal**: con el escáner en modo de prueba o con un valor
   conocido aplicado según el manual, comprueba que la ECU reacciona.

### Síntomas más comunes

| Síntoma | Sensor sospechoso | Comprobación rápida |
|---|---|---|
| Tirones al acelerar, pérdida de potencia | MAF sucio, TPS con pistas gastadas | Caudal de aire en g/s frente a rpm; barrido lento del TPS |
| Ralentí inestable | MAP, ECT, aire falso | MAP a motor parado = presión atmosférica |
| Humo negro, consumo alto | ECT leyendo frío, MAF, lambda | Comparar ECT con termómetro |
| Motor gira pero no arranca | CKP, CMP | Señal en osciloscopio durante el arranque |
| Detonación o falta de potencia | Sensor de detonación | Par de apriete y señal con golpe leve en el bloque |
| Testigo de motor encendido con varios códigos | Alimentación de 5 V o masa | Tensión de referencia en el conector |

## Mantenimiento preventivo

- Cambia el filtro de aire en su intervalo; un filtro mal ajustado deja
  pasar polvo que contamina el MAF.
- No lubriques el elemento filtrante con aceite en motores con caudalímetro
  de hilo caliente.
- Mantén limpios y sin corrosión los conectores y revisa los
  arneses en zonas calientes o con roce.
- Después de lavar el motor, comprueba que no entró agua a los conectores
  de sensores.
- Cambia las sondas lambda según el intervalo del fabricante: pierden
  respuesta con el uso aunque no encienda el testigo.

## Lo que hay que recordar

Un sensor aislado casi nunca es el único sospechoso. Lo que separa un
diagnóstico rápido de uno interminable es partir de la alimentación y
la masa, comprobar la señal contra la condición real del motor y solo
después reemplazar la pieza. Para una visión general de los demás
sensores del vehículo, consulta
[sensores en vehículos modernos](/posts/sensores-en-vehiculos-modernos-tipos-funciones/).
