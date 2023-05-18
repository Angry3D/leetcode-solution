const utils = require('../utils')
const list = require('../common/list')

// const l1 = list.createList([1, 2, 4]),
//   l2 = list.createList([1, 3, 4])

const l1 = list.createList([]),
  l2 = list.createList([0])

utils.test(
  {
    solutionName: 'solution1',
    logMode: 'deep'
  },
  l1,
  l2
)
