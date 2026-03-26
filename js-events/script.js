function getRandomColor() {
    // Generates a random number between 0 and 16777215 (0xFFFFFF)
    const randomInt = Math.floor(Math.random() * 16777215);
    // Converts the number to a hexadecimal string, pads with leading zeros if necessary
    const color = "#" + randomInt.toString(16).padStart(6, '0');
    return color;
}

function changeBoxColor() {
    this.style.backgroundColor = getRandomColor();
}

function changeBoxText() {
    this.textContent = "Clicked!";
}

let box1 = document.querySelector("#box1");
box1.addEventListener("click", function () {changeBoxColor.call(this)}); // click event listener for box1

let box2 = document.querySelector("#box2");
box2.addEventListener("mouseenter", changeBoxColor); // mouseenter event listener for box2

let box3 = document.querySelector("#box3");
box3.addEventListener("dblclick", changeBoxColor); // double-click event listener for box3

let box4 = document.querySelector("#box4");
box4.addEventListener("oncontextmenu", changeBoxColor); // right-click event listener for box4

let box5 = document.querySelector("#box5");
    box5.addEventListener("click", function (event) {
        console.log(`Mouse clicked at: (${event.clientX}, ${event.clientY})`);  // Send x and y coordinates of the mouse click to the console
    })

