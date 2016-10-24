var twit = require('twitter');

var cfg = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

var twitter = new twit(cfg);

var getHomeTimeline = function getHomeTimeline(req, res) {
    twitter.get('statuses/home_timeline.json', {}, function(err, tweets, response) {
        if (err) res.status(500).json(err);
        res.status(200).send(tweets)
    });
};

var getClosestTrends = function getClosestTrends(req, res) {
    twitter.get('trends/closest.json', {}, function(err, tweets, response) {
        if (err) res.status(500).json(err);
        res.status(200).send(tweets)
    });
};

var getFollowers = function getFollowers(req, res) {
    twitter.get('friendships/show.json', {}, function(err, tweets, response) {
        if (err) res.status(500).json(err);
        res.status(200).send(tweets)
    });
};

module.exports = {
    getClosestTrends: getClosestTrends,
    getFollowers: getFollowers,
    getHomeTimeline: getHomeTimeline
};