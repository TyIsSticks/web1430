let test = document.getElementById("getButton").getAttribute("value");
// Get the value using getAttribute("value")
console.log(test); // This will log the initial value of the button, which is "Get Value"
// Get the value using .value property
let test2 = document.getElementById("getButton").value;
console.log(test2); // This will also log the initial value of the button, which is "Get Value"
// Change .value to "New Text"
document.getElementById("getButton").value = "New Text";
console.log(document.getElementById("getButton").value); // This will log "New Text"
//Check getAttribute("value") again after changing .value
let test3 = document.getElementById("getButton").getAttribute("value");
console.log(test3); // This will still log "Get Value" because getAttribute("value") returns the original value defined in the HTML, not the current value of the button.