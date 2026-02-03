alert("Welcome to my page! Enjoy your stay.");

// Both double and single quotes work in JavaScript.
let num1 = 5;
let num2 = 4.6;

student = {
    // write a function to ask user "What is your name?"
    // store the name in the variable 'name'
    // use console to print welcome statement for that student
    askName() {
        this.name = prompt("What is your name?", ["Your name here"]);
        console.log("Welcome, " + name + "!");
        alert("Hey " + student.name + ", do you like my quote?");
    }
}
let w;
//You can declare multiple variables in one line.

alert("Data type of num1 is: " + typeof num1 + "\n" + "Data type of student.name is: " + typeof student.name
    + "\n" + "Data type of student.flag is: " + typeof student.flag + "\n" + "Data type of w is: " + typeof w +
    "\n" + "Data type of student is: " + typeof student);
alert("I'm not a monster. I'm just ahead of the curve. - The Joker");

// Call the askName function to prompt the user for their name and display the welcome message
student.askName();



/* let name = prompt("Enter your name:", ["Your name here"]);
let age = prompt("Enter your age:", ["Your age here"]);

alert('Hello ' + name + ', you are ' + age + ' years old.');

if (age < 18) {
    alert("You are a minor.");
}
else if (age >= 70) {
    alert("You are a senior citizen.");
}
else {
    alert("You are an adult.");
}

console.log("The sum of num1 and num2 is: " + (num1 + num2)); */