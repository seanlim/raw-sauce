const functions = require('./functions');

const validateAst = (ast) => {
  // Ensure function exists and assign it.
  if (!functions[ast.value]) {
    throw new Error(`ERROR: Function ${ast.value} does not exist.`);
  }

  // Ensure correct number of args passed to function.
  const expectedNumArgs = functions[ast.value].numArgs;
  if (expectedNumArgs !== ast.args.length) {
    throw new Error(`ERROR: Function ${ast.value} expects ${expectedNumArgs} arguments.`);
  }
};

const runAst = (ast) => {
  validateAst(ast);

  // Get the values from each arg.
  const argVals = ast.args.map((val) => {
    if (typeof val === 'object') return runAst(val);
    else return val;
  }, []);

  // Run the function and return the result
  return functions[ast.value].run.apply(null, argVals);
};

module.exports = (asts) => {
  for (const ast of asts) {
    if (typeof ast === 'object') runAst(ast);
  }
}
