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
module.exports = function maxDepth(root) {
  if (!root) {
    return 0;
  }
  const leftMax = maxDepth(root.left) + 1;
  const rightMax = maxDepth(root.right) + 1;
  return Math.max(leftMax, rightMax);
};
