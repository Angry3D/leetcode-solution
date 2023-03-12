/**
 * @param {string} digits
 * @return {string[]}
 */
module.exports = function letterCombinations(digits) {
  if (!digits) {
    return []
  }

  // 字典
  const dict = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  function _resolver(digits) {
    if (digits.length === 0) {
      return []
    }
    const digit = digits[0]
    const curResult = dict[digit]
    if (!curResult) {
      return []
    }
    const nextResult = _resolver(digits.slice(1))
    let result = []
    if (nextResult.length) {
      for (const curItem of curResult) {
        for (const nextItem of nextResult) {
          result.push(curItem + nextItem)
        }
      }
    } else {
      result = [...curResult]
    }
    return result
  }

  return _resolver(digits)
}

/**
 * 深度遍历思路：
 * 1. 分解子问题
 * 2. 最终问题的结果 = 当前问题的结果 + 子问题的结果
 */
