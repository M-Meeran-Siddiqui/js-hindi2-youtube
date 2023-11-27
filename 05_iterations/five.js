const  coding = ["js" , "ruby" , "java" , "python" , "cpp"]

//coding.forEach(function name () {}) //kyu ke ye function call back hai so iska name nahi hota hai so 
//coding.forEach(function () {})  //kyu ke ye function array ke andar chal raha hai to ye jo value hogi apne ap  parameter ke tarha value leke aega  . OR ap value bolo ya val etc.

//coding.forEach(function(val){})  //kyuke val as a parameter mila hai function ke andar to hm chahe jo kr skte hai iska function ke andar.


//So,

coding.forEach(function(val){
     console.log(val);
})

//Now do  the above task by arrow function not by the simple function-

// coding.forEach((val)=>{
//     console.log(val);
// })



//Other way to perform the above task:

// function printMe(item){
//    console.log(item);       
// } 
// coding.forEach(printMe())  //only you , gives reference of your function. here



//Other way

// coding.forEach((item , index , arr)=>{
//     console.log(item , index , arr);
// })



//How we access the object throught for-Each when the object present inside the array.
const myCoding = [
    {
        languageName : "javascript" ,
        languageFileName : "js"
    },
    {
         languageName : "python" , 
         languageFileName : "py"
    },
    {
         languageName : "Java" , 
         languageFileName : "java"
    }

]


myCoding.forEach((item)=>{
    // console.log(item.languageName);
    // console.log(item.languageFileName);
})