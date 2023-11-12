// we can declare object into two ways first is literals  and second is constructors.
//singleton ->it means jb hm constructor ke tarha banate hai to  singleton ek object bnta hai means ye apne tarha ka  ek he object hai. lekin jb hm literals ke tarha banate hai tb wo singleton nahi hota uske multiple instances bn jate hai.

//At the end just remember that ke jb hm literals ke tarha banate hai tb singleton nahi bnta hai and jb hm constructor ke tarah banate hai tb singleton bnta hai.

//First approach 
// Object Literals

//How i declare symbols
  const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name":"Meeran Siddiqui",  //now we can't access it using the first way of accessing object. so for such type prop. access we use the second access method .
    age: 18,
    [mySym] : "mykey1",  //how to use symbol inside the object.
    location: "Jaipur" , 
    email: "mee.sidd.@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday"  , "Saturday"]

}

//first way of accessing the object
console.log(JsUser.email)
//second way of accessing the object
console.log(JsUser["email"])
console.log(JsUser["full name"])
//Way for access the symbol present inside the object .
console.log(JsUser[mySym])



//How we change the value of object or override
JsUser.email = "meeran@gpt.com"
console.log(JsUser["email"])


//For lock the object we use freeze method
// Object.freeze(JsUser)
JsUser.email = "meeeran@Apple.com"
console.log(JsUser["email"])

//Method of Creating function inside the object . 
JsUser.greeting = function(){
      console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
      console.log(`Hello Js user ,${this.name}`);  //When we want to do same object ko reference krna hai  then we use (this)  so when we use (this.) then it shows all the properties present inside the object.
}

console.log(JsUser.greeting);// it gives the function reference not execute the function .
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());