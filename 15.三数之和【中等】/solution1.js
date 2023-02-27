/**
 * @param {number[]} nums
 * @return {number[][]}
 */
module.exports = function threeSum(nums) {
  const numsLen = nums.length
  if (numsLen < 3) {
    return []
  }

  const result = []
  const resultKeySet = new Set()
  const resultValueSet = new Set()
  for (let i = 0; i < numsLen; ++i) {
    for (let j = 1; j < numsLen; ++j) {
      for (let k = 2; k < numsLen; ++k) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const keyTag = [i, j, k].sort((a, b) => a - b).join()
          const valueTag = [nums[i], nums[j], nums[k]]
            .sort((a, b) => a - b)
            .join()
          if (
            i !== j &&
            i !== k &&
            j !== k &&
            !resultKeySet.has(keyTag) &&
            !resultValueSet.has(valueTag)
          ) {
            result.push([nums[i], nums[j], nums[k]])
            resultKeySet.add(keyTag)
            resultValueSet.add(valueTag)
          }
        }
      }
    }
  }
  return result
}

/**
 * 思路：暴力求解法，在 LeetCode 模拟器上会超时
 */
