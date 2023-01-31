

var num = parseInt(prompt("Enter a number"));

//alert(num);

function check_even_odd(num) {
    var even = num % 2 == 0;

    if (even) {
        return "Even"
    } else {
        return "Odd"
    }
}

var result = check_even_odd(num);
document.write("<h2>",'The number is ',num," ",result,"</h2>") 