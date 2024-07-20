// Self-invoking arrow function to generate a random number between 1 and 100
const randomNumber = (() => {
    // Generate random number between 1 and 100
    return Math.floor(Math.random() * 100) + 1;
})();

// Print the generated random number
console.log("Random number between 1 and 100:", randomNumber);
