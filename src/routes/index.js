'use strict';

var Config = require('../config/config.js')();
var Twitter = require('../models/count.js');

var Routes = function(app) {
  app.get('/', function(req, res) {
    res.render('index.jade', {
      title: 'Home' + Config.title
    });
  });

  app.get('/draw', function(req, res) {
    var hashtag = req.query.hashtag;

    Twitter.getAll(hashtag).then(function(resp) {
      console.log(resp.length);
      res.send(resp);
    });
  });
};

module.exports = Routes;
