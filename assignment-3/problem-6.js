/**
 * Problem Statement 6: Here is a code snippet:
 * for(var i = 0; i < 10; i++) {
 *    setTimeout(function() {
 *      console.log(i); 
 *    }, 10);
 * }
 * Give the reasons for the output the above snippet gives. Also, modify the snippet to print values from 0 to 9.
 */

/**
 * setTimeout is pushed to the global call stack one by one and until the first setTimeout is executed from the 
 * global call stack, value of i already reaches 10 because of loop, hence we see 10 10 times.
 */

// Below solution can can be used as an answer
const arr = [];

for(let i = 0; i < 10; i ++) {
    arr.push(i);
    setTimeout(() => {
        console.log(arr.shift()); 
    }, 10);
}