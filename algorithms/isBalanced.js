/**
 * Determine if all brackets, braces, and parenthesis are balanced in a string
 *
 * Time: O(N)
 *
 * @param  {string} str  string to be tested
 * @return {boolean}     return true for balanced, false otherwise
 */
export function isBalanced(str) {
  let stack = [];
  let open = { '{': '}', '[': ']', '(': ')' };
  let closed = { '}': true, ']': true, ')': true };

  str.split('').forEach(char => {
    if (open[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (open[stack.pop()] !== char) return false;
    }

  });

  return stack.length === 0;
};
