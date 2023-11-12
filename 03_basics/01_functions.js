//Function is nothing but it is a block of code.

/*function sayMyName(){     //function definition. and when it is empty then that is known as function declaration.
     console.log("H");
     console.log("I");
     console.log("T");
     console.log("E");
     console.log("S");
     console.log("H");
}

          Note:
          // function referenced -> sayMyName
         // function execution  -> sayMyName()

    sayMyName()           //function calling 
*/


/*function addTwoNumbers(number1 , number2){       //function ke definition banate waqt hm jo value pass krte hai function mein  wo (parameter) hota hai. 
  
    console.log(`The addition of the ${number1} and ${number2} is : ${number1+number2}`);     

}

addTwoNumbers(2 , 4);                             //function ko call krte waqt hm jo value pass krte hai function mein wo (arguments) hota hai.
addTwoNumbers(2 , "4");
addTwoNumbers(2 , "a");
addTwoNumbers(2 , null);
*/



function addTwoNumbers (number1 , number2){

    // With variable  returning : 
    //    const result = number1 + number2
    //    return result    
    
    // Without variable returning : 
    return number1 + number2;   

    console.log("Thankyou")                       //it can't execute what after  returning  function  can't do anything which is come after return. 
    }

//  console.log(addTwoNumbers(5 , 5))
const result  =  addTwoNumbers(5 , 5)
console.log("The addition of the two number  : " , result);



// Now we discuss how many ways we take the parameter and how many thing we can do from function.


function loginUserMessage(username){
     if(username === undefined){
        console.log("Please enter a username") // here we want that whatever comes after this if block can't be executed so for this we return inside the if block  and (Note : ) it is not correct that we cannot use return keyword without returning anything.
        
        return   //Now after this return  function can't execute the next return because note it that function can do multiple things at once but at a time return only once.
    
     }
      return `${username} just logged in `
}

// console.log(loginUserMessage("Meeran"));
console.log(loginUserMessage());   // jb hm koi value nahi pass krte hai tb wo aata hai undefined.    

// Note: Javascript ke andar kuch chizo ko maan liya jata hai ke wo false value hai like 
// "" (Empty string)  , undefined  etc.


//   Other alternatives of the above (username === undefined) once is (!username)  


//Now How we declare the argument bydefault due to this if the user can't pass any value then whatever the default value is present they get to executed and if the user pass any value then that will executed .

function loginUserMessage2(username = " Sam"){
      if(!username){
          console.log("Please enter a username")
          return 
      }

      return `${username} just logged in `
}

console.log(loginUserMessage2());
// console.log(loginUserMessage2("Meeran"));



//Rest Operator:  in previous we say it as a spread operator  so it different name decide on the bases of  its usecase.

function calculateCartPrice(val1 , val2 , ...num1){  // it simply means first argument  passes in first parameter that is (val1) and similarily done with (val2) and rest of the arguments are passes in the (...num1) parameter.
     return num1
}

console.log(calculateCartPrice(300 ,400 ,500 ,600 ,700 ,800 , 1000))


const user = {
      username : "Meeran" , 
    //   price : 199 
      prices : 199   // exception : it means that we check or maintain the type hence most of the user use typescript.
}

function handleObject(anyObject){ // note hamare function ko nahi pata hai ke username kya hai price kya wo sb kuch karega on the bases of (anyObject) parameter.
     console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

 handleObject(user)

//direct object passing means declaration and passing  value both are done at the same time.
handleObject({
     username : "sam",
     price : 399
})


const myNewArray = [200 , 40 , 500 ,600 ]

function returnSecondValue(getArray){ 
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

//direct array passing means declaration and passing value both are done at the same time.
console.log(returnSecondValue([200 , 400 ,500 ,600  ,700]));