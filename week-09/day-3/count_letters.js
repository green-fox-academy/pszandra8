let letterCounter = function(list) {
  myDict = {};
  list = list.toLowerCase();
  for (i in list) {
    if (myDict[list[i]] === undefined) {
      myDict[list[i]] = 1;
    } else {
      myDict[list[i]] += 1;
  }
  } return myDict;
}

module.exports = letterCounter;