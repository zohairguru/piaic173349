const A = ["cake", "apple pie", "cookie", "chips", "patties"];

const search = (array, item) => {
  return array.includes(item);
};

const userInput = prompt("Enter item to search:");

const result = search(A, userInput);

if (result) {
  alert(`${userInput} is found in the list.`);
} else {
  alert(`${userInput} is not found in the list.`);
}

