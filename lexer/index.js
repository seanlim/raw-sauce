const tokenType = require('../tokens.js')
module.exports = (content) => {
  let currentToken = ""
  let tokenList = []
  for (const char of content) {
    currentToken += char
    for (const tokenDef of tokenDefnitions) {
      if (currentToken.match(tokenDef.regex)) {
        tokenList += [tokenDef.type, currentToken]
        currentToken = ""
      }
    }
  }
  console.log(tokenList)
};


function TokenDefinition(type, regex){
  this.type = type;
  this.regex = regex;
}

const tokenDefnitions = [
  new TokenDefinition(tokenType.OPEN_PAREN, /\(/),
  new TokenDefinition(tokenType.CLOSE_PAREN, /\)/),
  new TokenDefinition(tokenType.STRING, /"(.*?)"/ ),
  new TokenDefinition(tokenType.NUMBER, /[0-9]+/),
  new TokenDefinition(tokenType.BOOLEAN, /HOT|NOTHOT/),
  new TokenDefinition(tokenType.OPERATOR, /\+|-|\*|\/|=/),
  new TokenDefinition(tokenType.STMT_END, /[ \t]+BOOM/),
];


//Token info contains a array of token type and its regex value 
