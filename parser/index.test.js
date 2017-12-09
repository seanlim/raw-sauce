const test = require('ava');
const runtime = require('./index');

const tokens = require('../tokens');

test('skiddy pap boom parser', (t) => {
  // Input
  const input = [
    [tokens.IDENTIFIER, 'PRINT'],
    [tokens.OPEN_PAREN],
    [tokens.NUMBER, '1'],
    [tokens.OPERATOR, '+'],
    [tokens.NUMBER, '2'],
    [tokens.CLOSE_PAREN],
    [tokens.STMT_END],
  ];
  
  // Expected
  const ast = [
    [
      {
        value: 'ITELLHER',
        args: [
          {
            value: '+',
            args: [1, 2],
          }
        ],
      }
    ]
  ];

  t.deepEqual(runtime(input), ast);
});
