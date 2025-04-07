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
module.exports = function longestZigZag(root) {
  const DIR_LEFT = 0,
    DIR_RIGHT = 1;

  function getZigZagLength(node, dir, len) {
    if (!node) {
      return len;
    }
    // console.log('getZigZagLength ::', node.val, dir, len);

    const nodeLen = getZigZagLength(
      dir === DIR_LEFT ? node.right : node.left,
      dir === DIR_LEFT ? DIR_RIGHT : DIR_LEFT,
      len + 1
    );
    const rootLen = getZigZagLength(
      dir === DIR_LEFT ? node.left : node.right,
      dir,
      0
    );

    return Math.max(rootLen, nodeLen);
  }

  return Math.max(
    getZigZagLength(root.left, DIR_LEFT, 0),
    getZigZagLength(root.right, DIR_RIGHT, 0)
  );
};
