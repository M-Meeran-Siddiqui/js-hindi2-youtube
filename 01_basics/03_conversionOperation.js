// let score = 33
// let score = "33"
let score = "33abc"
// let score = null;
// let score = undefined;
// let score = true;

//By first type: 
// console.log( typeof score);
// By second type: 
// console.log(typeof (score));

let  valueInNumber = Number(score);  //here we do typecasting.
// console.log(typeof valueInNumber);
// console.log(valueInNumber)



// "33" => 33
// "33abc" =>  gives value NaN(not a number) but its type is a number .
// true => 1; false => 0  
// ""  => false;
// "Meeran" => true;

// let isLoggedIn = 1;
//let isLoggedIn = "";
let isLoggedIn = "Meeran";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber)