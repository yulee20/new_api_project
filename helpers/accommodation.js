const Search = require('../api/search');
const Accommodation = require('../api/accommodation');

class AccommodationHelper {

  async getAccomResponse (hotelId, qs) {
    const searchResponse = await Search.packages();
    const matrixResponse = await Accommodation.matrix(hotelId, qs);

    return matrixResponse;
  }

}

module.exports = new AccommodationHelper();