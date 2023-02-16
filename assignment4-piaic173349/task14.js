// Create a Date object for the current date and time
const now = new Date();

// Extract the hours from the date object
const hours = now.getHours();

// Reset the date object an hour ahead
now.setHours(hours + 1);

// Display the date object in the browser

document.write("Current date: ", now,"<br/>");
document.write("1 hour ago it was: ", now,"<br/>");


