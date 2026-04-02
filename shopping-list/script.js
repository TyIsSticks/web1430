const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function onAddItemSubmit(event) {
    event.preventDefault();

    const newItem = itemInput.value

    if (itemInput.value === '') {
        alert('Please enter an item');
        return;
    }
    // Add item to DOM
    addItemtoDOM(newItem);

    // Add item to local storage
    addItemtoStorage(newItem);

    // Create item DOM element

    checkUI();
}

function addItemtoDOM(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    itemList.appendChild(li);
}

function addItemtoStorage(item) {
    
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function removeItem(event) {
    if (event.target.parentElement.classList.contains('remove-item')) {
        if (confirm('Are you sure?')) {
            event.target.parentElement.parentElement.remove();
        }
    }
    checkUI();
}

function clearItems() {
    if (confirm('Are you sure?')) {
        while (itemList.firstChild) {
            itemList.removeChild(itemList.firstChild);
        }
    }
    checkUI();
}

function checkUI() {
    const items = itemList.querySelectorAll('li');

    if (items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}

function filterItems(event) {
    const items = itemList.querySelectorAll('li');
    const text = event.target.value.toLowerCase();

    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();
        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);

checkUI();

localStorage.setItem('name', 'John Doe');
const name = localStorage.getItem('name');
console.log(name);
localStorage.clear();