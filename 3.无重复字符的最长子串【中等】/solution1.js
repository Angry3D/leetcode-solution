/**
 * @param {string} s
 * @return {number}
 */
module.exports = function lengthOfLongestSubstring(s) {
    let maxSubStr = '',
        curSubStr = ''
    const strLen = s.length
    for (let start = 0; start < strLen; ++start) {
        // 加速索引递增：end = start + curSubStr.length，因为之前的子串肯定不重复，end 直接跳过之前的子串
        for (let end = start + curSubStr.length; end < strLen + 1; ++end) {
            const str = s.substring(start, end)
            // console.log(str)
            if (isNoRepeatString(str)) {
                if (str.length > maxSubStr.length) {
                    maxSubStr = str
                }
            } else {
                curSubStr = str.substring(0, str.length - 1)
                break
            }
        }
    }
    // console.log(maxSubStr)
    return maxSubStr.length
}

function isNoRepeatString(str) {
    return str.length == new Set(str.split('')).size
}

/**
 * 滑动窗口，会关心最长子串的内容
 * 1. 设定 start 为开始索引，end 为结束索引，curSubStr 为当前最长子串
 * 2. 通过不断自增 start 和 end，截取中间的子串，如果比 curSubStr 长则记录，直到 start 和 end 遍历结束
 */
