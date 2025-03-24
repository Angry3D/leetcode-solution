/**
 * @param {number[]} gain
 * @return {number}
 */
module.exports = function largestAltitude(gain) {
  let max = 0,
    current = 0;
  for (let i = 0, len = gain.length; i < len; i++) {
    current += gain[i];
    max = Math.max(max, current);
  }
  return max;
};
