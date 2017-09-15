module.exports = function check(str, bracketsConfig) {
  // your solution
  var countOpen = 0;
  var countClose = 0;
  var countLine = 0;
  for (var i=0; i<str.length; i++) {
  	if (str[i] === '(') {
  		countOpen++;
  		}
  	if (str[i] === ')') {
  		countClose++;
  		}
	if (str[i] === '[') {
  		countOpen++;
  		}
  	if (str[i] === ']') {
  		countClose++;
  		}
  		if (str[i] === '{') {
  		countOpen++;
  		}
  	if (str[i] === '}') {
  		countClose++;
  		}
  	if (str[i] === '|') {
  		countLine++;
  	}
  }
    	return (countOpen === countClose) || (countLine%2==0);
}