const readlineSync = require('readline-sync');

// Prints output to the console.
module.exports.ITELLHER = {
  numArgs: 1,
  run: (val) => {
    console.log(val);
  },
};

// Prints output to the console.
module.exports.SENDMAN = {
  numArgs: 1,
  run: (prompt) => {
    return readlineSync.question(prompt);
  },
};

// Add two numbers.
module.exports['+'] = {
  numArgs: 2,
  run: (l, r) => l + r,
}

// Subtract two numbers.
module.exports['-'] = {
  numArgs: 2,
  run: (l, r) => l - r,
}

// Multiply two numbers.
module.exports['*'] = {
  numArgs: 2,
  run: (l, r) => l * r,
}

// Divide two numbers.
module.exports['/'] = {
  numArgs: 2,
  run: (l, r) => l / r,
}
