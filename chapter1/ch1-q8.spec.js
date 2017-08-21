import { isRotated } from './ch1-q8';

describe('ch1-q8', () => {
  [
    ['waterbottle', 'erbottlewat'],
    ['classroom', 'omclassro'],
    ['!8ew9(*E)', '9(*E)!8ew']
  ].forEach(arg => {
    it('returns true for detect rotated string', () => {
      expect(isRotated(arg[0], arg[1])).toBe(true);
    });
  });

  [
    ['waterbottle', 'rbottlewat'],
    ['classroom', 'omClassro'],
    ['!8ew9(*E)', '9(*D)!8ew']
  ].forEach(arg => {
    it('returns false for not detecting rotated string', () => {
      expect(isRotated(arg[0], arg[1])).toBe(false);
    });
  });
});
