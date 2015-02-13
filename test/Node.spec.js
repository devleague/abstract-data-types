var Node = require('..').Node;

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe('Node', function () {

  describe('value', function () {
    it('should have a value', function () {
      var node = new Node(42);
      expect(node.value).to.equal(42);
    });
  });

  describe('setNext()', function () {
    var node, nextNode;
    beforeEach(function() {
      node = new Node();
      nextNode = new Node();
    });

    it('should have a `setNext` method', function() {
      expect(node.setNext).to.be.a('function');
    });

    it('should throw an error if a non-Node value is passed in', function() {
      expect(node.setNext.bind(node, 42)).to.throw(Error);
    });

    it('should set a reference to another Node', function() {
      expect(node.setNext.bind(node, nextNode)).to.not.throw(Error);
    });
  });

  describe('getNext()', function () {
    var node, nextNode;
    beforeEach(function() {
      node = new Node();
      nextNode = new Node();
    });

    it('should have a `getNext` method', function() {
      expect(node.getNext).to.be.a('function');
    });

    it('should have a default value of `null`', function() {
      expect(node.getNext()).to.equal(null);
    });

    it('should return the next Node', function() {
      node.setNext(nextNode);
      expect(node.getNext()).to.equal(nextNode);
    });
  });

});
