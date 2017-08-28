export class Graph {
  constructor() {
    this.nodes = {};
    this.edges = {};
  }

  addNode(node) {
    this.nodes[node] = node;
  }

  contains(node) {
    return this.nodes[node] ? true : false;
  }

  removeNode(node) {
    if (this.contains(node))
      delete this.nodes[node];
  }

  hasEdge(fromNode, toNode) {
    for(let key in this.edges) {
      let searchOne = this.edges[key][0] === fromNode && this.edge[key][1] === toNode;
      let searchTwo = this.edges[key][1] === fromNode && this.edge[key][0] === toNode;
      if (searchOne || searchTwo) return true;
    }
    return false;
  }

  addEdge(fromNode, toNode) {
    this.edges[fromNode] = [fromNode, toNode];
  }

  removeEdge(fromNode, toNode) {
    if (this.hasEdge(fromNode, toNode))
      delete this.edges[fromNode];
  }

  forEachNode(fn) {
    for (let node in this.nodes) {
      fn.call(undefined, node);
    }
  }

  toArray() {
    let output = [];

    this.forEachNode(node => {
      output.push(node);
    });

    return output;
  }
}
