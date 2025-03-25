/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
module.exports = function closeStrings(word1, word2) {
  const len1 = word1.length,
    len2 = word2.length;
  if (len1 !== len2) {
    return false;
  }

  const set1 = Array.from({ length: 26 }).fill(0),
    set2 = Array.from({ length: 26 }).fill(0);

  for (let i = 0; i < len1; i++) {
    set1[word1[i].charCodeAt(0) - 97]++;
    set2[word2[i].charCodeAt(0) - 97]++;
  }

  // 1. 比对字符集一致
  for (let i = 0; i < 26; i++) {
    if ((set1[i] === 0 && set2[i] !== 0) || (set1[i] !== 0 && set2[i] === 0)) {
      return false;
    }
  }

  // 2. 比对出现次数
  return set1.sort().join() === set2.sort().join();
};
