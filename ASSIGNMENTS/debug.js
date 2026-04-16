/*Original code with the bug:
function cleanDatabase(recordIds) {
 for (let i = 0; i < recordIds.length; i++) {
    if (recordIds[i] % 2 !== 0) {
       recordIds.splice(i, 1);
    }
}
return recordIds;
}
const data = [1, 3, 4, 6, 7, 9, 10];
const cleaned = cleanDatabase(data);
console.log("Final Array:", cleaned); // [3, 4, 6, 7, 9, 10]
*/

//  FIXED CODE

function cleanDatabase(recordIds) {
  for (let i = recordIds.length - 1; i >= 0; i--) {
    if (recordIds[i] % 2 !== 0) {
       recordIds.splice(i, 1);
    }
  }
  return recordIds;
}

const data = [1, 3, 4, 6, 7, 9, 10];
const cleaned = cleanDatabase(data);
console.log("Final Array:", cleaned); // [4, 6, 10]


/*
OBSERVATIONS
The loop first skipped index 1.
When 1 was removed at index 0, the number 3 moved into index 0.
But the loop moved to i=1, so 3 was never checked and never removed.

WHY
When you splice an item, everything to its right shifts one spot to the left.
The loop counter still moves forward, so it jumps over the item that just shifted in.
That's why two odd numbers in a row like 1,3 or 7,9 causes one to be missed.

FIXES
Fix 1 - Reverse loop: loop from the end to the start so nothing gets skipped.(line 18)
Fix 2 - New array: instead of removing from the original, push even numbers into a new array.
*/