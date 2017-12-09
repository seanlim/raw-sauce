const test = require('ava');
const runtime = require('./index');

const stdout = require('test-console').stdout;

const functions = require('./functions');

test('prints to console correctly', (t) => {
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

  const output = stdout.inspectSync(() => {
    runtime(ast);
  });

  t.deepEqual(['3\n'], output);
});
