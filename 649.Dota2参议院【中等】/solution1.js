/**
 * @param {string} senate
 * @return {string}
 */
module.exports = function predictPartyVictory(senate) {
  const queue = senate.split('').map((camp) => ({ camp, status: 1 }));

  let winCamp = '';

  while (!winCamp) {
    let count = queue.length;
    while (count > 0) {
      const campItem = queue.shift();
      if (campItem.status === 0) {
        count--;
        continue;
      }
      let otherCampItem = null;
      for (const i of queue) {
        if (campItem.camp !== i.camp && i.status === 1) {
          otherCampItem = i;
          break;
        }
      }
      if (!otherCampItem) {
        winCamp = campItem;
        break;
      }
      otherCampItem.status = 0;
      queue.push(campItem);
      count--;
    }
  }

  return winCamp.camp === 'R' ? 'Radiant' : 'Dire';
};

/**
 * 通过多层循环，模拟投票的过程，其中由于涉及大量无效循环，因此时间复杂度较高
 * 也由于判断胜出时，仍然需要遍历所有的队列，因此时间复杂度较高
 * 但是由于使用了队列，因此空间复杂度较低
 */
