const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

// solution1
const solution1 = require('./solution1')
console.time('solution1')
console.log(solution1(height))
console.timeEnd('solution1')

// solution2
const solution2 = require('./solution2')
console.time('solution2')
console.log(solution2(height))
console.timeEnd('solution2')
