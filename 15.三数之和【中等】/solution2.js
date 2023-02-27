/**
 * @param {number[]} nums
 * @return {number[][]}
 */
module.exports = function threeSum(nums) {
  if (!nums || nums.length < 3) {
    return []
  }

  // 结果集合
  const result = []
  // 判断结果是否重复的集合
  const resultSet = new Set()

  // 先对原数组进行排序
  const sortArray = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (sortArray[i] > 0) {
      break
    }
    let left = i + 1,
      right = nums.length - 1
    while (left < right) {
      const sum = sortArray[i] + sortArray[left] + sortArray[right]
      if (sum === 0) {
        const resultAry = [sortArray[i], sortArray[left], sortArray[right]]
        const resultTag = resultAry.sort((a, b) => a - b).join()
        if (!resultSet.has(resultTag)) {
          resultSet.add(resultTag)
          result.push(resultAry)
        }
        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return result
}

/**
 * 思路：排序 + 双指针
 * 1. 特判，如果数组为 null，或者长度不满 3，返回 []
 * 2. 对数组进行遍历
 * 3. 遍历排序后数组：
 *    3.1 若 nums[i] > 0，则后面不可能有三个数想嫁等于 0，直接返回结果
 *    3.2 令左索引 left = i + 1，右索引 right = n - 1，当 left < right 时执行循环
 */
