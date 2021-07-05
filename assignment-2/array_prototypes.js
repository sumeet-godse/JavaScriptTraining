/**
 * Problem Statement 6 : 
 * Implement a javascript Array having the following prototype functions without using Native javascript array:
 * a.push b.pop c.shift d.unshift e.length f.splice g.indexOf f.forEach 
 */
let myArray = [1, 2, 3, 4, 5];

console.log("Original Array - " + myArray);

Array.prototype.myPush = function() {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }

    return this.length;
};

Array.prototype.myPop = function() {
    const element = this[this.length-1];
    this.length -= 1;

    return element;
};

Array.prototype.myShift = function() {
    const element = this[0];

    for (let i = 1; i < this.length; i++) {
        this[i-1] = this[i];
    }

    this.length -= 1;

    return element;
};

Array.prototype.myUnShift = function() {
    for (let i = this.length; i > -1; i--) {
        this[i+arguments.length] = this[i];
    }
    
    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }

    this.length -= 1;

    return this.length;
};

Array.prototype.myLength = function() {
    let count = 0;

    while(this[count]){
        count++;
    }

    return count;
};

Array.prototype.myIndexOf = function() {
    let index = -1;

    for(let i = 0; i < this.myLength(); i++) {
        if( arguments[0] == this[i] ) {
            index = i;
            break;
        }
    }

    return index;
};

Array.prototype.myForEach = function(callback) {
    for(let i = 0; i < this.myLength(); i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.mySplice = function() {
    const start = arguments[0];
    const deleteCount = arguments[1];

    for(let i = start; i < this.length; i++) {
        this[i] = this[i + deleteCount];
    }

    this.length = this.length - deleteCount;
    
    const newItemsLength = arguments.length - 2;

    if(newItemsLength !== 0) {
        for(let i = this.length-1; i >= start; i--) {
            this[i + newItemsLength] = this[i];
        }
    
        for(let i = 0; i < newItemsLength; i++) {
            this[start + i] = arguments[i + 2];
        }
    }
};

myArray.myPush(7);
console.log("Array after pushing 7 - " + myArray);

console.log("Pop Operation - " + myArray.myPop());

console.log("Array after pop - " + myArray);

console.log("Shift Operation - " + myArray.myShift());

console.log("Array after shift - " + myArray);

console.log("Unshift operation - " + myArray.myUnShift(12,13,14));

console.log("Array after unshift - " + myArray);

console.log("Length prototype - " + myArray.myLength());

console.log("Index of 2 is : " + myArray.myIndexOf(2) + " and 23 doesnt exist : " + myArray.myIndexOf(23));

console.log("Adding 100 to each element and printing out the array using myForEach -");
myArray.myForEach((currentValue) => {
    console.log(currentValue + 100);
})

console.log("Original Array before splicing - " + myArray);
myArray.mySplice(1,2,200,300);
console.log("Array after mySplice(1,2,200,300) - " + myArray);
