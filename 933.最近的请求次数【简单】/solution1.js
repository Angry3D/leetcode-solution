var RecentCounter = function () {
  this.reqTime = [];
};

module.exports = RecentCounter;

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.reqTime.push(t);
  this.reqTime = this.reqTime.filter((time) => time >= t - 3000 && time <= t);
  return this.reqTime.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

/**
 * 简单粗暴的使用数组，然后过滤不符合要求的时间
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
