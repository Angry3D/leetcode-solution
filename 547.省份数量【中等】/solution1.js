/**
 * @param {number[][]} isConnected
 * @return {number}
 */
module.exports = function findCircleNum(isConnected) {
  const visited = new Set(),
    n = isConnected.length;
  let count = 0;

  function bfs(citys) {
    if (!citys.length) {
      return;
    }
    const nextCitys = [];
    for (const city of citys) {
      if (visited.has(city)) {
        continue;
      }
      visited.add(city);
      for (let i = 0; i < n; i++) {
        if (isConnected[city][i] === 1 && !visited.has(i)) {
          nextCitys.push(i);
        }
      }
    }
    bfs(nextCitys);
  }
  for (let i = 0; i < n; i++) {
    if (visited.has(i)) {
      continue;
    }
    count++;
    bfs([i]);
  }

  return count;
};
