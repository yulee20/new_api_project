const request = require('request-promise');
const config = require('../helpers/config');

class Accommodation {
  constructor() {
    this.baseUrl = config.baseUrl;
  }

  matrix(hotelId, qs) {
    const options = {
      baseUrl: this.baseUrl,
      uri: `api/packages/${hotelId}/matrix`,
      headers: config.headers,
      json: true,
      qs
    };
    return request.get(options);
  }

  details() {

  }

}

module.exports = new Accommodation();