import { fibonacci } from './fibonacci';

describe('fibonacci', () => {
  [
    [12, 144],
    [20, 6765],
    [27, 196418],
    [50, 12586269025]
  ].forEach(arg => {
    it(`should return: ${arg[0]} => ${arg[1]}`, () => {
      expect(fibonacci(arg[0])).toBe(arg[1])
    })

  })
})
