class Node {
  constructor(data) {
    this.data = data || null;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  push(data) {
    if (!this.root)
      return this.root = new Node(data);

    let currentNode = this.root;
    let newNode = new Node(data);

    this.size++;

    while(currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left)
          return currentNode.left = newNode;
        else
          currentNode = currentNode.left
      } else {
        if (!currentNode.right)
          return currentNode.right = newNode;
        else
          currentNode = currentNode.right
      }
    }
  }

  remove(val) {
    let removeNode = (node, data) => {
      if (!node) return null;

      if (data === node.data) {
        if (!node.left && !node.right) return null;

        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let temp = this.getMin(node.right);
        node.data = temp
        node.right = removeNode(node.right, temp);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
    }

    this.root = removeNode(this.root, val)
  }

  getMin(node) {
    if(!node)
      node = this.root;

    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  contains(val) {
    let currentNode = this.root;
    if (!currentNode) return false;

    while(currentNode) {
      if (currentNode.data === val) return true;
      if (val < currentNode.data)
        currentNode = currentNode.left
      else if (val > currentNode.data)
        currentNode = currentNode.right;
    }

    return false;
  }

  traverse(process) {
    function inOrder(node) {
      if (node) {
        if (node.left !== null){
          inOrder(node.left);
        }

        process.call(this, node);

        if (node.right !== null){
          inOrder(node.right);
        }
      }
    }

    inOrder(this.root);
  }

  toArray() {
    let array = [];

    this.traverse((node) => {
      array.push(node.data);
    });

    return array;
  }

}
