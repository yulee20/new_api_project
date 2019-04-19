const request = require('request-promise');
const assert = require('chai').assert;

describe('Google testing', function () {

  xit('Get base response (constructor)', async function () {
    const obj = {
      method: 'GET',
      uri: 'https://www.google.com'
    };
    const response = await request(obj);
    console.log(response);
  });

  // best practise - next case
  it('Get base response (build function)', async function () {
    const obj = {
      uri: 'https://www.google.com'
    };
    const response = await request.get(obj);
    assert.isEmpty(response, 'Google response should not be empty');
    assert.isString(response, 'Google response is not a string');

    // console.log(response);

  });

});