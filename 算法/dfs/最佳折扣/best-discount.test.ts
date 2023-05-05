import {bestDiscount} from './best-discount'

it('bestDiscount' , () => {
  expect(bestDiscount([3, 2, 5], [100, 200, 400])).toMatchInlineSnapshot(`
[
  [
    65,
    6,
  ],
  [
    135,
    8,
  ],
  [
    275,
    8,
  ],
]
`)
})