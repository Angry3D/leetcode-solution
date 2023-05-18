/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
module.exports = function mergeTwoLists(list1, list2) {
  let result = null,
    cur = null

  while (list1 && list2) {
    let tmpCur
    if (list1.val > list2.val) {
      tmpCur = list2
      list2 = list2.next
    } else {
      tmpCur = list1
      list1 = list1.next
    }

    if (!cur) {
      cur = tmpCur
      result = tmpCur
    } else {
      cur.next = tmpCur
      cur = tmpCur
    }
  }

  if (result) {
    cur.next = list1 || list2
  } else {
    result = list1 || list2
  }

  return result
}
