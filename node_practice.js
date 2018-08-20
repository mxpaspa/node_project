const request = require('request'),
      cheerio = require('cheerio'),
      express = require('express');

let app = express();

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let title, content = "";
  request('https://www.welt.de/finanzen/article163334543/Der-Tag-nach-dem-Euro-Das-wuerde-in-Europa-passieren.html', function (error, response, html) {



    $('p').each(function() {

        content += $(this).text();

    });

var request = require('request')
var cheerio =require('cheerio')
var app = express()

var article_link = 'https://www.welt.de/finanzen/article163334543/Der-Tag-nach-dem-Euro-Das-wuerde-in-Europa-passieren.html';


//
// ('li[class=orange]').html()
// var headline = $('.c-headline');
// var headlineText = headline.text();
