// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // Calculate Fahrenheit
    let fahrenheit = (celsius * 9 / 5) + 32;
    
    return fahrenheit;
}

// Example usage:
const celsiusTemp = 30;
const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(`${celsiusTemp} degrees Celsius is equal to ${fahrenheitTemp.toFixed(2)} degrees Fahrenheit.`);
