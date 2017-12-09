const test = require('ava');
const runtime = require('./index');

const functions = require('../functions');

test('prints to console correctly', (t) => {
  const ast = [
    {
      value: functions.PRINT,
      args: [
        {
          value: '+',
          args: [
            1,
            2,
          ],
        }
      ],
    }
  ];

  const output = stdout.inspectSync(() => {
    runtime(ast);
  });

  console.log(output);
  t.pass();
});
