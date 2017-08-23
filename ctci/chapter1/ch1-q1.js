export function hasUniqueCharacters(string) {
  let chars = new Set();

  for (let i = 0; i < string.length; i++) {
    if (chars.has(string[i])) return false;
    else chars.add(string[i]);
  }
  return true;
}
