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
  const result = [],
    resultTagSet = new Set()

  // console.log(ascNums)

  function _resolver(start, end) {
    let left = start + 1,
      right = end - 1
    while (left < right) {
      const sum = ascNums[start] + ascNums[left] + ascNums[right] + ascNums[end]
      // console.log(sum, start, left, right, end)
      if (sum == target) {
        const sortTag = [
          ascNums[start],
          ascNums[left],
          ascNums[right],
          ascNums[end]
        ]
          .sort((a, b) => a - b)
          .join()
        if (!resultTagSet.has(sortTag)) {
          result.push([
            ascNums[start],
            ascNums[left],
            ascNums[right],
            ascNums[end]
          ])
          resultTagSet.add(sortTag)
        }
        left++
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
    for (let end = ascNums.length - 1; end >= 0; end--) {
      if (target < 0 && ascNums[end] < target) {
        break
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
