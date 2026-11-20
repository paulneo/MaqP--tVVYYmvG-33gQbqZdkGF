<script lang="ts">
    /**
     * Soil swell / shrinkage converter (bank, loose, compacted).
     * Everything goes through the bank volume Vb:
     *   Vs = Vb × (1 + swell)
     *   Vc = Vb × Fc        (Fc = compacted / bank ratio; > 1 for blasted rock)
     *   load factor = 1 / (1 + swell)
     *   trips = ceil(Vs / truck)
     */

    type Material = { nombre: string; esponjamiento: number; fc: number }

    const materiales: Material[] = [
        { nombre: 'Arena y grava', esponjamiento: 12, fc: 0.95 },
        { nombre: 'Tierra común', esponjamiento: 25, fc: 0.9 },
        { nombre: 'Arcilla', esponjamiento: 35, fc: 0.9 },
        { nombre: 'Roca volada', esponjamiento: 60, fc: 1.3 },
    ]
    const PERSONALIZADO = materiales.length

    let volumen = 1000
    let estado: 'banco' | 'suelto' | 'compactado' = 'banco'
    let materialIdx = 1
    let esponjamientoPct = 25
    let fc = 0.9
    let capacidadCamion: number | null = 12

    function elegirMaterial(i: number) {
        materialIdx = i
        if (i < materiales.length) {
            esponjamientoPct = materiales[i].esponjamiento
            fc = materiales[i].fc
        }
    }

    $: validos = volumen >= 0 && esponjamientoPct >= 0 && fc > 0
    $: volBanco = !validos ? NaN
        : estado === 'banco' ? volumen
        : estado === 'suelto' ? volumen / (1 + esponjamientoPct / 100)
        : volumen / fc
    $: volSuelto = volBanco * (1 + esponjamientoPct / 100)
    $: volCompactado = volBanco * fc
    $: factorCarga = 1 / (1 + esponjamientoPct / 100)
    $: viajes = capacidadCamion && capacidadCamion > 0 ? Math.ceil(volSuelto / capacidadCamion - 1e-9) : NaN

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        volumen = 1000
        estado = 'banco'
        elegirMaterial(1)
        capacidadCamion = 12
    }

    const lbl = 'block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60'
</script>

<div class="esponjamiento-calculadora">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <label class="block">
            <span class={lbl}>Volumen (m³)</span>
            <input type="number" bind:value={volumen} step="10" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class={lbl}>El volumen está en estado</span>
            <select bind:value={estado} class="tool-input">
                <option value="banco">Banco (en el terreno)</option>
                <option value="suelto">Suelto (excavado)</option>
                <option value="compactado">Compactado (en el relleno)</option>
            </select>
        </label>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <label class="block">
            <span class={lbl}>Material</span>
            <select
                class="tool-input"
                value={materialIdx}
                on:change={(e) => elegirMaterial(Number(e.currentTarget.value))}
            >
                {#each materiales as m, i}
                    <option value={i}>{m.nombre}</option>
                {/each}
                <option value={PERSONALIZADO}>Personalizado</option>
            </select>
        </label>
        <label class="block">
            <span class={lbl}>Esponjamiento (%)</span>
            <input
                type="number"
                bind:value={esponjamientoPct}
                on:input={() => (materialIdx = PERSONALIZADO)}
                step="1"
                min="0"
                class="tool-input"
            />
        </label>
        <label class="block">
            <span class={lbl}>Fc (compactado / banco)</span>
            <input
                type="number"
                bind:value={fc}
                on:input={() => (materialIdx = PERSONALIZADO)}
                step="0.05"
                min="0.1"
                class="tool-input"
            />
        </label>
    </div>

    <div class="mb-8 max-w-xs">
        <label class="block">
            <span class={lbl}>Capacidad del volquete (m³, opcional)</span>
            <input type="number" bind:value={capacidadCamion} step="0.5" min="0" class="tool-input" />
        </label>
    </div>

    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">Volúmenes equivalentes</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Banco</p>
                <p class="text-2xl font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(volBanco, 1)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">m³</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Suelto</p>
                <p class="text-2xl font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(volSuelto, 1)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">m³</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Compactado</p>
                <p class="text-2xl font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(volCompactado, 1)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">m³</p>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Factor de carga</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(factorCarga, 3)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">1 / (1 + esponjamiento)</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Viajes de volquete</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(viajes, 0)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">sobre el volumen suelto</p>
            </div>
        </div>

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            Valores de referencia; varían con la humedad y la granulometría. Para obra use
            ensayos del material. Fc mayor que 1 (roca volada) indica que el relleno
            compactado ocupa más volumen que la roca en banco.
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
