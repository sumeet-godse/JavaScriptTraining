/**
 * Problem Statement 1: Write a function testNum that takes a number as an argument and returns a 
 * Promise that tests if the value is less than or higher than the value 10.
 */
function testNum(inputNumber) {
    return new Promise((resolve, reject) => {
        if( inputNumber > 10 ) {
            reject("Number is greater than 10");
        } else if ( inputNumber < 10 ) {
            reject("Number is less than 10");
        } else {
            resolve("Number is equal to 10");
        }
    });
}

const value = prompt("Enter a number ...");

testNum(value).then((message) => {
    console.log(value + " - " + message);
}).catch((error) => {
    console.log(value + " - " + error);
})
