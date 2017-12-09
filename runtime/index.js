const functions = require('./functions');
const vars = require('./vars');

const validateAst = (ctx, ast) => {
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

const runAst = (ctx, ast) => {
  // Check if the AST is a variable.
  if (!ast.args) {
    return vars.fetch(ctx, ast.value);
  }

  // Validate
  validateAst(ctx, ast);

  // Get the values from each arg.
  const argVals = ast.args.map((val) => {
    if (typeof val === 'object') return runAst(ctx, val);
    else return val;
  }, []);

  // Create new context via copying.
  const childCtx = {
    name: ast.value,
    vars: {},
    parent: ctx,
  };

  // Run the function and return the result
  return functions[ast.value].run(childCtx, argVals);
};

module.exports = (asts) => {
  const ctx = {
    name: 'GLOBAL',
    vars: {},
  };

  for (const ast of asts) {
    if (typeof ast === 'object') runAst(ctx, ast);
  }
}
