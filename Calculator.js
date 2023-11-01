let a =Number(prompt("Enter n1 value: "))
let operators = prompt("Enter operators: +,-,*,/,%,**")
let b= Number(prompt("Enter n2 value:"))
switch (operators) {
  case ("+"):
    console.log(a+b);
    break;
    case ("-"):
    console.log(a-b);
    break;
    case ("*"):
    console.log(a*b);
    break;
    case ("/"):
    console.log(a/b);
    break;
    case ("%"):
    console.log(a%b);
    break;
    case ("**"):
    console.log(a**b);
    break;

  default:
    console.log("invalid input");
    break;
}