import { memoize } from './memoize';

describe('memoize function', () => {
  it('should be faster than vanilla functions', () => {
    // Vanilla Fibonacci
    function vanillaFibonacci (n) {
      return n < 2 ? n : vanillaFibonacci(n - 1) + vanillaFibonacci(n - 2)
    }

    const vanillaExecTimeStart = Date.now()
    vanillaFibonacci(35)
    const vanillaExecTime = Date.now() - vanillaExecTimeStart

    // Memoized
    let fibonacci = n => n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)

    fibonacci = memoize(fibonacci)
    const memoizedFibonacci = fibonacci

    const memoizedExecTimeStart = Date.now()
    memoizedFibonacci(35)
    const memoizedExecTime = Date.now() - memoizedExecTimeStart

    // Assertion
    expect(memoizedExecTime < vanillaExecTime).toBe(true)

  });

  it('should memoize functions with N arguments', () => {
    function nToThePower (n, power) {
      return Math.pow(n, power)
    }

    const memoizedNToThePower = memoize(nToThePower)

    // Assertions
    expect(memoizedNToThePower(2, 3)).toBe(8)
    expect(memoizedNToThePower(2, 3)).toBe(8)
  })
})
