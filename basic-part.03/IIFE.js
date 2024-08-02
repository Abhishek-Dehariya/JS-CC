function chai () {
    console.log(`DB Connected`)
}
chai();

// (() =>{
//     console.log(`DB two is connected`)
// })();

( (name) =>{
    console.log(`DB 2 is connected ${name}`);
})('Abhishek');

((name1)=>{
    console.log(`DB Two connected ${name1}`)
})('Rohan');

let val1 =10
let val2=5

function addNum (num1,num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1.val2)
let result2 = addNum(10,2)