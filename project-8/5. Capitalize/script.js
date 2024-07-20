// Function to capitalize the first letter of a name if it's lowercase
function capitalizeName(name) {
    // Check if the first character is lowercase using a regular expression
    let modifiedName = /^[a-z]/.test(name) ? name.charAt(0).toUpperCase() + name.slice(1) : name;

    return modifiedName;
}

// Example usage:
const userName1 = "john";
const userName2 = "Alice";

console.log(capitalizeName(userName1)); // Output: "John"
console.log(capitalizeName(userName2)); // Output: "Alice"
