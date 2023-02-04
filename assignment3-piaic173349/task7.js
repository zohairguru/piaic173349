// The Set object is used to store unique values of any
// type, and the concat method is used to combine two
// arrays into one.The Array.from method is used to convert
// the set back into an array.This way, we remove all duplicates
// from the arrays a and b to get the union of both.





var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];

var union = Array.from(new Set(b.concat(a)));

console.log(union);
document.write(union);