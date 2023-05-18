/**
 * 创建一个链表
 * @param {Array} array 数组
 * @returns {ListNode} 返回链表头结点
 */
function createList(array) {
  let head = null,
    cur = null
  for (const item of array) {
    if (!head) {
      head = new ListNode(item)
      cur = head
    } else {
      const node = new ListNode(item)
      cur.next = node
      cur = node
    }
  }
  return head
}

/**
 * 链表节点构造函数
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

module.exports = {
  createList,
  ListNode
}
