/**
 * Problem Statement 4 : Deep clone Javascript Object (without using any internal methods of cloning).
 * All properties along with functions, prototypes should get cloned to target objects.
 */
let oldObj = {
    firstName: "Sumeet",
    lastName: "Godse",

    getName() {
        console.log(this.firstName + " " + this.lastName);
    }
};

let clonedObj = {};

for ( key in oldObj ) {
    clonedObj[key] = oldObj[key];
}

// Modifying cloned object does not affect old object i.e. both objects have different memory locations
clonedObj.firstName = "Raj";       

// Prints new name
clonedObj.getName();             

// Prints old name
oldObj.getName();

console.log(clonedObj.firstName.length);