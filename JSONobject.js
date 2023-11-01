// stringify()
// parseOf()


// JSON obj is used to convert javascript object to json obj. (Object to String)  ----> FrontEnd to Backend
// Because my backend only accepts string object from frontend. so, json will change the obj type into string using stringify().

// JSON does not accept undefined and symbole and BigInt datatype.
// In JSON obj , both key and values should be in double quotes(" ").
// JOSN obj, should be in String format.

// let obj = [
//     {
//         name:"Dinesh",
//         company:"HCL",
//         Age:22,
//     },
//     {
//         name:"Bharani",
//         company:"HCL",
//         Age:23,
//     }
// ]
// console.log(obj);

let obj ={
    name:"Ram",
    age:22,
}
console.log(obj);
console.log(typeof(obj));


// // Converting JAVASCRIPT OBJ into JSON object
let x = JSON.stringify(obj);
console.log(x);
console.log(typeof(x));
// // // Converting JSON OBJ into JAVASCRIPT object
let y = JSON.parse(x);
console.log(y);


// let a ={
//     "name":"Dinesh",
//     "Id":123
// };
// console.log(a);