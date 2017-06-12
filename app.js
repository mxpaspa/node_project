const request = require('request'),
      cheerio = require('cheerio'),
      express = require('express');

let app = express();

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let title, content = "";
  request('https://www.welt.de/finanzen/article163334543/Der-Tag-nach-dem-Euro-Das-wuerde-in-Europa-passieren.html', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      $ = cheerio.load(html);
      $('.c-headline').each(function() {
        title = $(this).text();
      });

      $('.p').children().each(function() {
        if (!$(this).hasClass('c-inline-element--has-commercials')) {
          content += $(this).text();
        }
      });
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
