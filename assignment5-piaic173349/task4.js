function calcCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference}.`);
    document.write(`The circumference is ${circumference}.`,"<br/>");
}

function calcArea(radius) {
  const area = Math.PI * Math.pow(radius, 2);
    console.log(`The area is ${area}.`);
    document.write(`The area is ${area}.`);
}

calcCircumference(5); //  The circumference is 31.41592653589793.
calcArea(5); //  The area is 78.53981633974483.
