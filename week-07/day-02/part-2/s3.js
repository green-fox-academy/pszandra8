'use strict';

let url = "https//www.reddit.com/r/nevertellmethebots";
url = url.replace("bots", "odds");
url = url.substr(0, 7) + ':' + url.substr(7, 37);

console.log(url);