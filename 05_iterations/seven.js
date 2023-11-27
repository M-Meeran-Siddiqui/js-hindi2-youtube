//Some other Methods

const myNumbers = [1, 2,3 , 4,5, 6 ,7, 8 , 9 ,10]

// const newNumbers = myNumbers.map((num) => num + 10)   //like filter map also return automaticallly when scope is not use.


//Chaining Concept:

const newNumbers = myNumbers
                  .map((num) => num * 10) //pass1 
                  .map((num) => num + 1)  //pass2 <- pass1
                  .filter(() => num >= 40) //pass3 <- pass2 
console.log(newNumbers);                      //then gives output



