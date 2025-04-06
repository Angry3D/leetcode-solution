const utils = require('../utils');
const { createBinaryTree } = require('../utils/tree');

const testArgs = createBinaryTree([3, 1, 4, 3, null, 1, 5]);

utils.test('solution1', testArgs);
