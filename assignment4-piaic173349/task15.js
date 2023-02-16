
const age = prompt("What is your age?");

// Calculate the birth year based on the current year
const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;

document.write("Your Age  is: " + age,"<br/>");
document.write("Your birth year is: " + birthYear);
