const utils = require('../utils')
const list = require('../common/list')

const head = list.createList([1, 2, 3])

utils.test(
  {
    solutionName: 'solution1',
    logMode: 'deep'
  },
  head
)
