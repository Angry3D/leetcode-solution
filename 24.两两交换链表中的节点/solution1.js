/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
module.exports = function swapPairs(head) {
  // count 0
  if (!head) {
    return null
  }
  // count 1
  if (head.next === null) {
    return head
  }
  // count >= 2
  let first = head,
    second = head.next,
    lastSecond = null
    ret = second
  while (first && second) {
    // swap
    first.next = second.next
    second.next = first
    if (lastSecond) {
      lastSecond.next = second
    }

    // next
    lastSecond = first
    first = first.next
    second = first ? first.next : null
  }
  return ret
}

/**
 * 迭代
 */
