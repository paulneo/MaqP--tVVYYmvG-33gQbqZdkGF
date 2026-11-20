<script lang="ts">
    /**
     * Bulldozer production calculator (cyclic dozing method).
     *
     *   q  = blade load (loose m³). Either entered directly or q = L × H² × a
     *   Tc = D/F + D/R + Z               (min)
     *   Q  = q × (60 / Tc) × E × K       (loose m³/h)
     *   Qb = Q / (1 + swell)             (bank m³/h)
     *
     *   D = dozing distance (m), F/R = forward/reverse speed (km/h → m/min)
     *   Z = fixed time for gear shifts and maneuvers (min)
     *   E = job efficiency, K = operator/grade correction factor
     */

    let cargaDirecta = false
    let cargaHoja = 4.6
    let anchoHoja = 3.4
    let alturaHoja = 1.3
    let factorHoja = 0.8
    let distancia = 30
    let velAdelante = 3.5
    let velReversa = 6.5
    let tiempoFijo = 0.1
    let eficiencia = 0.83
    let factorCorreccion = 1.0
    let esponjamiento = 25

    $: cargaEstimada = anchoHoja * alturaHoja * alturaHoja * factorHoja
    $: q = cargaDirecta ? cargaHoja : cargaEstimada
    $: velAdelanteM = (velAdelante * 1000) / 60
    $: velReversaM = (velReversa * 1000) / 60
    $: datosValidos =
        q > 0 && distancia > 0 && velAdelante > 0 && velReversa > 0 &&
        tiempoFijo >= 0 && eficiencia > 0 && factorCorreccion > 0 && esponjamiento >= 0
    $: tiempoCiclo = datosValidos
        ? distancia / velAdelanteM + distancia / velReversaM + tiempoFijo
        : NaN
    $: ciclosPorHora = 60 / tiempoCiclo
    $: produccionSuelto = q * ciclosPorHora * eficiencia * factorCorreccion
    $: produccionBanco = produccionSuelto / (1 + esponjamiento / 100)
    $: jornadaSuelto = produccionSuelto * 8
    $: jornadaBanco = produccionBanco * 8

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        cargaDirecta = false
        cargaHoja = 4.6
        anchoHoja = 3.4
        alturaHoja = 1.3
        factorHoja = 0.8
        distancia = 30
        velAdelante = 3.5
        velReversa = 6.5
        tiempoFijo = 0.1
        eficiencia = 0.83
        factorCorreccion = 1.0
        esponjamiento = 25
    }
</script>

<div class="produccion-bulldozer">
    <!-- Blade load -->
    <div class="mb-4">
        <label class="inline-flex items-center gap-2 text-sm text-black/65 dark:text-white/65 cursor-pointer">
            <input type="checkbox" bind:checked={cargaDirecta} />
            Ingresar la carga de la hoja directamente (m³ sueltos)
        </label>
    </div>

    {#if cargaDirecta}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Carga de la hoja q (m³ sueltos)
                </span>
                <input type="number" bind:value={cargaHoja} step="0.1" min="0" class="tool-input" />
            </label>
        </div>
    {:else}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Ancho de hoja L (m)
                </span>
                <input type="number" bind:value={anchoHoja} step="0.1" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Altura de hoja H (m)
                </span>
                <input type="number" bind:value={alturaHoja} step="0.1" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Factor de hoja a
                </span>
                <input type="number" bind:value={factorHoja} step="0.05" min="0.2" max="1.2" class="tool-input" />
                <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                    Referencia: fácil 0,9-1,1 · medio 0,7-0,9 · difícil 0,6-0,7 · muy difícil 0,4-0,6
                </span>
            </label>
        </div>
    {/if}

    <!-- Cycle -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Distancia de empuje D (m)
            </span>
            <input type="number" bind:value={distancia} step="5" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Tiempo fijo Z (min)
            </span>
            <input type="number" bind:value={tiempoFijo} step="0.01" min="0" class="tool-input" />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Cambios de marcha y maniobras. Referencia: 0,05-0,20 min
            </span>
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Velocidad de avance F (km/h)
            </span>
            <input type="number" bind:value={velAdelante} step="0.1" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Velocidad de retroceso R (km/h)
            </span>
            <input type="number" bind:value={velReversa} step="0.1" min="0" class="tool-input" />
        </label>
    </div>

    <!-- Factors -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Eficiencia de trabajo E
            </span>
            <input type="number" bind:value={eficiencia} step="0.01" min="0.3" max="1" class="tool-input" />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                50 min/h = 0,83 · 45 min/h = 0,75
            </span>
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Corrección operador / pendiente
            </span>
            <input type="number" bind:value={factorCorreccion} step="0.05" min="0.3" max="1.5" class="tool-input" />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                1,0 = sin corrección. Operador novato o subida: menos de 1
            </span>
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Esponjamiento (%)
            </span>
            <input type="number" bind:value={esponjamiento} step="1" min="0" class="tool-input" />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Para pasar de m³ sueltos a m³ en banco
            </span>
        </label>
    </div>

    <!-- Results -->
    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Producción estimada
        </p>

        {#if datosValidos}
            <div class="mb-6">
                <p class="text-sm text-black/55 dark:text-white/55 mb-1">Producción por hora (volumen suelto)</p>
                <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(produccionSuelto, 1)} <span class="text-2xl md:text-3xl">m³/h</span>
                </p>
                <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                    En banco: {fmt(produccionBanco, 1)} m³/h
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Carga de hoja</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(q, 2)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">m³ sueltos</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Tiempo de ciclo</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(tiempoCiclo, 2)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">min ({fmt(ciclosPorHora, 1)} ciclos/h)</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Jornada 8 h (suelto)</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(jornadaSuelto, 0)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">m³/día</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Jornada 8 h (banco)</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(jornadaBanco, 0)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">m³/día</p>
                </div>
            </div>
        {:else}
            <p class="text-sm text-black/65 dark:text-white/65">
                Revise los datos: la carga, la distancia, las velocidades y la eficiencia deben ser mayores que cero.
            </p>
        {/if}

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            Fórmulas: <code>q = L × H² × a</code> · <code>Tc = D/F + D/R + Z</code> ·
            <code>Q = q × (60 / Tc) × E</code>. Es una estimación de planificación; los
            valores de referencia no provienen de un fabricante.
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
