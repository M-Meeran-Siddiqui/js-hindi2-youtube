//this keyword current context ke bare mein batata hai or work krta hai.so note jb hm current context ko refer krrahe hai tb hm (this) keyword use krte hai . for reference without (this) also perform but we it is good to use (this)
const user = { 
     username : "Meeran" , 
     price : 999, 

     welcomeMessage : function() { 
         console.log(`${this.username} , welcome to website `);
        //  console.log(this);
     }

}

// user.welcomeMessage()
// user.username = "Sam"  //without this it can't be perform whatever you see after running it .
// user.welcomeMessage()

console.log(this);  //<<<<<<<:::::::now it refer empty object because abhi global koi context he nahi hai . but if we use this concept on browser then it not refer empty because browser ke andar jo object hai wo window object hai  or yaha pe jo hamare pass value hai wo hai empty object . :::::::>>>>>>>>>>


function chai(){
      let username = "Meeran"
      console.log(this.username);  //Note : inside the function like this  we can't use (this) like here.
}
// chai()



//How we declare functions using arrow functions.
// const chai = function (){
//       let username = "Meeran"
//       console.log(this.username);
// }


//Basic of arrow functions : 
// const addTwo = (num1  , num2 ) => {
//        return num1 + num2;
// }

// console.log(addTwo(3 , 4));


// using arrow function through implicit return -> 

const addTwo = (num1  , num2 ) =>  num1 + num2;
console.log(addTwo(3 , 4));


//other way to use this arrow function-
const addTwo2 = (num1  , num2 ) =>  (num1 + num2);
console.log(addTwo2(3 , 4));


//Note :<<<<<<< Curley bracses mein use kiya to return keyword likhna padhega simple bracses or Parentheses use  kiya to return keyword nahi likhna padhega.>>>>>>> Most use For (React)


//Now For returning object how we use arrow function.
const addTwo3 = (num1 , num2) => ({username :  "Meeran"})

console.log(addTwo3(3 , 4));


//More usefull this arrow function in the loops.

const myArray = [ 2, 5, 6 , 7 ,8 ]

// myArray.forEach()



