const tok = require('../tokens');

const parse = (statement, ast) => {
  if (statement.length === 0) return ast;
  return ast;
  if (statement[0][0] === tok.IDENTIFIER) {
  }
};

module.exports = (tokens) => {
  return tokens
    .reduce((acc, token) => {
      if (token[0] !== tok.STMT_END) {
        acc[acc.length - 1].push(token);
      } else {
        acc.push([]);
      }
      return acc;
    }, [[]])
    .map(parse);
};
