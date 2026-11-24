/**
 * Forklift actual capacity by load center (moment balance about the front axle).
 *
 *   Cb = rated capacity minus the attachment reduction (kg or %)
 *   Exact (A known):   C = Cb × (A + LCn) / (A + LCr)
 *   Simplified (A=0):  C = Cb × LCn / LCr       (conservative when LCr > LCn)
 *   C is capped at Cb: forks, mast and hydraulics are rated for Cb, so a shorter
 *   load center never raises the capacity above the plate value.
 *
 *   LCn = rated load center, LCr = actual load center (same length unit)
 *   A   = distance from the front axle centerline to the fork face (0 when unknown)
 *   Max load center for a given load W: LCmax = Cb × (A + LCn) / W − A
 */

export type ForkliftInput = {
  ratedCapacity: number
  ratedLoadCenter: number
  actualLoadCenter: number
  /** Front axle to fork face distance; 0 uses the simplified formula. */
  axleToForkFace: number
  /** Attachment reduction, as a weight or as a percentage of the rated capacity. */
  reduction: { mode: 'weight' | 'percent'; value: number } | null
  loadWeight: number
}

export type ForkliftResult = {
  valid: boolean
  baseCapacity: number
  uncappedCapacity: number
  capApplied: boolean
  actualCapacity: number
  margin: number
  usagePercent: number
  exceeds: boolean
  reductionPercent: number
  maxLoadCenter: number
}

export function computeForkliftCapacity(input: ForkliftInput): ForkliftResult {
  const {
    ratedCapacity,
    ratedLoadCenter,
    actualLoadCenter,
    axleToForkFace: a,
    reduction,
    loadWeight,
  } = input

  const reductionWeight = !reduction
    ? 0
    : reduction.mode === 'weight'
      ? reduction.value
      : (ratedCapacity * reduction.value) / 100
  const baseCapacity = ratedCapacity - reductionWeight

  const valid =
    ratedCapacity > 0 &&
    ratedLoadCenter > 0 &&
    actualLoadCenter > 0 &&
    loadWeight > 0 &&
    a >= 0 &&
    (!reduction || (reduction.value >= 0 && baseCapacity > 0))

  const uncappedCapacity = valid
    ? baseCapacity * ((a + ratedLoadCenter) / (a + actualLoadCenter))
    : Number.NaN
  const capApplied = valid && uncappedCapacity > baseCapacity
  const actualCapacity = Math.min(uncappedCapacity, baseCapacity)

  return {
    valid,
    baseCapacity,
    uncappedCapacity,
    capApplied,
    actualCapacity,
    margin: actualCapacity - loadWeight,
    usagePercent: (loadWeight / actualCapacity) * 100,
    exceeds: valid && loadWeight > actualCapacity,
    reductionPercent: (1 - actualCapacity / ratedCapacity) * 100,
    maxLoadCenter:
      loadWeight <= baseCapacity
        ? (baseCapacity * (a + ratedLoadCenter)) / loadWeight - a
        : Number.NaN,
  }
}
