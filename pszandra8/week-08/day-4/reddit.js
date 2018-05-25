'use strict'

let httpRequest = new XMLHttpRequest();

httpRequest.open('GET', 'http://secure-reddit.herokuapp.com/simple/posts');
httpRequest.send();

httpRequest.onreadystatechange = function() {
  if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    let response = JSON.parse(httpRequest.responseText).posts;
    console.log(response);

    let posts = document.querySelector('.posts');

    response.forEach(function(element) {
      let post = document.createElement('div');
      post.classList.add('post');
      posts.appendChild(post);

      let textBox = document.createElement('div');
      textBox.classList.add('text-content');
      post.appendChild(textBox);

      let arrows = document.createElement('div');
      arrows.classList.add('arrows');
      textBox.appendChild(arrows);

      let titleH1 = document.createElement('h1');
      titleH1.textContent = element.title;
      titleH1.classList.add('textHeader');
      textBox.appendChild(titleH1);

      let url = document.createElement('a');
      url.classList.add('url');
      url.textContent = '(' + element.url + ')';
      url.setAttribute('href', element.url);
      titleH1.appendChild(url);

      let up = document.createElement('button');
      up.classList.add('up');
      arrows.appendChild(up);

      let down = document.createElement('button');
      down.classList.add('down');
      arrows.appendChild(down);

      let number = document.createElement('div');
      number.classList.add('number');
      number.textContent = 0;
      arrows.appendChild(number);

      let creator = document.createElement('a');
      // creator.classList.add('creator');
      // creator.setAttribute('href', 'none');
      if (element.user === null) {
        creator.textContent = 'anonymus';
      } else {
        creator.textContent = element.user;
      }

      let time = function() {
        let timeInfo = document.createElement('p');
        time.textContent = element.id;
        submitInfo.appendChild(timeInfo);}

      let submitInfo = document.createElement('p');
      submitInfo.classList.add('submitInfo');
      submitInfo.textContent = 'submitted ' + time() + ' time ago, by ' + creator.textContent;
      textBox.appendChild(submitInfo);

      let actionBox = document.createElement('div');
      actionBox.classList.add('actionBox');
      textBox.appendChild(actionBox);
      
      let modify = document.createElement('a');
      modify.classList.add('modify');
      modify.textContent = 'modify';
      modify.setAttribute('href', 'none');
      actionBox.appendChild(modify);

      let remove = document.createElement('a');
      remove.classList.add('remove');
      remove.textContent = 'remove';
      remove.setAttribute('href', 'none');
      actionBox.appendChild(remove);

      up.addEventListener('click', function(){
        up.classList.add('upvoted');
        down.classList.remove('downvoted');
        number.textContent ++;
      })

      down.addEventListener('click', function(){
        down.classList.add('downvoted');
        up.classList.remove('upvoted');
        number.textContent --;
      })
    });
};
}