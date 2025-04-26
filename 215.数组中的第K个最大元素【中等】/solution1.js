/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
module.exports = function findKthLargest(nums, k) {
  // 先写一个内置排序的方法，后续用快排手写一遍（内置排序方法容易回家等通知 :) ）
  return nums.sort((a, b) => b - a)[k - 1];
};
