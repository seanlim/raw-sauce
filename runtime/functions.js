const readlineSync = require('readline-sync');

// Declare a new variable.
module.exports.TING = {
  numArgs: 1,
  run: (ctx, [name]) => {
    ctx.parent.vars[name] = null;
  },
};

// Assign a new value to the variable.
module.exports['='] = {
  numArgs: 2,
  run: (ctx, [name, val]) => {
    ctx.parent.vars[name] = val;
  }
}

// Prints output to the console.
module.exports.ITELLHER = {
  numArgs: 1,
  run: (ctx, [val]) => {
    console.log(val);
  },
};

// Prints output to the console.
module.exports.SENDMAN = {
  numArgs: 1,
  run: (ctx, [prompt]) => {
    return readlineSync.question(prompt);
  },
};

// Add two numbers.
module.exports['+'] = {
  numArgs: 2,
  run: (ctx, [l, r]) => l + r,
}

// Subtract two numbers.
module.exports['-'] = {
  numArgs: 2,
  run: (ctx, [l, r]) => l - r,
}

// Multiply two numbers.
module.exports['*'] = {
  numArgs: 2,
  run: (ctx, [l, r]) => l * r,
}

// Divide two numbers.
module.exports['/'] = {
  numArgs: 2,
  run: (ctx, [l, r]) => l / r,
}
