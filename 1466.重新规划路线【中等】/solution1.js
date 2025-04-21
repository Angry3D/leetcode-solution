/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
module.exports = function minReorder(n, connections) {
  // 1-顺向 0-反向
  const edges = Array.from({ length: n }).map(() => []);
  for (const [a, b] of connections) {
    edges[a].push([b, 1]);
    edges[b].push([a, 0]);
  }

  // 以 0 为起点，深度遍历
  function dfs(node, parent) {
    let count = 0;
    for (const [toNode, dir] of edges[node]) {
      if (toNode === parent) {
        // 避免回头
        continue;
      }
      count += dir + dfs(toNode, node);
    }
    return count;
  }

  return dfs(0, -1);
};
