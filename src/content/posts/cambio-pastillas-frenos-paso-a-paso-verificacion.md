---
title: "Cambio de pastillas de freno paso a paso: inspección y verificación"
published: 2026-11-19
draft: false
featured: false
description: "Procedimiento para cambiar pastillas de freno de disco: seguridad, desmontaje, inspección de disco y guías, retracción del pistón, montaje, pedal y asentamiento."
category: mecanica-automotriz
formato: tutorial
nivel: intermedio
tags:
  - "pastillas-de-freno"
  - "frenos-de-disco"
  - "calibre-de-freno"
  - "mantenimiento-frenos"
  - "liquido-de-frenos"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/frenos/cambio-pastillas-frenos-paso-a-paso-verificacion
author: redaccion-tecnica
reviewedBy: redaccion-tecnica
aiAssisted: true
faq:
  - q: "¿Por qué se cambian las pastillas de un solo lado a la vez?"
    a: "Porque el pistón del calibre se retrae empujándolo hacia su cilindro, y ese movimiento transmite líquido por el circuito. Si ambos lados están desarmados, al presionar un pistón el del lado opuesto, que ya no tiene pastillas que lo contengan, puede salir de su cilindro. Trabajando un lado a la vez, el otro calibre permanece montado y sirve de referencia visual del armado correcto."
  - q: "¿Por qué hay que sacar un poco de líquido del depósito antes de retraer el pistón?"
    a: "Al empujar el pistón hacia dentro, el líquido regresa por la línea hacia el depósito del cilindro maestro. Con pastillas gastadas el nivel está bajo, pero con pastillas nuevas y más gruesas el pistón queda más retraído y el depósito puede rebosar. Extraer una pequeña cantidad con una jeringa limpia evita derrames; el líquido de frenos daña la pintura y no debe reutilizarse."
  - q: "¿Qué pasa si no bombeo el pedal antes de mover el vehículo?"
    a: "Con el pistón retraído, hay un espacio entre pastillas y disco. Las primeras pisadas del pedal solo sirven para acercar el pistón y las pastillas al disco. Si se arranca sin hacerlo, el primer frenado puede encontrar el pedal prácticamente al fondo y sin frenada. Se bombea hasta que el pedal quede firme, con el vehículo detenido."
  - q: "¿Hay que cambiar el disco cada vez que se cambian las pastillas?"
    a: "No necesariamente. Se mide su estado: espesor frente al mínimo marcado por el fabricante, ranuras profundas, escalón en el borde, grietas, decoloración por sobrecalentamiento y alabeo. Si todo está dentro de especificación, se conserva. Un disco por debajo del mínimo, o con vibración al frenar que no se corrige, debe cambiarse; no conviene rectificarlo por debajo del espesor mínimo."
  - q: "¿Cuánto tiempo hay que asentar las pastillas nuevas?"
    a: "Los fabricantes de pastillas suelen indicar un periodo de asentamiento de algunos cientos de kilómetros con frenadas moderadas y progresivas, evitando detenciones bruscas y mantener el pedal pisado con el disco muy caliente. Sigue la hoja de instrucciones de las pastillas y el manual del vehículo: el procedimiento exacto varía según el material de fricción."
sources:
  - title: "Manual de remplazo de componentes del sistema de freno de tambor, pastillas y zapatas — Mecánico Automotriz"
    url: "https://www.mecanicoautomotriz.org/4416-manual-remplazo-componentes-sistema-freno-tambor-pastillas-zapata"
related:
  - como-funciona-el-sistema-de-frenos-en-tu-vehiculo
  - funcionamiento-del-sistema-de-frenos-principios-hidraulicos-y-fallos
  - frenos-de-tambor-zapatas-ajuste-freno-estacionamiento
---

Cambiar pastillas de freno es una de las intervenciones de mantenimiento
más frecuentes y, a la vez, una de las que menos margen de error
admiten: el resultado se nota en cada frenada. La operación en sí es
sencilla; lo que la separa de un trabajo bien hecho son los detalles:
qué se revisa antes de montar, cómo se devuelve el pistón sin dañar el
circuito y qué se comprueba antes de mover el vehículo.

Este tutorial sigue el orden real de un taller: seguridad, desmontaje,
inspección, retracción del pistón, montaje y verificación. Explica el
**porqué** de cada paso, porque entender la función de cada pieza evita
los errores típicos.

> **Importante.** Los valores y procedimientos de este artículo son
> **referenciales**. El manual de servicio de tu vehículo prevalece
> siempre: espesores mínimos, pares de apriete, líquido especificado y
> orden de armado cambian por modelo. Si no tienes las herramientas, un
> lugar seguro para elevar el vehículo o experiencia previa, encarga el
> trabajo a un taller profesional: el freno es un sistema de seguridad.

## Cómo trabaja un freno de disco con calibre flotante

Antes de desarmar conviene tener claro el mecanismo. En un calibre
**flotante** hay un solo pistón, ubicado del lado interior. Al pisar el
pedal, la presión hidráulica empuja ese pistón contra la pastilla
interior; por reacción, el cuerpo del calibre se desliza sobre sus
**pasadores guía** y arrastra la pastilla exterior contra el otro lado
del disco. Ambas pastillas aprietan el disco con la misma fuerza.

<figure class="diagram">
<svg viewBox="0 0 800 360" role="img" aria-label="Corte esquemático de un calibre de freno flotante: cuerpo del calibre, pistón, pastilla interior, disco, pastilla exterior y perno guía con funda de goma" style="width:100%;height:auto;font-family:inherit">
<rect x="0" y="0" width="800" height="360" rx="12" fill="#f1f5f9"/>
<rect x="360" y="62" width="60" height="236" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
<rect x="330" y="92" width="30" height="176" fill="#b45309" stroke="#334155" stroke-width="2"/>
<rect x="312" y="92" width="18" height="176" fill="#64748b" stroke="#334155" stroke-width="2"/>
<rect x="420" y="92" width="30" height="176" fill="#b45309" stroke="#334155" stroke-width="2"/>
<rect x="450" y="92" width="18" height="176" fill="#64748b" stroke="#334155" stroke-width="2"/>
<path d="M190 70 H490 V290 H468 V100 H240 V270 H190 Z" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
<rect x="240" y="140" width="72" height="80" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
<path d="M200 240 H232" stroke="#0f172a" stroke-width="3" fill="none"/>
<path d="M226 234 L236 240 L226 246 Z" fill="#0f172a"/>
<rect x="200" y="270" width="20" height="45" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
<rect x="170" y="315" width="350" height="12" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
<rect x="176" y="308" width="40" height="26" rx="5" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
<line x1="320" y1="38" x2="335" y2="88" stroke="#0f172a" stroke-width="1.5"/>
<line x1="390" y1="38" x2="390" y2="58" stroke="#0f172a" stroke-width="1.5"/>
<line x1="470" y1="38" x2="440" y2="88" stroke="#0f172a" stroke-width="1.5"/>
<line x1="178" y1="92" x2="205" y2="85" stroke="#0f172a" stroke-width="1.5"/>
<line x1="178" y1="185" x2="262" y2="185" stroke="#0f172a" stroke-width="1.5"/>
<line x1="178" y1="245" x2="205" y2="240" stroke="#0f172a" stroke-width="1.5"/>
<line x1="165" y1="321" x2="176" y2="321" stroke="#0f172a" stroke-width="1.5"/>
<line x1="535" y1="321" x2="522" y2="321" stroke="#0f172a" stroke-width="1.5"/>
<text x="314" y="30" text-anchor="end" font-size="14" fill="#0f172a">Pastilla interior</text>
<text x="390" y="30" text-anchor="middle" font-size="14" fill="#0f172a">Disco</text>
<text x="476" y="30" text-anchor="start" font-size="14" fill="#0f172a">Pastilla exterior</text>
<text x="172" y="86" text-anchor="end" font-size="14" fill="#0f172a">Cuerpo del calibre</text>
<text x="172" y="190" text-anchor="end" font-size="14" fill="#0f172a">Pistón</text>
<text x="172" y="250" text-anchor="end" font-size="14" fill="#0f172a">Presión hidráulica</text>
<text x="160" y="326" text-anchor="end" font-size="14" fill="#0f172a">Funda de goma</text>
<text x="545" y="326" text-anchor="start" font-size="14" fill="#0f172a">Perno guía (deslizante)</text>
</svg>
<figcaption>Corte esquemático de un calibre flotante: la presión empuja el pistón y la pastilla interior; el cuerpo se desliza sobre el perno guía y cierra la pastilla exterior contra el disco. Ilustración propia, no a escala.</figcaption>
</figure>

De este diseño salen dos conclusiones prácticas. Primero, si el perno
guía se agarrota, el calibre deja de "flotar" y solo trabaja una
pastilla: desgaste desigual y arrastre. Segundo, la **funda de goma**
protege el perno de agua y polvo; si está rota, el perno se corroe y
el problema reaparece pronto. Para repasar el circuito completo, consulta
[cómo funciona el sistema de frenos](/posts/como-funciona-el-sistema-de-frenos-en-tu-vehiculo/).

## Herramientas y seguridad

- Gato y **soportes de seguridad (caballetes)**; nunca trabajes bajo un
  vehículo apoyado solo en el gato.
- Calzos en las ruedas que permanecen en el suelo.
- Llaves del tamaño de los pernos del calibre y una llave adicional para
  sujetar el perno guía cuando sea necesario.
- Llave de torque, para respetar el par de apriete del manual.
- Herramienta de retracción de pistón o, en su defecto, un elemento que
  empuje sin dañar (el mango de un martillo se usa como recurso en
  algunos procedimientos, con cuidado).
- Jeringa limpia para extraer líquido del depósito, y paños.
- Limpiador de frenos, grasa específica para frenos (no grasa común) y
  una bandeja para ordenar las piezas.
- Guantes y gafas. El polvo de frenos no se sopla con aire comprimido ni
  se aspira con la boca: se humedece o se limpia con limpiador.

Sobre el **líquido de frenos**: es higroscópico, es decir, absorbe
humedad del ambiente, y esa agua baja su punto de ebullición. Usa solo
el tipo (DOT) que indique el fabricante, de un envase recién abierto, y
no mezcles tipos sin confirmarlo. Además daña la pintura: seca de
inmediato cualquier derrame y lava con agua.

## Paso 1: desmontar la rueda y el calibre

1. Afloja las tuercas de la rueda con el vehículo aún en el suelo, eleva,
   apoya en caballetes y retira la rueda.
2. **Trabaja un solo lado a la vez.** Si desarmas ambos, al empujar un
   pistón el del lado contrario, sin pastillas que lo limiten, puede
   salir de su cilindro. El lado intacto, además, te muestra cómo se
   arma cada pieza.
3. Retira los pernos del calibre (o el perno guía inferior, según el
   diseño; algunos calibres solo requieren soltar un lado y pivotar).
4. Levanta el calibre y **cuélgalo con un alambre o gancho** del resorte
   o del brazo de suspensión. No lo dejes colgando de la manguera
   flexible: tirar o doblar esa manguera puede dañarla, y no hace falta
   desconectarla para cambiar pastillas.
5. Retira las pastillas, los calces antichirrido y las placas de soporte.
   Observa su orientación: la parte superior e inferior, y el lado
   izquierdo y derecho, no tienen la misma forma. Déjalas en la bandeja
   en el orden en que salieron.

Algunos diseños sujetan las pastillas con pasadores, resortes y ganchos
en lugar de pernos; salen con ayuda de unos alicates. La lógica es la
misma: fotografía antes de retirar.

## Paso 2: inspeccionar antes de montar

Aquí se decide si el trabajo termina con pastillas nuevas o necesita más
piezas. Una pastilla desgastada es un síntoma; la inspección busca la
causa.

| Elemento | Qué revisar | Cuándo reemplazar |
|---|---|---|
| Pastilla | Espesor de material de fricción, desgaste parejo, grietas, vitrificado | Al llegar al límite del fabricante, si suena el indicador de desgaste, o si el desgaste interior y exterior es muy distinto |
| Disco | Espesor (con micrómetro) frente al mínimo grabado o del manual, ranuras profundas, escalón en el borde, grietas, zonas azuladas | Por debajo del mínimo, grietas o deformación que causa vibración |
| Alabeo del disco | Desviación lateral con reloj comparador, según la especificación del manual | Si excede el valor del fabricante y no se corrige con un montaje limpio |
| Pasadores guía | Deben deslizar libremente, sin juego ni óxido | Si se agarrotan o están picados |
| Fundas de goma | Sin cortes ni resecamiento | Si están rotas o duras |
| Calces y placas | Sin deformación, desgaste ni corrosión | Si están dañadas (muchos juegos de pastillas incluyen calces nuevos) |
| Manguera flexible | Sin grietas, abultamientos ni fugas | Ante cualquier daño |

El manual de servicio consultado no entrega valores numéricos de espesor
mínimo, de alabeo ni de torque: remite a la especificación del vehículo.
Por eso en este artículo no los inventamos. Busca el mínimo en el manual
o grabado en el borde del disco, y mide en varios puntos, no solo en
uno.

Dos hallazgos merecen atención. Si las dos pastillas de un mismo
calibre muestran desgaste muy distinto, sospecha de pasadores
agarrotados. Y si el disco tiene escalón marcado en el borde, las
pastillas nuevas, más anchas que la huella desgastada, pueden apoyarse
mal: es otra razón para evaluar el cambio de disco.

También hay un **indicador de desgaste**, una lengüeta metálica en la
pastilla interior que roza el disco y chirría cuando queda poco
material. Es un aviso, no una medición: no esperes a oírlo. Si usas
pastillas nuevas con indicador, instálalo en la posición que marca el
juego de montaje, firme y a ras.

## Paso 3: limpiar y preparar

1. Limpia la montura del calibre y los asientos donde apoyan las
   pastillas. La suciedad y el óxido impiden que las pastillas se
   muevan libremente.
2. Revisa y lubrica los pasadores guía con la grasa indicada para esa
   función; si las fundas están dañadas, cámbialas.
3. Monta la placa de soporte de la pastilla y el **calce antichirrido**
   en la pastilla nueva. Donde el fabricante lo indique, aplica una
   capa fina de grasa específica en **ambas caras del calce**, la que
   toca la pastilla y la que toca el pistón o el cuerpo del calibre.
   La función del calce y la grasa es amortiguar las vibraciones que
   producen el chirrido.
4. **Cero grasa en la fricción.** Aceite o grasa en el material de
   fricción o en la superficie del disco reducen drásticamente el
   frenado. Si ocurre, se elimina con limpiador de frenos en el disco y
   se retira el material contaminado de la pastilla con lija (o se
   cambia la pastilla si está impregnada).

## Paso 4: retraer el pistón

Las pastillas nuevas son más gruesas que las usadas, así que el pistón
debe regresar al fondo de su cilindro para que el calibre entre sobre el
disco.

1. **Antes de empujar**, extrae con la jeringa una pequeña cantidad de
   líquido del depósito del cilindro maestro. Al retraer el pistón, el
   líquido sube de nuevo por la línea; si el depósito está cerca del
   máximo, rebosa. Es el error clásico de este paso.
2. Empuja el pistón de forma recta y pareja con la herramienta adecuada,
   sin forzar ni rayar la superficie.
3. Si el pistón se resiste, algunos procedimientos permiten aflojar
   ligeramente el purgador para dejar salir un poco de líquido mientras
   se empuja, y **apretarlo de nuevo con el pistón ya retraído**, para
   que no entre aire en la línea. Si prefieres evitar el riesgo de aire,
   deja ese paso para el taller; tras abrir el purgador hay que revisar
   el pedal con atención.
4. Verifica que la funda del pistón no quede pellizcada.

## Paso 5: montar pastillas y calibre

1. Instala las pastillas en la montura, presionándolas contra la placa
   de soporte para que asienten bien. Con el diseño de pasadores,
   inserta pasadores, resorte antichirrido y gancho.
2. Asegura que las fundas de goma del perno guía no queden entre las
   pastillas y el disco, y baja el calibre sobre el conjunto. Empujar
   el casquillo guía hacia afuera facilita el montaje.
3. Aprieta los pernos con el **par de apriete del manual**. Un perno
   flojo o apretado en exceso es un riesgo; por eso se usa llave de
   torque y no "a ojo".
4. No tuerzas la manguera flexible durante el montaje.
5. Repite todo en el otro lado, y recién entonces monta las ruedas.

## Paso 6: bombear el pedal y verificar

Esta es la verificación que **no se omite**. Con el pistón retraído hay
una holgura entre pastillas y disco: el primer frenado, sin preparar,
puede no frenar.

1. Con el vehículo aún elevado o detenido, **pisa el pedal varias veces
   hasta que quede firme** y alto. Cada pisada acerca el pistón al disco.
2. Revisa y completa el depósito hasta la marca **MAX** con líquido nuevo
   del tipo especificado, si el nivel quedó bajo.
3. Observa que no haya fugas en calibre, mangueras ni purgador.
4. Si el pedal se siente **esponjoso** o baja demasiado, puede haber aire
   en la línea y es necesario purgar el circuito. Si abriste el
   purgador en el paso 4, esta es la prueba definitiva.
5. Con el motor en ralentí (asistencia del servofreno activa), verifica
   que el pedal conserva altura constante y que no se hunde con presión
   sostenida.
6. Baja el vehículo, aprieta las ruedas con el par del manual y haz una
   prueba a baja velocidad en un lugar despejado: frena suavemente
   varias veces antes de aumentar la velocidad. Verifica que el vehículo
   se detenga en línea recta, sin tirones ni ruidos metálicos, y que
   las ruedas no queden calientes por arrastre.

## Asentamiento de las pastillas nuevas

Las pastillas y el disco necesitan unos cientos de kilómetros para
adaptar sus superficies y formar una capa de transferencia uniforme.
Durante ese periodo, frena con progresividad, evita las detenciones
bruscas y no mantengas el pedal pisado con el disco muy caliente. Sigue
la hoja de instrucciones de las pastillas, porque el procedimiento
varía según el material.

## Errores comunes

- **No extraer líquido** antes de retraer el pistón y derramarlo sobre
  la pintura.
- **Cambiar ambos lados a la vez**, perdiendo la referencia de armado.
- **Colgar el calibre de la manguera**, o doblarla.
- **Omitir la inspección de pasadores y fundas**: las pastillas nuevas
  se desgastan de forma pareja solo si el calibre se desliza bien.
- **Grasa en la fricción**, o en lugar de grasa específica, una grasa
  común que se degrada con el calor.
- **Cambiar pastillas sobre un disco muy desgastado** sin medirlo.
- **Aprietes "a ojo"** de pernos del calibre y de las ruedas.
- **No bombear el pedal** antes de mover el vehículo.
- **Mezclar o reutilizar líquido de frenos** o usar un tipo no
  indicado.

## Resumen

Un buen cambio de pastillas se juega en la preparación y en la
verificación, no en el desmontaje. Inspecciona disco, pasadores y
fundas; devuelve el pistón con el depósito controlado; respeta calces,
grasas y pares de apriete; y no muevas el vehículo hasta que el pedal
esté firme. Ante cualquier duda, un taller profesional resuelve en
minutos lo que un error puede convertir en un riesgo.

Para profundizar, revisa los
[principios hidráulicos y las fallas del sistema de frenos](/posts/funcionamiento-del-sistema-de-frenos-principios-hidraulicos-y-fallos/),
el [funcionamiento del servofreno](/posts/funcionamiento-del-servofreno-de-tandem-potencia-y-seguridad-en-el-frenado/)
y, para el eje trasero con tambor,
[frenos de tambor: zapatas y ajuste del freno de estacionamiento](/posts/frenos-de-tambor-zapatas-ajuste-freno-estacionamiento/).

**Fuentes:** adaptado y reelaborado a partir del
[manual de remplazo de componentes del sistema de freno (tambor, pastillas y zapatas)](https://www.mecanicoautomotriz.org/4416-manual-remplazo-componentes-sistema-freno-tambor-pastillas-zapata),
material propio de Mecánico Automotriz.
