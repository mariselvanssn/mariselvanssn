// 1. Javascript Basics

  // 1.1 Sum two numbers:
  // Write a function that takes two numbers (a and b) as argument
  // Sum a and b
  // Return the result
  function myFunction(a, b) {
    return a + b;
  }
  myFunction(1,2) // Expected: 3
  myFunction(1,10) // Expected: 11
  myFunction(99,1) // Expected: 100

  // 1.2 Comparison operators, strict equality:
  // Write a function that takes two values, say a and b, as arguments
  // Return true if the two values are equal and of the same type
  function myFunction(a, b) {
   return a === b;
  }
  myFunction(2, 3)// Expected: false
  myFunction(3, 3) // Expected: true
  myFunction(1, '1') // Expected: false
  myFunction('10', '10') // Expected: true

  // 1.3 Get type of value:
  // Write a function that takes a value as argument
  // Return the type of the value
  function myFunction(a) {
    return typeof a;
  }
  myFunction(1) // Expected: 'number'
  myFunction(false) // Expected: 'boolean'
  myFunction({}) // Expected: 'object'
  myFunction(null) // Expected: 'object'
  myFunction('string') // Expected:'string'
  myFunction(['array']) // Expected: 'object'

  // 1.4 Get nth character of string:
  // Write a function that takes a string (a) and a number (n) as argument
  // Return the nth character of 'a'
  function myFunction(a, n){
    return a[n-1];
  }
  myFunction('abcd',1) // Expected: 'a'
  myFunction('zyxbwpl',5) // Expected: 'w'

  // 1.5 Remove first n characters of string:
  // Write a function that takes a string (a) as argument
  // Remove the first 3 characters of a
  // Return the result
  function myFunction(a) {
    return a.slice(3);
  }
  myFunction('abcdefg') //Expected: 'defg'
  myFunction('1234') // Expected: '4'
  myFunction('fgedcba') // Expected: 'dcba'

  // 1.6 Get last n characters of string:
  // Write a function that takes a string as argument
  // Extract the last 3 characters from the string
  // Return the result
  function myFunction(str) {
    return str.substr(str.length - 3);
  }
  function myFunction(str) {
    return str.slice(-3);
  }
  myFunction('abcdefg') // Expected: 'efg'
  myFunction('1234') // Expected: '234'
  myFunction('fgedcba') // Expected: 'cba'

  // 1.7 Get first n characters of string:
  // Write a function that takes a string (a) as argument
  // Get the first 3 characters of a
  // Return the result
  function myFunction(a) {
    return a.slice(0, 3);
  }
  function myFunction(a) {
    return a.substr(0, 3);
  }
  myFunction('abcdefg') // Expected: 'abc'
  myFunction('1234') // Expected: '123'
  myFunction('fgedcba') // Expected: 'fge'

  // 1.8 Extract first half of string:
  // Write a function that takes a string (a) as argument
  // Extract the first half a
  // Return the result
  function myFunction(a) {
    return a.slice(0, a.length / 2);
  }
  myFunction('abcdefgh') // Expected: 'abcd'
  myFunction('1234') // Expected: '12'
  myFunction('gedcba') // Expected: 'ged'

  // 1.9 Remove last n characters of string:
  // Write a function that takes a string (a) as argument
  // Remove the last 3 characters of a
  // Return the result
  function myFunction(a) {
    return a.slice(0, -3);
  }
  myFunction('abcdefg') // Expected: 'abcd'
  myFunction('1234') // Expected: '1'
  myFunction('fgedcba') // Expected: 'fged'

  // 1.10 Return the percentage of a number:
  // Write a function that takes two numbers (a and b) as argument
  // Return b percent of a
  function myFunction(a, b) {
   return b / 100 * a
  }
  myFunction(100,50) // Expected: 50
  myFunction(10,1) // Expected: 0.1
  myFunction(500,25) // Expected: 125

  // 1.11 Multiplication, division, and comparison operators:
  // Write a function that takes two numbers (a and b) as arguments
  // If a is smaller than b, divide a by b
  // Otherwise, multiply both numbers
  // Return the resulting value
  function myFunction(a, b) {
    if (a < b) {
    return a / b;
    }
    return a * b;
  }
  function myFunction(a, b) {
   return a < b ? a / b : a * b
  }
  myFunction(10, 100) // Expected: 0.1
  myFunction(90, 45) // Expected: 4050
  myFunction(8, 20) // Expected: 0.4
  myFunction(2, 0.5) // Expected: 1

  // 1.12 Check whether a string contains another string and concatenate:
  // Write a function that takes two strings (a and b) as arguments
  // If a contains b, append b to the beginning of a
  // If not, append it to the end
  // Return the concatenation
  function myFunction(a, b) {
     return a.includes(b) ? (b + a) : (a + b);
  }
  function myFunction(a, b) {
   return a.indexOf(b) === -1 ? a + b : b + a
  }
  myFunction('cheese', 'cake') // Expected: 'cheesecake'
  myFunction('lips', 's') // Expected: 'slips'
  myFunction('Java', 'script') // Expected: 'Javascript'
  myFunction(' think, therefore I am', 'I') // Expected: 'I think, therefore I am'

  // 1.14 Basic JavaScript math operators:
  // Write a function that takes 6 values (a,b,c,d,e,f) as arguments
  // Sum a and b
  // Then substract by c
  // Then multiply by d and divide by e
  // Finally raise to the power of f and return the result
  // Tipp: mind the order
  function myFunction(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f;
  }
  myFunction(6,5,4,3,2,1) Expected: 10.5
  myFunction(6,2,1,4,2,3) Expected: 2744
  myFunction(2,3,6,4,2,3) Expected: -8

  // 1.15 Check if a number is even:
  // Write a function that takes a number as argument
  // If the number is even, return true
  // Otherwise, return false
  function myFunction(a) {
     return a % 2 === 0 ? true :false;
  }
  function myFunction(a) {
   return a % 2 === 0
  }
  myFunction(10) // Expected: true
  myFunction(-4) // Expected: true
  myFunction(5) // Expected: false
  myFunction(-111) // Expected: false









