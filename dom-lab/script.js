// script.js
// 1) Create <p> using JavaScript and append to div container

const pElement = document.createElement('p');
pElement.textContent = 'This is a dynamically created paragraph.';
document.getElementById('app').appendChild(pElement);

// 2) Color cycling setup (dynamic color change)

// 2.1) Add event listener to button
document.getElementById('addBtn').addEventListener('click', function () {
    // If input is empty
    const inputValue = document.getElementById('itemInput').value.trim();
    // Add li to list
    if (inputValue) {
        const liElement = document.createElement('li');
        liElement.textContent = inputValue;
        document.getElementById('itemList').appendChild(liElement);

        // Update paragraph message (created by JS)
        pElement.textContent = 'Item added successfully!';

        // 3) Change the page color to the input value
        document.body.style.backgroundColor = inputValue;

        // 4) Update the JS-created paragraph to show the current color
        pElement.textContent = `Current background color: ${inputValue}`;

        // Clear and refocus input
        document.getElementById('itemInput').value = '';
        document.getElementById('itemInput').focus();
    } else {
        alert('Please enter a color name.');
    }
});
