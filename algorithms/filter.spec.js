import { filter } from './filter';

describe('Filter array', () => {
  [
    [[1, 2, 3, 4, 5], n => n <= 3],
    [['john smith', 'jane doe', 'john doe', 'jack smith'], n => n.includes('john')]
  ].forEach(arg => {
    let sortedArr = arg[0].filter(arg[1]);
    it(`should return filtered array: ${arg[0]} => ${sortedArr}`, () => {
      expect(filter(arg[0], arg[1])).toEqual(sortedArr);
    })
  })
})
