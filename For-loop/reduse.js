const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
return acc + currval
},0)
 

const myNums2 = [1,2,3]

const MyTotal2 = myNums2.reduce( (acc,currval) => acc + currval,0 )

console.log(MyTotal2)

const shoppingcart = [
    {
    itemName:"js course",
    price:2999
    },
    {
        itemName:"css course",
        price:1999
    },
    {
        itemName:"HTML course",
        price:999
    },
    {
        itemName:"DSA",
        price:999
    }

]
const totalshoppingkart = shoppingcart.reduce( (acc,item) => acc + item.price,0)
console.log(totalshoppingkart)