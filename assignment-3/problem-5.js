/**
 * Problem Statement 5: The following recursive code will cause a stack overflow if the array "somelist" is too large. 
 * How can you fix this and still retain the recursive pattern?
 * var somelist = readVeryLongList();
 * var nextItem = function() {
 *    var item = somelist.pop();
 *    if (item) {
 *        // process the list item...
 *        nextItem();
 *    }
 * };
 */

/**
 * We can solve the problem using promises
 */
 const somelist = [1, 2, 3, 4, 5];

 const processItem = (item) => {
     return new Promise((resolve, reject) => {
         resolve("Processing item - " + item); 
     });
 };
 
 const nextItem = () => {
     const item = somelist.pop();
     
     if (item) {
         processItem(item)
         .then((message) => console.log(message))
         .then(nextItem())
     }
 };
 
 nextItem();
 