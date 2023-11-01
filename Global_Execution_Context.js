// var a = 20;
// console.log(a);
// let b = "hi";
// console.log(b);
// function demo(){
//   const c = true;
//   // let b = "Hello";
//   console.log(c);
//   console.log(a);
//   a="Hello world";
//   console.log(a);
//   console.log(this.a);
//   console.log(b);
//   b=5000;
//   console.log(b);
//   console.log(this.b);
// }
// demo();

// Nested Function

var user = "Dinesh";
let company = "Atos";

function x(){
  let a = 10;
  var b = "hi";
  const c = true;
  console.log(a,b,c);
  console.log(user,company);
  console.log(this.user);
  console.log(this.company);
  function y(){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(user,company);
    var num = 10000;
    console.log(num);
  }
  y()
}
x();