<script lang="ts">
    /**
     * Haul truck fleet calculator for an excavator.
     *
     *   load per pass   = bucket × fill factor
     *   volume limit    = min(truck m³, payload t / loose density t/m³)
     *   passes n        = ceil(volume limit / load per pass)
     *   truck load      = min(n × load per pass, volume limit)
     *   loading time    = n × excavator cycle / 60            (min)
     *   truck cycle     = loading + haul + dump + return + spot (min)
     *   trucks needed   = truck cycle / loading time
     *   match factor    = N chosen × loading time / truck cycle
     *   fleet output    = min(excavator output, trucks output)  (loose m³/h)
     *
     * No efficiency factors are applied beyond what the user enters.
     */

    let capacidadCamion = 15
    let cargaUtilT = 25
    let densidadSuelta = 1.6
    let cucharon = 1.2
    let factorLlenado = 0.9
    let cicloExcavadora = 22
    let distanciaKm = 3
    let velocidadCargado = 30
    let velocidadVacio = 40
    let tiempoDescarga = 1.5
    let tiempoManiobra = 1
    let camionesDisponibles: number | null = null

    $: valido =
        capacidadCamion > 0 && cucharon > 0 && factorLlenado > 0 && cicloExcavadora > 0 &&
        velocidadCargado > 0 && velocidadVacio > 0 && distanciaKm >= 0 &&
        tiempoDescarga >= 0 && tiempoManiobra >= 0

    $: limiteMasa = cargaUtilT > 0 && densidadSuelta > 0 ? cargaUtilT / densidadSuelta : Infinity
    $: limiteVolumen = Math.min(capacidadCamion, limiteMasa)
    $: limitaPor = limiteMasa < capacidadCamion ? 'carga útil (peso)' : 'volumen de la tolva'
    $: cargaPorPase = cucharon * factorLlenado
    $: pases = valido ? Math.ceil(limiteVolumen / cargaPorPase - 1e-9) : NaN
    $: cargaReal = Math.min(pases * cargaPorPase, limiteVolumen)
    $: tCarga = (pases * cicloExcavadora) / 60
    $: tIda = (distanciaKm / velocidadCargado) * 60
    $: tVuelta = (distanciaKm / velocidadVacio) * 60
    $: cicloCamion = tCarga + tIda + tiempoDescarga + tVuelta + tiempoManiobra
    $: camionesExactos = cicloCamion / tCarga
    $: camionesRedondeados = Math.ceil(camionesExactos - 1e-9)
    $: camionesUsados = camionesDisponibles && camionesDisponibles > 0 ? Math.floor(camionesDisponibles) : camionesRedondeados
    $: mf = (camionesUsados * tCarga) / cicloCamion
    $: prodExcavadora = (cargaReal / tCarga) * 60
    $: prodCamiones = (camionesUsados * cargaReal / cicloCamion) * 60
    $: prodFlota = Math.min(prodExcavadora, prodCamiones)
    $: diagnostico =
        mf < 0.995 ? 'La excavadora espera camiones (MF < 1): la flota limita la producción.'
        : mf > 1.005 ? 'Los camiones esperan turno de carga (MF > 1): la excavadora limita la producción.'
        : 'Flota equilibrada (MF ≈ 1).'

    const fmt = (n: number, decimals = 2) =>
        Number.isFinite(n)
            ? n.toLocaleString('es-AR', { maximumFractionDigits: decimals, minimumFractionDigits: 0 })
            : '—'

    function reset() {
        capacidadCamion = 15
        cargaUtilT = 25
        densidadSuelta = 1.6
        cucharon = 1.2
        factorLlenado = 0.9
        cicloExcavadora = 22
        distanciaKm = 3
        velocidadCargado = 30
        velocidadVacio = 40
        tiempoDescarga = 1.5
        tiempoManiobra = 1
        camionesDisponibles = null
    }

    const lbl = 'block text-xs uppercase tracking-wide font-semibold mb-1.5 text-black/60 dark:text-white/60'
    const hint = 'text-[0.65rem] text-black/45 dark:text-white/45 mt-1 block'
</script>

<div class="volquetes-calculadora">
    <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-3">Volquete</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <label class="block">
            <span class={lbl}>Capacidad (m³ suelto)</span>
            <input type="number" bind:value={capacidadCamion} step="0.5" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class={lbl}>Carga útil (t, opcional)</span>
            <input type="number" bind:value={cargaUtilT} step="1" min="0" class="tool-input" />
            <span class={hint}>Deje 0 para ignorar el límite de peso</span>
        </label>
        <label class="block">
            <span class={lbl}>Densidad suelta (t/m³)</span>
            <input type="number" bind:value={densidadSuelta} step="0.05" min="0" class="tool-input" />
        </label>
    </div>

    <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-3">Excavadora</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <label class="block">
            <span class={lbl}>Cucharón (m³)</span>
            <input type="number" bind:value={cucharon} step="0.1" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class={lbl}>Factor de llenado</span>
            <input type="number" bind:value={factorLlenado} step="0.05" min="0" max="1.2" class="tool-input" />
        </label>
        <label class="block">
            <span class={lbl}>Ciclo (s)</span>
            <input type="number" bind:value={cicloExcavadora} step="1" min="1" class="tool-input" />
        </label>
    </div>

    <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-3">Acarreo</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <label class="block">
            <span class={lbl}>Distancia de ida (km)</span>
            <input type="number" bind:value={distanciaKm} step="0.5" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class={lbl}>Velocidad cargado (km/h)</span>
            <input type="number" bind:value={velocidadCargado} step="1" min="1" class="tool-input" />
        </label>
        <label class="block">
            <span class={lbl}>Velocidad vacío (km/h)</span>
            <input type="number" bind:value={velocidadVacio} step="1" min="1" class="tool-input" />
        </label>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <label class="block">
            <span class={lbl}>Descarga (min)</span>
            <input type="number" bind:value={tiempoDescarga} step="0.5" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class={lbl}>Maniobra y espera en carga (min)</span>
            <input type="number" bind:value={tiempoManiobra} step="0.5" min="0" class="tool-input" />
        </label>
        <label class="block">
            <span class={lbl}>Volquetes disponibles (opcional)</span>
            <input type="number" bind:value={camionesDisponibles} step="1" min="1" class="tool-input" placeholder="Usar el calculado" />
        </label>
    </div>

    <div class="tool-result-card">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-[var(--primary)] mb-4">Resultado</p>

        <div class="mb-6">
            <p class="text-sm text-black/55 dark:text-white/55 mb-1">Volquetes necesarios</p>
            <p class="text-4xl md:text-5xl font-bold text-[var(--deep-text)] dark:text-white/95">
                {fmt(camionesRedondeados, 0)} <span class="text-2xl md:text-3xl">volquetes</span>
            </p>
            <p class="text-xs text-black/45 dark:text-white/45 mt-1">
                Valor exacto: {fmt(camionesExactos, 2)} · Limita por: {limitaPor}
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Pases por camión</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(pases, 0)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">{fmt(cargaPorPase, 2)} m³ por pase</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Carga por camión</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(cargaReal, 2)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">m³ sueltos</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Tiempo de carga</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(tCarga, 2)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">min</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Ciclo del volquete</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(cicloCamion, 2)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">min</p>
            </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Factor de acoplamiento</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(mf, 2)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">con {fmt(camionesUsados, 0)} volquetes</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Excavadora</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(prodExcavadora, 1)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">m³/h sueltos</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Volquetes</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(prodCamiones, 1)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">m³/h sueltos</p>
            </div>
            <div class="tool-result-metric">
                <p class="text-xs text-black/55 dark:text-white/55 mb-1">Producción de la flota</p>
                <p class="text-lg font-bold text-[var(--deep-text)] dark:text-white/95">{fmt(prodFlota, 1)}</p>
                <p class="text-xs text-black/50 dark:text-white/50">m³/h sueltos</p>
            </div>
        </div>

        <p class="text-sm text-black/70 dark:text-white/70 mt-4">{diagnostico}</p>
        <p class="text-xs text-black/50 dark:text-white/50 mt-2 leading-relaxed">
            Supuesto: la producción es teórica, sin factores de eficiencia horaria ni de operador
            más allá de los valores que usted ingresó. Aplique su propia eficiencia al resultado.
            El último pase puede cargarse parcialmente; la carga por camión nunca supera el límite
            de volumen ni de peso.
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
