const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((num) => {
  return num + 10;
});
//console.log(newNums);

const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums2 = myNums2.map((num) => {
  return num * 2;
});
//console.log(newNums2)

const myNums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums3 = myNums3
  .map((nums) => nums * 10)
  .map((nums) => nums + 1)
  .filter((nums) => nums >= 50)

console.log(newNums3);
