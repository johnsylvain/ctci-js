/**
 * Implementation of the reduce Array method
 *
 * Time: O(N)
 *
 * @param  {array} arr                      Items to be reduced, passed in as an array
 * @param  {function} func                  Reducer function
 * @param  {(array|number|object)} initVal  initial accumulator
 * @return {(array|number|object)}          The value that results from the reduction
 */
export function reduce(arr, func, initVal) {
  let accumulator = (initVal === undefined) ? undefined : initVal;

  for(let i = 0; i < arr.length; i++) {
    if (accumulator !== undefined)
      accumulator = func.call(undefined, accumulator, arr[i], i, arr);
    else
      accumulator = arr[0]
  }

  return accumulator;

}
