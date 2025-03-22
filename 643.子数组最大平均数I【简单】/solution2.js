/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
module.exports = function findMaxAverage(nums, k) {
  let max = -Infinity,
    sum = 0;
  for (let i = 0, len = nums.length - k + 1; i < len; i++) {
    if (sum === 0) {
      for (let j = i; j < i + k; j++) {
        sum += nums[j];
      }
    } else {
      sum = sum - nums[i - 1] + nums[i + k - 1];
    }
    max = Math.max(max, sum);
  }
  return max / k;
};

/**
 * 整体思路基于 solution1
 * 不过，在计算 sum 时，不再每次都遍历
 * 而是将上一次的结果减去第一个值，再加上最后一个值，得出新的 sum
 * 
 * 大幅缩减计算 sum 的时间
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
