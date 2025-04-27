/**
 * @param {number} n
 * @return {number[]}
 */
module.exports = function countBits(n) {
  function toBits(num) {
    const bits = [];
    while (num > 0) {
      bits.unshift(num % 2);
      num = Math.floor(num / 2);
    }
    return bits;
  }

  const result = [];
  for (let i = 0; i <= n; i++) {
    result.push(toBits(i).filter((bit) => bit === 1).length);
  }
  return result;
};
