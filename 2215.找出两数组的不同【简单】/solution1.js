/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
module.exports = function findDifference(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  for (const i of set1) {
    if (set2.has(i)) {
      set1.delete(i);
      set2.delete(i);
    }
  }
  return [[...set1], [...set2]];
};
