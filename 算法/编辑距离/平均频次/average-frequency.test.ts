import {averageFrequency} from './average-frequency'

it('averageFrequency', () => {
  expect(averageFrequency('AAAA')).toBe(3)
  expect(averageFrequency('WASDAASD')).toBe(1)
  expect(averageFrequency('ASDW')).toBe(0)
})