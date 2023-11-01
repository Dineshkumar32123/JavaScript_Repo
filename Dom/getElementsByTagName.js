// getElementsByTagName() ---> The return type of getElementsByTagName() is Collection of impure Arrays.
// if we are using map method for iteration...my Array should be in pure array otherwise it'll show error.


let a =document.getElementsByTagName("div");
console.log(a);
console.log(Array.isArray(a));


// [...a].map((val)=>{
//     val.style.color="red"
//   })

  // let x =Array.from(a);
  // console.log(Array.isArray(x));

