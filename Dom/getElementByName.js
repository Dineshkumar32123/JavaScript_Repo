// getElementsByTagName() ---> The return type of getElementsByName() is single of NodeList.

let a = document.getElementsByName("inp")
console.log(a);
a[0].style.backgroundColor="aqua"

// a.forEach((val)=>{
//   val.style.backgroundColor="maroon";
// })

[...a].map((val)=>{
  val.style.backgroundColor="yellow"
})
console.log(a);