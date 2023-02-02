// var vowel = function isVowel(char) {
//   char = char.toLowerCase();
//   return ['a', 'e', 'i', 'o', 'u'].includes(char);
// }

var char = prompt("Enter Alphbit");

var myVowel = function isVowel(char) {
  const vowels = "aeiouAEIOU";
  return vowels.indexOf(char) !== -1;
}

var alphabit = myVowel(char);
//isVowel(char);
alert( alphabit);
console.log(myVowel(char));
console.log(myVowel('a')); // true
console.log(myVowel('b')); // false
