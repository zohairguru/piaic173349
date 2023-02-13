const min = 1;
const max = 6;
const dice = Math.floor(Math.random() * (max - min + 1)) + min;
document.write("The value of the dice is: " + dice);
