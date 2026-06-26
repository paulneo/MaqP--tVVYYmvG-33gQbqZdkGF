---
title: "Manual de averías y presión de sobrealimentación en camiones Volvo"
description: "Guía exhaustiva para diagnosticar y solucionar problemas de presión de sobrealimentación en camiones Volvo"
pubDate: "Jun 17 2024"
heroImage: "/images/averias-02.webp"
tags:
  ["Presión de Sobrealimentación", "Diagnóstico de Averías", "Camiones Volvo"]
category: maquinarias_pesadas
---
Este manual proporciona una guía detallada para el diagnóstico y solución de averías relacionadas con la presión de sobrealimentación en camiones Volvo, específicamente para los motores D9A, D12C, D12D y D16C. Incluye procedimientos para la localización de averías, herramientas necesarias, y pasos detallados para resolver problemas comunes relacionados con la presión de sobrealimentación.
### Procedimientos Detallados
#### Tubos de Admisión, Control
- Controlar que los tubos de admisión estén limpios por dentro e intactos. Los tubos de admisión comprimidos, dañados o sucios pueden causar una reducción de la presión de sobrealimentación.
- Si no se encuentra la falla, continuar el diagnóstico con el siguiente punto de la lista de control.
#### Indicador de Caída de Presión, Control
Herramientas especiales: 9996831, 9998537
1. Controlar que el filtro de aire está limpio y que no hay nada que obstaculice el paso del aire entrante.
2. Desmontar el indicador de caída de presión de la manguera de admisión, sin quitar la conexión eléctrica.
3. Conectar el dispositivo de prueba de presión 9998537 en el indicador de caída de presión.
4. Conectar el dispositivo de prueba de presión 9998537 en el vacuómetro 9996831.
5. Conectar el vacuómetro en el sistema de aire comprimido del taller.
   - ¡Nota! La válvula reguladora del vacuómetro debe estar cerrada.
6. Colocar la llave de contacto en posición de conducción.
   - ADVERTENCIA: ¡No arrancar el motor!
7. Aumentar la subpresión con ayuda de la válvula del vacuómetro. El código de avería MID 128 PID 107 FMI 0 se debe establecer a aproximadamente 4,9 kPa.
8. Desacoplar el equipo de prueba y montar el indicador de caída de presión en la manguera de admisión.
#### Sistema Enfriador, Prueba de Fugas
Herramientas especiales: 9990225, 9996662
1. Desmontar la manguera de admisión entre el turbo y el cuerpo del filtro de aire.
2. Colocar el adaptador 9990225 en el lado de admisión del turbo.
   - ¡Nota! Procurar que la superficie de estanqueidad quede nivelada con la brida del turbo para una estanqueidad óptima.
3. Conectar el manómetro 9996662 en el sistema de aire comprimido del taller. Ajustar el manómetro a 100 kPa con la válvula reductora.
4. Cerrar la válvula de cierre. Para que se pueda considerar que el manómetro es fiable, la presión no debe bajar durante dos minutos.
5. Comprobar que la válvula reductora del manómetro está totalmente abierta y que el manómetro está en “0”. Conectar el manómetro al adaptador 9990225.
6. Aumentar la presión hasta 50 kPa y controlar que no hay fugas en el adaptador.
   - ADVERTENCIA: La presión no debe sobrepasar 100 kPa debido al riesgo de que explote el sistema de presión de sobrealimentación y daños personales derivados.
7. Presurizar el sistema. Escuchar si hay fugas.
#### Sensor de Presión de Sobrealimentación, Control
Herramientas especiales: 9996662, 9998288
1. Quitar la manguera entre el enfriador del aire de admisión y el tubo de aire de admisión del turbocompresor.
2. Controlar que no hay aceite en el tubo y la manguera de aire de admisión.
   - ¡Nota! Si hay aceite en los tubos y mangueras de aire de admisión, limpiar bien el interior de todos los tubos y mangueras del sistema de presión de sobrealimentación antes de arrancar el motor.
3. Controlar los retenes del tubo.
4. Colocar la arandela de conexión 9998288 en el enfriador del aire de admisión.
5. Desenroscar la válvula reductora del manómetro 9996662 y controlar que el manómetro indica “0”. Conectar el manómetro en la arandela 9998288.
6. Colocar la llave de contacto en posición de conducción.
   - ADVERTENCIA: ¡No arrancar el motor!
7. Conectar la herramienta de PC a la toma de diagnóstico del vehículo. Hacer la prueba 28407–8 “Valores de sensor, control (motor parado)” y controlar el valor de sensor para presión de sobrealimentación. Seguir las instrucciones en VCADS Pro.
8. Aumentar la presión en el manómetro hasta 50 kPa.
9. Controlar que el valor en VCADS Pro concuerda con el valor ajustado en el manómetro.
#### Actuador de la Válvula By-Pass, Control y Ajuste (D9A, D16C)
Herramientas especiales: 9996662, 9999314, 9999696
1. Soltar la manguera de la caja del compresor. Colocar el racor 9999314 para el manómetro en la manguera.
2. Colocar el soporte magnético 9999696 y el comparador 9989876 contra la cremallera junto a la tuerca de ajuste. Poner a cero el comprobador. Conectar el manómetro 9996662.
3. Aumentar la presión lentamente hasta que la varilla reguladora se mueva 1 mm aproximadamente. Soltar la presión y controlar la puesta a cero en el comparador.
4. Aumentar de nuevo la presión lentamente hasta que la varilla reguladora se mueva 1 mm. Leer el valor en el manómetro.
   - ¡Nota! La presión de aire no debe superar 300 kPa, porque la válvula puede dañarse.
5. Si es necesario, ajustar enroscando la varilla reguladora (aumentar la presión) o desenroscándola (reducir la presión). Colocar la varilla reguladora.
6. Colocar la manguera en la caja del compresor.
#### Turbocompresor, Control
1. Controlar que la referencia del turbo coincide con la variante de motor.
   - Un turbo erróneo para la variante de motor puede producir una presión de sobrealimentación errónea, lo cual afecta a las prestaciones y el consumo de combustible del motor.
2. Desmontar el tubo de admisión del turbocompresor.
3. Controlar el turbo en lo referente a daños en la rueda del compresor y juego axial excesivo en el eje de la rueda de turbina. Controlar el juego radial del eje de la rueda de turbina.
4. Si hay daños en la rueda del compresor y juegos excesivos, cambiar el turbocompresor.
5. Desmontar la caja de mariposa del turbo y controlar la rueda de turbina.
6. Controlar la rueda de turbina en lo que se refiere a desperfectos. Si la rueda de turbina está dañada, cambiar el turbocompresor.
#### Sistema de Escape, Control
1. Comprobar si el sistema de escape ha sido modificado, y si tiene dobleces o daños que hagan aumentar la contrapresión de escape.
   - Un aumento de la contrapresión de escape reduce la potencia del motor y aumenta el consumo de combustible.
2. Si se sospecha que la contrapresión de escape es demasiado alta, controlar la presión.
3. Desmontar el tubo de escape de la caja mariposa.
4. Controlar que la mariposa para el regulador de presión de escape no se ha atascado en posición cerrada o medio cerrada.
   - De ser así, cambiar el regulador de presión de escape.

Este manual ofrece una guía exhaustiva para identificar y resolver problemas de presión de sobrealimentación en camiones Volvo. A través de listas de control detalladas y procedimientos específicos, los técnicos pueden diagnosticar y reparar eficientemente los problemas relacionados, asegurando el óptimo rendimiento del motor.