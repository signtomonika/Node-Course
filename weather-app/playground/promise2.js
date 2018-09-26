const request = require('request');

var geocodeAddress = (address) =>{

return new Promise(

    (resolve,reject)=>{

        request('https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyDwWqYcbmwt7M2XT70bNwWRWoKSWhAi-TU',
        {
            json:true
        },
        (error,response,body)=>{

            if (error) {

                reject('Unable to connect to Google servers')

            } else if (body.status === 'ZERO_RESULTS') {
                
                reject('Unable to find the address')

            }
            else if (body.status === 'OK') {

               
                var result = body.results[0];

                resolve({
                    address: result.formatted_address,
                    latitude: result.geometry.location.lat,
                    longitude:result.geometry.location.lng
                });

            }

        });

    }
);

};


geocodeAddress('89509').then(

    (data)=>{

        console.log('Success : '+ JSON.stringify(data,undefined,2));
    },
    (error)=>{

        console.log(error);
    }

)