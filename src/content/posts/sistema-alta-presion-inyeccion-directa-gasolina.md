---
title: "Alta presión en inyección directa de gasolina: componentes, fallas y pruebas"
published: 2026-11-17
draft: false
featured: false
description: "Cómo funciona el sistema de combustible de alta presión de un motor GDI: bomba, regulador, rampa, sensor e inyectores, con fallas, síntomas, pruebas y seguridad."
category: mecanica-automotriz
formato: guia
nivel: avanzado
tags:
  - "inyeccion-directa-gasolina"
  - "alta-presion"
  - "rampa-de-inyeccion"
  - "motronic-med7"
  - "diagnostico-motor"
image: https://res.cloudinary.com/vadks4nc/image/upload/f_auto,q_auto/mundo-ingenieria/inyeccion-electronica/sistema-alta-presion-inyeccion-directa-gasolina
author: redaccion-tecnica
reviewedBy: redaccion-tecnica
aiAssisted: true
faq:
  - q: "¿Qué presión maneja la inyección directa de gasolina frente a la inyección en el múltiple?"
    a: "En el sistema que describe el curso (Motronic MED7), la bomba eléctrica entrega unos 3 bar en funcionamiento normal y la parte de alta presión regula la rampa entre 50 y 100 bar. Una inyección en el múltiple suele trabajar con unos pocos bar, por eso el circuito de alta presión exige componentes, tuberías y procedimientos de seguridad distintos. Son valores del sistema estudiado; en otro motor, verifica el dato en el manual del vehículo."
  - q: "¿Por qué el motor no arranca cuando está muy caliente y sí cuando está frío?"
    a: "Con el motor caliente, el combustible de la línea de baja presión puede formar burbujas de vapor en la entrada de la bomba de alta presión, y una bomba de émbolos no comprime vapor. Para evitarlo, el sistema estudiado cierra la válvula dosificadora durante unos 50 segundos en un arranque en caliente y sube la presión de alimentación hasta un máximo de 5,8 bar. Si esa válvula falla cerrada, el resultado descrito en el curso es justamente que no hay arranque en caliente."
  - q: "¿Qué pasa si falla el regulador de presión de la rampa?"
    a: "En el diseño estudiado, el regulador está cerrado cuando no recibe corriente, de modo que siempre haya presión disponible para arrancar. La contrapartida es que, si deja de ser controlado, la presión tiende a subir hasta que abre un limitador mecánico de resorte, que en el curso se indica a 120 bar. Los síntomas típicos son marcha irregular, pérdida de potencia o consumo alto, y la prueba correcta combina lectura de la presión real con el valor teórico del ECU."
  - q: "¿Se puede limpiar o probar un inyector de inyección directa como uno convencional?"
    a: "No con los mismos medios. Se comandan con unos 90 V de pico y corrientes de hasta 10 A, trabajan contra la presión de la cámara y su ventana de inyección es muy corta. Un inyector con falla se identifica por el diagnóstico de fallos de encendido y combustión y el ECU deja de excitarlo. Las pruebas de campo se limitan a resistencia, señal de excitación y balance de cilindros; la limpieza y la comprobación de caudal requieren banco específico."
  - q: "¿Qué es el depósito de carbón activo y por qué importa en un motor GDI?"
    a: "Es el canister: almacena los vapores de gasolina del tanque para que no escapen a la atmósfera y los envía de forma controlada a la combustión. En modo estratificado, parte de ese vapor llega a zonas de la cámara donde la mezcla no se inflama bien y aumentan los hidrocarburos sin quemar; por eso el sistema solo permite ese modo si calcula que la carga del canister es baja. Un canister saturado o una válvula de purga defectuosa puede degradar el ralentí y la mezcla."
sources:
  - title: "Curso de inyección directa, Jetronic: modos, sistemas, componentes y funcionamiento (Motronic MED7)"
    url: "https://www.mecanicoautomotriz.org/4481-curso-inyeccion-directa-jetronic-modos-sistemas-componentes-funcionamiento"
related:
  - componentes-funcionamiento-sistemas-combustible
  - fundamentos-tipos-de-sistemas-efi
  - sensores-en-vehiculos-modernos-tipos-funciones
  - sensores-senales-sistema-de-control-electronico-motor
---

Un motor de inyección directa de gasolina (GDI) pide al sistema de combustible algo que una inyección convencional nunca exigió: **meter la gasolina dentro del cilindro, contra la presión de compresión y en una fracción de milisegundo**. Eso obliga a trabajar con presiones mucho más altas, componentes de precisión y, sobre todo, a diagnosticar con método. Un técnico que trata una rampa de 100 bar como una línea de 3 bar se arriesga a una lesión grave o a un diagnóstico equivocado.

Esta guía recorre el circuito completo tomando como ejemplo el sistema Bosch Motronic MED7 descrito en un curso técnico: alimentación de baja presión, bomba de alta presión, regulador, rampa, sensor, inyectores y canister, más la parte de admisión que condiciona su funcionamiento. Para cada elemento verás qué hace, **por qué se diseñó así**, qué ocurre cuando falla y cómo comprobarlo.

> Todas las cifras atribuidas al curso corresponden a ese sistema concreto. Cualquier otro valor es referencial y debe verificarse en el manual del vehículo.

## Idea central: dos circuitos con presiones muy distintas

El sistema se divide en una parte de baja presión y otra de alta. La baja presión alimenta, filtra y entrega combustible limpio y sin vapor a la bomba de alta; la alta presión lo comprime y lo reparte a los inyectores.

<figure class="diagram">
<svg viewBox="0 0 820 380" role="img" aria-labelledby="ap-d1-title" style="width:100%;height:auto;font-family:inherit">
<title id="ap-d1-title">Esquema del circuito de combustible de un motor de inyección directa: depósito con bomba eléctrica, filtro, bomba de alta presión, rampa con sensor y regulador, e inyectores</title>
<rect x="0" y="0" width="820" height="380" rx="12" fill="#f8fafc" stroke="#cbd5e1"/>
<text x="20" y="30" font-size="13" font-weight="bold" fill="#1d4ed8">Baja presión: unos 3 bar</text>
<rect x="20" y="70" width="110" height="70" rx="6" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="75" y="100" text-anchor="middle" font-size="13" fill="#0f172a">Depósito con</text>
<text x="75" y="118" text-anchor="middle" font-size="13" fill="#0f172a">bomba eléctrica</text>
<rect x="190" y="85" width="70" height="40" rx="6" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="225" y="110" text-anchor="middle" font-size="13" fill="#0f172a">Filtro</text>
<rect x="330" y="70" width="130" height="70" rx="6" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="395" y="100" text-anchor="middle" font-size="13" fill="#0f172a">Bomba de alta</text>
<text x="395" y="118" text-anchor="middle" font-size="13" fill="#0f172a">presión (3 émbolos)</text>
<path d="M130 105 H190 M260 105 H330" fill="none" stroke="#2563eb" stroke-width="4"/>
<rect x="650" y="20" width="120" height="50" rx="6" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="710" y="42" text-anchor="middle" font-size="13" fill="#0f172a">Unidad de</text>
<text x="710" y="58" text-anchor="middle" font-size="13" fill="#0f172a">control (ECU)</text>
<rect x="330" y="200" width="400" height="36" rx="6" fill="#ffffff" stroke="#dc2626" stroke-width="3"/>
<text x="530" y="223" text-anchor="middle" font-size="14" fill="#0f172a">Rampa de inyección (rail)</text>
<path d="M460 105 H560 V200" fill="none" stroke="#dc2626" stroke-width="4"/>
<rect x="630" y="125" width="110" height="45" rx="6" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="685" y="145" text-anchor="middle" font-size="12" fill="#0f172a">Sensor de</text>
<text x="685" y="161" text-anchor="middle" font-size="12" fill="#0f172a">presión de rampa</text>
<path d="M685 170 V200" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M685 70 V125" fill="none" stroke="#475569" stroke-width="2" stroke-dasharray="5 4"/>
<rect x="190" y="190" width="110" height="56" rx="6" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="245" y="214" text-anchor="middle" font-size="12" fill="#0f172a">Válvula reguladora</text>
<text x="245" y="231" text-anchor="middle" font-size="12" fill="#0f172a">de presión (PWM)</text>
<path d="M330 218 H300" fill="none" stroke="#dc2626" stroke-width="4"/>
<path d="M190 218 H75 V140" fill="none" stroke="#2563eb" stroke-width="4"/>
<text x="40" y="238" font-size="12" fill="#0f172a">Retorno</text>
<path d="M650 45 H285 V190" fill="none" stroke="#475569" stroke-width="2" stroke-dasharray="5 4"/>
<path d="M390 236 V290 M490 236 V290 M590 236 V290 M690 236 V290" fill="none" stroke="#dc2626" stroke-width="4"/>
<rect x="360" y="290" width="60" height="40" rx="6" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<rect x="460" y="290" width="60" height="40" rx="6" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<rect x="560" y="290" width="60" height="40" rx="6" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<rect x="660" y="290" width="60" height="40" rx="6" fill="#ffffff" stroke="#475569" stroke-width="2"/>
<text x="390" y="315" text-anchor="middle" font-size="12" fill="#0f172a">Inyector</text>
<text x="490" y="315" text-anchor="middle" font-size="12" fill="#0f172a">Inyector</text>
<text x="590" y="315" text-anchor="middle" font-size="12" fill="#0f172a">Inyector</text>
<text x="690" y="315" text-anchor="middle" font-size="12" fill="#0f172a">Inyector</text>
<text x="540" y="358" text-anchor="middle" font-size="13" font-weight="bold" fill="#b91c1c">Alta presión: rampa regulada de 50 a 100 bar</text>
<line x1="20" y1="296" x2="50" y2="296" stroke="#2563eb" stroke-width="4"/>
<text x="58" y="300" font-size="12" fill="#0f172a">Baja presión</text>
<line x1="20" y1="318" x2="50" y2="318" stroke="#dc2626" stroke-width="4"/>
<text x="58" y="322" font-size="12" fill="#0f172a">Alta presión</text>
<line x1="20" y1="340" x2="50" y2="340" stroke="#475569" stroke-width="2" stroke-dasharray="5 4"/>
<text x="58" y="344" font-size="12" fill="#0f172a">Señal eléctrica</text>
</svg>
<figcaption>Circuito simplificado: el ECU lee la presión de la rampa y corrige abriendo o cerrando el regulador, que desvía el exceso hacia el retorno. Ilustración propia, no a escala; el número de inyectores depende del motor.</figcaption>
</figure>

Las presiones que importan en este sistema, según el curso, son pocas y conviene memorizarlas porque son el marco de cualquier diagnóstico:

<figure class="diagram">
<svg viewBox="0 0 820 200" role="img" aria-labelledby="ap-d2-title" style="width:100%;height:auto;font-family:inherit">
<title id="ap-d2-title">Escala de presiones del sistema: 3 bar de alimentación, 5,8 bar máximo en arranque en caliente, rampa de 50 a 100 bar y limitador mecánico a 120 bar</title>
<rect x="0" y="0" width="820" height="200" rx="12" fill="#f8fafc" stroke="#cbd5e1"/>
<line x1="60" y1="100" x2="760" y2="100" stroke="#475569" stroke-width="2"/>
<line x1="60" y1="94" x2="60" y2="106" stroke="#475569" stroke-width="2"/>
<line x1="329" y1="94" x2="329" y2="106" stroke="#475569" stroke-width="2"/>
<line x1="598" y1="94" x2="598" y2="106" stroke="#475569" stroke-width="2"/>
<line x1="706" y1="94" x2="706" y2="106" stroke="#475569" stroke-width="2"/>
<text x="60" y="125" text-anchor="middle" font-size="12" fill="#0f172a">0</text>
<text x="329" y="125" text-anchor="middle" font-size="12" fill="#0f172a">50</text>
<text x="598" y="125" text-anchor="middle" font-size="12" fill="#0f172a">100</text>
<text x="706" y="125" text-anchor="middle" font-size="12" fill="#0f172a">120</text>
<text x="785" y="105" text-anchor="middle" font-size="12" fill="#0f172a">bar</text>
<rect x="329" y="92" width="269" height="16" fill="#dc2626" fill-opacity="0.75"/>
<circle cx="76" cy="100" r="6" fill="#2563eb"/>
<circle cx="91" cy="100" r="6" fill="#2563eb"/>
<path d="M706 90 l8 10 l-8 10 l-8 -10 z" fill="#b91c1c"/>
<text x="40" y="75" font-size="12" fill="#0f172a">3 bar: alimentación normal</text>
<path d="M91 106 V138" fill="none" stroke="#475569" stroke-width="1.5"/>
<text x="60" y="155" font-size="12" fill="#0f172a">5,8 bar: máximo en arranque en caliente</text>
<text x="463" y="75" text-anchor="middle" font-size="12" fill="#0f172a">Rampa regulada: 50 a 100 bar</text>
<text x="770" y="155" text-anchor="end" font-size="12" fill="#0f172a">120 bar: abre el limitador mecánico</text>
<path d="M706 112 V138" fill="none" stroke="#475569" stroke-width="1.5"/>
<text x="410" y="185" text-anchor="middle" font-size="12" fill="#0f172a">Escala lineal. Valores del sistema estudiado en el curso.</text>
</svg>
<figcaption>Escala lineal de las presiones citadas por el curso para el sistema MED7. Ilustración propia.</figcaption>
</figure>

## Baja presión: bomba eléctrica y filtro

La bomba eléctrica va sumergida en el depósito y eleva el combustible hacia un filtro y de ahí a la bomba de alta presión. En funcionamiento normal el curso indica unos 3 bar.

**Por qué importa tanto**: la bomba de alta presión es una máquina de émbolos que comprime líquido. Si le llega combustible con aire, vapor o suciedad, no solo rinde menos: se desgasta. La presión de alimentación estable es la condición previa de todo lo demás.

- **Síntomas de falla**: arranque largo, tirones a plena carga, pérdida de potencia, ruido de la bomba de alta, códigos de presión de rampa baja.
- **Revisión**: relé y alimentación de la bomba eléctrica, presión y caudal de alimentación con manómetro adecuado, estado y antigüedad del filtro, y nivel de combustible.

## Bomba de alta presión: radial de tres émbolos

Según el curso, es una bomba radial de tres cilindros, atornillada a la carcasa del árbol de levas y accionada por el árbol de levas de admisión. Una leva excéntrica con su anillo mueve el émbolo: al bajar aspira combustible del circuito de baja; al subir lo empuja hacia la rampa. Con los tres elementos a 120 grados, las oscilaciones de presión en la rampa son menores. Es la encargada de establecer hasta 100 bar.

El ciclo, en términos prácticos, es este: el combustible pasa por el émbolo hueco; en la carrera descendente la válvula de admisión abre porque la presión del lado del émbolo supera la del cilindro; en la carrera ascendente esa válvula cierra y, cuando la presión del cilindro supera la de la rampa, abre la válvula de salida.

**Qué implica para el taller**:

- Al estar accionada por la distribución de válvulas, un desgaste de leva o de la propia bomba se manifiesta como **presión que no alcanza el objetivo**, sobre todo en arranque y a bajas vueltas.
- El curso no detalla un procedimiento de falla para la bomba; en la práctica (referencial), se sospecha de ella cuando la alimentación de baja presión es correcta, el regulador responde y aun así la rampa no sube.

## Válvula dosificadora: el seguro contra el arranque en caliente

Está en la tubería de alimentación hacia la bomba de alta y hacia el regulador. En marcha normal permanece abierta. Si en el arranque el refrigerante supera los 110 °C y el aire aspirado los 50 °C, el ECU lo considera un arranque en caliente y la cierra unos 50 segundos. Con el paso hacia el regulador cerrado, la presión de baja sube hasta el máximo de la bomba eléctrica, limitada internamente a 5,8 bar, y eso evita burbujas de vapor en el lado de aspiración.

- **Efecto de falla (curso)**: el resorte la mantiene cerrada siempre; la presión de baja queda en 5,8 bar y se impide el arranque durante el ciclo de arranque en caliente.
- **Síntoma típico**: el motor arranca bien en frío y se niega a arrancar caliente.
- **Revisión**: alimentación y masa del actuador, comando del ECU en la prueba de actuadores y presión de baja con el motor caliente.

## Válvula reguladora de presión: quien manda sobre la rampa

Va atornillada entre la rampa y el retorno al depósito. Su función es controlar la presión **independientemente de cuánto inyecte el motor y cuánto suministre la bomba**, cosa necesaria porque la bomba siempre entrega más caudal del que el motor consume en carga parcial.

La lógica es la de un lazo cerrado: si la presión real difiere de la teórica, el ECU excita la válvula con una señal modulada en ancho de pulso (PWM). El campo magnético levanta la bola de su asiento, cambia el área de paso hacia el retorno y, con ella, cuánto combustible regresa y qué presión queda.

**Falla y seguridad intrínseca (curso)**: sin corriente, la válvula está cerrada, de modo que siempre haya presión suficiente. Además incorpora un limitador mecánico de resorte que abre a 120 bar para proteger a los demás componentes.

- **Síntomas probables (referencial)**: presión errática, marcha irregular, tirones, consumo alto y código de desviación de presión de rampa.
- **Revisión**: resistencia de la bobina contra el valor del manual, señal PWM con osciloscopio, y comparar presión teórica contra real en el escáner. Si la presión real supera la teórica y el regulador no abre, sospecha del regulador o de su mando.

## Rampa y sensor de presión

El sensor está atornillado en la rampa y mide la presión que el ECU usa para regular el sistema en función de una familia de curvas características. Internamente es una membrana de acero con resistencias extensométricas: con poca presión la membrana se deforma poco, la resistencia es alta y la tensión de señal baja; con mucha presión ocurre lo contrario. La electrónica del sensor amplifica la señal y la envía al ECU.

Por eso un sensor deteriorado es especialmente engañoso: **el ECU regula contra una medida falsa** y el regulador se comporta correctamente respecto a ese dato incorrecto.

- **Efecto de falla**: el curso indica que, si falta la señal, el ECU excita la válvula reguladora con un valor fijo. (En la diapositiva el texto menciona el sensor de presión del colector de admisión, pero está ubicada en la sección del sensor de rampa; se interpreta como el de rampa y conviene confirmarlo en la documentación del fabricante.)
- **Síntomas (referencial)**: luz de avería, funcionamiento en modo de emergencia, falta de potencia y arranque difícil.
- **Revisión**: alimentación de 5 V y masa, tensión de señal en reposo y en ralentí frente al dato del manual, y contraste con la presión de un manómetro de alta calibrado si el fabricante prevé un punto de medición.

## Inyectores de alta presión

Van fijados a la culata e inyectan directamente al cilindro. Deben abrir en un tiempo mínimo y pulverizar bien según el modo: concentrado en la zona de la bujía en estratificado, uniforme en toda la cámara en homogéneo y homogéneo pobre. El curso menciona un ángulo de proyección del chorro de 70° y una inclinación de 20° para posicionar con precisión el combustible, y recuerda que a 6.000 rpm el tiempo de inyección directa es de 5 ms frente a 20 ms en inyección en el múltiple.

**Excitación**: para abrir lo más rápido posible, se aplica una breve premagnetización y unos 90 V, con corrientes de hasta 10 A; ya abierto, bastan unos 30 V y de 3 a 4 A para mantenerlo.

- **Efecto de falla (curso)**: un inyector averiado se reconoce por la detección de fallos de encendido/combustión y deja de ser excitado.
- **Síntomas (referencial)**: ralentí inestable, falla en un cilindro, olor a gasolina cruda y dilución de aceite si queda goteando.
- **Revisión**: códigos de fallo por cilindro, resistencia de la bobina, forma de onda de corriente y tensión con osciloscopio y balance de cilindros. No se prueban con 12 V directos ni se desmontan con la rampa presurizada.

## Canister y válvula de purga

El depósito de carbón activo cumple la normativa de emisiones de hidrocarburos: guarda los vapores del tanque y los conduce de forma sistemática a la combustión. En modos homogéneo y homogéneo pobre, el vapor se quema sin problema porque la mezcla está repartida. En estratificado, parte llega a zonas no directamente inflamables y se puede quemar mal, subiendo los HC; por eso el sistema solo habilita ese modo si calcula una carga baja del canister.

- **Síntomas de falla (referencial)**: ralentí inestable al abrir el tanque o tras repostar, olor a gasolina, mezcla irregular, código de purga o de mezcla.
- **Revisión**: estado de mangueras y de la válvula, estanqueidad, y funcionamiento en prueba de actuadores. Si necesitas contexto de modos de operación, revisa la guía sobre [modos estratificado y homogéneo](/posts/inyeccion-directa-gasolina-modos-estratificado-homogeneo/).

## El lado del aire: lo que condiciona al combustible

Un GDI solo funciona bien si el aire está bien medido y dirigido. Resumen de lo que describe el curso:

- **Acelerador electrónico**: es la condición previa de la inyección directa. Permite regular la mariposa independientemente del pedal y abrirla más en estratificado y homogéneo pobre, con lo que se reducen las pérdidas por estrangulamiento y el consumo. El conductor pide par con el pedal; el ECU lo traduce a actuadores.
- **Medidor de masa de aire (MAF)**: de película caliente con detección de flujo inverso, mide también el aire que retorna por la apertura y cierre de válvulas. Sirve para calcular inyección, encendido y purga del canister. Si falla, el ECU usa la señal del sensor de presión del colector como carga.
- **Sensor de presión del colector (MAP)**: membrana de silicio con resistencias extensométricas. Calcula los gases de escape recirculados y detecta la carga durante el arranque, cuando la señal del MAF es poco fiable por las pulsaciones. Si falla, el ECU calcula los gases de escape y recircula menos que lo previsto.
- **Colector variable con trampillas**: en estratificado y homogéneo pobre, la trampilla cierra el conducto inferior y el aire entra por el superior con un giro cilíndrico que lleva el combustible a la bujía. En cargas y regímenes altos del modo homogéneo no se acciona y entran ambos conductos para dar más potencia.
- **Sensor de posición de trampillas y electroválvula de mando**: si falta la señal del sensor o falla la electroválvula, solo se permite el modo homogéneo.
- **EGR**: la válvula consta de una mariposa, un motor eléctrico y un potenciómetro que informa su posición, lo que permite diagnosticarla. Con ella se alcanzan altos caudales de recirculación.
- **Sensor de presión del servofreno**: en estratificado la mariposa está más abierta y el vacío es bajo. Si el vacío del servofreno no basta, el ECU cierra la mariposa y, de ser necesario, pasa a homogéneo.

La consecuencia práctica es importante: **muchas fallas de aire no se sienten como falla, sino como pérdida de eficiencia**. El motor pasa a homogéneo y simplemente consume más. Para profundizar en la lectura de estos captadores, consulta [sensores y señales del control electrónico del motor](/posts/sensores-senales-sistema-de-control-electronico-motor/) y [pruebas de sensores con multímetro](/posts/pruebas-sensores-inyeccion-electronica-gasolina-multimetro/).

## Tabla de diagnóstico: componente, síntoma y comprobación

| Componente | Efecto de falla (curso) | Síntomas habituales (referencial) | Cómo comprobarlo |
|---|---|---|---|
| Bomba eléctrica y filtro | No detallado | Arranque largo, falta de potencia | Presión y caudal de baja; relé; filtro |
| Bomba de alta presión | No detallado | Rampa no alcanza presión objetivo | Comparar presión real y teórica con baja correcta |
| Válvula dosificadora | Fallo cerrada: 5,8 bar y sin arranque en caliente | No arranca caliente, sí frío | Prueba de actuador; presión de baja en caliente |
| Regulador de presión | Cerrado sin corriente; limitador a 120 bar | Presión errática, tirones, consumo alto | Resistencia, PWM, presión teórica vs real |
| Sensor de presión de rampa | Sin señal: valor fijo al regulador | Modo de emergencia, falta de potencia | Alimentación, tensión de señal, contraste con manómetro |
| Inyector | Reconocido por fallos de combustión; deja de excitarse | Cilindro que falla, ralentí inestable | Códigos por cilindro, resistencia, osciloscopio |
| Canister y purga | Sin dato de falla | Ralentí irregular, olor a gasolina | Mangueras, válvula, prueba de actuadores |
| MAF | Se usa el MAP como carga | Consumo y regulación alterados | Señal con escáner; comparar contra MAP |
| MAP | Menos EGR de lo previsto | Más emisiones de NOx, arranque difícil | Tensión de señal vs. depresión |
| Sensor de trampillas / electroválvula | Solo modo homogéneo | Consumo mayor sin falla evidente | Escáner: posición real y comando; vacío |

## Seguridad: la alta presión no perdona

Estas prácticas son generales de taller; no sustituyen el procedimiento del fabricante.

1. **Despresuriza antes de abrir**: nunca aflojes una línea, un inyector o el regulador con el motor caliente o recién apagado. Espera el tiempo que indique el manual y alivia la presión por el procedimiento previsto para ese motor.
2. **Ten presente el riesgo de inyección en la piel**: un chorro fino a alta presión puede atravesar la piel. Usa protección ocular y guantes, y no uses la mano para buscar fugas.
3. **Elimina fuentes de ignición** y trabaja con ventilación; recoge el combustible derramado de inmediato.
4. **No reutilices sellos y juntas** que el fabricante marque como de un solo uso, como los anillos de inyectores o conexiones de la rampa; una junta fatigada es una fuga a 100 bar.
5. **Respeta pares de apriete y limpieza**: cualquier partícula en el circuito de alta daña asientos y émbolos. Tapa las líneas abiertas.
6. **Nada de aire a presión ni 12 V directos** sobre inyectores o actuadores: la excitación real llega a decenas de voltios y corrientes elevadas.
7. **Después del trabajo**: purga el circuito, cierra el contacto varias veces para cebar, revisa fugas con el motor en marcha a distancia y solo entonces haz la prueba de ruta.

## Método de diagnóstico en cuatro pasos

1. **Lee fallas y datos en vivo**: presión de rampa teórica y real, ciclo de trabajo del regulador y modo de operación.
2. **Verifica la baja presión** y el filtro antes de culpar a la bomba de alta.
3. **Descarta el sensor**: una lectura falsa produce un lazo que "obedece" a un dato equivocado.
4. **Aísla por actuador**: regulador, dosificadora, inyector y canister, probando uno por vez.

Para un panorama más amplio de los sistemas de inyección electrónica, lee [fundamentos y tipos de sistemas EFI](/posts/fundamentos-tipos-de-sistemas-efi/) y [componentes y funcionamiento de los sistemas de combustible](/posts/componentes-funcionamiento-sistemas-combustible/). Para el papel de los captadores en general, consulta [sensores en vehículos modernos](/posts/sensores-en-vehiculos-modernos-tipos-funciones/).

## Fuentes

Basado en el curso [Inyección directa, Jetronic: modos, sistemas, componentes y funcionamiento](https://www.mecanicoautomotriz.org/4481-curso-inyeccion-directa-jetronic-modos-sistemas-componentes-funcionamiento) (sistema Motronic MED7 como ejemplo). Reelaborado con explicaciones y ejemplos propios; los valores no provenientes del curso se marcan como referenciales y deben verificarse en el manual del vehículo.
