<script lang="ts">
    /**
     * Calculadora de cubicaje de hormigón.
     *
     * Soporta 4 tipos de elementos estructurales:
     *   - Losa (largo × ancho × espesor)
     *   - Columna (base × altura × altura de columna)
     *   - Viga (largo × ancho × alto)
     *   - Zapata (largo × ancho × altura)
     *
     * Devuelve:
     *   - m³ de hormigón total
     *   - Bolsas de cemento (asumiendo dosificación 1:2:3 por defecto)
     *   - Kg de arena y grava
     *   - Litros de agua
     */

    type ElementType = 'losa' | 'columna' | 'viga' | 'zapata'

    let elementType: ElementType = 'losa'
    let quantity = 1

    // Losa / Zapata: largo × ancho × espesor
    let largo = 5
    let ancho = 4
    let espesor = 0.12

    // Columna / Viga: seccion × altura
    let seccionA = 0.3
    let seccionB = 0.3
    let altura = 3

    // Dosificación por defecto para hormigón estructural típico
    // Ajustable por el usuario en versión avanzada
    const DOSIFICACION = {
        cementoKgPorM3: 350,
        arenaKgPorM3: 700,
        gravaKgPorM3: 1100,
        aguaLitrosPorM3: 180,
    }
    const KG_POR_BOLSA_CEMENTO = 42.5

    // 5% de desperdicio recomendado (norma técnica típica)
    let porcentajeDesperdicio = 5

    // Cálculos derivados
    $: volumenUnitario = (() => {
        if (elementType === 'losa') return largo * ancho * espesor
        if (elementType === 'zapata') return largo * ancho * espesor
        if (elementType === 'columna') return seccionA * seccionB * altura
        if (elementType === 'viga') return seccionA * seccionB * altura
        return 0
    })()

    $: volumenBruto = volumenUnitario * quantity
    $: volumenConDesperdicio = volumenBruto * (1 + porcentajeDesperdicio / 100)

    $: cementoKg = volumenConDesperdicio * DOSIFICACION.cementoKgPorM3
    $: bolsasCemento = Math.ceil(cementoKg / KG_POR_BOLSA_CEMENTO)
    $: arenaKg = volumenConDesperdicio * DOSIFICACION.arenaKgPorM3
    $: gravaKg = volumenConDesperdicio * DOSIFICACION.gravaKgPorM3
    $: aguaLitros = volumenConDesperdicio * DOSIFICACION.aguaLitrosPorM3

    // Formateo
    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        elementType = 'losa'
        quantity = 1
        largo = 5
        ancho = 4
        espesor = 0.12
        seccionA = 0.3
        seccionB = 0.3
        altura = 3
        porcentajeDesperdicio = 5
    }
</script>

<div class="cubicaje-calculadora">
    <!-- Selector de tipo de elemento -->
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            ¿Qué vas a calcular?
        </label>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
            {#each [{ v: 'losa', label: 'Losa' }, { v: 'columna', label: 'Columna' }, { v: 'viga', label: 'Viga' }, { v: 'zapata', label: 'Zapata' }] as opt}
                <button
                    type="button"
                    class="px-3 py-2.5 rounded-lg border text-sm font-medium transition"
                    class:border-primary={elementType === opt.v}
                    class:bg-primary-tint={elementType === opt.v}
                    class:border-default={elementType !== opt.v}
                    on:click={() => (elementType = opt.v as ElementType)}
                >
                    {opt.label}
                </button>
            {/each}
        </div>
    </div>

    <!-- Inputs según tipo -->
    {#if elementType === 'losa' || elementType === 'zapata'}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Largo (m)
                </span>
                <input
                    type="number"
                    bind:value={largo}
                    step="0.1"
                    min="0"
                    class="w-full px-3 py-2.5 rounded-lg border border-black/[0.12] dark:border-white/[0.12] bg-white dark:bg-black/20 text-base focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
                />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Ancho (m)
                </span>
                <input
                    type="number"
                    bind:value={ancho}
                    step="0.1"
                    min="0"
                    class="w-full px-3 py-2.5 rounded-lg border border-black/[0.12] dark:border-white/[0.12] bg-white dark:bg-black/20 text-base focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
                />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    {elementType === 'losa' ? 'Espesor (m)' : 'Altura (m)'}
                </span>
                <input
                    type="number"
                    bind:value={espesor}
                    step="0.01"
                    min="0"
                    class="w-full px-3 py-2.5 rounded-lg border border-black/[0.12] dark:border-white/[0.12] bg-white dark:bg-black/20 text-base focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
                />
            </label>
        </div>
    {:else}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Sección A (m)
                </span>
                <input
                    type="number"
                    bind:value={seccionA}
                    step="0.01"
                    min="0"
                    class="w-full px-3 py-2.5 rounded-lg border border-black/[0.12] dark:border-white/[0.12] bg-white dark:bg-black/20 text-base focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
                />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Sección B (m)
                </span>
                <input
                    type="number"
                    bind:value={seccionB}
                    step="0.01"
                    min="0"
                    class="w-full px-3 py-2.5 rounded-lg border border-black/[0.12] dark:border-white/[0.12] bg-white dark:bg-black/20 text-base focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
                />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Altura / Largo (m)
                </span>
                <input
                    type="number"
                    bind:value={altura}
                    step="0.1"
                    min="0"
                    class="w-full px-3 py-2.5 rounded-lg border border-black/[0.12] dark:border-white/[0.12] bg-white dark:bg-black/20 text-base focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
                />
            </label>
        </div>
    {/if}

    <!-- Cantidad + desperdicio -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Cantidad de piezas
            </span>
            <input
                type="number"
                bind:value={quantity}
                step="1"
                min="1"
                class="w-full px-3 py-2.5 rounded-lg border border-black/[0.12] dark:border-white/[0.12] bg-white dark:bg-black/20 text-base focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
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
                class="w-full px-3 py-2.5 rounded-lg border border-black/[0.12] dark:border-white/[0.12] bg-white dark:bg-black/20 text-base focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
            />
        </label>
    </div>

    <!-- Resultados -->
    <div class="p-5 md:p-6 rounded-xl bg-[var(--primary)]/[0.05] border border-[var(--primary)]/20">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Resultado
        </p>

        <div class="mb-6">
            <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                Volumen total de hormigón (con {porcentajeDesperdicio}% de desperdicio)
            </p>
            <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                {fmt(volumenConDesperdicio, 3)} <span class="text-2xl md:text-3xl">m³</span>
            </p>
            {#if porcentajeDesperdicio > 0}
                <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                    Bruto sin desperdicio: {fmt(volumenBruto, 3)} m³
                </p>
            {/if}
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="p-3 rounded-lg bg-white/60 dark:bg-black/20 backdrop-blur-sm">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Cemento</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(bolsasCemento, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">bolsas de 42.5 kg</p>
            </div>
            <div class="p-3 rounded-lg bg-white/60 dark:bg-black/20 backdrop-blur-sm">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Arena</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(arenaKg, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">kg</p>
            </div>
            <div class="p-3 rounded-lg bg-white/60 dark:bg-black/20 backdrop-blur-sm">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Grava</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(gravaKg, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">kg</p>
            </div>
            <div class="p-3 rounded-lg bg-white/60 dark:bg-black/20 backdrop-blur-sm">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Agua</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(aguaLitros, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">litros</p>
            </div>
        </div>

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            Basado en dosificación estándar 1:2:3 para hormigón estructural (resistencia
            aproximada H21/H25). Ajustá la mezcla según el uso real y las normas locales.
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

<style>
    /* Utility classes locales para los botones (Tailwind arbitrary values funciona pero
       aquí evitamos la complejidad y usamos CSS directo para las variantes de selección) */
    .border-primary {
        border-color: var(--primary);
    }
    .border-default {
        border-color: rgba(0, 0, 0, 0.12);
    }
    :global(.dark) .border-default {
        border-color: rgba(255, 255, 255, 0.12);
    }
    .bg-primary-tint {
        background: color-mix(in oklab, var(--primary) 8%, transparent);
    }
</style>
