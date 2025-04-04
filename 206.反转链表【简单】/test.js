const utils = require('../utils');
const list = require('../utils/list');

const head = list.createList([1, 2, 3, 4, 5]);

utils.test(
  {
    solution: 'solution1',
    logMode: 'deep'
  },
  head
);
