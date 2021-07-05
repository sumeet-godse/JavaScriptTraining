/**
 * Problem Statement 4: Let's assume that we have a for loop that prints 0 to 10 at random intervals (0 to 6 seconds). 
 * We need to modify it using promises to print sequentially 0 to 10. For example, if 0 takes 6 seconds to print
 * and 1 takes two seconds to print, then 1 should wait for 0 to print, and so on.
 */
// For loop which prints 0 to 10 at irregular intervals
// for(let i = 0; i <= 10; i++) {
//     let randomnumber = Math.floor(Math.random() * (6 - 0 + 1));
//     setTimeout(() => {
//         console.log("Printing " + i + " after " + randomnumber + " seconds.");
//     }, randomnumber * 1000);
// }
let promises = [];

for(let i = 0; i < 11; i ++) {
    let randomNumber = Math.floor(Math.random() * (6 - 0 + 1));
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Printing " + i + " after " + randomNumber + " seconds");
        }, randomNumber*1000);
    });
    promises.push(promise);
}

async function printItems() {
    for(let k = 0; k < promises.length; k ++){
        await promises[k].then((message) => console.log(message));
    }
}

printItems();
