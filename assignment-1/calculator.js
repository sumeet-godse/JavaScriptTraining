/**
 * Problem Statement 3 : 
 * Create a constructor function Calculator that creates objects with 3 methods:
 * 1. read() asks for two values using prompt and remembers them in object properties.
 * 2. sum() returns the sum of these properties.
 * 3. mul() returns the multiplication product of these properties.
 */
 function Calculator() {
    let firstNum = 5;
    let lastNum = 10;

    return {
      read() {
        firstNum = prompt ("Enter 1st no.");
        lastNum = prompt ("Enter 2nd no.");
      },

      sum() {
        return Number(firstNum) + Number(lastNum);
      },

      mult() {
        return Number(firstNum) * Number(lastNum);
      }
    }
}

let obj1 = Calculator();

// Prints default answer
console.log(obj1.sum());
console.log(obj1.mult());

// Read input numbers
obj1.read();

// Prints answer on basis of new input
console.log(obj1.sum());
console.log(obj1.mult());