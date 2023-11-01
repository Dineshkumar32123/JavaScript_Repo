// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
// console.log(arr.length);
// arr.push("push");
// console.log(arr);
// console.log(arr.push());
// arr.pop();
// console.log(arr.pop());

// arr.unshift("First")
// console.log(arr);

// arr.shift()
// console.log(arr);

// let car = ['audi','bmw','benz']
// let bike = ['rx100','r15']
// console.log(car.concat(bike));

// let arr1 = [1,2,3,4,5,6,7,8,9]
// arr1.push(10)
// arr1.push(15)
// arr1.push(10)
// console.log(arr1);

// console.log(arr1.indexOf(15));

// console.log(arr1.fill(3));

// console.log(arr1.find((arr1) => arr1 == 9 ));
// console.log(arr1.find((val)=> val==3));
// let x = arr1.find(val=>val==10)
// console.log(x);


// let arr = [1,2,3,4,5,6,7,8,9]

// findIndex()--> accepts another function as a Argument, if the given element present in the Array means it'll return the posistion of the element .

// let x = arr.findIndex((index) => index == 3);
// console.log(x);

// every() ---> If Every elements in the Array should satisfy the condition,then it'll return true else false.
// let x = arr.every((val)=> val > 1 )
// console.log(x);

// some() ---> If any one of the elements in the Array  satisfy the condition,then it'll return true else false.
// let x = arr.some((val) => val>8)
// console.log(x);

// includes() ---> used to check whether the elements is present in the Array or Not (Returns Boolean)

// let x1 = arr.includes(3)
// console.log(x1);

// join() ---> used to convert the Array into String.

// let x2 = arr.join()
// console.log(x2);

// Reverse() ---> Used to reverse the Array

// let x3 = arr.reverse()
// console.log(x3);

// sort() --->Used to sort the elements with the help of callback function
// let a =[3,4,2,6,4,7,8,10]
// a.sort((a,b) => b-a)
// console.log(a);

// splice() ---> affects the original Array
// arr.splice(Statt index, no. of elements to remove, new element to add )
// let arr = [1,2,3,4,5,6,7,8,9]
// let x = arr.splice(2,1,"Hello")
// console.log(arr);
// console.log(x);

// slice() ---> removes the part of elements in the Array except the last index.It'll not affects the original Array
// let x1 = arr.slice(1,4)
// console.log(x1);
// console.log(arr);


// HIGHER ORDER METHODS OF ARRAY
// MAP, FOREACH, FILTER and REDUCE

