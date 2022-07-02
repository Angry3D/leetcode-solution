/**
 * @param {string} s
 * @return {number}
 */
module.exports = function lengthOfLongestSubstring(s) {
    const strLen = s.length,
        cache = new Set()
    let end = -1,
        maxLength = 0
    for (let start = 0; start < s.length; ++start) {
        // 把前一个字符移除
        if (start != 0) {
            cache.delete(s.charAt(start - 1))
        }
        // 找到最长无重复子串
        while (end + 1 < strLen && !cache.has(s.charAt(end + 1))) {
            cache.add(s.charAt(end + 1))
            ++end
        }
        // 对比最大长度
        maxLength = Math.max(maxLength, cache.size)
    }
    // console.log(cache)
    return maxLength
}

/**
 * 滑动窗口，不关心关心最长子串的内容，只关心长度，效率是 solution1 的 20 倍
 */
