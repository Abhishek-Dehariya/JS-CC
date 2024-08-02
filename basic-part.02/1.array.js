const myArray = [0,1,2,3,4,5]
// console.log(myArray);

const classname = ["ram","syam","mohan"]
// console.log(classname)

const myArray2 = new Array(1,2,3,4)
// console.log(myArray2[3])

//Array methods
// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(2)
// myArray.shift()

// console.log(myArray.includes(0));
// console.log(myArray.lastIndexOf(5));

const newArr = myArray.join()

// console.log(myArray);
// console.log(typeof newArr);

//slice, splice 
const newAry = [0,1,2,3,4,5]

console.log("A",newAry );

const myn1 = newAry.slice(1, 3)

console.log(myn1);
console.log("B",newAry);

const myn2 = newAry.splice(1,3)
console.log("C",newAry);
console.log(myn2)