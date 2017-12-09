const tok = require('../tokens');

const parse = (statement) => {
  // Check if empty
  if (statement.length === 0) return [null];

  // Check if variable declaration
  if (statement[0][0] === tok.VARIABLE) {
    if (statement.length === 1 || statement[1][0] !== tok.IDENTIFIER) throw new Error('No identifier found after TING');
    const asts = [];
    asts.push({
      value: statement[0][1],
      args: [statement[1][1]],
    });
    asts.push(parse(statement.slice(1)));
  }

  // Check for parenthesis
  const parenIdx = statement.map(s => s[0]).indexOf(tok.OPEN_PAREN);
  if (parenIdx !== -1) {
    // Find closing paren
    const counter = 1;
    for (let i = parenIdx + 1; i < statement.length; i++) {
      if (statement[i] === tok.OPEN_PAREN) counter++;
      if (statement[i] === tok.CLOSE_PAREN) counter--;
      if (counter === 0) {
        console.log(parenIdx, i);
        break
      }
    }
  }


  // Check if function call
  if (statement[0][0] === tok.IDENTIFIER && statement.length > 1 && statement[1][0] === tok.OPEN_PAREN) {
    const arg = parse(statement.slice(2, statement.length - 1));
    return [{
      value: statement[0][1],
      args: arg,
    }];
  }

  return [{
    value: 'shit',
  }];
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
    .map(parse)
    .reduce((acc, asts) => acc.concat(asts), [])
    .filter(x => x) // Remove nulls
    .map(x => JSON.stringify(x, null, 4))
    .map(console.log)
};
