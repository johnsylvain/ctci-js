export function mostCommonString(arr) {
  let table = new Map();
  let max = 0, idx = null;

  arr.forEach(i => {
    if (!table.has(i)) table.set(i, 1);
    else table.set(i, table.get(i) + 1);
  });

  for (let [key, value] of table.entries()) {
    if (value > max) {
      max = value;
      idx = key;
    }
  }

  return idx;
}
