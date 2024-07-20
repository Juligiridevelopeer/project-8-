// Function to find the highest marks using ternary operator
function findHighestMarks(marks) {
    let highestMarks = marks[0]; // Initialize highestMarks with the first student's marks

    // Iterate through the array to find the highest marks
    for (let i = 1; i < marks.length; i++) {
        highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }

    return highestMarks;
}

// Example usage:
const marks = [85, 90, 76, 88, 92];
const highestMarks = findHighestMarks(marks);
console.log(`The highest marks scored by a student in the class is: ${highestMarks}`);
