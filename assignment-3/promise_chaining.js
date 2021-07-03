/**
 * Problem Statement 2: Write two functions that use Promises that you can chain! The first function, makeAllCaps(), 
 * will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words
 * in alphabetical order. If the Array contains anything but Strings, it should throw an error.
 */
let arrays = [["hello", "abcd", "def", 12, "yes"], ["hello", "abcd", "def", "simple", "yes"]];

function makeAllCaps(inputArray) {
    inputArray.forEach((element, index, array) => {
        array[index] = element.toUpperCase();
    });
}

function sortWords(inputArray) {
    inputArray.sort();
}

function stringArrayPromise(inputArray) {
    return new Promise((resolve, reject) => {
        if( inputArray.every(item => (typeof item === "string")) ) {
            resolve("Valid Array with all strings");
        } else {
            reject("Invalid Array, all items are not string");
        }
    });
}

for(let i = 0; i < 2; i++) {
    stringArrayPromise(arrays[i])
    .then(() => {
        makeAllCaps(arrays[i]);
        console.log("Array at index " + i + " after all caps is " + arrays[i]);
    })
    .then(() => {
        sortWords(arrays[i]);
        console.log("Array after sort - " + arrays[i]);
    })
    .catch(() => console.log("Array at index " + i + " is invalid"));
}
