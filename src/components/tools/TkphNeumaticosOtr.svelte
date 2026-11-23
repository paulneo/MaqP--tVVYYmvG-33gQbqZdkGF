<script lang="ts">
    /**
     * Site TKPH calculator for OTR tires (haul trucks).
     *
     *   Qm  = (Q_empty + Q_loaded) / 2                 mean load per tire (t), per position
     *   Vm  = (round-trip km × cycles per shift) / shift hours     average work speed (km/h)
     *   TKPH_site = Qm × Vm × K1 × K2
     *
     *   K1 = haul length factor (one-way hauls > 5 km), taken from the tire maker's table.
     *   K2 = ambient temperature factor. Optional reference formula (Michelin method,
     *        reference ambient Tr = 38 °C):
     *          Ta <  Tr: K2 = (Vm + 0.25 × (Ta − Tr)) / Vm
     *          Ta >= Tr: K2 = (Vm + 0.40 × (Ta − Tr)) / Vm
     *
     * Per-tire loads come either from direct input or from truck empty/loaded weight,
     * front-axle weight distribution (%) and tires per axle (rear % = 100 − front %).
     * The site TKPH of the worst position is compared with the tire's rated TKPH.
     */

    const K2_REF_TEMP = 38

    let desdeCamion = true

    // Truck weights and axle distribution
    let pesoVacio = 65
    let pesoCargado = 160
    let delanteroVacioPct = 47
    let delanteroCargadoPct = 33
    let llantasDelanteras = 2
    let llantasTraseras = 4

    // Direct per-tire loads (t)
    let delVacio = 15.3
    let delCargado = 26.4
    let trasVacio = 8.6
    let trasCargado = 26.8

    // Haul cycle
    let distanciaIdaVuelta = 6
    let ciclosTurno = 24
    let horasTurno = 12

    // Correction factors
    let k1 = 1.0
    let k2Referencia = false
    let k2Manual = 1.0
    let temperaturaAmbiente = 38

    // Tire rating
    let tkphNominal = 280

    $: cargas = desdeCamion
        ? {
              delVacio: (pesoVacio * delanteroVacioPct) / 100 / llantasDelanteras,
              delCargado: (pesoCargado * delanteroCargadoPct) / 100 / llantasDelanteras,
              trasVacio: (pesoVacio * (100 - delanteroVacioPct)) / 100 / llantasTraseras,
              trasCargado: (pesoCargado * (100 - delanteroCargadoPct)) / 100 / llantasTraseras,
          }
        : { delVacio, delCargado, trasVacio, trasCargado }

    $: datosCamionValidos =
        !desdeCamion ||
        (pesoVacio > 0 && pesoCargado >= pesoVacio &&
            delanteroVacioPct > 0 && delanteroVacioPct < 100 &&
            delanteroCargadoPct > 0 && delanteroCargadoPct < 100 &&
            llantasDelanteras >= 1 && llantasTraseras >= 1)

    $: velocidadMedia = (distanciaIdaVuelta * ciclosTurno) / horasTurno
    $: k2Calculado =
        (velocidadMedia +
            (temperaturaAmbiente >= K2_REF_TEMP ? 0.4 : 0.25) * (temperaturaAmbiente - K2_REF_TEMP)) /
        velocidadMedia
    $: k2 = k2Referencia ? k2Calculado : k2Manual

    $: datosValidos =
        datosCamionValidos &&
        cargas.delVacio > 0 && cargas.delCargado > 0 && cargas.trasVacio > 0 && cargas.trasCargado > 0 &&
        distanciaIdaVuelta > 0 && ciclosTurno > 0 && horasTurno > 0 &&
        k1 > 0 && k2 > 0 && tkphNominal > 0

    $: cargaMediaDel = (cargas.delVacio + cargas.delCargado) / 2
    $: cargaMediaTras = (cargas.trasVacio + cargas.trasCargado) / 2
    $: tkphBaseDel = cargaMediaDel * velocidadMedia
    $: tkphBaseTras = cargaMediaTras * velocidadMedia
    $: tkphDel = tkphBaseDel * k1 * k2
    $: tkphTras = tkphBaseTras * k1 * k2
    $: margenDel = ((tkphNominal - tkphDel) / tkphNominal) * 100
    $: margenTras = ((tkphNominal - tkphTras) / tkphNominal) * 100

    $: criticaDelantera = tkphDel >= tkphTras
    $: tkphCritico = Math.max(tkphDel, tkphTras)
    $: margenCritico = ((tkphNominal - tkphCritico) / tkphNominal) * 100

    // Calculator convention (not a manufacturer criterion): below 10 % margin is flagged as tight.
    $: veredicto = !datosValidos
        ? null
        : tkphCritico > tkphNominal
          ? 'riesgo'
          : margenCritico < 10
            ? 'justo'
            : 'adecuado'

    $: distanciaIda = distanciaIdaVuelta / 2
    $: avisoK1 = distanciaIda > 5 && k1 === 1

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        desdeCamion = true
        pesoVacio = 65
        pesoCargado = 160
        delanteroVacioPct = 47
        delanteroCargadoPct = 33
        llantasDelanteras = 2
        llantasTraseras = 4
        delVacio = 15.3
        delCargado = 26.4
        trasVacio = 8.6
        trasCargado = 26.8
        distanciaIdaVuelta = 6
        ciclosTurno = 24
        horasTurno = 12
        k1 = 1.0
        k2Referencia = false
        k2Manual = 1.0
        temperaturaAmbiente = 38
        tkphNominal = 280
    }
</script>

<div class="tkph-neumaticos-otr">
    <!-- Tire loads -->
    <div class="mb-4">
        <label class="inline-flex items-center gap-2 text-sm text-black/65 dark:text-white/65 cursor-pointer">
            <input type="checkbox" bind:checked={desdeCamion} />
            Calcular la carga por neumático desde el peso del camión y el reparto por eje
        </label>
    </div>

    {#if desdeCamion}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Peso del camión vacío (t)
                </span>
                <input type="number" bind:value={pesoVacio} step="1" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Peso del camión cargado (t)
                </span>
                <input type="number" bind:value={pesoCargado} step="1" min="0" class="tool-input" />
                <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                    Peso bruto: vacío + carga útil real (no la nominal)
                </span>
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Eje delantero, vacío (% del peso)
                </span>
                <input type="number" bind:value={delanteroVacioPct} step="1" min="1" max="99" class="tool-input" />
                <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                    Trasero: {fmt(100 - delanteroVacioPct, 1)} %. Dato de la ficha técnica del camión
                </span>
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Eje delantero, cargado (% del peso)
                </span>
                <input type="number" bind:value={delanteroCargadoPct} step="1" min="1" max="99" class="tool-input" />
                <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                    Trasero: {fmt(100 - delanteroCargadoPct, 1)} %
                </span>
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Neumáticos en el eje delantero
                </span>
                <input type="number" bind:value={llantasDelanteras} step="1" min="1" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Neumáticos en el eje trasero
                </span>
                <input type="number" bind:value={llantasTraseras} step="1" min="1" class="tool-input" />
                <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                    Camión rígido con duales: 4
                </span>
            </label>
        </div>
    {:else}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Delantero: carga por neumático vacío (t)
                </span>
                <input type="number" bind:value={delVacio} step="0.1" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Delantero: carga por neumático cargado (t)
                </span>
                <input type="number" bind:value={delCargado} step="0.1" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Trasero: carga por neumático vacío (t)
                </span>
                <input type="number" bind:value={trasVacio} step="0.1" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Trasero: carga por neumático cargado (t)
                </span>
                <input type="number" bind:value={trasCargado} step="0.1" min="0" class="tool-input" />
            </label>
        </div>
    {/if}

    {#if desdeCamion && !datosCamionValidos}
        <p class="text-xs text-amber-700 dark:text-amber-400 mb-4">
            Revise los pesos: el peso cargado debe ser mayor o igual al vacío, y los porcentajes deben estar entre 1 y 99.
        </p>
    {/if}

    <!-- Haul cycle -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mt-2">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Distancia del ciclo, ida y vuelta (km)
            </span>
            <input type="number" bind:value={distanciaIdaVuelta} step="0.5" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Ciclos por turno
            </span>
            <input type="number" bind:value={ciclosTurno} step="1" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Duración total del turno (h)
            </span>
            <input type="number" bind:value={horasTurno} step="0.5" min="0" class="tool-input" />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Incluya esperas, carga y descarga: en las paradas el neumático se enfría
            </span>
        </label>
    </div>

    <!-- Correction factors and rating -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Coeficiente de longitud K1
            </span>
            <input type="number" bind:value={k1} step="0.01" min="0.5" max="2" class="tool-input" />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                1,0 = sin corrección. Solo para tramos de ida mayores de 5 km; tome el valor de la tabla de su fabricante
            </span>
        </label>
        {#if k2Referencia}
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Temperatura ambiente máxima (°C)
                </span>
                <input type="number" bind:value={temperaturaAmbiente} step="1" class="tool-input" />
                <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                    K2 de referencia = {fmt(k2Calculado, 3)} (temperatura de referencia 38 °C)
                </span>
            </label>
        {:else}
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Coeficiente de temperatura K2
                </span>
                <input type="number" bind:value={k2Manual} step="0.01" min="0.5" max="2" class="tool-input" />
                <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                    1,0 = sin corrección. Use el método de su fabricante
                </span>
            </label>
        {/if}
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                TKPH nominal del neumático (t·km/h)
            </span>
            <input type="number" bind:value={tkphNominal} step="1" min="0" class="tool-input" />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Del catálogo del fabricante, para esa medida y compuesto
            </span>
        </label>
    </div>

    <div class="mb-8">
        <label class="inline-flex items-center gap-2 text-sm text-black/65 dark:text-white/65 cursor-pointer">
            <input type="checkbox" bind:checked={k2Referencia} />
            Estimar K2 con la fórmula de referencia del método Michelin (ambiente de referencia 38 °C)
        </label>
    </div>

    {#if avisoK1}
        <p class="text-xs text-amber-700 dark:text-amber-400 -mt-4 mb-6">
            El tramo de ida es de {fmt(distanciaIda, 1)} km, mayor de 5 km: consulte el coeficiente K1 en la tabla de su fabricante de neumáticos.
        </p>
    {/if}

    <!-- Results -->
    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            TKPH de la obra
        </p>

        {#if datosValidos}
            <div class="mb-6">
                <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                    Posición más exigida: {criticaDelantera ? 'eje delantero' : 'eje trasero'}
                </p>
                <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(tkphCritico, 1)} <span class="text-2xl md:text-3xl">t·km/h</span>
                </p>
                <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                    Nominal del neumático: {fmt(tkphNominal, 0)} t·km/h · margen {fmt(margenCritico, 1)} %
                </p>
            </div>

            {#if veredicto === 'adecuado'}
                <p class="mb-6 p-3 rounded-lg text-sm bg-green-500/10 text-green-800 dark:text-green-300">
                    <strong>El compuesto es adecuado</strong> para este ciclo: el TKPH de la obra queda por debajo del nominal en todas las posiciones.
                </p>
            {:else if veredicto === 'justo'}
                <p class="mb-6 p-3 rounded-lg text-sm bg-amber-500/10 text-amber-800 dark:text-amber-300">
                    <strong>Adecuado, con poco margen</strong> (menos de 10 %). Un ciclo más rápido, más carga o más calor ambiente pueden superar el nominal.
                </p>
            {:else}
                <p class="mb-6 p-3 rounded-lg text-sm bg-red-500/10 text-red-800 dark:text-red-300">
                    <strong>Riesgo de separación por calor.</strong> El TKPH de la obra supera el nominal en {fmt(tkphCritico - tkphNominal, 1)} t·km/h. Evalúe un compuesto de mayor TKPH, menos velocidad media o menos carga, con su proveedor.
                </p>
            {/if}

            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">TKPH delantero</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(tkphDel, 1)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">margen {fmt(margenDel, 1)} %</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">TKPH trasero</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(tkphTras, 1)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">margen {fmt(margenTras, 1)} %</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Carga media por neumático</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                        {fmt(cargaMediaDel, 2)} / {fmt(cargaMediaTras, 2)}
                    </p>
                    <p class="text-xs text-black/50 dark:text-white/50">t (delantero / trasero)</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Velocidad media</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(velocidadMedia, 2)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">km/h · K1 × K2 = {fmt(k1 * k2, 3)}</p>
                </div>
            </div>

            <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
                Carga por neumático (t): delantero {fmt(cargas.delVacio, 2)} vacío y {fmt(cargas.delCargado, 2)} cargado ·
                trasero {fmt(cargas.trasVacio, 2)} vacío y {fmt(cargas.trasCargado, 2)} cargado.
            </p>
        {:else}
            <p class="text-sm text-black/65 dark:text-white/65">
                Revise los datos: las cargas, la distancia, los ciclos, las horas del turno, los coeficientes y el TKPH nominal deben ser mayores que cero.
            </p>
        {/if}

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            Fórmulas: <code>Qm = (Qvacío + Qcargado) / 2</code> · <code>Vm = L × N / H</code> ·
            <code>TKPH = Qm × Vm × K1 × K2</code>. Es una verificación de referencia: prevalecen el
            TKPH nominal del fabricante del neumático y su propio método de corrección.
        </p>
    </div>

    <div class="mt-4 text-right">
        <button
            type="button"
            on:click={reset}
            class="text-sm text-black/55 dark:text-white/55 hover:text-[var(--primary)] transition"
        >
            Reiniciar valores
        </button>
    </div>
</div>
