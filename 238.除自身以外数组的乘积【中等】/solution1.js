/**
 * @param {number[]} nums
 * @return {number[]}
 */
module.exports = function productExceptSelf(nums) {
  function calcMultis(from, to, arr) {
    const result = [];
    const step = from < to ? 1 : -1;
    for (let i = from; i !== to; i += step) {
      if (i === from) {
        result[i] = 1;
      } else {
        result[i] = result[i - step] * arr[i - step];
      }
    }
    return result;
  }

  const leftMultis = calcMultis(0, nums.length, nums);
  const rightMultis = calcMultis(nums.length - 1, -1, nums);

  // console.log('nums =>', nums);
  // console.log('left =>', leftMultis);
  // console.log('right =>', rightMultis);

  const result = [];
  nums.forEach((_, index) => {
    result[index] = leftMultis[index] * rightMultis[index];
  });
  return result;
};

/**
 * 1. 构建左侧乘积数组
 * 2. 构建右侧乘积数组
 * 3. 左侧乘积 * 右侧乘积 = 除自身外的乘积
 */
