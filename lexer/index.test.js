const test = require('ava');
const lexer = require('./index');
const tokenType = require('../tokens.js')

test('tokenize a program correctly', (t) => {
  const content = `
  ITELLHER("Man's not hot!") BOOM
  `;

  t.deepEqual(lexer(content), [
    [tokenType.IDENTIFIER, 'ITELLHER'],
    [tokenType.OPEN_PAREN, '('],
    [tokenType.STRING, 'Man\'s not hot!']
    [tokenType.CLOSE_PAREN, ')'],
    [tokenType.STMT_END, 'BOOM']
  ]);
});
