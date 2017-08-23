/**
 * Determine if given array is sorted
 *
 * Time: O(N)
 *
 * @param  {number[]} arr Integers to check, passed in as an array
 * @return {boolean}      True if sorted, otherwise false
 */
export function isSorted(arr) {
  if (arr.length === 0) return true;

  let prev = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (prev > arr[i]) return false;

    prev = arr[i];
  }

  return true;
}
