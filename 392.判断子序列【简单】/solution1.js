/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
module.exports = function isSubsequence(s, t) {
  let si = 0,
    ti = 0,
    sLen = s.length,
    tLen = t.length;

  while (si < sLen && ti < tLen) {
    if (s[si] === t[ti]) {
      si++;
    }
    ti++;
  }

  return si === sLen;
};

/**
 * 双指针
 * 1. 令 si 为 s 的索引，令 ti 为 t 的索引
 * 2. 遍历 ti，如果 s[si] === t[ti]，si++，并且保持 ti++，直到 si === s.length || ti === t.length
 * 3. 判断 si === s.length
 * 
 * 时间复杂度：O(n + m)
 * 空间复杂度：O(1)
 */
