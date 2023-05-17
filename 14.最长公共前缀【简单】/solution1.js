/**
 * @param {string[]} strs
 * @return {string}
 */
module.exports = function longestCommonPrefix(strs) {
  let result = ''

  let flag = true,
    index = 0
  while (flag) {
    let tmp = ''
    for (const str of strs) {
      if (index >= str.length) {
        flag = false
        break
      }
      if (!tmp) {
        tmp = str[index]
      } else if (tmp !== str[index]) {
        flag = false
        break
      }
    }
    if (flag) {
      result += tmp
    }
    index++
  }

  return result
}
