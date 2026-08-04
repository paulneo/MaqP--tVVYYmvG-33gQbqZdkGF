<script lang="ts">
    /**
     * Calculadora de encofrado de madera por m² para losas, muros y columnas.
     *
     * Referencias de rendimiento (m² por unidad de material, obra tradicional
     * con reuso 4-6 veces):
     *  - Tablero fenólico 18mm 1.22×2.44m: 2.98 m² por hoja
     *  - Puntal metálico o poste madera 3": 1 cada 1 m² de losa apuntalable
     *  - Clavos 2.5" y 3.5": 100-200 g/m² según pieza
     */

    type TipoElemento = 'losa' | 'muro' | 'columna'

    const CONFIG: Record<TipoElemento, {
        label: string
        tableroM2PorHoja: number
        puntalesPorM2: number
        clavosGramosPorM2: number
        alambreMetrosPorM2: number
        maderaListoneadoMlPorM2: number
    }> = {
        losa: {
            label: 'Losa horizontal',
            tableroM2PorHoja: 2.98,
            puntalesPorM2: 1,
            clavosGramosPorM2: 150,
            alambreMetrosPorM2: 0,
            maderaListoneadoMlPorM2: 3.5,
        },
        muro: {
            label: 'Muro vertical (dos caras)',
            tableroM2PorHoja: 2.98,
            puntalesPorM2: 0.5,
            clavosGramosPorM2: 120,
            alambreMetrosPorM2: 4,
            maderaListoneadoMlPorM2: 5,
        },
        columna: {
            label: 'Columna vertical',
            tableroM2PorHoja: 2.98,
            puntalesPorM2: 0.3,
            clavosGramosPorM2: 100,
            alambreMetrosPorM2: 6,
            maderaListoneadoMlPorM2: 8,
        },
    }

    let tipo: TipoElemento = 'losa'
    let areaM2 = 20
    let reusos = 4
    let desperdicio = 10

    $: cfg = CONFIG[tipo]
    // Tablero: si es muro son dos caras, contamos doble
    $: superficieTableroM2 = tipo === 'muro' ? areaM2 * 2 : areaM2
    $: superficieAjustada = superficieTableroM2 * (1 + desperdicio / 100)
    // Con reuso: solo compramos 1/reusos del total teórico
    $: tableroHojas = Math.ceil((superficieAjustada / cfg.tableroM2PorHoja) / reusos)
    $: puntales = Math.ceil(areaM2 * cfg.puntalesPorM2)
    $: clavosKg = (areaM2 * cfg.clavosGramosPorM2) / 1000
    $: alambreMetros = Math.ceil(areaM2 * cfg.alambreMetrosPorM2)
    $: maderaListoneadoMl = Math.ceil((areaM2 * cfg.maderaListoneadoMlPorM2) / reusos)

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        tipo = 'losa'
        areaM2 = 20
        reusos = 4
        desperdicio = 10
    }
</script>

<div class="encofrado-calculadora">
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            Tipo de elemento
        </label>
        <div class="grid grid-cols-3 gap-2 mb-2">
            {#each Object.keys(CONFIG) as key}
                <button
                    type="button"
                    class="tool-chip"
                    class:tool-chip-active={tipo === key}
                    on:click={() => (tipo = key as TipoElemento)}
                >
                    {CONFIG[key as TipoElemento].label.split(' ')[0]}
                </button>
            {/each}
        </div>
        <p class="text-xs text-black/55 dark:text-white/55">{cfg.label}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Área a encofrar (m²)
            </span>
            <input type="number" bind:value={areaM2} step="1" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Reusos del tablero
            </span>
            <input type="number" bind:value={reusos} step="1" min="1" max="10" class="tool-input" />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Desperdicio (%)
            </span>
            <input type="number" bind:value={desperdicio} step="1" min="0" max="30" class="tool-input" />
        </label>
    </div>

    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Materiales para encofrar {fmt(areaM2, 0)} m² de {cfg.label.toLowerCase()}
        </p>

        <div class="mb-6">
            <p class="text-sm text-black/55 dark:text-white/55 mb-1">Tablero fenólico 18mm (1.22 × 2.44 m)</p>
            <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                {tableroHojas} <span class="text-2xl md:text-3xl">hojas</span>
            </p>
            <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                Con {reusos} reusos · {fmt(superficieTableroM2, 1)} m² a cubrir
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Puntales</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{puntales}</p>
                <p class="text-xs text-black/50 dark:text-white/50">unidades</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Listoneado</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{maderaListoneadoMl}</p>
                <p class="text-xs text-black/50 dark:text-white/50">metros lineales</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Clavos</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(clavosKg, 1)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">kg (2.5" y 3.5")</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Alambre</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{alambreMetros}</p>
                <p class="text-xs text-black/50 dark:text-white/50">metros</p>
            </div>
        </div>

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            Cálculo para obra tradicional con tablero fenólico. Muros cuentan las dos caras.
            Reusos típicos: 4-6 veces si se cuida el tablero, 1-2 con humedad o mal manejo.
            El listoneado incluye soleras y correas de refuerzo. Para encofrado metálico
            (Peri, Ulma) las ratios cambian — este cálculo aplica solo a madera.
        </p>
    </div>

    <div class="mt-4 text-right">
        <button type="button" on:click={reset} class="text-sm text-black/55 dark:text-white/55 hover:text-[var(--primary)] transition">
            Reiniciar valores
        </button>
    </div>
</div>
