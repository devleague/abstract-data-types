var crypto = require('crypto');
module.exports = Map;

// For advanced students.
var LinkedList = require('./LinkedList');
var Node = require('./Node');

var MAP_CAPACITY = 100;

/**
 * A simple map implementation that uses an array for storage.
 * @property storage – An array where we will store the data.
 */
function Map() {

}

/**
 * Set the value at the provided key.
 * If you're doing the advanced tests, you will probably need a LinkedList.
 * Also, if you're doing the advanced tests, you will probably want to store
 * both the key and the value for the get implementation.
 * @param key – The key for the item we are storing.
 * @param value - The value that we are associating with the key.
 */
Map.prototype.set = function(key, value) {

}

/**
 * Get the value at the provided key.
 * If you're doing the advanced tests, you need to find the item matching your
 * key.
 * @param key – The key for the item.
 * @return The value associated with the key or null if it does not exist.
 */
Map.prototype.get = function(key) {

}

/**
 * Remove the value at the provided key.
 * If you're doing the advanced tests, you need to find the item matching your
 * key.
 * @param key – The key for the item we are removing.
 * @throws Error if the key does not map to a value.
 * @return The value associated with the key.
 */
Map.prototype.remove = function(key) {

}

/**
 * Helper function for computing an array index with a key.
 * Note, this should not be public, but it's public so I can stub it.
 * @param key - The key for the map
 * @return An array index to be used to insert into an array.
 */
Map.prototype._hashFunction = function(key) {
  // No need to be fancy. This isn't a password
  var shasum = crypto.createHash('md5');
  shasum.update(key.toString());
  return parseInt(shasum.digest('hex'), 16) % MAP_CAPACITY;
}
