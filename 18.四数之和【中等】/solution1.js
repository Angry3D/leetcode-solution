/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
module.exports = function fourSum(nums, target) {
  if (!nums || nums.length < 4) {
    return []
  }

  const ascNums = nums.sort((a, b) => a - b)
  const result = []

  // console.log(ascNums)

  function _resolver(start, end) {
    let left = start + 1,
      right = end - 1
    while (left < right) {
      const sum = ascNums[start] + ascNums[left] + ascNums[right] + ascNums[end]
      // console.log(sum, start, left, right, end)
      if (sum == target) {
        result.push([
          ascNums[start],
          ascNums[left],
          ascNums[right],
          ascNums[end]
        ])
        while (left < right && ascNums[left] == ascNums[left + 1]) {
          left++
        }
        left++
        while (left < right && ascNums[right] == ascNums[right - 1]) {
          right--
        }
        right--
      } else if (sum < target) {
        left++
      } else {
        right--
      }
    }
  }

  for (let start = 0; start < ascNums.length; start++) {
    if (target >= 0 && ascNums[start] > target) {
      break
    }
    if (start > 0 && ascNums[start] == ascNums[start - 1]) {
      continue
    }
    for (let end = ascNums.length - 1; end >= start + 3; end--) {
      if (target < 0 && ascNums[end] < target) {
        break
      }
      if (end < ascNums.length - 1 && ascNums[end] == ascNums[end + 1]) {
        continue
      }
      _resolver(start, end)
    }
  }

  return result
}

/**
 * 双指针思路：
 * 1. 先特判
 * 2. 升序排序数组
 * 3. 定义首尾指针，根据首尾指针确定双指针，循环遍历找出所有值
 */
