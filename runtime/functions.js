// Prints output to the console.
module.exports.ITELLHER = {
  numArgs: 1,
  run: (val) => {
    console.log(val);
  },
};

module.exports['+'] = {
  numArgs: 2,
  run: (l, r) => l + r,
}
