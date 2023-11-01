// function fetchTitle(){
//   let response = new XMLHttpRequest();
//   // console.log(response);
//   // https://dummyjson.com/products
//   response.open("GET","https://api.github.com/users");
//   response.onloadend=function () {
//     let [...data] = JSON.parse(response.responseText)
//     // console.log(data);
//     let store = document.getElementById("storeData");

//     data.map(title =>{
//       // console.log(title);
//       store.innerHTML += `
//       <h1>${title.id}</h1>
       
//       <h1>${title.login}</h1>
      
//       <img src=${title.avatar_url}> `
//     })
//   }
//   response.send();
// }
// fetchTitle();

// function fetchData(){
//   let response = new XMLHttpRequest();
//   response.open("GET","https://jsonplaceholder.typicode.com/todos/1");
//   response.onloadend=function(){
//     // let [...data] = JSON.parse(response.responseText);
//     let store = document.getElementById("storeData");

//         store.innerHTML = innerHTML+`<h1>${val.userId}</h1>`
   
//   }
//   response.send();
// }
// fetchData();
