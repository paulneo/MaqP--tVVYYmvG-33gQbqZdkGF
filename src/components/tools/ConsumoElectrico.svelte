<script lang="ts">
    /**
     * Calculadora de consumo eléctrico en kWh y costo mensual.
     *
     * Fórmula: consumo diario (kWh) = (potencia W × horas × cantidad) / 1000
     *          consumo mensual        = consumo diario × 30
     *          costo                  = consumo × precio por kWh
     *
     * Precios kWh típicos por país (USD, aprox. 2026 tarifa residencial promedio).
     */

    type Pais = 'peru' | 'mexico' | 'colombia' | 'argentina' | 'chile' | 'uruguay' | 'bolivia'

    const PRECIOS_KWH: Record<Pais, { label: string; precio: number; nota: string }> = {
        peru:      { label: 'Perú',      precio: 0.06, nota: 'Tarifa BT5B residencial promedio' },
        mexico:    { label: 'México',    precio: 0.07, nota: 'Tarifa DAC residencial CFE' },
        colombia:  { label: 'Colombia',  precio: 0.14, nota: 'Estrato 4 promedio urbano' },
        argentina: { label: 'Argentina', precio: 0.06, nota: 'Tarifa N2 residencial (con subsidio parcial)' },
        chile:     { label: 'Chile',     precio: 0.16, nota: 'Tarifa BT1 residencial urbana' },
        uruguay:   { label: 'Uruguay',   precio: 0.20, nota: 'Tarifa doble horario simple UTE' },
        bolivia:   { label: 'Bolivia',   precio: 0.06, nota: 'Categoría domiciliaria promedio' },
    }

    // Base de electrodomésticos comunes con potencias típicas
    type Aparato = {
        id: number
        nombre: string
        potenciaW: number
        horasDia: number
        cantidad: number
    }

    const APARATOS_DEFAULT: Aparato[] = [
        { id: 1, nombre: 'Refrigerador',              potenciaW: 150,  horasDia: 24, cantidad: 1 },
        { id: 2, nombre: 'Televisor LED 50\"',         potenciaW: 90,   horasDia: 5,  cantidad: 1 },
        { id: 3, nombre: 'Aire acondicionado 12k BTU', potenciaW: 1200, horasDia: 6,  cantidad: 0 },
        { id: 4, nombre: 'Ventilador de techo',        potenciaW: 75,   horasDia: 8,  cantidad: 0 },
        { id: 5, nombre: 'Lavadora',                    potenciaW: 500,  horasDia: 1,  cantidad: 1 },
        { id: 6, nombre: 'Microondas',                  potenciaW: 1000, horasDia: 0.5,cantidad: 1 },
        { id: 7, nombre: 'Computadora / laptop',        potenciaW: 100,  horasDia: 6,  cantidad: 1 },
        { id: 8, nombre: 'Iluminación LED',              potenciaW: 60,   horasDia: 6,  cantidad: 1 },
        { id: 9, nombre: 'Ducha eléctrica',              potenciaW: 5500, horasDia: 0.25, cantidad: 0 },
        { id: 10, nombre: 'Bomba de agua',                potenciaW: 750,  horasDia: 1,    cantidad: 0 },
    ]

    let pais: Pais = 'peru'
    let aparatos: Aparato[] = APARATOS_DEFAULT.map(a => ({ ...a }))

    $: precioKwh = PRECIOS_KWH[pais].precio

    $: consumoMensualPorAparato = aparatos.map(a => {
        const diarioKwh = (a.potenciaW * a.horasDia * a.cantidad) / 1000
        return {
            ...a,
            diarioKwh,
            mensualKwh: diarioKwh * 30,
            costoMensual: diarioKwh * 30 * precioKwh,
        }
    })

    $: consumoMensualKwh = consumoMensualPorAparato.reduce((sum, a) => sum + a.mensualKwh, 0)
    $: costoMensualTotal = consumoMensualKwh * precioKwh
    $: costoAnualTotal = costoMensualTotal * 12
    $: consumoDiarioKwh = consumoMensualKwh / 30

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        pais = 'peru'
        aparatos = APARATOS_DEFAULT.map(a => ({ ...a }))
    }
</script>

<div class="consumo-calculadora">
    <!-- Selector de país -->
    <div class="mb-6">
        <label class="block text-sm font-semibold mb-2 text-black/75 dark:text-white/80">
            País (precio del kWh)
        </label>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
            {#each Object.entries(PRECIOS_KWH) as [key, val]}
                <button
                    type="button"
                    class="tool-chip"
                    class:tool-chip-active={pais === key}
                    on:click={() => (pais = key as Pais)}
                >
                    {val.label}
                </button>
            {/each}
        </div>
        <p class="text-xs text-black/55 dark:text-white/55 mt-2">
            <strong>USD {precioKwh.toFixed(3)} por kWh</strong> — {PRECIOS_KWH[pais].nota}
        </p>
    </div>

    <!-- Tabla de aparatos -->
    <div class="mb-8">
        <p class="text-sm font-semibold mb-3 text-black/75 dark:text-white/80">
            Electrodomésticos (poné cantidad = 0 para los que no tenés)
        </p>
        <div class="space-y-2">
            {#each aparatos as aparato, i (aparato.id)}
                <div class="grid grid-cols-12 gap-2 items-center p-2 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.06]">
                    <div class="col-span-12 md:col-span-4">
                        <p class="text-sm font-medium text-black/80 dark:text-white/85">{aparato.nombre}</p>
                        <p class="text-[0.7rem] text-black/50 dark:text-white/50">
                            {consumoMensualPorAparato[i].mensualKwh.toFixed(1)} kWh/mes · USD {consumoMensualPorAparato[i].costoMensual.toFixed(2)}/mes
                        </p>
                    </div>
                    <div class="col-span-4 md:col-span-3">
                        <label class="block">
                            <span class="text-[0.65rem] uppercase tracking-wide font-semibold text-black/50 dark:text-white/50">Potencia W</span>
                            <input type="number" bind:value={aparato.potenciaW} step="10" min="0" class="tool-input" />
                        </label>
                    </div>
                    <div class="col-span-4 md:col-span-3">
                        <label class="block">
                            <span class="text-[0.65rem] uppercase tracking-wide font-semibold text-black/50 dark:text-white/50">Horas/día</span>
                            <input type="number" bind:value={aparato.horasDia} step="0.5" min="0" max="24" class="tool-input" />
                        </label>
                    </div>
                    <div class="col-span-4 md:col-span-2">
                        <label class="block">
                            <span class="text-[0.65rem] uppercase tracking-wide font-semibold text-black/50 dark:text-white/50">Cantidad</span>
                            <input type="number" bind:value={aparato.cantidad} step="1" min="0" class="tool-input" />
                        </label>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- Resultados -->
    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Consumo estimado del hogar
        </p>

        <div class="mb-6">
            <p class="text-sm text-black/55 dark:text-white/55 mb-1">
                Costo mensual estimado
            </p>
            <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                USD {fmt(costoMensualTotal, 2)}
            </p>
            <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                {fmt(consumoMensualKwh, 1)} kWh/mes · USD {fmt(costoAnualTotal, 0)}/año
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Diario</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(consumoDiarioKwh, 2)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">kWh/día</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Mensual</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(consumoMensualKwh, 1)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">kWh/mes</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Costo/día</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(costoMensualTotal / 30, 2)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">USD/día</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Costo/año</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">
                    {fmt(costoAnualTotal, 0)}
                </p>
                <p class="text-xs text-black/50 dark:text-white/50">USD/año</p>
            </div>
        </div>

        <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
            El precio del kWh mostrado es un <strong>promedio residencial 2026</strong>. Tu factura real puede variar por: <strong>banda tarifaria</strong> (mayor consumo, mayor precio), <strong>impuestos y cargos fijos</strong>, <strong>subsidios</strong> y <strong>horario</strong> (algunos países tienen tarifa horaria).
        </p>
    </div>

    <div class="mt-4 text-right">
        <button type="button" on:click={reset} class="text-sm text-black/55 dark:text-white/55 hover:text-[var(--primary)] transition">
            Reiniciar valores
        </button>
    </div>
</div>
