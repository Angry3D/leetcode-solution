/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
module.exports = function maxVowels(s, k) {
  const vowels = 'aeiou';
  let max = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      max++;
    }
  }

  let count = max;
  for (let i = 1, len = s.length; i < len - k + 1; i++) {
    if (vowels.includes(s[i - 1])) {
      count = count > 0 ? count - 1 : 0;
    }
    if (vowels.includes(s[i + k - 1])) {
      count++;
    }
    max = Math.max(max, count);
  }
  return max;
};
