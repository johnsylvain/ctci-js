/**
 * Compute permutions of array using Heap's algorithm
 *
 * Time: O(N!)
 *
 * @param  {array} array  array of values to permutate
 * @return {array}        array of strings of permutations
 */
export function permute(array) {
  let permutations = [array.join('')];

  const swap = function (arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  let generate = (len, arr) => {
    let l = len - 1;
    if (len === 1) return;
    else {
      for(let i = 0; i < l; i++) {
        generate(l, arr);
        l % 2 ? swap(arr, i, l) : swap(arr, 0, l);
        permutations.push(arr.join('').toString())
      }
      generate(l, arr)
    }
  }

  generate(array.length, array);
  return permutations;
}
