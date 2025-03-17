/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
module.exports = function kidsWithCandies(candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= max);
};
