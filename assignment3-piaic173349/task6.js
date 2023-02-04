var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];

for (var i = 0; i < aCities.length; i++) {
  var choiceNum = i + 1;
  var ordinal = choiceNum + o[choiceNum % 10 > 3 ? 0 : choiceNum % 100 - choiceNum % 10 == 10 ? 2 : choiceNum % 10];
    console.log(`${ordinal} choice is ${aCities[i]}`);
    
    document.write(`${ordinal} choice is ${aCities[i]}`,"<br>");
}
