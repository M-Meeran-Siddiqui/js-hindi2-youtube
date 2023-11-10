// For mastering js ,  master two thing objects and all the web events of browsers.


// Kis tarike se data ko memory mein rakha  jata hai Or access kiya jata hai on the bases of this data it is divided into two parts primitive and non-primitive.


// Primitive DataTypes:-

// 7 types : String , Number , Boolean , null  & they are call by Values.

// Note: js ke andar hm kabhi language ko defined nahi krte.

// Js is a dynamically type language.



const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp  =  null
let userEmail;


// console.log(scoreValue);
// console.log(typeof scoreValue);


const id = Symbol ('123');  //use for unique identification. and its return type is symbol.
const anotherId = Symbol ('123')


// console.log(id === anotherId);  //return false.  and (===) means that the (type and value) must both be equal.


// Non-primitive or Reference datatypes:-
// Array , Objects , Functions


const bigNumber = 344840840840294823094n;

console.log(bigNumber);
console.log(typeof bigNumber);

const heros = ["shaktiman","naagraj","doga"];    //It is Array

// console.log(heros);
// console.log(typeof heros);

let myObj = {              // It is Object and ye (curley bracses) ke andar (keyvalue pair)  ke form mein hote hai. baki iske andar datatypes ,array bhi ho skta hai  ya function ya simple datatp. or (child object) bhi ho skta hai.
     name: "Meeran", 
     age : 22,
}

// console.log(myObj)
// console.log(typeof myObj)




const myFunction = function(){               //here we declare functions and use it as a variables.
     console.log("Hello World");
 }
 console.log(myObj)
 console.log(typeof myFunction);

 // Jitne bhi Non-primitive datatypes hai inka return type object he aata hai. but function ka return type (object function) rheta hai.


//https://262.ecma-international.org/5.1/#sec-11.4.3




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// For Storage :
// (*) Jitne bhi Primitive datatypes hai unke lie Stack Memory use hoti hai .
// (*) Jb bhi Stack memory  use hoti hai tb hame hamere variables ke copy milte hai. 
// (*) Jitne bhi Non-Primitive datatypes hai unke lie Heap Memory use hoti hai.
// (*) Jb bhi Heap memory use hoti hai tb hame hamere variables ka orginal copy means reference milta hai.



//See Below Examples-
   
// For Stack Memory-
   let myYoutubename = "Meeran@1234";
   let newYoutubename = myYoutubename;
      newYoutubename = "Meeran#3290";
      console.log(myYoutubename);
      console.log(newYoutubename);

// For Heap Memory-
   let user = {
        email : "meeran@google.com",
        name  : "Meeran-Siddiqui"
   }


     userTwo = user
      userTwo.name = "Meeran"

      console.log(userTwo.name);
      console.log(user.name);























