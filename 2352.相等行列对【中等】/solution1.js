/**
 * @param {number[][]} grid
 * @return {number}
 */
module.exports = function equalPairs(grid) {
  const n = grid.length,
    infoMap = {};

  for (let i = 0; i < n; i++) {
    let row = grid[i].join();
    let col = [];
    for (let j = 0; j < n; j++) {
      col.push(grid[j][i]);
    }
    col = col.join();

    // console.log('row: ', row);
    // console.log('col: ', col);

    if (!infoMap[row]) {
      infoMap[row] = {
        row: 1,
        col: 0
      };
    } else {
      infoMap[row].row++;
    }

    if (!infoMap[col]) {
      infoMap[col] = {
        row: 0,
        col: 1
      };
    } else {
      infoMap[col].col++;
    }
  }

  // console.log('infoMap: ', infoMap);
  let sum = 0;
  for (const item of Object.values(infoMap)) {
    if (item.row > 0 && item.col > 0) {
      sum += item.row * item.col;
    }
  }
  return sum;
};

/**
 * 1. 遍历 grid，得到每一行和每一列的哈希信息
 * 2. 遍历哈希信息，得到满足条件的对数
 *
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(n^2)
 */
