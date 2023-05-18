const utils = require('../utils')
const list = require('../common/list')

const head = list.createList([1, 2, 3, 4, 5]),
  n = 2

// utils.test(
//   {
//     solutionName: 'solution1',
//     logMode: 'deep'
//   },
//   head,
//   n
// )

utils.test(
  {
    solutionName: 'solution2',
    logMode: 'deep'
  },
  head,
  n
)
