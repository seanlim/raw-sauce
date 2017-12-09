const tokenType = require('../tokens')
module.exports = (content) => {
  let tokenized = []
  let checkString = content.trim();
  let matchVal = undefined
  while(checkString) {
    for (token of tokenDefinitions) {
      matchVal = checkString.match(token.regex)
      if (matchVal) {
        const result = matchVal[0].trim()
        switch(token.type) {
          case tokenType.NUMBER:
            tokenized.push([token.type, parseInt(result)])
            break;
          case tokenType.STRING:
            tokenized.push([token.type, result.substring(1, result.length - 1)])
            break;
          default: 
            tokenized.push([token.type, result])
            break;
        }
        checkString = checkString.substring(matchVal[0].length).trim()
        break;
      } 
    }
    if (!matchVal) {
      throw new Error("ERROR: Lexer Error")
    }
  }
  return tokenized;
};

function TokenDefinition(type, regex){
  this.type = type;
  this.regex = regex;
}

const tokenDefinitions = [
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
