/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
module.exports = function mergeAlternately(word1, word2) {
    let result = '', i = 0
    const word1Len = word1.length, word2Len = word2.length
    for (i = 0; i < word1Len; i++) {
        result += word1[i]
        if (i < word2Len) {
            result += word2[i]
        }
    }
    if (i <= word2Len) {
        result += word2.substring(i)
    }
    return result
};