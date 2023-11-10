const name = "Meeran";  //strings declaration syntax first
const repoCount = 50;
//  console.log(name + repoCount + " Value ");   it is outdated (Using-syntax).

//So trending once is :  backtext syntax   and its benefit that (*)here string interpulation comes  means hm yaha banate hai placeholders so unke andar jo bhi varibles hai hm use directly inject kr skte hai.(*) And Hm bahut sare chize on the go bhi kr skte hai. 

console.log(`Hello my name is  ${name} and my repo count is ${repoCount}`);  //it the modern  syntax or way of string usage. 

const gameName = new String('Meeranms') // string declaration syntax second. and yaha string ek object ke jaise behave  kr raha hai  so whatever it print they are keyvalue pairs ex -  0 : "M" and so on  where 0 is the key and M is value .

console.log(gameName[0]);
console.log(gameName.__proto__);  //what is the meaning of this .   //know about this more what is this.


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('t'));
console.log(gameName.toLowerCase());


const newString  = console.log(gameName.substring(0 , 4));  //gives value from 0 to 3 
console.log(newString);


// const anotherString = gameName.slice(0  , 4)
const anotherString = gameName.slice(-8  ,  4)   //We can use negative value only in the slice method not in others. and it is nothing but  -1 to -4 index from opposite side.


console.log(anotherString);

const newStringOne  =  "    Meeran   ";

console.log(newStringOne)
console.log(newStringOne.trim())
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimStart());



 
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace("%" , "_"));

console.log(url.includes('hitesh'));
console.log(url.includes('sundar'));


//For split method.
const str = 'The quick brown fox jumps over the lazy dog.'

const words = str.split(' ');
console.log(words[3]);

const chars = str.split('');
console.log(chars[8]);

const strCopy = str.split();
console.log(strCopy);

console.log(str.split('_'))  //know about this more. 


//Other Method in strings are - 
/*The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.*/


const array1 = [ 5 , 6 , 7 , 8  , 9 , 10];

 let index = 2 ;
  
 console.log(`An index of ${index } returns ${array1.at(index)}`);

   index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);


/*The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

charCodeAt() always indexes the string as a sequence of UTF-16 code units, so it may return lone surrogates. To get the full Unicode code point at the given index, use String.prototype.codePointAt().

 */

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index2 = 4;

console.log(`Character code ${sentence.charCodeAt(index2)} is equal to ${sentence.charAt(index2)}`);
// Expected output: "Character code 113 is equal to q"



/*The codePointAt() method of String values returns a non-negative integer that is the Unicode code point value of the character starting at the given index. Note that the index is still based on UTF-16 code units, not Unicode code points.
 */


const icons = '☃★♲';

console.log(icons.codePointAt(1));
// Expected output: "9733"


// Concat method

const  str_s = "Meeran";
const  str_s2 = " Siddiqui";

console.log(str_s.concat(str_s2));

//endsWith()

const str_ss = "Meeran"
console.log(str_ss.endsWith('n'));


// isWellFormed()

/*The isWellFormed() method of String values returns a boolean indicating whether this string contains any lone surrogates.*/

const strings = [
    // Lone leading surrogate
    "ab\uD800",
    "ab\uD800c",
    // Lone trailing surrogate
    "\uDFFFab",
    "c\uDFFFab",
    // Well-formed
    "abc",
    "ab\uD83D\uDE04c",
  ];
  
  for (const str of strings) {
    console.log(str.isWellFormed());
  }
  // Logs:
  // false
  // false
  // false
  // false
  // true
  // true



  //lastIndexOf()

  const strs = "MeeransSiddiqui"

  console.log(strs.lastIndexOf("i"));  // gives index from last 



//localeCompare 




// match()

/*
The match() method of String values retrieves the result of matching this string against a regular expression.

 */

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]



//matchAll()
/*
The matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.
 */

const regexp = /t(e)(st(\d?))/g;
const str3 = 'test1test2';

const array = [...str3.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]




//normalize()

/*
The normalize() method of String values returns the Unicode Normalization Form of this string.
 */

const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`);
// Expected output: "Amélie, Amélie"
console.log(name1 === name2);
// Expected output: false
console.log(name1.length === name2.length);
// Expected output: false

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

console.log(`${name1NFC}, ${name2NFC}`);
// Expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// Expected output: true
console.log(name1NFC.length === name2NFC.length);
// Expected output: true



//padEnd()

const str1 =  "Bread";
console.log(str1.padEnd(10 , '*'));      //Jitne number of character hai unko count kiya jaiga  and count krne ke baad jinte bhi number extra bach jaige unke place pe symbols rakhdo jo user ne diye hai. like start , dot , $ etc.


const str2  = '200';
console.log("200");

// padStart()
/*The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.*/


const str4 = '5';

console.log(str4.padStart(2, '0'));
// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "************5581"



//repeat()
/* The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.
 */


const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "


//replaceAll();
/* The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged. */


const paragraph1 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph1.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex1 = /Dog/gi;
console.log(paragraph.replaceAll(regex1, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"




//search()

/*
The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.
 */

const paragraph3 = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex3 = /[^\w\s']/g;

console.log(paragraph.search(regex3));
// Expected output: 41

console.log(paragraph[paragraph.search(regex3)]);
// Expected output: "!"



//toWellFormwed()

/* The toWellFormed() method of String values returns a string where all lone surrogates of this string are replaced with the Unicode replacement character U+FFFD.
*/










 


















