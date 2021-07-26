class Node {

  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

}


class BinaryTree {

  constructor(root) {
    this.root = null;
  }

  preOrder() {

    const result = [];

    const _recall = (node) => {
      result.push(node.value);
      if (node.left) _recall(node.left);
      if (node.right) _recall(node.right);
    };
    _recall(this.root);
    return result;
  }


  postOrder() {

    const result = [];

    const _recall = (node) => {
      if (node.left) _recall(node.left);
      if (node.right) _recall(node.right);
      result.push(node.value);
    };

    _recall(this.root);
    return result;
  }


  inOrder() {

    const result = [];

    const _recall = (node) => {
      if (node.left) _recall(node.left);
      result.push(node.value);
      if (node.right) _recall(node.right);
    };

    _recall(this.root);
    return result;
  }

  getMax() {
    if (this.root == null) {
      return ('cant get max of an empty tree');
    }

    let maxNode = this.root.value;

    const _isMax = (node) => {

      if (node.value >= maxNode) {
        maxNode = node.value;
      }
      if (node.left) _isMax(node.left);
      if (node.right) _isMax(node.right);

    }

    _isMax(this.root);
    return maxNode;
  }

}



class BinarySearchTree extends BinaryTree {

  constructor(root) {
    super(root);
  }

  add(value) {

    let node = new Node(value);
    let curr = this.root;

    const _add = (node) => {

      if (!this.root) {
        this.root = node;
      } else if (node.value > curr.value) {

        if (curr.right) {
          curr = curr.right;
          _add(node)
        } else {
          curr.right = node;
        }

      } else if (node.value < curr.value) {
        if (curr.left) {
          curr = curr.left;
          _add(node);
        } else {
          curr.left = node;
        }
      }

    }
    _add(node);
  }


  search(value) {
    let newResult = tree.inOrder()
    if (newResult.includes(value)) {
      return true;
    }
    else {
      return false;
    }
  }



}

function breadthFirst(tree) {
  let node = tree.root;

  if (node === null) {
    return 'Empty Tree';
  }

  let temp = [];
  let outPut = [];
  temp.push(node);

  while (temp.length > 0) {
    let currentNode = temp[0];
    if (currentNode.left !== null) {
      temp.push(currentNode.left)
    }

    if (currentNode.right !== null) {
      temp.push(currentNode.right)
    }
    outPut.push(temp.shift().value)
  }

  return outPut;
}


module.exports = { Node, BinarySearchTree, BinaryTree, breadthFirst }