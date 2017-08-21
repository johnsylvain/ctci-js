import { replaceSpaces } from './ch1-q5';

describe('ch1-q5', () => {
  [
    ['one', 'one'],
    ['one two', 'one%20two'],
    ['one two three', 'one%20two%20three']
  ].forEach(arg => {
    it(`return encoded string: ${arg[0]}`, () => {
      expect(replaceSpaces(arg[0])).toBe(arg[1])
    })
  })
})
