/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; ++i) {
    for (let m = i + 1; m < nums.length; ++m) {
      if (nums[i] + nums[m] == target) {
        return [i, m];
      }
    }
  }
};

/**
 * 思路：暴力遍历法
 * 遍历不同位置的两个数，直到满足条件
 */