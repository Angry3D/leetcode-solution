/**
 * @param {number[]} nums
 * @return {number[]}
 */
module.exports = function productExceptSelf(nums) {
  const result = [1],
    len = nums.length;

  // left
  for (let i = 1; i < len; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // right
  let r = 1;
  for (let i = len - 1; i >= 0; i--) {
    result[i] = result[i] * r;
    r = r * nums[i];
  }

  return result;
};

/**
 * 基于 solution1 进行优化
 * 1. 把 result 当做 leftMultis 进行填充
 * 2. 反向计算 rightMultis 时，利用 r = r * nums[i] 来更新最新的 r 值
 * 3. 最终让空间复杂度变成 O(1)
 */
