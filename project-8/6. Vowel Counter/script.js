// Function to count vowels in a name
function countVowels(name) {
    const vowels = ['a', 'e', 'i', 'o', 'u']; // Array of vowels
    let vowelCount = 0;

    // Convert the name to lowercase to handle case insensitivity
    name = name.toLowerCase();

    // Iterate through each character in the name
    for (let i = 0; i < name.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(name[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}

// Example usage:
const name1 = "John Doe";
const name2 = "Alice";

console.log(`Number of vowels in "${name1}":`, countVowels(name1)); // Output: Number of vowels in "John Doe": 3
console.log(`Number of vowels in "${name2}":`, countVowels(name2)); // Output: Number of vowels in "Alice": 3
