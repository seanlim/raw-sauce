const lexer = require('../lexer');
const runtime = require('../runtime');

const code = `
TING skrra = "Man's not hot!" BOOM
TELLHER(skrra) BOOM
`;

console.log(lexer(code));

// THE PARSER SHOULD'VE BEEN HERE, BUT IT DOESN'T WORK

const ast = [
  {
    value: 'TING',
    args: ['skrra'],
  },
  {
    value: '=',
    args: ['skrra', 'Man\'s not hot!'],
  },
  {
    value: 'TELLHER',
    args: [
      { value: 'skrra' },
    ]
  }
];

runtime(ast);
