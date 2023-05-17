/**
 * @param {number} x
 * @return {boolean}
 */
module.exports = function isPalindrome(x) {
  const xStr = x + ''
  const xReverseStr = xStr.split('').reverse().join('')
  return xStr === xReverseStr
}

/**
 * 直接反转原数字字符串，如果跟原数字字符串一样，则为 true，否则为 false
 */
