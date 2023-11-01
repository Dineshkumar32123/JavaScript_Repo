let sec = document.createElement("section")
// console.log(sec);


// sec.innerText ="parent"

// css
let body = document.body;
body.style.width="250px";
body.style.height="450px";
body.style.display="flex";
body.style.flexDirection="column";
body.style.backgroundColor="gray";


let blueDiv = document.createElement("div")
blueDiv.style.flexBasis="50%";
blueDiv.style.height="inherit";
blueDiv.style.background="blue"
blueDiv.style.display="flex"
blueDiv.style.justifyContent="center"
blueDiv.style.borderRadius="10px"


let whiteDiv = document.createElement("div")

whiteDiv.style.backgroundColor="#fff"
whiteDiv.style.flexBasis="50%";
whiteDiv.style.height="inherit";
whiteDiv.style.borderRadius="10px"


let image = document.createElement("img")
image.setAttribute=("src","https://cdn.pixabay.com/photo/2023/09/25/19/52/bear-8275920_640.jpg://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg")
image.style.height="100px";
image.style.width="100px"
image.style.margin="50px"
image.style.borderRadius="50%"





let headtag = document.createElement("h1")
headtag.innerText="Hello"
headtag.style.textAlign="center"

let para = document.createElement("p")
para.innerText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. provident eos incidunt. Minima,adipisci quaerat temporibus totam quas laborum consequuntur est!"
para.style.textAlign="center"
para.style.paddingTop="0px"


// let div2 = document.createElement("div")
// div2.innerText("white")
// div2.style.backgroundColor="#fff"
// div2.style.width="400px";
// div2.style.height="400px"









body.append(blueDiv)
body.append(whiteDiv)
blueDiv.append(image)
whiteDiv.append(headtag)
whiteDiv.append(para)
// sec.append(div1)
// div2.append(headtag)
// sec.setAttribute("id","divBlock")
// image.setAttribute("src","#")
