/**
 * @param {number[]} arr
 * @return {boolean}
 */
module.exports = function uniqueOccurrences(arr) {
  const dict = {};
  for (const i of arr) {
    if (dict[i]) {
      dict[i]++;
    } else {
      dict[i] = 1;
    }
  }

  const values = Object.values(dict);
  return new Set(values).size === values.length;
};

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
