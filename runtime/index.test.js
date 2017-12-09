const test = require('ava');
const runtime = require('./index');

const functions = require('../functions');

const functions = require('./functions');

test('prints to console correctly', (t) => {
  const ast = [
    {
      value: 'TING',
      args: [
        'lol',
      ],
    },
    {
      value: '=',
      args: [
        'lol',
        {
          value: '+',
          args: [ 1, 2 ],
        },
      ],
    },
    {
      value: 'ITELLHER',
      args: [
        {
          value: '+',
          args: [
            1,
            { value: 'lol' },
          ],
        }
      ],
    }
  ];

  const output = stdout.inspectSync(() => {
    runtime(ast);
  });

  t.deepEqual(['4\n'], output);
});
