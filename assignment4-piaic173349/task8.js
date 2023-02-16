const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function convertNumberToWords(num) {
  if (num === 0) {
    return "zero";
  }
  
  let words = "";
  
  if (num >= 1000) {
    words += convertNumberToWords(Math.floor(num / 1000)) + " thousand ";
    num %= 1000;
  }
  
  if (num >= 100) {
    words += ones[Math.floor(num / 100)] + " hundred ";
    num %= 100;
  }
  
  if (num >= 10 && num < 20) {
    words += teens[num - 10];
    return words;
  }
  
  if (num >= 20) {
    words += tens[Math.floor(num / 10)] + " ";
    num %= 10;
  }
  
  if (num > 0) {
    words += ones[num];
  }
  
  return words.trim();
}

const num1 = 23;
const num2 = 123;
document.write(num1 + " in words is: " + convertNumberToWords(num1) + "<br>");
document.write(num2 + " in words is: " + convertNumberToWords(num2));
