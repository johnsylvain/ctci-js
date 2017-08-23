import { fibonacci } from './fibonacci';

describe('fibonacci', () => {
  it('should return 144 for 12th term', () => {
    expect(fibonacci(12)).toBe(144)
  })
})
