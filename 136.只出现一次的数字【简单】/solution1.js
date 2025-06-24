/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = function singleNumber(nums) {
  const tempSet = new Set();
  for (const num of nums) {
    if (tempSet.has(num)) {
      tempSet.delete(num);
    } else {
      tempSet.add(num);
    }
  }
  return [...tempSet][0];
};

/**
 * 空间复杂度：O(n) 不符合题目要求
 */
