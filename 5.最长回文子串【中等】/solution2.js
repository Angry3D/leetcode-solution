/**
 * @param {string} s
 * @return {string}
 */
module.exports = function longestPalindrome(s) {
    const strLen = s.length
    if (strLen <= 1) {
        return s
    }

    const sAry = s.split('')
    let start = 0,
        maxLen = 1
    for (let i = 0; i < strLen; ++i) {
        const oddLen = expand(sAry, i, i)
        const evenLen = expand(sAry, i, i + 1)

        const curMaxLen = Math.max(oddLen, evenLen)
        if (curMaxLen > maxLen) {
            maxLen = curMaxLen
            // ababa  abba
            start = i - Math.floor((maxLen - 1) / 2)
        }
    }
    return s.substring(start, start + maxLen)
}

/**
 * 返回最大回文子串的长度
 * @param {*} sAry 字符数组
 * @param {*} i 中心左
 * @param {*} j 中心右
 */
function expand(sAry, i, j) {
    while (i >= 0 && j < sAry.length) {
        if (sAry[i] == sAry[j]) {
            --i
            ++j
        } else {
            break
        }
    }
    return j - i - 1
}

/**
 * 中心扩散
 */
