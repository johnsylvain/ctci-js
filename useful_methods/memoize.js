/**
 * Simple caching system for expensive function calls.
 * Usecases include exponential complexities and recursive functions
 *
 *
 * @param  {function} func expensive function to be memoized
 * @return {*} result from cache or function call
 */
export function memoize(func) {
  let cache = {};

  return function() {
    let key = JSON.stringify(arguments);

    if (cache[key]) return cache[key];
    else {
      let val = func.apply(this, arguments);
      cache[key] = val;
      return val;
    }

  }
}
