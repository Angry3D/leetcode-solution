/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; ++i) {
    const diff = target - nums[i];
    if (nums[i] in map) {
      return [i, map[nums[i]]];
    }
    map[diff] = i;
  }
};

/**
 * 思路：动态规划，减少一层循环
 * 1.创建一个字典，用于存放差值和其对应的索引
 * 2.遍历数组，如果当前值不存在于差值字典中，则记录 <差值，差值索引>
 * 3.如果存在于差值字典中，则找到了
 */