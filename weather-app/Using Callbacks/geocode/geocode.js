
const request = require('request');

var geocodeAddress = (address, callback) => {

    var addressEncoded = encodeURIComponent(address); //plain text address to encoded address

    var website = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

    var key = '&key=AIzaSyDwWqYcbmwt7M2XT70bNwWRWoKSWhAi-TU';  // from Google cloud platform

    var url = website + addressEncoded + key;

    //console.log(url);

    request(url,
        {
            json: true
        }, (error, response, body) => {

            if (error) {

                callback('Unable to connect to Google servers')

            } else if (body.status === 'ZERO_RESULTS') {
                
                callback('Unable to find the address')

            }
            else if (body.status === 'OK') {

               
                var result = body.results[0];

                callback(undefined,{
                    address: result.formatted_address,
                    latitude: result.geometry.location.lat,
                    longitude:result.geometry.location.lng
                });

            }



        });
};

module.exports = {

    geocodeAddress
};

