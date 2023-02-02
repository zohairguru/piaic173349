

var letter = prompt("Enter alphabit ")
 alert(letter);  
var findVowel =  function (letter) {

    var vowels = ["a", "e", "i", "o", "u"];

    for(var i = 0; i < vowels.length; i++){ // don't use for...in with Arrays
        if(letter === vowels[i]){// Use array indexing instead
          return  true;
          //document.write("Vowel ",letter);
          
        } else {
          return false;
          //document.write("Consonent ",letter)
    }
}

 
};

//findVowel();
//alert(letter);
document.write(findVowel());
//console.log("character",letter);