import { createTree } from './createTree';

describe('Creates tree from Array of Objects', () => {
  const categories = [
    {id: 'animals', parent: null},
    {id: 'mammals', parent: 'animals'},
    {id: 'cats', parent: 'mammals'},
    {id: 'dogs', parent: 'mammals'},
    {id: 'labrador', parent: 'dogs'},
    {id: 'poodle', parent: 'dogs'},
    {id: 'persian', parent: 'cats'},
    {id: 'siamese', parent: 'cats'}
  ];

  const result = {
    animals: {
      mammals: {
        cats: {
          persian: {},
          siamese: {}
        },
        dogs: {
          labrador: {},
          poodle: {}
        }
      }
    }
  }

  it('should create a tree', () => {
    expect(createTree(categories, null)).toEqual(result);
  })
})
