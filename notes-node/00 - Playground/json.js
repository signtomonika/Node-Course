// JSON to string

var obj = {
    name: 'Monika'
};

var stringObj = JSON.stringify(obj);

console.log(typeof stringObj);

console.log(stringObj);

// string to Object (JSON)

var personString = '{"name": "Monika","age":25}';

var person = JSON.parse(personString);

console.log(typeof person);

console.log(person);

