// Function to compare passwords
function validatePasswords(password, confirmPassword) {
    if (password === confirmPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful");
    }
}

// Example usage
const enteredPassword = prompt("Enter your password:");
const confirmedPassword = prompt("Confirm your password:");

validatePasswords(enteredPassword, confirmedPassword);
