const utils = require('../utils');
const { Node } = require('../utils/tree');

const root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

utils.test('solution1', root);
