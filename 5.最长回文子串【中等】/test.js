const s = 'babad'

// solution1
const solution1 = require('./solution1')
console.time('solution1')
console.log(solution1(s))
console.timeEnd('solution1')

// solution2
const solution2 = require('./solution2')
console.time('solution2')
console.log(solution2(s))
console.timeEnd('solution2')
