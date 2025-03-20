/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
module.exports = function moveZeroes(nums) {
  // 始终指向第一个 0，-1表示还没有值
  let firstZeroIndex = 0,
    temp = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== 0) {
      // 交换
      temp = nums[i];
      nums[i] = nums[firstZeroIndex];
      nums[firstZeroIndex] = temp;
      firstZeroIndex++;
    }
  }
};

/**
 * 双指针
 * 1. 令 firstZeroIndex 指向第一个 0 的索引，令 i 指向当前遍历的索引
 * 2. 如果遇到非 0，交换 i 和 firstZeroIndex 的值，并将 firstZeroIndex ++
 * 3. 直到遍历完成
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
