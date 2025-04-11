const utils = require('../utils');
const { createBinaryTree } = require('../utils/tree');

utils.test('solution1', createBinaryTree([1, 7, 0, 7, -8, null, null]));
utils.test(
  'solution1',
  createBinaryTree([-100, -200, -300, -20, -5, -10, null])
);
