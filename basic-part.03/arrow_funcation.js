const user ={
    username:"Abhishek",
    Price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)

    }
}
// user.welcomeMessage ()
// user.username = "Priyanka"
// user.welcomeMessage ()
// console.log(this)

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }

const addtwo = (num1,num2) => num1 + num2

 console.log(addtwo(3,4))