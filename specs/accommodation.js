const accommodation = require('../helpers/accommodation');
const assert = require('chai').assert;

describe('Accommodation testing', function () {
  this.timeout(30000);

  it('details endpoint', async function () {
    const hotelId = 'H0004882';
    const qs = {
      connectorCode: '1',
      context: 'thomascook.com',
      depAirport: 'LGW',
      duration: '7',
      boardType: '17',
      brand: 'TCU1',
      room: 'ROOM01,2,16,16',
      seasonCode: 'S19',
      freeChildFlag: 'No',
      selectedDate: '2019-08-24',
      roomPackageId: 'TCHHOL@158338',
      hotel: 'UD3H00',
      contentSource: '1',
      productId: 'H0004882',
      tid: '84897',
      startDate: '2019-08-24',
      endDate: '2019-08-31',
    };
    const matrixResponse = await accommodation.getAccomResponse(hotelId, qs);
    console.log(matrixResponse);

    assert.deepEqual(matrixResponse.priceList[0].brandCode, qs.brand, 'Brand Code doesnot match search query');
    assert.deepEqual(matrixResponse.priceList[0].duration, '14', 'Duration doesnot match search query');


    // assert.isArray(packagesResponse.items);
    // assert.lengthOf(packagesResponse.items, 10);
  });
});