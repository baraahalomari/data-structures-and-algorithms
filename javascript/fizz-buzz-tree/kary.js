class Node {
  constructor(value = null, numOfChild = null) {
    this.value = value;
    this.numOfChild = numOfChild;
    for (let i = 1; i <= numOfChild; i++) {
      this[`child${i}`] = (new Node())
    }
  }
}


class KaryTree {
  constructor() {
    this.root = null;
  }

  add(newNode) {

    if (!this.root) {
      this.root = newNode;
    } else {
      if (newNode.numOfChild > this.root.numOfChild) {
        return 'Greater than max';
      } else {
        _reCare(this.root);
      }

      function _reCare(curr) {
        let isEmpty = false;

        for (let i = 1; i <= curr.numOfChild; i++) {
          if (curr[`child${i}`].value == null) {
            isEmpty = true;
          }
        }

        if (isEmpty) {
          for (let i = 1; i <= curr.numOfChild; i++) {
            if (curr[`child${i}`].value == null) {
              curr[`child${i}`] = newNode;
              break;
            }
          }
        } else {
          for (let i = 1; i <= curr.numOfChild; i++) {
            if (curr[`child${i}`][`child${curr[`child${i}`].numOfChild}`].value == null) {
              _reCare(curr[`child${i}`]);
              break;
            }
          }
        }
      }
    }
  }
}


function fizzBuzz(tree) {

  let newTree = new KaryTree();
  let root = { ...tree.root };

  if (!tree.root) {
    return 'the tree is empty';
  }

  if (root.value % 3 == 0 && root.value % 5 !== 0) {
    root.value = 'fizz';
  } else if (root.value % 3 == 0 && root.value % 5 == 0) {
    root.value = 'fizzBuzz';
  } else if (root.value % 5 == 0 && root.value % 3 !== 0) {
    root.value = 'Buzz';
  } else {
    root.value = root.value.toString();
  }
  
  newTree.add(new Node(root.value, root.numOfChild));
  move(root);
  function move(curr) {
    for (let i = 1; i <= curr.numOfChild; i++) {
      if (curr[`child${i}`].value !== null) {
        if (curr[`child${i}`].value % 3 == 0 && curr[`child${i}`].value % 5 !== 0) {
          curr[`child${i}`].value = 'fizz';
        } else if (curr[`child${i}`].value % 3 == 0 && curr[`child${i}`].value % 5 == 0) {
          curr[`child${i}`].value = 'fizzBuzz';
        } else if (curr[`child${i}`].value % 5 == 0 && curr[`child${i}`].value % 3 !== 0) {
          curr[`child${i}`].value = 'Buzz';
        } else {
          curr[`child${i}`].value = curr[`child${i}`].value.toString();
        }
      }
    }
    for (let i = 1; i <= curr.numOfChild; i++) {
      move(curr[`child${i}`])
    }
  }
  return root;
}
module.exports = {
  KaryTree,
  fizzBuzz,
  Node,
}