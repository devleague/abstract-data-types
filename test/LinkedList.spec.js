var Node = require('..').Node;
var LinkedList = require('..').LinkedList;

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe('LinkedList', function () {

  describe('head', function () {
    var linkedList;
    beforeEach(function() {
      linkedList = new LinkedList();
    });

    it('should have a default null value', function () {
      expect(linkedList.head).to.equal(null);
    });
  });

  describe('add()', function () {
    var linkedList, node, nextNode;
    beforeEach(function() {
      linkedList = new LinkedList();
      node = new Node();
      nextNode = new Node();
    });

    it('should have an `add` method', function() {
      expect(linkedList.add).to.be.a('function');
    });

    it('should throw an error if a non-Node value is passed in', function() {
      expect(linkedList.add.bind(linkedList, 42)).to.throw(Error);
    });

    it('should set the first Node object as the head', function() {
      expect(linkedList.add.bind(linkedList, node)).to.not.throw(Error);
      expect(linkedList.head).to.equal(node);
    });

    it('should set the successive to the end of the LinkedList', function() {
      linkedList.add(node);
      linkedList.add(nextNode);
      expect(linkedList.head).to.equal(node);
      expect(node.getNext()).to.equal(nextNode);
    });
  });

  describe('get()', function () {
    var linkedList, node, nextNode;
    beforeEach(function() {
      linkedList = new LinkedList();
      node = new Node();
      nextNode = new Node();
    });

    it('should have a `get` method', function() {
      expect(linkedList.get).to.be.a('function');
    });

    it('should get the first Node object if the index is 0', function() {
      linkedList.add(node);
      expect(linkedList.get(0)).to.equal(linkedList.head);
    });

    it('should get the n-th Node object in the LinkedList', function() {
      linkedList.add(node);
      linkedList.add(nextNode);
      expect(linkedList.get(0)).to.equal(node);
      expect(linkedList.get(1)).to.equal(nextNode);
    });
  });

  describe('remove()', function () {
    var linkedList, node, nextNode;
    beforeEach(function() {
      linkedList = new LinkedList();
      node = new Node(11);
      nextNode = new Node(13);
    });

    it('should have a `remove` method', function() {
      expect(linkedList.remove).to.be.a('function');
    });

    it('should remove the first Node object from the LinkedList', function() {
      linkedList.add(node);
      linkedList.add(nextNode);
      linkedList.remove(0);
      expect(linkedList.head).to.equal(nextNode);
    });

    it('removes the n-th Node object from the LinkedList', function() {
      linkedList.add(node);
      linkedList.add(nextNode);
      linkedList.remove(1);
      expect(linkedList.head).to.equal(node);
      expect(linkedList.head.getNext()).not.to.equal(nextNode);
    });
  });

  describe('length', function () {
    var linkedList, node, nextNode;
    beforeEach(function() {
      linkedList = new LinkedList();
      node = new Node();
      nextNode = new Node();
    });

    it('should have a default `length` attribute of 0', function() {
      expect(linkedList.length).to.equal(0);
    });

    it('should increase as Node objects are added', function() {
      linkedList.add(node);
      expect(linkedList.length).to.equal(1);
      linkedList.add(nextNode);
      expect(linkedList.length).to.equal(2);
    });

    it('should decrease as Node objects are removed', function() {
      linkedList.add(node);
      linkedList.add(nextNode);
      expect(linkedList.length).to.equal(2);
      linkedList.remove(0);
      expect(linkedList.length).to.equal(1);
      linkedList.remove(0);
      expect(linkedList.length).to.equal(0);
    });

  });

});
