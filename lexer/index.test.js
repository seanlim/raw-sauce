const test = require('ava');
const lexer = require('./index');
const tokenType = require('../tokens.js')

test('tokenize empty string', t => {
  const program = ''
  t.deepEqual(lexer(program), [])
})
test('tokenize single line program', t => {
  const program = 'TELLHER("Man\'s not hot!") BOOM'
  t.deepEqual(lexer(program), [
    [tokenType.IDENTIFIER, "TELLHER"], 
    [tokenType.OPEN_PAREN, "("],
    [tokenType.STRING, "Man\'s not hot!"],
    [tokenType.CLOSE_PAREN, ")"],
    [tokenType.STMT_END, "BOOM"]
 ])
})
test('tokenize multiline program', t => {
  const program = `
  TELLHER("Man is hot") BOOM
  TING lol = 5000 BOOM
  lol = lol+500 BOOM 
  `;
  t.deepEqual(lexer(program), [
    [tokenType.IDENTIFIER, "TELLHER"], 
    [tokenType.OPEN_PAREN, "("],
    [tokenType.STRING, "Man is hot"],
    [tokenType.CLOSE_PAREN, ")"],
    [tokenType.STMT_END, "BOOM"],
    [tokenType.VARIABLE, "TING"], 
    [tokenType.IDENTIFIER, "lol"],
    [tokenType.OPERATOR, "="],
    [tokenType.NUMBER, 5000],
    [tokenType.STMT_END, "BOOM"],
    [tokenType.IDENTIFIER, "lol"],
    [tokenType.OPERATOR, "="],
    [tokenType.IDENTIFIER, "lol"],
    [tokenType.OPERATOR, "+"],
    [tokenType.NUMBER, 500],
    [tokenType.STMT_END, "BOOM"],
  ])
})
test('throws error when string quote mismatch', t => {
  const program = 'TELLHER("MAN IS HOT"")'
  const error = t.throws(() => {
    lexer(program)
  }, Error)

})

