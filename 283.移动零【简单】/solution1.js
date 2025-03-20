/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
module.exports = function moveZeroes(nums) {
  let zeroCount = 0;
  for (let i = 0, len = nums.length; i < len; ) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      zeroCount++;
    } else {
      i++;
    }
    if (i + zeroCount === len) {
      break;
    }
  }
  return nums;
};

/**
 * 取巧使用 js 的 splice 方法，其内部会进行内存数据的整块移动，并不是最优解
 */
