/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
module.exports = function nextPermutation(nums) {
  function swap(ary, i, j) {
    const tmp = ary[i]
    ary[i] = ary[j]
    ary[j] = tmp
  }

  // 从后往前查找第一个相邻升序的元素对 (i, j)
  let i, j
  for (let _i = nums.length - 2; _i >= 0; _i--) {
    if (nums[_i] < nums[_i + 1]) {
      i = _i
      j = _i + 1
      break
    }
  }

  if (i !== undefined) {
    // 如果找到了元素对，在 [j, end] 从后往前查找第一个大于 nums[i] 的值 nums[k]
    let k
    for (let _k = nums.length - 1; _k >= j; _k--) {
      if (nums[_k] > nums[i]) {
        k = _k
        break
      }
    }
    // 将 nums[i] 和 nums[k] 交换
    swap(nums, i, k)
  } else {
    // 如果没找到，说明已经是最大数组
    j = 0
  }

  // 倒序 [j, end]
  const end = nums.length - 1
  const sortEnd = Math.floor((end - j) / 2)
  for (let si = 0; si <= sortEnd; si++) {
    swap(nums, j + si, end - si)
  }
}

/**
 * 先理解题意，本题的意思是：
 * 1. 将一个整数数组转换为一个数字，如：[1,2,3] --> 123
 * 2. 改变数字的排列顺序，找到下一个比当前数字大一级的数字，其对应的数组即为结果，如：比 123 大一级的数字为 132，其对应的数组为 [1,3,2]，也即为结果
 * 3. 如果已经是最大的数字，则下一排列数字为最小数字，如：321 的下一排列数字为 123
 */
