const Fourplaces = require('fourplaces');
const emoji = require('node-emoji');

const { Direct } = require('../models');

const { foursquareConfig } = require('../configs');

const foursquare = new Fourplaces(foursquareConfig);

class FoursqareService {
  async explore(twitter, $) {
    try {
      const args = $.text.slice(0).trim().split(' ');
      const place = args[args.length - 1];
      const location = $.text.replace('@tearboty', '').replace(place, '').trim();
      const userLocation = $.user.location;
      const emojiKey = emoji.find(place);
      const places = await foursquare.venues().explore({ query: `${emojiKey ? emojiKey.key : place}`, near: `${location || userLocation}` });

      let text = '';

      places.response.groups[0].items.forEach((e) => {
        text += `✏️ Name: ${e.venue.name}\n🌎 Country: ${e.venue.location.country}\n🌆 City: ${e.venue.location.city || 'N/A'} - ${e.venue.location.state || 'N/A'}\n🏠 Address: ${e.venue.location.address || 'N/A'}\n\n`;
      });

      twitter.post('direct_messages/events/new', new Direct({ user: $.user.id_str, text }).toJson());
    } catch (ex) {
      console.log(ex);

      twitter.post('direct_messages/events/new', new Direct({ user: $.user.id_str, text: 'Error, try again later' }).toJson());
    }
  }
}

module.exports = FoursqareService;
