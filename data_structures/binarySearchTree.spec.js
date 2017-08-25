import { BinarySearchTree } from './binarySearchTree';

describe('Binary Search Tree', function() {
  beforeEach(() => {
    this.tree = new BinarySearchTree();
  });

  it('should contain inserted numbers', () => {
    const nums = [10, 8, 12];
    nums.forEach(num => this.tree.push(num))
    nums.forEach(num => {
      expect(this.tree.contains(num)).toBeTruthy();
    })
  });

  it('should not contain other numbers', () => {
    const nums = [10, 8, 12];
    nums.forEach(num => this.tree.push(num))
    expect(this.tree.contains(99)).toBeFalsy();
  });

  it('returns tree as array', () => {
    const input = [10, 8, 12, 20, 1, 3, 2];
    const output = [1, 2, 3, 8, 10, 12, 20];

    input.forEach(num => this.tree.push(num));

    expect(this.tree.toArray()).toEqual(output);
  })

  it('removes elements from tree', () => {
    const input = [10, 8, 12, 20, 1, 3, 2];

    input.forEach(num => this.tree.push(num))
    input.forEach(num => this.tree.remove(num));

    expect(this.tree.toArray()).toEqual([]);

  })
})
