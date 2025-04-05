const utils = require('../utils');
const { createList } = require('../utils/list');

const testArgs = createList([4, 2, 2, 3]);

utils.test(
  {
    solution: 'solution1'
  },
  testArgs
);
