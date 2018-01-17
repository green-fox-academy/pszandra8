'use strict'

let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=New+York?FuYuOBFjXGmsh2XlcMWjliKzRELNp1niS6RjsnjW5ekCzXSEOb', true);
httpRequest.send();
httpRequest.onload = function () {
  if (httpRequest.status >= 200 && httpRequest.status < 400) {
      let text = JSON.parse(httpRequest.responseText);
      console.log(text);
  } else {
      console.log('error');
  }
};