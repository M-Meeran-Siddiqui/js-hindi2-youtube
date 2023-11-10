console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

// problem occur when you not compare same datatype.   So note when you do any comparison then you remember tha the type of both value must be same . So Typescript give such strict rules.

console.log("2" > 1);
console.log("02" > 0);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//===

console.log("2" === 2);



