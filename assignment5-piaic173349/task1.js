function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

console.log(factorial(5)); // Output: 120
document.write("Factorial ", factorial(8));
document.write("Factorial ", factorial(5));
document.write("Factorial ", factorial(9));