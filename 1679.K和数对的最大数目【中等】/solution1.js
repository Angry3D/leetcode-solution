/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
module.exports = function maxOperations(nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1,
    result = 0;
  while (left < right) {
    const leftn = nums[left],
      rightn = nums[right];
    if (leftn + rightn > k) {
      right--;
    } else if (leftn + rightn < k) {
      left++;
    } else {
      right--;
      left++;
      result++;
    }
  }
  return result;
};

/**
 * 双指针
 * 1. 先对数组进行排序
 * 2. 令 left 指向最小值的下标，right 指向最大值的下标
 * 3. 如果 leftn + rightn > k 则 right-- 否则 left++
 *
 * 时间复杂度 O(nlogn)
 * 空间复杂度 O(1)
 */
