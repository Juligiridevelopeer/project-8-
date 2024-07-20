// Function to calculate rental cost based on days rented and car type
function calculateRentalCost(daysRented, carType) {
    let rentalCostPerDay;

    // Determine rental cost per day based on car type
    switch (carType.toLowerCase()) {
        case 'economy':
            rentalCostPerDay = 4000; // Rs. 4000 per day
            break;
        case 'midsize':
            rentalCostPerDay = 15000; // Rs. 15000 per day
            break;
        case 'luxury':
            rentalCostPerDay = 25000; // Rs. 25000 per day
            break;
        default:
            return 'Invalid car type'; // Return error message for invalid car type
    }

    // Calculate total rental cost
    let totalRentalCost = rentalCostPerDay * daysRented;

    return totalRentalCost;
}

// Example usage:
const daysRented = 5;
const carType = 'midsize';

const totalCost = calculateRentalCost(daysRented, carType);
if (typeof totalCost === 'number') {
    console.log(`Total rental cost for ${daysRented} days of ${carType} car is Rs. ${totalCost}/-`);
} else {
    console.log(totalCost); // Output: Total rental cost for 5 days of midsize car is Rs. 75000/-
}
