/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
module.exports = function strStr(haystack, needle) {
  const haystackLen = haystack.length,
    needleLen = needle.length,
    len = haystackLen - needleLen
  for (let s1 = 0; s1 <= len; s1++) {
    if (haystack[s1] !== needle[0]) {
      continue
    }
    const tmpStr = haystack.substring(s1, s1 + needleLen)
    if (tmpStr !== needle) {
      continue
    }
    return s1
  }
  return -1
}

/**
 * 暴力求解
 */
