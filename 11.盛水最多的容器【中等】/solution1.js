/**
 * @param {number[]} height
 * @return {number}
 */
module.exports = function maxArea(height) {
    let h = 0,
        w = 0,
        max = 0,
        len = height.length
    for (let left = 0; left < len - 1; ++left) {
        for (let right = left + 1; right < len; ++right) {
            h = Math.min(height[left], height[right])
            w = right - left
            max = Math.max(max, h * w)
        }
    }
    return max
}

/**
 * 暴力求解，LeetCode模拟器运行会超时
 * 
 * 时间复杂度为 O(n^2)
 */
