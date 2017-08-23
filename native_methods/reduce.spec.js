import { reduce } from './reduce';

describe('Reduce Array', () => {
  [
    [[1, 2, 3, 4, 5], (a, c) => a + c, 0],
    [
      [
        {_id: '1', name: 'John'},
        {_id: '2', name: 'Jack'},
        {_id: '3', name: 'Tom'}
      ],
      (acc, cur) => {
        acc[cur._id] = cur.name;
        return acc;
      },
      {}
    ]
  ].forEach(arg => {
    let reduced = arg[0].reduce(arg[1], arg[2]);
    it(`should reduce array: ${JSON.stringify(arg[0])} => ${JSON.stringify(reduced)}`, () => {
      expect(reduce(arg[0], arg[1], arg[2])).toEqual(reduced);
    })
  })
})
