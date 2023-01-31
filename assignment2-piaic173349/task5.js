
var secret_number = 7;
var guess = prompt("Guess the secret number (1 to 10): ");
var num = parseInt(guess);

if (num  == secret_number){
    document.write("Bingo! Correct answer");
}else if (num >= secret_number  ) {
    document.write("Close enough to the correct answer");
}else if(num < 3){
    document.write("Wrong answer, try again");
} else {
    document.write("Little far to close guess");
}





