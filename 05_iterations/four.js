const myObject = { 
     js : 'javascript' ,
     cpp : 'C++',
     rb : "ruby",
     swift: "swift by apple"
}

//For Object loop we use for- in loop
for(const key in myObject){
    //  console.log(`${key} shortcut is for ${myObject[key]}`);
}


//So kya hm is  (for-in) loop ko  array pr bhi kam mein le skta hu kya .

const programming = ["js", "rb" , "py" , "java" , "cpp"]
for (const key in programming){
     console.log(key);           // So see here (for-in) works but key ae hai yaha pe  sari  (or ye for-in loop ka sbse bada drawback hai ) because hmne dekha ke for-of mein yahi line run krne pr sidhe ye value utha leta hai like we see in previous like in num, map but ye jo for-in loop hai iske andar keys ae hai so ab array ke keys kya hoti hai (actully object ka design he  iselie hua tha kukye array ke jo keys hai wo zero se start hoti hai or bydefault numbers he hoti hai ) but (Object mein hm chahe jo bhi key put kr skte hai).  So key kaise nikale using this loop from array , so for this follow the below step.

    //   console.log(programming[key]);
}


//To kya (For-in) loop Map mein bhi  kam kr skta hai -  So Answer is (No). but yaha pe koi error bhi nahi aege but waha for-of ke case mein ae the.

//Example-
const map = new Map()
map.set('IN' , "India");
map.set('USA' , "United States of America");
map.set('Fr'  , "France")
map.set('IN' , "India")


for(const key in map ){    //So No iteration can perform on Map like this.
     console.log(key);
}

