const utils = require('../utils');
const { createBinaryTree } = require('../utils/tree');

// const testArgs = createBinaryTree([
//   1,
//   null,
//   1,
//   1,
//   1,
//   null,
//   null,
//   1,
//   1,
//   null,
//   1,
//   null,
//   null,
//   null,
//   1,
//   null,
//   1
// ]);

const testArgs = createBinaryTree([
  1,
  1,
  1,
  null,
  1,
  null,
  null,
  1,
  1,
  null,
  1
]);

// const testArgs = createBinaryTree([1, 1, 1, null, 1]);

utils.test('solution1', testArgs);
