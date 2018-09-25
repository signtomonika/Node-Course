var square = (x)=>{

    var result = x*x;

    return result;

};

var squareShort = (x) => x*x;  //no return keyword is required ; simple version

console.log(square(9));

console.log(squareShort(9));

var user = {

    name: 'Tubby',

    sayHi:()=> {
        console.log(arguments);  //arguments keyword doesn't work
        console.log(`Hi. I'm ${this.name}`); //this keyword will not work with arrow function
     } , 

    sayHiAlt(){
        console.log(arguments); //arguments keyword works
        console.log(`Hi. I'm ${this.name}`); //this keyword will work with standard function
    }

};

user.sayHi(1,2,3);

user.sayHiAlt(1,2,3);