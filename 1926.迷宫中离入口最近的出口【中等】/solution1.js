/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
module.exports = function nearestExit(maze, entrance) {
  const rowLen = maze.length,
    colLen = maze[0].length;
  const [entranceRow, entranceCol] = entrance;

  function checkPass(row, col) {
    if (
      row < 0 ||
      row > rowLen - 1 ||
      col < 0 ||
      col > colLen - 1 ||
      maze[row][col] === '+'
    ) {
      return false;
    }
    return true;
  }
  function checkExit(row, col) {
    if (row === entranceRow && col === entranceCol) {
      return false;
    }
    // 能进入到这的点，都是空格子
    return row === 0 || row === rowLen - 1 || col === 0 || col === colLen - 1;
  }

  // pointInfo = [row, col, d]
  const distances = [];
  function bfs(pointInfos) {
    const nextPointInfos = [];
    for (const pointInfo of pointInfos) {
      const [row, col, d] = pointInfo;

      // 出口
      if (checkExit(row, col)) {
        console.log('d =>', d);
        distances.push(d);
        return;
      }

      // 上下左右
      [
        [row - 1, col, d + 1],
        [row + 1, col, d + 1],
        [row, col - 1, d + 1],
        [row, col + 1, d + 1]
      ].forEach((p) => {
        if (checkPass(p[0], p[1])) {
          // 设置 + 号，防止重复访问
          maze[p[0]][p[1]] = '+';
          nextPointInfos.push(p);
        }
      });
    }
    if (nextPointInfos.length) {
      bfs(nextPointInfos);
    }
  }
  maze[entranceRow][entranceCol] = '+';
  bfs([[entranceRow, entranceCol, 0]]);

  return distances.length ? Math.min(...distances) : -1;
};
