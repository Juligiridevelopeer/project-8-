// Function to determine the resulting color from mixing two colors
function mixColors(color1, color2) {
    let resultColor;

    // Convert colors to lowercase for case insensitivity
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();

    // Use a switch statement to determine the resulting color
    switch (`${color1}-${color2}`) {
        case 'red-blue':
        case 'blue-red':
            resultColor = "purple";
            break;
        case 'red-yellow':
        case 'yellow-red':
            resultColor = "orange";
            break;
        case 'blue-yellow':
        case 'yellow-blue':
            resultColor = "green";
            break;
        default:
            resultColor = "Invalid color combination";
            break;
    }

    // Output the resulting color
    console.log(`Resulting color of mixing ${color1} and ${color2} is: ${resultColor}`);
}

// Example usage:
mixColors("red", "blue");    // Output: Resulting color of mixing red and blue is: purple
mixColors("blue", "yellow"); // Output: Resulting color of mixing blue and yellow is: green
mixColors("red", "yellow");  // Output: Resulting color of mixing red and yellow is: orange
mixColors("green", "blue");  // Output: Resulting color of mixing green and blue is: Invalid color combination
