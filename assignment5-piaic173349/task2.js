
function areaOfRectangleVal(width, height) {
  return width * height;
}


function areaOfRectangleVar(width, height) {
  let w = width;
  let h = height;
  return w * h;
}


console.log(areaOfRectangleVal(5, 10)); // Output: 50
document.write("Area of rectangle value ", areaOfRectangleVal(5, 10),"<br>");

let width = 5;
let height = 10;
console.log(areaOfRectangleVar(width, height)); // Output: 50
document.write("Area of rectangle Variable ", areaOfRectangleVar(width, height));
