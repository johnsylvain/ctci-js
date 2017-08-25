/**
 * Compute n-th fibonacci number. with memoization to compute large terms
 *
 * Time: O(2 ^ N)
 *
 * @param  {number} n  n-th number in fibonacci sequance to compute
 * @return {number}    n-th fibonacci number
 */
export function fibonacci(n) {
  let memo = {};

  function f(n) {
    let value;

    if (memo[n]) value = memo[n];
    else {
      if (n <= 1) value = n;
      else
        value = f(n - 1) + f(n - 2)

      memo[n] = value;
    }

    return value;
  }

  return f(n);
}
