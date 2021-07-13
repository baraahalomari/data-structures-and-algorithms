class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Stack {
  constructor() {
      this.top = null

  }

  push(value) {
      let newNode = new Node(value);
      if (!this.top) {
          this.top = newNode;
      } else {
          newNode.next = this.top;
          this.top = newNode;
      }
      return this.top;
  }

  pop() {
      if (!this.top) {
          return 'An empty stack';
      } else {
          let temp = this.top;
          this.top = temp.next;
          return temp.value;
      }
  }

  peek() {
      if (!this.top) {
          return 'An empty stack';
      } else {
          return this.top.value
      }
  }

  isEmpty() {
      return this.top == null;
  }
}

let validateBrackets = (input) => {
let brackets = "[]{}()<>"
let stack = new Stack();
for(let bracket of input) {
  let bracketsIndex = brackets.indexOf(bracket)
  if (bracketsIndex === -1){
    continue
  }
  if(bracketsIndex % 2 === 0) {
    stack.push(bracketsIndex + 1)
  } else {
    if(stack.pop() !== bracketsIndex) {
      return false;
    }
  }
}
return stack.isEmpty()
}

validateBrackets('()[[Extra Characters]]');

module.exports={validateBrackets,Stack}