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


class Queue {
    constructor(){
        this.front=null;
        this.rear=null;
      }
      enqueue(value){
        let addedNode = new Node(value);
        if(!this.front){
          this.front= addedNode;
          this.rear= addedNode;
        } else {
          
          this.rear.next=addedNode;
          this.rear =addedNode;
        }
        return this.rear;
      }

      dequeue(){
        if(!this.front){
           return 'An empty queue';
        } else {
          let temp = this.front;
          this.front = this.front.next;
          return temp.value;
        }
      }
      peek(){
        if(!this.front){
           return 'An empty queue';
        } else{
          return this.front.value;
        }
      }
    isEmpty() {
        if (!this.front) {
            return true;
        } else {
            return false;
        }
    }


}
module.exports = {
    Stack,
    Queue,
}