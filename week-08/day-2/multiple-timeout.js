'use strict';

function printing() {
  console.log('apple'); 
  setTimeout(function() { console.log('pear'); }, 1000); 
  setTimeout(function() { console.log('melon'); }, 3000);
  setTimeout(function() { console.log('grapes'); }, 5000); 
}
printing();