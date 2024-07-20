// Function to remove duplicate items from a customer's cart
function removeDuplicates(cart) {
    // Use a Set to store unique items (Set automatically removes duplicates)
    let uniqueItems = new Set(cart);

    // Convert Set back to an array (if needed)
    let newCart = Array.from(uniqueItems);

    return newCart;
}

// Example usage:
const customerCart = ['apple', 'banana', 'apple', 'orange', 'banana', 'grapes'];
const newCart = removeDuplicates(customerCart);
console.log("Customer's original cart:", customerCart);
console.log("Customer's cart after removing duplicates:", newCart);
