<script lang="ts">
    /**
     * Calculadora de amortización de maquinaria pesada.
     *
     * Dos métodos:
     *   - Línea recta: depreciación uniforme por año durante la vida útil.
     *   - Horómetro: depreciación por hora efectiva de operación.
     *
     * Fórmulas:
     *   Depreciación anual = (Precio - Valor residual) / Vida útil años
     *   Depreciación/hora  = Depreciación anual / Horas por año
     *   Total horas vida   = Vida útil × Horas por año
     *   Depr./hora (horóm) = (Precio - Valor residual) / Total horas vida
     */

    type Metodo = 'linea-recta' | 'horometro'

    let precioCompra = 150000
    let valorResidual = 22500        // 15% típico
    let vidaUtilAnios = 10
    let horasPorAnio = 2000
    let metodo: Metodo = 'linea-recta'

    $: baseAmortizable = Math.max(0, precioCompra - valorResidual)
    $: depreciacionAnual = baseAmortizable / vidaUtilAnios
    $: depreciacionMensual = depreciacionAnual / 12
    $: totalHorasVida = vidaUtilAnios * horasPorAnio
    $: depreciacionHora = totalHorasVida > 0 ? baseAmortizable / totalHorasVida : 0

    // Tabla de valor contable por año
    $: tablaValorContable = Array.from({ length: vidaUtilAnios }, (_, i) => {
        const anio = i + 1
        const acumulada = depreciacionAnual * anio
        const valor = Math.max(valorResidual, precioCompra - acumulada)
        return {
            anio,
            depreciacionAcumulada: acumulada,
            valorContable: valor,
        }
    })

    const fmt = (n: number, decimals = 0) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        precioCompra = 150000
        valorResidual = 22500
        vidaUtilAnios = 10
        horasPorAnio = 2000
        metodo = 'linea-recta'
    }

    function setResidualPct(pct: number) {
        valorResidual = Math.round(precioCompra * pct)
    }
</script>

<div class="amortizacion-calculadora">
    <!-- Selector de método -->
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            Método de amortización
        </label>
        <div class="grid grid-cols-2 gap-2">
            <button
                type="button"
                class="tool-chip"
                class:tool-chip-active={metodo === 'linea-recta'}
                on:click={() => (metodo = 'linea-recta')}
            >
                Línea recta (por año)
            </button>
            <button
                type="button"
                class="tool-chip"
                class:tool-chip-active={metodo === 'horometro'}
                on:click={() => (metodo = 'horometro')}
            >
                Horómetro (por hora)
            </button>
        </div>
    </div>

    <!-- Inputs principales -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Precio de compra (USD)
            </span>
            <input
                type="number"
                bind:value={precioCompra}
                step="1000"
                min="1000"
                class="tool-input"
            />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Valor residual estimado (USD)
            </span>
            <input
                type="number"
                bind:value={valorResidual}
                step="500"
                min="0"
                class="tool-input"
            />
            <div class="flex gap-1 mt-2">
                <button type="button" class="tool-chip py-1 px-2 text-[0.7rem]" on:click={() => setResidualPct(0.10)}>10%</button>
                <button type="button" class="tool-chip py-1 px-2 text-[0.7rem]" on:click={() => setResidualPct(0.15)}>15%</button>
                <button type="button" class="tool-chip py-1 px-2 text-[0.7rem]" on:click={() => setResidualPct(0.20)}>20%</button>
            </div>
        </label>
    </div>

    <!-- Vida útil + horas anuales -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Vida útil (años)
            </span>
            <input
                type="number"
                bind:value={vidaUtilAnios}
                step="1"
                min="1"
                max="30"
                class="tool-input"
            />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Típico: excavadoras 8-12 años, camiones 6-10 años, cargadores 10-15 años.
            </span>
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Horas de uso por año
            </span>
            <input
                type="number"
                bind:value={horasPorAnio}
                step="100"
                min="100"
                class="tool-input"
            />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Típico obra civil: 1.500-2.000 h/año · Minería 24/7: 4.000-6.000 h/año.
            </span>
        </label>
    </div>

    <!-- Resultados -->
    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Depreciación calculada
        </p>

        <div class="mb-6">
            {#if metodo === 'linea-recta'}
                <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                    Depreciación anual (línea recta)
                </p>
                <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                    USD {fmt(depreciacionAnual, 0)}
                </p>
                <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                    ({fmt(precioCompra, 0)} − {fmt(valorResidual, 0)}) ÷ {vidaUtilAnios} años
                </p>
            {:else}
                <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                    Depreciación por hora (horómetro)
                </p>
                <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                    USD {fmt(depreciacionHora, 2)}
                </p>
                <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                    Base {fmt(baseAmortizable, 0)} ÷ {fmt(totalHorasVida, 0)} horas totales de vida útil
                </p>
            {/if}
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Depr. anual</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(depreciacionAnual, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">USD/año</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Depr. mensual</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(depreciacionMensual, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">USD/mes</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Depr. por hora</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(depreciacionHora, 2)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">USD/hora</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Horas totales</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(totalHorasVida, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">vida útil</p>
            </div>
        </div>

        <!-- Tabla de valor contable -->
        <div class="mt-6 overflow-x-auto">
            <p class="text-xs uppercase tracking-[0.14em] font-semibold text-black/60 dark:text-white/60 mb-2">
                Evolución del valor contable
            </p>
            <table class="w-full text-sm">
                <thead>
                    <tr class="border-b border-black/10 dark:border-white/10">
                        <th class="text-left py-2 px-2 text-black/60 dark:text-white/60 font-semibold text-xs uppercase tracking-wide">Año</th>
                        <th class="text-right py-2 px-2 text-black/60 dark:text-white/60 font-semibold text-xs uppercase tracking-wide">Depr. acum.</th>
                        <th class="text-right py-2 px-2 text-black/60 dark:text-white/60 font-semibold text-xs uppercase tracking-wide">Valor contable</th>
                    </tr>
                </thead>
                <tbody>
                    {#each tablaValorContable as row}
                        <tr class="border-b border-black/5 dark:border-white/5">
                            <td class="py-1.5 px-2">Año {row.anio}</td>
                            <td class="py-1.5 px-2 text-right">USD {fmt(row.depreciacionAcumulada, 0)}</td>
                            <td class="py-1.5 px-2 text-right font-semibold">USD {fmt(row.valorContable, 0)}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            Método <strong>línea recta</strong>: depreciación uniforme cada año. Simple y aceptado por la mayoría de fiscos.
            Método <strong>horómetro</strong>: depreciación proporcional a uso real. Más preciso para maquinaria con uso variable.
            La depreciación por hora es el input clave para calcular el <strong>costo/hora de operación</strong>.
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
