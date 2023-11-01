// The return type of getElements by class is "Collection of impure Arrays".
// if we are using map method for iteration...my Array should be in pure array otherwise it'll show error.

let ele = document.getElementsByClassName('item')
// console.log(ele);
console.log(Array.isArray());

let pure=Array.from(ele);
console.log(Array.isArray(pure));

pure[0].style.backgroundColor="blue"
pure[1].style.backgroundColor="green"
pure[2].style.backgroundColor="aqua"
pure[3].style.backgroundColor="maroon"
pure[4].style.backgroundColor="pink"
pure[4].style.color="black"

// let x =Array.from(ele);
// x.forEach((val)=>{
//   val.style.backgroundColor='yellow'
// })