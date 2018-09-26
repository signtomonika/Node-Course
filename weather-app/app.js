const yargs = require('yargs');
const axios = require('axios');


const argv = yargs  //getting the arguments from command line
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

//console.log(argv.address);

var addressEncoded = encodeURIComponent(argv.address); //plain text address to encoded address

var website = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

var key = '&key=AIzaSyDwWqYcbmwt7M2XT70bNwWRWoKSWhAi-TU';  // from Google cloud platform

var url = website + addressEncoded + key;

//console.log(url);

axios.get(url).then(


    (response) => {


        if (response.data.status === 'ZERO_RESULTS') {

            throw new error('Unable to find the address');

        } 

        var latitude = response.data.results[0].geometry.location.lat;

        var longitude = response.data.results[0].geometry.location.lng;

        var website = 'https://api.darksky.net/forecast/';

        var key = 'b5fa81ed6d7d7fa2de0ba2df57781934/';  // from DarkSky App
    
        var location = latitude + ',' + longitude;
    
        var weatherUrl = website + key + location;

            console.log(response.data.results[0].formatted_address);

            return axios.get(weatherUrl);

            }).then(

                (response)=>{

                    var temperature = response.data.currently.temperature;

                    var apparentTemp = response.data.currently.apparentTemperature;

                    console.log(`It is currently ${temperature}. Feels like ${apparentTemp}`);

                }


            ) .catch(

    (error) => {

        if (error.code === 'ECONNREFUSED') {

            console.log('Unable to connect to API Servers');
        }else {

            console.log(error.message);
        }


    }

)
