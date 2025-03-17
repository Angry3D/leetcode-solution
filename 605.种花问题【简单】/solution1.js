/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
module.exports = function canPlaceFlowers(flowerbed, n) {
  function searchPlaceCount(bed) {
    const len = bed.length;
    if (len === 1 && bed[0] === 0) {
      return 1;
    }
    let count = 0;
    for (let i = 0; i < len; ) {
      // 第 0 个
      if (i === 0 && bed[i] === 0 && bed[i + 1] === 0) {
        count++;
        i++;
      }
      // 其他的
      else if (
        bed[i] === 0 &&
        bed[i + 1] === 0 &&
        (bed[i + 2] === 0 || i + 2 >= len)
      ) {
        count++;
        i += 2;
      } else {
        i++;
      }
    }
    return count;
  }
  const count = searchPlaceCount(flowerbed);
  return count >= n;
};
