'use strict';

var Twit = require('twit');

var Twitter = new Twit({
  consumer_key: '5geFcwy8C5e2kY1RJmgw9c5O4',
  consumer_secret: 'PmBKBtWh6vy0MBqVqck1oXv5U1VPxRbTZDpjDpkOjeqbCs1AwO',
  access_token: '188550674-fMtSdrOKL43wLkkbzjlUOe8AOpFlenSigvf7BrpD',
  access_token_secret: 'O3JQGCW43SfbXyyJ2TqHzfaM9BqWKRlrtJmq5CVaGtFZz'
});

function search(options) {
  return Twitter.get('search/tweets', options)
    .then(function(resp) {
      var data = resp.data;
      var tweets = data.statuses;
      console.log('>>>>> tweets', data.statuses.length);

      // If max count returned, check for more tweets
      if (data.statuses.length >= options.count) {
        options.max_id = data.statuses[data.statuses.length - 1].id;
        return tweets.concat(search(options));
      }

      return tweets;
    });
}

module.exports = {
  getAll: function(hashtag) {
    var options = {
      q: '%23' + hashtag + ' since:2016-02-19',
      count: 50
    };

    return search(options);
  }
};

