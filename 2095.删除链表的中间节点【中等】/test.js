const utils = require('../utils');
const list = require('../utils/list');

// const testArgs = list.createList([1, 3, 4, 7, 1, 2, 6]);
const testArgs = list.createList([2]);

utils.test(
  {
    solution: 'solution1',
    logMode: 'list'
  },
  testArgs
);
