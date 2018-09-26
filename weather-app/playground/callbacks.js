var getUser = (id, callback) => {

    var user = {

        id: id,
        name: 'Dhruv'

    };

    setTimeout(() => {

        callback(user);

    }, 3000);



};

getUser(9, (user) => {

    console.log(user);

})
