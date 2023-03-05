/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
module.exports = function threeSumClosest(nums, target) {
  if (!nums || nums.length < 3) {
    return 0
  }

  // 对原数组升序排序
  const ascNums = nums.sort((a, b) => a - b)
  const ascNumsLen = ascNums.length
  let diff = Infinity,
    result = 0

  for (let i = 0; i < ascNumsLen; i++) {
    let left = i + 1,
      right = ascNumsLen - 1
    while (left < right) {
      const sum = ascNums[i] + ascNums[left] + ascNums[right]
      if (sum === target) {
        return target
      } else if (sum > target) {
        right--
      } else {
        left++
      }
      const curDiff = Math.abs(sum - target)
      if (curDiff < diff) {
        diff = curDiff
        result = sum
      }
    }
  }

  return result
}

/**
 * 思路：排序 + 双指针
 * 1. 特判：如果数组为 null，或者长度不满 3，则返回 0
 * 2. 对数组进行升序排序
 * 3. 遍历排序后的数组：
 *    3.1 令左索引 left = i + 1，右索引 right = numsLen - 1，当 left < right 时执行循环
 *    3.2 计算三数之和 sum = nums[i] + nums[left] + nums[right]
 *    3.3 如果 sum === target，则完全满足条件，返回结果，循环结束
 *    3.4 如果 sum > target，移动右索引 right--，如果 sum < target，移动左索引 left++
 *    3.5 每次遍历都对比跟 target 的差值，比上一次小则记录差值，并记录 sum，直到循环结束，将最小 sum 返回
 */
