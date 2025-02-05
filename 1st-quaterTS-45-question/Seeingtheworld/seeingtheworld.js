//Question No:18
//1 : visiting place list not in alphabetic order.
var visitPlace = ["USA", "Finland", "Switzerland", "Qattar", "Australiya", "Japan"];
//console.log('list in original order:',visitPlace);
//2 : print the array in it's original order.
//console.log('Array not in Alphabetic order:',visitPlace);
//3 : print your array in alphabetic order without chamging in the original array.
//console.log('Alphabetic Order:',[...visitPlace] . sort());
//4 : Array is still in original order.
//console.log('Original Order after sorting the array:',visitPlace);
//5 : Reversed order,the array's order has changed.
//console.log('Reversed alplabetic order:',[...visitPlace] .sort().reverse());
//6 : Print array again in the original order after reverse.
console.log('Original Order after reversed:', visitPlace);
//7 : Reverse the list again to get back the original order.
visitPlace.reverse();
console.log('Back to the original order:', visitPlace);
//8 : Sort the array in alphabetical order.
visitPlace.sort();
console.log('Sort in the alphabetic order:', visitPlace);
//9 : Print the array again in the reverse alphabetic order.
visitPlace.sort(function (a, b) { return b.localeCompare(a); });
console.log('Sorted in the reverse alphabetic order:', visitPlace);
