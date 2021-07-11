'use strict';

const pq = require('../stack-queue-pseudo');

describe('testing pseudoqueue ', () => {
  const pseudoQueue = new pq.queue();
  const top = new pq.node(1);
  const add1 = new pq.node(2);
  const add2 = new pq.node(3);
  const rear = new pq.node(4);
  pseudoQueue.enqueue(top);
  pseudoQueue.enqueue(add1);
  pseudoQueue.enqueue(add2);
  pseudoQueue.enqueue(rear);

  it ('should insert value into the pseudoQueue first', () => {

    expect(pseudoQueue.rear.top.value).toEqual(4);
    expect(pseudoQueue.front.top.value).toEqual(1);
  });

  it ('should insert value into the empty pseudoque', () => {

    const pseudoQueueNew = new pq.queue();
    const top = new pq.node(4);

    pseudoQueueNew.enqueue(top);
  });

  it ('should output value of last node in pseudoqueue', () => {
    pseudoQueue.dequeue();

    expect(pseudoQueue.dequeue().value).toEqual(1);
  });
});