// Problem Statement 5 : Implement the setTimeout function using native javascript only. 
function nativeJsTimeout(callbackFunction, seconds) {
    const currTime = Date.now();

    while ( Date.now() < ( currTime + seconds ) ) {
        continue;
    }

    callbackFunction();
}

function output() {
     console.log('Implemented after ' + delayInSeconds + ' seconds');
}

const delayInSeconds = prompt("Enter delay interval in seconds");

nativeJsTimeout(output, delayInSeconds*1000);