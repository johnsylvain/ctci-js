/**
 * Create a tree with minimal height from a sorted array
 *
 * Time: O(2 ^ N)
 *
 * @param  {array} arr  sorted array of values
 * @return {object}     generated tree structure
 */
export function createMinimalHeightTree(arr) {
  if (arr.length === 0) return null;

  let idx = Math.floor(arr.length / 2);

  let node = {};
  node.data = arr[idx];
  node.left = createMinimalHeightTree(arr.slice(0, idx));
  node.right = createMinimalHeightTree(arr.slice(idx + 1, arr.length + 1));

  return node;
}
