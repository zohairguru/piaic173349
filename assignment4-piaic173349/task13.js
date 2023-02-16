const minutesSinceEpoch = Math.floor((new Date()).getTime() / 1000 / 60);
console.log(minutesSinceEpoch);
document.write("Current Date ",Date(),"<br/>");
document.write("Elapsed milliseconds since january 1, 1970: ", minutesSinceEpoch,"<br/>");

document.write("Elapsed minutes since january 1, 1970: ",minutesSinceEpoch);