/**
 * Problem Statement 1 : 
 * Write a regex pattern that matches the password
 * 1. Uppercase (A-Z) and lowercase (a-z) English letters.
 * 2. Digits (0-9).
 * 3. Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
 * 4. Character. ( period, dot or full stop) provided that it is not the first or 
 *    last character and it will not come one after the other.
 */

/**
 * ^ - String Beginning
 * (?!^[.]) - No single period at beginning 
 * (?!.*[.]$) - No single period at end
 * (?!.*[.]{2}) - No consecutive period in between
 * [\w!'`&=~%#\/\$\*\+\-\^\?\{\}\|\.]{1,64} - Rest of the password string, maxlen 64, minlen 1
 * $ - String end
 */
var regexPassword = /^(?!^[.])(?!.*[.]$)(?!.*[.]{2})[\w!'`&=~%#\/\$\*\+\-\^\?\{\}\|\.]{1,64}$/g;

var password = prompt("Enter password");

if ( regexPassword.test(password) ) {
    console.log("Valid Password");
} else {
    console.log("Invalid Password");
}