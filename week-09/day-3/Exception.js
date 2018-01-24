let  addString = function(str1, str2, printStr){
  if (typeof str1 !== 'number') {
    throw new Error('"str1" is not a number');
  } else if (typeof str2 !== 'number') {
    throw new Error('"str2" is not a number');
  }
  let newStr;
  try {
    newStr = str1 + str2
    return printStr(newStr);
  } catch (err) {
  console.log(err.message);
}
}

let printStr = function(str) {
  console.log(str);
}

addString(1234, 56789, printStr);