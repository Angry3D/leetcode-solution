const utils = require('../utils')

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

// two listnode 1 / 10
const list1 = new ListNode(1, null)

const list2 = new ListNode(0, null)
list2.next = new ListNode(1, null)

utils.test('solution1', list1, list2)
utils.test('solution2', list1, list2)
