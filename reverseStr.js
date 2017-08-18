var revStr1 = (str) => {
  return str.split("").reverse().join("");
}

var revStr2 = (str) => {
  revStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

var revStr3 = (str) => {
  // base case
  if (str.length <= 1) {
    return str;
  }
  //
  return revStr3(str.substr(1)) + str[0];
}


// console.log("revStr1:", revStr1("Andy"));
// console.log("revStr2:", revStr2("Andy"));
console.log("revStr3:", revStr3("Andy"));
