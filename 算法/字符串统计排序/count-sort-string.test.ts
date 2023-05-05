import {countSortString, sortInWord, sortBetweenWord, countWord} from './count-sort-string'

it('sortInWord', () => {
  expect(sortInWord('This')).toBe('This')
  expect(sortInWord('apple')).toBe('aelpp')
})

it('sortBetweenWord', () => {
  expect(sortBetweenWord('My sister is in the house not in the yard'.split(' '))).toMatchInlineSnapshot(`
[
  [
    "in",
    1,
  ],
  [
    "the",
    1,
  ],
  [
    "My",
    0,
  ],
  [
    "is",
    0,
  ],
  [
    "not",
    0,
  ],
  [
    "yard",
    0,
  ],
  [
    "house",
    0,
  ],
  [
    "sister",
    0,
  ],
]
`)
})

it('countWord', () => {
  expect(countWord('My sister is in the house not in the yard'.split(' '))).toMatchInlineSnapshot(`
[
  [
    "in",
    "in",
  ],
  [
    "the",
    "the",
  ],
  [
    "My",
  ],
  [
    "is",
  ],
  [
    "not",
  ],
  [
    "yard",
  ],
  [
    "house",
  ],
  [
    "sister",
  ],
  [],
  [],
]
`)
})
it('countSortString', () => {
  expect(countSortString('My sister is in the house not in the yard')).toMatchInlineSnapshot(`"in in eht eht My is not adry ehosu eirsst"`)
  expect(countSortString('This is an apple')).toMatchInlineSnapshot(`"an is This aelpp"`)
})

