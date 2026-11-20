<script lang="ts">
    /**
     * Motor grader production calculator.
     *
     *   We    = L × sin(angle) − overlap            (effective width per pass, m)
     *   A     = v × 1000 × We × E                   (m²/h)
     *   lanes = ceil(road width / We)
     *   T     = lanes × passes per lane × length / (v × E)   (h)
     */

    let largoHoja = 3.7
    let angulo = 60
    let traslape = 0.3
    let velocidad = 4
    let eficiencia = 0.75
    let anchoVia = 7
    let longitudVia = 1
    let pasadasPorCarril = 3

    $: anchoEfectivo = largoHoja * Math.sin((angulo * Math.PI) / 180) - traslape
    $: datosValidos =
        anchoEfectivo > 0 && velocidad > 0 && eficiencia > 0 && eficiencia <= 1 &&
        anchoVia > 0 && longitudVia > 0 && pasadasPorCarril > 0
    $: produccionArea = datosValidos ? velocidad * 1000 * anchoEfectivo * eficiencia : NaN
    // Small epsilon avoids an extra lane caused by floating point noise
    $: carriles = datosValidos ? Math.ceil(anchoVia / anchoEfectivo - 1e-9) : NaN
    $: pasadasTotales = carriles * pasadasPorCarril
    $: tiempoHoras = (pasadasTotales * longitudVia) / (velocidad * eficiencia)
    $: jornadas = tiempoHoras / 8
    $: areaTramo = anchoVia * longitudVia * 1000

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        largoHoja = 3.7
        angulo = 60
        traslape = 0.3
        velocidad = 4
        eficiencia = 0.75
        anchoVia = 7
        longitudVia = 1
        pasadasPorCarril = 3
    }
</script>

<div class="produccion-motoniveladora">
    <!-- Blade and speed -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Longitud de la hoja L (m)
            </span>
            <input type="number" bind:value={largoHoja} step="0.1" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Ángulo de la hoja (grados)
            </span>
            <input type="number" bind:value={angulo} step="5" min="0" max="90" class="tool-input" />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Medido respecto a la dirección de avance (90° = hoja perpendicular)
            </span>
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Traslape entre pasadas (m)
            </span>
            <input type="number" bind:value={traslape} step="0.05" min="0" class="tool-input" />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Referencia: 0,2-0,4 m
            </span>
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Velocidad de trabajo v (km/h)
            </span>
            <input type="number" bind:value={velocidad} step="0.5" min="0" class="tool-input" />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Referencia: cunetas 2-4 · escarificado y mezcla 3-6 · nivelación y perfilado 4-8 · acabado 5-10
            </span>
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Eficiencia E
            </span>
            <input type="number" bind:value={eficiencia} step="0.05" min="0.3" max="1" class="tool-input" />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Incluye giros y esperas. Referencia: 0,60-0,85
            </span>
        </label>
    </div>

    <!-- Road section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Ancho de la vía (m)
            </span>
            <input type="number" bind:value={anchoVia} step="0.5" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Longitud del tramo (km)
            </span>
            <input type="number" bind:value={longitudVia} step="0.1" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Pasadas por carril
            </span>
            <input type="number" bind:value={pasadasPorCarril} step="1" min="1" class="tool-input" />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Referencia: 2-6 según el trabajo
            </span>
        </label>
    </div>

    <!-- Results -->
    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Rendimiento estimado
        </p>

        {#if datosValidos}
            <div class="mb-6">
                <p class="text-sm text-black/55 dark:text-white/55 mb-1">Área trabajada por hora</p>
                <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(produccionArea, 0)} <span class="text-2xl md:text-3xl">m²/h</span>
                </p>
                <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                    Ancho efectivo por pasada: {fmt(anchoEfectivo, 2)} m
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Carriles</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(carriles, 0)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">para cubrir el ancho</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Pasadas totales</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(pasadasTotales, 0)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">sobre el tramo</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Tiempo del tramo</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(tiempoHoras, 2)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">horas</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Jornadas de 8 h</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(jornadas, 2)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">de una motoniveladora</p>
                </div>
            </div>
            <p class="text-xs text-black/45 dark:text-white/45 mt-3">
                Superficie del tramo: {fmt(areaTramo, 0)} m²
            </p>
        {:else}
            <p class="text-sm text-black/65 dark:text-white/65">
                Revise los datos: el ancho efectivo por pasada es {fmt(anchoEfectivo, 2)} m y debe ser mayor
                que cero (aumente el ángulo o reduzca el traslape). La velocidad, la eficiencia, el ancho,
                la longitud y las pasadas también deben ser positivos.
            </p>
        {/if}

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            Fórmulas: <code>We = L × sen(ángulo) − traslape</code> · <code>A = v × 1000 × We × E</code> ·
            <code>T = carriles × pasadas × longitud / (v × E)</code>. Los valores de referencia son
            orientativos, no datos de un fabricante.
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
