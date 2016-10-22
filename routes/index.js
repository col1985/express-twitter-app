var express = require('express');
var router = express.Router();

var twit = require('twitter');

var cfg = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

var twitter = new twit(cfg);

/* GET tweets. */
router.get('/tweets', function(req, res, next) {
    twitter.get('statuses/home_timeline.json', {}, function(err, tweets, response) {
        if (err) res.status(500).json(err);
        res.status(200).send(tweets)
    });
});

module.exports = router;