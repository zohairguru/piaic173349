var num = parseInt(prompt("Enter a number:"))
alert(num);

document.write("Number is ", num,"<br/>");

if (num > 0) {
    document.write("Positive ", num);
} else if (num < 0) {
    document.write("Negative ", num);
} else {
     document.write("Zero ", num);
}