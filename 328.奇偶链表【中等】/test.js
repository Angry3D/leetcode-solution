const utils = require('../utils');
const { createList } = require('../utils/list');

const testArgs = createList([1, 2, 3, 4, 5]);

utils.test(
  {
    solution: 'solution1',
    logMode: 'list'
  },
  testArgs
);
