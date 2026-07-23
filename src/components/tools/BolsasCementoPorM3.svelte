<script lang="ts">
    /**
     * Calculadora de bolsas de cemento (y arena, grava, agua) por m³ de hormigón.
     *
     * Dosificaciones típicas por resistencia (kg/m³) según normas Latam
     * (NTP en Perú, IRAM en Argentina, NCh en Chile, NTC en Colombia, NMX México).
     */

    type Resistencia = 'H10' | 'H15' | 'H21' | 'H25' | 'H30' | 'H40'

    let volumenM3 = 1
    let resistencia: Resistencia = 'H21'
    let porcentajeDesperdicio = 5

    const DOSIFICACIONES: Record<Resistencia, {
        cemento: number
        arena: number
        grava: number
        agua: number
        uso: string
    }> = {
        H10: { cemento: 200, arena: 800, grava: 1200, agua: 200, uso: 'Contrapiso, relleno no estructural' },
        H15: { cemento: 250, arena: 750, grava: 1150, agua: 190, uso: 'Solera, hormigón simple' },
        H21: { cemento: 350, arena: 700, grava: 1100, agua: 180, uso: 'Obra estructural general (más común)' },
        H25: { cemento: 380, arena: 680, grava: 1080, agua: 175, uso: 'Losas y vigas estructurales' },
        H30: { cemento: 420, arena: 650, grava: 1050, agua: 170, uso: 'Columnas de alta carga, obras especiales' },
        H40: { cemento: 450, arena: 630, grava: 1020, agua: 165, uso: 'Estructuras de alta resistencia' },
    }

    const KG_POR_BOLSA = 42.5

    $: volumenTotal = volumenM3 * (1 + porcentajeDesperdicio / 100)
    $: dosif = DOSIFICACIONES[resistencia]
    $: cementoKg = volumenTotal * dosif.cemento
    $: bolsasCemento = Math.ceil(cementoKg / KG_POR_BOLSA)
    $: arenaKg = volumenTotal * dosif.arena
    $: gravaKg = volumenTotal * dosif.grava
    $: aguaLitros = volumenTotal * dosif.agua

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        volumenM3 = 1
        resistencia = 'H21'
        porcentajeDesperdicio = 5
    }
</script>

<div class="cemento-calculadora">
    <!-- Selector de resistencia -->
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            Resistencia del hormigón
        </label>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-2 mb-3">
            {#each ['H10', 'H15', 'H21', 'H25', 'H30', 'H40'] as r}
                <button
                    type="button"
                    class="tool-chip"
                    class:tool-chip-active={resistencia === r}
                    on:click={() => (resistencia = r as Resistencia)}
                >
                    {r}
                </button>
            {/each}
        </div>
        <p class="text-xs text-black/55 dark:text-white/55">
            <strong>{resistencia}:</strong> {DOSIFICACIONES[resistencia].uso}
        </p>
    </div>

    <!-- Inputs -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Volumen de hormigón (m³)
            </span>
            <input
                type="number"
                bind:value={volumenM3}
                step="0.1"
                min="0"
                class="tool-input"
            />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Desperdicio (%)
            </span>
            <input
                type="number"
                bind:value={porcentajeDesperdicio}
                step="1"
                min="0"
                max="30"
                class="tool-input"
            />
        </label>
    </div>

    <!-- Resultados -->
    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Resultado para {fmt(volumenTotal, 2)} m³ de {resistencia}
        </p>

        <div class="mb-6">
            <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                Bolsas de cemento necesarias
            </p>
            <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                {bolsasCemento} <span class="text-2xl md:text-3xl">bolsas</span>
            </p>
            <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                {fmt(cementoKg, 0)} kg totales · bolsa de 42.5 kg
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Cemento</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {bolsasCemento}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">bolsas × 42.5 kg</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Arena</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(arenaKg, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">kg</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Grava</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(gravaKg, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">kg</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Agua</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(aguaLitros, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">litros</p>
            </div>
        </div>

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            Dosificación estándar para {resistencia}. Los valores pueden variar según la
            granulometría del agregado, cemento usado y norma local. Para obras estructurales
            importantes, consultá el diseño de mezcla con un ingeniero.
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
