/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
module.exports = function gcdOfStrings(str1, str2) {
  // 获取所有因子
  function getDivisors(str) {
    const result = [];
    for (let i = 0, len = str.length; i < len; i++) {
      if (len % (i + 1) !== 0) {
        continue;
      }
      const substr = str.substring(0, i + 1);
      if (!str.replace(new RegExp(substr, 'g'), '')) {
        result.push(substr);
      }
    }
    return result;
  }

  const str1Divisors = getDivisors(str1);
  const str2Divisors = getDivisors(str2);
  let result = '';
  for (const divisor1 of str1Divisors) {
    if (str2Divisors.includes(divisor1) && divisor1.length > result.length) {
      result = divisor1;
    }
  }
  return result;
};

/**
 * 1. 获取每个串的所有因子
 * 2. 找到最大公因子
 */
