const { createList } = require('../utils/list');

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
module.exports = function deleteMiddle(head) {
  let curIndex = 1,
    curNode = head,
    midIndex = 0,
    preMidNode = head,
    midNode = head,
    calcMidIndex = 0;

  while (curNode) {
    // calc mid index
    calcMidIndex = Math.floor(curIndex / 2);
    if (calcMidIndex > midIndex) {
      midIndex = calcMidIndex;
      preMidNode = midNode;
      midNode = midNode.next;
    }

    // next
    curNode = curNode.next;
    curIndex++;
  }

  // delete mid node
  if (preMidNode === midNode) {
    return null;
  }
  preMidNode.next = midNode.next;

  return head;
};

const head = createList([1, 3, 4, 7, 1, 2, 6]);
module.exports(head);

/**
 * 1. 令 curIndex 为当前节点索引，令 midIndex 为中间节点索引
 * 2. curIndex 不断后移，并不对更新 midIndex，直到遍历 list 结束
 * 3. 最后将 midIndex 节点删除
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * 优化点：
 * 1. 可以使用快慢指针来找到中间节点
 * 2. 快指针每次遍历两个节点，慢指针每次遍历一个节点，这样当快指针遍历完成后，慢指针恰好处于中间节点位置
 * 3. 这样就省去了计算 midIndex 的时间消耗
 */
