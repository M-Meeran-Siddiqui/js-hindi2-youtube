// const  tinderUser = new Object()  // it print the empty object .  //Ye ek singleton object hai .

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;

//const tinderUser  = {}    //Ye ek non-singleton object hai.
console.log(tinderUser);

//How nested Objects created AND how i access it.
const regularUser = {
     email : "some@gmail.com",
     fullname : {
          userfullname:{
             firstname : "hitesh",
             lastname : "choudhary"
          }
     }
}


console.log(regularUser.fullname.userfullname.firstname);  //Remember about optional chaining.

//How we join two object like we do it in the  array.
const obj1  = {1 : "a" , 2 : "b"}
const obj2  = {3 : "a" , 4 : "b"}
const obj4  = {5 : "a" , 6 : "b"}

// const obj3  = {obj1  , obj2}    by this same problems comes which was also come in array that is , obj2 is directly added into the obj1 not by its element  but it add directly array like that obj2 is the subset of obj1.


// const  obj3 = Object.assign(obj1 , obj2);

//Other alternative of just above.
// const obj3 = Object.assign( {} , obj1 , obj2 ,  obj4)

//Other alternative of just above. using spread operator.
const obj3 = {...obj1 , ...obj2 , ...obj4};

console.log(obj3);


//Synatax you use when the values comes from database.

const users = [                     //in this syntax we see that there are three object in one  array.
     {
          id: 1,
          email: "h@gmail.com"
     },
     {
          id: 1,
          email : "b@gmail.com"
     },
     {
          id: 1,
          email : "i@gmail.com"
     },
]

// console.log(users[1].email);  //how it access.
// console.log(users[2].email);


console.log(tinderUser);
//Some important methods:   //Usefull for database.
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//Some times you want to check  , is that a particular value is exist what i pointing follow the below example.

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));





//Destructuring :
// Destructuring is done both the array and the object
//Here we discuss only the object destructuring .

const  course ={
       coursename : "js in hindi",
       price : "999" , 
       courseInstructor: "hitesh"
}


//For accessing the above object-

//Firstway -
// course.courseInstructor

//Second way or trending way to access the above object- OR we can say to perform destructuring:

const {courseInstructor : instructor} = course
console.log(courseInstructor);  //gives same output as below
console.log(instructor);  //gives smae output  as above


//Some method and function.  //Below portion is for React : 
/*const navbar = ({company}) => {   //it is nothing but props.company   
      
}

navbar(company = "hitesh")*/





//++++++++++++++++++++++++++++++++++++++---API'S----+++++++++++++++++++++++++++++++++++++

//It simply means jb bhi hm apna kam  ko kisi or ke sir pe daldete hai that is known as API's.

//Object without name is known as json.
// {
//       name : "Meeran"
//       coursename: "js in hindi",
//       "price" : "free"
// }


//Sometimes API's are in the format of (array)

// [
//      {},
//      {},
//      {}
// ]

//Random apis-   for understand we have different formatter like we use json formatter.

/*{
     "results": [
       {
         "gender": "female",
         "name": {
           "title": "Miss",
           "first": "Jennie",
           "last": "Nichols"
         },
         "location": {
           "street": {
             "number": 8929,
             "name": "Valwood Pkwy",
           },
           "city": "Billings",
           "state": "Michigan",
           "country": "United States",
           "postcode": "63104",
           "coordinates": {
             "latitude": "-69.8246",
             "longitude": "134.8719"
           },
           "timezone": {
             "offset": "+9:30",
             "description": "Adelaide, Darwin"
           }
         },
         "email": "jennie.nichols@example.com",
         "login": {
           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
           "username": "yellowpeacock117",
           "password": "addison",
           "salt": "sld1yGtd",
           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
         },
         "dob": {
           "date": "1992-03-08T15:13:16.688Z",
           "age": 30
         },
         "registered": {
           "date": "2007-07-09T05:51:59.390Z",
           "age": 14
         },
         "phone": "(272) 790-0888",
         "cell": "(489) 330-2385",
         "id": {
           "name": "SSN",
           "value": "405-88-3636"
         },
         "picture": {
           "large": "https://randomuser.me/api/portraits/men/75.jpg",
           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
         },
         "nat": "US"
       }
     ],
     "info": {
       "seed": "56d27f4a53bd5441",
       "results": 1,
       "page": 1,
       "version": "1.4"
     }
   }*/
   