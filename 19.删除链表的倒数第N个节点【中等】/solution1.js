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
  // 1. 计算链表尺寸
  let sz = 0,
    node = head
  while (node) {
    sz++
    node = node.next
  }

  // 2. 特判
  if (n <= 0 || n > sz) {
    return null
  }

  // 3. 如果是第一个节点，特殊处理
  if (n === sz) {
    return head.next
  }

  // 4. 找到目标节点的上一个节点
  let index = sz - n - 1
  node = head
  while (index > 0) {
    node = node.next
    index--
  }
  node.next = node.next.next
  return head
}
