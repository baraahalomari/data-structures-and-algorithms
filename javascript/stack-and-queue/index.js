class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(list) {
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
    constructor(list) {
        this.storage = list;
    }

    enqueue(value) {
        let node1 = new Node(value);
        if (!this.storage.head) {
            this.storage.head = node1;
            this.storage.rear = node1;
        } else {
            this.storage.rear.next = node1;
            this.storage.rear = node1;
        }

    }

    dequeue() {
        if (!this.storage.head) {
            return 'An empty queue';
        }
        let temp = this.storage.head;
        this.storage.head = temp.next;
        temp.next = null;
        return temp.value;
    }

    peek() {
        if (!this.storage.head) {
            return 'An empty queue';
        }
        return this.storage.head.value;
    }

    isEmpty() {
        if (!this.storage.head) {
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