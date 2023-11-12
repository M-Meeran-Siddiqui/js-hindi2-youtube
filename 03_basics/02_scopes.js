// let a = 10 
// const b = 20 
// var c = 30 

let a = 300 ;   // this is known as global scope.
if(true){
    let a = 10   // this is known as block scope.
    const b = 20
    var c = 30

    // console.log("INNER a : ", a);

}   //{}this is known as scope and in every language curley bracecs is known as scope. and note it this curley braces is also in the object but that for object declaration  so when this bracses comes with function  , if -else , loop etc. then it called as scope of that portion .

//  console.log(a);  //it gives the error that is a can be defined outside the if block so it can only accessible inside the block or scope   //It is correct  because we should want the value can't be accessible outside the scope.

// console.log(b);   //  same problem occur here as done with (a) due to let. 

// console.log(c);    // see this is accessible but note is we can't want to do such type of thing so due to this we avoid to  the (var) keyword.

// Note : Whatever we declare outside the scope of anyone either it if-else , loop etc. they can be accessible inside the scope or block because they are (global scope) but vice-versa not true (block scope). Or we should want also .


// Note : Jb hm console ke andar jake scope check krte hai tb wo baat alag hai . And Jb node ke according scope ko check krte hai tb wo baat alag hai.



// ++++++++++++++++++++++++++++++++---Nested-Function and its scope----++++++++++++++++++++

//Note : child function parent  function  ke properties ko access kr skte hai but vice-versa not possible.
function one(){ 
    const username = "Meeran"
    function two(){
           const website = "youtube"
           console.log(username);
        }
        // console.log(website);
        two()
}
// one()

//Similarily done the above thing in the nested if-else.

//IN JavaScript also line by line execution is performed.
if(true){   

    const username = "Meeran"
    if(username === "Meeran"){
         const website = " youtube"
        //  console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// ++++++++++++++++++++++++----Interesting-----+++++++++++++++++++++++++++++++++

console.log(addone(5));  // here it can't gives us a error because it is calling it simply means that we call here directly the function  not through the variable so calling can done any where  inside the same file .   (This concept is known as "HOISTING")
function addone(num) { 
     return num + 1;
}


console.log(addTwo(5));   // then it gives error because  we know that according to the line by approach we can't use the variable before its declaration . But see above no error comes why see
const addTwo = function(num) {
    return num + 2;
}
// console.log(addTwo(5));  //suppose if we move it above like see above
