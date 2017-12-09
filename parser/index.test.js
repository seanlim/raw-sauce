const test = require('ava');
const runtime = require('./index');

test('skiddy pap boom parser', (t) => {
  // Input
  const input = [
    ['IDEN', 'PRINT'],
    ['OPEN_PAREN'],
    ['VALUE', '1'],
    ['OPERATOR', '+'],
    ['VALUE', '2'],
    ['CLOSE_PAREN'],
  ];
  // Expected
  const ast = [
    {
      value: 'ITELLHER',
      args: [
        {
          value: '+',
          args: [1, 2],
        }
      ],
    }
  ];

  t.deepEqual(runtime(input), ast, 'Parse test passed');

  t.pass();
});