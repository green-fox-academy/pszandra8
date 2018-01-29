'use strict';

let playList = document.querySelectorAll('.play');
playList.forEach(function(element) {
  element.addEventListener('click', function(){
    playList.forEach(function(e){
      e.classList.remove('selected_item');
    })
    element.classList.add('selected_item');
  })
})