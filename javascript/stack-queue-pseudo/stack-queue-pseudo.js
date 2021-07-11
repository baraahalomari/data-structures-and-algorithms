'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }


  push(node) {
    if (!this.top) {
      this.top = node;
      return;
    } else {
      node.next = this.top;
      this.top = node;
    }
    return this.top;
  }

  pop() {
    if (!this.top) {
      return 'it is an empty stack';
    } else {
      let temp = this.top;

      this.top = temp.next;
      return temp;
    }
  }

  peek() {
    if (!this.top) {
      return 'it is an empty stack';
    } else {
      return this.top.value;
    }
  }
}

//the bottom of the first will be at the top of the second
class PseudoQueue {
  constructor() {
    this.front = new Stack();
    this.rear = new Stack();
  }
  enqueue(value) {
    if (!this.front.top) {
      this.front.push(value)
    }

    this.rear.push(value);
  }

  dequeue() {
    if (!this.front.top) {
      while (this.rear.top) {
        this.front.push(this.rear.pop());
      }
    }
    return this.front.pop();
  }
}

module.exports = {
  node: Node,
  stack: Stack,
  queue: PseudoQueue,
};