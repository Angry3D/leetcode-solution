/**
 * @param {number[][]} grid
 * @return {number}
 */
module.exports = function orangesRotting(grid) {
  const rowLen = grid.length,
    colLen = grid[0].length;

  // 获取腐烂 和 新鲜
  // 新鲜 ['1,1', '1,2', ...]
  const goods = new Set();
  // 腐烂 [[row, col], [row, col], ...]
  const bads = [];
  grid.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col === 1) {
        goods.add([rowIndex, colIndex].join());
      } else if (col === 2) {
        bads.push([rowIndex, colIndex]);
      }
    });
  });

  // 传播腐烂
  let count = 0;
  function bfs(points) {
    const nextPoints = [];
    for (const point of points) {
      const [row, col] = point;
      [
        [row - 1, col],
        [row + 1, col],
        [row, col - 1],
        [row, col + 1]
      ].forEach((p) => {
        const [pRow, pCol] = p;
        if (
          pRow < 0 ||
          pRow > rowLen - 1 ||
          pCol < 0 ||
          pCol > colLen - 1 ||
          grid[pRow][pCol] !== 1
        ) {
          return false;
        }

        // 设置腐烂，并从新鲜集合中剔除
        grid[pRow][pCol] = 2;
        goods.delete(p.join());
        nextPoints.push(p);
      });
    }
    if (nextPoints.length) {
      count++;
      bfs(nextPoints);
    }
  }
  bfs(bads);

  // 判断腐烂
  if (goods.size > 0) {
    return -1;
  }
  return count;
};
