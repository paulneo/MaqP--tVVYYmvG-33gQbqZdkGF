---
title: "Bloqueo y etiquetado (LOTO) en maquinaria: procedimiento paso a paso"
published: 2024-03-20
updatedAt: 2026-11-19
draft: false
featured: false
description: "Procedimiento de aislamiento de energía (LOTO) para maquinaria pesada y móvil: fuentes de energía, siete pasos, bloqueo grupal, verificación, tabla de energías y errores comunes."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - "bloqueo-y-etiquetado"
  - "loto"
  - "aislamiento-de-energia"
  - "seguridad-en-mantenimiento"
  - "maquinaria-pesada"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/prevencion-perdidas
author: redaccion-maquinaria
reviewedBy: redaccion-maquinaria
aiAssisted: true
faq:
  - q: "¿Qué diferencia hay entre bloqueo y etiquetado?"
    a: "El bloqueo coloca un candado u otro dispositivo físico que mantiene el aislamiento en posición segura y no permite energizar el equipo. El etiquetado coloca una tarjeta que informa quién bloqueó, por qué y que no se debe operar. La tarjeta sola advierte, pero no impide; por eso siempre que sea posible se usa candado y tarjeta juntos."
  - q: "¿Por qué cada persona usa su propio candado?"
    a: "Porque cada trabajador depende de su propio candado para saber que el equipo no puede energizarse mientras está expuesto. En trabajos con varias personas se usa un cajetín de bloqueo grupal: la llave del equipo queda en el cajetín y cada trabajador pone su candado. Nadie retira el candado de otro."
  - q: "¿Basta con apagar el motor y quitar la llave en una excavadora?"
    a: "No. Con el motor apagado puede quedar energía almacenada: presión en circuitos hidráulicos y acumuladores, un brazo o implemento levantado que puede caer, resortes de frenos, aire en el sistema neumático, batería conectada. Antes de meter las manos hay que bajar y apoyar los implementos, liberar presión, desconectar la batería y verificar."
  - q: "¿Qué es la verificación de energía cero?"
    a: "Es la prueba de que el equipo no puede arrancar ni moverse tras el aislamiento. Se intenta accionar los controles o el arranque desde el puesto de mando (con el bloqueo colocado y todas las personas fuera de peligro) y se verifica con instrumento, cuando corresponde, que no hay tensión ni presión. Si algo responde, el aislamiento no es completo."
  - q: "¿Cuándo se puede retirar un bloqueo?"
    a: "Cuando el trabajo terminó, la máquina se inspeccionó, las herramientas y piezas se retiraron, las personas están fuera de la zona de peligro y se avisó al personal afectado. Normalmente lo retira quien lo colocó. Si esa persona no está, solo se retira con el procedimiento de excepción de la empresa, con autorización y verificación."
related:
  - como-detectar-fugas-hidraulicas-en-una-excavadora
  - mantenimiento-sistema-hidraulico-excavadora-paso-a-paso
  - analisis-seguridad-trabajo
  - mantenimiento-basico-de-maquinaria-pesada
---

La mayoría de las lesiones graves durante el mantenimiento no pasan
porque falló una pieza: pasan porque el equipo se movió, arrancó o
liberó presión mientras alguien estaba dentro, debajo o cerca. El
bloqueo y etiquetado, conocido por su sigla inglesa **LOTO** (lockout /
tagout), es el método para impedir que eso ocurra: aislar todas las
fuentes de energía, bloquearlas y comprobar que el equipo no puede
funcionar.

Esta guía describe el procedimiento de forma que se pueda adaptar a una
flota de maquinaria pesada. El procedimiento escrito de cada empresa y
la normativa local (por ejemplo, 29 CFR 1910.147 en Estados Unidos, o la
norma equivalente de tu país) son los que mandan.

## Conceptos básicos

- **Aislamiento de energía:** separar físicamente el equipo de sus
  fuentes de energía con un dispositivo (interruptor, válvula, desconector
  de batería).
- **Bloqueo:** poner un candado u otro dispositivo que mantiene el
  aislamiento en posición segura.
- **Etiquetado:** colocar una tarjeta con el nombre del responsable,
  fecha y motivo; indica que no se debe operar ni retirar.
- **Energía almacenada (residual):** la que queda en el equipo después de
  aislarlo: presión, peso suspendido, resortes, condensadores.
- **Persona autorizada:** quien aplica el bloqueo. **Persona afectada:**
  quien opera o trabaja cerca del equipo bloqueado.

## Tipos de energía en maquinaria

| Energía | Ejemplo en una máquina | Cómo se aísla | Cómo se verifica |
|---|---|---|---|
| Mecánica (motor) | Motor diésel en marcha, arranque | Apagar, retirar la llave y bloquearla | Intentar arrancar; la máquina no responde |
| Eléctrica | Baterías, sistemas de alta tensión en híbridos o eléctricos, tableros | Corte de batería con desconector bloqueable; seccionamiento de alta tensión según el fabricante | Medición con instrumento adecuado cuando corresponda |
| Hidráulica | Bombas, cilindros, acumuladores | Detener el motor, aliviar presión con las palancas, cerrar válvulas | Manómetros en cero; palancas sin respuesta |
| Neumática | Frenos de aire, suspensiones, herramientas | Cerrar y drenar el tanque y las líneas | Manómetro en cero, purga abierta |
| Gravitacional | Brazo, pluma, cucharón, caja de volquete levantados | Apoyar en el suelo o bloquear con soportes y pasador de seguridad | Estructura estable; peso no en el cilindro |
| Elástica | Resortes de freno, de tensores | Seguir la guía del fabricante; liberar o inmovilizar | Dispositivo en posición segura |
| Química y térmica | Combustible, refrigerante y aceite calientes, sustancias peligrosas | Enfriar, cerrar válvulas, drenar | Temperatura segura; sin fugas |

## Procedimiento en siete pasos

1. **Preparar.** Identifica el equipo, las fuentes de energía y los
   dispositivos de aislamiento que aplican. Revisa el procedimiento
   específico de esa máquina. Reúne candados, tarjetas, cajetín y
   herramientas.
2. **Avisar.** Informa al supervisor, a operación y a las personas
   afectadas que la máquina saldrá de servicio y por qué.
3. **Detener el equipo** siguiendo el procedimiento normal: bajar
   implementos, parar en terreno plano, freno de estacionamiento, motor
   apagado, esperar el enfriamiento si corresponde.
4. **Aislar** todas las fuentes de energía: llave de contacto, corte de
   batería, válvulas, líneas de aire, conexiones eléctricas.
5. **Bloquear y etiquetar** cada punto de aislamiento. Cada trabajador
   pone su propio candado y su tarjeta. La llave queda solo en poder de
   quien bloqueó.
6. **Liberar o controlar la energía almacenada.** Aliviar la presión
   hidráulica y neumática, apoyar o calzar las partes que puedan
   moverse, calzar las ruedas, bloquear la articulación en máquinas
   articuladas con la barra de seguridad.
7. **Verificar.** Comprobar que no hay energía en el equipo: intentar
   arrancar o accionar los mandos desde el puesto de operación con todos
   fuera de la zona de peligro, revisar manómetros y medir cuando
   aplique. Solo entonces se empieza el trabajo. Después de la prueba,
   los controles vuelven a posición neutra.

## Ejemplo: cambiar una manguera hidráulica en una excavadora

1. Se informa al supervisor y al operador; se estaciona la máquina en
   terreno firme.
2. Se baja el brazo y el cucharón al suelo; la pluma no queda apoyada
   en los cilindros.
3. Se apaga el motor, se retira la llave y se coloca en el cajetín.
4. Se desconecta la batería con el desconector bloqueable y se pone un
   candado con tarjeta.
5. Se mueve cada palanca con el motor apagado para aliviar la presión
   del circuito; se afloja con cuidado la conexión de la manguera,
   protegiendo cara y manos, y se deja drenar.
6. Verificación: la palanca ya no desplaza nada y no sale presión por la
   conexión.
7. Se cambia la manguera. Al terminar, se limpian derrames, se revisan
   herramientas y personas, se retiran los candados en el orden
   correcto y se arranca para comprobar que no hay fugas.

Para el diagnóstico y reparación de circuitos, consulta
[mantenimiento del sistema hidráulico de una excavadora](/posts/mantenimiento-sistema-hidraulico-excavadora-paso-a-paso/)
y [cómo detectar fugas](/posts/como-detectar-fugas-hidraulicas-en-una-excavadora/).

## Al terminar: reenergizar con seguridad

Retirar el bloqueo es tan crítico como aplicarlo. Antes de hacerlo:

1. Retira herramientas, repuestos y materiales de la zona de trabajo.
2. Verifica que las protecciones y tapas vuelvan a su lugar y que las
   conexiones estén completas.
3. Comprueba que todas las personas están fuera del área de peligro y
   avisa al personal afectado.
4. Cada persona retira su candado y su tarjeta. Si alguien no está
   disponible, se aplica el procedimiento de excepción de la empresa,
   nunca se corta el candado sin autorización y verificación.
5. Energiza en orden (batería, arranque) y prueba el equipo en vacío
   antes de entregarlo a operación.
6. Registra el trabajo y el cierre del bloqueo.

## Bloqueo grupal y cambio de turno

Cuando varios trabajadores intervienen la misma máquina:

- El responsable del trabajo aplica el bloqueo principal y deja la llave
  en un **cajetín de bloqueo grupal**.
- Cada persona coloca su candado personal en el cajetín. La máquina no
  se puede energizar mientras haya un candado.
- En el cambio de turno, el turno entrante coloca sus candados **antes**
  de que el saliente retire los suyos, y se entrega un registro con el
  estado del trabajo.

## Equipos móviles fuera de servicio

Una máquina con una falla que no debe usarse se identifica con una
tarjeta de "Fuera de servicio" colocada en el tablero y en la llave. La
tarjeta se retira solo cuando el mantenedor confirma que la falla fue
corregida y la máquina fue inspeccionada. En operaciones mineras y de
obras con contratistas, esta práctica se complementa con el control de
acceso y el reporte al supervisor.

## Mangueras presurizadas y materiales peligrosos

- Nunca revises una fuga con la mano: un chorro fino de aceite a presión
  puede penetrar la piel. Usa cartón o un tablero para localizarla, con
  el equipo ya despresurizado.
- Alivia la presión antes de aflojar una conexión y afloja con
  lentitud.
- Los sistemas con productos corrosivos, tóxicos o inflamables se
  drenan, ventilan y limpian según la hoja de datos de seguridad antes de
  intervenirlos.
- Recoge los derrames y gestiona el residuo según el plan ambiental.

## Errores comunes

- Bloquear solo la llave y olvidar la batería o la energía hidráulica
  almacenada.
- Confiar en la tarjeta sin candado, o prestar el candado.
- No verificar: asumir que el equipo está sin energía.
- Dejar un implemento levantado sin apoyo mecánico, confiando en la
  presión del cilindro.
- Retirar el candado de otra persona o sin comprobar que todos están
  fuera de peligro.
- No actualizar el procedimiento cuando cambia el modelo de máquina.

## Cómo implementarlo en una flota

1. Un **procedimiento específico por modelo o familia**, con fotos de
   los puntos de aislamiento.
2. Capacitación y práctica, con evaluación anual a las personas
   autorizadas.
3. Candados personales, etiquetas, cajetines y soportes mecánicos
   disponibles en cada taller y camioneta de servicio.
4. Auditorías periódicas del bloqueo en campo, dentro del plan de
   [mantenimiento](/posts/mantenimiento-basico-de-maquinaria-pesada/) y
   del [análisis de seguridad en el trabajo](/posts/analisis-seguridad-trabajo/).
5. Registro de incidentes y casi accidentes para mejorar el
   procedimiento.
