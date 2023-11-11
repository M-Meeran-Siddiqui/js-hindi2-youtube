//Dates:
/*Js mein ye jo date object hai ye represent krta hai ek single moment ka kisi bhi platform pe . And ye moment hamara represent hota hai janauary first 1970 se  So inhone kya kiya ke ek aribratary date lie like 1970 january 1st  or waha se he hamare date jitne bhi hm declare krte hai wo calculate hoti hai. Or hamare date usually milliseconds mein 
calculate hote hai so jb him gate object ko declare krge to waha pe ek long string wo kuch nahi wo srif millisecond time hai January first se leke. so isko store ya compare krna easy rheta hai milliseconds mein kyuke hm compare kr skte hai date ko us case mein 
"But it is not a easy task.*/


let myDate = new Date()  //Date object , it gives us lot of method or properties. 
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

//For declaring specific date.

let myCreatedDate = new Date(2023 , 0 , 23)  //Months 0 se start hote hai.
console.log(myCreatedDate.toDateString());
let myCreatedDate1 = new Date( 2023 , 0 , 23 , 5 , 3);
let myCreatedDate2 = new Date("2023-01-14") //and its format is YY/DD/MM and it is not applicable in india.
let myCreateDate4  = new Date("01-14-2023") //In india MM/DD/YY
console.log(myCreatedDate.toLocaleString());

//learn about just below once.
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());


//conversion in second

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);  //IF you want to get month.
console.log(newDate.getDay());



//Most usefull date Method.

newDate.toLocaleDateString('default' , { weekday : "long" , timeZone : ""})










