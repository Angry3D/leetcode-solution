/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
module.exports = function lowestCommonAncestor(root, p, q) {
  function dfs(node, val, stack) {
    if (!node) {
      return null;
    }
    if (node.val === val) {
      stack.push(node);
      return true;
    }
    if (dfs(node.left, val, stack)) {
      stack.push(node);
      return true;
    }
    if (dfs(node.right, val, stack)) {
      stack.push(node);
      return true;
    }
  }

  const pStack = [],
    qStack = [];
  dfs(root, p.val, pStack);
  dfs(root, q.val, qStack);

  let shortStack, longStack;
  if (pStack.length < qStack.length) {
    shortStack = pStack;
    longStack = qStack;
  } else {
    shortStack = qStack;
    longStack = pStack;
  }

  return shortStack.find((item) => longStack.includes(item));
};

/**
 * 1. 找到 p 和 q 的路径，pStack 和 qStack
 * 2. 遍历短路径，直到在长路径中找到对应节点，返回即可
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
