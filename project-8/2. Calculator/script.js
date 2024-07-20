// Calculator function
function calculator(num1, num2, operator) {
    let result;

    // Use a switch statement to perform the operation based on the operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    // Output the result
    console.log(`Result of ${num1} ${operator} ${num2} = ${result}`);
}

// Example usage:
calculator(10, 5, '+'); // Output: Result of 10 + 5 = 15
calculator(20, 4, '-'); // Output: Result of 20 - 4 = 16
calculator(8, 2, '*');  // Output: Result of 8 * 2 = 16
calculator(12, 3, '/'); // Output: Result of 12 / 3 = 4
calculator(10, 3, '%'); // Output: Invalid operator
