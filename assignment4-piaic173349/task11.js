

const num = parseFloat(prompt("Enter Number and get mean"));
//const num = 666; // Change this to any input number
const digits = num.toString().split('').map(Number);
const sum = digits.reduce((acc, cur) => acc + cur, 0);
const mean = sum / digits.length;

console.log(mean); // Output: 6

document.write("Input ",num ," ","output ",mean);
