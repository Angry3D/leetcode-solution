function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

// two listnode 1 / 10
const list1 = new ListNode(1, null)

const list2 = new ListNode(0, null)
list2.next = new ListNode(1, null)

// test solution1
const solution1 = require('./solution1')
console.log(solution1(list1, list2))

// test solution2
const solution2 = require('./solution2')
console.log(solution2(list1, list2))
