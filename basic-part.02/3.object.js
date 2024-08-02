/

//object literals

//object.creat

const mySym = Symbol("key1");

const JsUser = {
  name: "Abhishek",
  "full name": "Abhishek Dehariya",
  mySym: "mykey1",
  age: 18,
  location: "Indore",
  email: "a.dehariya10@gmaial.com",
  isLoggedIn: false,
  lasrLoginDays: ["monday", "Saturday"],
};

JsUser.email = "abhi@casio.com";
// Object.freeze(JsUser);
JsUser.email = "abhi@cello.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user")
}

JsUser.greetingTwo = function(){
    console.log(`hello js user,${this["full name"]}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());