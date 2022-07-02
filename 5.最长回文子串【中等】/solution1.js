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
        for (let j = i + 1; j < strLen + 1; ++j) {
            if (isPalindromeStr(sAry, i, j) && j - i + 1 > maxLen) {
                start = i
                maxLen = j - i + 1
            }
        }
    }
    // console.log(start, maxLen)
    return s.substring(start, start + maxLen)
}

// 判读是否为回文
function isPalindromeStr(sAry, i, j) {
    while (i < j) {
        if (sAry[i] == sAry[j]) {
            ++i
            --j
        } else {
            break
        }
    }
    return i >= j
}

/**
 * 暴力求解
 */
