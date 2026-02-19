// function add_numbers(a, b) {
//     return a + b;
// }

// let sum = (a, b) => { return a + b }; // Arrow function. Possible to remove the curly braces and return statement if it's a single expression: let sum = (a,b) => a + b;

// // alert(add_numbers(10, 20)); // Alerts 30
// // alert(sum(1, 2)); // Alerts 3

// let arr=[1, "Hello", function(){ alert("I am a function inside an array");}, {_name: "Alice", _age: 30}];
// console.log(arr); // Logs the array with its elements

// let num = [1,2,3,4,5,6,7,8,9,0];

// console.log(num.find(num => num === 4)); // Returns 4, as it is the first element in the array that satisfies the condition num === 4
// console.log(num.filter(num => num % 2 === 0)); // Returns all even numbers

// age = Number(prompt("Enter your age:"));
// if (age >= 18) {
//     alert("You are an adult.");
// } else {
//     alert("You are a minor.");
// }


// number = Number(prompt("Enter a number:"));
// if (number % 2 === 0) {
//     alert("The number is even.");
// } else {
//     alert("The number is odd.");
// }

// testScore = Number(prompt("Enter your test score:"));
// if (testScore >= 90) {
//     alert("Grade: Excellent");
// } else if (testScore >= 70) {
//     alert("Grade: Good");
// } else if (testScore >= 50) {
//     alert("Grade: Pass");
// } else {
//     alert("Grade: Fail");
// }

// letterGrade = prompt("Enter a letter grade (A, B, C, D, F):").toUpperCase();
// switch (letterGrade) {
//     case 'A':
//         alert("Excellent");
//         break;
//     case 'B':
//         alert("Good");
//         break;
//     case 'C':
//         alert("Average");
//         break;
//     case 'D':
//         alert("Below Average");
//         break;
//     case 'F':
//         alert("Fail");
//         break;
//     default:
//         alert("Invalid letter grade");
// }

// dayOfWeek = Number(prompt("Enter a number (0-6) representing the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday):"));
// switch (dayOfWeek) {
//     case 0:
//         alert("Sunday");
//         break;
//     case 1:
//         alert("Monday");
//         break;
//     case 2:
//         alert("Tuesday");
//         break;
//     case 3:
//         alert("Wednesday");
//         break;
//     case 4:
//         alert("Thursday");
//         break;
//     case 5:
//         alert("Friday");
//         break;
//     case 6:
//         alert("Saturday");
//         break;
//     default:
//         alert("Invalid input. Please enter a number between 0 and 6.");
// }

//prompt the user until they enter a number greater than 100
// let userInput;
// do {
//     userInput = Number(prompt("Enter a number greater than 100:"));
// } while (userInput <= 100);
// alert("You win!");