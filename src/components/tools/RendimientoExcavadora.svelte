<script lang="ts">
    /**
     * Calculadora de rendimiento (m³/hora) de excavadora.
     *
     * Fórmula estándar:
     *   Q = (3600 × C × Ff × Fh × Fo) / T
     *
     *   Q  = producción efectiva m³/hora
     *   C  = capacidad del cucharón (m³)
     *   Ff = factor de llenado del cucharón (0.7-1.0)
     *   Fh = factor de eficiencia horaria (min. trabajados / 60)
     *   Fo = factor de eficiencia del operador (0.60-0.90)
     *   T  = tiempo de ciclo (segundos)
     */

    let capacidadCucharon = 1.0
    let factorLlenado = 0.90
    let tiempoCiclo = 20
    let minutosTrabajadosPorHora = 50
    let factorOperador = 0.80

    $: factorHorario = minutosTrabajadosPorHora / 60
    $: produccionTeorica = (3600 * capacidadCucharon * factorLlenado) / tiempoCiclo
    $: produccionRealPorHora = produccionTeorica * factorHorario * factorOperador
    $: produccionPorDia8h = produccionRealPorHora * 8
    $: produccionPorDia10h = produccionRealPorHora * 10
    $: produccionMensual = produccionRealPorHora * 8 * 22

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        capacidadCucharon = 1.0
        factorLlenado = 0.90
        tiempoCiclo = 20
        minutosTrabajadosPorHora = 50
        factorOperador = 0.80
    }
</script>

<div class="rendimiento-calculadora">
    <!-- Inputs principales -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Capacidad del cucharón (m³)
            </span>
            <input
                type="number"
                bind:value={capacidadCucharon}
                step="0.1"
                min="0"
                class="tool-input"
            />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Tiempo de ciclo (segundos)
            </span>
            <input
                type="number"
                bind:value={tiempoCiclo}
                step="1"
                min="5"
                max="60"
                class="tool-input"
            />
        </label>
    </div>

    <!-- Factores de corrección -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Factor de llenado
            </span>
            <input
                type="number"
                bind:value={factorLlenado}
                step="0.05"
                min="0.5"
                max="1.1"
                class="tool-input"
            />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Tierra suelta: 0.9-1.0 · Arcilla húmeda: 0.85 · Roca fragmentada: 0.6-0.7
            </span>
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Min. trabajados / hora
            </span>
            <input
                type="number"
                bind:value={minutosTrabajadosPorHora}
                step="1"
                min="30"
                max="60"
                class="tool-input"
            />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Ideal: 50-55 min · Con demoras normales: 45-50 min
            </span>
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Factor operador
            </span>
            <input
                type="number"
                bind:value={factorOperador}
                step="0.05"
                min="0.5"
                max="1.0"
                class="tool-input"
            />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Experto: 0.85-0.90 · Normal: 0.75-0.80 · Novato: 0.60-0.70
            </span>
        </label>
    </div>

    <!-- Resultados -->
    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Producción efectiva
        </p>

        <div class="mb-6">
            <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                Producción real por hora
            </p>
            <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                {fmt(produccionRealPorHora, 1)} <span class="text-2xl md:text-3xl">m³/h</span>
            </p>
            <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                Producción teórica (100% eficiencia): {fmt(produccionTeorica, 1)} m³/h
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Jornada 8 h</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(produccionPorDia8h, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">m³/día</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Jornada 10 h</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(produccionPorDia10h, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">m³/día</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Mensual (22 días × 8h)</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(produccionMensual, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">m³/mes</p>
            </div>
        </div>

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            Fórmula: <code>Q = (3600 × C × Ff) / T × Fh × Fo</code>. Los factores dependen
            del tipo de suelo, experiencia del operador y condiciones del sitio. Ajustá
            según tu contexto para estimados realistas.
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
