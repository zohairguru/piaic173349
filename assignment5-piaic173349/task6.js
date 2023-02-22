function mirrorArray(arr) {
  
  let reversedArr = arr.reverse();
  
  let mirroredArr = arr.concat(reversedArr);
  
  return mirroredArr;
}


let arr = [1, 2, 3, 4];
let mirroredArr = mirrorArray(arr);
console.log(mirroredArr); // [1, 2, 3, 4, 4, 3, 2, 1]

document.write("Mirrore Array ",mirroredArr);