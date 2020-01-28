const Twit = require('twit');

const FoursquareService = require('../services/FoursquareService');
const TwitterService = require('../services/TwitterService');

const twitterConfig = require('../configs/twitter');

const twitter = new Twit(twitterConfig);
const foursquareService = new FoursquareService();
const twitterService = new TwitterService();

const stream = twitter.stream('statuses/filter', {
  track: '@tearboty',
});

stream.on('tweet', (tweet) => {
  foursquareService.explore(tweet).then((result) => {
    let text = '';

    result.response.groups[0].items.forEach((e) => {
      text += `✏️ Name: ${e.venue.name}\n🌎 Country: ${e.venue.location.country}\n🌆 City: ${e.venue.location.city || 'N/A'} - ${e.venue.location.state || 'N/A'}\n🏠 Address: ${e.venue.location.address || 'N/A'}\n\n`;
    });

    twitterService.direct(twitter, tweet.user.id_str, text);
  }).catch(() => {
    twitterService.direct(twitter, tweet.user.id_str, 'Sorry, i did not find anything ☹️');
  });
});
