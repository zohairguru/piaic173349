function convert() {
    var c = document.getElementById('data').value;
    //alert(c);
    var f = (c * 1.8) + 32;
    //alert(f);
    document.getElementById('result').innerHTML = `${c} Celsius is  ${f} Fahrenheit`;
}


function celsius() {
    var f = document.getElementById('tem').value;
    //alert(f);
    var c = (f - 32) * 5 / 9;
    //alert(c);
    document.getElementById('convertion').innerHTML = `${f} Fahrenheit is  ${c} Celius`;
}