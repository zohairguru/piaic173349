var num1 = parseFloat(prompt("Enter first number:"));
//alert(num1);

var num2 = parseFloat(prompt("Enter second number:"));
//alert(num2);

document.write("<h2>", "Enter an operation (+, -, *, /, %):", "</h2>")
var operation = prompt("Enter an operation (+, -, *, /, %):")

alert(operation);

if (operation == '+') {
    result = num1 + num2;
    document.write("Result:", result)
} else if(operation == '-'){
    result = num1 - num2;
    document.write("Result:", result)
} else if (operation == '*') {
    result = num1 * num2;
    document.write("Result:", result)
} else if (operation == '/') {
    result = num1 / num2;
    document.write("Result:", result)
} else if (operation == '%') {
    result = num1 % num2;
    document.write("Result:", result)
} else {
    document.write("Invalid operator")
    result = None;
}

