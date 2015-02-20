var TreeNode = require('..').TreeNode;

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe('TreeNode', function () {

  describe('value', function () {
    it('should have a value', function () {
      var node = new TreeNode(42);
      expect(node.value).to.equal(42);
    });
  });

  describe('setLeft()', function () {
    var node, left;
    beforeEach(function() {
      node = new TreeNode(42);
      left = new TreeNode(41);
    });

    it('should have a `setLeft` method', function() {
      expect(node.setLeft).to.be.a('function');
    });

    it('should set the left node', function () {
      node.setLeft(left);
      expect(node.left).to.equal(left);
    });

    it('should throw an error if trying to add a non-TreeNode value', function() {
      expect(node.setLeft.bind(node, 41)).to.throw(Error);
    });

  });

  describe('getLeft()', function () {
    var node, leftNode;
    beforeEach(function() {
      node = new TreeNode(42);
      leftNode = new TreeNode(41);
    });

    it('should have a `getLeft` method', function() {
      expect(node.getLeft).to.be.a('function');
    });

    it('should have a default value of `null`', function() {
      expect(node.getLeft()).to.equal(null);
    });

    it('should return the left TreeNode', function() {
      node.setLeft(leftNode);
      expect(node.getLeft()).to.equal(leftNode);
    });
  });

  describe('setRight()', function () {
    var node, right;
    beforeEach(function() {
      node = new TreeNode(42);
      right = new TreeNode(43);
    });

    it('should set the right node', function () {
      node.setRight(right);
      expect(node.right).to.equal(right);
    });

    it('should throw an error if trying to add a non-TreeNode value', function() {
      expect(node.setRight.bind(node, 43)).to.throw(Error);
    });

  });

  describe('getRight()', function () {
    var node, rightNode;
    beforeEach(function() {
      node = new TreeNode(42);
      rightNode = new TreeNode(43);
    });

    it('should have a `getRight` method', function() {
      expect(node.getRight).to.be.a('function');
    });

    it('should have a default value of `null`', function() {
      expect(node.getRight()).to.equal(null);
    });

    it('should return the right TreeNode', function() {
      node.setRight(rightNode);
      expect(node.getRight()).to.equal(rightNode);
    });
  });

});
