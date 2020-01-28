const Fourplaces = require('fourplaces');
const emoji = require('node-emoji');

const foursquareConfig = require('../configs/foursquare');

const foursquare = new Fourplaces(foursquareConfig);

class FoursqareService {
  explore(tweet) {
    const args = tweet.text.slice(0).trim().split(' ');
    const place = args[args.length - 1];
    const location = tweet.text.replace('@tearboty', '').replace(place, '').trim();
    const emojiKey = emoji.find(place);

    return foursquare.venues().explore({
      query: `${emojiKey ? emojiKey.key : place}`,
      near: `${location || tweet.user.location}`,
    });
  }
}

module.exports = FoursqareService;
