/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
module.exports = function minFlips(a, b, c) {
  let count = 0;
  const bA = a.toString(2),
    bB = b.toString(2),
    bC = c.toString(2);

  const maxLen = Math.max(bA.length, bB.length, bC.length);
  for (let i = 0; i < maxLen; i++) {
    const ai = bA.length - 1 - i,
      bi = bB.length - 1 - i,
      ci = bC.length - 1 - i;
    const ac = ai >= 0 ? +bA[ai] : 0,
      bc = bi >= 0 ? +bB[bi] : 0,
      cc = ci >= 0 ? +bC[ci] : 0;
    if (cc === 1 && ac === 0 && bc === 0) {
      count++;
    } else if (cc === 0) {
      if (ac === 1) count++;
      if (bc === 1) count++;
    }
  }

  return count;
};
