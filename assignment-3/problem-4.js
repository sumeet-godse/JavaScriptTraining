/**
 * Problem Statement 4: Let's assume that we have a for loop that prints 0 to 10 at random intervals (0 to 6 seconds). 
 * We need to modify it using promises to print sequentially 0 to 10. For example, if 0 takes 6 seconds to print
 * and 1 takes two seconds to print, then 1 should wait for 0 to print, and so on.
 */
let outputArray = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
//let randomNumbers = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
let index = 0;

for(let i = 0; i <= 10; i++) {
    let randomnumber = Math.floor(Math.random() * (6 - 0 + 1));
    setTimeout(() => {
        outputArray[i] = i;
        //randomNumbers[i]=randomnumber
        console.log("Printing " + i + " after " + randomnumber + " seconds.");
    }, randomnumber * 1000);
}

for(let i = 0; i <= 10; i ++) {
    setTimeout(() => {
        processItem()
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.log(error);
        })
    }, 6000);
}

function processItem() {
    return new Promise((resolve, reject) => {
        const element =  outputArray[index];
        if(element != -1) {
            index ++;
            resolve(element);
        } else {
            reject("waiting");
        }
    });
};



