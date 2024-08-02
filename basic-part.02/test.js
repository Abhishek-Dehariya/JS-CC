function calculateCartPrice (...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400))


const user = {
    username:"Abhhishek",
    age:30
}

function handleobject (anyobject){
    console.log(`username is ${anyobject.user} and age is ${anyobject.age}`)
}

handleobject ({
    user:"Priya",
    age:30 
})


const myNewArray = [100,300,400,500]

function returnFourtArray (getArray){
    return getArray [3]
}
console.log(returnFourtArray(myNewArray))