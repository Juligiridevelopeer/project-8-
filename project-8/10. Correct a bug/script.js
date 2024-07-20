// Function to double the quantity of each item in the cart
function correctQuantityBug(cart) {
    // Iterate through each item in the cart array
    for (let i = 0; i < cart.length; i++) {
        // Double the quantity of the current item
        cart[i] *= 2;
    }
}

// Example usage:
let cart = [1, 2, 3, 4, 5];
console.log("Cart before fixing the bug:", cart);

correctQuantityBug(cart);
console.log("Cart after fixing the bug:", cart);
