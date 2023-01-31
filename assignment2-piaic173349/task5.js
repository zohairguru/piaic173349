// generating a random integer from 1 to 10
    var random = Math.floor(Math.random() * 10) + 1;

    // take input from the user
    var number = parseInt(prompt('Enter a number from 1 to 10: '));

    // take the input until the guess is correct
    while(number !== random) {
        number = parseInt(prompt('Guess a number from 1 to 10: '));
    }

    // check if the guess is correct
if (number == random) {
    document.write("Bingo! Correct");
        console.log('You guessed the correct number.');
} else if (number >= 1) {
    document.write("Close enough to the correct answer");
        console.log('Close enough to the correct answer');
}