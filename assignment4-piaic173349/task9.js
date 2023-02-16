const htmlString = "<p><strong><em>Only print this</em></strong></p>";
const strippedString = htmlString.replace(/(<([^>]+)>)/ig, "");
console.log(strippedString); // Output: Only print this

document.write("Output<br/>");
        document.write("Only print this<br/> ", strippedString);