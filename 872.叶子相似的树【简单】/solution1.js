/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
module.exports = function leafSimilar(root1, root2) {
  // 深度遍历的叶子节点集合
  function dfsLeavs(root, leavs) {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      leavs.push(root.val);
      return;
    }
    dfsLeavs(root.left, leavs);
    dfsLeavs(root.right, leavs);
  }

  const root1Leavs = [];
  const root2Leavs = [];
  dfsLeavs(root1, root1Leavs);
  dfsLeavs(root2, root2Leavs);

  return root1Leavs.join(',') === root2Leavs.join(',');
};
