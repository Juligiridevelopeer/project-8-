// Define a customer object with name and balance properties
let customer = {
    name: "John Doe",
    balance: 5000,
};

// Function to deposit money into the customer's account
function deposit(amount) {
    // Add the deposited amount to the balance
    this.balance += amount;
    console.log(`Deposit of Rs. ${amount}/- successful. New balance: Rs. ${this.balance}/-`);
}

// Function to withdraw money from the customer's account
function withdraw(amount) {
    if (amount > this.balance) {
        console.log("Insufficient funds. Withdrawal failed.");
    } else {
        // Deduct the withdrawn amount from the balance
        this.balance -= amount;
        console.log(`Withdrawal of Rs. ${amount}/- successful. New balance: Rs. ${this.balance}/-`);
    }
}

// Example usage:
console.log("Initial balance:", customer.balance);

// Perform operations using object methods
customer.deposit = deposit; // Add deposit method to customer object
customer.withdraw = withdraw; // Add withdraw method to customer object

// Deposit Rs. 2000 into the customer's account
customer.deposit(2000);

// Withdraw Rs. 1500 from the customer's account
customer.withdraw(1500);

// Attempt to withdraw Rs. 5000 (more than current balance)
customer.withdraw(5000);

// Current balance after operations
console.log("Final balance:", customer.balance);
