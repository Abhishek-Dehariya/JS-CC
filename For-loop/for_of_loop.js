//for of

// ["","",""]
// [{},{},{}]

const arr = [1, 3, 2, 4, 5,2,2,2,2,2,2,];
// const uniqueArr = [...new Set(arr)];
const newuniqueArr =arr.slice(0,10)
for (const num of newuniqueArr) {
//   console.log(num);
}

const greerting = "Hello World";
greerting.slice('Hello')
for (const gret of greerting) {
//   console.log(`Each char is ${gret}`)
}


//map

const map = new Map ()
map.set('IN', "India")
map.set('USA' ,"United states of Amrica")
map.set('Fr' ,"France")

console.log(map);

 for (const [key, value] of map) {
    // console.log(key,':-',value);
    
 }

 const myOject ={
    game1: 'NFS',
    game2: 'Spiderman'
 }
 for (const [key, value] of myOject) {
console.log(key,':-',value);
 }


 