// Problem Statement 2 : Write a regex pattern to match the valid email address
/**
 * ^ - String Beginning
 * [a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-] - characters, digits & some special characters in local part
 * [a-zA-Z0-9-] - allow characters, digits, '-' after '@'
 * (?:\.[a-zA-Z0-9-]+)* - matches domain, sub-domain
 * $ - String end
 */
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;

const email = prompt("Enter email");
 
if ( regexEmail.test(email) ) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}