/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
module.exports = function pairSum(head) {
  // 1. 添加反向指针
  let tail = head;
  while (tail && tail.next) {
    tail.next.pre = tail;
    tail = tail.next;
  }

  // 2. 对向遍历，计算最大值
  let max = 0;
  while (head.pre !== tail) {
    max = Math.max(max, head.val + tail.val);
    head = head.next;
    tail = tail.pre;
  }

  return max;
};
