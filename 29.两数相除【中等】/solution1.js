/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
module.exports = function divide(dividend, divisor) {
  const positive =
    (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  resultMax = Math.pow(2, 31) - 1
  resultMin = -Math.pow(2, 31)

  function _divide(_dividend, _divisor) {
    if (_dividend < _divisor) {
      return 0
    }
    let base = _divisor,
      result = 1
    while (_dividend > base + base) {
      base += base
      result += result
    }
    return result + _divide(_dividend - base, _divisor)
  }

  let result = _divide(dividend, divisor)
  result = positive ? result : -result
  if (result > resultMax) {
    result = resultMax
  } else if (result < resultMin) {
    result = resultMin
  }
  return result
}

/**
 * 1. 最大值、最小值特判
 * 2. 利用除数翻倍的方式，快速接近结果
 * 3. 利用递归将每次计算的结果相加
 */
