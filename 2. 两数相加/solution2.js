/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function (l1, l2) {
  const result = l1;
  let isCarry = false;
  while (l1) {
    l1.val += l2 ? l2.val : 0;
    if (isCarry) {
      isCarry = false;
      l1.val++;
    }
    if (l1.val >= 10) {
      l1.val -= 10;
      isCarry = true;
    }
    if (!l1.next && l2 && l2.next) {
      l1.next = l2.next;
      l2 = null;
    }
    if (!l1.next && isCarry) {
      // 如果最后一位了 && 需要进位
      l1.next = new ListNode(1, null);
      l1 = null;
    } else {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  return result;
};

/**
 * 思路：与第一种方法思路相同
 * 但将第一种方式的遍历两次，优化成只遍历一次，减少了事件复杂度
 */