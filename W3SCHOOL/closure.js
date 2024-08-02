// Closure lern 
// this is closure .
// this is new branch

function fun1() {
  let a = 5;
  function fun2() {
    console.log(a);
    function fun3(){
        console.log(a);
    }
    fun3();
  }
  a = 8;
  return fun2;
}
const abc = fun1();
abc();
