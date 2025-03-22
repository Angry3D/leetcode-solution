/**
 * 这是 2025-03-22 再次解题的版本，可能跟之前解决方案有雷同，但没关系，只是为了再次练习
 * @param {number[]} height
 * @return {number}
 */
module.exports = function maxArea(height) {
  let max = 0;
  for (let left = 0, right = height.length - 1; left < right; ) {
    const current = Math.min(height[left], height[right]) * (right - left);
    // console.log('current =>', current);
    max = Math.max(max, current);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

/**
 * 双指针
 * 1. 令 left、right 指向数组的左右两边
 * 2. 计算最大面积
 * 3. 如果 height[left] < height[right] 则 left++ 否则 right--
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
