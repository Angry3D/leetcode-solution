/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = function singleNumber(nums) {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
};

/**
 * 空间复杂度：O(1) 符合题目要求
 */
