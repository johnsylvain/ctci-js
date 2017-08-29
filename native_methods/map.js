/**
 * Implementation of the map Array method
 *
 * Time: O(N)
 *
 * @param  {Array} arr    Items to be mapped, passed in as an array
 * @param  {Function} fn  Mapping function that return a new value for each item
 * @return {Array}        Return mapped array
 */
export function map(arr, fn) {
  let mapped = [];

  for(let i = 0; i < arr.length; i++) {
    mapped.push(fn(arr[i]));
  }

  return mapped;
}

/**
 * Implementation of the map Array method, accomplished through recursion
 *
 * Time: O(N)
 *
 * @param  {Array} arr    Items to be mapped, passed in as an array
 * @param  {Function} fn  Mapping function that return a new value for each item
 * @return {Array}        Return mapped array
 */
export function mapRec(arr, fn) {
  if (arr.length === 0) return [];

  return [ fn(arr[0]), ...mapRec(arr.slice(1), fn) ];
}
