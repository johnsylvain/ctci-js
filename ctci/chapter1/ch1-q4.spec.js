import { detectAnagram } from './ch1-q4';

describe('ch1-q4', () => {
  [
    ['elvis', 'lives'],
    ['asdqwe', 'wsqaed'],
    ['a1b2c3d4', '1234acbd'],
    ['!as^Bba', 'aaBb^!s']
  ].forEach(arg => {
    it(`returns true for detecting an anagram: ${arg[0]} ${arg[1]}`, () => {
      expect(detectAnagram(arg[0].split(''), arg[1].split(''))).toBe(true);
    });
  });

  [
    ['elvis', 'livds'],
    ['asdqwe1', 'a3sqaed'],
    ['asdlkj', 'hjkdsa'],
    ['!as^Bba', 'aaBB^!']
  ].forEach(arg => {
    it(`returns false for not detecting an anagram: ${arg[0]} ${arg[1]}`, () => {
      expect(detectAnagram(arg[0].split(''), arg[1].split(''))).toBe(false);
    });
  });
})
