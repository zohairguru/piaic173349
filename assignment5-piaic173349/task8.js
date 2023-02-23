function calculateAge(birthDate) {
  let today = new Date();

  
  let differenceInMillis = today.getTime() - birthDate.getTime();

  
  let millisInYear = 1000 * 60 * 60 * 24 * 365;
  let millisInMonth = 1000 * 60 * 60 * 24 * 30;
  let millisInDay = 1000 * 60 * 60 * 24;

 
  let ageInYears = Math.floor(differenceInMillis / millisInYear);
  let ageInMonths = Math.floor(differenceInMillis / millisInMonth);
  let ageInDays = Math.floor(differenceInMillis / millisInDay);

  
  let monthsRemaining = ageInMonths % 12;
  let daysRemaining = ageInDays % 365;

  
  return `${ageInYears} years, ${monthsRemaining} months, and ${daysRemaining} days`;
}

let birthDate = new Date('1990-06-30');
console.log(calculateAge(birthDate)); // 32 years, 7 months, and 23 days
document.write("Calculate age : ",calculateAge(birthDate));