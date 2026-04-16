function cleanDatabase(recordIds) {
// Requirement: Remove all odd numbers from the array
for (let i = 0; i < recordIds.length; i++) {
if (recordIds[i] % 2 !== 0) {
recordIds.splice(i, 1);
}
}
return recordIds;
}
// Test Case
const data = [1, 3, 4, 6, 7, 9, 10];
const cleaned = cleanDatabase(data);
console.log("Final Array:", cleaned);

