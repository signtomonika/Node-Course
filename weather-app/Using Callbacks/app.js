const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const forecast = require('./forecast/forecast');

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

geocode.geocodeAddress(argv.address,(error, location)=> {

    if(error){

        console.log(error);
    }else {
        console.log(JSON.stringify(location,undefined,2));

        forecast.forecastLocation(location.latitude,location.longitude,(error,forecast)=>{

            if(error){

                console.log(error);
            } else {

               // console.log(JSON.stringify(forecast,undefined,2));

               console.log(`It is currently ${forecast.temperature}. It feels like ${forecast.apparentTemp}!`);

            }

        });
    }


});