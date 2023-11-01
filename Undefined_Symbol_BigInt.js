/* 1.we can not create object or use new keyword for Symbol and BigInt.If we use it'll throw Uncaught TypeError.
    
  2.BigInt will not accept decimal value.If we use it'll throw Uncaught RangeError.
  
  3.For every creation of symbol it'll create one new address. when we will compare the two symbol, it'll compare the address

  4.Return type of Null is Object[ interview qsn ]
*/

//undefined
let a;
console.log(a);//---->Undefined
console.log(typeof(a)) //---->Undefined

//null
let b=null;
console.log(b)
console.log(typeof(b))//--->Object[Important]
// let b1=new null(10)                //Error--->we can't create object for null
// console.log(typeof b1)

//boolean
let c=true;
console.log(c)
console.log(typeof(c))
let c1=10;
let c2=20;
console.log(c1<c2)//--->true

let c3=new Boolean(true)
console.log(c3)
console.log(typeof c3)

//symbol
let d=Symbol(10);
let d1=Symbol(10);
console.log(d==d1)//false
console.log(typeof d) 
let d2 = Symbol(20)        
console.log(d2) //--->Symbol(20)
console.log(typeof d2)
// let d3 =new Symbol(20)        
// console.log(d3) //--->Error:Uncaught TypeError
let d4 = Symbol("Hello")        
console.log(d4) 
let d5 = Symbol("Hello")        
console.log(d5)
console.log(d4==d5)//false


//BigInt
let e = 10n;
console.log(e) //--->10n
console.log(typeof e)//---->BigInt
let e1= BigInt(20)
console.log(e1)
// let e2=BigInt(3.3)
// console.log(e2) //--->Error:Uncaught RangeError
// let e3=new BigInt(20)
// console.log(e3) //--->Error:Uncaught TypeError