<script lang="ts">
    /**
     * Pressure and torque converter.
     *
     * Pressure base unit: kPa. Torque base unit: N·m.
     * Factors:
     *   1 bar = 100 kPa; 1 psi = 6.894757 kPa; 1 kgf/cm² = 98.0665 kPa;
     *   1 atm = 101.325 kPa; 1 MPa = 1000 kPa
     *   1 lb·ft = 1.3558179483 N·m (exact, from 0.3048 m × 4.4482216152605 N); 1 lb·in = 1 lb·ft / 12; 1 kgf·m = 9.80665 N·m
     */

    const PRESION = {
        bar: { label: 'bar', kpa: 100 },
        psi: { label: 'psi', kpa: 6.894757293168361 },
        MPa: { label: 'MPa', kpa: 1000 },
        kPa: { label: 'kPa', kpa: 1 },
        kgfcm2: { label: 'kgf/cm²', kpa: 98.0665 },
        atm: { label: 'atm', kpa: 101.325 },
    } as const
    type PresionUnit = keyof typeof PRESION

    const TORQUE = {
        Nm: { label: 'N·m', nm: 1 },
        lbft: { label: 'lb·ft', nm: 1.3558179483314004 },
        lbin: { label: 'lb·in', nm: 1.3558179483314004 / 12 },
        kgfm: { label: 'kgf·m', nm: 9.80665 },
    } as const
    type TorqueUnit = keyof typeof TORQUE

    let valorPresion = 200
    let unidadPresion: PresionUnit = 'bar'
    let valorTorque = 100
    let unidadTorque: TorqueUnit = 'lbft'

    $: presionKpa = valorPresion * PRESION[unidadPresion].kpa
    $: torqueNm = valorTorque * TORQUE[unidadTorque].nm

    $: presionesTodas = (Object.keys(PRESION) as PresionUnit[]).map((k) => ({
        key: k,
        label: PRESION[k].label,
        value: presionKpa / PRESION[k].kpa,
    }))
    $: torquesTodos = (Object.keys(TORQUE) as TorqueUnit[]).map((k) => ({
        key: k,
        label: TORQUE[k].label,
        value: torqueNm / TORQUE[k].nm,
    }))

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    // Quick equivalences shown as a static reference table
    const EQUIVALENCIAS = [
        ['1 bar', '14,5 psi', '100 kPa'],
        ['1 MPa', '10 bar', '145 psi'],
        ['1 kgf/cm²', '0,98 bar', '14,2 psi'],
        ['1 atm', '1,013 bar', '14,7 psi'],
        ['100 lb·ft', '135,6 N·m', '13,8 kgf·m'],
        ['100 N·m', '73,8 lb·ft', '10,2 kgf·m'],
        ['1 lb·ft', '12 lb·in', '1,356 N·m'],
    ]

    function reset() {
        valorPresion = 200
        unidadPresion = 'bar'
        valorTorque = 100
        unidadTorque = 'lbft'
    }
</script>

<div class="conversor-calculadora">
    <!-- Pressure -->
    <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-3">Presión</p>
    <div class="grid grid-cols-[1fr_auto] gap-2 mb-4">
        <input type="number" bind:value={valorPresion} step="any" aria-label="Valor de presión" class="tool-input" />
        <select bind:value={unidadPresion} aria-label="Unidad de presión" class="tool-input">
            {#each Object.entries(PRESION) as [key, u]}
                <option value={key}>{u.label}</option>
            {/each}
        </select>
    </div>
    <div class="tool-result-card mb-8">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            {#each presionesTodas as r (r.key)}
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">{r.label}</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(r.value, 4)}</p>
                </div>
            {/each}
        </div>
    </div>

    <!-- Torque -->
    <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-3">Torque</p>
    <div class="grid grid-cols-[1fr_auto] gap-2 mb-4">
        <input type="number" bind:value={valorTorque} step="any" aria-label="Valor de torque" class="tool-input" />
        <select bind:value={unidadTorque} aria-label="Unidad de torque" class="tool-input">
            {#each Object.entries(TORQUE) as [key, u]}
                <option value={key}>{u.label}</option>
            {/each}
        </select>
    </div>
    <div class="tool-result-card mb-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            {#each torquesTodos as r (r.key)}
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">{r.label}</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(r.value, 4)}</p>
                </div>
            {/each}
        </div>
    </div>

    <!-- Quick equivalences -->
    <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-3">
        Equivalencias rápidas
    </p>
    <div class="overflow-x-auto">
        <table class="w-full text-sm text-left">
            <tbody>
                {#each EQUIVALENCIAS as row}
                    <tr class="border-b border-black/[0.06] dark:border-white/[0.08]">
                        <th class="py-2 pr-4 font-semibold text-[var(--deep-text)] dark:text-white/90">{row[0]}</th>
                        <td class="py-2 pr-4 text-black/70 dark:text-white/70">≈ {row[1]}</td>
                        <td class="py-2 text-black/70 dark:text-white/70">≈ {row[2]}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
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
