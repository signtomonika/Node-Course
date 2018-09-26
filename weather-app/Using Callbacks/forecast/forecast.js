const request = require('request');

var forecastKey = '';

var forecastLocation = (latitude, longitude, callback) => {

    var website = 'https://api.darksky.net/forecast/';

    var key = 'b5fa81ed6d7d7fa2de0ba2df57781934/';  // from DarkSky App

    var location = latitude + ',' + longitude;

    var url = website + key + location;

    //console.log(url);

    request(url,
        {
            json: true
        },
        (error, response, body) => {

            if (error) {

                callback('Unable to connect to Forecast.io servers');

            } else if (response.statusCode === 200) {

                callback(undefined, {
                    temperature: body.currently.temperature,
                    apparentTemp: body.currently.apparentTemperature
                });


            }
            else {

                callback('Unable to fetch weather');

            }

        }
    )
}



module.exports = {

    forecastLocation

};