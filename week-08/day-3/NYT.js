let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=ff17940e86d042689a99d63d5e94a363&q=apollo11');
httpRequest.send();
httpRequest.onload = function () {
  if (httpRequest.status >= 200 && httpRequest.status < 400) {
      let text = JSON.parse(httpRequest.responseText);
      let articles = text.response.docs;
      console.log(articles);
      articles.forEach(function(element) {
        let article = document.createElement('h1');
        article.textContent = element.headline.main;
        document.body.appendChild(article);

        let snippet = document.createElement('div');
        snippet.textContent = element.snippet;
        document.body.appendChild(snippet);

        let pDate = document.createElement('p');
        pDate.textContent = element.pub_date;
        document.body.appendChild(pDate);

        let permaLink = document.createElement('a');
        permaLink.textContent = 'click here';
        permaLink.setAttribute('href', element.web_url);
        document.body.appendChild(permaLink);
      });
  } else {
      console.log('error');
  }
};