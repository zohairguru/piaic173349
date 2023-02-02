var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];



document.write("<h2>", "Qualification : ", "</h2>");

//alert(qualification[0]);
for (i = 0; i < qualification.length; i++){
    var num = 1;
    num++
    document.write("<h3>",num,") ", qualification[i],"<br/>","<h3>");
}