import { createMinimalHeightTree } from './createMinimalHeightTree';

describe('Minimal height tree', () => {
  it('should create tree', () => {
    const expected = JSON.parse('{"data": 8,"left": {"data": 3,"left": {"data": 1,"left": null,"right": null},"right": {"data": 7,"left": null,"right": null}},"right": {"data": 10,"left": {"data": 9,"left": null,"right": null},"right": null}}');
    expect(createMinimalHeightTree([1, 3, 7, 8, 9, 10])).toEqual(expected);
  })
})
