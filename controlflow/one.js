// //if
// if( 2 === "2"){
// console.log("executed")
// }

//<, >, <=, >=, ==, !=, ===

// const temperature = 51

// if(temperature < 50 ){
//     console.log("less than 50")
// }else{
//     console.log("temperature is greater than 50")
// }

// const score = 101 

// if(score > 100){
//     var power = "fly"
//     console.log(`user power:${power}`);
// }
// console.log(`user power:${power}`)


// const balance = 100

// if(balance > 500) console.log("test"),
// console.log("test2");

// const balance = 1000;

// if (balance < 500){
//     console.log("less than 500")
// }else if(balance < 750){
//     console.log("less than 750")
// }else if ( balance < 900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }


const debitcard = true
const userloggedin = true
const userloggedInFromGoogle = false
const userloggedInFromEmail = true


if( userloggedin && debitcard && 2==2 ) {
    console.log("Allow to buy course");
}

if ( userloggedInFromGoogle || userloggedInFromEmail){
    console.log("user loggedin")
}