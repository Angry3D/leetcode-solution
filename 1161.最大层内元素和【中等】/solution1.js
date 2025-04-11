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
module.exports = function maxLevelSum(root) {
  let maxSum = -Infinity,
    maxLevel = 1;

  function bfs(nodes, level) {
    if (!nodes.length) {
      return;
    }

    let sum = 0,
      nextNodes = [];
    nodes.forEach((node) => {
      sum += node.val;
      if (node.left) nextNodes.push(node.left);
      if (node.right) nextNodes.push(node.right);
    });
    if (sum > maxSum) {
      maxSum = sum;
      maxLevel = level;
    }
    bfs(nextNodes, level + 1);
  }
  bfs([root], 1);

  return maxLevel;
};
