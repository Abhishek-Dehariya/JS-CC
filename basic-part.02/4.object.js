// // const tinderUser = new Object () this is singletone object
// // const tinderUser ={} this is non singletone object

// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "sammy"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser ={
//     email : "abhi@hmail.com",
//     fullname :{
//         userfullname:{
//             firstname : "Abhishek",
//             lastname : "Dehariya",
//         }
//     }
// }
// // console.log(regularUser.fullname)

// const object1 = {1 : "a", 2:"b"}
// const object2 = {3 : "a", 4:"b"}
// const object4 = {5 : "a", 6:"b"}

// // const object3 = Object.assign({},object1,object2,object4)

// const object3 = {...object1,...object2,...object4}

// // console.log(object3)

// const user = [
//     {
//         id : 1,
//         email : "abhi@gmail.com"
//     },
//     {
//         id : 2,
//         email : "abhi@gmail.com"
//     },
// ]
// user[1].email
// // console.log(tinderUser)

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// // console.log(tinderUser.hasOwnProperty('isLogged'));


function calculateCartPrice(...num1){

    return num1
}

console.log(calculateCartPrice(200,400,500,490,49,490,305))

const user ={
    username :"Abhishek",
    price : 199
}
function handleobject (anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject ({
    username: "Priya",
    price:399
})

const myNewArray = [200,400,100,600]


function returnFirustValue (getArray){
    return getArray[0]
}
console.log(returnFirustValue(myNewArray))