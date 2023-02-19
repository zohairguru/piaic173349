function isPalindrome(str) {
  // Remove non-alphanumeric characters from the string and convert to lowercase
  let cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  // Reverse the string and compare to the original
  return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('A man a plan a canal Panama')); // Output: true
console.log(isPalindrome('hello world')); // Output: false

document.write("Output  ", isPalindrome('racecar'),"<br>");
document.write("A man a plan a canal Panama ",isPalindrome('A man a plan a canal Panama'), "<br>")
document.write("outpur ", isPalindrome('hello world'));