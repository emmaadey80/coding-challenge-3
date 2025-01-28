// Task 1: Product Price Management Scenario
console.log("Task 1- Product Price Management");

// Declare an array 'prices'
let prices = [25, 63, 42, 99, 53];
console.log("Inital Prices:", prices);

// Adding a new price to the array (12)
prices.push(12);

// Removing the first price from the array (25)
prices.shift();

// Logging the updated price list to console (63, 42, 99, 53, 12)
console.log("Updated Prices:", prices);

// Task 2: Modifying Customer Orders Scenario
console.log("\nTask 2- Modifying Customer Orders");

// Declaring an array 'order'
let orders = [ 10, 15, 45, 35, 60];
console.log("Orders:", orders);

// Increasing the third order quantity by 5 (3rd order is 45 + 5 = 50)
orders[2] += 5;
console.log("Updated Orders:", orders);

// Total order count 
let totalOrders = orders.reduce((total, orders) => total + orders, 0);
console.log("Total number of orders:", totalOrders); 

//Task 3: Employee Performance Tracking Scenario
console.log("\nTask 3- Employee Performace Tracking");

// Declare an object 'employee' with properties
let employee = {
name: "Jane Hopper",
role: "Mage",
performanceScore: 9,
isActive: true
};

// Updating the performaceScore property
employee.performanceScore = 11;

// Adding a new property 'promotionEligible' 
employee.promotionEligible = employee.performanceScore >= 13;

console.log(employee);
