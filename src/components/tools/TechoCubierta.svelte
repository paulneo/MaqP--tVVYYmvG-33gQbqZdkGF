<script lang="ts">
    /**
     * Calculadora de techo / cubierta.
     *
     * Cálculo del área real de techo según tipo + pendiente:
     *   área real = área base / cos(ángulo)
     *
     * Materiales soportados (con m² por pieza y traslape típico):
     *   - Calamina galvanizada estándar: 0.86 × 3.60 m útil, traslape 10%
     *   - Teja cerámica:                 ~15 tejas/m², traslape ya incluido
     *   - Teja de concreto:              ~10 tejas/m², traslape ya incluido
     *   - Panel sándwich:                1.00 × 6.00 m útil, traslape 5%
     *   - Ondulina:                      2.00 × 0.95 m útil, traslape 8%
     */

    type Tipo = '1-agua' | '2-aguas' | '4-aguas' | 'plano'
    type Material = 'calamina' | 'teja-ceramica' | 'teja-concreto' | 'panel-sandwich' | 'ondulina'

    const MATERIALES: Record<Material, {
        label: string
        piezaM2: number         // m² útiles por pieza (después de traslape)
        piezasPorM2?: number    // usado para tejas
        traslape: number        // porcentaje adicional
        pesoKgM2: number
    }> = {
        'calamina':       { label: 'Calamina galvanizada', piezaM2: 2.79, traslape: 0.10, pesoKgM2: 4.5 },
        'teja-ceramica':  { label: 'Teja cerámica',        piezaM2: 0, piezasPorM2: 15, traslape: 0, pesoKgM2: 50 },
        'teja-concreto':  { label: 'Teja de concreto',     piezaM2: 0, piezasPorM2: 10, traslape: 0, pesoKgM2: 65 },
        'panel-sandwich': { label: 'Panel sándwich',       piezaM2: 5.70, traslape: 0.05, pesoKgM2: 12 },
        'ondulina':       { label: 'Ondulina bituminosa',  piezaM2: 1.75, traslape: 0.08, pesoKgM2: 3 },
    }

    let tipo: Tipo = '2-aguas'
    let material: Material = 'calamina'
    let base = 8         // m — ancho de la casa
    let profundidad = 10 // m — largo de la casa
    let pendienteGrados = 20
    let precioPorUnidad = 0

    // Área base (proyección horizontal) según tipo
    $: areaBase = base * profundidad
    // Ángulo en radianes
    $: anguloRad = (pendienteGrados * Math.PI) / 180
    // Factor de corrección por pendiente
    $: factorPendiente = 1 / Math.cos(anguloRad)
    // Pendiente en porcentaje
    $: pendientePct = Math.tan(anguloRad) * 100

    // Área real del techo según tipo
    $: areaRealTecho = (() => {
        if (tipo === 'plano') return areaBase
        if (tipo === '1-agua') return areaBase * factorPendiente
        if (tipo === '2-aguas') return areaBase * factorPendiente
        if (tipo === '4-aguas') return areaBase * factorPendiente
        return 0
    })()

    // Cálculo de piezas necesarias
    $: cantidadPiezas = (() => {
        const mat = MATERIALES[material]
        const areaConTraslape = areaRealTecho * (1 + mat.traslape)
        if (mat.piezasPorM2) {
            return Math.ceil(areaConTraslape * mat.piezasPorM2)
        }
        return Math.ceil(areaConTraslape / mat.piezaM2)
    })()

    $: pesoTotalKg = areaRealTecho * MATERIALES[material].pesoKgM2
    $: costoTotal = cantidadPiezas * precioPorUnidad

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        tipo = '2-aguas'
        material = 'calamina'
        base = 8
        profundidad = 10
        pendienteGrados = 20
        precioPorUnidad = 0
    }

    const unidadMaterial = (m: Material) =>
        m === 'teja-ceramica' || m === 'teja-concreto' ? 'tejas' : 'planchas'
</script>

<div class="techo-calculadora">
    <!-- Tipo de techo -->
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            Tipo de techo
        </label>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
            {#each [{ v: '1-agua', label: '1 agua' }, { v: '2-aguas', label: '2 aguas' }, { v: '4-aguas', label: '4 aguas' }, { v: 'plano', label: 'Plano' }] as opt}
                <button
                    type="button"
                    class="tool-chip"
                    class:tool-chip-active={tipo === opt.v}
                    on:click={() => (tipo = opt.v as Tipo)}
                >
                    {opt.label}
                </button>
            {/each}
        </div>
    </div>

    <!-- Dimensiones base -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Ancho / base (m)
            </span>
            <input type="number" bind:value={base} step="0.5" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Largo / profundidad (m)
            </span>
            <input type="number" bind:value={profundidad} step="0.5" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Pendiente (grados)
            </span>
            <input type="number" bind:value={pendienteGrados} step="1" min="0" max="60" class="tool-input" disabled={tipo === 'plano'} />
            <span class="text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block">
                Equivale a {fmt(pendientePct, 0)}% de pendiente
            </span>
        </label>
    </div>

    <!-- Material -->
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            Material de cubierta
        </label>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-2">
            {#each Object.entries(MATERIALES) as [key, val]}
                <button
                    type="button"
                    class="tool-chip"
                    class:tool-chip-active={material === key}
                    on:click={() => (material = key as Material)}
                >
                    {val.label}
                </button>
            {/each}
        </div>
    </div>

    <!-- Precio opcional -->
    <div class="mb-8">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Precio por unidad (opcional)
            </span>
            <input type="number" bind:value={precioPorUnidad} step="0.5" min="0" class="tool-input" placeholder="0.00" />
        </label>
    </div>

    <!-- Resultados -->
    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Cubierta requerida
        </p>

        <div class="mb-6">
            <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                Cantidad de {unidadMaterial(material)} necesarias
            </p>
            <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                {cantidadPiezas} <span class="text-2xl md:text-3xl">{unidadMaterial(material)}</span>
            </p>
            <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                Área real del techo: {fmt(areaRealTecho, 1)} m² · Con traslape: {fmt(areaRealTecho * (1 + MATERIALES[material].traslape), 1)} m²
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Área base</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(areaBase, 1)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">m² (planta)</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Área real</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(areaRealTecho, 1)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">m² (techo)</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Peso total</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(pesoTotalKg, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">kg (para estructura)</p>
            </div>
            {#if precioPorUnidad > 0}
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Costo total</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                        {fmt(costoTotal, 2)}
                    </p>
                    <p class="text-xs text-black/50 dark:text-white/50">precio × piezas</p>
                </div>
            {:else}
                <div class="tool-result-metric opacity-50">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Costo total</p>
                    <p class="text-lg font-bold text-black/40 dark:text-white/40">—</p>
                    <p class="text-xs text-black/50 dark:text-white/50">ingresá precio</p>
                </div>
            {/if}
        </div>

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            El <strong>traslape</strong> ya está incluido según material. Sumá 5-10% extra para cortes en cumbreras y bordes. El <strong>peso</strong> es orientativo para dimensionar la estructura de soporte.
        </p>
    </div>

    <div class="mt-4 text-right">
        <button type="button" on:click={reset} class="text-sm text-black/55 dark:text-white/55 hover:text-[var(--primary)] transition">
            Reiniciar valores
        </button>
    </div>
</div>
