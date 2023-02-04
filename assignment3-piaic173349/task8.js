// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
var counting = [];
for (var i = 1; i <= 15; i++) {
  counting.push(i);
}
console.log("Counting: " + counting.join(", "));
document.write("Counting: " + counting.join(", "),"<br>");
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
var reverseCounting = [];
for (var i = 10; i >= 1; i--) {
  reverseCounting.push(i);
}
console.log("Reverse counting: " + reverseCounting.join(", "));
document.write("Reverse counting: " + reverseCounting.join(", "),"<br>");
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
var even = [];
for (var i = 0; i <= 20; i += 2) {
  even.push(i);
}
console.log("Even: " + even.join(", "));
document.write("Even: " + even.join(", "),"<br>");
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
var odd = [];
for (var i = 1; i <= 19; i += 2) {
  odd.push(i);
}
console.log("Odd: " + odd.join(", "));
document.write("Odd: " + odd.join(", "),"<br>");

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
var series = [];
for (var i = 2; i <= 20; i += 2) {
  series.push(i + "k");
}
console.log("Series: " + series.join(", "));
document.write("Series: " + series.join(", "));
