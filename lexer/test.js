const lexer = require('./index.js')
const content = `
TING lol = 1+1 BOOM
TELLHER("Man's not hot")
`;

const contents = "TING lol = 1+1 BOOM"
console.log(lexer(content))
