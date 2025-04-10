const utils = require('../utils');
const { createBinaryTree } = require('../utils/tree');

utils.test(
  'solution1',
  createBinaryTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]),
  8
);
utils.test('solution1', createBinaryTree([1]), 1);
utils.test('solution1', createBinaryTree([0, 1, 1]), 1);
utils.test('solution1', createBinaryTree([1, -2, -3, 1, 3, -2, null, -1]), 3);
