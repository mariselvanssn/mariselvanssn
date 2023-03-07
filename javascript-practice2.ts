Javascript Basics:
1:
// Reassign a value to a variable
// Assign a new value to the variable num. The code will not work the way it is. Find the mistake and fix it. Execute the corrected code.
  let num = 1;
  let num = 2;
  console.log(num);

// Output: 
  let num = 1;
  num = 2;
  console.log(num);

2:
// So far, we have created our variables with the let keyword.
let test = 5;
// You can also create a variable with the const keyword.
const test = 5;
// The difference between the two is that you can not assign a new value to a variable that was created with const.
// Try it out. Here, we attempt to assign a new value to a variable that was created with const.
const test = 1;
test = 2;
// TypeError: Assignment to constant variable.

//You also cannot declare a const-variable without assigning a value to it directly. See what happens if you try anyway:
const test;
SyntaxError: Missing initializer in const declaration

// What will be the output?
const num;
num = 5;
console.log(num);
Output: Uncaught SyntaxError: Missing initializer in const declaration

// What will be the output?
const num = 2;
num = 6;
console.log(num);
Output: Uncaught TypeError: Assignment to constant variable

// But, why should you use const instead of let?
// It is considered good practice to use const for variables whoose value will never change.
// For example, if you want to store the number pi you would use const to store it because pi never changes.
const pi = 3.14159;
// Doing so can prevent your code from behaving unexpectedly.

3:
//Boolean
// Actually, every single value in JavaScript can be transformed to a boolean value.
// To do so, we can make use of the Boolean() function. Let's try it:
console.log(Boolean(100)); // true
// Here, we forced the value 100 to be converted to a Boolean, and the result is true.
// But, why does 100 become true? That's where the concepts of truthy and falsy come in.
// Every single value in JavaScript is considered either truthy or falsy. Truthy values result 
// in the value true when coerced into a Boolean value. Falsy values result in the value false.

// All of the following values are falsy:
false
null
undefined
0
-0
NaN
An empty string ('')

// Here's a list of numbers. What do you think? Which of them become true and which become false?
console.log(Boolean(100)); // true
console.log(Boolean(1)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-5)); // true

What will be the output?
  const price = 10;
  console.log(Boolean(price)); // true
What will be the output?
  let price;
  console.log(Boolean(price)); // false


