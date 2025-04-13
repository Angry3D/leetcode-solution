/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
module.exports = function canVisitAllRooms(rooms) {
  const visited = new Set([0]);
  function search(rooms, keys) {
    const nextKeys = [];
    for (const key of keys) {
      if (visited.has(key)) {
        continue;
      }
      visited.add(key);
      nextKeys.push(...rooms[key]);
    }
    if (!nextKeys.length) {
      return;
    }
    search(rooms, nextKeys);
  }
  search(rooms, rooms[0]);

  return visited.size === rooms.length;
};
