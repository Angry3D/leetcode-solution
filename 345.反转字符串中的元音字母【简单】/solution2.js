/**
 * @param {string} s
 * @return {string}
 */
module.exports = function reverseVowels(s) {
  const vowelChars = 'aeiouAEIOU',
    sArr = s.split('');
  let temp;
  for (let i = 0, j = sArr.length - 1; i < j; ) {
    const iv = vowelChars.includes(sArr[i]);
    const jv = vowelChars.includes(sArr[j]);
    if (iv && jv) {
      temp = sArr[i];
      sArr[i] = sArr[j];
      sArr[j] = temp;
      i++;
      j--;
    } else if (iv && !jv) {
      j--;
    } else {
      i++;
    }
  }
  // console.log(sArr);
  return sArr.join('');
};

/**
 * 双指针
 * 1. 收尾两个指针 i、j，
 * 2. 一边往中间移动，一边发现两者是否都是元音字母，发现则调换，继续往中间移动
 * 3. 知道 i、j 相遇则结束
 */
