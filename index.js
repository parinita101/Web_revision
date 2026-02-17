// typeof

console.log(typeof "JS"); // string 
console.log(typeof 10); // number 
console.log(typeof true); // boolean 
console.log(typeof undefined); // undefined 
console.log(typeof null); // object (JavaScript bug) 
console.log(typeof 10n); // bigint 
console.log(typeof Symbol("1")); // symbol

//alert ("Running")
let num="10.99999";
console.log(parseInt(num)) //it convert any data type to number data type
console.log(parseFloat(num))


// truthy values
// all number except 0
// all strings except empyty strings("")
let val1=1;
console.log(Boolean(val1));

let val="false";
console.log(Boolean(val));


// falsy values -> 0, "", null, undefined
let val2="";
console.log(Boolean(val2));

// operators
let val3=false;
let ans=val3|| "JS";
console.log(ans);

let val4=false;
let ans1=val4 && "JS";
console.log(ans1);

// tertiary operator
let num5=16;
let isEven=num5%2==0;
let ans5=(isEven && num5)? "yes":"no";
console.log(ans5);

// task 1: make a program to take two number as input from user
// and print the greater number on console.

let userInput1=prompt("enter first number:");
let userInput2=prompt("enter second number:");
let greatestNumber=(userInput1>userInput2)? userInput1:userInput2;
console.log(greatestNumber);

// nested ternary operator
let num6=-12;
let ans6=num6>0?"positive":(num6==0)?"zero":"negative";
console.log(ans6);

// task 2: make a program to take three number as input from user
// and print the greater number on console.
let number1=10;
let number2=15;
let number3=78;
let largest=(number1>number2)?(number1>number3? number1:number3):
number2>number3? number2:number3;
console.log(largest);
