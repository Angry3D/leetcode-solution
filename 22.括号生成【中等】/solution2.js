/**
 * @param {number} n
 * @return {string[]}
 */
module.exports = function generateParenthesis(n) {
  const result = []

  function dfs(pathStr, leftCount, rightCount) {
    if (leftCount > n || rightCount > n || rightCount > leftCount) {
      return
    }

    if (pathStr.length === 2 * n) {
      result.push(pathStr)
      return
    }
    dfs(pathStr + '(', leftCount + 1, rightCount)
    dfs(pathStr + ')', leftCount, rightCount + 1)
  }
  dfs('', 0, 0)
  return result
}

/**
 * 暴力求解，并优化校验函数
 * 1. 利用满二叉树的前序遍历，遍历出所有可能
 * 2. 优化校验函数，不合法的情况如下
 *  2.1 左括号或者右括号数量 > n
 *  2.2 右括号梳理 > 左括号数量
 */
