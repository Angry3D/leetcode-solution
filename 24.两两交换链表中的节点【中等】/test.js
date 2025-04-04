const utils = require('../utils')
const list = require('../utils/list')

const head = list.createList([1, 2, 3])

utils.test(
  {
    solution: 'solution1',
    logMode: 'deep'
  },
  head
)
