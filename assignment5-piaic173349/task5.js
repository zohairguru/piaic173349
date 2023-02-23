function countCurrencyNotes(amount) {
  let hundredNotes = 0;
  let fiftyNotes = 0;
  let tenNotes = 0;

  // Count the number of 100, 50, and 10 notes needed to make up the amount
  while (amount > 0) {
    if (amount >= 100) {
      hundredNotes++;
      amount -= 100;
    } else if (amount >= 50) {
      fiftyNotes++;
      amount -= 50;
    } else {
      tenNotes++;
      amount -= 10;
    }
  }

  // Output the results
  console.log(`Number of 100 notes: ${hundredNotes}`);
  console.log(`Number of 50 notes: ${fiftyNotes}`);
  console.log(`Number of 10 notes: ${tenNotes}`);
}

countCurrencyNotes(5); 
countCurrencyNotes(17); 
countCurrencyNotes(121); 

