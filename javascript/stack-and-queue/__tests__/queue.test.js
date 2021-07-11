const Queue = require('../index').Queue;
describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });
  describe('Can successfully enqueue into a queue', () => {
    it('enqueue into a queue + enqueue multiple values into a queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.peek()).toEqual(1);
    });
  });
  describe('Can successfully dequeue out of a queue the expected value', () => {
    it('add items to the top of the queue and then pop until empty', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual(3);
      expect(queue.peek()).toBe('An empty queue');
    });
  });
  describe('Can successfully peek into a queue, seeing the expected value', () => {
    it('Can successfully peek into a queue, seeing the expected value', () => {
      queue.enqueue(1);
      expect(queue.peek()).toEqual(1);
      queue.enqueue(2);
      expect(queue.peek()).toEqual(1);
    });
  });
  describe('Can successfully empty a queue after multiple dequeues', () => {
    it('Can successfully empty a queue after multiple dequeues', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual(3);
      expect(queue.peek()).toBe("An empty queue");
    });
  });
  it('Can successfully instantiate an empty queue', () => {
    expect(queue instanceof Queue).toBeTruthy();
  });
  it('Calling pop or peek on empty queue raises exception', () => {
    expect(queue.peek()).toBe("An empty queue");
    expect(queue.dequeue()).toBe('An empty queue');
  });
});