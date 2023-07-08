/**
 * @param {number} n
 * @return {string[]}
 */
module.exports = function generateParenthesis(n) {
  const result = []

  function check(pathStr) {
    const pathAry = pathStr.split('')
    if (pathAry[0] !== '(' || pathAry[pathAry.length - 1] !== ')') {
      return false
    }

    let balance = 0
    for (const c of pathAry) {
      if (c === '(') {
        balance--
      } else {
        balance++
      }
      if (balance > 0) {
        break
      }
    }
    return balance === 0
  }

  function dfs(pathStr) {
    if (pathStr.length === 2 * n) {
      if (check(pathStr)) {
        result.push(pathStr)
      }
      return
    }
    dfs(pathStr + '(')
    dfs(pathStr + ')')
  }
  dfs('')
  return result
}

/**
 * 暴力求解
 * 1. 利用满二叉树的前序遍历，遍历出所有可能
 * 2. 使用验证函数，压入满足条件的解
 */
