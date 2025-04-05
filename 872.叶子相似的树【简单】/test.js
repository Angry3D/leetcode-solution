const utils = require('../utils');
const { createBinaryTree } = require('../utils/tree');

const root1 = createBinaryTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
const root2 = createBinaryTree([
  3,
  5,
  1,
  6,
  7,
  4,
  2,
  null,
  null,
  null,
  null,
  null,
  null,
  9,
  8
]);

utils.test('solution1', root1, root2);
