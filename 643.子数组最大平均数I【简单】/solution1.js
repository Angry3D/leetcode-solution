/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
module.exports = function findMaxAverage(nums, k) {
  let max = -Infinity;
  for (let i = 0, len = nums.length - k + 1; i < len; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += nums[j];
    }
    max = Math.max(max, sum);
  }
  return max / k;
};

/**
 * 暴力求解，容易超时
 */
