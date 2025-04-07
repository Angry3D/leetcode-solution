/**
 * 根据广度遍历（包含空节点标记 null）创建一颗二叉树
 * @param {*} breadth 广度遍历数组
 * @returns {Node} 二叉树的根节点
 */
function createBinaryTree(breadth) {
  if (breadth.length === 0 || breadth[0] === null) {
    return null;
  }

  // 创建根节点
  const root = new Node(breadth[0]);
  const queue = [root]; // 队列存储待处理的父节点
  let i = 1; // 数组指针

  while (queue.length > 0 && i < breadth.length) {
    const currentNode = queue.shift(); // 取出当前父节点

    // 处理左子节点
    if (i < breadth.length && breadth[i] !== null) {
      currentNode.left = new Node(breadth[i]);
      queue.push(currentNode.left);
    }
    i++;

    // 处理右子节点
    if (i < breadth.length && breadth[i] !== null) {
      currentNode.right = new Node(breadth[i]);
      queue.push(currentNode.right);
    }
    i++;
  }

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
