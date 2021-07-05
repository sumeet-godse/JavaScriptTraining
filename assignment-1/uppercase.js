/**
 * Problem Statement 2 : Write a JavaScript program to test if the first character of a
 * string is uppercase or not, if not then set the first character to uppercase
 */
function checkUpperCase(inputString) {
    if ( inputString.charAt(0).toUpperCase() === inputString.charAt(0) ) {
        console.log("Already UpperCase");
    } else {
        console.log("Not UpperCase, modifying");
    }
      
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

// Finds that first letter is smallcase, so prints Sumeet
console.log(checkUpperCase('sumeet'));

// Already first letter is in uppercase so prints the same
console.log(checkUpperCase('Sumeet'));
