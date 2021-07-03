'use strict';

const LinkedLilst = require('../index');

describe('Linked List',()=>{
  it('Should Instantiate',()=>{
    const ll = new LinkedLilst();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
});

describe('can insert',()=>{
  it('can insert head ', ()=>{
    let ll = new LinkedLilst();
    ll.insert('first');
    expect(ll.head.value).toBe('first');      
  });
  it('multiple nodes',()=>{
    let ll = new LinkedLilst();
    ll.insert('first');
    ll.insert('sec');
    ll.insert('thir');
    expect(ll.head.next).toBeDefined();
  });
  it('include node',()=>{
    let ll = new LinkedLilst();
    ll.insert('first');
    ll.insert('sec');
    ll.insert('thir');
    expect(ll.includes('sec')).toBeTruthy();
    expect(ll.includes('fourth')).toBeFalsy();
  });
  it('return a collection',()=>{
    let ll = new LinkedLilst();
    ll.insert('first');
    ll.insert('sec');
    ll.insert('thir');
    expect(ll.toString()).toBe('{thir} -> {sec} -> {first}')
  })
})




