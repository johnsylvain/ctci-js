import * as funcs from './map';

for (let key in funcs) {
  let func = funcs[key];

  describe(`Reduce Array: ${key}`, () => {
    [
      [[ 'a', 'b', 'c' ], (value) => value.toUpperCase()],
      [[10, 20, 30, 45], num => num * 2]
    ].forEach(arg => {
      let mapped = arg[0].map(arg[1]);
      it(`should map array: ${JSON.stringify(arg[0])} => ${JSON.stringify(mapped)}`, () => {
        expect(func(arg[0], arg[1])).toEqual(mapped);
      });
    });
  });

}
