const request = require('request'),
      cheerio = require('cheerio'),
      express = require('express');

let app = express();

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let title, content = "";
  request('https://jalopnik.com/the-six-hours-of-silverstone-was-a-race-of-domination-i-1828449260', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      title = $('.headline hover-highlight entry-title js_entry-title').text()

      content += $('p').text()

      res.json({
        "status": 200,
        "data": {
          "title": title,
          "content": content
        }
      });
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
