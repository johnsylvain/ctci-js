import { isSorted } from './isSorted';

describe('Array is sorted', () => {
  [
    [],
    [9, 9, 10, 20],
    [-Infinity, -5, 0, 3, 9]
  ].forEach(arg => {
    it(`should return true for a sorted array: ${arg.toLocaleString()}`, () => {
      expect(isSorted(arg)).toBeTruthy();
    });
  });

  [
    [3, 9, -3, 10],
    [-1, 2, 9, 10, 2]
  ].forEach(arg => {
    it(`should return false for an unsorted array: ${arg.toLocaleString()}`, () => {
      expect(isSorted(arg)).toBeFalsy();
    });
  });
});
