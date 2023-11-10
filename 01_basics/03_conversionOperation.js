// let score = 33
// let score = "33"
// let score = "33abc"
let score = null;
// let score = undefined;
// let score ;
// let score = true;

//By first type: 
// console.log( typeof score);
// console.log(score)
// By second type: 
// console.log(typeof (score));

let  valueInNumber = Number(score);  //here we do typecasting.
console.log(typeof valueInNumber);
console.log(valueInNumber)



// "33" => 33
// "33abc" =>  gives value NaN(not a number) but its type is a number .
// undefined => gives value NaN(not a number) but its type is undefined if we can't typecast.
// true => 1; false => 0  
// ""  => false;
// "Meeran" => true;

// let isLoggedIn = 1;
//let isLoggedIn = "";
let isLoggedIn = "Meeran";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber)


// *********************Operations*********************************

let value = 3
let negValue = -value;
console.log(value);

// console.log(2**3)  it simply means 2 ^ 3 = 8;

let str1 = "hello";
let str2 = " Meeran";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// Note: If String first then all thing behaves like a string and if string last then  first whatever operation present , first it perform then it concatenate with the string. 
//Remember about postfix and perfix operations.
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
