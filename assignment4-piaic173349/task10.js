
const num = parseFloat(prompt("Enter decemel No."));
// const num = 3.14159; // for ststing purpose
const decimals = 2;
const roundedNum = num.toFixed(decimals);

console.log(roundedNum); // Output: 3.14

document.write("Round decemel No.", roundedNum);