import {binPacking} from './多人骑车'

it('多人骑车', () => {
  expect(binPacking([3, 4], [3, 2, 2, 1])).toBe(3)
})