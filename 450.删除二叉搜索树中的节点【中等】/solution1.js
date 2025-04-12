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
 * @param {number} key
 * @return {TreeNode}
 */
module.exports = function deleteNode(root, key) {
  let targetNode = null,
    targetPreNode = null;

  function search(node, preNode, val) {
    if (!node) {
      return;
    }
    if (node.val === val) {
      targetNode = node;
      targetPreNode = preNode;
    } else if (node.val < val) {
      search(node.right, node, val);
    } else {
      search(node.left, node, val);
    }
  }
  search(root, null, key);

  if (!targetNode) {
    return root;
  }

  // 先解决 targetNode 左右节点的连接情况
  let sonRoot = null;
  if (targetNode.left) {
    sonRoot = targetNode.left;
    let right = sonRoot.right || sonRoot;
    while (right.right) {
      right = right.right;
    }
    right.right = targetNode.right;
  } else if (targetNode.right) {
    sonRoot = targetNode.right;
    let left = sonRoot.left || sonRoot;
    while (left.left) {
      left = left.left;
    }
    left.left = targetNode.left;
  }

  // 再解决 targetPreNode 的连接情况
  if (!targetPreNode) {
    return sonRoot;
  }
  const dir = targetPreNode.left === targetNode ? 'left' : 'right';
  targetPreNode[dir] = sonRoot;
  return root;
};
