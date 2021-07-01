'use strict';
// Require our linked list implementation
const LinkedLilst = require('../index');
describe('checks if it includes a value',()=>{
  test('insert',()=>{
    let ll = new LinkedLilst();
    expect(ll.head).toBe(null);
    ll.insert('a');
    expect(ll.head.value).toBe('a');
    ll.insert(false);
    ll.insert('c');
    ll.insert('d');
    // 
  })
  test('includes',()=>{
    let ll = new LinkedLilst();
    ll.insert('a');
    ll.insert(false);
    ll.insert('c');
    ll.insert('d');
    expect(ll.includes('d')).toBe(true);
    expect(ll.includes('a')).toBe(true);
    expect(ll.includes('h')).toBe(false);
  })
  test('read all node values',()=>{
    let ll = new LinkedLilst();
    ll.insert('a');
    ll.insert(false);
    ll.insert('c');
    ll.insert('d');
    expect(ll.toString()).toBe('{d} -> {c} -> {false} -> {a}');
  })
})