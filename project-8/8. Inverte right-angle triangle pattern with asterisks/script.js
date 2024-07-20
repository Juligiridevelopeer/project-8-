function invertedRightTrianglePattern(i) {
    // Outer loop for rows
    for (let row = i; row >= 1; row--) {
        let pattern = '';
        // Inner loop for columns in each row
        for (let col = 1; col <= row; col++) {
            pattern += '* ';
        }
        // Print the pattern for each row
        console.log(pattern);
    }
}

// Example usage:
const numRows = 6;
invertedRightTrianglePattern(numRows);
