/**
 * @param {number[]} height
 * @return {number}
 */
module.exports = function maxArea(height) {
    let len = height.length,
        left = 0,
        right = len - 1,
        max = 0,
        h = 0,
        w = 0
    while (left < right) {
        h = Math.min(height[left], height[right])
        w = right - left
        max = Math.max(max, w * h)

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return max
}

/**
 * 1. 设定左右边界 left / right
 * 2. 如果左右边界不断的往中间汇合，那么要使得容积最大化，则需要将高度较小的那一边移动
 * 3. 每次移动，比对最大容积
 * 4. 直到 left / right，在中间汇合，则比对结束
 * 
 * 这种算法的时间复杂度为 O(n)
 */
