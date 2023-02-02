
var correctpassword = "piaic786";

var password = prompt("Enter Password");

//document.write(password);


if (password == false) {
    alert("Please enter your password");
    password = prompt("Enter Correct Password");

}

else if (password === correctpassword) {
    alert("Correct!");
    document.write("Correct!");
} else if(password !== correctpassword ) {
    alert("Incorrect!");
    password = prompt("Enter Password Again!");
}
