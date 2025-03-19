/**
 * @param {number[]} nums
 * @return {boolean}
 */
module.exports = function increasingTriplet(nums) {
  const numsLen = nums.length;

  const leftMins = Array.from({ length: numsLen });
  leftMins[0] = nums[0];
  for (let i = 1; i < numsLen; i++) {
    leftMins[i] = Math.min(leftMins[i - 1], nums[i]);
  }

  const rightMaxs = Array.from({ length: numsLen });
  rightMaxs[numsLen - 1] = nums[numsLen - 1];
  for (let i = numsLen - 2; i >= 0; i--) {
    rightMaxs[i] = Math.max(rightMaxs[i + 1], nums[i]);
  }

  for (let i = 1; i < numsLen - 1; i++) {
    if (leftMins[i] < nums[i] && nums[i] < rightMaxs[i]) {
      return true;
    }
  }
  return false;
};

/**
 * 双向遍历
 * 1. 从左往右遍历，获得一个左侧最小值数组 leftMins，他满足 leftMins[i] <= nums[i]
 * 2. 从右往左遍历，获得一个右侧最大值数组 rightMaxs，他满足 nums[i] <= rightMaxs[i]
 * 3. 遍历 nums 数组，判断 nums[i] 是否满足 leftMins[i] < nums[i] < rightMaxs[i]
 * 时间复杂度 O(n)，空间复杂度 O(n)
 */
