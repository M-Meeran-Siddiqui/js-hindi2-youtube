//

/*
if(2 === "2"){
     console.log("executed");
}


if(temperature === 41){
      console.log("less than 50");
}

else{
      console.log("temperature is greater than 50")
}

console.log("Executed")*/

// < , > , <= , >= , == , != , ===(it perform two condition equal condition and also it check the datatype so it is also known as strict equal)



// const score = 200

// if(score > 100){ 
//      const power = "fly"
//      console.log(`User power :  ${power}`);
//}

// console.log(`User power : ${power}`)


const balance = 1000

// if(balance > 500) console.log("Test");


//Nesting:


// if(balance < 500){
//       console.log("less than")
// }
// else if (balance < 750){ 
//      console.log("less than 750");
// }
// else if(balance < 900){
//       console.log("less than 900")
// }
// else{ 
//      console.log("less than 1200");
// }

// const userloggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;
// if(userloggedIn && debitCard && 2==2){
//       console.log("Allow to buy course");
// }

// if(loggedInFromGoogle || loggedInFromEmail){
//       console.log("User logged in ");
// }







// switch (key){   // Use full for Redux etc.
//       case value : 
//            break;
      
//       default : 
//           break;
// }




const month = 3

switch(month){
      case 1 : 
           console.log("Jan");
           break;

      case 2 : 
           console.log("Feb");
           break;

      case 3 : 
           console.log("March");
           break;

      default : 
           console.log("default case match");
           break;     

}