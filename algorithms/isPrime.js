export function isPrime(num) {
  let count = 2;

  while(count < num) {
    if (num % count === 0) return false;
    else count++
  }
  return true;
}
