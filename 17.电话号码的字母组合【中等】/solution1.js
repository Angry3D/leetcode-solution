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

  const letterSet = [], // [[a,b,c], [d,e,f], [g,h,i]]
    letterIndexSet = [], // [{index:0, max:3}, {index:0, max:3}, {index:0, max:3}]
    result = [],
    digitsLen = digits.length

  // 收集字母集合
  for (let i = 0; i < digitsLen; i++) {
    const set = dict[digits[i]]
    if (!set) {
      continue
    }
    letterSet.push(set)
    letterIndexSet.push({
      index: 0,
      max: set.length
    })
  }

  // console.log(letterSet, letterIndexSet)

  // 遍历
  while (true) {
    // 添加结果
    let tmp = ''
    for (let i = 0; i < letterSet.length; i++) {
      tmp += letterSet[i][letterIndexSet[i].index]
    }
    result.push(tmp)

    // 查找最后一个未满的索引
    let lastIndex = -1
    for (let i = letterIndexSet.length - 1; i >= 0; i--) {
      if (letterIndexSet[i].index < letterIndexSet[i].max - 1) {
        lastIndex = i
        break
      }
    }

    if (lastIndex === -1) {
      // 如果都满，那么退出
      break
    } else {
      // 自增
      letterIndexSet[lastIndex].index++
      // 将后面的索引重置
      for (let i = lastIndex + 1; i < letterIndexSet.length; i++) {
        letterIndexSet[i].index = 0
      }
    }
  }

  return result
}

/**
 * 顺序解题思路：
 * 1. 收集按键的字母集合
 * 2. 模拟排列组合，将每个按键的字母进行组合并压入数组
 */
