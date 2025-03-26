/**
 * @param {string} s
 * @return {string}
 */
module.exports = function removeStars(s) {
  const stack = [];
  for (const c of s) {
    if (c === '*') {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join('');
};

/**
 * 1. 创建一个栈，遍历 s
 * 2. 如果遇到 *，弹出栈顶
 * 3. 否则，压入栈顶
 * 4. 返回栈格式化后的字符串
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
