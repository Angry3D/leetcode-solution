/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = function longestSubarray(nums) {
  const len = nums.length;

  let count = 1,
    left = 0,
    right = 0,
    max = 0;

  while (right < len) {
    // move right
    while (right < len && (count > 0 || nums[right] === 1)) {
      if (nums[right] === 0) {
        count--;
      }
      right++;
    }

    max = Math.max(max, right - left - 1);

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
 * 滑动窗口 与 ques.1004 类似
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
