/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = function removeDuplicates(nums) {
  let pre = 0,
    last = (next = pre + 1)
  while (next < nums.length) {
    if (nums[pre] !== nums[next]) {
      nums[last] = nums[next]

      // iterate
      pre = last
      last++
    }
    next++
  }
  return last
}

/**
 * 迭代方式
 */
