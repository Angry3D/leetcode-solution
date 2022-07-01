/**
 * @param {string} s
 * @return {number}
 */
module.exports = function lengthOfLongestSubstring(s) {
    let curSubStr = '',
        over = false
    const strLen = s.length
    for (let i = 0; i < strLen; ++i) {
        if (over) {
            break
        }
        for (let j = i + 1; j < strLen + 1; ++j) {
            const str = s.substring(i, j)
            // console.log(str)
            if (isNoRepeatString(str)) {
                if (str.length > curSubStr.length) {
                    curSubStr = str
                }
                if (j == strLen) {
                    over = true
                }
            } else {
                break
            }
        }
    }
    // console.log(curSubStr)
    return curSubStr.length
}

function isNoRepeatString(str) {
    return str.length == new Set(str.split('')).size
}

/**
 * 暴力求解
 * 1. 设定 i 为左索引，j 为右索引，curSubStr 为当前最长子串
 * 2. 通过不断自增 i 和 j，截取中间的子串，如果比 curSubStr 长则记录，直到 i 和 j 遍历结束
 */
