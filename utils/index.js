const path = require('path')

exports.test = function (options, ...args) {
  let solutionName,
    logMode = 'normal'
  if (typeof options === 'string') {
    solutionName = options
  } else if (typeof options === 'object') {
    solutionName = options.solutionName
    logMode = options.logMode || logMode
  } else {
    throw new Error('Invalid options')
  }
  
  const solutionFunc = require(path.resolve('./', solutionName))
  if (typeof solutionFunc !== 'function') {
    throw new Error(`${solutionName} is not a function!!`)
  }
  console.time(solutionName)
  if (logMode === 'normal') {
    console.log('result: ', solutionFunc.apply(this, args))
  } else if (logMode === 'deep') {
    console.dir(solutionFunc.apply(this, args), { depth: null })
  }
  console.timeEnd(solutionName)
}
