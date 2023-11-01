// let num =10;
// for(let i=0;i<num;i++){
//     console.log(i);
// }

// for(let i =0;i<10;i++ ){
//   console.log("Hello world");
// }


// let num =20
// for(let i = 1 ;i<=20 ; i++){
//   if(i%2==0){
//     console.log(`${i} - even`);
//   }
//   else{
//     console.log(`${i} - odd`)
//   }
// }

//while Loop

// let i =0;
// while(i<10){
//   console.log(i);
//   i++;
// }

//for in ---> index

// let arr = [1,2,3,4,5,6,7,8,9,10];
// for(let x in arr){
//   console.log(x);
//   console.log(typeof x);
// }

// //for of ---> values
// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// for(let x of arr){
//   console.log(x);
//   console.log(typeof x);
// }

// function fun(){
//   document.body.style.background="aqua";
// }


// map() ---> used to iterate the elements in the Array. When we return the iterated Array ,it'll create the copy of new Array same as original Array.
// It'll not affect the Original Array.Method chaining is possible.
// let arr = [1,2,3,4,5,6,7,8,9]
// let x = arr.map((val,i)=>{
    // console.log(val);
    // console.log(i);
//     return val;
// }).fill("hello")
// console.log(x);
// console.log(x.splice(2,3));
// console.log(x);
// console.log(arr);


// let a = [1,2,4,3,5,4,6,7,10]
// let x = a.map((a,b)=>{
//     // console.log(a);
//     console.log(b);
// }).fill("Hello")

// console.log(x);


// ForEach() ---> we can't return the value, method chaining is Not possible
// let a = [1,2,3,4,5,6,7,8,9];
// let x = a.forEach((val,index)=>{
// console.log(val);
// console.log(index);
// return val;
// })
// console.log(x);



// Filter() ---> used to iterate the elements in the Array. Here, we use some condition in return statement to iterate. When we return the iterated Array ,it'll create the copy of new Array same as original Array.
// It'll not affect the Original Array. Method chaining is possible.
let a = [1,2,3,4,5,6,7,8,9];
let x = a.filter((val,index)=>{
    console.log(val);
    // console.log(index);
    return val > 5;
})
console.log(x);

// console.log(x.splice(1,2));
// console.log(x);
// console.log(a);


// Reduce()
 
// let a =[1,2,3,4,5]
// let x = a.reduce((accumulator,value)=>{
// return accumulator * value;
// },1)
// console.log(x);