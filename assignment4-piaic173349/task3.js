let password = prompt("Enter a password that contains at least 8 characters, starts with a letter, and contains both letters and numbers:");

while (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
    password = prompt("Your password does not meet the requirements. Please enter a valid password:");
}

console.log("Password set successfully!");
