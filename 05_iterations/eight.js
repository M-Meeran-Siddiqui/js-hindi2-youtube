//Reduce Method

/*
const myNums = [ 1 , 2 , 3]

const myTotal = myNums.reduce(function (acc , currval) {
    console.log(`acc: ${acc} and currval : ${currval}`)
    return acc + currval
}  , 0)
*/
// console.log(myTotal);


//How we write it above with arrow function:

// const myTotal = myNums.reduce( (acc , curr) => acc+curr , 0)

// console.log(myTotal);


const shoppingCart = {
    { 
    itemName: "js course",
     price: 2999
    }

    {
        itemName : "py course",
        price : 5000
    }
    {
         itemName : "Java course",
         price : 4000
    }
    {
         itemName: "Web course",
         price  :6000
    }
}


const priceToPay = shoppingCart.reduce( (acc , item) => acc + item.price , 0)

console.log(priceToPay);