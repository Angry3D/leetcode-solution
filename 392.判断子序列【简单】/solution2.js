/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
module.exports = function isSubsequence(s, t) {
  // 1. 收集信息表，tInfo = [][]
  const tLen = t.length;
  const tInfo = Array.from({ length: tLen });
  const aCode = 'a'.charCodeAt(0);
  for (let i = 0; i < tLen; i++) {
    const infoItem = [];
    for (let j = 0; j < 26; j++) {
      const c = String.fromCharCode(aCode + j);
      infoItem.push(t.indexOf(c, i));
    }
    tInfo[i] = infoItem;
  }

  // 2. 遍历字符串 s
  let index = 0;
  for (const c of s) {
    index = tInfo[index][c.charCodeAt(0) - aCode];
    // 如果遇到 -1，说明字符串 s 不是子序列
    if (index === -1) {
      return false;
    }
  }
  return true;
};

/**
 * 针对进阶的挑战，思路：动态规划
 * 1. 先将目标字符串 t 遍历一遍，形成一张信息表
 * 2. 然后开始遍历字符串 s，由于信息表的存在，因此可以跳跃式遍历，从而快速判断是否子串
 */
