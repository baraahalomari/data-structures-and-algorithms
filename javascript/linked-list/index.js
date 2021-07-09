'use strict';
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {

    try {
      let addNode = new Node(value);
      if (!this.head) {
        this.head = addNode;
      } else {
        addNode.next = this.head;
        this.head = addNode;
      }
    } catch (err) {
      console.error(err)
    }

  }
  includes(value) {
    try {
      let current = this.head;
      if (!this.head) {
        return false;
      }
      while (current.next) {
        if (current.value == value) {
          return true;
        }
        current = current.next;
        if ((current.next == null) && (value == current.value)) {
          return true;
        }
      }
      return false;
    } catch (err) {
      console.error(err)
    }

  }
  toString() {
    let outPut = '';
    let current = this.head;
    while (current.next) {
      if (current.value == null || current.value == undefined) {
        outPut = outPut + `NULL -> `;
      } else {
        outPut = outPut + `{${current.value}} -> `;
      }
      current = current.next;
      if (current.next == null) {
        outPut = outPut + `{${current.value}}`;
      }
    }
    return outPut;
  }


  append(value) {
    let node1 = new Node(value);
    if (!this.head) {
      this.head = node1;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node1;
    }
  }
  insertAfter(newValue, value) {
    let node1 = new Node(newValue);
    let current = this.head;
    while (current) {
      if (current.value == value) {
        node1.next = current.next;
        current.next = node1;
        break;
      }
      console.log(current.value);
      current = current.next;
    }
  }
  insertBefore(newValue, value) {
    let node1 = new Node(newValue);
    let current = this.head;
    if (value == this.head.value) {
      node1.next = this.head;
      this.head = node1;
    } else {
      while (current) {
        if (current.next.value == value) {
          node1.next = current.next;
          current.next = node1;
          break;
        }
        console.log(current.value);
        current = current.next;
      }
    }
  }

  kthFromEnd(k) {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
    if (arr.length <= k  || k< 0) {
      return 'Exception';
    } else {
      return arr[arr.length - 1 - k]
    }
  }


}

function linkedListZip(list1,list2){
  let current1 = list1.head;
  let current2 = list2.head;
  let list3 = new LinkedList();
  while(current1||current2){
   
    if(current1!=null){
    list3.append(current1.value);
    current1=current1.next;
    } 
    if(current2!=null){
    list3.append(current2.value); 
    current2=current2.next; 
    }
  }
  return list3.toString();
}


module.exports = {LinkedList,linkedListZip};
