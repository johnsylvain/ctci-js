/**
 * Determine if all brackets, braces, and parenthesis are balanced in a string
 *
 * Time: O(N)
 *
 * @param  {string} str  string to be tested
 * @return {boolean}     return true for balanced, false otherwise
 */
export function isBalanced(str) {

  let open = ['(', '{', '['];
  let close = [')', '}', ']'];

  let stack = [];
  let expected = null;

  str.split('').forEach(char => {
    if (open.indexOf(char) > -1)
      stack.push(char);
    else if (close.indexOf(char) > -1) {
      expected = open[close.indexOf(char)];
      if (stack.length === 0 || (stack.pop() !== expected)) return false;
    }
  });

  return stack.length === 0;

}
