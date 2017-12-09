const tokenType = require('../tokens.js')
module.exports = (content) => {
  let tokenized = []
  let checkString = content.trim();
  let matchVal
  while(checkString) {
    for (token of tokenDefnitions) {
      matchVal = checkString.match(token.regex)
      if (matchVal) {
        tokenized.push([token.type, matchVal[0].trim()])
        checkString = checkString.substring(matchVal[0].length)
      } else {
      }
    }
  }
  return tokenized;
};


function TokenDefinition(type, regex){
  this.type = type;
  this.regex = regex;
}

const tokenDefnitions = [
  new TokenDefinition(tokenType.OPEN_PAREN, /^\s*\(/),
  new TokenDefinition(tokenType.CLOSE_PAREN, /^\s*\)/),
  new TokenDefinition(tokenType.STRING, /^\s*"(.*?)"/ ),
  new TokenDefinition(tokenType.NUMBER, /^\s*([0-9]+)/),
  new TokenDefinition(tokenType.BOOLEAN, /^\s*(HOT|NOTHOT)/),
  new TokenDefinition(tokenType.OPERATOR, /^\s*[\=\+\-\/\*]/),
  new TokenDefinition(tokenType.STMT_END, /^\s*BOOM/),
  new TokenDefinition(tokenType.VARIABLE, /^s*TING/),
  new TokenDefinition(tokenType.IDENTIFIER, /^\s*[a-zA-Z_]+/)
];


//Token info contains a array of token type and its regex value 
