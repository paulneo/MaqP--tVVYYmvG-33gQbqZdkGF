<script lang="ts">
    /**
     * Calculadora de consumo de DEF/AdBlue para flota diésel Tier 4 / Stage V.
     *
     * Ratio típico DEF/diésel según fabricante:
     *  - Cummins ISX/QSX15, Volvo D13, Cat C13 ACERT+SCR: 3-5%
     *  - Motores compactos Tier 4 Final (D7E, C7.1): 5-7%
     * Precio DEF (2026): USD 0.80-1.40/L Latam, USD 0.60-0.90/L USA/EU.
     */

    let consumoDieselMensual = 5000
    let unidadesEnFlota = 1
    let ratioDefPct = 5
    let precioDefLitro = 1.1
    let precioDieselLitro = 1.2

    $: dieselTotalFlotaMes = consumoDieselMensual * unidadesEnFlota
    $: defLitrosMes = dieselTotalFlotaMes * (ratioDefPct / 100)
    $: defBidones10L = Math.ceil(defLitrosMes / 10)
    $: defTambores208L = Math.ceil(defLitrosMes / 208)
    $: costoDefMes = defLitrosMes * precioDefLitro
    $: costoDefAnio = costoDefMes * 12
    $: costoDieselMes = dieselTotalFlotaMes * precioDieselLitro
    $: pctSobreCombustible = costoDieselMes > 0 ? (costoDefMes / costoDieselMes) * 100 : 0

    const fmt = (n: number, decimals = 0) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        consumoDieselMensual = 5000
        unidadesEnFlota = 1
        ratioDefPct = 5
        precioDefLitro = 1.1
        precioDieselLitro = 1.2
    }
</script>

<div class="def-calculadora">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Consumo diésel por unidad (L/mes)
            </span>
            <input type="number" bind:value={consumoDieselMensual} step="100" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Unidades en flota
            </span>
            <input type="number" bind:value={unidadesEnFlota} step="1" min="1" class="tool-input" />
        </label>
    </div>

    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            Ratio DEF sobre diésel
        </label>
        <div class="grid grid-cols-4 gap-2 mb-2">
            {#each [3, 5, 6, 8] as r}
                <button
                    type="button"
                    class="tool-chip"
                    class:tool-chip-active={ratioDefPct === r}
                    on:click={() => (ratioDefPct = r)}
                >
                    {r}%
                </button>
            {/each}
        </div>
        <p class="text-xs text-black/55 dark:text-white/55">
            3% motores highway modernos (ISX, D13). 5% típico maquinaria Tier 4 Final.
            6-8% motores compactos con SCR agresivo o cargas parciales.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Precio DEF (USD/L)
            </span>
            <input type="number" bind:value={precioDefLitro} step="0.05" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Precio diésel (USD/L)
            </span>
            <input type="number" bind:value={precioDieselLitro} step="0.05" min="0" class="tool-input" />
        </label>
    </div>

    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Consumo mensual de DEF/AdBlue para {unidadesEnFlota} unidad(es)
        </p>

        <div class="mb-6">
            <p class="text-sm text-black/55 dark:text-white/55 mb-1">DEF necesario por mes</p>
            <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                {fmt(defLitrosMes, 0)} <span class="text-2xl md:text-3xl">litros</span>
            </p>
            <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                {defBidones10L} bidones de 10L · {defTambores208L} tambor(es) de 208L
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Costo DEF/mes</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    USD {fmt(costoDefMes, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">{fmt(pctSobreCombustible, 1)}% del diésel</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Costo DEF/año</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    USD {fmt(costoDefAnio, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">proyección anual</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Diésel total/mes</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(dieselTotalFlotaMes, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">litros/mes flota</p>
            </div>
        </div>

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            El ratio real depende de la carga de trabajo. Motores con mucha carga
            parcial o ralentí consumen más DEF por litro de diésel. Contaminación
            del DEF (siliconas, aceite) obliga a reemplazar el catalizador SCR
            (USD 3000-8000). Almacenar DEF entre -5°C y 30°C, protegido del sol.
        </p>
    </div>

    <div class="mt-4 text-right">
        <button type="button" on:click={reset} class="text-sm text-black/55 dark:text-white/55 hover:text-[var(--primary)] transition">
            Reiniciar valores
        </button>
    </div>
</div>
