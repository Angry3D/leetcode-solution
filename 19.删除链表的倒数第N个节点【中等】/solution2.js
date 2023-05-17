/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
module.exports = function removeNthFromEnd(head, n) {
  // 查找指定节点的上一个节点
  function findPreNode(node, nodeN) {
    const preNode = node
    const curNode = node.next
    if (!curNode) {
      return {
        num: 0,
        node: preNode,
        found: nodeN === 0
      }
    }
    const info = findPreNode(curNode, nodeN)
    if (info.found) {
      return {
        num: info.num,
        node: info.node,
        found: true
      }
    }
    const num = 1 + info.num
    return {
      num,
      node: preNode,
      found: nodeN === num
    }
  }

  // 1. 查找目标节点的上一个节点
  const info = findPreNode(head, n)

  // 2. 处理
  if (info.found) {
    // 如果找到
    info.node.next = info.node.next.next
    return head
  } else {
    // 如果未找到，统一处理成头结点为查找结果
    return info.node.next
  }
}

/**
 * 使用递归，一次遍历找到结果
 */
