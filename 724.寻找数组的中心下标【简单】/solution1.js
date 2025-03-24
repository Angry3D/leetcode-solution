/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = function pivotIndex(nums) {
  const sums = [];
  let sum = 0;
  for (const num of nums) {
    sum += num;
    sums.push(sum);
  }
  for (let i = 0, len = sums.length; i < len; i++) {
    const right = i === 0 ? sum : sum - sums[i - 1];
    // console.log('right =>', right);
    if (right === sums[i]) {
      return i;
    }
  }
  return -1;
};

/**
 * 1. 先遍历一遍 nums，并计算前缀和的数组 sums，以及总和 sum
 * 2. 再遍历 sums，用 sum 减去对应位置的 sums[i - 1]，如果相等则找到
 * 3. 否则返回 -1
 * 
 * 时间复杂度：O(2n)
 * 空间复杂度：O(n)
 */
