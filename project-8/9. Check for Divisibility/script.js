// Function to print numbers divisible by 3 but not by 2
function printDivisibleBy3NotBy2(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        
        // Check if the number is divisible by 2
        if (num % 2 === 0) {
            continue; // Skip the current iteration if divisible by 2
        }
        
        // Check if the number is divisible by 3
        if (num % 3 === 0) {
            console.log(num);
        }
    }
}

// Example usage:
const numberArray = [7, 9, 6, 12, 15, 18, 21];
console.log("Numbers divisible by 3 but not by 2:");
printDivisibleBy3NotBy2(numberArray);
