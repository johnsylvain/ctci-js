import { permute } from './permute';

describe('Create permutations', () => {
  [
    [['1', '2'], ['12', '21']],
    [['a', 'b', 'c'], ['abc', 'bac', 'cab', 'acb', 'bca', 'cba']]
  ].forEach(arg => {
    it(`should return permutations: ${arg[0].toLocaleString()}`, () => {
      expect(permute(arg[0])).toEqual(arg[1]);
    })

  })
})
