// Problem Statement 1 : Create a function to calculate the factorial of a number using closure
function factorial(value) {
    if ( value === 0 ) {
        return 1;
    }

    // multiply() is able to use 'value' from parent function scope due to closure
    function multiply() {
        return value * factorial(value - 1);
    }

    return multiply(value - 1);
}

// Prints factorial of 5 i.e. 120
console.log(factorial(5));

// Prints factorial of 6 i.e. 720
console.log(factorial(6));