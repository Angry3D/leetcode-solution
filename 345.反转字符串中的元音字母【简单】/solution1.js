/**
 * @param {string} s
 * @return {string}
 */
module.exports = function reverseVowels(s) {
  const matchIt = s.matchAll(/[aeiou]/gi);
  const matchInfo = [...matchIt].map((item) => ({
    char: item[0],
    index: item.index
  }));
  // console.log(matchInfo);
  for (let i = 0, j = matchInfo.length - 1; i < j; i++, j--) {
    const temp = matchInfo[i].char;
    matchInfo[i].char = matchInfo[j].char;
    matchInfo[j].char = temp;
  }
  // console.log(matchInfo);
  const sArr = s.split('');
  matchInfo.forEach((item) => {
    sArr.splice(item.index, 1, item.char);
  });
  return sArr.join('');
};

/**
 * 1. 利用 matchAll 找出所有元音字母，及其所在位置
 * 2. 反转 matchAll 的结果
 * 3. 替换原字符串
 */
