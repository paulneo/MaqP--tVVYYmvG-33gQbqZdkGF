---
title: "Cómo funciona el turbocompresor: componentes, fallas y mantenimiento"
published: 2024-09-27
updatedAt: 2026-11-19
draft: false
featured: false
description: "Funcionamiento del turbocompresor: turbina, compresor, wastegate, geometría variable e intercooler, síntomas de falla, diagnóstico y cuidados para que dure."
category: ingenieria-basica
formato: guia
nivel: intermedio
tags:
  - "turbocompresor"
  - "sobrealimentacion"
  - "wastegate"
  - "intercooler"
  - "diagnostico-turbo"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/como-funciona-el-turbocompresor-potencia-y-eficiencia
author: redaccion-tecnica
reviewedBy: redaccion-tecnica
aiAssisted: true
faq:
  - q: "¿Por qué un turbo no 'sopla' hasta que sube el régimen?"
    a: "Porque la turbina se mueve con la energía de los gases de escape, y a pocas revoluciones y baja carga esos gases tienen poco caudal y energía. El retraso entre pisar el acelerador y recibir la presión se llama turbo lag. Se reduce con turbinas pequeñas, geometría variable, doble turbo secuencial o twin-scroll, a cambio de otros compromisos como menor rendimiento a alto régimen."
  - q: "¿Qué hace la válvula wastegate y qué pasa si se queda abierta o cerrada?"
    a: "Deriva parte de los gases de escape para que no pasen por la turbina y así limita la presión de sobrealimentación. Si queda abierta, el turbo no genera presión y el motor pierde potencia. Si queda cerrada, la presión sube sin control, el motor entra en modo de protección o, en el peor caso, se dañan el turbo y el motor por sobrepresión."
  - q: "¿Por qué hay que dejar el motor en ralentí antes de apagarlo después de una conducción exigente?"
    a: "Porque tras una carga alta, la turbina está muy caliente y gira con rapidez. Si se apaga el motor de golpe, el aceite deja de circular y el que queda en el cartucho se carboniza, lo que daña los cojinetes. En muchos turbos modernos con refrigeración por agua y bombas de apoyo el riesgo es menor, pero un minuto en ralentí tras una carga alta sigue siendo una práctica prudente."
  - q: "¿Cuáles son las causas más comunes de la falla de un turbo?"
    a: "La falta de lubricación (aceite sucio, bajo nivel, conducto obstruido), la entrada de objetos o suciedad por la admisión o el escape, el sobrecalentamiento y las fugas de aire que fuerzan al turbo. La mayoría de las fallas no se deben al turbo en sí, sino a una causa externa. Por eso, al sustituirlo hay que corregir la causa y limpiar la línea de aceite; si no, el turbo nuevo falla igual."
  - q: "¿Cuánto juego en el eje es aceptable?"
    a: "Un turbo sano tiene un juego radial pequeño, que se nota solo como un movimiento muy leve, y casi nada de juego axial. Si las ruedas rozan el alojamiento, hay marcas en las aletas o el juego es perceptible a simple vista, está dañado. Los límites en milésimas de milímetro los da el fabricante; no se miden de forma fiable al tacto."
related:
  - sistema-de-lubricacion-y-enfriamiento-en-un-turbocompresor
  - averia-presion-sobrealimentacion
  - paleta-de-la-tobera-variable-en-turbocompresor
  - como-el-turbocompresor-y-sobrealiemntador-aumentan-la-potencia-del-motor
---

Un motor produce potencia quemando una mezcla de aire y combustible.
Cuanto más aire entra por cilindro, más combustible se puede quemar y
más potencia se obtiene. El turbocompresor aprovecha la energía que se
pierde en el escape para comprimir ese aire de admisión, lo que permite
más potencia o el mismo rendimiento con una cilindrada menor. Es una
solución robusta pero exigente: gira a velocidades extremas, soporta
temperaturas altas y depende por completo del aceite y el aire limpio.

## Cómo funciona

El turbo es una turbina y un compresor unidos por un eje común.

1. Los gases de escape, que salen del motor con presión y temperatura,
   pasan por la **turbina** y la hacen girar.
2. El eje transmite ese giro al **compresor**, ubicado en el lado de
   admisión.
3. El compresor aspira aire, lo comprime y lo envía al múltiple de
   admisión, más denso y con más oxígeno.
4. La ECU ajusta el combustible para aprovechar esa cantidad extra de aire.

![Funcionamiento del turbocompresor](https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/legacy-mecanica/funcionamiento-turbocompresor)

No hay conexión mecánica con el cigüeñal, a diferencia de un
sobrealimentador mecánico (supercargador), lo que permite aprovechar
energía que de otro modo se perdería. La contrapartida es que la
respuesta depende del caudal de gases. Las diferencias entre ambos
sistemas se explican en
[cómo el turbocompresor y el sobrealimentador aumentan la potencia](/posts/como-el-turbocompresor-y-sobrealiemntador-aumentan-la-potencia-del-motor/).

Las velocidades de giro son muy altas: en turbos de automóvil, de
muchas decenas de miles de revoluciones por minuto, y en los pequeños
superan las cien mil. A esos regímenes, un desequilibrio mínimo o una
partícula puede destruir el conjunto.

## Componentes

![Componentes del turbocompresor](https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/legacy-mecanica/componentes-del-turbocompresor)

| Componente | Función | Punto débil |
|---|---|---|
| Carcasa de turbina | Dirige los gases hacia la rueda; soporta temperaturas muy altas | Grietas por calor, fugas en las bridas |
| Rueda de turbina | Convierte la energía de los gases en giro | Daño por objetos del escape, erosión |
| Rueda de compresor | Comprime el aire de admisión | Daño por partículas o por entrada de objetos |
| Eje y cartucho central (CHRA) | Une las ruedas y aloja los cojinetes | Desgaste por falta de lubricación |
| Cojinetes | Soportan el eje; la mayoría son de casquillo flotante, hay también de rodamiento | Aceite sucio o escaso, coquización |
| Sellos del eje | Evitan que el aceite pase a admisión o escape | Fugas de aceite por desgaste o presión alta en el cárter |
| Wastegate y actuador | Limitan la presión derivando gases | Actuador roto, varilla pegada |
| Válvula de descarga (diverter / blow-off) | Alivia la presión al soltar el acelerador y protege el compresor | Diafragma roto, fuga |
| Intercooler | Enfría el aire comprimido | Fugas, obstrucción por aceite |

### Wastegate y geometría variable

Dos estrategias controlan la presión:

- **Wastegate.** Una válvula deriva parte del escape fuera de la
  turbina cuando la presión supera lo previsto. La controla un
  actuador neumático o eléctrico.
- **Geometría variable (VGT).** Paletas ajustables en la entrada de la
  turbina cambian la sección de paso: con pocas revoluciones se cierran
  para acelerar el flujo y dar presión pronto, y con muchas se abren.
  Son típicas en diésel. Se estudia en
  [paletas de la tobera variable](/posts/paleta-de-la-tobera-variable-en-turbocompresor/).

### Intercooler

Al comprimirse, el aire se calienta y pierde densidad. El intercooler
(enfriador intermedio) lo enfría antes de entrar al motor, de modo que
cabe más masa de aire por cilindro y se reduce el riesgo de detonación.
Una fuga o un intercooler obstruido por aceite reduce la presión útil.

## Lubricación y refrigeración

El eje gira sobre una película de aceite del circuito del motor, que
además extrae calor. Si el aceite falta unos segundos, los cojinetes se
dañan. Por eso, el aceite sucio, el filtro tapado, una línea de
alimentación obstruida o un nivel bajo son las primeras causas de falla. Un
retorno de aceite (drenaje) obstruido hace que el aceite se acumule en el
cartucho y salga por los sellos. Los turbos modernos también se
refrigeran con líquido del motor. El tema se desarrolla en
[lubricación y enfriamiento de un turbocompresor](/posts/sistema-de-lubricacion-y-enfriamiento-en-un-turbocompresor/).

## Síntomas de falla

| Síntoma | Causa probable | Comprobación |
|---|---|---|
| Pérdida de potencia, sin humo | Fuga de aire (manguera, intercooler), wastegate abierta | Prueba de estanqueidad de admisión |
| Humo azul | Sellos del turbo o retorno de aceite obstruido, también desgaste del motor | Aceite en la manguera del compresor, respiradero del cárter |
| Humo negro | Falta de aire por turbo débil, inyectores, filtro tapado | Presión de sobrealimentación frente a la esperada |
| Silbido agudo (sirena) | Fuga en la tubería a presión, cojinete desgastado | Revisar abrazaderas; juego del eje |
| Ruido metálico o roce | Ruedas tocando la carcasa | Retirar la tubería y mirar las aletas |
| Exceso de presión, modo de emergencia | Wastegate atascada cerrada, VGT pegada, sensor | Actuador, varilla y sensor MAP |
| Consumo de aceite | Sellos, retorno, respiradero | Nivel y estado del retorno |
| Retraso excesivo en la respuesta | VGT pegada, fuga, escape obstruido | Movimiento libre del actuador |

## Diagnóstico ordenado

1. **Lee los códigos** y los datos en vivo: la presión de
   sobrealimentación real frente a la objetivo, bajo carga.
2. **Inspecciona visualmente** el sistema: mangueras, abrazaderas y
   conexiones del intercooler, filtro de aire, y aceite en las tuberías.
3. **Prueba de fugas**: presuriza el circuito de admisión con una
   herramienta adecuada y baja presión; una fuga se oye o se ve con agua
   jabonosa. Muchas fallas de "turbo débil" son fugas.
4. **Comprueba el actuador**: que la varilla se mueva libre y responda a
   la depresión o a la señal eléctrica.
5. **Revisa el turbo sin desmontarlo**: quita la tubería de admisión y
   mueve la rueda del compresor de lado a lado y adentro y afuera; debe
   haber un juego mínimo y nunca contacto con el alojamiento.
6. **Revisa el aceite y su circuito**: nivel, calidad, filtro, línea de
   alimentación y drenaje. Las causas de una presión de sobrealimentación
   incorrecta se desglosan en
   [avería de presión de sobrealimentación](/posts/averia-presion-sobrealimentacion/).

## Ejemplo práctico

Una camioneta diésel pierde potencia en subida y expulsa humo azul. Se
encuentra aceite acumulado en la manguera entre el turbo y el
intercooler. El juego del eje es excesivo y las aletas están rozadas. La
causa no es el turbo en sí: el tubo de drenaje de aceite está
aplastado y el filtro de aceite estaba excedido en su intervalo. Si se
instalara un turbo nuevo sin corregir el drenaje, el sello fallaría a
los pocos meses. El trabajo correcto es sustituir el turbo, cambiar el
aceite y el filtro, reemplazar el drenaje y limpiar el intercooler.

## Cuidados para que dure

- Cambia el aceite y el filtro en el intervalo, o antes con uso severo;
  usa la especificación del fabricante.
- Tras cambiar el turbo, el filtro o el aceite, **llena el circuito de
  aceite del turbo** y haz girar el motor sin arrancar antes del primer
  arranque, para evitar el giro en seco.
- No aceleres a fondo con el motor frío; deja que el aceite alcance su
  temperatura.
- Después de una conducción exigente, deja el motor en ralentí un
  minuto antes de apagarlo, salvo que el fabricante diga otra cosa.
- Mantén limpios el filtro de aire y su carcasa: una partícula entra por
  el compresor y destruye las aletas.
- Revisa abrazaderas, mangueras e intercooler con frecuencia.
- No intervengas la presión de sobrealimentación sin tener en cuenta los
  límites mecánicos del motor.
- Trabaja con precaución: el turbo y el colector pueden estar al rojo
  vivo y mantener calor mucho después de apagar el motor.

## Ventajas y límites

Un turbo permite más potencia por litro de cilindrada y puede mejorar el
consumo en uso moderado, porque un motor pequeño trabaja a mayor carga
y con mejor rendimiento. A cambio, añade piezas, calor y exigencia de
mantenimiento. Un motor turbo bien cuidado dura tanto como uno atmosférico;
uno descuidado, no.
