// Arrow function to calculate total cost of items in the cart
const calculateTotalCost = (cart) => {
    // Initialize total cost
    let totalCost = 0;

    // Iterate through each item in the cart
    cart.forEach(item => {
        // Calculate cost of each item: unitPrice * quantity
        const itemCost = item.unitPrice * item.quantity;

        // Add item cost to total cost
        totalCost += itemCost;
    });

    // Return the total cost
    return totalCost;
};

// Example usage:
const cart = [
    { unitPrice: 10, quantity: 2 },    // Item 1: unit price Rs. 10, quantity 2
    { unitPrice: 20, quantity: 1 },    // Item 2: unit price Rs. 20, quantity 1
    { unitPrice: 5, quantity: 4 }      // Item 3: unit price Rs. 5, quantity 4
];

const totalCost = calculateTotalCost(cart);
console.log("Total cost of items in the cart:", totalCost);
