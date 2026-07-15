<script lang="ts">
    /**
     * Calculadora de costo por hora de operación de maquinaria pesada.
     *
     * Modelo estándar de la industria: costo por hora = suma de 5 componentes:
     *   1. Depreciación (compra menos residual dividida por vida útil en horas)
     *   2. Combustible (consumo × precio)
     *   3. Mantenimiento y repuestos (fracción del precio de compra por hora)
     *   4. Operador (salario + cargas sociales por hora)
     *   5. Overhead / financiamiento (margen de administración y seguros)
     *
     * Los valores por defecto son para una excavadora clase 20 toneladas típica
     * (Caterpillar 320D, Volvo EC210, Komatsu PC200 y equivalentes) en Latam.
     */

    // Precio de compra y vida útil
    let precioCompra = 180000 // USD
    let valorResidualPct = 20 // % del precio de compra al final de vida útil
    let vidaUtilAnios = 10
    let horasOperacionAnio = 1500 // horas/año

    // Combustible
    let consumoLitrosHora = 22
    let precioCombustible = 1.1 // USD por litro

    // Mantenimiento (fracción del precio de compra por año)
    let mantenimientoAnualPct = 8 // % del precio de compra por año

    // Operador
    let salarioOperadorMes = 1200 // USD/mes
    let cargasSocialesPct = 30 // % adicional sobre el salario
    let horasOperadorMes = 176 // horas laborales al mes (44 hs/sem × 4)

    // Overhead / financiamiento
    let overheadPct = 10 // % de todo lo anterior para admin, seguros, taxes

    // Cálculos derivados
    $: vidaUtilHoras = vidaUtilAnios * horasOperacionAnio
    $: valorResidual = (precioCompra * valorResidualPct) / 100
    $: depreciacionPorHora = vidaUtilHoras > 0 ? (precioCompra - valorResidual) / vidaUtilHoras : 0

    $: combustiblePorHora = consumoLitrosHora * precioCombustible

    $: mantenimientoAnual = (precioCompra * mantenimientoAnualPct) / 100
    $: mantenimientoPorHora = horasOperacionAnio > 0 ? mantenimientoAnual / horasOperacionAnio : 0

    $: costoOperadorConCargas = salarioOperadorMes * (1 + cargasSocialesPct / 100)
    $: operadorPorHora = horasOperadorMes > 0 ? costoOperadorConCargas / horasOperadorMes : 0

    $: subtotal = depreciacionPorHora + combustiblePorHora + mantenimientoPorHora + operadorPorHora
    $: overhead = (subtotal * overheadPct) / 100
    $: costoPorHoraTotal = subtotal + overhead

    // Formato de moneda
    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', {
                  maximumFractionDigits: decimals,
                  minimumFractionDigits: decimals,
              })
            : '—'

    const fmtInt = (n: number) =>
        Number.isFinite(n) ? Math.round(n).toLocaleString('es-AR') : '—'

    function reset() {
        precioCompra = 180000
        valorResidualPct = 20
        vidaUtilAnios = 10
        horasOperacionAnio = 1500
        consumoLitrosHora = 22
        precioCombustible = 1.1
        mantenimientoAnualPct = 8
        salarioOperadorMes = 1200
        cargasSocialesPct = 30
        horasOperadorMes = 176
        overheadPct = 10
    }
</script>

<div class="costo-hora-calculadora">
    <p class="text-sm text-black/60 dark:text-white/60 mb-6 leading-relaxed">
        Los valores por defecto son para una excavadora clase 20 toneladas
        (Cat 320D, Volvo EC210, Komatsu PC200 y similares). Ajustá cada input a los
        números reales de tu operación.
    </p>

    <!-- Máquina y vida útil -->
    <div class="mb-6">
        <h3 class="text-sm font-semibold uppercase tracking-wide text-black/70 dark:text-white/70 mb-3">
            🏗️ Máquina y vida útil
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Precio de compra (USD)
                </span>
                <input type="number" bind:value={precioCompra} step="1000" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Valor residual (%)
                </span>
                <input type="number" bind:value={valorResidualPct} step="1" min="0" max="80" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Vida útil (años)
                </span>
                <input type="number" bind:value={vidaUtilAnios} step="1" min="1" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Horas de operación al año
                </span>
                <input type="number" bind:value={horasOperacionAnio} step="50" min="0" class="tool-input" />
            </label>
        </div>
    </div>

    <!-- Combustible -->
    <div class="mb-6">
        <h3 class="text-sm font-semibold uppercase tracking-wide text-black/70 dark:text-white/70 mb-3">
            ⛽ Combustible
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Consumo (litros/hora)
                </span>
                <input type="number" bind:value={consumoLitrosHora} step="0.5" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Precio combustible (USD/litro)
                </span>
                <input type="number" bind:value={precioCombustible} step="0.05" min="0" class="tool-input" />
            </label>
        </div>
    </div>

    <!-- Mantenimiento y operador -->
    <div class="mb-6">
        <h3 class="text-sm font-semibold uppercase tracking-wide text-black/70 dark:text-white/70 mb-3">
            🔧 Mantenimiento y operador
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Mantenimiento anual (% precio)
                </span>
                <input type="number" bind:value={mantenimientoAnualPct} step="0.5" min="0" max="30" class="tool-input" />
                <span class="text-xs text-black/45 dark:text-white/45 mt-1 block">
                    Fabricante recomienda 6-10%
                </span>
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Salario operador (USD/mes)
                </span>
                <input type="number" bind:value={salarioOperadorMes} step="50" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Cargas sociales (%)
                </span>
                <input type="number" bind:value={cargasSocialesPct} step="1" min="0" max="80" class="tool-input" />
                <span class="text-xs text-black/45 dark:text-white/45 mt-1 block">
                    Aportes patronales del país
                </span>
            </label>
        </div>
    </div>

    <!-- Overhead -->
    <div class="mb-8">
        <h3 class="text-sm font-semibold uppercase tracking-wide text-black/70 dark:text-white/70 mb-3">
            📊 Margen administrativo
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Overhead / financiamiento (%)
                </span>
                <input type="number" bind:value={overheadPct} step="1" min="0" max="50" class="tool-input" />
                <span class="text-xs text-black/45 dark:text-white/45 mt-1 block">
                    Seguros, taxes, admin. Típico 8-15%
                </span>
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Horas laborales del operador/mes
                </span>
                <input type="number" bind:value={horasOperadorMes} step="8" min="0" class="tool-input" />
                <span class="text-xs text-black/45 dark:text-white/45 mt-1 block">
                    Base 176 hs = 44 hs × 4 semanas
                </span>
            </label>
        </div>
    </div>

    <!-- Resultados -->
    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Costo total por hora de operación
        </p>

        <div class="mb-6">
            <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                USD {fmt(costoPorHoraTotal, 2)}
                <span class="text-xl md:text-2xl">/hora</span>
            </p>
            <p class="text-sm text-black/55 dark:text-white/55 mt-1">
                Vida útil total estimada: {fmtInt(vidaUtilHoras)} horas ({vidaUtilAnios} años ×
                {fmtInt(horasOperacionAnio)} hs/año)
            </p>
        </div>

        <div class="mb-2 text-sm font-semibold text-black/70 dark:text-white/70 uppercase tracking-wide text-[0.72rem]">
            Descomposición del costo
        </div>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Depreciación</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    ${fmt(depreciacionPorHora, 2)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">/hora</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Combustible</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    ${fmt(combustiblePorHora, 2)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">/hora</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Mantenimiento</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    ${fmt(mantenimientoPorHora, 2)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">/hora</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Operador</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    ${fmt(operadorPorHora, 2)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">/hora</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Overhead</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    ${fmt(overhead, 2)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">/hora</p>
            </div>
        </div>

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            Base para presupuestar servicios de excavación, alquiler por hora o análisis
            de rentabilidad de flota. Los precios están en USD para facilitar comparaciones
            internacionales.
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
