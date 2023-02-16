const today = new Date();
const date = today.getDate();

if (date < 16) {
    console.log("First fifteen days of the month");
    document.write("First fifteen days of the month");
} else {
    console.log("Last days of the month");
    document.write("Last days of the month");
    
}
