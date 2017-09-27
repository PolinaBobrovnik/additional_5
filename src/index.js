module.exports = function check(str, bracketsConfig) {
  var brackets = [];
  var newStr = str;
  var hlp = str.length+1;

 for (var i=0; i<bracketsConfig.length; i++){
  brackets.push(bracketsConfig[i].join(''));
 }

  function deletel (type) {
    newStr = newStr.replace(type, '');
  }


  while (newStr.length<hlp) {
    for (var j=0; j<brackets.length; j++) {
      deletel(brackets[j]);
    }

    hlp -= 2;
  }

return (newStr.length == 0); 

}