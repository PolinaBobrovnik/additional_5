module.exports = function check(str, bracketsConfig) {
 var answer = 0;
 var result;
for (var i=0; i<bracketsConfig.length; i++) {
  if (brackets(bracketsConfig[i][0], bracketsConfig[i][1])) {
    answer++;
  }
}

if (bracketsConfig.length == answer) {
  return true;
} else return false;

  function brackets (first, last) {
  for (var i=0; i<str.length; i++) {
    if (str[i] === first) {
      count = false;
      for (var j=i; j<str.length; j++) {
        if (str[j] === last) {
          count = true;      
          break;
        } 
      }

      }
} return count;
}
}