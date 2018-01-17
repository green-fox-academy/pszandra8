'use strict'

var request = new XMLHttpRequest();

request.open('GET', 'https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=Budapest');
request.setRequestHeader('X-MAshape-Key', 'luOXpshuQ5mshWFHf7PlZCHfIBZSp19U6R');
request.send();
request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
      let text = JSON.parse(request.responseText);
      console.log(text);
} else {
  console.log('error');
}
}