const path = require('path');

exports.test = function (options, ...args) {
  let solution,
    logMode = 'normal';
  if (typeof options === 'string') {
    solution = options;
  } else if (typeof options === 'object') {
    solution = options.solution;
    logMode = options.logMode || logMode;
  } else {
    throw new Error('Invalid options');
  }

  const solutionFunc = require(path.resolve('./', solution));
  if (typeof solutionFunc !== 'function') {
    throw new Error(`${solution} is not a function!!`);
  }
  console.time(solution);
  if (logMode === 'normal') {
    console.log('result: ', solutionFunc.apply(this, args));
  } else if (logMode === 'deep') {
    console.dir(solutionFunc.apply(this, args), { depth: null });
  } else if (logMode === 'origin') {
    const result = solutionFunc.apply(this, args);
    console.log('result: ', result);
    console.log('origin: ', ...args);
  }
  console.timeEnd(solution);
};
