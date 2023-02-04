// This code uses a for loop to iterate through the array
//  A starting from the second element(index 1) to the end
//  of the array.At each iteration, it checks if the current
//  element is greater than the max variable.
//  If it is, the max variable is updated with the new maximum value.
// Finally, the largest number is logged to the console.


const A = [24, 53, 78, 91, 12];
let max = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] > max) {
    max = A[i];
  }
}

console.log(`The largest number is: ${max}`);
document.write(`The largest number is: ${max}`);