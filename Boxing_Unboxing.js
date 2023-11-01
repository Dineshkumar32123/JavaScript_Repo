//Number to String
let n=1000;
console.log(n)
console.log(typeof(n))
let m = String(n)
console.log(m)
console.log(typeof(m));

//String to number


//using Eval()
let a="10+20";
console.log(a)
console.log(eval(a))


//object to number
let num=new Number(3)
console.log(num) 
let num1=Number(num)
console.log(num1) 


//Non-primitive(object) to primitive(number)
let n1=new Number(1000)
console.log(n1)
console.log(typeof(n1))
let n2=n1.valueOf();
console.log(n2)
console.log(typeof(n2))

//prompt()--->Return type of Prompt() is "String". if we want to convert it into number we use Number().
let z1=Number(prompt("Enter a value: "))
let z2=Number(prompt("Enter b value: "))
let z=z1+z2;
console.log(z);
console.log(typeof(z))
