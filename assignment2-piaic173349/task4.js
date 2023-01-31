

// # Get marks obtained in three subjects
var subject1  = prompt("Enter marks subject1");
var subject2 = prompt("Enter marks subject2");
var subject3 = prompt("Enter marks subject3");

var sub1 = parseFloat(subject1);
var sub2 = parseFloat(subject2);
var sub3 = parseFloat(subject3);
alert(subject1);
alert(subject2);
alert(subject3);


//  Get total marks
var total;
 parseFloat(total);
total = sub1 + sub2 + sub3;
document.write("<h2>", 'Mark Sheet', "</h2>");
document.write("<h3>", 'Total Mark: 300 ', "</h3>");
document.write("<h3>", 'Marks Obtained: ',  total,"</h3>");
//  Calculate the percentage
var percentage;
parseFloat(percentage);
percentage = total / 300 * 100;
document.write("<h3>", 'Percentage: ',  percentage,'%',"</h3>");
//Congition 
if ( percentage >= 80) {
    //alert(mark);
    document.write("Grade : A-one");
    document.write("Excellent");
    
} else if (percentage >= 70) {
    //alert(mark);
    document.write("Seventy percentage");
} else if(percentage >=60){
    //alert(mark);
    document.write("Sixty percentage");
} else if (percentage < 60) {
    //alert(mark);
    document.write("<h3>",'You need to improve',"</h3>");
}


