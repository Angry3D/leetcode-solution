/**
 * @param {number} x
 * @return {number}
 */
module.exports = function reverse(x) {
    const left = -Math.pow(2, 31),
        right = Math.pow(2, 31) - 1
    let numStr = x + '',
        negative = false
    if (numStr.startsWith('-')) {
        negative = true
        numStr = numStr.substring(1)
    }
    numStr = numStr.split('').reverse().join('')
    if (negative) {
        numStr = '-' + numStr
    }
    let num = parseInt(numStr)
    // console.log(numStr, num)
    if (num < left || num > right) {
        num = 0
    }
    return num
}

/**
 * 利用 JS 字符串内置的 revers() 函数，直接翻转处理
 */
