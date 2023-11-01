// let storage = localStorage
// console.log(storage);
// !SetItem
// window.localStorage.setItem("Name","Dinesh");
// window.localStorage.setItem("Age",22);
// window.localStorage.setItem("City","Chennai");
// window.localStorage.setItem("State","Tamil Nadu");

// // !GetItem
// let a = window.localStorage.getItem("Name")
// console.log(a);
// let b = window.localStorage.getItem("Age")
// console.log(b);
// let c = window.localStorage.getItem("City")
// console.log(c);

// // !Remove
// localStorage.removeItem("State")
// // !Full clear
// localStorage.clear()

//  // !Storing Object ---> We need to convert JS obj into JSON obj.
// let obj ={
//   Name:"Manoj",
//   Age:23,
//   Desig:"Business",
//   Id:321
// }
// console.log(obj);
// let x =JSON.stringify(obj)
// console.log(x);
// localStorage.setItem("obj",x);

// console.log(JSON.parse(x));

// !Form input to Local storage
let form=document.querySelector("form");
let Name = document.getElementById("username");
let Email = document.getElementById("userAge");
let Pass = document.getElementById("userPass");

form.addEventListener("submit",e=>{
  e.preventDefault();
  let uname=Name.value;
  let uemail=Email.value;
  let upass =Pass.value;

})

