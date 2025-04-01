/**
 * @param {string} senate
 * @return {string}
 */
module.exports = function predictPartyVictory(senate) {
  const len = senate.length;
  const radiant = [],
    dire = [];

  for (let i = 0; i < len; i++) {
    if (senate[i] === 'R') {
      radiant.push(i);
    } else {
      dire.push(i);
    }
  }

  while (radiant.length && dire.length) {
    const rIndex = radiant.shift();
    const dIndex = dire.shift();

    if (rIndex < dIndex) {
      radiant.push(rIndex + len);
    } else {
      dire.push(dIndex + len);
    }
  }

  return radiant.length ? 'Radiant' : 'Dire';
};

/**
 * 通过使用两个队列，模拟投票的过程
 * 其中由于只需要遍历一次，因此时间复杂度较低：O(n)
 * 空间复杂度：O(n)
 */
