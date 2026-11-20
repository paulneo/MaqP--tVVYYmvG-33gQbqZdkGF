<script lang="ts">
    /**
     * Hydraulic cylinder force and speed calculator.
     *
     * Formulas:
     *   A_piston  = pi * D^2 / 4                 (cap side, extension)
     *   A_annular = pi * (D^2 - d^2) / 4         (rod side, retraction)
     *   F = p * A                                (1 bar = 0.1 N/mm^2)
     *   v = Q / A                                (Q in mm^3/s, A in mm^2)
     *
     * Theoretical values only: friction, seal drag and back pressure are ignored.
     */

    type PressureUnit = 'bar' | 'psi' | 'MPa'

    // Conversion of each unit to bar
    const TO_BAR: Record<PressureUnit, number> = {
        bar: 1,
        psi: 0.06894757,
        MPa: 10,
    }
    const G = 9.80665 // kN per tonne-force

    let diametroEmbolo = 100 // mm
    let diametroVastago = 56 // mm
    let presion = 200
    let unidadPresion: PressureUnit = 'bar'
    let caudal = 60 // L/min
    let carrera = 500 // mm

    $: valido =
        diametroEmbolo > 0 &&
        diametroVastago >= 0 &&
        diametroVastago < diametroEmbolo &&
        presion > 0 &&
        caudal > 0 &&
        carrera > 0

    $: presionBar = presion * TO_BAR[unidadPresion]
    $: presionNmm2 = presionBar * 0.1

    // Areas in mm^2
    $: areaEmboloMm2 = (Math.PI * diametroEmbolo ** 2) / 4
    $: areaAnularMm2 = (Math.PI * (diametroEmbolo ** 2 - diametroVastago ** 2)) / 4

    // Forces in kN (N/mm^2 * mm^2 = N)
    $: fuerzaExtensionKn = (presionNmm2 * areaEmboloMm2) / 1000
    $: fuerzaRetraccionKn = (presionNmm2 * areaAnularMm2) / 1000
    $: fuerzaExtensionTf = fuerzaExtensionKn / G
    $: fuerzaRetraccionTf = fuerzaRetraccionKn / G

    // Speeds in mm/s: Q (L/min) -> 1e6 mm^3 per L, 60 s per min
    $: caudalMm3s = (caudal * 1e6) / 60
    $: velExtensionMms = caudalMm3s / areaEmboloMm2
    $: velRetraccionMms = caudalMm3s / areaAnularMm2
    $: tiempoExtensionS = carrera / velExtensionMms
    $: tiempoRetraccionS = carrera / velRetraccionMms

    $: relacionAreas = areaEmboloMm2 / areaAnularMm2

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        diametroEmbolo = 100
        diametroVastago = 56
        presion = 200
        unidadPresion = 'bar'
        caudal = 60
        carrera = 500
    }
</script>

<div class="cilindro-calculadora">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Diámetro del émbolo (mm)
            </span>
            <input type="number" bind:value={diametroEmbolo} step="1" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Diámetro del vástago (mm)
            </span>
            <input type="number" bind:value={diametroVastago} step="1" min="0" class="tool-input" />
        </label>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Presión de trabajo
            </span>
            <div class="grid grid-cols-[1fr_auto] gap-2">
                <input
                    type="number"
                    bind:value={presion}
                    step="1"
                    min="0"
                    aria-label="Presión de trabajo"
                    class="tool-input"
                />
                <select bind:value={unidadPresion} aria-label="Unidad de presión" class="tool-input">
                    <option value="bar">bar</option>
                    <option value="psi">psi</option>
                    <option value="MPa">MPa</option>
                </select>
            </div>
        </div>
        <label class="block">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Caudal de la bomba (L/min)
            </span>
            <input type="number" bind:value={caudal} step="1" min="0" class="tool-input" />
        </label>
    </div>

    <div class="mb-8">
        <label class="block md:w-1/2">
            <span class="block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60">
                Carrera (mm)
            </span>
            <input type="number" bind:value={carrera} step="10" min="0" class="tool-input" />
        </label>
    </div>

    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">
            Resultado
        </p>

        {#if !valido}
            <p class="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                {#if diametroEmbolo > 0 && diametroVastago >= diametroEmbolo}
                    El diámetro del vástago debe ser menor que el del émbolo. Con un vástago igual o
                    mayor no queda área anular y el cálculo no tiene sentido físico.
                {:else}
                    Ingrese valores mayores que cero en todos los campos (el vástago puede ser 0 solo
                    si desea ignorarlo) para ver el resultado.
                {/if}
            </p>
        {:else}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <p class="text-sm text-black/55 dark:text-white/55 mb-1">Fuerza de empuje (extensión)</p>
                    <p class="text-3xl md:text-4xl font-bold text-[var(--deep-text)] dark:text-white/95">
                        {fmt(fuerzaExtensionKn, 1)} <span class="text-xl md:text-2xl">kN</span>
                    </p>
                    <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                        ≈ {fmt(fuerzaExtensionTf, 2)} tf (toneladas-fuerza)
                    </p>
                </div>
                <div>
                    <p class="text-sm text-black/55 dark:text-white/55 mb-1">Fuerza de tracción (retracción)</p>
                    <p class="text-3xl md:text-4xl font-bold text-[var(--deep-text)] dark:text-white/95">
                        {fmt(fuerzaRetraccionKn, 1)} <span class="text-xl md:text-2xl">kN</span>
                    </p>
                    <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                        ≈ {fmt(fuerzaRetraccionTf, 2)} tf (toneladas-fuerza)
                    </p>
                </div>
            </div>

            <div class="mb-2 text-sm font-semibold text-black/70 dark:text-white/70 uppercase tracking-wide text-[0.72rem]">
                Áreas
            </div>
            <div class="grid grid-cols-3 gap-3 mb-6">
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Área del émbolo</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(areaEmboloMm2 / 100, 2)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">cm²</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Área anular</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(areaAnularMm2 / 100, 2)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">cm²</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Relación de áreas</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(relacionAreas, 2)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">A émbolo / A anular</p>
                </div>
            </div>

            <div class="mb-2 text-sm font-semibold text-black/70 dark:text-white/70 uppercase tracking-wide text-[0.72rem]">
                Velocidad y tiempo de carrera
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Velocidad extensión</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(velExtensionMms, 1)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">mm/s ({fmt(velExtensionMms / 1000, 3)} m/s)</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Velocidad retracción</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(velRetraccionMms, 1)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">mm/s ({fmt(velRetraccionMms / 1000, 3)} m/s)</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Tiempo extensión</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(tiempoExtensionS, 2)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">s</p>
                </div>
                <div class="tool-result-metric">
                    <p class="text-xs text-black/55 dark:text-white/55 mb-1">Tiempo retracción</p>
                    <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(tiempoRetraccionS, 2)}</p>
                    <p class="text-xs text-black/50 dark:text-white/50">s</p>
                </div>
            </div>

            <p class="text-xs text-black/50 dark:text-white/50 mt-4 leading-relaxed">
                Valores teóricos a {fmt(presionBar, 1)} bar. La fuerza real es menor por fricción y
                sellos, y la velocidad real depende además de las pérdidas de la válvula y de las
                mangueras.
            </p>
        {/if}
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
