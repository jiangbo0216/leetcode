import {binPacking} from './多人骑车'

it('多人骑车', () => {
  // expect(binPacking([3, 4], [3, 2, 2, 1])).toBe(3)
  // expect(binPacking([4, 6], [4,3,3,3,1,1])).toBe(4)
  expect(binPacking([4, 6], [4,3,3,2,2,1])).toBe(4)
})