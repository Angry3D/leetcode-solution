const utils = require('../utils');

const testArgs = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];

utils.test(
  {
    logMode: 'origin',
    solution: 'solution1'
  },
  testArgs
);
