/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
module.exports = function goodNodes(root) {
  let count = 0;

  function dfs(node, maxVal = -Infinity) {
    if (!node) {
      return;
    }

    if (node.val >= maxVal) {
      count++;
      maxVal = node.val;
    }
    dfs(node.left, maxVal);
    dfs(node.right, maxVal);
  }

  dfs(root);

  return count;
};
