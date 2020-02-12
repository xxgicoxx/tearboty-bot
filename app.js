const Twit = require('twit');

const { FoursquareController } = require('./app/controllers');

const { twitterConfig } = require('./app/configs');

const twitter = new Twit(twitterConfig);
const foursquareController = new FoursquareController();

const stream = twitter.stream('statuses/filter', {
  track: '@tearboty',
});

stream.on('tweet', async ($) => {
  foursquareController.explore(twitter, $);
});
