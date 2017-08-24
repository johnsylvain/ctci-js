/**
 * Implementation of the reverse String method
 *
 * Time: O(N)
 *
 * @param  {string} str   String to be reverse
 * @return {string}       The reversed string
 */
export function reverse(str) {
  let rev = [];

  for (let i = str.length - 1; i >= 0; i--) {
    rev[str.length - i] = str[i];
  }

  return rev.join('');
}

/**
 * Implementation of the reverse String method
 * Accomplished through recursion
 *
 * Time: O(N)
 *
 * @param  {string} str   String to be reverse
 * @return {string}       The reversed string
 */
export function recursiveReverse(str) {
  if (str.length === 0) return str;

  return recursiveReverse(str.substring(1)) + str[0];
}
