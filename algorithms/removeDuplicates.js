export function removeDuplicates(arr) {
  let vals = new Set();
  let output = []

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (!vals.has(val)) {
      output.push(val)
      vals.add(val)
    }
  }

  return output;
}
