//for
//Note : Multi-cursor shortcut (ctrl + d)
for (let i = 0 ; i < 10  ; i++){
     const element = i;
     if(element == 5){
    //  console.log(" 5 is best number ");
     }
    //  console.log(element);
}

// console.log(element);

for(let i = 1 ; i<= 10 ;i++){
      // console.log(`Outer loop value : ${i}`);
    for(let j = 1 ; j<=10 ;j++){
      // console.log(`Inner loop value ${j} and inner loop ${i}`);    
      // console.log(`${i} x ${j} = ${i * j}`)
    }
}



let myArray = ["flash" , "batman" , "superman"]
console.log(myArray.length)
for(let index = 0 ; index < myArray.length ; index++){
   const element = myArray[index];
  //  console.log(element);
}

//break , continue
for (let index = 1 ; index <= 20 ; index++){
   if(index == 5){
      // console.log(`Detected 5`);
      break;                                          //yaha se sidha bahar block ke.
   }
  //  console.log(`Value of index is : ${index}`);
}




for(let index =1 ;index <= 20 ; index++){
   if(index ==5){
    console.log(`Detected`);   
    continue;
   }
   console.log(`Value of index is : ${index}`)
}


