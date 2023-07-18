/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = function removeDuplicates(nums) {
  const newAry = [...new Set(nums)]
  newAry.forEach((item, index) => {
    nums[index] = item
  })
  return newAry.length
}

/**
 * 巧用 js 内置的 Set 对象进行去重
 */
