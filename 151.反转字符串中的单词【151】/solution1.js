/**
 * @param {string} s
 * @return {string}
 */
module.exports = function reverseWords(s) {
  return s
    .split(/ +/g)
    .filter((i) => !!i)
    .reverse()
    .join(' ');
};
