// let user = {
//     _name: "Jimmy",
//     "full name": "Jimmy Smith",
//     age: 34,
    
// };

// let v_age = "age";
// user.isEpic = true; // add a new property to the object

// console.log(user);
// console.log(user["full name"]); // access a property with a space in its name
// console.log(user[v_age]);  // access a property using a variable as the key
// delete user.isEpic; // delete a property from the object
// console.log(user);

// if ("age" in user) {
//     console.log("The age property exists in the user object.");
// }
// else {
//     console.log("The age property does not exist in the user object.");
// }

// for (let key in user) {
//     console.log(key + ": " + user[key]);
// } // iterate over the properties of the user object and log each key-value pair to the console


// let user2 = {
//     name: "Alice"
// }

// let admin = {admin: true};

// Object.assign(user2, admin); // copy the properties of the admin object into the user2 object

// console.log(user2); // log the updated user2 object to the console
// console.log(admin); // log the admin object to the console to show that it has not been modified

// console.log(Object.keys(user2)); // log an array of the keys of the user2 object to the console
// console.log(Object.values(user2)); // log an array of the values of the user2 object to the console
// console.log(Object.entries(user2)); // log an array of the key-value pairs of the user2 object to the console

// ========================================
// Arrays
// ========================================

let arr = ["Math", "Science", "History", 45, true]; // create an array with a mix of string, number, and boolean values

console.log(arr[0]); // log the first element of the array to the console
console.log(arr); // log the entire array to the console
console.log(arr.at(-1)); // log the last element of the array to the console using the at() method

arr.push("English"); // add a new element to the end of the array
arr.pop(); // remove the last element from the array
arr.unshift("Art"); // add a new element to the beginning of the array

for(let item of arr) {
    console.log(item); // iterate over the elements of the array and log each one to the console
}

arr.find("History"); // find the first element in the array that matches the specified value and return it
arr.filter("Science"); // create a new array with all elements that match the specified value
arr.includes("Math"); // check if the array includes the specified value and return true or false