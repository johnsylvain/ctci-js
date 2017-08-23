import { removeDuplicates } from './removeDuplicates';

describe('Remove dupes from array', () => {
  [
    [[1, 2, 3, 3, 4], [1, 2, 3, 4]],
    [['a', 'a', 'sd', 'a', '23'], ['a', 'sd', '23']]
  ].forEach(arg => {
    it(`should return clean array: ${arg[0].toLocaleString()}`, () => {
      expect(removeDuplicates(arg[0])).toEqual(arg[1])
    })
  })
})
