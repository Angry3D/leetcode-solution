/**
 * @param {string} s
 * @return {boolean}
 */
module.exports = function isValid(s) {
  const rights = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  const stack = []
  for (const c of s) {
    if (rights[c] && stack[stack.length - 1] === rights[c]) {
      stack.pop()
    } else {
      stack.push(c)
    }
  }
  return stack.length === 0
}
