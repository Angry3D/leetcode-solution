/**
 * @param {number} n
 * @return {number}
 */

const memo = {};
module.exports = function tribonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  if (memo[n] !== undefined) {
    return memo[n];
  }
  const result = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  memo[n] = result;
  return result;
};
