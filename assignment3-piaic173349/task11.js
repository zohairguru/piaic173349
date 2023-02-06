const A = ["cake", "apple pie", "cookie", "chips", "patties"];

const search = (array, item) => {
  return array.includes(item);
};

const userInput = prompt("Enter item to search:");

const result = search(A, userInput);

if (result) {
  alert(`${userInput} is avaible at index  in our bakery.`);
} else {
  alert(`We are sorry ${userInput}  is not avaible in the our bakery.`);
}

