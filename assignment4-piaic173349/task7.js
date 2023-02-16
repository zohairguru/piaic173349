const str = "The quick brown fox jumps over the lazy dog";
const word = "the";
const regex = new RegExp("\\b" + word + "\\b", "gi");
const count = (str.match(regex) || []).length;
document.write("The word \"" + word + "\" appears " + count + " times in the string.");

