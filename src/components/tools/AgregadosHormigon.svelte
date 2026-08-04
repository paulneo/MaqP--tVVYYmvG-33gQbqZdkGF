<script lang="ts">
    /**
     * Calculadora de agregados para hormigón dosificado por proporción
     * volumétrica clásica (parte de cemento : parte de arena : parte de grava).
     *
     * Base física: 1 m³ de hormigón compactado necesita ~1.5 m³ de materiales
     * sueltos (arena + grava + cemento) por el factor de compactación (~0.67).
     * El agua se calcula como relación a/c según resistencia esperada.
     */

    type Proporcion = {
        label: string
        cemento: number
        arena: number
        grava: number
        aguaCementoRatio: number
        resistencia: string
        uso: string
    }

    const PROPORCIONES: Record<string, Proporcion> = {
        '1-3-5': { label: '1 : 3 : 5', cemento: 1, arena: 3, grava: 5, aguaCementoRatio: 0.7, resistencia: '~H10-H15', uso: 'Contrapiso, relleno no estructural' },
        '1-2-4': { label: '1 : 2 : 4', cemento: 1, arena: 2, grava: 4, aguaCementoRatio: 0.6, resistencia: '~H17-H20', uso: 'Cimientos, hormigón simple' },
        '1-2-3': { label: '1 : 2 : 3', cemento: 1, arena: 2, grava: 3, aguaCementoRatio: 0.55, resistencia: '~H21-H25', uso: 'Estructural general (más común)' },
        '1-1.5-3': { label: '1 : 1.5 : 3', cemento: 1, arena: 1.5, grava: 3, aguaCementoRatio: 0.5, resistencia: '~H25-H30', uso: 'Losas, vigas estructurales' },
        '1-1-2': { label: '1 : 1 : 2', cemento: 1, arena: 1, grava: 2, aguaCementoRatio: 0.45, resistencia: '~H30-H40', uso: 'Alta resistencia, obras especiales' },
    }

    const KG_POR_BOLSA = 42.5
    // Densidad aparente del cemento suelto (kg/m³)
    const DENSIDAD_CEMENTO_SUELTO = 1440
    // Factor de compactación: m³ de materiales sueltos → m³ de hormigón compactado
    const FACTOR_COMPACTACION = 1.5

    let volumenM3 = 1
    let proporcionKey: keyof typeof PROPORCIONES = '1-2-3'
    let porcentajeDesperdicio = 5

    $: prop = PROPORCIONES[proporcionKey]
    $: volumenTotal = volumenM3 * (1 + porcentajeDesperdicio / 100)
    $: partesTotales = prop.cemento + prop.arena + prop.grava
    // Volumen suelto necesario (m³ de materiales antes de compactar)
    $: volumenSueltoTotal = volumenTotal * FACTOR_COMPACTACION
    $: volumenCementoSuelto = (prop.cemento / partesTotales) * volumenSueltoTotal
    $: volumenArena = (prop.arena / partesTotales) * volumenSueltoTotal
    $: volumenGrava = (prop.grava / partesTotales) * volumenSueltoTotal
    $: cementoKg = volumenCementoSuelto * DENSIDAD_CEMENTO_SUELTO
    $: bolsasCemento = Math.ceil(cementoKg / KG_POR_BOLSA)
    $: aguaLitros = cementoKg * prop.aguaCementoRatio

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        volumenM3 = 1
        proporcionKey = '1-2-3'
        porcentajeDesperdicio = 5
    }
</script>

<div class="agregados-calculadora">
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            Proporción cemento : arena : grava
        </label>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-2 mb-3">
            {#each Object.keys(PROPORCIONES) as key}
                <button
                    type="button"
                    class="tool-chip"
                    class:tool-chip-active={proporcionKey === key}
                    on:click={() => (proporcionKey = key as keyof typeof PROPORCIONES)}
                >
                    {PROPORCIONES[key].label}
                </button>
            {/each}
        </div>
        <p class="text-xs text-black/55 dark:text-white/55">
            <strong>{prop.label}:</strong> {prop.uso} ({prop.resistencia})
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Volumen de hormigón (m³)
            </span>
            <input type="number" bind:value={volumenM3} step="0.1" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Desperdicio (%)
            </span>
            <input type="number" bind:value={porcentajeDesperdicio} step="1" min="0" max="30" class="tool-input" />
        </label>
    </div>

    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Resultado para {fmt(volumenTotal, 2)} m³ de hormigón ({prop.label})
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Cemento</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{bolsasCemento}</p>
                <p class="text-xs text-black/50 dark:text-white/50">bolsas × 42.5 kg</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Arena</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(volumenArena, 2)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">m³</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Grava</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(volumenGrava, 2)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">m³</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Agua</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(aguaLitros, 0)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">litros</p>
            </div>
        </div>

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            Factor de compactación 1.5 aplicado (los materiales sueltos ocupan ~50% más
            volumen que el hormigón fraguado). Relación a/c: {prop.aguaCementoRatio}.
            Ajustá según granulometría real y humedad del agregado.
        </p>
    </div>

    <div class="mt-4 text-right">
        <button type="button" on:click={reset} class="text-sm text-black/55 dark:text-white/55 hover:text-[var(--primary)] transition">
            Reiniciar valores
        </button>
    </div>
</div>
