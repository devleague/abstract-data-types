module.exports = TreeNode;

/**
 * TreeNodes objects contain a data value and (optionally)
 * links to other TreeNodes.
 * @param value – The data value associated with the TreeNode object.
 * @property value – The default value should be set to the value passed in.
 * @property {TreeNode} left – The default value should be set to `null`.
 * @property {TreeNode} right – The default value should be set to `null`.
 */
function TreeNode(value) {

}

/**
 * Set's the left TreeNode object.
 * @param {TreeNode} node – The left TreeNode object.
 * @throws {TypeError} – Should only accept other TreeNode objects.
 */
TreeNode.prototype.setLeft = function(node) {

};

/**
 * Returns the left TreeNode object.
 * @return {TreeNode} – The left TreeNode object.
 */
TreeNode.prototype.getLeft = function() {

};

/**
 * Set's the right TreeNode object.
 * @param {TreeNode} node – The right TreeNode object.
 * @throws {TypeError} – Should only accept other TreeNode objects.
 */
TreeNode.prototype.setRight = function(node) {

};

/**
 * Returns the right TreeNode object.
 * @return {TreeNode} – The right TreeNode object.
 */
TreeNode.prototype.getRight = function() {

};
