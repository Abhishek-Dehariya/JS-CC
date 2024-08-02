const class1 = ["ram","shiv","ganesh","mohan","pawan"]
const class2 =["rahul","rohan","lala","Romy","Sonu"]

const newClass = class1.concat(class2)

// console.log(newClass);

const newClass1 = [...class1,...class2]

// console.log(newClass1)

const another_array =[1,2,[3,4,5],6,[7,8,[9,10,11]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)

console.log(Array.isArray("abhishek"))
console.log(Array.from("abhishek"))