let inventory = [
    { id: 1, name: "Laptop", category: "Electronics", quantity: 10, price: 999.99 },
    { id: 2, name: "Smartphone", category: "Electronics", quantity: 20, price: 499.99 },
    { id: 3, name: "Table", category: "Furniture", quantity: 5, price: 199.99 },
    { id: 4, name: "Chair", category: "Furniture", quantity: 15, price: 89.99 },
    { id: 5, name: "Headphones", category: "Electronics", quantity: 25, price: 199.99 }
];

function addProduct(name, category, quantity, price) {
    const newId = inventory.length > 0 ? inventory[inventory.length - 1].id + 1 : 1;
    const newProduct = { id: newId, name, category, quantity, price };
    if (newProduct.quantity < 0 || newProduct.price < 0) {
        console.log("Quantity and price must be non-negative.");
        return;
    }
    inventory.push(newProduct);
    console.log(`Product added: ${name}`);
}

// Remove product from the inventory array by its ID
function removeProduct(id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index > -1) {
        // splice(index, 1) removes 1 element starting at the specified index
        // This modifies the array in place and shifts all following elements down
        // I tried to use delete operator but it leaves an empty slot in the array, so I switched to splice
        inventory.splice(index, 1);
    }
}

function updateProductQuantity(id, newQuantity) {
    const product = inventory.find(item => item.id === id);
    if (product) {
        if (newQuantity < 0) {
            console.log("Quantity must be non-negative.");
            return;
        }
        product.quantity = newQuantity;
        console.log(`Quantity updated for product ID ${id}: ${newQuantity}`);
    } else {
        console.log(`Product with ID ${id} not found.`);
    }
}

function generateReport() {
    console.log("Inventory Report:");
    inventory.forEach(product => {
        if (product) {
            const lowStock = product.quantity < 10 ? "LOW STOCK" : "";
            console.log(`ID: ${product.id}, Name: ${product.name}, Category: ${product.category}, Quantity: ${product.quantity} ${lowStock}, Price: $${product.price.toFixed(2)}`);
        }
    })
};

function filterbyCategory(category) {
    const filteredProducts = inventory.filter(product => product && product.category === category);
    console.log(`Products in category: ${category}`);
    filteredProducts.forEach(product => {
        console.log(`ID: ${product.id}, Name: ${product.name}, Quantity: ${product.quantity}, Price: $${product.price.toFixed(2)}`);
    })
};

function calculateTotalInventoryValue() {
    const totalValue = inventory.reduce((total, product) => {
        if (product) {
            return total + (product.quantity * product.price);
        }
        return total;
    }, 0);
    console.log(`Total Inventory Value: $${totalValue.toFixed(2)}`);
}

// Example usage:
addProduct("Monitor", "Electronics", 8, 299.99);
removeProduct(2);
updateProductQuantity(3, 3);
generateReport();
filterbyCategory("Electronics");
calculateTotalInventoryValue();