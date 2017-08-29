import { decimalToBinary } from './decimalToBinary';

describe('Convert Decimal to binary', () => {
  [
    [3, '11'],
    [8, '1000'],
    [1000, '1111101000']
  ].forEach(arg => {
    it(`should convert decimal to binary: ${arg[0]} -> ${arg[1]}`, () => {
      expect(decimalToBinary(arg[0])).toEqual(arg[1]);
    })
  })
})
