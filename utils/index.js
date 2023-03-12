const path = require('path')

exports.test = function (solutionName, ...args) {
  const solutionFunc = require(path.resolve('./', solutionName))
  if (typeof solutionFunc !== 'function') {
    throw new Error(`${solutionName} is not a function!!`)
  }
  console.time(solutionName)
  console.log('result: ', solutionFunc.apply(this, args))
  console.timeEnd(solutionName)
}
