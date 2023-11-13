// const coding = ["js" , "ruby" , "java"  , "python" , "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);  // by this it print all the values but return nothing so we should manully perform return action. but see after doing this again it can't return anything so it simply means that for-Each can't return anything.


const myNums = [1, 2, 3, 4, 5 , 6, 7, 8, 9 ,10 ]


//Some Method 

//like for-Each we have filter operation ye bhi apne andar call back he leta hai and note it return value but for-Each not .


// const newNums = myNums.filter((num) => num > 4 )

//Some problems occurs in filter operation , suppose 

/*const newNums = myNums.filter((num) => {
    //  num > 4
     return num > 4
} )*/

// console.log(newNums);  // so see it gives us a empty array so this is the concept of scope what we discussed in the arrow function discussion so note : jb ap scope start krdege to waha apko return keyword ka use krna he padega for getting the value . and without scope you don't want to use return keyword.



//How we use filter task what i do above through for-Each.
const newNums = []

myNums.forEach((num) =>{
     if(num > 4){
         newNums.push(num)
     }
})

console.log(newNums);



