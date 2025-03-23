/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
module.exports = function longestOnes(nums, k) {
  let left = 0,
    right = 0,
    len = nums.length,
    max = 0,
    count = k;

  while (right < len) {
    // move right
    while (right < len && (count > 0 || nums[right] === 1)) {
      if (nums[right] === 0 && count > 0) {
        count--;
      }
      right++;
    }

    max = Math.max(max, right - left);

    // move left & right
    left++;
    right++;
    while (nums[left - 1] === 1 && left < right) {
      left++;
    }
  }

  return max;
};

/**
 * 滑动窗口
 * 1. left & right 指针
 * 2. 先移动 right，直到 k 被消耗完
 * 3. 开始移动 left，直到跳过第一个 0，然后再移动一次 right，为了后续判断
 * 4. 返回最大值
 */
