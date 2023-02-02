var time = 1900;

var clockTime = parseFloat( prompt("Enter Time ! "));

if (clockTime >= 0000 && clockTime < 1200) {
    alert("Good Mornning");
} else if (clockTime >= 1200 && clockTime < 1700) {
    alert("Good Afternoon ");
    
} else if (clockTime >= 1700 && clockTime < 2100) {
    alert("Good Evening !");
} else if (clockTime >= 2100 && clockTime <= 2359) {
    alert("Good Night !");

}

