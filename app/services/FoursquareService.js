const Fourplaces = require('fourplaces');
const emoji = require('node-emoji');

const { Direct } = require('../models');

const { foursquareConfig, twitterConfig } = require('../configs');
const { constants } = require('../utils');

const foursquare = new Fourplaces(foursquareConfig);

class FoursqareService {
  async explore(twitter, $) {
    try {
      const args = $.text.slice(0).trim().split(' ');
      const place = args[args.length - 1];
      const location = $.text.replace(twitterConfig.username, '').replace(place, '').trim();
      const userLocation = $.user.location;

      const emojiKey = emoji.find(place);
      const places = await foursquare.venues().explore({ query: `${emojiKey ? emojiKey.key : place}`, near: `${location || userLocation}` });
      const text = places.response.groups[0].items.map((item) => `✏️ Name: ${item.venue.name}\n🌎 Country: ${item.venue.location.country}\n🌆 City: ${item.venue.location.city || 'N/A'} - ${item.venue.location.state || 'N/A'}\n🏠 Address: ${item.venue.location.address || 'N/A'}\n`).join('\n');

      twitter.post(constants.POST_NEW, new Direct({
        user: $.user.id_str, text,
      }).toJson());
    } catch (ex) {
      console.error(ex);

      twitter.post(constants.POST_NEW, new Direct({
        user: $.user.id_str, text: constants.MESSAGE_ERROR_TRY_AGAIN,
      }).toJson());
    }
  }
}

module.exports = FoursqareService;
