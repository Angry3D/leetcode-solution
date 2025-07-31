/**
 * @param {number[]} cost
 * @return {number}
 */
module.exports = function minCostClimbingStairs(cost) {
  const costLen = cost.length;
  const cache = new Map();

  function _helper(starti, step) {
    if (starti >= costLen) {
      return 0;
    }
    const key = starti + '-' + step;
    if (cache.has(key)) {
      return cache.get(key);
    }
    const cur = cost[starti];
    const nextCost1 = _helper(starti + step, 1);
    const nextCost2 = _helper(starti + step, 2);
    const result = cur + Math.min(nextCost1, nextCost2);
    cache.set(key, result);

    return result;
  }

  const nextCost1 = _helper(0, 1);
  const nextCost2 = _helper(0, 2);
  const nextCost3 = _helper(1, 1);
  const nextCost4 = _helper(1, 2);
  return Math.min(nextCost1, nextCost2, nextCost3, nextCost4);
};
