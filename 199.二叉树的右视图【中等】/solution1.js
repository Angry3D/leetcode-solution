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
 * @return {number[]}
 */
module.exports = function rightSideView(root) {
  if (!root) {
    return [];
  }

  const levelNodes = [[root]];
  function bfs(nodes) {
    const nextNodes = [];
    nodes.forEach((node) => {
      node.left && nextNodes.push(node.left);
      node.right && nextNodes.push(node.right);
    });
    if (nextNodes.length) {
      levelNodes.push(nextNodes);
      bfs(nextNodes);
    }
  }
  bfs([root]);

  return levelNodes.map((nodes) => nodes[nodes.length - 1].val);
};
