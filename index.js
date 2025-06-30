// Declare and initialize customerName
var customerName = 'bob';

// Function to uppercase the customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Declare bestCustomer in global scope (initially undefined)
var bestCustomer;

// Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer
function overwriteBestCustomer(newBest) {
  bestCustomer = newBest;
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'some customer';

// Function that tries (and fails) to change the const
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new customer'; // This will throw an error
}
