const tk = require('../tokens');
const nodeTemplate = require('./nodeTemplate');
const statementParser = require('./statementParser');
const identifierParser = require('./identifierParser');

// This generates state tree for every statement
module.exports = (statement, parsedArr) => {
  // Logic for each statement
  if (statement[0][0] == tk.IDENTIFIER){
    // Identifier
    parsedArr.push([
      identifierParser(statement)
    ]);
  }
  else if (statement[0][0] == tk.VARIABLE){
    // Variable Assignment
    var stmnt = statement

    parsedArr.push([
      // New Var
      nodeTemplate("TING", [stmnt.shift()[0][1]]),
      // Parses function
      identifierParser(stmnt),
    ]);

  }
  else {
    throw('SYNTAX ERROR:  Invalid syntax');

  }

}
