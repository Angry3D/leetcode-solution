const utils = require('../utils');

utils.test(
  'solution1',
  [
    ['a', 'b'],
    ['b', 'c']
  ],
  [2.0, 3.0],
  [
    ['a', 'c'],
    ['b', 'a'],
    ['a', 'e'],
    ['a', 'a'],
    ['x', 'x']
  ]
);
