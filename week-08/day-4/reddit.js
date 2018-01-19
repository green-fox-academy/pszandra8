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
      posts.appendChild(post);;

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

      let up = document.createElement('div');
      up.classList.add('up');
      arrows.appendChild(up);

      let down = document.createElement('div');
      down.classList.add('down');
      arrows.appendChild(down);

      let modify= document.createElement('a');
      modify.classList.add('modify');
      modify.textContent = 'modify';
      modify.setAttribute('href', 'none');
      textBox.appendChild(modify);

      let remove = document.createElement('a');
      remove.classList.add('remove');
      remove.textContent = 'remove';
      remove.setAttribute('href', 'none');
      textBox.appendChild(remove);
    });
};
}