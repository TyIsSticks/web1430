// Set your graduation date here
const studentName = prompt("Enter your name:");
const graduationYear = Number(prompt("Enter your graduation year (YYYY):"));
const graduationMonth = Number(prompt("Enter your graduation month (MM):"));
const graduationDay = Number(prompt("Enter your graduation day (DD):"));

const graduationDate = new Date(graduationYear, graduationMonth - 1, graduationDay).getTime();
let confirmed = confirm(`Hello ${studentName}! Your graduation date is set to ${new Date(graduationDate).toDateString()}. Click OK to start the countdown!`);
document.getElementById("graduation-year").innerHTML = graduationYear;

if (!confirmed) {
    alert("Countdown cancelled. Please refresh the page to try again.");
}
else if (isNaN(graduationDate)) {
    alert("Invalid date format. Please refresh the page and enter the date in YYYY-MM-DD format.");
}
else if (graduationDate < new Date().getTime()) {
    alert("The graduation date has already passed. Congratulations on your achievement! Please refresh the page to enter a future date.");
}
else {
    alert(`Student Name: ${studentName}\nGraduation Date: ${new Date(graduationDate).toDateString()}\nCountdown has started! Best of luck on your journey to graduation!`);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = graduationDate - now;
        document.getElementById("years").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24 * 365)); // 1000 ms/s * 60 s/min * 60 min/hr * 24 hr/day * 365 days/yr
        document.getElementById("months").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        document.getElementById("days").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        // document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
        // document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
    }

    setInterval(updateCountdown, 1000);
}

//Part 2 of assignment - Statement Analysis and Case-insensitive search
const statement = prompt("Enter a statement about your graduation plans:");
const keyword = "graduat";
alert('Length of statement: ' + statement.length);

if (statement.toLowerCase().includes(keyword.toLowerCase())) {
    alert("Great! Your statement talks about your graduation. Keep up the focus on your goals!");
}
else {
    alert("Your statement doesn't mention graduation. Consider revising it to include your graduation plans for better motivation!");
}