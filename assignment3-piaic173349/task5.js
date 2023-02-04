let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let uniqueArray = [];

for (let i = 0; i < arr1.length; i++) {
  if (!uniqueArray.includes(arr1[i])) {
    uniqueArray.push(arr1[i]);
  }
}

document.write("<h3>",uniqueArray,"</h3>");
console.log(uniqueArray);
