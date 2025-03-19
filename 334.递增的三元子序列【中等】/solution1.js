/**
 * @param {number[]} nums
 * @return {boolean}
 */
module.exports = function increasingTriplet(nums) {
  for (let i = 0, len = nums.length; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      if (nums[j] > nums[i]) {
        for (let k = j + 1; k < len; k++) {
          if (nums[k] > nums[j]) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

/**
 * 暴力遍历法，方法没问题，但是时间复杂度太高了
 */
