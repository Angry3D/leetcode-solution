/**
 * @param {string} s
 * @return {number}
 */
module.exports = function romanToInt(s) {
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const strLen = s.length
  let result = 0
  for (let index = 0; index < strLen; index++) {
    const item = s[index],
      nextItem = s[index + 1]
    const itemValue = dict[item],
      nextItemValue = nextItem ? dict[nextItem] : 0
    if (itemValue >= nextItemValue) {
      result += itemValue
    } else {
      result += nextItemValue - itemValue
      index++
    }
  }
  return result
}
