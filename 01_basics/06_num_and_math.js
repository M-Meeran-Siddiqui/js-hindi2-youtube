// Note: Jo number library hai wo js ke saath bydefault aati hai.
/*
By default, JavaScript displays numbers as base 10 decimals.
But you can use the toString() method to output numbers from base 2 to base 36.
Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
 */
// Here numbers can also be defined as objects with the keyword (new) so ye apne mein ek object hai jiske andar bahut sare properties hai.

const score = 400

console.log(score)

//Explicitly definded datatypes how -
const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length);//here if you use toString then with the help of this we can use lot of method of string . 


//On E-commerce application in amount section try to use toFixed for precision value. according to you .
console.log(balance.toFixed(1));  //consider upto onedecimal places.


//Try to use below toprecision once very carefully.
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));


// console.log(hundreds.toLocaleString()); it set the number according to american standard.
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//toExponential()
const str2 = "ABCDEFGH";
console.log(hundreds.toExponential());



//valueOf()       
const MyNumberType  =  10000;
/*const object1 = new MyNumberType (4);
console.log(object1);*/


//++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++
// Note: Jo maths subject ya library hai wo js ke saath bydefault aati hai.
// and maths object gives lot of method or we can say properties to use it.
console.log(Math);
console.log(Math.abs(-4));  //it is nothing but absolute value.
console.log(Math.round(4.6)); //Mostly use once.
console.log(Math.ceil(4.2));  //gives top value.
console.log(Math.floor(4.9));  //gives below value.
console.log(Math.min(4,3,6,8));   
console.log(Maths.max(4,6,7,8));

console.log(Maths.random());   //by default it generates value 0 to 1 . but you can also give your own interval.

console.log((Math.random()*10) + 1);  // shift in left one times.

// but its possible that sometimes value comes like 0.1  so due to this below floor value give 0 but want value greater than 1 so for this below we add (1).
console.log(Math.floor(Math.random()*10) + 1);   //So now it gives value form 1 to 9 

//But sometimes we want to defined both min and max both.
const min = 10
const max = 20

console.log(Math.random()  * (max - min + 1) + min);























