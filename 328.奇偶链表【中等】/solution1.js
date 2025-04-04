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
module.exports = function oddEvenList(head) {
  if (!head || !head.next) {
    return head;
  }

  let odd = head,
    even = head.next,
    firstEven = even;

  while (even && even.next) {
    // todo...
    odd.next = even.next;
    even.next = even.next.next;

    // next
    odd = odd.next;
    even = even.next;
  }

  // concat
  odd.next = firstEven;

  return head;
};

/**
 * 1. 令 odd 指向奇数节点，even 指向偶数节点，firstEven 用于保存偶数链表的头节点
 * 2. 遍历链表，直到 even 或 even.next 为 null
 * 3. 最后将奇数链表的尾节点指向偶数链表的头节点
 * 4. 返回头节点
 *
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
