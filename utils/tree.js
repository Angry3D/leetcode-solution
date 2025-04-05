/**
 * 根据前序遍历（包含空节点标记 null）创建一颗二叉树
 * @param {*} breadth 广度遍历数组
 * @returns {Node} 二叉树的根节点
 */
function createBinaryTree(breadth, index = 0) {
  if (index >= breadth.length || breadth[index] === null) {
    return null;
  }
  const root = new Node(breadth[index]);
  root.left = createBinaryTree(breadth, index * 2 + 1);
  root.right = createBinaryTree(breadth, index * 2 + 2);
  return root;
}

// 二叉树节点
class Node {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

module.exports = {
  createBinaryTree,
  Node
};
