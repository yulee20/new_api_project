const request = require('request-promise');
const config = require('../helpers/config');

class Search {
  constructor() {
    this.baseUrl = config.baseUrl;
  }
  packages() {
    const options = {
      baseUrl: this.baseUrl,
      uri: 'api/packages',
      headers: config.headers,
      json: true,
      qs: {
        depAirport: 'LGW',
        end: '9',
        flexible: false,
        goingTo: 'All Destinations',
        keepFilters: true,
        occupation: '2',
        origin: 'London Gatwick',
        resortCode: 'any',
        sbDepAirport: 'LGW',
        sort: 'recommendation_asc',
        sponsorshipService: '3',
        start: '0',
        when: 'any',
        widening: true,
      }
    };
    return request.get(options);
  }
}

module.exports = new Search();