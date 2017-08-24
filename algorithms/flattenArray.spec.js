import { flatten } from './flattenArray';

describe('Flatten multi-dimensional array', () => {
  [
    [[1, 2, [3, 4]], [1, 2, 3, 4]],
    [[{a: 1}, 2, [3, '4']], [{a: 1}, 2, 3, '4']]
  ].forEach(arg => {
    it(`should flatten array: ${JSON.stringify(arg[0])}`, () => {
      expect(flatten(arg[0])).toEqual(arg[1]);
    })
  })
})
