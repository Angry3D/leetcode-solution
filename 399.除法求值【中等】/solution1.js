/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
module.exports = function calcEquation(equations, values, queries) {
  // 构建图
  const graph = {};
  for (let i = 0, len = equations.length; i < len; i++) {
    const [a, b] = equations[i];
    const value = values[i];
    if (!graph[a]) {
      graph[a] = {};
    }
    if (!graph[b]) {
      graph[b] = {};
    }
    graph[a][b] = value;
    graph[b][a] = 1 / value;
  }
  // console.log(graph);

  // 深度优先搜索
  function dfs(start, end, visited) {
    if (start === end && graph[start]) {
      return 1;
    }
    if (!graph[start] || !graph[end] || visited.has(start)) {
      return -1;
    }
    if (graph[start][end] !== undefined) {
      return graph[start][end];
    }

    let result = -1;
    if (graph[start]) {
      visited.add(start);
      const nextStarts = Object.keys(graph[start]);
      for (const nextStart of nextStarts) {
        const result = dfs(nextStart, end, visited);
        if (result === -1) {
          continue;
        }
        return result * graph[start][nextStart];
      }
    }
    return result;
  }

  const visited = new Set();
  const result = [];
  queries.forEach(([a, b]) => {
    visited.clear();
    result.push(dfs(a, b, visited));
  });
  return result;
};
