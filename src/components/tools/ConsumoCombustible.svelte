<script lang="ts">
    /**
     * Calculadora de consumo de combustible de maquinaria pesada.
     *
     * Consumos típicos (L/h) por tipo y tamaño de máquina.
     * Referencias: manuales de operación Cat, Komatsu, Volvo, John Deere.
     */

    type TipoMaquina = 'excavadora' | 'cargador' | 'bulldozer' | 'motoniveladora' | 'retroexcavadora' | 'camion-volquete'
    type Tamaño = 'chica' | 'mediana' | 'grande'

    // Consumo típico L/h [chica, mediana, grande]
    const CONSUMOS: Record<TipoMaquina, { chica: number; mediana: number; grande: number; labels: string[] }> = {
        excavadora: {
            chica: 10, mediana: 20, grande: 32,
            labels: ['5-10 t (mini)', '20-25 t (media)', '35 t+ (grande)']
        },
        cargador: {
            chica: 12, mediana: 22, grande: 38,
            labels: ['<10 t', '10-20 t', '20 t+']
        },
        bulldozer: {
            chica: 22, mediana: 42, grande: 65,
            labels: ['D5-D6', 'D7-D8', 'D9-D11']
        },
        motoniveladora: {
            chica: 12, mediana: 20, grande: 30,
            labels: ['120 kW', '150-200 kW', '250 kW+']
        },
        retroexcavadora: {
            chica: 8, mediana: 12, grande: 18,
            labels: ['<70 kW', '70-90 kW', '90 kW+']
        },
        'camion-volquete': {
            chica: 15, mediana: 25, grande: 40,
            labels: ['<20 t (obra)', '20-40 t', '40 t+ (minería)']
        },
    }

    const TIPOS: { v: TipoMaquina; label: string }[] = [
        { v: 'excavadora', label: 'Excavadora' },
        { v: 'cargador', label: 'Cargador frontal' },
        { v: 'bulldozer', label: 'Bulldozer' },
        { v: 'motoniveladora', label: 'Motoniveladora' },
        { v: 'retroexcavadora', label: 'Retroexcavadora' },
        { v: 'camion-volquete', label: 'Camión volquete' },
    ]

    let tipo: TipoMaquina = 'excavadora'
    let tamaño: Tamaño = 'mediana'
    let horas = 8
    let precioLitro = 1.20

    $: consumoLh = CONSUMOS[tipo][tamaño]
    $: litrosTotales = consumoLh * horas
    $: costoTotal = litrosTotales * precioLitro
    $: costoPorHora = consumoLh * precioLitro

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        tipo = 'excavadora'
        tamaño = 'mediana'
        horas = 8
        precioLitro = 1.20
    }
</script>

<div class="combustible-calculadora">
    <!-- Selector de tipo de máquina -->
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            Tipo de máquina
        </label>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
            {#each TIPOS as opt}
                <button
                    type="button"
                    class="tool-chip"
                    class:tool-chip-active={tipo === opt.v}
                    on:click={() => (tipo = opt.v)}
                >
                    {opt.label}
                </button>
            {/each}
        </div>
    </div>

    <!-- Selector de tamaño -->
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            Tamaño / rango
        </label>
        <div class="grid grid-cols-3 gap-2">
            {#each ['chica', 'mediana', 'grande'] as t, i}
                <button
                    type="button"
                    class="tool-chip flex-col py-2.5"
                    class:tool-chip-active={tamaño === t}
                    on:click={() => (tamaño = t as Tamaño)}
                >
                    <span class="capitalize block">{t}</span>
                    <span class="text-[0.6rem] opacity-70 mt-0.5 block">
                        {CONSUMOS[tipo].labels[i]}
                    </span>
                </button>
            {/each}
        </div>
    </div>

    <!-- Inputs -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Horas de operación
            </span>
            <input
                type="number"
                bind:value={horas}
                step="1"
                min="1"
                class="tool-input"
            />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Precio del diesel (por litro)
            </span>
            <input
                type="number"
                bind:value={precioLitro}
                step="0.05"
                min="0"
                class="tool-input"
                placeholder="1.20"
            />
        </label>
    </div>

    <!-- Resultados -->
    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Consumo y costo
        </p>

        <div class="mb-6">
            <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                Litros totales consumidos
            </p>
            <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                {fmt(litrosTotales, 1)} <span class="text-2xl md:text-3xl">L</span>
            </p>
            <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                {consumoLh} L/hora × {horas} horas
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Consumo por hora</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {consumoLh}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">L/h</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Costo por hora</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(costoPorHora, 2)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">precio × L/h</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Costo total</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(costoTotal, 2)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">total operación</p>
            </div>
        </div>

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            Los consumos son promedios estimados en operación normal. El consumo real
            varía según edad del equipo, condiciones del terreno, altitud, calidad del
            combustible y hábitos del operador. Para presupuestos formales, medí el
            consumo real de tu equipo con horómetro.
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
