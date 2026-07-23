<script lang="ts">
    /**
     * Calculadora de kilos de acero por varilla.
     *
     * Fórmula estándar de construcción:
     *   peso por metro (kg/m) = diámetro²(mm) / 162
     *
     * Derivada de: π/4 × d² × densidad(7850 kg/m³) / 1_000_000 = d²/162.026
     */

    type Diametro = 6 | 8 | 10 | 12 | 16 | 20 | 25 | 32

    let diametro: Diametro = 12
    let cantidad = 10
    let longitud = 12
    let precioPorKg = 0

    const DIAMETROS: { v: Diametro; label: string }[] = [
        { v: 6, label: '6 mm (#2)' },
        { v: 8, label: '8 mm (#3)' },
        { v: 10, label: '10 mm (#3)' },
        { v: 12, label: '12 mm (#4)' },
        { v: 16, label: '16 mm (#5)' },
        { v: 20, label: '20 mm (#6)' },
        { v: 25, label: '25 mm (#8)' },
        { v: 32, label: '32 mm (#10)' },
    ]

    $: pesoPorMetro = (diametro * diametro) / 162
    $: pesoPorVarilla = pesoPorMetro * longitud
    $: pesoTotal = pesoPorVarilla * cantidad
    $: costoTotal = pesoTotal * precioPorKg

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        diametro = 12
        cantidad = 10
        longitud = 12
        precioPorKg = 0
    }
</script>

<div class="acero-calculadora">
    <!-- Selector de diámetro -->
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            Diámetro de la varilla
        </label>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
            {#each DIAMETROS as opt}
                <button
                    type="button"
                    class="tool-chip"
                    class:tool-chip-active={diametro === opt.v}
                    on:click={() => (diametro = opt.v)}
                >
                    {opt.label}
                </button>
            {/each}
        </div>
    </div>

    <!-- Inputs numéricos -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Cantidad de varillas
            </span>
            <input
                type="number"
                bind:value={cantidad}
                step="1"
                min="1"
                class="tool-input"
            />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Longitud por varilla (m)
            </span>
            <input
                type="number"
                bind:value={longitud}
                step="0.5"
                min="0"
                class="tool-input"
            />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Precio por kg (opcional)
            </span>
            <input
                type="number"
                bind:value={precioPorKg}
                step="0.10"
                min="0"
                class="tool-input"
                placeholder="0.00"
            />
        </label>
    </div>

    <!-- Resultados -->
    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Resultado
        </p>

        <div class="mb-6">
            <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                Peso total del acero
            </p>
            <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                {fmt(pesoTotal, 2)} <span class="text-2xl md:text-3xl">kg</span>
            </p>
            <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                Equivale a {fmt(pesoTotal / 1000, 3)} toneladas
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Peso por metro</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(pesoPorMetro, 3)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">kg/m</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Peso por varilla</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(pesoPorVarilla, 2)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">kg cada una</p>
            </div>
            {#if precioPorKg > 0}
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Costo total</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                        {fmt(costoTotal, 2)}
                    </p>
                    <p class="text-xs text-black/50 dark:text-white/50">(precio × peso)</p>
                </div>
            {:else}
                <div class="tool-result-metric opacity-50">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Costo total</p>
                    <p class="text-lg font-bold text-black/40 dark:text-white/40">
                        —
                    </p>
                    <p class="text-xs text-black/50 dark:text-white/50">ingresá el precio</p>
                </div>
            {/if}
        </div>

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            Usa la fórmula estándar <code>d² / 162</code> asumiendo acero al carbono con
            densidad de 7.850 kg/m³. Los diámetros nominales pueden variar levemente por
            fabricante — el peso teórico es un buen estimador para pedidos.
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
