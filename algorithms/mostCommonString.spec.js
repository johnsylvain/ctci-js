import { mostCommonString } from './mostCommonString';

describe('Find most common string in array', () => {
  [
    [['the', 'fox', 'jumped', 'over', 'the', 'fence'], 'the'],
    [['i', 'e', 'i', 'o', 'i', 'e'], 'i'],
    [['!0', 'e', 'we', 'E', 'we', 'e'], 'e']
  ].forEach(arg => {
    it(`should return: ${arg[1]}`, () => {
      expect(mostCommonString(arg[0])).toEqual(arg[1]);
    })
  })
})
