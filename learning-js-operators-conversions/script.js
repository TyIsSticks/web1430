// // alert("Welcome to this page!");
// // prompt("What is your favorite programming language?", "C++");
// // let result = confirm("Do you like JavaScript?");
// // console.log("User response to confirm:", result);

// let var1 = 3.5;
// let str1 = "12345";
// //console.log("str1 lenght: ", str1.length);

// console.log(typeof Number(str1));
// console.log(Number(str1));

// let result = "5" + 10; // Concatenation due to string
// console.log(result); // "510"

// let result2 = "5" * 10; // Multiplication converts string to number
// console.log(result2); // 50

// let result3 = "two" * "three"; // Invalid multiplication
// console.log(result3); // NaN
// // let person = {
// //     p_name: "John",
// //     p_age: 30,

// //     p_greet: function() {
// //         console.log("Hello, " + this.p_name);
// //     },
// //     p_printAll: function() {
// //         console.log(person);
// //         //console.log("Name: " + this.p_name + ", Age: " + this.p_age);
// //     }
// // }

// // person.p_greet();
// // person.p_printAll();

// // Type Conversions
// console.log(String(0)); // "0"
// console.log(String(false)); // "false"
// console.log(Number("123")); // 123
// console.log(Number(false)); // 0
// console.log(Boolean("123")); // true
// console.log(Boolean(0)); // false

// let x = 10;
// console.log(x++); // Outputs 10, then x becomes 11
// console.log(++x); // x becomes 12, then outputs 12
// console.log(x);  // Outputs 12 

// let y = 5;
// y += 3; // y = y + 3
// console.log(y); // Outputs 8

// console.log(5 === '5'); // false - strict equality
// console.log(5 == '5');  // true - loose equality

// let x = null;
// let result = x ?? "default value";
// console.log(result); // Outputs "default value"

// let y = 42;
// let result2 = (y > 10) ? "greater than 10" : "10 or less"; // Ternary operator
// console.log(result2); // Outputs "greater than 10"

// let a = "5";
// let num = +a; // Unary plus operator to convert string to number
// console.log(num); // Outputs 5

// Exercises:
// 1. Use arithmetic operators to calculate total price with tax.
// let price = 100;
// let taxRate = 0.07;
// let totalPrice = price + (price * taxRate);
// console.log("Total Price with tax:", totalPrice); // Outputs 107
// // 2. Compare two input numbers and log which is greater.
// let num1 = prompt("Enter first number:");
// let num2 = prompt("Enter second number:");
// console.log("Greater number is:", (num1 > num2) ? num1 : num2);
// // 3. Use the ternary operator to assign status based on age.
// let age = prompt("Enter your age:");
// let status = (age >= 18) ? "Adult" : "Minor";
// console.log("Status:", status);
// // 4. Convert a string to a number using unary plus and log the result.
// let strNum = "42";
// let convertedNum = +strNum;
// console.log("Converted Number:", convertedNum); // Outputs 42


// Comparison Operators
console.log(null == undefined);  // true
console.log(null === undefined); // false

console.log(0 > null);   // false
console.log(0 >= null);  // true...!
console.log(0 == null);  // false
console.log(0 === null); // false

console.log(undefined > 0);   // false
console.log(undefined < 0);   // false
console.log(undefined == 0);  // false
console.log(undefined === 0); // false

