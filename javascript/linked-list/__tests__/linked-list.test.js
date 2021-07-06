'use strict';

const LinkedList = require('../index').LinkedList;
const linkedListZip = require('../index').linkedListZip;

describe('Linked List',()=>{
  it('Should Instantiate',()=>{
    const ll = new LinkedList();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
});

describe('can insert',()=>{
  it('can insert head ', ()=>{
    let ll = new LinkedList();
    ll.insert('first');
    expect(ll.head.value).toBe('first');      
  });
  it('multiple nodes',()=>{
    let ll = new LinkedList();
    ll.insert('first');
    ll.insert('sec');
    ll.insert('thir');
    expect(ll.head.next).toBeDefined();
  });
  it('include node',()=>{
    let ll = new LinkedList();
    ll.insert('first');
    ll.insert('sec');
    ll.insert('thir');
    expect(ll.includes('sec')).toBeTruthy();
    expect(ll.includes('fourth')).toBeFalsy();
  });
  it('return a collection',()=>{
    let ll = new LinkedList();
    ll.insert('first');
    ll.insert('sec');
    ll.insert('thir');
    expect(ll.toString()).toBe('{thir} -> {sec} -> {first}')
  })
})


describe('linked-list-insertions',()=>{

  it(' add a node to the end ',()=>{
    const ll = new LinkedList();
    ll.append('first');
    ll.append('sec');
    expect(ll.head.next.value).toBe('sec');
  });

  it(' add multiple nodes ',()=>{
    const ll = new LinkedList();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    expect(ll.head.next.next.next.value).toBe('fourth');
  });



  test('insert in the middle',()=>{
    const ll = new LinkedList();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    ll.insertBefore('stuff','thir');
    expect(ll.head.next.next.value).toBe('stuff');
  })
  test('insert before first',()=>{
    const ll = new LinkedList();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    ll.insertBefore('stuff','first');
    expect(ll.head.value).toBe('stuff');
  })
  test('insert after a value',()=>{
    const ll = new LinkedList();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    ll.insertAfter('stuff','thir');
    expect(ll.head.next.next.next.value).toBe('stuff');
  })
  test('insert after last',()=>{
    const ll = new LinkedList();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    ll.insertAfter('stuff','fourth');
    expect(ll.head.next.next.next.next.value).toBe('stuff');
  })

});


describe('linked-list-kth',()=>{
  it('k is greater than the length ',()=>{
    const ll = new LinkedList();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    expect(ll.kthFromEnd(15)).toBe('Exception');
    
  });

  it('k and the length of the list are the same',()=>{
    const ll = new LinkedList();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    expect(ll.kthFromEnd(4)).toBe('Exception');
    
  });

  it(' k is not a positive',()=>{
    const ll = new LinkedList();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    expect(ll.kthFromEnd(-4)).toBe('Exception');
    
  });

  it(' the linked list is of a size 1',()=>{
    const ll = new LinkedList();
    ll.append('first');
    expect(ll.kthFromEnd(0)).toBe('first');
    
  });

  it('Happy Path” where k is not at the end',()=>{
    const ll = new LinkedList();
    ll.append('first');
    ll.append('sec');
    ll.append('thir');
    ll.append('fourth');
    ll.append('fif');
    ll.append('sixth');
    ll.append('siventh');
    expect(ll.kthFromEnd(3)).toBe('fourth');
    
  });
});

describe('linked list zip',()=>{
  
  const list1 = new LinkedList();
  const list2 = new LinkedList();
  
  list1.append('first');
  list1.append('sec');
  list1.append('thir');
 
  list2.append('fourth');
  list2.append('fif');
  list2.append('sixth');
  expect(linkedListZip(list1,list2)).toBe('{first} -> {fourth} -> {sec} -> {fif} -> {thir} -> {sixth}');
})





