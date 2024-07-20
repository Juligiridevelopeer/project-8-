// Function to calculate total bill and bill per person
function calculateBill(costPerDish, numberOfPeople) {
    // Calculate total bill
    const totalBill = costPerDish * numberOfPeople;

    // Calculate bill per person
    const billPerPerson = totalBill / numberOfPeople;

    // Create and return result object
    const result = {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };

    return result;
}

// Example usage:
const costPerDish = 1200; // Cost of each dish
const numberOfPeople = 4; // Number of people sharing the dish

const billDetails = calculateBill(costPerDish, numberOfPeople);
console.log("Total bill:", billDetails.totalBill);
console.log("Bill per person:", billDetails.billPerPerson);
