/**
 * Site TKPH for OTR tires (haul trucks).
 *
 *   Qm  = (Q_empty + Q_loaded) / 2                 mean load per tire (t), per position
 *   Vm  = (round-trip km × cycles per shift) / shift hours     average work speed (km/h)
 *   TKPH_site = Qm × Vm × K1 × K2
 *
 *   K1 = haul length factor (one-way hauls > 5 km), taken from the tire maker's table.
 *   K2 = ambient temperature factor. Optional reference formula (Michelin method,
 *        reference ambient Tr = 38 °C):
 *          Ta <  Tr: K2 = (Vm + 0.25 × (Ta − Tr)) / Vm
 *          Ta >= Tr: K2 = (Vm + 0.40 × (Ta − Tr)) / Vm
 *
 * Per-tire loads come either from direct input or from truck empty/loaded weight,
 * front-axle weight distribution (%) and tires per axle (rear % = 100 − front %).
 * The site TKPH of the worst position is compared with the tire's rated TKPH.
 */

export const K2_REFERENCE_TEMP_C = 38

/** Calculator convention (not a manufacturer criterion): below this margin is flagged as tight. */
export const TIGHT_MARGIN_PERCENT = 10

export type TireLoads = {
  frontEmpty: number
  frontLoaded: number
  rearEmpty: number
  rearLoaded: number
}

export type TruckWeights = {
  emptyWeight: number
  loadedWeight: number
  frontEmptyPercent: number
  frontLoadedPercent: number
  frontTires: number
  rearTires: number
}

export type TkphInput = {
  loads: TireLoads
  roundTripKm: number
  cyclesPerShift: number
  shiftHours: number
  k1: number
  k2: number
  ratedTkph: number
}

export type TkphVerdict = 'riesgo' | 'justo' | 'adecuado'

export type TkphResult = {
  valid: boolean
  averageSpeed: number
  meanLoadFront: number
  meanLoadRear: number
  tkphFront: number
  tkphRear: number
  marginFront: number
  marginRear: number
  frontIsCritical: boolean
  criticalTkph: number
  criticalMargin: number
  verdict: TkphVerdict | null
}

export function tireLoadsFromTruck(t: TruckWeights): TireLoads {
  return {
    frontEmpty: (t.emptyWeight * t.frontEmptyPercent) / 100 / t.frontTires,
    frontLoaded: (t.loadedWeight * t.frontLoadedPercent) / 100 / t.frontTires,
    rearEmpty: (t.emptyWeight * (100 - t.frontEmptyPercent)) / 100 / t.rearTires,
    rearLoaded: (t.loadedWeight * (100 - t.frontLoadedPercent)) / 100 / t.rearTires,
  }
}

export function isTruckValid(t: TruckWeights): boolean {
  return (
    t.emptyWeight > 0 &&
    t.loadedWeight >= t.emptyWeight &&
    t.frontEmptyPercent > 0 &&
    t.frontEmptyPercent < 100 &&
    t.frontLoadedPercent > 0 &&
    t.frontLoadedPercent < 100 &&
    t.frontTires >= 1 &&
    t.rearTires >= 1
  )
}

export function averageSpeed(
  roundTripKm: number,
  cyclesPerShift: number,
  shiftHours: number,
): number {
  return (roundTripKm * cyclesPerShift) / shiftHours
}

export function referenceK2(speed: number, ambientC: number): number {
  const coefficient = ambientC >= K2_REFERENCE_TEMP_C ? 0.4 : 0.25
  return (speed + coefficient * (ambientC - K2_REFERENCE_TEMP_C)) / speed
}

export function computeTkph(input: TkphInput): TkphResult {
  const { loads, roundTripKm, cyclesPerShift, shiftHours, k1, k2, ratedTkph } = input
  const speed = averageSpeed(roundTripKm, cyclesPerShift, shiftHours)

  const valid =
    loads.frontEmpty > 0 &&
    loads.frontLoaded > 0 &&
    loads.rearEmpty > 0 &&
    loads.rearLoaded > 0 &&
    roundTripKm > 0 &&
    cyclesPerShift > 0 &&
    shiftHours > 0 &&
    k1 > 0 &&
    k2 > 0 &&
    ratedTkph > 0

  const meanLoadFront = (loads.frontEmpty + loads.frontLoaded) / 2
  const meanLoadRear = (loads.rearEmpty + loads.rearLoaded) / 2
  const tkphFront = meanLoadFront * speed * k1 * k2
  const tkphRear = meanLoadRear * speed * k1 * k2
  const criticalTkph = Math.max(tkphFront, tkphRear)
  const criticalMargin = ((ratedTkph - criticalTkph) / ratedTkph) * 100

  const verdict: TkphVerdict | null = !valid
    ? null
    : criticalTkph > ratedTkph
      ? 'riesgo'
      : criticalMargin < TIGHT_MARGIN_PERCENT
        ? 'justo'
        : 'adecuado'

  return {
    valid,
    averageSpeed: speed,
    meanLoadFront,
    meanLoadRear,
    tkphFront,
    tkphRear,
    marginFront: ((ratedTkph - tkphFront) / ratedTkph) * 100,
    marginRear: ((ratedTkph - tkphRear) / ratedTkph) * 100,
    frontIsCritical: tkphFront >= tkphRear,
    criticalTkph,
    criticalMargin,
    verdict,
  }
}
