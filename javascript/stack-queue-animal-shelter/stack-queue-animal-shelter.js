class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(value) {
    if (value != "dog" && value != "cat") {
      return "can only accept cat or dog";
    }
    let node1 = new Node(value);
    if (!this.front) {
      this.front = node1;
      this.rear = node1;
    } else {
      this.rear.next = node1;
      this.rear = node1;
    }
  }
  dequeue() {
    if (!this.front) {
      throw new Error('cant dequeue an empty queue');
    }
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    return temp.value;
  }
}

module.exports = { AnimalShelter, Node }