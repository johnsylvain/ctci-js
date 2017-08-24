/**
 * Flatten multi-dimensional array containing varying data-types
 *
 * Time: O(N ln N)
 *
 * @param  {array} arr  multi-dimensional array to flatten
 * @return {array}      Flattened array
 */
export function flatten(arr) {
  return arr.reduce((acc, cur) => {
    if (!Array.isArray(cur)) {
      return [...acc, cur];
    } else {
      return [...acc, ...flatten(cur)];
    }
  }, []);
}
