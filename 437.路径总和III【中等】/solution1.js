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
 * @param {number} targetSum
 * @return {number}
 */
module.exports = function pathSum(root, targetSum) {
  let count = 0;

  function dfs(node, sum, isRoot) {
    if (!node) {
      return;
    }
    if (sum - node.val === 0) {
      count++;
    }
    if (isRoot) {
      dfs(node.left, targetSum, true);
      dfs(node.right, targetSum, true);
    }
    dfs(node.left, sum - node.val, false);
    dfs(node.right, sum - node.val, false);
  }
  dfs(root, targetSum, true);

  return count;
};
