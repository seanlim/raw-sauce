const lexer = require('../lexer');
const runtime = require('../runtime');

const code = `
SENDMAN("Take off your jacket?") BOOM
TELLHER("Man's not hot!") BOOM
`;

console.log(lexer(code));

// THE PARSER SHOULD'VE BEEN HERE, BUT IT DOESN'T WORK

const ast = [
  {
    value: 'SENDMAN',
    args: ['Take off your jacket?'],
  },
  {
    value: 'TELLHER',
    args: ['Man\'s not hot!'],
  },
];

runtime(ast);
