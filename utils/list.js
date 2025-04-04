/**
 * 创建一个链表
 * @param {Array} array 数组
 * @returns {ListNode} 返回链表头结点
 */
function createList(array) {
  let head = null,
    cur = null;
  for (const item of array) {
    if (!head) {
      head = new ListNode(item);
      cur = head;
    } else {
      const node = new ListNode(item);
      cur.next = node;
      cur = node;
    }
  }
  return head;
}

/**
 * 将链表转换为数组
 * @param {ListNode} list
 * @returns {Array} 返回数组
 */
function listToArray(list) {
  const array = [];
  while (list) {
    array.push(list.val);
    list = list.next;
  }
  return array;
}

/**
 * 链表节点构造函数
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

module.exports = {
  createList,
  listToArray,
  ListNode
};
