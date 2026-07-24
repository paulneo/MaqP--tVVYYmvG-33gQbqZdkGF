<script lang="ts">
    /**
     * Calculadora de pintura: litros por m².
     *
     * Fórmula base:
     *   Área neta = (largo × alto × cantidad paredes) - área puertas - área ventanas
     *   Litros    = (Área neta × manos) / rendimiento por litro
     *
     * Rendimientos típicos (m²/L, una sola mano):
     *   - Yeso o pared lisa interior:  12
     *   - Cemento revocado:            9
     *   - Madera (barniz/laca):        14
     *   - Hierro (esmalte sintético):  12
     *   - Exterior (látex):            9
     */

    type Superficie = 'yeso' | 'cemento' | 'madera' | 'hierro' | 'exterior'

    const SUPERFICIES: Record<Superficie, { label: string; rendimiento: number; recomendacion: string }> = {
        yeso:     { label: 'Yeso / pared lisa (interior)', rendimiento: 12, recomendacion: 'Látex al agua para interiores.' },
        cemento:  { label: 'Cemento revocado / ladrillo',  rendimiento: 9,  recomendacion: 'Látex + sellador previo si es primera pintura.' },
        madera:   { label: 'Madera (puertas, muebles)',    rendimiento: 14, recomendacion: 'Barniz o laca según acabado deseado.' },
        hierro:   { label: 'Hierro / metal',                rendimiento: 12, recomendacion: 'Convertidor de óxido + esmalte sintético.' },
        exterior: { label: 'Exterior expuesto',              rendimiento: 9,  recomendacion: 'Látex exterior antifúngico + impermeabilizante.' },
    }

    let superficie: Superficie = 'yeso'
    let largo = 4
    let alto = 2.5
    let cantidadParedes = 4
    let manos = 2
    let cantidadPuertas = 1
    let anchoPuerta = 0.90
    let altoPuerta = 2.05
    let cantidadVentanas = 1
    let anchoVentana = 1.20
    let altoVentana = 1.10
    let precioLitro = 0

    $: rendimiento = SUPERFICIES[superficie].rendimiento
    $: areaParedes = largo * alto * cantidadParedes
    $: areaPuertas = cantidadPuertas * anchoPuerta * altoPuerta
    $: areaVentanas = cantidadVentanas * anchoVentana * altoVentana
    $: areaNeta = Math.max(0, areaParedes - areaPuertas - areaVentanas)
    $: litrosNecesarios = (areaNeta * manos) / rendimiento
    $: costoTotal = litrosNecesarios * precioLitro

    // Redondeo a envase comercial más cercano (1L, 4L, 10L, 20L)
    $: envaseSugerido = (() => {
        const l = Math.ceil(litrosNecesarios)
        if (l <= 1) return { cantidad: 1, tamaño: 1 }
        if (l <= 4) return { cantidad: 1, tamaño: 4 }
        if (l <= 10) return { cantidad: 1, tamaño: 10 }
        if (l <= 20) return { cantidad: 1, tamaño: 20 }
        return { cantidad: Math.ceil(l / 20), tamaño: 20 }
    })()

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        superficie = 'yeso'
        largo = 4
        alto = 2.5
        cantidadParedes = 4
        manos = 2
        cantidadPuertas = 1
        anchoPuerta = 0.90
        altoPuerta = 2.05
        cantidadVentanas = 1
        anchoVentana = 1.20
        altoVentana = 1.10
        precioLitro = 0
    }
</script>

<div class="pintura-calculadora">
    <!-- Tipo de superficie -->
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            Tipo de superficie
        </label>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
            {#each Object.entries(SUPERFICIES) as [key, val]}
                <button
                    type="button"
                    class="tool-chip"
                    class:tool-chip-active={superficie === key}
                    on:click={() => (superficie = key as Superficie)}
                >
                    {val.label}
                </button>
            {/each}
        </div>
        <p class="text-xs text-black/55 dark:text-white/55 mt-2">
            <strong>Rendimiento:</strong> {rendimiento} m²/L por mano. {SUPERFICIES[superficie].recomendacion}
        </p>
    </div>

    <!-- Dimensiones paredes -->
    <div class="mb-6">
        <p class="text-sm font-semibold mb-2 text-black/75 dark:text-white/80">Dimensiones a pintar</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Largo pared (m)
                </span>
                <input type="number" bind:value={largo} step="0.1" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Alto pared (m)
                </span>
                <input type="number" bind:value={alto} step="0.1" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Cantidad de paredes
                </span>
                <input type="number" bind:value={cantidadParedes} step="1" min="1" max="20" class="tool-input" />
            </label>
        </div>
    </div>

    <!-- Manos y aberturas -->
    <div class="mb-6">
        <p class="text-sm font-semibold mb-2 text-black/75 dark:text-white/80">Manos y aberturas a descontar</p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Cantidad de manos
                </span>
                <input type="number" bind:value={manos} step="1" min="1" max="5" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Puertas (unidades)
                </span>
                <input type="number" bind:value={cantidadPuertas} step="1" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Ventanas (unidades)
                </span>
                <input type="number" bind:value={cantidadVentanas} step="1" min="0" class="tool-input" />
            </label>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Ancho puerta (m)
                </span>
                <input type="number" bind:value={anchoPuerta} step="0.05" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Alto puerta (m)
                </span>
                <input type="number" bind:value={altoPuerta} step="0.05" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Ancho ventana (m)
                </span>
                <input type="number" bind:value={anchoVentana} step="0.05" min="0" class="tool-input" />
            </label>
            <label class="block">
                <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                    Alto ventana (m)
                </span>
                <input type="number" bind:value={altoVentana} step="0.05" min="0" class="tool-input" />
            </label>
        </div>
    </div>

    <!-- Precio opcional -->
    <div class="mb-8">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Precio por litro (opcional, para calcular costo total)
            </span>
            <input type="number" bind:value={precioLitro} step="0.5" min="0" class="tool-input" placeholder="0.00" />
        </label>
    </div>

    <!-- Resultados -->
    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Pintura necesaria
        </p>

        <div class="mb-6">
            <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                Litros totales para {manos} {manos === 1 ? 'mano' : 'manos'}
            </p>
            <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                {fmt(litrosNecesarios, 2)} <span class="text-2xl md:text-3xl">litros</span>
            </p>
            <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                Comprá {envaseSugerido.cantidad} envase{envaseSugerido.cantidad > 1 ? 's' : ''} de {envaseSugerido.tamaño} L
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Área bruta</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(areaParedes, 1)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">m² paredes</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Descuento aberturas</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    -{fmt(areaPuertas + areaVentanas, 1)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">m²</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Área neta</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(areaNeta, 1)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">m² a pintar</p>
            </div>
            {#if precioLitro > 0}
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Costo total</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                        {fmt(costoTotal, 2)}
                    </p>
                    <p class="text-xs text-black/50 dark:text-white/50">precio × litros</p>
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
            El cálculo usa rendimiento nominal del fabricante. En la práctica, la primera mano rinde ~15% menos (superficie porosa absorbe). Considerá comprar 10% extra por retoques y desperdicio.
        </p>
    </div>

    <div class="mt-4 text-right">
        <button type="button" on:click={reset} class="text-sm text-black/55 dark:text-white/55 hover:text-[var(--primary)] transition">
            Reiniciar valores
        </button>
    </div>
</div>
