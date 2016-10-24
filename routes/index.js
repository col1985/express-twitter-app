var express = require('express');
var router = express.Router();

var twitter = require('./../lib/twitter');

/* GET tweets. */
router.get('/timeline', twitter.getHomeTimeline);
router.get('/trends', twitter.getClosestTrends);
router.get('/followers', twitter.getFollowers);

module.exports = router;