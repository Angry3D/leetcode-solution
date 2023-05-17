/**
 * @param {number} x
 * @return {boolean}
 */
module.exports = function isPalindrome(x) {
  const xStr = x + ''
  let left = 0,
    right = xStr.length - 1
  while (left < right) {
    if (xStr[left] !== xStr[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

/**
 * 左右两个指针，循环遍历比较，直到在中间相遇
 */
