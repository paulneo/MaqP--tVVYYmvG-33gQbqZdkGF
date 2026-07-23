<script lang="ts">
    /**
     * Calculadora de escaleras: huella, contrahuella, escalones.
     *
     * Basada en la regla de Blondel:
     *   2 × contrahuella + huella = 60-64 cm (ideal ~63 cm)
     *
     * Parámetros ergonómicos por tipo de uso:
     *   - Residencial: contrahuella 17-18 cm, huella 27-30 cm
     *   - Comercial:   contrahuella 15-17 cm, huella 28-31 cm
     *   - Industrial:  contrahuella 18-20 cm, huella 25-27 cm
     */

    type Uso = 'residencial' | 'comercial' | 'industrial'

    const PARAMS: Record<Uso, { contrahuellaIdeal: number; huellaIdeal: number; label: string }> = {
        residencial: { contrahuellaIdeal: 17.5, huellaIdeal: 28, label: 'Residencial' },
        comercial:   { contrahuellaIdeal: 16, huellaIdeal: 30, label: 'Comercial / Público' },
        industrial:  { contrahuellaIdeal: 19, huellaIdeal: 26, label: 'Industrial' },
    }

    let alturaTotal = 2.7    // metros
    let uso: Uso = 'residencial'

    $: contrahuellaIdeal = PARAMS[uso].contrahuellaIdeal
    $: huellaIdeal = PARAMS[uso].huellaIdeal

    // Cantidad de contrahuellas ~ redondeada al entero más cercano
    $: nEscalones = Math.max(1, Math.round((alturaTotal * 100) / contrahuellaIdeal))
    // Contrahuella real (recalculada para que quede exacta con la altura)
    $: contrahuellaReal = (alturaTotal * 100) / nEscalones
    // Huella permanece la ideal (ajustable si se quisiera)
    $: huellaReal = huellaIdeal
    // Longitud horizontal ocupada = huella × (nEscalones - 1)
    $: longitudHorizontal = (huellaReal * (nEscalones - 1)) / 100
    // Regla de Blondel: 2C + H debe estar entre 60-64
    $: blondel = 2 * contrahuellaReal + huellaReal
    $: blondelOk = blondel >= 60 && blondel <= 64
    $: blondelWarning = blondel < 60 ? 'baja' : blondel > 64 ? 'alta' : 'ok'

    const fmt = (n: number, decimals = 1) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        alturaTotal = 2.7
        uso = 'residencial'
    }
</script>

<div class="escaleras-calculadora">
    <!-- Selector de uso -->
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            Tipo de uso
        </label>
        <div class="grid grid-cols-3 gap-2">
            {#each Object.keys(PARAMS) as u}
                <button
                    type="button"
                    class="tool-chip"
                    class:tool-chip-active={uso === u}
                    on:click={() => (uso = u as Uso)}
                >
                    {PARAMS[u].label}
                </button>
            {/each}
        </div>
    </div>

    <!-- Input altura -->
    <div class="mb-8">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Altura total a subir (m)
            </span>
            <input
                type="number"
                bind:value={alturaTotal}
                step="0.05"
                min="0.5"
                max="10"
                class="tool-input"
            />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Desde el suelo del piso inferior hasta el suelo del piso superior. Típico residencial: 2.60-3.00 m.
            </span>
        </label>
    </div>

    <!-- Resultados -->
    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Diseño de la escalera
        </p>

        <div class="mb-6">
            <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                Cantidad de escalones
            </p>
            <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                {nEscalones} <span class="text-2xl md:text-3xl">escalones</span>
            </p>
            <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                Altura {alturaTotal} m ÷ contrahuella ≈ {fmt(contrahuellaIdeal, 1)} cm
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Contrahuella real</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(contrahuellaReal, 2)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">cm por escalón</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Huella</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(huellaReal, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">cm de pisada</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Long. horizontal</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(longitudHorizontal, 2)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">m que ocupa</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Blondel (2C+H)</p>
                <p class="text-lg font-bold"
                    class:text-green-600={blondelOk}
                    class:text-yellow-600={!blondelOk}
                >
                    {fmt(blondel, 1)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">
                    {blondelOk ? 'cómoda' : blondelWarning === 'baja' ? 'muy plana' : 'muy pronunciada'}
                </p>
            </div>
        </div>

        {#if !blondelOk}
            <div class="mt-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/25">
                <p class="text-xs text-yellow-800 dark:text-yellow-200 leading-relaxed">
                    <strong>Atención:</strong>
                    {#if blondelWarning === 'baja'}
                        La regla de Blondel (2C + H) da {fmt(blondel, 1)} cm — menor a 60. La escalera va a ser muy plana y ocupará mucho espacio horizontal. Considerá aumentar levemente la contrahuella.
                    {:else}
                        La regla de Blondel (2C + H) da {fmt(blondel, 1)} cm — mayor a 64. La escalera va a ser incómoda y agotadora. Considerá reducir la contrahuella con más escalones.
                    {/if}
                </p>
            </div>
        {/if}

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            La <strong>regla de Blondel</strong> (2 × contrahuella + huella ≈ 63 cm) garantiza comodidad. Valores fuera del rango 60-64 dan escaleras plana o pronunciadas de más. Para uso público o comercial, además verificá normativa local de accesibilidad.
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
