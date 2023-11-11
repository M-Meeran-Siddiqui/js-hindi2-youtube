//array: 

const myArr = [0 ,1,2,3,4,5 ];  //first method of array declaration.

const myHeros = ["shaktiman" , "naagraj"]

const myArr2 = new Array(1,2,3,4)  //second method of array declaration.

// console.log(myArr[0]);


//Array methods:::::::::::::::::::

// myArr.push(6)      push at the end.
// myArr.push(7)
// myArr.pop()  // by default it remove last value.


myArr.unshift(9)
// myArr.unshift(10)
myArr.shift()  //by default it remove the first inserted unshift value at a time only only (LIFO order perform).

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join()  //we can't see its operation but it can perform two operation 1 is join and other is type conversion means it convert the array type into string.
console.log(myArr);
console.log(newArr);
console.log(typeof  newArr);

//slice , splice-------->

console.log("A" , myArr);

const myn1 = myArr.slice(1 , 3);  //slice copy of array se slice krta hai . due to this original copy will remain same. and in slice last index exclude.
console.log(myn1);

console.log("B" , myArr);

const myn2  = myArr.splice(1  , 3);  //splice original copy of array se slice krta hai. due to this orginal copy will change after this operation. and in splice last index include.
console.log(myn2);
console.log("C" , myArr);












