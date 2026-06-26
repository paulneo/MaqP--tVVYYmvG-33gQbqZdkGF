---
title: "Funcionamiento del accionador de control de crucero: Componentes y diagnóstico"
description: "Descubre cómo funciona el accionador de control de crucero en los vehículos modernos, incluyendo sus componentes principales y cómo se realiza el diagnóstico de fallos del sistema de crucero."
pubDate: "Sep 05 2024"
heroImage: "/mecanica_automotriz/funcionamiento-del-accionador-de-control-de-crucero-componentes-diagostico.png"
tags: ["control de crucero", "accionador", "vehículos", "motor"]
category: mecanica_automotriz
---

El **control de crucero** es una función esencial en los vehículos modernos, ya que permite al conductor mantener una velocidad constante sin necesidad de presionar el pedal del acelerador. Este sistema es controlado por la ECU y depende de varios componentes clave, como el **accionador de control de crucero**. En este artículo, exploraremos cómo funciona el accionador, sus principales partes y cómo se realiza el diagnóstico de fallos.

### 1. Motor e interruptores de límite

<img src="/mecanica_automotriz/funcionamiento-del-accionador-de-control-de-crucero-componentes-diagostico2.png" alt="Motor e interruptores de límite" width="420"/>

El **motor del accionador** es el encargado de ajustar el ángulo de la **válvula de mariposa de gases**, lo que permite que el sistema de crucero acelere o desacelere según las instrucciones de la **ECU de control de crucero**. El motor puede girar en ambos sentidos para aumentar o reducir la velocidad del vehículo.

#### 1.1 Interruptores de límite

<img src="/mecanica_automotriz/funcionamiento-del-accionador-de-control-de-crucero-componentes-diagostico3.png" alt="Interruptores de límite" width="420"/>

Para evitar que el motor del accionador se dañe cuando la **válvula de mariposa de gases** está completamente abierta o cerrada, se utilizan dos interruptores de límite: el **N.°1** y el **N.°2**. Estos interruptores aseguran que el motor se detenga en las posiciones extremas de la válvula. Por ejemplo, cuando la válvula está completamente abierta, el interruptor de límite N.°1 se activa y detiene el motor, y lo mismo ocurre con el N.°2 cuando la válvula está completamente cerrada.

#### Observación:

Este mecanismo protege el motor del accionador de posibles daños que podrían ocurrir si se fuerza a operar en condiciones fuera de sus límites.

### 2. Embrague magnético

<img src="/mecanica_automotriz/funcionamiento-del-accionador-de-control-de-crucero-componentes-diagostico4.png" alt="Embrague magnético" width="420"/>

El **embrague magnético** es otro componente crucial del accionador de control de crucero. Su función principal es conectar o desconectar el motor del **brazo de control** del sistema de crucero, dependiendo de las señales de cancelación.

#### 2.1 Cancelación del control de crucero

El **control de crucero** se cancela automáticamente cuando el conductor activa cualquiera de los interruptores de cancelación (como el freno o el embrague). Cuando esto sucede, la ECU de control de crucero desacopla el embrague magnético, lo que desconecta el motor del brazo de control y permite que el sistema vuelva a su estado de reposo. Este proceso también ocurre automáticamente cuando se cumplen ciertas condiciones de seguridad.

#### 2.2 Cancelación por pedal de freno

Al pisar el pedal del freno, el sistema de control de crucero recibe una señal que desconecta el embrague magnético. Esto garantiza que el conductor pueda tener control total del vehículo en cualquier momento, interrumpiendo el sistema de crucero de manera inmediata.

### 3. Potenciómetro (algunos modelos)

<img src="/mecanica_automotriz/funcionamiento-del-accionador-de-control-de-crucero-componentes-diagostico5.png" alt="Potenciómetro (algunos modelos)" width="420"/>

En algunos vehículos, el accionador de control de crucero está equipado con un **potenciómetro**. Este componente detecta el ángulo de giro del **brazo de control** y envía una señal continua a la ECU de control de crucero. A partir de estos datos, la ECU puede ajustar el ángulo de la **válvula de mariposa de gases** para corregir cualquier diferencia entre la velocidad real y la velocidad definida por el conductor.

#### Observación:

En los sistemas más modernos controlados por **ETCS-i (Sistema de control del regulador electrónico inteligente)**, el motor de control de la mariposa de gases reemplaza la función del accionador de control de crucero tradicional. Estos sistemas electrónicos mejoran la precisión y el rendimiento del control de crucero.

### 4. Función de diagnóstico del control de crucero

Los sistemas de control de crucero incluyen funciones de **diagnóstico** para identificar posibles fallos y notificar al conductor de cualquier problema en el sistema.

#### 4.1 Notificación al conductor

Si la **ECU de control de crucero** detecta algún mal funcionamiento en el sistema, la luz indicadora en el cuadro de instrumentos múltiple comenzará a parpadear, advirtiendo al conductor sobre el problema. En los vehículos más antiguos, la luz parpadea cinco veces, mientras que en los modelos más recientes, sigue parpadeando de forma continua hasta que el problema se resuelva.

#### 4.2 Códigos de error de diagnóstico

Cuando el sistema detecta un fallo, el contenido del error se almacena en la ECU de control de crucero y se puede visualizar en forma de **código de diagnóstico (DTC)**. Estos códigos indican la naturaleza del problema y pueden ser leídos de dos maneras:

1. **Con un comprobador de mano**: Conectando el comprobador al **DLC (Conector de enlace de datos)**, el DTC puede ser leído fácilmente.
2. **Con la luz indicadora del control de crucero**: Con ayuda de SST, se puede conectar el terminal **Tc** y el terminal **E1** o **CG** del DLC para leer el código a través de una secuencia de parpadeos de la luz indicadora.

### 5. Métodos de borrado de códigos de diagnóstico (DTC)

Existen diferentes métodos para borrar los códigos de diagnóstico, dependiendo del modelo del vehículo:

- **Con un comprobador de mano**: Conectar el comprobador al DLC y utilizarlo para eliminar los DTC registrados.
- **Extracción del fusible**: Retirar el fusible correspondiente del bloque de unión para borrar el código.
- **Accionando el interruptor de control de crucero**: Este método requiere conectar los terminales Tc y E1 del DLC y presionar el interruptor **CANCEL** en el interruptor de control de crucero. A continuación, se debe presionar el interruptor **MAIN** cinco veces en tres segundos para borrar el código de error.

### Conclusión

El **accionador de control de crucero** es una parte crucial del sistema de control de velocidad en los vehículos modernos, asegurando que el sistema funcione de manera segura y eficiente. Componentes como el **motor**, los **interruptores de límite**, el **embrague magnético** y el **potenciómetro** trabajan juntos para mantener una velocidad constante y responder a las órdenes del conductor. Además, el diagnóstico integrado en la ECU de control de crucero permite identificar y corregir fallos de manera eficiente, asegurando una experiencia de conducción más cómoda y segura.
