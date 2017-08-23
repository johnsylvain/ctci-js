export function isRotated(str1, str2) {
  // cannot be rotated if different lengths
  if (str1.length !== str2.length) return false;

  // double the length of str1 to detect rotated string
  return isSubstring(str1 + str1, str2)
}

function isSubstring(str, sub) {
  return str.includes(sub) ? true : false;
}
