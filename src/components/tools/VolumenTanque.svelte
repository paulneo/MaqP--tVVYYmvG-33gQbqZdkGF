<script lang="ts">
    /**
     * Calculadora de volumen de tanque / cisterna de agua.
     *
     * Soporta 4 formas comunes:
     *   - Rectangular:         V = largo × ancho × alto
     *   - Cilíndrico vertical: V = π × r² × alto
     *   - Cilíndrico horizontal (tanque acostado): V = π × r² × largo
     *   - Tinaco esférico:     V = (4/3) × π × r³
     *
     * Unidades: entrada en metros, salidas en m³, litros y galones (US).
     */

    type Forma = 'rectangular' | 'cilindrico-vertical' | 'cilindrico-horizontal' | 'esferico'

    const FORMAS: { v: Forma; label: string; icono: string }[] = [
        { v: 'rectangular',           label: 'Rectangular',           icono: '▭' },
        { v: 'cilindrico-vertical',   label: 'Cilíndrico vertical',   icono: '⬤' },
        { v: 'cilindrico-horizontal', label: 'Cilíndrico horizontal', icono: '◑' },
        { v: 'esferico',              label: 'Tinaco esférico',       icono: '○' },
    ]

    let forma: Forma = 'cilindrico-vertical'
    let largo = 2
    let ancho = 1
    let alto = 1.5
    let diametro = 1.2
    let personasHogar = 4
    let litrosPorPersona = 150

    $: radio = diametro / 2
    $: volumenM3 = (() => {
        if (forma === 'rectangular') return largo * ancho * alto
        if (forma === 'cilindrico-vertical') return Math.PI * radio * radio * alto
        if (forma === 'cilindrico-horizontal') return Math.PI * radio * radio * largo
        if (forma === 'esferico') return (4 / 3) * Math.PI * radio * radio * radio
        return 0
    })()

    $: volumenLitros = volumenM3 * 1000
    $: volumenGalones = volumenLitros / 3.785
    $: consumoDiarioTotal = personasHogar * litrosPorPersona
    $: diasDeAutonomia = consumoDiarioTotal > 0 ? volumenLitros / consumoDiarioTotal : 0

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        forma = 'cilindrico-vertical'
        largo = 2
        ancho = 1
        alto = 1.5
        diametro = 1.2
        personasHogar = 4
        litrosPorPersona = 150
    }
</script>

<div class="tanque-calculadora">
    <!-- Selector de forma -->
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            Forma del tanque
        </label>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
            {#each FORMAS as f}
                <button
                    type="button"
                    class="tool-chip"
                    class:tool-chip-active={forma === f.v}
                    on:click={() => (forma = f.v)}
                >
                    <span class="mr-1.5">{f.icono}</span>
                    {f.label}
                </button>
            {/each}
        </div>
    </div>

    <!-- Inputs según forma -->
    {#if forma === 'rectangular'}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Largo (m)
                </span>
                <input type="number" bind:value={largo} step="0.1" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Ancho (m)
                </span>
                <input type="number" bind:value={ancho} step="0.1" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Alto (m)
                </span>
                <input type="number" bind:value={alto} step="0.1" min="0" class="tool-input" />
            </label>
        </div>
    {:else if forma === 'cilindrico-vertical'}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Diámetro (m)
                </span>
                <input type="number" bind:value={diametro} step="0.1" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Alto (m)
                </span>
                <input type="number" bind:value={alto} step="0.1" min="0" class="tool-input" />
            </label>
        </div>
    {:else if forma === 'cilindrico-horizontal'}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Diámetro (m)
                </span>
                <input type="number" bind:value={diametro} step="0.1" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Largo del tanque (m)
                </span>
                <input type="number" bind:value={largo} step="0.1" min="0" class="tool-input" />
            </label>
        </div>
    {:else}
        <div class="grid grid-cols-1 gap-4 mb-8">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Diámetro (m)
                </span>
                <input type="number" bind:value={diametro} step="0.1" min="0" class="tool-input" />
            </label>
        </div>
    {/if}

    <!-- Consumo diario para calcular autonomía -->
    <div class="mb-8 p-4 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08]">
        <p class="text-sm font-semibold mb-3 text-black/75 dark:text-white/80">
            Duración del agua (opcional)
        </p>
        <div class="grid grid-cols-2 gap-4">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Personas en el hogar
                </span>
                <input type="number" bind:value={personasHogar} step="1" min="1" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Litros por persona/día
                </span>
                <input type="number" bind:value={litrosPorPersona} step="10" min="0" class="tool-input" />
                <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                    OMS mínimo 100 · Consumo Latam típico 150-200 · Con jardín/piscina 300+
                </span>
            </label>
        </div>
    </div>

    <!-- Resultados -->
    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Capacidad del tanque
        </p>

        <div class="mb-6">
            <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                Volumen total
            </p>
            <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                {fmt(volumenLitros, 0)} <span class="text-2xl md:text-3xl">litros</span>
            </p>
            <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                {fmt(volumenM3, 3)} m³ · {fmt(volumenGalones, 0)} galones (US)
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Metros cúbicos</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(volumenM3, 3)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">m³</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Galones US</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(volumenGalones, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">gal</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Consumo/día</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(consumoDiarioTotal, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">L/día familia</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Autonomía</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(diasDeAutonomia, 1)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">días</p>
            </div>
        </div>

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            El volumen calculado es el <strong>volumen nominal</strong>. El volumen útil real suele ser 90-95% (por espacio de aireación y tubería de rebose). Para tanques enterrados subir 10% de margen.
        </p>
    </div>

    <div class="mt-4 text-right">
        <button type="button" on:click={reset} class="text-sm text-black/55 dark:text-white/55 hover:text-[var(--primary)] transition">
            Reiniciar valores
        </button>
    </div>
</div>
