const marvel_heros = ["thor" , "Ironman", "spiderman"]
const dc_heros  = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)  // it push directly of another array.


// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros  = marvel_heros.concat(dc_heros)  // it join each element of another array.
console.log(allHeros);

//spread
const all_new_heros = [...marvel_heros , ...dc_heros]   //alternative of concat.
// console.log(all_new_heros)

const another_array = [1 , 2,, 3 , 4 , 5 ,[6 , 7 , 8] , [9  , 10 , [11 , 12]]]
const real_another_array  =  another_array.flat(Infinity)    // where the infinity is the depth we should give the extra depth avoid to give the infinity depth.
console.log(real_another_array);


//For data scrapping:
console.log(Array.isArray("Hitesh"))  //by check we check that is ("Hitesh") is a array so it return false because it is not a array.
console.log(Array.from("Hitesh"))   //by this we make ("Hitesh") as a array . OR we can also able to give it string , object etc and (from) change them as a array according to its nature.
console.log(Array.from({name  : "hitesh"}))  //interesting   , it gives us a empty array  so if we want to make array then we should follow the just above approach that is from once.

let score1 = 100;
let score2 = 200;
let score3  = 300;
 
console.log(Array.of(score1 , score2 , score3))  // it makes array.

