export function detectAnagram(str1, str2) {
  // anagram not possible is strings are of different lengths
  if (str1.length !== str2.length) return false

  let chars = new Map();

  for (let i = 0; i < str1.length; i++) {
    chars.set(str1[i], chars.get(str1[i]) + 1 || 1)
  }

  for (let k = 0; k < str2.length; k++) {
    let count = chars.get(str2[k]);

    if (!count) return false;

    if (count === 1) {
      chars.delete(str2[k])
    } else {
      chars.set(str2[k], chars.get(str2[k]) - 1)
    }
  }

  return chars.size === 0
}
