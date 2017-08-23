/**
 * Implementation of the filter Array method
 *
 * Time: O(N)
 *
 * @param  {Array} arr      Items to be, passed in as an array
 * @param  {Function} func  Filter function that return a Boolean
 * @return {Array}          Return filtered array
 */
export function filter(arr, func, context) {
  let i = 0, output = new Array();

  for(; i < arr.length; i++) {
    if (func.call(context, arr[i], i, this)) 
      output.push(arr[i])
  }

  return output;
}
