class Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }

}

class LinkedList {

  constructor() {
    this.head = null;
  }

  prepend(value) {

    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

  }

  getValue(key) {

    let curr = this.head;
    let value = [];

    while (curr) {
      if (Object.keys(curr.value).includes(key)) {
        value.push(curr.value[key]);
      }
      curr = curr.next;
    }
    return value;

  }
}

class Hashtable {

  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  //key = name ==> 400
  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;

  }

  add(key, value) {

    // get an index
    const hash = this.hash(key);

    // we need to check if a value already exist in the index
    if (!this.storage[hash]) {
      const ll = new LinkedList();
      ll.prepend({ [key]: value });
      this.storage[hash] = ll; // [222] = {head:{value:{"key","value"},next:null}}

    } else {

      this.storage[hash].prepend({ [key]: value });
      return this.storage[hash].head.value[key];
    }

  }

  get(key) {

    const hash = this.hash(key);
    if (!this.storage[hash]) {
      return null;
    } else {
      return this.storage[hash].getValue(key);
    }

  }

  contains(key) {

    const hash = this.hash(key);
    if (!this.storage[hash]) {
      return false;
    } else {
      return true;
    }
  }


}

function repeatedWord(string) {

  let hashTable = new Hashtable(4000);
  let keys = string.toLowerCase().split(',').join('').split(' ');

  for (let i = 0; i < keys.length; i++) {
    if (hashTable.contains(keys[i])) {

      return keys[i];
    } else {
      
      hashTable.add(keys[i]);
    }
  }
  return 'cannot find words in an empty string';
}


module.exports = {
  Node,
  LinkedList,
  Hashtable,
  repeatedWord
}