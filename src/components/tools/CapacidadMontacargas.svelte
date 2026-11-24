<script lang="ts">
    // Formulas live in src/lib/calculators/forklift-capacity.ts (covered by tests).
    import { computeForkliftCapacity } from '../../lib/calculators/forklift-capacity'

    let capacidadNominal = 2500
    let centroNominal = 500
    let desdeLargo = false
    let largoCarga = 1200
    let centroReal = 600
    let conocerEje = false
    let distanciaEje = 450
    let usarAccesorio = false
    let modoReduccion: 'kg' | 'pct' = 'kg'
    let reduccion = 0
    let pesoCarga = 2000

    $: lcReal = desdeLargo ? largoCarga / 2 : centroReal
    $: a = conocerEje ? distanciaEje : 0
    $: resultado = computeForkliftCapacity({
        ratedCapacity: capacidadNominal,
        ratedLoadCenter: centroNominal,
        actualLoadCenter: lcReal,
        axleToForkFace: a,
        reduction: usarAccesorio
            ? { mode: modoReduccion === 'kg' ? 'weight' : 'percent', value: reduccion }
            : null,
        loadWeight: pesoCarga,
    })
    $: capacidadBase = resultado.baseCapacity
    $: datosValidos = resultado.valid
    $: capacidadSinTope = resultado.uncappedCapacity
    $: topeAplicado = resultado.capApplied
    $: capacidadReal = resultado.actualCapacity
    $: margen = resultado.margin
    $: porcentajeUso = resultado.usagePercent
    $: excede = resultado.exceeds
    $: reduccionPct = resultado.reductionPercent
    $: centroMaximo = resultado.maxLoadCenter

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        capacidadNominal = 2500
        centroNominal = 500
        desdeLargo = false
        largoCarga = 1200
        centroReal = 600
        conocerEje = false
        distanciaEje = 450
        usarAccesorio = false
        modoReduccion = 'kg'
        reduccion = 0
        pesoCarga = 2000
    }
</script>

<div class="capacidad-montacargas">
    <!-- Capacity plate -->
    <p class="text-xs uppercase tracking-[0.18em] font-semibold text-black/50 dark:text-white/50 mb-3">
        Datos de la placa de capacidad
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Capacidad nominal (kg)
            </span>
            <input type="number" bind:value={capacidadNominal} step="100" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Centro de carga nominal (mm)
            </span>
            <input type="number" bind:value={centroNominal} step="10" min="0" class="tool-input" />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Habitual: 500 mm o 24 in (610 mm). Equipos grandes: 600 mm, 36 o 48 in
            </span>
        </label>
    </div>

    <!-- Actual load -->
    <p class="text-xs uppercase tracking-[0.18em] font-semibold text-black/50 dark:text-white/50 mb-3">
        Carga real
    </p>
    <div class="mb-4">
        <label class="inline-flex items-center gap-2 text-sm text-black/65 dark:text-white/65 cursor-pointer">
            <input type="checkbox" bind:checked={desdeLargo} />
            Calcular el centro de carga a partir del largo de la carga (carga uniforme, apoyada contra el respaldo)
        </label>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {#if desdeLargo}
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Largo de la carga sobre las horquillas (mm)
                </span>
                <input type="number" bind:value={largoCarga} step="50" min="0" class="tool-input" />
                <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                    Centro de carga = largo / 2 = {fmt(lcReal, 0)} mm
                </span>
            </label>
        {:else}
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Centro de carga real (mm)
                </span>
                <input type="number" bind:value={centroReal} step="10" min="0" class="tool-input" />
                <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                    Desde la cara vertical de las horquillas hasta el centro de gravedad de la carga
                </span>
            </label>
        {/if}
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Peso de la carga real (kg)
            </span>
            <input type="number" bind:value={pesoCarga} step="50" min="0" class="tool-input" />
        </label>
    </div>

    <!-- Optional refinements -->
    <p class="text-xs uppercase tracking-[0.18em] font-semibold text-black/50 dark:text-white/50 mb-3">
        Opcional
    </p>
    <div class="mb-3">
        <label class="inline-flex items-center gap-2 text-sm text-black/65 dark:text-white/65 cursor-pointer">
            <input type="checkbox" bind:checked={conocerEje} />
            Conozco la distancia del eje delantero a la cara de las horquillas (cálculo más exacto)
        </label>
    </div>
    {#if conocerEje}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Distancia eje delantero - cara de horquillas A (mm)
                </span>
                <input type="number" bind:value={distanciaEje} step="10" min="0" class="tool-input" />
                <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                    En la ficha técnica suele figurar como distancia de carga o voladizo delantero (x)
                </span>
            </label>
        </div>
    {/if}

    <div class="mb-3">
        <label class="inline-flex items-center gap-2 text-sm text-black/65 dark:text-white/65 cursor-pointer">
            <input type="checkbox" bind:checked={usarAccesorio} />
            Descontar la reducción de capacidad por accesorio (según su placa)
        </label>
    </div>
    {#if usarAccesorio}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Reducción por accesorio
                </span>
                <input type="number" bind:value={reduccion} step={modoReduccion === 'kg' ? 50 : 1} min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Unidad de la reducción
                </span>
                <select bind:value={modoReduccion} class="tool-input">
                    <option value="kg">kg</option>
                    <option value="pct">% de la capacidad nominal</option>
                </select>
            </label>
        </div>
    {/if}

    <!-- Results -->
    <div class="tool-result-card mt-6">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Capacidad real estimada
        </p>

        {#if datosValidos}
            <div class="mb-6">
                <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                    Capacidad a {fmt(lcReal, 0)} mm de centro de carga
                    ({conocerEje ? 'cálculo exacto con A' : 'cálculo simplificado, conservador'})
                </p>
                <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(capacidadReal, 0)} <span class="text-2xl md:text-3xl">kg</span>
                </p>
                <p class="text-sm font-semibold mt-2 {excede ? 'text-red-600 dark:text-red-400' : 'text-green-700 dark:text-green-400'}">
                    {#if excede}
                        La carga de {fmt(pesoCarga, 0)} kg EXCEDE la capacidad real en {fmt(-margen, 0)} kg. No la levante así.
                    {:else}
                        OK: la carga de {fmt(pesoCarga, 0)} kg está dentro de la capacidad real (margen de {fmt(margen, 0)} kg).
                    {/if}
                </p>
                {#if topeAplicado}
                    <p class="text-xs text-black/55 dark:text-white/55 mt-2">
                        El centro de carga real es menor que el nominal. La fórmula daría {fmt(capacidadSinTope, 0)} kg,
                        pero la capacidad se limita a {fmt(capacidadBase, 0)} kg: horquillas, mástil e hidráulica
                        están dimensionados para la capacidad de la placa.
                    </p>
                {/if}
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Uso de la capacidad</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(porcentajeUso, 1)} %</p>
                    <p class="text-xs text-black/50 dark:text-white/50">peso / capacidad real</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Margen</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(margen, 0)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">kg (negativo = excede)</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Reducción vs placa</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(reduccionPct, 1)} %</p>
                    <p class="text-xs text-black/50 dark:text-white/50">base: {fmt(capacidadBase, 0)} kg</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Centro de carga máximo</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(centroMaximo, 0)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">
                        {Number.isFinite(centroMaximo) ? 'mm para esta carga' : 'la carga supera la placa'}
                    </p>
                </div>
            </div>
        {:else}
            <p class="text-sm text-black/65 dark:text-white/65">
                Revise los datos: la capacidad, los centros de carga y el peso deben ser mayores que cero, y la
                reducción por accesorio debe ser menor que la capacidad nominal.
            </p>
        {/if}

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            Fórmulas: <code>C = Cn × (A + LCn) / (A + LCr)</code> · sin A: <code>C = Cn × LCn / LCr</code>,
            con tope en la capacidad de la placa. Es una referencia: la placa de capacidad y el diagrama de
            carga del fabricante prevalecen, y la altura de elevación y la inclinación del mástil reducen la
            capacidad respecto de este cálculo.
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
