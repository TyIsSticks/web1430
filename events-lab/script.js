// == Mouse Events ==

// Use JavaScript to make the mouse box respond to user actions. W3Schools highlights click, dblclick, mouseover, mouseout, mousemove, and mousedown/mouseup as the common mouse events for this topic.

// Complete the following tasks:

// When the mouse enters the box, change the text to “Mouse is over the box”.
let mouseBox = document.getElementById('mouseBox');
mouseBox.addEventListener('mouseover', function () {
    this.textContent = "Mouse is over the box";
    console.log("Mouse entered the box"); // Log mouse entry to the console
});

// When the mouse leaves the box, change the text back to “Move the mouse here”.
mouseBox.addEventListener('mouseout', function () {
    this.textContent = "Move the mouse here";
    console.log("Mouse left the box"); // Log mouse exit to the console
});



// When the box is clicked, increase the click counter by 1.
let clickCounter = 0;
mouseBox.addEventListener('click', function () {
    clickCounter++;
    document.getElementById('clickCount').textContent = `${clickCounter}`;
    console.log(`Box clicked ${clickCounter} times`); // Log click count to the console
});

// When the mouse moves inside the box, display the mouse coordinates.
mouseBox.addEventListener('mousemove', function (event) {
    document.getElementById('coords').textContent = `x: ${event.clientX}, y: ${event.clientY}`;
    console.log(`Mouse moved to x: ${event.clientX}, y: ${event.clientY}`); // Log mouse position to the console
});

// When the user double-clicks the box, reset the click counter to 0.
mouseBox.addEventListener('dblclick', function () {
    clickCounter = 0;
    document.getElementById('clickCount').textContent = `${clickCounter}`;
    console.log("Double-click detected"); // Log double-click to the console
});
// Log every mouse interaction inside the Event Log section.
// done


// == Keyboard Events ==

// W3Schools presents keydown and keyup as the primary keyboard events and notes that keypress is deprecated.
//  The page also distinguishes event.key from event.code: event.key reflects the actual key value, while event.code reflects the physical key on the keyboard.

// Complete the following tasks:

// When a key is pressed in the input box, display the value of event.key.

let inputBox = document.getElementById('keyInput');
inputBox.addEventListener('keydown', function (event) {
    document.getElementById('lastKey').textContent = `${event.key}`;
});

// Also display event.code.

inputBox.addEventListener('keydown', function (event) {
    document.getElementById('lastCode').textContent = `${event.code}`;
});

// Change the keyStatus text to “Key is down” during keydown.

inputBox.addEventListener('keydown', function () {
    document.getElementById('keyStatus').textContent = "Key is down";
});

// Change the keyStatus text to “Key released” during keyup.

inputBox.addEventListener('keyup', function () {
    document.getElementById('keyStatus').textContent = "Key released";
});

// When the Enter key is pressed, add the current input text as a list item in the to-do list.
inputBox.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        let todoList = document.getElementById('todoList');
        let newItem = document.createElement('li');
        newItem.textContent = this.value;
        todoList.appendChild(newItem);
        this.value = ""; // Clear the input after adding the item
    }
});
// Do not use keypress in your solution.

// == Load Events ==

// W3Schools explains that DOMContentLoaded fires when the HTML and DOM are ready, while load fires only after the whole page and dependent resources such as images and stylesheets are fully loaded.

// Complete the following tasks:

// When the DOM is ready, change the DOM status message to “DOM is loaded”.
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('domStatus').textContent = "DOM Status: DOM is loaded";
    console.log("DOM is fully loaded"); // Log DOM load to the console
});
// When the full page is loaded, change the page status message to “Page is fully loaded”.
window.addEventListener('load', function () {
    document.getElementById('pageStatus').textContent = "Page Status: Page is fully loaded";
    console.log("Page is fully loaded"); // Log page load to the console
});
// When the image finishes loading, change the image status message to “Image loaded successfully”.

document.getElementById('sampleImg').addEventListener('load', function () {
    document.getElementById('imgStatus').textContent = "Image Status: Image loaded successfully. Rest in peace cap'n.";
    console.log("Image is fully loaded"); // Log image load to the console
});

// Click Start Timeout and observe the message after 3 seconds.

document.getElementById('startTimeout').addEventListener('click', function () {
    setTimeout(function () {
        document.getElementById('timeoutMsg').textContent = "Timeout completed after 3 seconds";
        console.log("Timeout completed after 3 seconds"); // Log timeout completion to the console
    }, 3000);
});

// Click Start Interval to see the counter increment every second.

document.getElementById('startInterval').addEventListener('click', function () {
    let counter = 0;
    globalThis.intervalId = setInterval(function () {
        counter++;
        document.getElementById('intervalCount').textContent = `${counter}`;
        console.log(`Interval Counter: ${counter}`); // Log interval count to the console
    }, 1000);
});

// Click Stop Interval to stop the counter.

document.getElementById('stopInterval').addEventListener('click', function () {
    clearInterval(globalThis.intervalId);
    console.log("Interval stopped"); // Log interval stop to the console
});


