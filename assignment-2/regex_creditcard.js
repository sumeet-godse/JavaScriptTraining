// Problem Statement 3: Write a regex pattern that verifies credit card pattern
const regexCreditCard = /^(5[1-5][0-9]{14})$/g;

const creditCardNumber = prompt("Enter Master Card Credit Card Number");

if ( regexCreditCard.test(creditCardNumber) ) {
    console.log("Valid Number");
} else {
    console.log("Invalid Number");
}