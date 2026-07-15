<script lang="ts">
    /**
     * Calculadora de ladrillos por metro cuadrado.
     *
     * Soporta 5 tipos de ladrillo/bloque comunes en Latam con densidades
     * verificadas por dimensiones nominales + juntas de mortero típicas
     * (1.5 cm horizontal + 1 cm vertical).
     *
     * Devuelve:
     *   - m² totales de pared
     *   - Cantidad de ladrillos/bloques (con desperdicio incluido)
     *   - Volumen de mortero necesario
     *   - Bolsas de cemento y kg de arena
     */

    type BrickType = 'comun' | 'hueco-cerámico' | 'macizo' | 'bloque-concreto' | 'termoarcilla'

    interface BrickSpec {
        label: string
        description: string
        perM2: number // Unidades por m² con juntas típicas
        mortarL: number // Litros de mortero por m² de pared
    }

    // Especificaciones basadas en normas y catálogos de fabricantes Latam
    const BRICKS: Record<BrickType, BrickSpec> = {
        comun: {
            label: 'Ladrillo común (24×11.5×6 cm)',
            description: 'Ladrillo cerámico tradicional',
            perM2: 65,
            mortarL: 30,
        },
        'hueco-cerámico': {
            label: 'Ladrillo hueco cerámico (33×18×18 cm)',
            description: 'Hueco perforado, aligerado',
            perM2: 16,
            mortarL: 22,
        },
        macizo: {
            label: 'Ladrillo macizo (24×11.5×5.5 cm)',
            description: 'Sin perforaciones, alta resistencia',
            perM2: 72,
            mortarL: 32,
        },
        'bloque-concreto': {
            label: 'Bloque de concreto (40×20×15 cm)',
            description: 'Bloque hormigón vibrado',
            perM2: 12.5,
            mortarL: 18,
        },
        termoarcilla: {
            label: 'Termoarcilla (30×19×24 cm)',
            description: 'Cerámico aislante térmico',
            perM2: 16,
            mortarL: 20,
        },
    }

    let brickType: BrickType = 'comun'
    let largoPared = 5
    let altoPared = 2.5
    let cantidadParedes = 1
    let porcentajeDesperdicio = 5
    let restarAberturas = 0 // m² de puertas/ventanas a descontar

    // Dosificación de mortero de asiento típica (1:4 cemento:arena)
    const CEMENTO_KG_POR_M3_MORTERO = 350
    const ARENA_KG_POR_M3_MORTERO = 1400
    const KG_POR_BOLSA_CEMENTO = 42.5

    // Cálculos derivados
    $: metrosCuadrados = Math.max(0, largoPared * altoPared * cantidadParedes - restarAberturas)
    $: brickSpec = BRICKS[brickType]
    $: cantidadBase = metrosCuadrados * brickSpec.perM2
    $: cantidadConDesperdicio = Math.ceil(cantidadBase * (1 + porcentajeDesperdicio / 100))

    $: volumenMorteroLitros = metrosCuadrados * brickSpec.mortarL
    $: volumenMorteroM3 = volumenMorteroLitros / 1000
    $: cementoKg = volumenMorteroM3 * CEMENTO_KG_POR_M3_MORTERO
    $: bolsasCemento = Math.ceil(cementoKg / KG_POR_BOLSA_CEMENTO)
    $: arenaKg = volumenMorteroM3 * ARENA_KG_POR_M3_MORTERO

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        brickType = 'comun'
        largoPared = 5
        altoPared = 2.5
        cantidadParedes = 1
        porcentajeDesperdicio = 5
        restarAberturas = 0
    }
</script>

<div class="ladrillos-calculadora">
    <!-- Selector de tipo de ladrillo -->
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            Tipo de ladrillo o bloque
        </label>
        <select
            bind:value={brickType}
            class="tool-input"
        >
            {#each Object.entries(BRICKS) as [key, spec]}
                <option value={key}>{spec.label}</option>
            {/each}
        </select>
        <p class="text-xs text-black/50 dark:text-white/50 mt-1.5">
            {brickSpec.description} · {brickSpec.perM2} unidades/m² (referencia)
        </p>
    </div>

    <!-- Dimensiones de la pared -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Largo pared (m)
            </span>
            <input
                type="number"
                bind:value={largoPared}
                step="0.1"
                min="0"
                class="tool-input"
            />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Alto pared (m)
            </span>
            <input
                type="number"
                bind:value={altoPared}
                step="0.1"
                min="0"
                class="tool-input"
            />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Cantidad de paredes iguales
            </span>
            <input
                type="number"
                bind:value={cantidadParedes}
                step="1"
                min="1"
                class="tool-input"
            />
        </label>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Aberturas a descontar (m²)
            </span>
            <input
                type="number"
                bind:value={restarAberturas}
                step="0.1"
                min="0"
                class="tool-input"
            />
            <span class="text-xs text-black/45 dark:text-white/45 mt-1 block">
                Sumá m² de puertas, ventanas, etc.
            </span>
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
            <span class="text-xs text-black/45 dark:text-white/45 mt-1 block">
                Recomendado 5-10% por roturas
            </span>
        </label>
    </div>

    <!-- Resultados -->
    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Resultado
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
                <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                    Superficie total de pared
                </p>
                <p class="text-3xl md:text-4xl font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(metrosCuadrados, 2)} <span class="text-xl md:text-2xl">m²</span>
                </p>
            </div>
            <div>
                <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                    Ladrillos necesarios ({porcentajeDesperdicio}% desperdicio)
                </p>
                <p class="text-3xl md:text-4xl font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(cantidadConDesperdicio, 0)} <span class="text-xl md:text-2xl">u</span>
                </p>
                <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                    Base sin desperdicio: {fmt(cantidadBase, 0)}
                </p>
            </div>
        </div>

        <div class="mb-2 text-sm font-semibold text-black/70 dark:text-white/70 uppercase tracking-wide text-[0.72rem]">
            Mortero de asiento (mezcla 1:4)
        </div>
        <div class="grid grid-cols-3 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Mortero</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(volumenMorteroLitros, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">litros</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Cemento</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(bolsasCemento, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">bolsas 42.5 kg</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Arena</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(arenaKg, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">kg</p>
            </div>
        </div>

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            Cantidades por m² basadas en las dimensiones nominales del ladrillo más
            junta de mortero de 1-1.5 cm. Los valores reales pueden variar según el
            fabricante y la técnica del albañil.
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
