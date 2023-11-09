// const , let and var are the type of keyword  which is used along with container and it simply means that  (is container mein interger value store krdo Or hmne is container ke saath const keyword ka use kiya hai due to this no one able to change this.)  Similarily for others.  let ke help se hm change perform kr skte hai.
const accountId = 144553   //this is the way to declare the constant.
let accountEmail = "mee.sidd.2019@gmail.com"  // let and var are the way to declare variables but nowadays we cant use the var keyword declare because it can't know about scope , scope is nothing but [] , () ,{} etc.
/*Prefer not to use var because of issue in block scope and functional scope.*/ 
var accountPassword = "12345"
accountCity ="Jaipur"
let accountState;  //js ise undefined manti hai because hmne yaha pe variable to declare kiya but kuch value assign nahi kiya .
// accountId = 2;
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
// console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);  //Shortcut for printing at once Or we can say to print data in the tabular form.