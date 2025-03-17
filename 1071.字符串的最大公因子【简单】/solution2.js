/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
module.exports = function gcdOfStrings(str1, str2) {
  // 检查
  function check(str, divisor) {
    if (str.length % divisor.length !== 0) {
      return false;
    }
    return str.replace(new RegExp(divisor, 'g'), '') === '';
  }

  const minLen = Math.min(str1.length, str2.length);
  for (let i = minLen - 1; i >= 0; i--) {
    const substr1 = str1.substring(0, i + 1);
    const substr2 = str2.substring(0, i + 1);
    if (substr1 !== substr2 || !check(str1, substr1) || !check(str2, substr2)) {
      continue;
    }
    return substr1;
  }
  return '';
};

/**
 * 基于 solution1 优化，同时查看两个字符串
 */
