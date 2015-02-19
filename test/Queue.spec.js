var Queue = require('..').Queue;
var LinkedList = require('..').LinkedList;

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var TEST_VALUE = "Testing testing 1, 2, 3";

describe('Queue', function() {
  it('inherits from LinkedList', function() {
    expect(Queue.prototype).to.be.instanceOf(LinkedList);
  });

  describe('enqueue', function() {
    var queue;
    beforeEach(function() {
      queue = new Queue();
    });

    it('has an enqueue method', function() {
      expect(queue.enqueue).to.be.a('function');
    });

    it('increases the length', function() {
      expect(queue.enqueue.bind(queue, 123)).to.increase(queue, 'length');
      expect(queue.length).to.equal(1);
    });
  });

  describe('dequeue', function() {
    var queue;
    beforeEach(function() {
      queue = new Queue();
    });

    it('has a dequeue method', function() {
      expect(queue.dequeue).to.be.a('function');
    });

    it('throws an error if we dequeue an empty queue', function() {
      expect(queue.dequeue.bind(queue)).to.throw(Error);
    });

    it('returns the value at the end of the queue', function() {
      queue.enqueue(TEST_VALUE);
      queue.enqueue(123);
      expect(queue.dequeue()).to.equal(TEST_VALUE);
    });

    it('decreases the length of the queue by one', function() {
      queue.enqueue(TEST_VALUE);
      queue.dequeue();
      expect(queue.length).to.equal(0);
    });
  });
});