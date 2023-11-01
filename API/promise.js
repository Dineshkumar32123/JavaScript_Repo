//! Promise pending state
// let p1 = new Promise(()=>{});
// console.log(p1);
//! Promise resolve state / fulfilled state
// let p2 = new Promise((resolve,reject)=>{
//   resolve("promise resolved...")
// })
// console.log(p2);
//! Promise rejected state
// let p3 = new Promise((resolve,reject)=>{
//   reject("Promise rejected...")
// });
// console.log(p3);

// !Promise  static methods
// ! Promise.all()
// let p1 = new Promise((resolve,reject)=>{
//     resolve("P1 is in resolved state.. ")
// })
// let p2 = new Promise((resolve,reject)=>{
//   reject("P2 is in rejected state.. ")
// })
// let p3 = new Promise((resolve,reject)=>{
//   resolve("P3 is in resolved state.. ")
// })

// Promise.all([p1,p2,p3]).then((response)=>{console.log(response)})
// .catch((error)=>{console.log(error)})
// .finally((final)=>{console.log("finally is printing...");})

// https://jsonplaceholder.typicode.com/todos
// fetch("https://jsonplaceholder.typicode.com/todos").then((res=>console.log(res.json()))
// .then(msg=> console.log(msg.userId)).catch(err=>console.log(err));

// !GET request
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(res=>{
//   if(res.ok){
//     console.log("Success..");
//   }else{
//     console.log("fail...");
//   }
//   return res.json()})
// .then(msg=>console.log(msg[0],msg[1]))
// .catch(err=>console.log(err));

// !Post request
fetch("https://jsonplaceholder.typicode.com/todos",{
  method:"POST",
  headers:{"content-type":"application/json"},
  body:JSON.stringify({
    userId:33,
    id:32123,
    name:"Dinesh"
  })
})
.then(res=> res.json())
.then(msg =>console.log(msg)).catch(err=>console.log(err));