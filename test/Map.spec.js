var Map = require('..').Map;

var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe('Map', function() {
  it('has a set function', function() {
    var map = new Map();
    expect(map.set).to.be.a('function');
  });

  it('has a get function', function() {
    var map = new Map();
    expect(map.get).to.be.a('function');
  });

  describe('setting and fetching values', function() {
    var map;
    beforeEach(function() {
      map = new Map();
    });

    it('returns null if there is no value', function() {
      expect(map.get('foo')).to.equal(null);
    });

    it('retrives a value that we set', function() {
      var key = 123;
      var value = 'foobarbaz';
      map.set(key, value);
      expect(map.get(key)).to.equal(value);
    });

    it('updates a key', function() {
      var key = 123;
      var value = 'foobarbaz';

      map.set(key, 'meh');
      map.set(key, value);
      expect(map.get(key)).to.equal(value);
    });
  });

  describe('remove', function() {
    var map;
    beforeEach(function() {
      map = new Map();
    });

    it('throws an error if that key is not available', function() {
      expect(map.remove.bind(map)).to.throw(Error);
    });

    it('removes the value from the map.', function() {
      var key = 123;
      map.set(key, "meh");
      map.remove(key);
      expect(map.get(key)).to.equal(null);
    });
  });

  // describe('ADVANCED: collision handling', function() {
  //   var map;

  //   beforeEach(function() {
  //     map = new Map();
  //     map._hashFunction = sinon.stub().returns(0);
  //   });

  //   it('returns the appropriate value', function() {
  //     var key = 123;
  //     var value = 'foobarbaz';

  //     map.set(key, value);
  //     map.set(key + 1, 'meh');

  //     expect(map.get(key)).to.equal(value);
  //   });

  //   it('updates a key', function() {
  //     var key = 123;
  //     var value = 'foobarbaz';

  //     map.set(key, 'meh');
  //     map.set(key, value);
  //     map.set(key + 1, 'meh meh');
  //     expect(map.get(key)).to.equal(value);
  //   });

  //   it('removes a key', function() {
  //     var key = 123;
  //     var value = 'foobarbaz';

  //     map.set(key, value);
  //     map.set(key + 1, 'meh');
  //     map.remove(key);

  //     expect(map.get(key)).to.equal(null);
  //   })
  // });
});