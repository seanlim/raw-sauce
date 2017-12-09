const tk = require('../tokens');
const nodeTemplate = require('./nodeTemplate');
const statementParser = require('./statementParser');
const identifierParser = require('./identifierParser');

var parsedArr

module.exports = (tokens) => {

  console.log(tokens);
  // Abstract into statements
  const statements = getStatements(tokens);
  parsedArr = [];

  // Each statement is either a Function or a Variable declaration
  statements.forEach(statement => statementParser(statement, parsedArr));

  return parsedArr;

};

function getStatements(arr) {
  // Retrieve statements
  let array = [...arr]
  let statements = []
  
  // Identify statements
  arr.forEach(token => {
    if (token == tk.STMT_END) {
      // Slice and dice
      statements.push(arr.slice(0, arr.indexOf(token)));
    }
  });
  return statements;
};