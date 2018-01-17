let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=XAkDFy3BV2Acl20d2e4B0HAKI1MviO4j&limit=16', true); // Also try http://444.hu/feed

httpRequest.onload = function() {
  let ourData = JSON.parse(httpRequest.responseText).data;

  for (let i = 0; i <= ourData.length; i++) {
  let newPic = document.createElement('img');
  newPic.setAttribute('src', ourData[i].images.original_still.url);
  document.body.appendChild(newPic);

  newPic.addEventListener('click', function() {
    newPic.setAttribute('src', ourData[i].images.original.url);
  })
}
};
httpRequest.send();