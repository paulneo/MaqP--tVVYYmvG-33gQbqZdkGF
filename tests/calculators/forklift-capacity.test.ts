import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { computeForkliftCapacity, type ForkliftInput } from '../../src/lib/calculators/forklift-capacity.ts'

const base: ForkliftInput = {
  ratedCapacity: 2500,
  ratedLoadCenter: 500,
  actualLoadCenter: 600,
  axleToForkFace: 0,
  reduction: null,
  loadWeight: 2000,
}

const close = (actual: number, expected: number, tolerance = 0.01) =>
  assert.ok(Math.abs(actual - expected) <= tolerance, `expected ${expected}, got ${actual}`)

describe('computeForkliftCapacity', () => {
  it('uses the simplified formula when the axle distance is unknown (page example: 2,083 kg)', () => {
    const r = computeForkliftCapacity(base)
    assert.equal(r.valid, true)
    close(r.actualCapacity, 2083.33)
    assert.equal(r.exceeds, false)
    close(r.margin, 83.33)
    close(r.usagePercent, 96)
    close(r.reductionPercent, 16.67)
  })

  it('uses the exact formula when the axle distance is known (page example: 2,262 kg with A = 450 mm)', () => {
    const r = computeForkliftCapacity({ ...base, axleToForkFace: 450 })
    close(r.actualCapacity, 2261.9)
  })

  it('the simplified result is never above the exact one when the load center grows', () => {
    const simplified = computeForkliftCapacity(base).actualCapacity
    const exact = computeForkliftCapacity({ ...base, axleToForkFace: 450 }).actualCapacity
    assert.ok(simplified < exact)
  })

  it('caps the capacity at the rated value when the load center is shorter', () => {
    const r = computeForkliftCapacity({ ...base, actualLoadCenter: 400 })
    close(r.uncappedCapacity, 3125)
    assert.equal(r.capApplied, true)
    assert.equal(r.actualCapacity, 2500)
  })

  it('applies a percentage attachment reduction (page FAQ: 1,875 kg, the 2,000 kg load exceeds)', () => {
    const r = computeForkliftCapacity({ ...base, reduction: { mode: 'percent', value: 10 } })
    assert.equal(r.baseCapacity, 2250)
    close(r.actualCapacity, 1875)
    assert.equal(r.exceeds, true)
  })

  it('applies a weight attachment reduction', () => {
    const r = computeForkliftCapacity({ ...base, reduction: { mode: 'weight', value: 250 } })
    assert.equal(r.baseCapacity, 2250)
    close(r.actualCapacity, 1875)
  })

  it('works in imperial units (post example: 5,000 lb at 24 in, load at 33 in gives 3,636 lb)', () => {
    const r = computeForkliftCapacity({
      ...base,
      ratedCapacity: 5000,
      ratedLoadCenter: 24,
      actualLoadCenter: 33,
      loadWeight: 4000,
    })
    close(r.actualCapacity, 3636.36)
    assert.equal(r.exceeds, true)
  })

  it('returns the max load center for the load, and NaN when the load exceeds the base capacity', () => {
    close(computeForkliftCapacity(base).maxLoadCenter, 625)
    assert.ok(Number.isNaN(computeForkliftCapacity({ ...base, loadWeight: 3000 }).maxLoadCenter))
  })

  it('flags invalid input and never reports an exceeded load for it', () => {
    for (const bad of [
      { ...base, ratedCapacity: 0 },
      { ...base, actualLoadCenter: 0 },
      { ...base, loadWeight: 0 },
      { ...base, axleToForkFace: -1 },
      { ...base, reduction: { mode: 'weight' as const, value: 2500 } },
      { ...base, reduction: { mode: 'percent' as const, value: -5 } },
    ]) {
      const r = computeForkliftCapacity(bad)
      assert.equal(r.valid, false)
      assert.equal(r.exceeds, false)
    }
  })
})
