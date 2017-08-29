/**
 * recursivly return the binary string of a given decimal number
 *
 * Time: O(N)
 *
 * @param  {number} digit   decimal number to be converted
 * @return {string}         binary string
 */
export function decimalToBinary(digit) {
  if (digit < 1) return '';

  if (digit % 2) return decimalToBinary((digit - 1) / 2) + 1;
  else return decimalToBinary(digit / 2) + 0;
}
