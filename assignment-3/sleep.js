/**
 * Problem Statement 3: Using Promise create a function named 'sleep' that should invoke a callback function after x seconds. 
 * NOTE: sleep function should not block the call stack.
 */
function sleep(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am here after " + x + " seconds");
        }, x*1000);
    })
}

sleep(2).then((message) => console.log(message)).catch((error) => console.log(error));

console.log("Call Stack not blocked 1");
console.log("Call Stack not blocked 2");
