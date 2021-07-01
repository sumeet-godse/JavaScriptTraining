/**
 * Problem Statement 4 : Write a regex function to distinguish and pick the values of
 * email address, phone number from the below paragraph
 */
var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
var regexPhoneno = /^[(]?[\+]?[0-9]{2}[)]?[-\s\.]?[0-9]{5}[-\s\.]?[0-9]{5}$/g;
var regexMobile = /^[0-9]{10}$/g;

const paragraph = "Lorem ipsum dolor 9221122108 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. mytraining@deqode.com Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. +91-20200-21210 Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce (+91)-20200-21210 ut placerat mt@test.inc orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.";

const emails = [];
const mobileNumbers = [];
const phoneNumbers = [];

const words = paragraph.split(" ");

for( word in words ) {
    if( regexEmail.test(words[word]) ) {
        emails.push(words[word]);
    } 

    if( regexPhoneno.test(words[word]) ) {
        phoneNumbers.push(words[word]);
    }

    if( regexMobile.test(words[word]) ) {
        mobileNumbers.push(words[word]);
    } 
}

console.log("Emails are as follows - " + emails);
console.log("Phone numbers are as follows - " + phoneNumbers);
console.log("Mobile numbers are as follows - " + mobileNumbers);