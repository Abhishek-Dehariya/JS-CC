//const coding = ["js","ruby","java","paython","cpp"]

//const values = coding.forEach ( (item)=>{
//console.log(item);
//return item
//}
//)
//console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num < 9 )
// console.log(newNums);

const myNums2 = [11,12,13,14,15,16,17,18,19,20]

const newNums2 = myNums2.filter( (num) => {
   return num < 17
})
// console.log(newNums2)


const book =[
    {title:'book one', genre:'History',publish:1992, edition : 2000},
    {title:'book two', genre:'Hindi',publish:1993, edition : 1990},
    {title:'book three', genre:'Science',publish:1993, edition : 2002},
    {title:'book four', genre:'English',publish:1992, edition : 2004},
    {title:'book five', genre:'English',publish:1995, edition : 2001}
]

let newBook = book.filter( (bk) => bk.genre === 'English' )
newBook = book.filter ((bk) => { 
    return bk.edition >= 2000 && bk.genre === "History" })
console.log(newBook);