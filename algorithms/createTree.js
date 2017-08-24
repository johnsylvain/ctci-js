/**
 * Create a tree from an array of objects
 *
 * Time: O(2 ^ N)
 *
 * @param  {array} arr      initial array of objects
 * @param  {string} parent  node parent
 * @return {object}         generated tree structure
 */
export function createTree(arr, parent) {
  let node = {};
  arr
    .filter(c => c.parent === parent)
    .forEach(c =>
      node[c.id] = createTree(arr, c.id)
    );
  return node;
}
