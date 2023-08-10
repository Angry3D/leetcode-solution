/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
module.exports = function nextPermutation(nums) {}

/**
 * 先理解题意，本题的意思是：
 * 1. 将一个整数数组转换为一个数字，如：[1,2,3] --> 123
 * 2. 改变数字的排列顺序，找到下一个比当前数字大一级的数字，其对应的数组即为结果，如：比 123 大一级的数字为 132，其对应的数组为 [1,3,2]，也即为结果
 * 3. 如果已经是最大的数字，则下一排列数字为最小数字，如：321 的下一排列数字为 123
 */
