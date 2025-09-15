// Write your solution in this file!
// Declare customerName in global scope
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer
function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer
function overwriteBestCustomer(newFavorite) {
  window.bestCustomer = newFavorite;
}

// Declare leastFavoriteCustomer as constant
const leastFavoriteCustomer = 'someone';

// Function to try reassigning leastFavoriteCustomer (should throw error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new customer'; // ❌ will throw
}
