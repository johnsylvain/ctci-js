import { curry } from './curry';

describe('Curry functions', () => {
  it('should curry function', () => {
    const fn = curry((a, b, c) => a + b + c);

    expect(fn(1)(2)(3)).toEqual(6);

  })
})
