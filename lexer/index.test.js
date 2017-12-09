const test = require('ava');
const lexer = require('./index');

test('tokenize a program correctly', (t) => {
  const content = `
  ITELLHER("Man's not hot!") BOOM
  `;

  t.deepEqual(lexer(content), [
    ['IDENT', 'ITELLHER'],
    ['OPEN_PAREN'],
    ['STR', 'Man\'s not hot'],
    ['CLOSE_PAREN'],
    ['STMT_END'],
  ]);
});
