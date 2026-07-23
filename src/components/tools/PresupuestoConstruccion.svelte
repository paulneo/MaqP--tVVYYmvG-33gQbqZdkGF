<script lang="ts">
    /**
     * Calculadora de presupuesto de construcción por m² en Latam.
     *
     * Rangos por país y calidad (USD/m², actualizado 2026).
     * Fuentes: cámaras de construcción locales + relevamientos de mercado.
     * Los valores son referencia — el costo real varía por zona, materiales,
     * mano de obra local y complejidad del proyecto.
     */

    type Pais = 'peru' | 'mexico' | 'colombia' | 'argentina' | 'chile' | 'uruguay' | 'bolivia'
    type Calidad = 'economica' | 'estandar' | 'premium'

    const PAISES: { v: Pais; label: string; simbolo: string }[] = [
        { v: 'peru', label: 'Perú', simbolo: 'USD' },
        { v: 'mexico', label: 'México', simbolo: 'USD' },
        { v: 'colombia', label: 'Colombia', simbolo: 'USD' },
        { v: 'argentina', label: 'Argentina', simbolo: 'USD' },
        { v: 'chile', label: 'Chile', simbolo: 'USD' },
        { v: 'uruguay', label: 'Uruguay', simbolo: 'USD' },
        { v: 'bolivia', label: 'Bolivia', simbolo: 'USD' },
    ]

    // USD por m² — rangos típicos por calidad y país
    const COSTOS: Record<Pais, Record<Calidad, number>> = {
        peru:      { economica: 420, estandar: 650, premium: 1100 },
        mexico:    { economica: 500, estandar: 800, premium: 1400 },
        colombia:  { economica: 450, estandar: 720, premium: 1200 },
        argentina: { economica: 550, estandar: 900, premium: 1600 },
        chile:     { economica: 620, estandar: 1050, premium: 1800 },
        uruguay:   { economica: 680, estandar: 1150, premium: 2000 },
        bolivia:   { economica: 380, estandar: 600, premium: 950 },
    }

    // Desglose porcentual típico
    const DESGLOSE = {
        materiales: 0.42,
        manoObra: 0.32,
        equipos: 0.08,
        honorarios: 0.10,
        utilidad: 0.08,
    }

    let pais: Pais = 'peru'
    let calidad: Calidad = 'estandar'
    let metrosCuadrados = 80

    $: costoPorM2 = COSTOS[pais][calidad]
    $: costoTotal = costoPorM2 * metrosCuadrados
    $: costoMateriales = costoTotal * DESGLOSE.materiales
    $: costoManoObra = costoTotal * DESGLOSE.manoObra
    $: costoEquipos = costoTotal * DESGLOSE.equipos
    $: costoHonorarios = costoTotal * DESGLOSE.honorarios
    $: costoUtilidad = costoTotal * DESGLOSE.utilidad

    const fmt = (n: number, decimals = 0) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        pais = 'peru'
        calidad = 'estandar'
        metrosCuadrados = 80
    }
</script>

<div class="presupuesto-calculadora">
    <!-- Selector de país -->
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            País
        </label>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
            {#each PAISES as p}
                <button
                    type="button"
                    class="tool-chip"
                    class:tool-chip-active={pais === p.v}
                    on:click={() => (pais = p.v)}
                >
                    {p.label}
                </button>
            {/each}
        </div>
    </div>

    <!-- Selector de calidad -->
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            Calidad de construcción
        </label>
        <div class="grid grid-cols-3 gap-2">
            {#each ['economica', 'estandar', 'premium'] as c}
                <button
                    type="button"
                    class="tool-chip capitalize"
                    class:tool-chip-active={calidad === c}
                    on:click={() => (calidad = c as Calidad)}
                >
                    {c === 'economica' ? 'Económica' : c === 'estandar' ? 'Estándar' : 'Premium'}
                </button>
            {/each}
        </div>
        <p class="text-xs text-black/55 dark:text-white/55 mt-2">
            {#if calidad === 'economica'}
                <strong>Económica:</strong> materiales básicos, terminaciones simples, mano de obra local sin especialistas.
            {:else if calidad === 'estandar'}
                <strong>Estándar:</strong> materiales de calidad media, buenas terminaciones, planos profesionales, mano de obra calificada.
            {:else}
                <strong>Premium:</strong> materiales de primera, diseño arquitectónico, domótica básica, terminaciones importadas.
            {/if}
        </p>
    </div>

    <!-- Input m² -->
    <div class="mb-8">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Metros cuadrados a construir
            </span>
            <input
                type="number"
                bind:value={metrosCuadrados}
                step="5"
                min="10"
                class="tool-input"
            />
        </label>
    </div>

    <!-- Resultados -->
    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Presupuesto estimado
        </p>

        <div class="mb-6">
            <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                Costo total estimado
            </p>
            <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                USD {fmt(costoTotal, 0)}
            </p>
            <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                USD {costoPorM2} por m² × {metrosCuadrados} m² construidos
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Materiales</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(costoMateriales, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">42%</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Mano de obra</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(costoManoObra, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">32%</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Equipos</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(costoEquipos, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">8%</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Honorarios</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(costoHonorarios, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">10%</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Utilidad</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(costoUtilidad, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">8%</p>
            </div>
        </div>

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            Valores en <strong>USD</strong> como referencia para 2026. El costo real depende de zona geográfica (capital vs interior),
            terreno (plano vs pendiente), disponibilidad de materiales locales y complejidad del diseño.
            Para presupuesto formal, siempre consultá con un arquitecto o constructor local.
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
