import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  averageSpeed,
  computeTkph,
  isTruckValid,
  referenceK2,
  type TkphInput,
  type TruckWeights,
  tireLoadsFromTruck,
} from '../../src/lib/calculators/otr-tkph.ts'

const truck: TruckWeights = {
  emptyWeight: 65,
  loadedWeight: 160,
  frontEmptyPercent: 47,
  frontLoadedPercent: 33,
  frontTires: 2,
  rearTires: 4,
}

const input = (overrides: Partial<TkphInput> = {}): TkphInput => ({
  loads: tireLoadsFromTruck(truck),
  roundTripKm: 6,
  cyclesPerShift: 24,
  shiftHours: 12,
  k1: 1,
  k2: 1,
  ratedTkph: 280,
  ...overrides,
})

const close = (actual: number, expected: number, tolerance = 0.01) =>
  assert.ok(Math.abs(actual - expected) <= tolerance, `expected ${expected}, got ${actual}`)

describe('tireLoadsFromTruck', () => {
  it('splits truck weight by axle percentage and tires per axle', () => {
    const l = tireLoadsFromTruck(truck)
    close(l.frontEmpty, 15.275)
    close(l.frontLoaded, 26.4)
    close(l.rearEmpty, 8.6125)
    close(l.rearLoaded, 26.8)
  })

  it('rejects impossible truck data', () => {
    assert.equal(isTruckValid(truck), true)
    assert.equal(isTruckValid({ ...truck, loadedWeight: 60 }), false)
    assert.equal(isTruckValid({ ...truck, frontEmptyPercent: 100 }), false)
    assert.equal(isTruckValid({ ...truck, rearTires: 0 }), false)
  })
})

describe('referenceK2', () => {
  it('is 1 at the 38 °C reference temperature', () => {
    assert.equal(referenceK2(12, 38), 1)
  })

  it('uses 0.25 below the reference temperature', () => {
    close(referenceK2(12, 31), (12 - 1.75) / 12, 1e-9)
  })

  it('uses 0.40 above the reference temperature', () => {
    close(referenceK2(12, 48), 16 / 12, 1e-9)
  })
})

describe('computeTkph', () => {
  it('reproduces the page worked example (front 250, rear 212.5, margin 10.7 %)', () => {
    const r = computeTkph(input())
    assert.equal(averageSpeed(6, 24, 12), 12)
    close(r.meanLoadFront, 20.84, 0.01)
    close(r.meanLoadRear, 17.71, 0.01)
    close(r.tkphFront, 250, 0.1)
    close(r.tkphRear, 212.5, 0.1)
    assert.equal(r.frontIsCritical, true)
    close(r.criticalMargin, 10.7, 0.05)
    close(r.marginRear, 24.1, 0.05)
    assert.equal(r.verdict, 'adecuado')
  })

  it('multiplies by K1 and K2', () => {
    const r = computeTkph(input({ k1: 1.1, k2: 1.2 }))
    close(r.tkphFront, computeTkph(input()).tkphFront * 1.32, 1e-9)
  })

  it('flags a margin under 10 % as tight and a site TKPH over the rating as risk', () => {
    assert.equal(computeTkph(input({ ratedTkph: 270 })).verdict, 'justo')
    assert.equal(computeTkph(input({ ratedTkph: 240 })).verdict, 'riesgo')
  })

  it('picks the rear position when it is the critical one', () => {
    const r = computeTkph(input({ loads: { frontEmpty: 10, frontLoaded: 12, rearEmpty: 15, rearLoaded: 30 } }))
    assert.equal(r.frontIsCritical, false)
    assert.equal(r.criticalTkph, r.tkphRear)
  })

  it('returns no verdict for invalid input', () => {
    for (const bad of [input({ shiftHours: 0 }), input({ k1: 0 }), input({ ratedTkph: 0 })]) {
      const r = computeTkph(bad)
      assert.equal(r.valid, false)
      assert.equal(r.verdict, null)
    }
  })
})
