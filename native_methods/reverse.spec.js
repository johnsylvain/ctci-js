import { reverse, recursiveReverse } from './reverse';

describe('Reverse String', () => {
  [
    ['12345', '54321'],
    ['John Sylvain', 'niavlyS nhoJ']
  ].forEach(arg => {
    it(`should return the reversed string ${arg[0]} => ${arg[1]}`, () => {
      expect(reverse(arg[0])).toEqual(arg[1]);
    })

    it(`should return the reversed string recursively ${arg[0]} => ${arg[1]}`, () => {
      expect(recursiveReverse(arg[0])).toEqual(arg[1]);
    })
  })
})
