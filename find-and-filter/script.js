let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Carlos", grade: 78 },
    { name: "Diana", grade: 92 },
    { name: "Ethan", grade: 88 }
];

// ===============================
// TODO 1 (5 pts)
// Use find() to get the FIRST student with grade 92.
// Log the result to the console. ;
console.log("First student with grade 92:", students.find(student => student.grade === 92));

// ===============================
// TODO 2 (5 pts)
// Use filter() to get ALL students with grade 92.
// Log the result to the console. ;
console.log("Students with grade 92:", students.filter(student => student.grade === 92));

// ===============================
// TODO 3 (5 pts)
// Use find() to get the FIRST student with grade below 80.
// Log the result to the console.
console.log("First student with grade below 80:", students.find(student => student.grade < 80));

// ===============================
// TODO 4 (5 pts)
// Use filter() to get ALL students with grades above 85.
// Log the result to the console.
console.log("Students with grades above 85:", students.filter(student => student.grade > 85));

// ===============================
// TODO 5 (5 pts)
// Create a new variable that stores all students whose names start with "D".
// Use filter() and log the result.
let studentsStartingWithD = students.filter(student => student.name.startsWith("D"));
console.log("Students whose names start with 'D':", studentsStartingWithD);