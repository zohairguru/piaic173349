function daysToWeekend(date) {
  // Get the day of the week (0 = Sunday, 6 = Saturday)
  let dayOfWeek = date.getDay();

  // Check if it's a weekend day (Saturday or Sunday)
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return "It's a weekend!";
  } else {
    // Calculate the number of days until the weekend
    let daysUntilWeekend = 6 - dayOfWeek;
    return `Only ${daysUntilWeekend} day(s) until the weekend!`;
  }
}

let date = new Date('2023-02-22');
console.log(daysToWeekend(date)); // Only 4 day(s) until the weekend!
document.write("It's Weekend   ",daysToWeekend(date));