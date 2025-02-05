//Question No:18
// visiting place list not in alphabetic order.
let visitPlace : string[] = ["USA","Finland","Switzerland","Qattar","Australiya","Japan"];
console.log('list in original order:',visitPlace);

// print the array in it's original order.
console.log('Array not in Alphabetic order:',visitPlace);

// print your array in alphabetic order without chamging in the original array.
console.log('Alphabetic Order:',[...visitPlace] . sort());

// Array is still in original order.
console.log('Original Order after sorting the array:',visitPlace);

// Reversed order,the array's order has changed.
console.log('Reversed alplabetic order:',[...visitPlace] .sort().reverse());

// Print array again in the original order after reverse.
console.log('Original Order after reversed:',visitPlace);

// Reverse the list again to get back the original order.
visitPlace.reverse();
console.log('Back to the original order:',visitPlace);

// Sort the array in alphabetical order.
visitPlace.sort(); 
console.log('Sort in the alphabetic order:',visitPlace);

// Print the array again in the reverse alphabetic order.
visitPlace.sort((a,b)=> b.localeCompare(a));
console.log('Sorted in the reverse alphabetic order:',visitPlace);





