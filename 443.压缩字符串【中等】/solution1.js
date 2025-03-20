/**
 * @param {character[]} chars
 * @return {number}
 */
module.exports = function compress(chars) {
  if (chars.length === 1) {
    return 1;
  }

  let writeIndex = 0,
    currentChar = chars[0],
    currentCount = 0;

  function writeArr() {
    chars[writeIndex++] = currentChar;

    if (currentCount > 1) {
      const countStr = currentCount.toString();
      for (const c of countStr) {
        chars[writeIndex++] = c;
      }
    }
  }

  for (let readIndex = 0, len = chars.length; readIndex < len; readIndex++) {
    const readChar = chars[readIndex];
    if (readChar === currentChar) {
      currentCount++;
    } else {
      writeArr();

      currentChar = readChar;
      currentCount = 1;
    }
  }

  writeArr();

  return writeIndex;
};

/**
 * 朴素的遍历方法
 * 1. 设定双指针，readIndex 为读索引，writeIndex 为写索引
 * 2. readIndex 递增，遇到相同字符则继续往后，遇到不同字符，则开始原地写入“字母”和“长度”
 * 3. 直到 readIndex 遍历结束
 *
 * 可优化的地方：这里可以不统计 currentCount，转而使用 readIndex - writeIndex 来计算
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
