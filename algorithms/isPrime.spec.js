import { isPrime } from './isPrime';

describe('Number is Prime', () => {
  [
    7, 19, 211, 839, 977
  ].forEach(num => {
    it(`should return true for ${num}`, () => {
      expect(isPrime(num)).toBe(true)
    });
  });

  [
    6, 24, 100, 1324, 4390
  ].forEach(num => {
    it(`should return false for ${num}`, () => {
      expect(isPrime(num)).toBe(false)
    });
  });
})
