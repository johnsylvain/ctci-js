import { hasUniqueCharacters } from './ch1-q1';

describe('ch1-q1', () => {
  [
    'abcdefghi',
    'jklpoiuqwerzxcvmnsadf',
    '1234567890',
    'AaBbCcDdeFg1234567890(*&^%$#@!)'
  ].forEach(arg => {
    it(`returns true for unique string: ${arg}`, () => {
      expect(hasUniqueCharacters(arg.split(''))).toBe(true)
    });
  });

  [
    'abcadef',
    'aaaaaaaaaa',
    'abcdefghijklmnopqrstuvwxyza',
    '1234567890asdklf1',
    '!@#$%^&*()(*#($&#(*$&#*($&#()))))'
  ].forEach(arg => {
    it(`returns false for duplicate chars in string: ${arg}`, () => {
      expect(hasUniqueCharacters(arg.split(''))).toBe(false)
    });
  });

})
