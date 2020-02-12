const { FoursquareService } = require('../services');

const foursquareService = new FoursquareService();

class FoursquareController {
  async explore(twitter, $) {
    foursquareService.explore(twitter, $);
  }
}

module.exports = FoursquareController;
