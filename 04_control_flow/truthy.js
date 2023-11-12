const userEmail = "mee.sidd.8000@google.com"  // yaha pe is string ke bases pe he true and false decide hoga means if string is not empty then if executed and if string is empty then else executed.


if (userEmail) {   // it is work like if(true){"executed if true"}
     console.log("Got user email");
} else{
     console.log("Don't have user email");
}



//Falsy values
/*
  false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
*/

//Truthy values
/*
  true , "0" , 'false' , " ", [] , {} , function(){}
 */


  //Conditional for array
 const userEmail2 = []
  if(userEmail.length === 0){
     console.log("Array is Empty");
  }

  //Conditional for object
  const emptyObj = {}
  if(Object.keys(emptyObj).length === 0 ){
      console.log("Object is empty")
  }

  //Conditional for functions
  const store = function (){}
  if(store){
      console.log("Empty function is true.")
  }


  //Nullish Coalescing Operator (??) : null undefined

  let val1 ;
//   val1 = 5 ?? 10
//  val1 = null ?? 10
  val1 = undefined ?? 15

  val1 = null ?? 10 ?? 20

  console.log(val1);


  //Ternary Operator

//   condition ? true : false

  const iceTeaPrice = 100

  iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");