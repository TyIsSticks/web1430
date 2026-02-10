// let str = "Hello";
// alert(str.length); // Outputs: 5
// alert(str.at(0)); // Outputs: "H"
// alert(str.at(-1)); // Outputs: "o"

// alert("Widget".includes("id")); // Outputs: true
// alert("Widget".includes("id", 3)); // Outputs: false (search starts from index 3)
// alert("Widget".startsWith("Wid")); // Outputs: true
// alert("Widget".endsWith("get")); // Outputs: true

//let str = "Widget";
// if (str.indexOf("id") !== -1) {
//     console.log("Found 'id' in 'Widget'");
//     console.log(str.lastIndexOf("id")); // Outputs: 1 (the index of the last occurrence of 'id')
// } // Finds 'id' in 'Widget' and logs the message to the console


// let s = "stringify";
// console.log(s.slice(3, 5)); // Outputs: "in" (characters from index 3 to 5, excluding 5)
// console.log(s.slice(0, -2)); // Outputs: "stringi" (characters from index 0 to -2, excluding -2)
// console.log(s.substring(2, 4)); // Outputs: "ri" (characters from index 2 to 4, excluding 4)
// console.log(s.substr(4, 2)); // Outputs: "ng" (characters from index 4, length of 2)

// let now = new Date();
// alert(now); // Outputs the current date and time
// alert(now.getMonth() + 1); // Outputs the current month (1-12, where 1 is January and 12 is December)

let now = new Date();
alert(now.toString()); // Outputs the current date and time as a string
alert(now.toDateString()); // Outputs the date portion of the current date as a string
alert(now.toTimeString()); // Outputs the time portion of the current date as a string

let date = new Date(2026, 0, 32); // January 1, 2026
alert(date); // Outputs: Fri Jan 31 2026 (adjusted to the last valid date in January)