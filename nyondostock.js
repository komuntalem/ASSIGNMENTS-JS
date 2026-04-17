//Part A — Variable Declaration & Type Checking 

//NO.1
const storeName = "NYONDO General Hardware LTD";
const minimumStockLevel = 50;
const isStopreOpen = true;
let currentManagerName;
let closedDepartments = null;

//NO2
console.log('storeName is of type ${typeof storeName}');
console.log(`minimumStockLevel is of type: ${typeof minimumStockLevel}`);
console.log(`isStoreOpen is of type: ${typeof isStoreOpen}`);
console.log(`currentManagerName is of type: ${typeof currentManagerName}`);
console.log(`closedDepartments is of type: ${typeof closedDepartments}`);

//NO3.
// Variable storeName: const is used because the the store name is a fixed business identity
// Variable minimumStockLevel: const is used because the minimum stock level is a business policy constant
/* isStoreOpen: const is used for the initial store open status.
Variable currentManagerName: let is used because the manager name can change 
Variable closedDepartments: let is used because closed departments can change
*/

//NO4:
//Remove leading and trailing whitespace
const supplierInput = " john HARDWARE ";
const trimSupplier = supplierInput.trim();
 
//Convert to Title Case
const cleanSupplierName = trimSupplier
  .toLowerCase()
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
 
//Log the result using a template literal
console.log(`Supplier Name: ${cleanSupplierName}`);

//PART B - STRING MANIPULATION & INPUT VALIDATION

//NO5
if (cleanSupplierName.length >= 2 && !null){
    console.log("Valid Supplier Name")
}
else
    console.log("Invalid supplier name");

//N06
let phoneNumber = "0760724955";
 
const isValidUgandanPhone =
  (phoneNumber.startsWith("07") && phoneNumber.length === 10 && !isNaN(Number(phoneNumber))) ||
  (phoneNumber.startsWith("256") && phoneNumber.length === 12 && !isNaN(Number(phoneNumber)));
 
if (isValidUgandanPhone) {
  console.log("Valid Ugandan phone number");
} else {
  console.log("Invalid phone number");
}

//NO7
let pdtDescription;
pdtDescription = "iron sheets - box of 20";

const newDescription = pdtDescription
.trim()
.toUpperCase()
.replace("-", ":");
console.log(newDescription);

//NO8
const category = 'ROOFING';
const itemId = 204;
const branchCode = 'KLA';
 
const stockCode = `NYD-${category}-${branchCode}-${itemId}`;
console.log(stockCode);

//PART C — Conditional Logic & Stock Arrays
//N09
 
let userRole = 'Sales Attendant';
let quantityOrdered = 30;
let sellingPriceUgx = '45000';
let costPriceUgx = 38000;
 
//Only Store Manager or Accounts/Admin may register new stock
if (userRole !== 'Store Manager' && userRole !== 'Accounts/Admin') {
  console.log(`Error: '${userRole}'Access denied.`);
} else {
  //Minimum order quantity for bulk items is 10 units
  if (quantityOrdered < 10) {
    console.log(`Error: Quantity ordered (${quantityOrdered}) is below the minimum bulk order of 10 units.`);
  }
  //Selling price must be greater than cost price
  else if (Number(sellingPriceUgx) <= costPriceUgx) {
    console.log(`Error: Selling price (${sellingPriceUgx}) must be greater than cost price (${costPriceUgx}).`);
  } else {
    console.log("Valid Entries");
  }
}
 
//NO10
 
const rule2Passed = quantityOrdered >= 10;
const rule3Passed = Number(sellingPriceUgx) > costPriceUgx;
 
if (rule2Passed && rule3Passed) {
  console.log("Stock entry valid");
} else {
  console.log("Stock entry invalid");
}
 
//NO11
 
let hardwareStock = ['Iron Sheets', 'Cement Bags', 'Steel Rods', 'Paint (20L)', 'PVC Pipes'];
 
// Add "Binding Wire" to the end
hardwareStock.push("Binding Wire");
 
// Remove the first item (oldest stock dispatched)
hardwareStock.shift();
 
// Check if "Cement Bags" exists
const hasCementBags = hardwareStock.includes("Cement Bags");
console.log(`Cement Bags in stock: ${hasCementBags}`);
 
// Log the final array and its length
console.log("Final hardwareStock:", hardwareStock);
console.log(`Array length: ${hardwareStock.length}`);
 
// Merge with branchStock using .concat()
const branchStock = ['Nails', 'Bolts'];
const allStock = hardwareStock.concat(branchStock);
console.log("All stock (merged):", allStock);
 

// PART D — Functions, Objects & Loops
 
//NO12
 
function calculateSaleAmount(quantityInUnits, pricePerUnit) {
  if (
    typeof quantityInUnits !== 'number' ||
    typeof pricePerUnit !== 'number' ||
    quantityInUnits < 0 ||
    pricePerUnit < 0
  ) {
    return "Invalid input";
  }
  return quantityInUnits * pricePerUnit;
}
 
console.log(calculateSaleAmount(10, 5000));  
console.log(calculateSaleAmount(-1, 5000));  
console.log(calculateSaleAmount("10", 5000)); 
 
//NO13
 
const validateNIN = (nin) => {
  return typeof nin === 'string' && nin.length === 14 && nin !== '';
};
 
console.log(validateNIN("CM90019638AYC3")); 
console.log(validateNIN("SHORT"));          
 
//N014
 
function getUserPermissions(role) {
  switch (role) {
    case 'Store Manager':
      return "stock_and_pricing";
    case 'Sales Attendant':
      return "sales_and_receipts";
    case 'Accounts/Admin':
      return "full_reports";
    default:
      return "unauthorized";
  }
}
 
console.log(getUserPermissions('Store Manager'));   // stock_and_pricing
console.log(getUserPermissions('Sales Attendant')); // sales_and_receipts
console.log(getUserPermissions('Guest'));           // unauthorized
 
// --- Question 15: createSaleRecord function ---
 
function createSaleRecord(itemName, quantity, buyerContact, amountPaid) {
  return {
    receiptId: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    itemName: itemName,
    quantityInUnits: quantity,
    buyerContact: buyerContact,
    amountPaid: amountPaid,
    saleDate: new Date(),
    isCredit: false
  };
}
 
// Call the function with test data
const saleRecord = createSaleRecord("Cement Bags", 5, "0701234567", 125000);
 
// Add branch using dot notation
saleRecord.branch = "Kampala Main";
 
// Change isCredit to true
saleRecord.isCredit = true;
 
// Add dueDate using bracket notation
saleRecord["dueDate"] = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
 
// Log all property names
console.log("Sale record keys:", Object.keys(saleRecord));
console.log("Sale record:", saleRecord);
 
//N016
 
const weeklyDeposits = [1200000, 850000, 2100000, 975000, 1650000, 430000, 1890000];
let totalDeposits = 0;
 
for (let i = 0; i < weeklyDeposits.length; i++) {
  totalDeposits += weeklyDeposits[i];
}
 
const averageDeposit = totalDeposits / weeklyDeposits.length;
console.log(`Total weekly deposits: UGX ${totalDeposits}`);
console.log(`Average daily deposit: UGX ${averageDeposit.toFixed(2)}`);
 
// Array of sale records — for...of with continue to count credit sales
const saleRecords = [
  createSaleRecord("Iron Sheets", 10, "0782345678", 400000),
  createSaleRecord("Steel Rods", 20, "0753456789", 600000),
  createSaleRecord("PVC Pipes", 5, "0764567890", 75000),
  createSaleRecord("Cement Bags", 15, "0775678901", 337500),
  createSaleRecord("Paint (20L)", 3, "0786789012", 120000),
];
 
saleRecords[1].isCredit = true;
saleRecords[3].isCredit = true;
 
let creditSalesCount = 0;
for (const record of saleRecords) {
  if (!record.isCredit) continue; // skip non-credit sales
  creditSalesCount++;
}
console.log(`Total credit sales: ${creditSalesCount}`);
 
// Inventory array with out-of-stock item — for loop with break
const inventory = [
  { itemName: "Nails", quantity: 200 },
  { itemName: "Bolts", quantity: 150 },
  { itemName: "Binding Wire", quantity: 0 },
  { itemName: "Paint (20L)", quantity: 12 },
];
 
for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].quantity === 0) {
    console.log(`Alert: ${inventory[i].itemName} is out of stock`);
    break;
  }
}
 
// PART E — Higher-Order Functions, Sets & Maps
 
const procurementRecords = [
  { id: 1, supplierName: "Roofing Solutions Ltd", itemName: "Iron Sheets", quantityInUnits: 100, costInUgx: 3500000, deliveryDate: new Date("2025-06-01") },
  { id: 2, supplierName: "BuildRight Uganda", itemName: "Cement Bags", quantityInUnits: 200, costInUgx: 2800000, deliveryDate: new Date("2025-06-03") },
  { id: 3, supplierName: "Roofing Solutions Ltd", itemName: "Steel Rods", quantityInUnits: 30, costInUgx: 960000, deliveryDate: new Date("2025-06-05") },
  { id: 4, supplierName: "PipeMaster Co.", itemName: "PVC Pipes", quantityInUnits: 80, costInUgx: 1200000, deliveryDate: new Date("2025-06-07") },
  { id: 5, supplierName: "ColourWorld Uganda", itemName: "Paint (20L)", quantityInUnits: 25, costInUgx: 875000, deliveryDate: new Date("2025-06-09") },
  { id: 6, supplierName: "BuildRight Uganda", itemName: "Binding Wire", quantityInUnits: 60, costInUgx: 540000, deliveryDate: new Date("2025-06-11") },
];
 
//NO17
 
const recordsWithCostPerUnit = procurementRecords.map(record => ({
  ...record,
  costPerUnit: record.costInUgx / record.quantityInUnits
}));
 
console.log("Records with costPerUnit:", recordsWithCostPerUnit);
 
//N018
 
const bulkOrders = procurementRecords.filter(record => record.quantityInUnits >= 50);
console.log("Bulk orders (qty >= 50):", bulkOrders);
console.log(`Number of bulk orders: ${bulkOrders.length}`);
 
//N019
 
const totalQuantityProcured = procurementRecords.reduce((acc, record) => acc + record.quantityInUnits, 0);
const totalCostUgx = procurementRecords.reduce((acc, record) => acc + record.costInUgx, 0);
 
console.log(`Total quantity procured: ${totalQuantityProcured} units`);
console.log(`Total procurement cost: UGX ${totalCostUgx}`);
 
//NO20a
 
function getUniqueSuppliers(records) {
  const supplierSet = new Set(records.map(record => record.supplierName));
  return Array.from(supplierSet);
}
 
console.log("Unique suppliers:", getUniqueSuppliers(procurementRecords));
 
const authorizedRoles = new Set(['Store Manager', 'Accounts/Admin']);
 
function canRegisterStock(role) {
  return authorizedRoles.has(role);
}
 
console.log(canRegisterStock('Store Manager'));   // true
console.log(canRegisterStock('Sales Attendant')); // false
console.log(canRegisterStock('Accounts/Admin'));  // true
 
//NO20b
 
const nyondoPriceList = new Map([
  ["Iron Sheets", 35000],
  ["Cement Bags", 14000],
  ["Steel Rods", 32000],
  ["PVC Pipes", 15000],
  ["Paint (20L)", 35000],
  ["Binding Wire", 9000],
]);
 
function calculateSaleTotal(itemName, quantityInUnits) {
  const pricePerUnit = nyondoPriceList.get(itemName);
  if (pricePerUnit === undefined) return "Item not found";
  return pricePerUnit * quantityInUnits;
}
 
console.log(calculateSaleTotal("Cement Bags", 10));   // 140000
console.log(calculateSaleTotal("Invisible Widget", 5)); // "Item not found"
 
console.log("\n--- Nyondo Price List ---");
for (const [item, price] of nyondoPriceList) {
  console.log(`${item}: UGX ${price}`);
}
 
let highestPricedItem = "";
let highestPrice = 0;
 
nyondoPriceList.forEach((price, itemName) => {
  if (price > highestPrice) {
    highestPrice = price;
    highestPricedItem = itemName;
  }
});
 
console.log(`Highest-priced item: ${highestPricedItem} at UGX ${highestPrice}`);

