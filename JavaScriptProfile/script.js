let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
let nickname = prompt("What's a funny nickname for you?");
console.log("Hello! My name is " + firstName + " " + lastName + ", but you can call me " + nickname + ".");
console.log("Your full name has " + (firstName.length + lastName.length) + " characters in it.");
let height = prompt("How tall are you in centimeters?");
let weight = prompt("How much do you weigh in kilograms?");
console.log("Your height in inches is " + (height / 2.54).toFixed(2) + " inches.");
console.log("Your weight in pounds is " + (weight * 2.20462).toFixed(2) + " pounds.");
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("Fun Fact: Did you know " + randomNumber + " is a cool number about me?");
let goal = prompt("What is one of your career goals?");
console.log("One of my career goals is to " + goal + ".");
console.log("This goal has " + goal.length + " characters in it.");
let birthYear = prompt("What year were you born?");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log("You are " + age + " years old. You have lived approximately " + (age * 365) + " days on Earth!");
alert("Today's date is " + new Date().toLocaleDateString() + ". Thanks for sharing about yourself!"); //Display date as mm/dd/yyyy format
console.log("Today's date is " + new Date().toLocaleDateString() + "There are " + (365 - new Date().getDay()) + " days left in the year!"); //Display date and days left in the year
