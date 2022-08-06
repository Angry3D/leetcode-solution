/**
 * @param {string} s
 * @return {number}
 */
module.exports = function myAtoi(s) {
    const min = -Math.pow(2, 31),
        max = Math.pow(2, 31) - 1
    s = s.trim()
    let result = parseInt(s)
    if (isNaN(result)) {
        result = 0
    }
    result = Math.max(min, result)
    result = Math.min(max, result)
    return result
}
