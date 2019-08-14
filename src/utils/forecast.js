const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/8f79b6db4e34c587493778e6d0b9276e/${latitude},${longitude}?units=si`;

  request({ url, json: true}, (error, {body}) => {
    if (error) {
      callback('Unable to connect to weather services!', undefined);
    } else if (body.error) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      const data = body.daily.data[0].summary +
        ` It is currently ${body.currently.temperature} degrees out.` +
        ` There is a ${body.currently.precipProbability}% chance of rain.`
      callback(undefined, data);
    }
  });
};

module.exports = forecast;
