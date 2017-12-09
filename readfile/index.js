const fs = require('fs');

module.exports = (path) => {
  return fs.readFileSync(process.cwd() + '/' + path, 'utf8');
};
