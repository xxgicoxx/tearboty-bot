require('dotenv').config();

const Twit = require('twit');

const { FoursquareController } = require('./app/controllers');

const { twitterConfig } = require('./app/configs');
const { constants } = require('./app/utils');

const twitter = new Twit(twitterConfig);
const foursquareController = new FoursquareController();

const stream = twitter.stream(constants.STREAM_FILTER, {
  track: twitterConfig.track,
});

stream.on(constants.ON_TWEET, async ($) => {
  foursquareController.explore(twitter, $);
});
