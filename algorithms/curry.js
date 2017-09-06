// export const sumTwo = (a) => (b) => {
//   return a + b;
// }

// function argsArray(argsObject) {
//   return Array.prototype.slice.call(argsObject, 0)
// }
//
// function curry(fn, n) {
//   let args = argsArray(arguments);
//   if (n === args.length - 2) {
//     return f.apply(undefined, args.slice(2))
//   } else {
//     return function() {
//       return curry.apply(undefined, args.concat(arguments))
//     }
//   }
// }

export function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return (...next) => curry(fn.bind(fn, ...args), ...next);
  }
}
