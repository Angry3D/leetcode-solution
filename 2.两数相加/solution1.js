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
module.exports = function addTwoNumbers(l1, l2) {
    const result = l1
    // 1.先直接相加，l2 往 l1 👆🏻加
    while (l1.next && l2.next) {
        l1.val += l2.val
        l1 = l1.next
        l2 = l2.next
    }
    l1.val += l2.val

    // 2.如果l2较长，则将l2合并到l1上
    if (l2.next) {
        l1.next = l2.next
    }

    // 3.整理最终的l1，做进位运算
    let _l1 = result
    while (_l1) {
        if (_l1.val >= 10) {
            _l1.val -= 10
            if (_l1.next) {
                _l1.next.val++
            } else {
                _l1.next = new ListNode(1, null)
            }
        }
        _l1 = _l1.next
    }
    return result
}
