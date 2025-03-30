var RecentCounter = function () {
  this.reqTimeQueue = [];
};

module.exports = RecentCounter;

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.reqTimeQueue.push(t);
  while (this.reqTimeQueue[0] < t - 3000) {
    this.reqTimeQueue.shift();
  }
  return this.reqTimeQueue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

/**
 * 使用队列
 * 1. 压入时间
 * 2. 遍历从队列头弹出小于 t - 3000 的时间
 * 3. 剩余队列的长度就是最近的请求次数
 *
 * 时间复杂度：O(1)
 * 空间复杂度：O(n)
 */
