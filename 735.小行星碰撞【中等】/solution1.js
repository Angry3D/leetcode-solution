/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
module.exports = function asteroidCollision(asteroids) {
  const stack = [];

  for (let i = 0, len = asteroids.length; i < len; ) {
    const a = asteroids[i],
      top = stack[stack.length - 1];
    // 1. 如果stack为空，或者同向，则直接压栈 & 看下一个值
    if (stack.length === 0 || !(top > 0 && a < 0)) {
      stack.push(a);
      i++;
      continue;
    }

    const _a = Math.abs(a),
      _top = Math.abs(top);

    if (_top < _a) {
      // 如果栈顶 < 当前值，出栈
      stack.pop();
    } else if (_top === _a) {
      // 如果栈顶 === 当前值，出栈 & 看下一个值
      stack.pop();
      i++;
    } else {
      // 如果栈顶 > 当前值，看下一个值
      i++;
    }
  }

  return stack;
};

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
