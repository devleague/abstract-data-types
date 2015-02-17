var Stack = require('..').Stack;
var LinkedList = require('..').LinkedList;

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var TEST_VALUE = "Testing testing 1, 2, 3";

describe('Stack', function() {
  it('inherits from LinkedList', function() {
    expect(Stack.prototype).to.be.instanceOf(LinkedList);
  });

  describe('push', function() {
    var stack;
    beforeEach(function() {
      stack = new Stack();
    })

    it('has a push method', function() {
      expect(stack.push).to.be.a('function');
    });

    it('increases the length', function() {
      expect(stack.push.bind(stack, 123)).to.increase(stack, 'length');
      expect(stack.length).to.equal(1);
    });
  });

  describe('pop', function() {
    var stack;

    beforeEach(function() {
      stack = new Stack();
    });

    it('has a pop method', function() {
      expect(stack.pop).to.be.a('function');
    });

    it('throws an error if we pop an empty stack', function() {
      expect(stack.pop.bind(stack)).to.throw(Error);
    });

    it('returns the value on top of the stack', function() {
      stack.push(123);
      stack.push(TEST_VALUE);
      expect(stack.pop()).to.equal(TEST_VALUE);
    });

    it('decreases the length by one', function() {
      stack.push('abacadabba');
      expect(stack.pop.bind(stack)).to.decrease(stack, 'length');
      expect(stack.length).to.equal(0);
    });
  });

  describe('peek', function() {
    var stack;

    beforeEach(function() {
      stack = new Stack();
    });

    it('has a peek method', function() {
      expect(stack.peek).to.be.a('function');
    });

    it('throws an error if we peek an empty stack', function() {
      expect(stack.peek.bind(stack)).to.throw(Error);
    });

    it('returns the value on top of the stack', function() {
      stack.push(TEST_VALUE);
      expect(stack.peek()).to.equal(TEST_VALUE);
    });

    it('keeps the top node on top of the stack', function() {
      stack.push(TEST_VALUE);
      var topValue = stack.peek();
      expect(stack.pop()).to.equal(topValue);
    });
  });
});
