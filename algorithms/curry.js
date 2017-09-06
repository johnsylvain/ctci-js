/**
 * Given a function, return a curried version
 *
 * Time: O(N)
 *
 * @param  {function} fn    function to be curried
 * @param  {object} args    array of arguments
 * @return {function}       
 */
export function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return (...next) => curry(fn.bind(fn, ...args), ...next);
  }
}
