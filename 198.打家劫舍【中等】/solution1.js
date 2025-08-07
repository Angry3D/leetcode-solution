/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = function rob(nums) {
  const numsLen = nums.length;
  const cache = new Map();

  function _helper(starti) {
    if (starti >= numsLen) {
      return 0;
    }
    let result = nums[starti],
      maxSubResult = 0;
    for (let i = starti + 2; i < numsLen; i++) {
      let temp = 0;

      const key = `${starti}-${i}`;
      if (cache.has(key)) {
        temp = cache.get(key);
      } else {
        temp = _helper(i);
        cache.set(key, temp);
      }
      maxSubResult = Math.max(maxSubResult, temp);
    }
    return result + maxSubResult;
  }

  const result1 = _helper(0);
  const result2 = _helper(1);
  return Math.max(result1, result2);
};
