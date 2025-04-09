const utils = require('../utils');
const { createBinaryTree, Node } = require('../utils/tree');

const root = createBinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const p = new Node(5);
const q = new Node(4);

utils.test('solution1', root, p, q);
