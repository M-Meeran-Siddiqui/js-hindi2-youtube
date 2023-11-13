//Array specific loops
// for of loop

// ["" , "" ,""]   <-  for array
// [{} , {} , {}]  <-  for object



const arr = [1 , 2 , 3, 4 ,5]
for(const num of arr){      //its simply means (arr) mein se (num) 
    //   console.log(num);    //ko print karo.
}



const greetings = "Hello world!"
for(const greets of greetings){      //means greetings mein se greets 
    //  console.log(`Each char is ${greets}`);  // ko print karo
}


//Maps:::
//Construction of (Map)-

// const map = new Map()    

/*it is also an object. In which (Order follow according to the user enters means line by line or top to bottom and inserted value must be non-repeated) and if you try to repeat the value then it automatically deduct it . 
map.*/


const map = new Map()
map.set('IN' , "India");
map.set('USA' , "United States of America");
map.set('Fr'  , "France")
map.set('IN' , "India")
// console.log(map);


//Can we apply (for-of) on the Map if yes then how it possible:

for (const key of map) {
    console.log(key);   // it give us a full array block when you use (key) like this. But if You want  to print separate value then follow the below once.
}


for (const [key , value] of map) {   //Array destructuring.
    console.log(key , ' :- ' , value );       
}



//Can we Apply for-of loop on Object.

/*
const myObject = {
     game1 : 'NFS' , 
     'game2' : 'Spiderman'
}


for(const [key , value] of myObject){  // it can't be itterable the Object means (for-of) can iterate the (map) but not the (object).
     console.log(key , ':-' , value);
}

*/




