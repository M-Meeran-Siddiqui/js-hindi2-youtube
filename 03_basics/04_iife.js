//Immediately Invoked Function Expressions (IIFE)

/* (Question: ) Why we use iife ? 
(Answer):Global scope  ke  pollution se problem  hote hai kai bar so  us Global scope ke jo variables hai  ya jo bhi waha declaration hai to uske pollution ko hatane ke liye hmne iife ka use kiya hai.*/

//Normal way we use function : (Slower way compare to (iife) of access)
// function chai(){
//      console.log(`DB CONNECTED`);
// }


//way we use function or declare through (IIFE): (Faster Way of access)
(function chai(){
    console.log(`DB CONNECTED`);
})();   //For running the next once we should end the previous to tell its ending points.


//First way of (iife) through arrow function. with no  (argument or parameter)
( () => {
   console.log(`DB CONNECTED TWO`);
})();



// Second way of (iife) through arrow function.  with (argument or parameter)
(  (name) =>  {  //unnamed iifi::                  // here is the (parameter).
   console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');                               // here is the (argument).






//How to Write tow iife or multiple iife -> simple you give the termination by semicolon afer one iife : 

(() =>{
    console.log("HEllo this is Meeran")
})(); 

(()=>{
    console.log("Nice to meet you")
}) ()
