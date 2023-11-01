

let body = document.body;
body.style.width="350px";
body.style.height="500px";
body.style.backgroundColor="#fff";
body.style.position="relative"
body.style.top="170px"
body.style.left="500px"
body.style.border="2px solid black"

// body.style.backgroundColor=" #21D4FD"
// body.style.backgroundImage="linear-gradient( 270.3deg,  rgba(84,212,228,1) 0.2%, rgba(68,36,164,1) 100% )"

// background-image: linear-gradient( 270.3deg,  rgba(84,212,228,1) 0.2%, rgba(68,36,164,1) 100% );


let heading = document.createElement("h1")
heading.innerText=".  Registration Form  ."
heading.style.textAlign="center"
// heading.style.color="blue"

let inp = document.createElement("input")
inp.innerText="name"

inp.style.width="60%"
inp.style.position="relative"
inp.style.left="50px"
inp.style.top="15px"
inp.style.border="none"
inp.style.borderBottom="1px solid black"
inp.style.padding="11px"

let inp1 = document.createElement("input")
inp1.style.width="60%"
inp1.style.position="relative"
inp1.style.left="50px"
inp1.style.top="25px"
inp1.style.border="none"
inp1.style.borderBottom="1px solid black"
inp1.style.padding="13px"

let inp2 = document.createElement("input")
inp2.style.width="60%"
inp2.style.position="relative"
inp2.style.left="50px"
inp2.style.top="35px"
inp2.style.border="none"
inp2.style.borderBottom="1px solid black"
inp2.style.padding="13px"


let inp3 = document.createElement("input")
inp3.style.width="60%"
inp3.style.position="relative"
inp3.style.left="50px"
inp3.style.top="40px"
inp3.style.border="none"
inp3.style.borderBottom="1px solid black"
inp3.style.padding="13px"


let inp4 = document.createElement("input")
inp4.style.width="60%"
inp4.style.position="relative"
inp4.style.left="50px"
inp4.style.top="45px"
inp4.style.border="none"
inp4.style.borderBottom="1px solid black"
inp4.style.padding="13px"



// let inp5 = document.createElement("input")
// inp5.setAttribute("type","checkbox");

let para = document.createElement("p")
para.innerText="I accept user and condition"
para.style.position="relative";
para.style.top="50px"
para.style.left="70px"

let button = document.createElement("button")
button.innerText="Create Button"
button.style.position="relative";
button.style.top="50px"
button.style.left="70px"
button.style.padding="15px"
button.style.width="200px"
button.style.borderRadius="25px"

let already = document.createElement("p")
already.innerText="Already have account ?"
already.style.position="relative";
already.style.top="50px"
already.style.left="90px"

let link = document.createElement("a")
link.innerText="Sign Up"
link.style.position="relative";
link.style.top="15px"
link.style.left="245px"




inp.setAttribute("placeholder","Name")
inp1.setAttribute("placeholder","Email")
inp2.setAttribute("placeholder","Country")
inp3.setAttribute("placeholder","Phone")
inp4.setAttribute("placeholder","Password")
link.setAttribute("href","#")

// var x = document.createElement("INPUT");
// x.setAttribute("type", "checkbox");


// parent.append(heading)
// parent.append(inp)
// parent.append(inp1)
// parent.append(inp2)
// parent.append(inp3)
// parent.append(inp4)
// parent.append(para)
// parent.append(button)
// parent.append(already)
// parent.append(link)








body.append(heading)
body.append(inp)
body.append(inp1)
body.append(inp2)
body.append(inp3)
body.append(inp4)
body.append(para)
body.append(button)
body.append(already)
body.append(link)

// body.append(inp5)
// inp.append(placeHolder)
