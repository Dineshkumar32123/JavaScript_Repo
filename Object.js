// let bike ={
//     Name:"Rx100",
//     Color:"Black",
//     Price:"120000",
// }


// Retrive
// console.log(bike);
// console.log(bike.Name);
// console.log(bike.Color);
// console.log(bike["Price"]);



// Add
// bike.Milage="30Km";
// bike["Tank_Capacity"]="10L";
// console.log(bike);
// console.log(bike["Tank_Capacity"]);

// Delete
// delete bike["Color"];
// console.log(bike);

// Reinitialize
// bike.Name="R15";
// bike["Name"]="Rx100";
// console.log(bike);


// --------------------------------------------------------------------------
// let obj ={}
// obj.name="Dinesh",
// obj.age=20;
// obj["City"]="Chennai",
// // obj.City="Madurai"
// console.log(obj);

// --------------------------------------------------------------------------
// let user = [
//     {
//         Name:"Dinesh",
//         Age:22,
//         Loc:"Chennai",
//     },
//     {
//         Name:"Ramesh",
//         Age:27,
//         Loc:"Trichy",
//     },
//     {
//         Name:"Sathish",
//         Age:26,
//         Loc:"Dubai",
//     }
// ]
// // console.log(user);
// // console.log(user[0].Name);
// // user[1].Name="Parthi";
// // console.log(user[1]);
// user.map((val,i)=>{

//     console.log(val.Name);
//     console.log(val.Age);
//     console.log(val.Loc);
//     console.log(i);
// });

// !Nested Object
// let obj ={
//     name:"Tom",
//     age:22,
    
//     address:{
//         city:"Chennai",
//         state:"TN",
//         country:"India",
//         pin:{
//             pin1:123,
//             pin2:456,
//         }
//     },
//     role:"Developer",
// }
// console.log(obj);
// console.log(obj.address.state);
// console.log(obj.role);
// ------------------------------------------------------------------------

// Object methods --->Return type is Array

// let obj ={
//     name:"Dinesh",
//     mail:"dineshk321@gmail.com",
//     phoneNo:987654321,
//     City:"Chennai",
// };
// console.log(obj);
// keys()--->used to retrive only Keys
// let x = Object.keys(obj)
// console.log(x);
// // value() ---> used to retrive only values
// let y = Object.values(obj)
// console.log(y);
// // entries() ---> used to retrive both keys and values
// let z = Object.entries(obj)
// console.table(z);
// --------------------------------------------------------------------------

// DATE OBJECT --> week and month will not start from 1 to 7 or 1 to 12..Week is start from 0 to 6. month is start from 0 to 11.

// let date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getTimezoneOffset());
