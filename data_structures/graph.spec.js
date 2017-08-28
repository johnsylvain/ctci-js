import { Graph } from './graph';

describe('Graph data structure', function() {
  beforeEach(() => {
    this.graph = new Graph();
  });

  it('should contain inserted nodes', () => {
    let inputs = ['a', 'b', 'c'];

    inputs.forEach(node => {
      this.graph.addNode(node);
    });

    expect(this.graph.toArray()).toEqual(inputs);

  });

})
